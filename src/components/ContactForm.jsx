import React, { useState, useEffect } from 'react';
import './comps.css'; // Ensure your CSS file is linked

const ContactForm = () => {
    const [contentVisible, setContentVisible] = useState(false);
  
    useEffect(() => {
      setContentVisible(true);
    }, []);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: e.target.value === 'checkbox' ? e.target.checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.subject || !formData.message) {
            alert('Please fill all fields to submit');
            // Add further validation or visual feedback here
            return;
        }
        console.log(formData); // Process the form data
    };

    return (
        <div className='flex flex-col md:flex-row items-center justify-center w-full min-h-screen bg-gray-100 md:pt-20 md:pr-20 lg:pl-40 md:pl-20 pt-14 px-5'>
            <div className={`contact-info-wrapper bg-white p-4 rounded-lg m-4 flex flex-col justify-center transition-all duration-1000 ease-in-out transform ${
                  contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
                <h1 className="reach-out text-left text-3xl md:text-4xl font-bold">I love meeting new people,</h1>
                <h1
                  className="reach-out text-3xl md:text-4xl font-bold"
                  style={{
                    background: 'linear-gradient(to right, #4facfe 0%, #87cefa 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  And I would love to hear from you!
                </h1>
                <p>Contact me here and lets connect!</p>
            </div>
            <div className={`contact-form-wrapper m-auto transition-all duration-1000 ease-in-out transform ${
                contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="flex flex-wrap justify-between">
                        <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} style={{ width: 'calc(50% - 4px)' }} />
                        <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} style={{ width: 'calc(50% - 4px)' }} />
                    </div>
                    <div className="flex flex-wrap justify-between">
                        <input type="email" name="email" placeholder="What's your email?" value={formData.email} onChange={handleChange} style={{ width: 'calc(50% - 4px)', minWidth: '100%' }} />
                        <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} style={{ width: 'calc(50% - 4px)', minWidth: '100%' }} />
                    </div>
                    <textarea className="h-40" name="message" placeholder="Lets Chat..." value={formData.message} onChange={handleChange}></textarea>
                    <p className='size-small'>By clicking submit you agree that Aditya may use your personal data (name and e-mail address) to contact you.</p>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;

