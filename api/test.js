require('dotenv').config();
const nodemailer = require('nodemailer');
const { google } = require('googleapis');

async function sendTestEmail() {
    // OAuth2 configuration

    const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
    oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

    try {
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
            from: `Your Name <${EMAIL}>`,
            to: 'aspatel262@gmail.com', // Your email address to receive the test email
            subject: 'Test Email',
            text: 'This is a test email sent from Node.js using Gmail OAuth2',
        };

        // Send the email
        const result = await transporter.sendMail(mailOptions);
        console.log('Email sent:', result);
    } catch (error) {
        console.error('Error sending email:', error);
    }
}

sendTestEmail();
