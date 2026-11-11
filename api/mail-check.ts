import nodemailer from "nodemailer";
import { timingSafeEqual } from "node:crypto";

// Diagnostics endpoint for the SMTP setup.
// Protected: only answers when ?token= matches the MAIL_DEBUG_TOKEN env var.
// Never returns credentials, only presence flags and connection results.

type Req = { method?: string; headers?: Record<string, string | string[] | undefined>; query?: Record<string, string | string[] | undefined>; url?: string };
type Res = {
  setHeader: (name: string, value: string | string[]) => void;
  status: (code: number) => Res;
  json: (payload: unknown) => void;
  end: (body?: string) => void;
};

export default async function handler(req: Req, res: Res) {
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("Referrer-Policy", "no-referrer");

  if (req.method !== "GET" && req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const expected = process.env.MAIL_DEBUG_TOKEN;
  const authorization = req.headers?.authorization;
  const provided =
    (typeof authorization === "string" && authorization.startsWith("Bearer ") ? authorization.slice(7) : undefined) ??
    (typeof req.query?.token === "string" ? req.query.token : undefined) ??
    (req.url ? new URL(req.url, "http://localhost").searchParams.get("token") ?? undefined : undefined);

  if (!expected || !provided || Buffer.byteLength(provided) !== Buffer.byteLength(expected) || !timingSafeEqual(Buffer.from(provided), Buffer.from(expected))) {
    res.status(404).json({ error: "Not found" });
    return;
  }

  const user = process.env.CONTACT_EMAIL;
  const support = process.env.SUPPORT_EMAIL;
  const pass = process.env.CONTACT_EMAIL_PASSWORD;
  const host = process.env.SMTP_HOST || "smtp.ionos.de";

  const result: Record<string, unknown> = {
    nodeVersion: process.version,
    host,
    hasContactEmail: Boolean(user),
    hasSupportEmail: Boolean(support),
    hasContactPassword: Boolean(pass),
    forcedPort: process.env.SMTP_PORT || null,
  };

  // GET only verifies connectivity. POST sends one fixed diagnostic email;
  // never accept a recipient from the request and never fall back to CONTACT_EMAIL.
  if (req.method === "POST" && (!support || !/^[^\s@,;<>]+@[^\s@,;<>]+\.[^\s@,;<>]{2,}$/.test(support) || support.trim().toLowerCase() === user?.trim().toLowerCase())) {
    res.status(400).json({ error: "Configure SUPPORT_EMAIL as a single address different from CONTACT_EMAIL before testing." });
    return;
  }

  if (!user || !pass) {
    res.status(200).json({ ...result, attempts: [], note: "Credentials missing in environment" });
    return;
  }

  const ports = process.env.SMTP_PORT ? [Number(process.env.SMTP_PORT)] : [465, 587];
  const attempts: Array<{ port: number; ok: boolean; error?: string }> = [];

  for (const port of ports) {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
      requireTLS: port !== 465,
      connectionTimeout: 12000,
      greetingTimeout: 12000,
      socketTimeout: 20000,
    });
    try {
      await transporter.verify();
      if (req.method === "POST" && support) {
        await transporter.sendMail({
          from: { name: "Embassy website diagnostics", address: user },
          to: support,
          subject: "[TEST — SUPPORT ONLY] Website email check",
          text: "This is a diagnostic email for the website email configuration. No visitor request or appointment was created.",
          disableFileAccess: true,
          disableUrlAccess: true,
        });
      }
      attempts.push({ port, ok: true });
      if (req.method === "POST") break;
    } catch (error) {
      attempts.push({ port, ok: false, error: "SMTP connection or delivery failed" });
    } finally {
      transporter.close();
    }
  }

  const ok = attempts.some((attempt) => attempt.ok);
  res.status(ok ? 200 : 502).json({ ...result, attempts, testSent: req.method === "POST" && ok });
}
