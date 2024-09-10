import React from 'react';
import './Contact.css';  // Contact form styles

const Contact = () => {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <form className="contact-form">
        <label>Name</label>
        <input type="text" name="name" required />
        
        <label>Email</label>
        <input type="email" name="email" required />
        
        <label>Message</label>
        <textarea name="message" required></textarea>
        
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
