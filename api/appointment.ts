export const config = {
  runtime: "nodejs",
};

import { z } from "zod";
import {
  applyCors,
  embassyMailbox,
  escapeHtml,
  formatDisplayDate,
  formatMultilineHtml,
  parseJsonBody,
  renderDetailsTable,
  renderEmailLayout,
  renderPlainText,
  sendEmail,
} from "./_mail";

const appointmentSchema = z.object({
  service: z.enum(["passport", "visa", "ids", "advisory", "trade"]),
  firstName: z.string().trim().min(1).max(80),
  lastName: z.string().trim().min(1).max(80),
  email: z.string().trim().email().max(160),
  phone: z.string().trim().min(5).max(40),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  time: z.string().regex(/^\d{2}:\d{2}(?:\s?-\s?\d{2}:\d{2})?$/),
  additionalInfo: z.string().trim().max(4000).optional().default(""),
  passportValidity: z.string().trim().max(60).optional().default(""),
  idValidity: z.string().trim().max(60).optional().default(""),
  birthDate: z.string().trim().max(40).optional().default(""),
  visaType: z.string().trim().max(80).optional().default(""),
  idsType: z.string().trim().max(80).optional().default(""),
});

export default async function handler(req: any, res: any) {
  const isAllowedOrigin = applyCors(req, res);

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (!isAllowedOrigin) {
    return res.status(403).json({ error: "Origin not allowed" });
  }

  if (req.method !== "POST") {
    return res.status(405).end("Method not allowed");
  }

  let body: z.infer<typeof appointmentSchema>;

  try {
    body = appointmentSchema.parse(parseJsonBody(req));
  } catch (error) {
    const validationError = error instanceof z.ZodError ? error.issues[0]?.message : "Invalid request payload";
    return res.status(400).json({ error: validationError ?? "Invalid request payload" });
  }

  const {
    service,
    firstName,
    lastName,
    email,
    phone,
    date,
    time,
    additionalInfo,
    passportValidity,
    idValidity,
    birthDate,
    visaType,
    idsType,
  } = body;

  try {
    const fullName = `${firstName} ${lastName}`;
    const bookingReference = `APT-${Date.now().toString().slice(-6)}`;

    const serviceLabels: Record<string, string> = {
      passport: "Passport Services",
      visa: "Visa Services",
      ids: "ID Cards",
      advisory: "Advisory Services",
      trade: "Trade & Investment",
    };

    const serviceLabel = serviceLabels[service] || service;

    const internalRows = [
      { label: "Reference", value: escapeHtml(bookingReference) },
      { label: "Service", value: escapeHtml(serviceLabel) },
      { label: "Applicant", value: escapeHtml(fullName) },
      { label: "Email", value: `<a href="mailto:${escapeHtml(email)}" style="color:#0f5b46;text-decoration:none;">${escapeHtml(email)}</a>` },
      { label: "Phone", value: escapeHtml(phone) },
      { label: "Preferred date", value: escapeHtml(formatDisplayDate(date)) },
      { label: "Preferred time", value: escapeHtml(time) },
      ...(birthDate ? [{ label: "Birth date", value: escapeHtml(birthDate) }] : []),
      ...(passportValidity ? [{ label: "Passport validity", value: escapeHtml(passportValidity) }] : []),
      ...(idValidity ? [{ label: "ID validity", value: escapeHtml(idValidity) }] : []),
      ...(visaType ? [{ label: "Visa type", value: escapeHtml(visaType) }] : []),
      ...(idsType ? [{ label: "ID document type", value: escapeHtml(idsType) }] : []),
      ...(additionalInfo ? [{ label: "Additional information", value: formatMultilineHtml(additionalInfo) }] : []),
    ];

    const confirmationRows = [
      { label: "Reference", value: bookingReference },
      { label: "Service", value: serviceLabel },
      { label: "Date", value: formatDisplayDate(date) },
      { label: "Time", value: time },
      { label: "Location", value: "Embassy of Mozambique, Stromstrasse 47, 10551 Berlin" },
    ];

    await sendEmail({
      fromName: "Embassy of Mozambique - Appointments",
      to: embassyMailbox(),
      replyTo: email,
      subject: `[Appointment Booking] ${serviceLabel} - ${fullName} (${bookingReference})`,
      html: renderEmailLayout({
        preheader: `New appointment booking for ${serviceLabel}`,
        eyebrow: "Appointment Request",
        title: "New Appointment Booking",
        intro: "A new appointment request has been submitted via the embassy website.",
        body: renderDetailsTable(internalRows),
        note: "Please confirm internally whether the requested slot is available before making manual calendar changes.",
      }),
      text: renderPlainText({
        title: "New Appointment Booking",
        intro: "A new appointment request has been submitted.",
        rows: internalRows.map((row) => ({ label: row.label, value: row.value.replace(/<[^>]+>/g, "") })),
        closing: "Reply to the applicant using the email above if any clarification is needed.",
      }),
    });

    await sendEmail({
      fromName: "Embassy of Mozambique in Berlin",
      to: email,
      subject: `Appointment request received (${bookingReference})`,
      html: renderEmailLayout({
        preheader: `Your appointment request ${bookingReference} has been received`,
        eyebrow: "Appointment Confirmation",
        title: "Your Appointment Request Has Been Received",
        intro: `Dear ${fullName}, thank you for booking an appointment with the Embassy of the Republic of Mozambique in Berlin.`,
        body: `
          <p style="margin:0 0 18px;font-size:15px;line-height:1.8;color:#334155;">
            We have received your requested appointment slot. This email confirms receipt of your request and the details submitted through the website.
          </p>
          ${renderDetailsTable(confirmationRows.map((row) => ({ label: row.label, value: escapeHtml(row.value) })))}
          <div style="margin-top:18px;padding:18px;border-radius:18px;background:#f8faf9;">
            <div style="font-size:14px;font-weight:700;color:#0f3b2e;margin-bottom:8px;">Before your visit</div>
            <div style="font-size:14px;line-height:1.8;color:#475569;">
              Please arrive 10 minutes early and bring all required supporting documents for ${escapeHtml(serviceLabel).toLowerCase()}.
            </div>
          </div>
        `,
      }),
      text: renderPlainText({
        title: "Your Appointment Request Has Been Received",
        intro: `Dear ${fullName}, thank you for booking an appointment with the Embassy of the Republic of Mozambique in Berlin.`,
        rows: confirmationRows,
        closing: "Please arrive 10 minutes early and bring all required supporting documents.",
      }),
    });

    return res.status(200).json({ ok: true, message: `Your appointment request has been received. Reference: ${bookingReference}` });
  } catch (error) {
    console.error("Appointment email error:", error);
    return res.status(500).json({ error: "We could not send your appointment request right now. Please try again shortly." });
  }
}