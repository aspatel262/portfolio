import { google } from 'googleapis';
import nodemailer from 'nodemailer';
import { serialize } from 'cookie';
import { parse } from 'cookie';

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const EMAIL = process.env.HOST_EMAIL;
const CONTACT_EMAIL_TO = process.env.CONTACT_EMAIL_TO;

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, sender, subject, message, code } = req.body;

    // If there is an authorization code, handle OAuth callback
    if (code) {
      try {
        const { tokens } = await oAuth2Client.getToken(code);
        oAuth2Client.setCredentials(tokens);

        // Store the refresh token securely (for simplicity, use a cookie in this example)
        res.setHeader('Set-Cookie', serialize('refreshToken', tokens.refresh_token, { path: '/' }));
        console.log('got access token ', tokens);
        // Continue to send the email with the obtained tokens
        return await sendEmail(res, firstName, lastName, sender, subject, message, tokens);
      } catch (error) {
        console.error('Error retrieving access token:', error);
        return res.status(500).json({ error: 'Failed to retrieve access token.' });
      }
    }

    // Check if there is a stored refresh token
    const cookies = parse(req.headers.cookie || '');
    const refreshToken = cookies.refreshToken;

    if (!refreshToken) {
      // Initiate OAuth 2.0 authorization flow
      const authUrl = oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: ['https://www.googleapis.com/auth/gmail.send'],
        prompt: 'consent',
      });
      return res.status(200).json({ url: authUrl });
    }

    // Set credentials with the stored refresh token
    oAuth2Client.setCredentials({ refresh_token: refreshToken });

    try {
      const accessTokenResponse = await oAuth2Client.getAccessToken();
      if (!accessTokenResponse.token) {
        console.error('Error: Access token could not be retrieved');
        return res.status(500).json({ error: 'Failed to retrieve access token.' });
      }

      return await sendEmail(res, firstName, lastName, sender, subject, message, { access_token: accessTokenResponse.token });
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ error: 'Failed to send email.', details: error.message });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

async function sendEmail(res, firstName, lastName, sender, subject, message, tokens) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: EMAIL,
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      refreshToken: tokens.refresh_token,
      accessToken: tokens.access_token,
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
    return res.status(200).json({ success: 'Email sent successfully.', result });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send email.', details: error.message });
  }
}
