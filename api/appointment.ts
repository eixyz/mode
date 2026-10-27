import nodemailer from "nodemailer";

// Self-contained Vercel serverless function (no relative imports on purpose).

type Req = { method?: string; body?: unknown };
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

const internalRecipients = () => {
  const primary = process.env.CONTACT_EMAIL;
  const secondary = process.env.SUPPORT_EMAIL;
  if (!primary) throw new Error("CONTACT_EMAIL is not configured");
  return secondary ? [primary, secondary] : [primary];
};

const host = () => process.env.SMTP_HOST || "smtp.ionos.de";

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
            from: { name: message.fromName, address: user },
            to,
            replyTo: message.replyTo,
            subject: message.subject,
            html: message.html,
            text: message.text,
            disableFileAccess: true,
            disableUrlAccess: true,
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

const layout = ({ eyebrow, title, intro, body }: { eyebrow: string; title: string; intro: string; body: string }) =>
  `<!doctype html><html lang="en"><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width,initial-scale=1" /><title>${escapeHtml(title)}</title></head>
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

const SERVICE_LABELS: Record<string, string> = {
  passport: "Passport service",
  visa: "Visa service",
  ids: "Identification documents",
  advisory: "Advisory / legal assistance",
  trade: "Trade and investment",
};

const formatDisplayDate = (iso: string) => {
  const [y, m, d] = iso.split("-").map(Number);
  if (!y || !m || !d) return iso;
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-GB", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
};

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
    if (raw.agreedToTerms !== true as unknown) {
      res.status(400).json({ error: "Please agree to the Terms & Conditions." });
      return;
    }
    const str = (value: unknown, max: number) => String(value ?? "").trim().slice(0, max);

    const service = str(raw.service, 30);
    const firstName = str(raw.firstName, 80);
    const lastName = str(raw.lastName, 80);
    const email = str(raw.email, 160);
    const phone = str(raw.phone, 60);
    const date = str(raw.date, 20);
    const time = str(raw.time, 20);
    const passportValidity = str(raw.passportValidity, 40);
    const idValidity = str(raw.idValidity, 40);
    const birthDate = str(raw.birthDate, 40);
    const visaType = str(raw.visaType, 80);
    const idsType = str(raw.idsType, 80);
    const additionalInfo = str(raw.additionalInfo, 3000);

    if (!SERVICE_LABELS[service]) {
      res.status(400).json({ error: "Please select a valid service." });
      return;
    }
    if (!firstName || !lastName) {
      res.status(400).json({ error: "Please provide your first and last name." });
      return;
    }
    if (!/^[^\s@,;<>]+@[^\s@,;<>]+\.[^\s@,;<>]{2,}$/.test(email)) {
      res.status(400).json({ error: "Please provide a valid email address." });
      return;
    }
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !time) {
      res.status(400).json({ error: "Please select an appointment date and time." });
      return;
    }

    const serviceLabel = SERVICE_LABELS[service];
    const fullName = `${firstName} ${lastName}`;
    const reference = `APT-${Date.now().toString().slice(-6)}`;

    const internalRows = [
      { label: "Reference", value: escapeHtml(reference) },
      { label: "Service", value: escapeHtml(serviceLabel) },
      { label: "Date", value: escapeHtml(formatDisplayDate(date)) },
      { label: "Time", value: escapeHtml(time) },
      { label: "Name", value: escapeHtml(fullName) },
      { label: "Email", value: escapeHtml(email) },
      { label: "Phone", value: escapeHtml(phone) },
      ...(birthDate ? [{ label: "Date of birth", value: escapeHtml(birthDate) }] : []),
      ...(passportValidity ? [{ label: "Passport validity", value: escapeHtml(passportValidity) }] : []),
      ...(idValidity ? [{ label: "ID validity", value: escapeHtml(idValidity) }] : []),
      ...(visaType ? [{ label: "Visa type", value: escapeHtml(visaType) }] : []),
      ...(idsType ? [{ label: "ID document type", value: escapeHtml(idsType) }] : []),
      ...(additionalInfo ? [{ label: "Additional information", value: nl2br(additionalInfo) }] : []),
    ];

    const confirmationRows = [
      { label: "Reference", value: escapeHtml(reference) },
      { label: "Service", value: escapeHtml(serviceLabel) },
      { label: "Date", value: escapeHtml(formatDisplayDate(date)) },
      { label: "Time", value: escapeHtml(time) },
      { label: "Location", value: "Embassy of Mozambique, Stromstrasse 47, 10551 Berlin" },
    ];

    await sendAll([
      {
        fromName: "Embassy of Mozambique - Appointments",
        to: internalRecipients(),
        replyTo: email,
        subject: `[Appointment Request] ${serviceLabel} - ${fullName} (${reference})`,
        html: layout({
          eyebrow: "Appointment Request",
          title: "New Appointment Request",
          intro: "A new appointment request has been submitted via the embassy website.",
          body: table(internalRows),
        }),
        text: plain("New Appointment Request", internalRows),
      },
      {
        fromName: "Embassy of Mozambique in Berlin",
        to: email,
        subject: `Appointment request received (${reference})`,
        html: layout({
          eyebrow: "Appointment Confirmation",
          title: "Your Appointment Request Has Been Received",
          intro: `Dear ${fullName}, thank you for requesting an appointment with the Embassy of the Republic of Mozambique in Berlin.`,
          body: `<p style="margin:0 0 16px;font-size:15px;line-height:1.8;color:#334155;">This email confirms receipt of your request. The embassy will contact you if the requested slot needs to be changed.</p>${table(confirmationRows)}<p style="margin:16px 0 0;font-size:14px;line-height:1.8;color:#475569;">Please arrive 10 minutes early and bring all required supporting documents.</p>`,
        }),
        text: plain("Your Appointment Request Has Been Received", confirmationRows),
      },
    ]);

    res.status(200).json({ ok: true, message: `Your appointment request has been received. Reference: ${reference}` });
  } catch (error) {
    const details = error instanceof Error ? error.message : String(error);
    console.error("APPOINTMENT FORM ERROR:", details);
    res.status(500).json({
      error: "We could not send your appointment request right now. Please try again shortly.",
    });
  }
}
