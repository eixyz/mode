import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { title, firstName, lastName, email, subject, message } = req.body;

  if (!email || !message) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.CONTACT_EMAIL,
        pass: process.env.CONTACT_EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Embassy Website Demo" <${process.env.CONTACT_EMAIL}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `[Website Contact] ${subject}`,
      text: `
Title: ${title}
Name: ${firstName} ${lastName}
Email: ${email}

Message:
${message}
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Email failed" });
  }
}