const nodemailer = require('nodemailer');
const { google } = require('googleapis');


module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { firstName, lastName, email, subject, message } = req.body;

  // OAuth2 configuration
  const CLIENT_ID = process.env.CLIENT_ID;
  const CLIENT_SECRET = process.env.CLIENT_SECRET;
  const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
  const REFRESH_TOKEN = process.env.REFRESH_TOKEN;
  const EMAIL = process.env.EMAIL;

  const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
  oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });


  const accessToken = await oAuth2Client.getAccessToken();

  // Create a transporter object using the OAuth2 transport
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: EMAIL,
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      refreshToken: REFRESH_TOKEN,
      accessToken: accessToken.token,
    },
  });

  // Email options
  const mailOptions = {
    from: `${firstName} ${lastName} <${email}>`,
    to: process.env.CONTACT_EMAIL_TO,
    subject: subject,
    text: message,
  };

  // Send the email
  try {
    const result = await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: 'Email sent successfully.', result });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send email.', details: error.message });
  }
};
