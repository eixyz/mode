import nodemailer from "nodemailer";

export default async function handler(req: any, res: any) {
  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.statusCode = 200;
    return res.end();
  }

  if (req.method !== "POST") {
    res.statusCode = 405;
    return res.end("Method not allowed");
  }

  const { title, firstName, lastName, email, subject, message } = req.body;

  if (!email || !message) {
    res.statusCode = 400;
    return res.end("Missing required fields");
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.CONTACT_EMAIL,
        pass: process.env.CONTACT_EMAIL_PASSWORD,
      },
    });

    const fullName = `${title ? title + " " : ""}${firstName} ${lastName}`.trim();

    // Send to embassy
    await transporter.sendMail({
      from: `"Embassy of Mozambique - Website" <${process.env.CONTACT_EMAIL}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `[Website Contact] ${subject || "Contact Form"}`,
      text: `New contact form submission:\n\nTitle: ${title || "N/A"}\nName: ${firstName} ${lastName}\nEmail: ${email}\n\nSubject: ${subject || "N/A"}\n\nMessage:\n${message}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Name</td><td style="padding:8px;border:1px solid #ddd;">${fullName}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Email</td><td style="padding:8px;border:1px solid #ddd;">${email}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Subject</td><td style="padding:8px;border:1px solid #ddd;">${subject || "N/A"}</td></tr>
        </table>
        <h3>Message:</h3>
        <p style="white-space:pre-wrap;">${message}</p>
      `,
    });

    // Send confirmation to sender
    await transporter.sendMail({
      from: `"Embassy of Mozambique in Berlin" <${process.env.CONTACT_EMAIL}>`,
      to: email,
      subject: "Thank you for contacting the Embassy of Mozambique",
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
          <div style="background:#006B3F;padding:20px;text-align:center;">
            <h1 style="color:white;margin:0;font-size:20px;">Embassy of the Republic of Mozambique</h1>
            <p style="color:#FFD700;margin:4px 0 0;">Berlin, Germany</p>
          </div>
          <div style="padding:24px;border:1px solid #e5e5e5;border-top:none;">
            <p>Dear ${fullName || "Sir/Madam"},</p>
            <p>Thank you for contacting the Embassy of the Republic of Mozambique in Berlin. We have received your message regarding "<strong>${subject || "General Inquiry"}</strong>".</p>
            <p>Our team will review your inquiry and respond within <strong>2-3 business days</strong>.</p>
            <hr style="border:none;border-top:1px solid #e5e5e5;margin:20px 0;">
            <p style="font-size:13px;color:#666;">
              <strong>Embassy of the Republic of Mozambique</strong><br>
              Stromstraße 47, 10551 Berlin, Germany<br>
              Tel: +49 30 3987 6500<br>
              Email: info@embassy-of-mozambique.de
            </p>
          </div>
        </div>
      `,
    });

    res.statusCode = 200;
    res.end(JSON.stringify({ ok: true }));
  } catch (err) {
    console.error(err);
    res.statusCode = 500;
    res.end("Email failed");
  }
}
