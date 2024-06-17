const express = require('express');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const app = express();

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = 'https://adityapatel.vercel.app/oauth2callback';
const EMAIL = process.env.HOST_EMAIL;

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

app.use(express.json());

// Route to initiate OAuth 2.0 authorization
app.get('/auth', (req, res) => {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: ['https://www.googleapis.com/auth/gmail.send'],
  });
  res.redirect(authUrl);
});

// Route to handle OAuth 2.0 callback
app.get('/oauth2callback', async (req, res) => {
  const code = req.query.code;
  const { tokens } = await oAuth2Client.getToken(code);
  oAuth2Client.setCredentials(tokens);

  // Store the new refresh token securely
  console.log('New refresh token:', tokens.refresh_token);

  res.send('Authentication successful! You can close this window.');
});

// Endpoint to send email
app.post('/sendEmail', async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { firstName, lastName, sender, subject, message } = req.body;

  if (!CLIENT_ID || !CLIENT_SECRET || !EMAIL) {
    console.error('Error: Missing environment variables');
    return res.status(500).json({ error: 'Missing environment variables' });
  }

  try {
    const accessTokenResponse = await oAuth2Client.getAccessToken();

    if (accessTokenResponse.token === null) {
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
        refreshToken: oAuth2Client.credentials.refresh_token,
        accessToken: accessToken,
      },
    });

    const mailOptions = {
      from: `Portfolio Messenger <${EMAIL}>`,
      to: process.env.CONTACT_EMAIL_TO,
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
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
