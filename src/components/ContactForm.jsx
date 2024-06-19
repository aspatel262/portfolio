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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = validate();
        setFormErrors(errors);
        setErrorSubmitted(false);
      
        if (Object.keys(errors).length === 0) {
          try {
            const firstName = formData.firstName;
            const lastName = formData.lastName;
            const email = formData.email;
            const subject = formData.subject;
            const message = formData.message;
            console.log(formData);
            const response = await axios.post('/api/sendEmail', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                firstName,
                lastName,
                sender: email,
                subject,
                message,
              }),
            });
      
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
      
            const result = await response.json();
            if (result.success) {
              console.log('Email sent', result);
              setIsSubmitted(true);
              setErrorSubmitted(false);
            } else {
              throw new Error(result.error || 'Failed to send email');
            }
          } catch (error) {
            console.error('Error sending email:', error.message);
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
