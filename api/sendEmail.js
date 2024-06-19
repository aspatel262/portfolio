const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const SES_HOST = process.env.SES_HOST;
const SES_PORT = process.env.SES_PORT;
const SES_ACCESS_KEY_ID = process.env.SES_ACCESS_KEY_ID;
const SES_SECRET_ACCESS_KEY = process.env.SES_SECRET_ACCESS_KEY;
const HOST_EMAIL = process.env.HOST_EMAIL;
const CONTACT_EMAIL_TO = process.env.CONTACT_EMAIL_TO;

module.exports = async (req, res) => {
  console.log('Received request:', req.method);

  if (req.method === 'POST') {
    const { firstName, lastName, sender, subject, message } = req.body;

    console.log('Request body:', req.body);
    console.log(firstName, lastName, sender, subject, message);

    try {
      await sendEmail(firstName, lastName, sender, subject, message);
      console.log('Email sent successfully');
      return res.status(200).json({ success: 'Email sent successfully.' });
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ error: 'Failed to send email.', details: error.message });
    }
  } else {
    console.log('Method not allowed');
    res.status(405).json({ error: 'Method not allowed' });
  }
};

async function sendEmail(firstName, lastName, sender, subject, message) {
  console.log('Preparing to send email');

  const transporter = nodemailer.createTransport({
    host: SES_HOST,
    port: SES_PORT,
    secure: false, // Use true for port 465, false for other ports
    auth: {
      user: SES_ACCESS_KEY_ID,
      pass: SES_SECRET_ACCESS_KEY,
    },
  });

  const mailOptions = {
    from: `Portfolio Messenger <${HOST_EMAIL}>`,
    to: CONTACT_EMAIL_TO,
    subject: `From: ${firstName} ${lastName} \n\n${subject}`,
    text: `From: ${firstName} ${lastName} <${sender}>\n\n$lala`,
  };

  console.log('Sending email with options:', mailOptions);

  const result = await transporter.sendMail(mailOptions);
  console.log('Email sent:', result);
}
