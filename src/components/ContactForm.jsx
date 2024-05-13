import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:2000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      alert('Message sent: ' + data.message);
      setFormData({ name: '', email: '', message: '' }); // Clear the form
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto my-10 p-6 bg-white rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700">Message</label>
        <textarea
          name="message"
          id="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
