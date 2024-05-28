const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { fName, lName, email, subject, message } = req.body;

  // Create a transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: 'smtp.sendgrid.net',
    port: 465,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SENDGRID_USER,
      pass: process.env.SENDGRID_PASS,
    },
  });

  // Email options
  const mailOptions = {
    from: `${fName + ' ' + lName} <${email}>`, // Dynamic "from" address specified by the form sender
    to: process.env.CONTACT_EMAIL_TO, // Your email address to receive the message
    subject: subject, // Subject specified by the form sender
    text: message, // Message specified by the form sender
  };

  // Send the email
  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: 'Email sent successfully.' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send email.' });
  }
};
