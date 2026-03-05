export const config = {
  runtime: "nodejs",
};

import nodemailer from "nodemailer";

export default async function handler(req: any, res: any) {
  // --- CORS ---
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).end("Method not allowed");
  }

  // --- Safe body parsing ---
  const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;

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

  if (!email || !firstName || !lastName || !service || !date || !time) {
    return res.status(400).end("Missing required fields");
  }

  try {
    // --- Mail transporter ---
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.CONTACT_EMAIL,
        pass: process.env.CONTACT_EMAIL_PASSWORD,
      },
    });

    const fullName = `${firstName} ${lastName}`;

    const serviceLabels: Record<string, string> = {
      passport: "Passport Services",
      visa: "Visa Services",
      ids: "ID Cards",
      advisory: "Advisory Services",
      trade: "Trade & Investment",
    };

    const serviceLabel = serviceLabels[service] || service;

    const extraFields: string[] = [];
    if (birthDate) extraFields.push(`<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Birth Date</td><td style="padding:8px;border:1px solid #ddd;">${birthDate}</td></tr>`);
    if (passportValidity) extraFields.push(`<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Passport Validity</td><td style="padding:8px;border:1px solid #ddd;">${passportValidity}</td></tr>`);
    if (idValidity) extraFields.push(`<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">ID Validity</td><td style="padding:8px;border:1px solid #ddd;">${idValidity}</td></tr>`);
    if (visaType) extraFields.push(`<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Visa Type</td><td style="padding:8px;border:1px solid #ddd;">${visaType}</td></tr>`);
    if (idsType) extraFields.push(`<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">ID Type</td><td style="padding:8px;border:1px solid #ddd;">${idsType}</td></tr>`);
    if (additionalInfo) extraFields.push(`<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Additional Info</td><td style="padding:8px;border:1px solid #ddd;">${additionalInfo}</td></tr>`);

    // --- Email to Embassy ---
    await transporter.sendMail({
      from: `"Embassy of Mozambique - Appointments" <${process.env.CONTACT_EMAIL}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `[Appointment Booking] ${serviceLabel} - ${fullName} - ${date} ${time}`,
      html: `
        <h2>New Appointment Booking</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Service</td><td style="padding:8px;border:1px solid #ddd;">${serviceLabel}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Name</td><td style="padding:8px;border:1px solid #ddd;">${fullName}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Email</td><td style="padding:8px;border:1px solid #ddd;">${email}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Phone</td><td style="padding:8px;border:1px solid #ddd;">${phone || "N/A"}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Date</td><td style="padding:8px;border:1px solid #ddd;">${date}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Time</td><td style="padding:8px;border:1px solid #ddd;">${time}</td></tr>
          ${extraFields.join("")}
        </table>
      `,
    });

    // --- Confirmation email to applicant ---
    await transporter.sendMail({
      from: `"Embassy of Mozambique in Berlin" <${process.env.CONTACT_EMAIL}>`,
      to: email,
      subject: `Appointment Confirmation - ${serviceLabel} - ${date} at ${time}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
          <div style="background:#006B3F;padding:20px;text-align:center;">
            <h1 style="color:white;margin:0;font-size:20px;">Embassy of the Republic of Mozambique</h1>
            <p style="color:#FFD700;margin:4px 0 0;">Berlin, Germany</p>
          </div>
          <div style="padding:24px;border:1px solid #e5e5e5;border-top:none;">
            <p>Dear ${fullName},</p>
            <p>Your appointment has been successfully booked.</p>
            <table style="border-collapse:collapse;width:100%;margin:16px 0;">
              <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Service</td><td style="padding:8px;border:1px solid #ddd;">${serviceLabel}</td></tr>
              <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Date</td><td style="padding:8px;border:1px solid #ddd;">${date}</td></tr>
              <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Time</td><td style="padding:8px;border:1px solid #ddd;">${time}</td></tr>
            </table>
            <p><strong>Location:</strong><br>Stromstraße 47, 10551 Berlin</p>
            <p>Please arrive 10 minutes early and bring all required documents.</p>
            <hr>
            <p style="font-size:13px;color:#666;">
              Tel: +49 30 3987 6500<br>
              Email: info@embassy-of-mozambique.de
            </p>
          </div>
        </div>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Appointment email error:", error);
    return res.status(500).end("Booking email failed");
  }
}