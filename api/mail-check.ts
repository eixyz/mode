import nodemailer from "nodemailer";

// Diagnostics endpoint for the SMTP setup.
// Protected: only answers when ?token= matches the MAIL_DEBUG_TOKEN env var.
// Never returns credentials, only presence flags and connection results.

type Req = { method?: string; query?: Record<string, string | string[] | undefined>; url?: string };
type Res = {
  setHeader: (name: string, value: string | string[]) => void;
  status: (code: number) => Res;
  json: (payload: unknown) => void;
  end: (body?: string) => void;
};

export default async function handler(req: Req, res: Res) {
  res.setHeader("Cache-Control", "no-store");

  const expected = process.env.MAIL_DEBUG_TOKEN;
  const provided =
    (typeof req.query?.token === "string" ? req.query.token : undefined) ??
    (req.url ? new URL(req.url, "http://localhost").searchParams.get("token") ?? undefined : undefined);

  if (!expected || provided !== expected) {
    res.status(404).json({ error: "Not found" });
    return;
  }

  const user = process.env.CONTACT_EMAIL;
  const pass = process.env.CONTACT_EMAIL_PASSWORD;
  const host = process.env.SMTP_HOST || "smtp.ionos.de";

  const result: Record<string, unknown> = {
    nodeVersion: process.version,
    host,
    hasContactEmail: Boolean(user),
    hasContactPassword: Boolean(pass),
    forcedPort: process.env.SMTP_PORT || null,
  };

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
      attempts.push({ port, ok: true });
    } catch (error) {
      attempts.push({ port, ok: false, error: error instanceof Error ? error.message : String(error) });
    }
  }

  res.status(200).json({ ...result, attempts });
}
