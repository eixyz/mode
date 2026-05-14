import process from "node:process";
import nodemailer from "nodemailer";

type HeaderValue = string | string[] | undefined;

export type ApiRequest = {
  method?: string;
  body?: unknown;
  headers?: Record<string, HeaderValue>;
};

export type ApiResponse = {
  setHeader: (name: string, value: string | string[]) => void;
  status: (code: number) => ApiResponse;
  json: (payload: unknown) => void;
  end: (body?: string) => void;
};

export type DetailRow = {
  label: string;
  value: string;
};

const embassyAddress = [
  "Embassy of the Republic of Mozambique",
  "Stromstrasse 47",
  "10551 Berlin, Germany",
];

const footerMeta = [
  "Phone: +49 30 3987 6500",
  "Email: info@embassy-of-mozambique.de",
];

const originEnvKeys = ["WEBSITE_ORIGIN", "PUBLIC_SITE_URL", "APP_URL"] as const;

const getOriginValue = (value: HeaderValue) => {
  if (Array.isArray(value)) {
    return value[0];
  }

  return value;
};

const getConfiguredOrigins = () => {
  const configured = originEnvKeys
    .map((key) => process.env[key])
    .filter((value): value is string => Boolean(value))
    .map((value) => value.replace(/\/$/, ""));

  if (process.env.VERCEL_URL) {
    configured.push(`https://${process.env.VERCEL_URL.replace(/\/$/, "")}`);
  }

  return [...new Set(configured)];
};

export const applyCors = (req: ApiRequest, res: ApiResponse) => {
  const origin = getOriginValue(req.headers?.origin);
  const allowedOrigins = getConfiguredOrigins();
  const isAllowedOrigin = !origin || allowedOrigins.length === 0 || allowedOrigins.includes(origin.replace(/\/$/, ""));

  res.setHeader("Vary", "Origin");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (origin && isAllowedOrigin) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  } else if (!origin && allowedOrigins.length === 0) {
    res.setHeader("Access-Control-Allow-Origin", "*");
  }

  return isAllowedOrigin;
};

export const parseJsonBody = <T>(req: ApiRequest): T => {
  if (typeof req.body === "string") {
    return JSON.parse(req.body) as T;
  }

  return (req.body ?? {}) as T;
};

const getMailCredentials = () => {
  const user = process.env.CONTACT_EMAIL;
  const pass = process.env.CONTACT_EMAIL_PASSWORD;

  if (!user || !pass) {
    throw new Error("Missing CONTACT_EMAIL or CONTACT_EMAIL_PASSWORD");
  }

  return { user, pass };
};

const createTransporter = () => {
  const { user, pass } = getMailCredentials();

  return nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });
};

export const embassyMailbox = () => getMailCredentials().user;

export const sendEmail = async ({
  to,
  subject,
  html,
  text,
  replyTo,
  fromName,
}: {
  to: string;
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
  fromName: string;
}) => {
  const transporter = createTransporter();
  const from = `${JSON.stringify(fromName).slice(1, -1)} <${embassyMailbox()}>`;

  await transporter.sendMail({
    from,
    to,
    replyTo,
    subject,
    html,
    text,
  });
};

export const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");

export const formatMultilineHtml = (value: string) => escapeHtml(value).replace(/\r?\n/g, "<br />");

export const formatDisplayDate = (value: string) => {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("en-GB", {
    weekday: "short",
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date);
};

export const renderDetailsTable = (rows: DetailRow[]) => `
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;width:100%;background:#ffffff;border:1px solid #e5e7eb;border-radius:18px;overflow:hidden;">
    ${rows
      .map(
        (row, index) => `
          <tr>
            <td style="padding:14px 18px;width:34%;font-size:13px;font-weight:700;color:#0f3b2e;background:${index % 2 === 0 ? "#f8faf9" : "#f2f7f4"};border-bottom:1px solid #e5e7eb;vertical-align:top;">${escapeHtml(row.label)}</td>
            <td style="padding:14px 18px;font-size:14px;line-height:1.6;color:#1f2937;background:#ffffff;border-bottom:1px solid #e5e7eb;vertical-align:top;">${row.value}</td>
          </tr>`,
      )
      .join("")}
  </table>
`;

export const renderEmailLayout = ({
  preheader,
  eyebrow,
  title,
  intro,
  body,
  note,
}: {
  preheader: string;
  eyebrow: string;
  title: string;
  intro: string;
  body: string;
  note?: string;
}) => `
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${escapeHtml(title)}</title>
    </head>
    <body style="margin:0;padding:0;background:#f4f1e8;font-family:Arial,Helvetica,sans-serif;color:#14281f;">
      <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(preheader)}</div>
      <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#f4f1e8;padding:24px 12px;">
        <tr>
          <td align="center">
            <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:680px;background:#ffffff;border-radius:28px;overflow:hidden;box-shadow:0 18px 40px rgba(15,59,46,0.12);">
              <tr>
                <td style="padding:32px 32px 28px;background:linear-gradient(135deg,#0f5b46 0%,#157152 60%,#b9972f 100%);color:#ffffff;">
                  <div style="font-size:12px;letter-spacing:0.22em;text-transform:uppercase;opacity:0.82;">${escapeHtml(eyebrow)}</div>
                  <h1 style="margin:14px 0 10px;font-size:30px;line-height:1.2;font-weight:700;">${escapeHtml(title)}</h1>
                  <p style="margin:0;max-width:520px;font-size:15px;line-height:1.7;color:rgba(255,255,255,0.88);">${escapeHtml(intro)}</p>
                </td>
              </tr>
              <tr>
                <td style="padding:28px 32px 16px;background:#ffffff;">
                  ${body}
                  ${note ? `<div style="margin-top:20px;padding:16px 18px;border-radius:16px;background:#f8faf9;color:#355046;font-size:13px;line-height:1.7;">${note}</div>` : ""}
                </td>
              </tr>
              <tr>
                <td style="padding:24px 32px 30px;background:#fbfaf7;border-top:1px solid #ece7da;">
                  <div style="font-size:14px;font-weight:700;color:#0f3b2e;">${embassyAddress[0]}</div>
                  <div style="margin-top:6px;font-size:13px;line-height:1.7;color:#5b665f;">${embassyAddress.slice(1).join("<br />")}</div>
                  <div style="margin-top:14px;font-size:12px;line-height:1.8;color:#6b7280;">${footerMeta.join("<br />")}</div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>
`;

export const renderPlainText = ({
  title,
  intro,
  rows,
  closing,
}: {
  title: string;
  intro: string;
  rows: DetailRow[];
  closing?: string;
}) => {
  const rowText = rows.map((row) => `${row.label}: ${row.value.replace(/<br\s*\/?/gi, "\n")}`).join("\n");

  return [
    title,
    "",
    intro,
    "",
    rowText,
    "",
    closing,
    "",
    embassyAddress.join("\n"),
    footerMeta.join("\n"),
  ]
    .filter(Boolean)
    .join("\n");
};