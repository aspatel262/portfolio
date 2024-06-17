const { google } = require('googleapis');
const nodemailer = require('nodemailer');

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = 'https://adityapatel.vercel.app/api/sendEmail';
const EMAIL = process.env.HOST_EMAIL;
const CONTACT_EMAIL_TO = process.env.CONTACT_EMAIL_TO;

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

export default async function handler(req, res) {
  if (req.method === 'GET') {
    // Initiate OAuth 2.0 authorization
    const authUrl = oAuth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: ['https://www.googleapis.com/auth/gmail.send'],
    });
    res.redirect(authUrl);
  } else if (req.method === 'POST') {
    // Handle email sending
    const { firstName, lastName, sender, subject, message } = req.body;

    if (!CLIENT_ID || !CLIENT_SECRET || !EMAIL || !process.env.REFRESH_TOKEN) {
      console.error('Error: Missing environment variables');
      return res.status(500).json({ error: 'Missing environment variables' });
    }

    oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

    try {
      const accessTokenResponse = await oAuth2Client.getAccessToken();

      if (!accessTokenResponse.token) {
        console.error('Error: Access token could not be retrieved');
        return res.status(500).json({ error: 'Failed to retrieve access token' });
      }

      const accessToken = accessTokenResponse.token;

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          type: 'OAuth2',
          user: EMAIL,
          clientId: CLIENT_ID,
          clientSecret: CLIENT_SECRET,
          refreshToken: process.env.REFRESH_TOKEN,
          accessToken: accessToken,
        },
      });

      const mailOptions = {
        from: `Portfolio Messenger <${EMAIL}>`,
        to: CONTACT_EMAIL_TO,
        subject: `From: ${firstName} ${lastName} \n\n${subject}`,
        text: `From: ${firstName} ${lastName} <${sender}>\n\n${message}`,
      };

      const result = await transporter.sendMail(mailOptions);
      return res.status(200).json({ success: 'Email sent successfully.', result });
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error === 'invalid_grant') {
        console.error('Error: Refresh token has expired or is invalid');
        return res.status(401).json({ error: 'Refresh token expired or invalid. Please re-authenticate.' });
      }
      console.error('Error sending email:', error);
      return res.status(500).json({ error: 'Failed to send email.', details: error.message });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
