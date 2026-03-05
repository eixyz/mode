import nodemailer from "nodemailer";

export default async function handler(req: any, res: any) {
  // CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    res.status(405).end("Method not allowed");
    return;
  }

  const { title, firstName, lastName, email, subject, message } = req.body;

  if (!email || !message) {
    res.status(400).json({ error: "Missing required fields" });
    return;
  }

  const fullName = `${title ? title + " " : ""}${firstName} ${lastName}`.trim();

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // REQUIRED
      auth: {
        user: process.env.CONTACT_EMAIL,
        pass: process.env.CONTACT_EMAIL_PASSWORD,
      },
    });

    // 1️⃣ Send to embassy
    await transporter.sendMail({
      from: `"Embassy of Mozambique - Website" <${process.env.CONTACT_EMAIL}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `[Website Contact] ${subject || "Contact Form"}`,
      text: `New contact form submission:

Name: ${fullName}
Email: ${email}
Subject: ${subject || "N/A"}

Message:
${message}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space:pre-wrap;">${message}</p>
      `,
    });

    // 2️⃣ Confirmation to sender
    await transporter.sendMail({
      from: `"Embassy of Mozambique in Berlin" <${process.env.CONTACT_EMAIL}>`,
      to: email,
      subject: "Thank you for contacting the Embassy of Mozambique",
      html: `
        <p>Dear ${fullName || "Sir/Madam"},</p>
        <p>Thank you for contacting the Embassy of the Republic of Mozambique in Berlin.</p>
        <p>We will respond within <strong>2–3 business days</strong>.</p>
        <p>Kind regards,<br><strong>Embassy of the Republic of Mozambique</strong></p>
      `,
    });

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error("EMAIL ERROR:", err);
    res.status(500).json({ error: "Email failed" });
  }
}