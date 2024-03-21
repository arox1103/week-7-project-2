// ContactForm.js
import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Add logic to handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="contact">
      <h2 className="contact__title">Contact Us</h2>
      <form className="contact__form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} />
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} />
        <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange}></textarea>
        <button type="submit" className="contact__submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
