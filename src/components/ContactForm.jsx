import React, { useState } from 'react';
import './comps.css'; // Ensure your CSS file is linked

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // Log data or send to backend
        // Add actual submission logic here
    };

    return (
        <div className='flex flex-col md:flex-row md:items-center justify-center w-full min-h-screen bg-gray-100'>
            <div className="contact-form-wrapper m-auto">
                Hello
            </div>
            <div className="contact-form-wrapper m-auto">
                <h2>Reach Out to Aditya!</h2>
                <form onSubmit={handleSubmit} className="contact-form">
                    <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
                    <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
                    <input type="email" name="email" placeholder="What's your email?" value={formData.email} onChange={handleChange} />
                    <textarea name="message" placeholder="Your questions..." value={formData.message} onChange={handleChange}></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
