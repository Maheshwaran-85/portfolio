import React from 'react'
import './About.css'
import mahie from '../Images/IMG_20230710_134704.jpg'
import git from '../Images/github.svg'
import mail from'../Images/envelope (1).svg'
import link from '../Images/linkedin.svg'

function About() {
  return (
    <div className='all'>
      <div className='about'>
        <img src={mahie} alt='mahie' className='mahie-photo' />
      </div>
      <div className="mahie-content">
        <h1 className="mahie-name">Maheshwaran V</h1>
        <h2 className="mahie-title">Full Stack Developer</h2>
        <div className="mahie-description">
          <p className="mahie-about">
            Passionate about creating beautiful,responsive, and  user - friendly web applications.
             In React, Node.js, and modern web technologies.
          </p>
        </div>

        {/* Social Icons */}
        <div className="mahie-icons">
          <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
            <img src={git} alt="GitHub" className="social-icon" />
          </a>
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
            <img src={link} alt="LinkedIn" className="social-icon" />
          </a>
          <a href="mailto:your-email@example.com">
            <img src={mail} alt="Email" className="social-icon" />
          </a>
        </div>

        {/* Download Button */}
        <div className="resume-container">
          <button className="resume-btn">
            <i className="bi bi-download"></i> Download Resume
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
