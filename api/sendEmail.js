import nodemailer from 'nodemailer';
import { serialize } from 'cookie';
import { parse } from 'cookie';

const SES_HOST = process.env.SES_HOST;
const SES_PORT = process.env.SES_PORT;
const SES_ACCESS_KEY_ID = process.env.SES_ACCESS_KEY_ID;
const SES_SECRET_ACCESS_KEY = process.env.SES_SECRET_ACCESS_KEY;
const EMAIL = process.env.EMAIL;
const CONTACT_EMAIL_TO = process.env.CONTACT_EMAIL_TO;

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, sender, subject, message } = req.body;

    try {
      return await sendEmail(res, firstName, lastName, sender, subject, message);
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ error: 'Failed to send email.', details: error.message });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

async function sendEmail(res, firstName, lastName, sender, subject, message) {
  const transporter = nodemailer.createTransport({
    host: SES_HOST,
    port: SES_PORT,
    secure: false, // Use true for 465, false for other ports
    auth: {
      user: SES_ACCESS_KEY_ID,
      pass: SES_SECRET_ACCESS_KEY,
    },
  });

  const mailOptions = {
    from: `Portfolio Messenger <${EMAIL}>`,
    to: CONTACT_EMAIL_TO,
    subject: `From: ${firstName} ${lastName} \n\n${subject}`,
    text: `From: ${firstName} ${lastName} <${sender}>\n\n${message}`,
  };

  try {
    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent:', result);
    return res.status(200).json({ success: 'Email sent successfully.', result });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send email.', details: error.message });
  }
}
