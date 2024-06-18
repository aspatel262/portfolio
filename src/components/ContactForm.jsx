import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { gapi } from 'gapi-script';
import '../App.css'; // Ensure your CSS file is linked
import logoFlip from './../assets/memojis/contactMemoji.png';

const ContactForm = () => {
    const [contentVisible, setContentVisible] = useState(false);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errorSubmitted, setErrorSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
    });

    useEffect(() => {
        setContentVisible(true);
    }, []);

    const validate = () => {
        const errors = {};
        if (!formData.firstName) errors.firstName = 'First Name is required';
        if (!formData.lastName) errors.lastName = 'Last Name is required';
        if (!formData.email) errors.email = 'Email is required';
        if (!formData.subject) errors.subject = 'Subject is required';
        if (!formData.message) errors.message = 'Message is required';
        return errors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const CLIENT_ID = process.env.REACT_APP_CLIENT_ID_2;
const API_KEY = process.env.REACT_APP_GMAIL_API_KEY;
const SCOPE = 'https://www.googleapis.com/auth/gmail.send';

useEffect(() => {
    setContentVisible(true);
    function start() {
        gapi.client.init({
            apiKey: API_KEY,
            clientId: CLIENT_ID,
            discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest'],
            scope: SCOPE,
        }).then(() => {
            gapi.auth2.init({
                client_id: CLIENT_ID,
            });
            console.log('Google API client initialized with client ID:', CLIENT_ID);
        }).catch(error => {
            console.error('Error initializing Google API client:', error);
        });
    }
    gapi.load('client:auth2', start);
}, []);

const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);
    setErrorSubmitted(false);

    if (Object.keys(errors).length === 0) {
        try {
            const authInstance = gapi.auth2.getAuthInstance();
                if (!authInstance.isSignedIn.get()) {
                    await authInstance.signIn();
                }

            const firstName = formData.firstName;
            const lastName = formData.lastName;
            const email = formData.email;
            const subject = formData.subject;
            const message = formData.message;

            const content = `
                From: ${firstName} ${lastName} <${email}>
                To: ${process.env.REACT_APP_CONTACT_EMAIL_TO}
                Subject: ${subject}

                ${message}
            `;

            const base64EncodedEmail = btoa(unescape(encodeURIComponent(content)))
                .replace(/\+/g, '-')
                .replace(/\//g, '_');

            const request = gapi.client.gmail.users.messages.send({
                userId: 'me',
                resource: {
                    raw: base64EncodedEmail,
                },
            });

            request.execute((response) => {
                console.log('Email sent', response);
                setIsSubmitted(true);
                setErrorSubmitted(false);
            });

        } catch (error) {
            console.error('Error sending email:', error.response?.data || error.message);
            setErrorSubmitted(true);
        }

        setTimeout(() => setIsSubmitted(false), 3000);
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            subject: '',
            message: '',
        });
    }
};



    return (
        <div className='contact'>
            <div className={`contact-info-wrapper ${contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <h1 className="reach-out">I love meeting new people,</h1>
                <h1 className="reach-out-2">And I would love to hear from you!</h1>
                <img className="reach-out-memoji" src={logoFlip} alt="Adi's Memoji holding a phone" />
                <h1 className="reach-out-3">Drop a message, and I'll reach out to you soon.</h1>
            </div>
            <div className={`contact-form-wrapper ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="flex flex-wrap justify-between">
                        <input 
                            type="text" 
                            name="firstName" 
                            placeholder={formErrors.firstName || "First Name"} 
                            value={formData.firstName} 
                            onChange={handleChange} 
                            style={{ 
                                width: 'calc(50% - 4px)', 
                                borderColor: formErrors.firstName ? 'rgba(255, 0, 0, 0.5)' : 'transparent' 
                            }} 
                            className={`${formErrors.firstName && 'placeholder-red-300 text-red-300'}`}
                        />
                        <input 
                            type="text" 
                            name="lastName" 
                            placeholder={formErrors.lastName || "Last Name"} 
                            value={formData.lastName} 
                            onChange={handleChange} 
                            style={{ 
                                width: 'calc(50% - 4px)', 
                                borderColor: formErrors.lastName ? 'rgba(255, 0, 0, 0.5)' : 'transparent' 
                            }} 
                            className={`${formErrors.lastName && 'placeholder-red-300 text-red-300'}`}
                        />
                    </div>
                    <div className="flex flex-wrap justify-between">
                        <input 
                            className={`text-center ${formErrors.email && 'placeholder-red-300 text-red-300'}`} 
                            type="email" 
                            name="email" 
                            placeholder={formErrors.email || "What's your email?"} 
                            value={formData.email} 
                            onChange={handleChange} 
                            style={{ 
                                width: 'calc(50% - 4px)', 
                                minWidth: '100%', 
                                borderColor: formErrors.email ? 'rgba(255, 0, 0, 0.5)' : 'transparent' 
                            }} 
                        />
                        <input 
                            className={`text-center ${formErrors.subject && 'placeholder-red-300 text-red-300'}`} 
                            type="text" 
                            name="subject" 
                            placeholder={formErrors.subject || "Subject"} 
                            value={formData.subject} 
                            onChange={handleChange} 
                            style={{ 
                                width: 'calc(50% - 4px)', 
                                minWidth: '100%', 
                                borderColor: formErrors.subject ? 'rgba(255, 0, 0, 0.5)' : 'transparent' 
                            }} 
                        />
                    </div>
                    <textarea 
                        className={`h-40 ${formErrors.message && 'placeholder-red-300 text-red-300'}`} 
                        name="message" 
                        placeholder={formErrors.message || "Lets Chat..."} 
                        value={formData.message} 
                        onChange={handleChange} 
                        style={{ 
                            borderColor: formErrors.message ? 'rgba(255, 0, 0, 0.5)' : 'transparent' 
                        }} 
                    ></textarea>
                    {isSubmitted && <div className="text-green-500 mb-4">Whooosh, your message is on its way!</div>}
                    {errorSubmitted && <div className='text-red-300 mb-4'>Error delivering message, please try again</div>}
                    {!isSubmitted && !errorSubmitted && <p className='disclaimer-text'>By clicking submit you agree that Aditya may use your personal data (name and e-mail address) to contact you.</p>}
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
