import React, { useState, useEffect } from 'react';
import './comps.css'; // Ensure your CSS file is linked
import logoFlip from './../assets/contactMemoji.png';

const ContactForm = () => {
    const [contentVisible, setContentVisible] = useState(false);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
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

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validate();
        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            console.log(formData);
            setIsSubmitted(true);
            // Reset form after submission
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                subject: '',
                message: '',
            });
            setTimeout(() => setIsSubmitted(false), 3000);
        }
    };

    return (
        <div className='flex flex-col md:flex-row items-center justify-center w-full min-h-screen bg-gray-100 md:pt-20 md:pr-20 lg:pl-40 md:pl-20 pt-14 px-5'>
            <div className={`contact-info-wrapper p-4 rounded-lg m-4 flex flex-col justify-center transition-all duration-1000 ease-in-out transform ${
                contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`} style={{ background: 'linear-gradient(to bottom right, #ffffff 0%,  #c2e8ff 100%)'}}>
                <h1 className="reach-out text-3xl md:text-4xl font-bold text-center p-1.5">I love meeting new people,</h1>
                <h1
                    className="reach-out text-3xl md:text-4xl font-bold text-center p-1.5"
                    style={{
                        background: 'linear-gradient(to right, #4facfe 0%, #87cefa 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    And I would love to hear from you!
                </h1>
                <img className="w-56 md:w-64 lg:w-72 h-auto rounded-lg transition-all duration-300 ease-in-out hover:scale-105" src={logoFlip} alt="Adi's logo" />
                <h1 className='reach-out text-3xl md:text-4xl font-bold text-center pt-10' style={{ background: 'linear-gradient(to right, #000000 0%, #333333 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',}}>
                    Drop a message, and I'll reach out to you soon.
                </h1>
            </div>
            <div className={`contact-form-wrapper m-auto transition-all duration-1000 ease-in-out transform ${
                contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ background: 'linear-gradient(to top left, #ffffff 0%,  #d1e7f4 100%)'}}>
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
                    {!isSubmitted && <p className='size-small'>By clicking submit you agree that Aditya may use your personal data (name and e-mail address) to contact you.</p>}
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
