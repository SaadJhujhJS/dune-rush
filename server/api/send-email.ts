import { readBody, type H3Event } from 'h3';
import nodemailer from "nodemailer";

export default async (event: H3Event) => {
  
  try {
    const body = await readBody(event);
  
    if (!body.email || !body.message || !body.inquiryType) {
      return { success: false, message: "Missing required fields." };
    }
  
    const config = useRuntimeConfig();
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: config.SMTP_EMAIL,
        pass: config.SMTP_APP_PASSWORD,
      },
    });
    await transporter.sendMail({
      from: `"DuneRush Inquiry Form" <${config.SMTP_EMAIL}>`,
      to: "info@dunerush.com",
      subject: `Inquiry: ${body.inquiryType}`,
      html: `
        <h3>New Inquiry Received</h3>
        <p><strong>Name:</strong> ${body.firstName} ${body.lastName}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Phone:</strong> ${body.phone}</p>
        <p><strong>Inquiry Type:</strong> ${body.inquiryType}</p>
        <p><strong>Message:</strong><br/>${body.message}</p>
      `,
    });
    return { success: true, message: "Email sent!" };
  } catch (error) {
     console.error('SMTP error:', JSON.stringify(error, null, 2));
    return { success: false, message: "Failed to send email." };
  }
};
