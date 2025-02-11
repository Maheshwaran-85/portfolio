import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">CONTACT ME</h2>

      <div className="contact-card">
        {/* LinkedIn */}
        <a 
          href="https://www.linkedin.com/in/maheshwaran-v-66a4592a3" 
          className="contact-item"
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaLinkedin className="icon linkedin" />
          <span>MAHESHWARAN V</span>
        </a>

        {/* GitHub */}
        <a 
          href="https://github.com/Maheshwaran-85" 
          className="contact-item" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaGithub className="icon github" />
          <span>MAHESHWARAN-85</span>
        </a>

        {/* Email */}
        <a 
          href="mailto:vmaheshwaran085@gmail.com" 
          className="contact-item"
        >
          <FaEnvelope className="icon email" />
          <span>vmaheshwaran085@gmail.com</span>
        </a>

        {/* Phone */}
        <a 
          href="tel:+917904705743" 
          className="contact-item"
        >
          <FaPhone className="icon phone" />
          <span>+91 7904705743</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
