import React from 'react';
import './About.css';
import profilePhoto from '../Images/IMG_20230710_134704.jpg';
import githubIcon from '../Images/github.svg';
import linkedinIcon from '../Images/linkedin.svg';
import mailIcon from '../Images/envelope (1).svg';
import { useNavigate } from 'react-router-dom';

function About() {
  const nav = useNavigate();


  const handleDownload = () => {
    const resumePath = '/MAHESHWARANV.pdf.pdf'; 
    const link = document.createElement('a');
    link.href = resumePath;
    link.setAttribute('download', 'MAHESHWARANV.pdf.pdf'); 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="hero-section">
        <div className="profile-photo-wrapper">
          <img src={profilePhoto} alt="Profile" className="profile-photo" />
        </div>
        <h1 className="name">Maheshwaran V</h1>
        <p className="description">
          "Passionate MERN Stack Developer with a strong foundation in web development. Eager to expand my skills, work on impactful projects, and collaborate with talented teams. Let’s connect and build something amazing together!"
        </p>

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
          <button className="primary-btn" onClick={handleDownload}>
            <i className="bi bi-download"></i> Download Resume
          </button>
          <button className="primary-btn" onClick={() => nav('/Contact')}>
            <i className="bi bi-chat"></i> Get in Touch
          </button>
        </div>
      </div>
    </>
  );
}

export default About;
