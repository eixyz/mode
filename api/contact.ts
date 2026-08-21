import nodemailer from "nodemailer";

// Self-contained Vercel serverless function.
// No relative imports and no extra dependencies on purpose:
// ESM + Vercel's Node runtime fails at module load when a route imports a
// sibling ".ts" file, which surfaced as FUNCTION_INVOCATION_FAILED.

type Req = { method?: string; body?: unknown; headers?: Record<string, string | string[] | undefined> };
type Res = {
  setHeader: (name: string, value: string | string[]) => void;
  status: (code: number) => Res;
  json: (payload: unknown) => void;
  end: (body?: string) => void;
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const nl2br = (value: string) => escapeHtml(value).replace(/\r?\n/g, "<br />");

const readCreds = () => {
  const user = process.env.CONTACT_EMAIL;
  const pass = process.env.CONTACT_EMAIL_PASSWORD;
  if (!user || !pass) throw new Error("CONTACT_EMAIL or CONTACT_EMAIL_PASSWORD is not configured");
  return { user, pass };
};

const host = () => process.env.SMTP_HOST || "smtp.ionos.de";

// IONOS accepts both 465 (implicit TLS) and 587 (STARTTLS).
// Port 465 is far more reliable from serverless platforms, so it is tried first.
const transportCandidates = () => {
  const forced = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
  const ports = forced ? [forced] : [465, 587];
  return ports.map((port) => ({ port, secure: port === 465 }));
};

const sendAll = async (
  messages: Array<{ to: string | string[]; subject: string; html: string; text: string; replyTo?: string; fromName: string }>,
) => {
  const { user, pass } = readCreds();
  const errors: string[] = [];

  for (const candidate of transportCandidates()) {
    const transporter = nodemailer.createTransport({
      host: host(),
      port: candidate.port,
      secure: candidate.secure,
      auth: { user, pass },
      requireTLS: !candidate.secure,
      connectionTimeout: 12000,
      greetingTimeout: 12000,
      socketTimeout: 20000,
    });

    try {
      await transporter.verify();
      for (const message of messages) {
        const recipients = Array.isArray(message.to) ? message.to : [message.to];
        for (const to of recipients) {
          await transporter.sendMail({
            from: `${message.fromName} <${user}>`,
            to,
            replyTo: message.replyTo,
            subject: message.subject,
            html: message.html,
            text: message.text,
          });
        }
      }
      return { port: candidate.port };
    } catch (error) {
      errors.push(`${host()}:${candidate.port} -> ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  throw new Error(errors.join(" | "));
};

const layout = ({
  eyebrow,
  title,
  intro,
  body,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  body: string;
}) => `<!doctype html><html lang="en"><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width,initial-scale=1" /><title>${escapeHtml(title)}</title></head>
<body style="margin:0;padding:0;background:#f4f1e8;font-family:Arial,Helvetica,sans-serif;color:#14281f;">
<table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#f4f1e8;padding:24px 12px;"><tr><td align="center">
<table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:660px;background:#ffffff;border-radius:24px;overflow:hidden;">
<tr><td style="padding:30px 30px 26px;background:#0f5b46;color:#ffffff;">
<div style="font-size:12px;letter-spacing:0.2em;text-transform:uppercase;opacity:0.85;">${escapeHtml(eyebrow)}</div>
<h1 style="margin:12px 0 10px;font-size:26px;line-height:1.25;">${escapeHtml(title)}</h1>
<p style="margin:0;font-size:15px;line-height:1.7;color:rgba(255,255,255,0.9);">${escapeHtml(intro)}</p>
</td></tr>
<tr><td style="padding:26px 30px 20px;">${body}</td></tr>
<tr><td style="padding:22px 30px 28px;background:#fbfaf7;border-top:1px solid #ece7da;font-size:13px;line-height:1.8;color:#5b665f;">
<strong style="color:#0f3b2e;">Embassy of the Republic of Mozambique</strong><br />Stromstrasse 47, 10551 Berlin, Germany<br />Phone: +49 30 3987 6500
</td></tr></table></td></tr></table></body></html>`;

const table = (rows: Array<{ label: string; value: string }>) => `
<table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;width:100%;border:1px solid #e5e7eb;border-radius:14px;overflow:hidden;">
${rows
  .map(
    (row, index) => `<tr>
<td style="padding:12px 16px;width:34%;font-size:13px;font-weight:700;color:#0f3b2e;background:${index % 2 === 0 ? "#f8faf9" : "#f2f7f4"};border-bottom:1px solid #e5e7eb;vertical-align:top;">${escapeHtml(row.label)}</td>
<td style="padding:12px 16px;font-size:14px;line-height:1.6;color:#1f2937;border-bottom:1px solid #e5e7eb;vertical-align:top;">${row.value}</td>
</tr>`,
  )
  .join("")}
</table>`;

const plain = (title: string, rows: Array<{ label: string; value: string }>) =>
  [title, "", ...rows.map((row) => `${row.label}: ${row.value.replace(/<[^>]+>/g, "")}`)].join("\n");

export default async function handler(req: Req, res: Res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const raw = (typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {}) as Record<string, string>;
    const str = (value: unknown, max: number) => String(value ?? "").trim().slice(0, max);

    const title = str(raw.title, 40);
    const firstName = str(raw.firstName, 80);
    const lastName = str(raw.lastName, 80);
    const email = str(raw.email, 160);
    const subject = str(raw.subject, 160) || "General enquiry";
    const message = str(raw.message, 5000);

    if (!firstName || !lastName) {
      res.status(400).json({ error: "Please provide your first and last name." });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      res.status(400).json({ error: "Please provide a valid email address." });
      return;
    }
    if (message.length < 10) {
      res.status(400).json({ error: "Please provide a message with at least 10 characters." });
      return;
    }

    const fullName = `${title ? title + " " : ""}${firstName} ${lastName}`.trim();
    const reference = `CNT-${Date.now().toString().slice(-6)}`;
    const mailbox = readCreds().user;

    const internalRows = [
      { label: "Reference", value: escapeHtml(reference) },
      { label: "Name", value: escapeHtml(fullName) },
      { label: "Email", value: escapeHtml(email) },
      { label: "Subject", value: escapeHtml(subject) },
      { label: "Message", value: nl2br(message) },
    ];
    const confirmationRows = [
      { label: "Reference", value: escapeHtml(reference) },
      { label: "Subject", value: escapeHtml(subject) },
      { label: "Reply time", value: "Usually within 2 to 3 business days" },
    ];

    await sendAll([
      {
        fromName: "Embassy of Mozambique - Website",
        to: mailbox,
        replyTo: email,
        subject: `[Website Contact] ${subject} (${reference})`,
        html: layout({
          eyebrow: "Website Contact",
          title: "New Contact Request",
          intro: "A new website enquiry has been submitted and is ready for follow-up.",
          body: table(internalRows),
        }),
        text: plain("New Contact Request", internalRows),
      },
      {
        fromName: "Embassy of Mozambique in Berlin",
        to: email,
        subject: `We received your enquiry (${reference})`,
        html: layout({
          eyebrow: "Contact Confirmation",
          title: "Your Message Has Been Received",
          intro: `Dear ${fullName}, thank you for contacting the Embassy of the Republic of Mozambique in Berlin.`,
          body: `<p style="margin:0 0 16px;font-size:15px;line-height:1.8;color:#334155;">Our team has received your enquiry and will review it shortly.</p>${table(confirmationRows)}<p style="margin:16px 0 0;font-size:14px;line-height:1.8;color:#475569;">If your matter is urgent, please call the embassy during opening hours and mention the reference above.</p>`,
        }),
        text: plain("Your Message Has Been Received", confirmationRows),
      },
    ]);

    res.status(200).json({ ok: true, message: `Your message has been sent. Reference: ${reference}` });
  } catch (error) {
    const details = error instanceof Error ? error.message : String(error);
    console.error("CONTACT FORM ERROR:", details);
    res.status(500).json({
      error: "We could not send your message right now. Please try again shortly.",
      details,
    });
  }
}
