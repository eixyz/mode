import { z } from "zod";
import {
  applyCors,
  embassyMailbox,
  escapeHtml,
  formatMultilineHtml,
  parseJsonBody,
  renderDetailsTable,
  renderEmailLayout,
  renderPlainText,
  sendEmail,
} from "./_mail";

const contactSchema = z.object({
  title: z.string().trim().max(40).optional().default(""),
  firstName: z.string().trim().min(1).max(80),
  lastName: z.string().trim().min(1).max(80),
  email: z.string().trim().email().max(160),
  subject: z.string().trim().max(160).optional().default("General enquiry"),
  message: z.string().trim().min(10).max(5000),
});

export default async function handler(req: any, res: any) {
  const isAllowedOrigin = applyCors(req, res);

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (!isAllowedOrigin) {
    res.status(403).json({ error: "Origin not allowed" });
    return;
  }

  if (req.method !== "POST") {
    res.status(405).end("Method not allowed");
    return;
  }

  let payload: z.infer<typeof contactSchema>;

  try {
    payload = contactSchema.parse(parseJsonBody(req));
  } catch (error) {
    const validationError = error instanceof z.ZodError ? error.issues[0]?.message : "Invalid request payload";
    res.status(400).json({ error: validationError ?? "Invalid request payload" });
    return;
  }

  const { title, firstName, lastName, email, subject, message } = payload;
  const fullName = `${title ? title + " " : ""}${firstName} ${lastName}`.trim();
  const safeMessage = formatMultilineHtml(message);
  const reference = `CNT-${Date.now().toString().slice(-6)}`;

  const internalRows = [
    { label: "Reference", value: escapeHtml(reference) },
    { label: "Name", value: escapeHtml(fullName) },
    { label: "Email", value: `<a href="mailto:${escapeHtml(email)}" style="color:#0f5b46;text-decoration:none;">${escapeHtml(email)}</a>` },
    { label: "Subject", value: escapeHtml(subject || "General enquiry") },
    { label: "Message", value: safeMessage },
  ];

  const confirmationRows = [
    { label: "Reference", value: escapeHtml(reference) },
    { label: "Subject", value: escapeHtml(subject || "General enquiry") },
    { label: "Reply time", value: "Usually within 2 to 3 business days" },
  ];

  try {
    await sendEmail({
      fromName: "Embassy of Mozambique - Website",
      to: embassyMailbox(),
      replyTo: email,
      subject: `[Website Contact] ${subject || "General enquiry"} (${reference})`,
      html: renderEmailLayout({
        preheader: `New contact request from ${fullName}`,
        eyebrow: "Website Contact",
        title: "New Contact Request",
        intro: "A new website enquiry has been submitted and is ready for follow-up by the embassy team.",
        body: renderDetailsTable(internalRows),
        note: "Use the reply-to address above when responding so the applicant receives the answer directly.",
      }),
      text: renderPlainText({
        title: "New Contact Request",
        intro: "A new website enquiry has been submitted.",
        rows: [
          { label: "Reference", value: reference },
          { label: "Name", value: fullName },
          { label: "Email", value: email },
          { label: "Subject", value: subject || "General enquiry" },
          { label: "Message", value: message },
        ],
        closing: "Reply to the applicant using the email address above.",
      }),
    });

    await sendEmail({
      fromName: "Embassy of Mozambique in Berlin",
      to: email,
      subject: `We received your enquiry (${reference})`,
      html: renderEmailLayout({
        preheader: `Your enquiry ${reference} has been received`,
        eyebrow: "Contact Confirmation",
        title: "Your Message Has Been Received",
        intro: `Dear ${fullName}, thank you for contacting the Embassy of the Republic of Mozambique in Berlin.`,
        body: `
          <p style="margin:0 0 18px;font-size:15px;line-height:1.8;color:#334155;">
            Our team has received your enquiry and will review it shortly.
          </p>
          ${renderDetailsTable(confirmationRows)}
          <p style="margin:18px 0 0;font-size:14px;line-height:1.8;color:#475569;">
            If your matter is urgent, please call the embassy directly during opening hours and mention the reference above.
          </p>
        `,
      }),
      text: renderPlainText({
        title: "Your Message Has Been Received",
        intro: `Dear ${fullName}, thank you for contacting the Embassy of the Republic of Mozambique in Berlin.`,
        rows: confirmationRows.map((row) => ({ label: row.label, value: row.value.replace(/<[^>]+>/g, "") })),
        closing: "If your matter is urgent, please call the embassy during opening hours and mention the reference above.",
      }),
    });

    res.status(200).json({ ok: true, message: `Your message has been sent. Reference: ${reference}` });
  } catch (err) {
    console.error("EMAIL ERROR:", err);
    res.status(500).json({ error: "We could not send your message right now. Please try again shortly." });
  }
}