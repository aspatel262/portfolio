const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 2000;

app.use(cors());
app.use(bodyParser.json());

app.post('/contact', async (req, res) => {
  console.log('Received new message:', req.body);
  
  // Configure Nodemailer transporter
  const transporter = nodemailer.createTransport({
    host: 'smtp.example.com', // Replace with your mail server host
    port: 587, // Common port for SMTP
    secure: false, // True for 465, false for other ports
    auth: {
      user: 'aspatel262@gmail.com', // Your email id
      pass: 'your-email-password' // Your password
    }
  });

  // Email options
  const mailOptions = {
    from: 'your-email@example.com', // Sender address
    to: 'aspatel262@gmail.com', // List of recipients
    subject: 'New Contact Form Message', // Subject line
    text: `You have a new contact from ${req.body.name}. Email: ${req.body.email} Message: ${req.body.message}`, // Plain text body
    html: `<p>You have a new contact from <strong>${req.body.name}</strong>.</p>
           <p>Email: ${req.body.email}</p>
           <p>Message: ${req.body.message}</p>` // HTML body
  };

  // Send email
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log('Error sending email: ', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.json({ message: 'Your message has been sent successfully!' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
