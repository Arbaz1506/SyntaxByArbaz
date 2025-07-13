import React from 'react';
import './Contact.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Let’s Connect</h2>
      <p className="contact-subtitle">Have a project, opportunity, or just want to say hi?</p>

      <div className="contact-card">
        <p className="contact-email">📧 arbazsalam15@gmail.com</p>

        <div className="contact-socials">
          <a href="https://github.com/Arbaz1506" target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </a>
          <a href="https://linkedin.com/in/arbazsalam" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
