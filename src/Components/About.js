import React from 'react';
import './About.css';
import profilePhoto from '../Images/IMG_20230710_134704.jpg';
import githubIcon from '../Images/github.svg';
import linkedinIcon from '../Images/linkedin.svg';
import mailIcon from '../Images/envelope (1).svg';

function About() {
  return (
    <div className="hero-section">
      <div className="profile-photo-wrapper">
        <img src={profilePhoto} alt="Profile" className="profile-photo" />
      </div>
      <h1 className="name">Maheshwaran V</h1>
      <p className="description">Aspiring MERN Stack Developer with a strong foundation in web development. Passionate about learning, building,<br/> and growing through hands-on projects. Excited to collaborate and contribute. Let’s connect!</p>
      
      <div className="social-icons">
        <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer" className="icon-border">
          <img src={githubIcon} alt="GitHub" className="icon" />
        </a>
        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="icon-border">
          <img src={linkedinIcon} alt="LinkedIn" className="icon" />
        </a>
        <a href="mailto:your-email@example.com" className="icon-border">
          <img src={mailIcon} alt="Email" className="icon" />
        </a>
      </div>
      
      <div className="action-buttons">
        <button className="primary-btn">
          <i className="bi bi-download"></i> Download Resume
        </button>
        <button className="primary-btn">
          <i className="bi bi-chat"></i> Get in Touch
        </button>
      </div>
    </div>
  );
}

export default About;
