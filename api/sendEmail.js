const nodemailer = require('nodemailer');
const { google } = require('googleapis');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { firstName, lastName, sender, subject, message } = req.body;

  // OAuth2 configuration
  const CLIENT_ID = process.env.CLIENT_ID;
  const CLIENT_SECRET = process.env.CLIENT_SECRET;
  const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
  const REFRESH_TOKEN = process.env.REFRESH_TOKEN;
  const EMAIL = process.env.HOST_EMAIL;

  const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
  oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

  try {
    const accessToken = await oAuth2Client.getAccessToken();

    if (!accessToken) {
      console.error('Error: Access token could not be retrieved');
      return res.status(500).json({ error: 'Failed to retrieve access token' });
    }

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
      from: `Portfolio Messenger <${EMAIL}>`,
      to: process.env.CONTACT_EMAIL_TO,
      subject: `From: ${firstName} ${lastName} \n\n${subject}`,
      text: `From: ${firstName} ${lastName} <${sender}>\n\n${message}`,
    };

    // Send the email
    const result = await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: 'Email sent successfully.', result });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send email.', details: error.message });
  }
};
