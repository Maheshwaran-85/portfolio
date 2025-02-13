import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdDateRange } from 'react-icons/md';
import './Education.css';
import { FaLaptopCode } from 'react-icons/fa';

function Education() {
  return (
    <div className="education-container">
      <h2>Education</h2>
      <h5>My academic background and certifications</h5>

      {/* BSc IT Card */}
      <div className="education-card">
        <h3>Bachelor of Science in Information Technology</h3>
        <a href="https://www.skacas.ac.in/" target="_blank" rel="noopener noreferrer">
          Sri Krishna Adithya College of Arts and Science
        </a>
        <div className="education-details">
          <span>
            <FaMapMarkerAlt className="icon" /> Coimbatore, India
          </span>
          <span>
            <MdDateRange className="icon" /> 2022 - 2025
          </span>
        </div>
        <p>Specialized in Information Technology with a focus on Software Development and IT Services.</p>
      </div>

      {/* Higher Secondary Education Card */}
      <div className="education-card">
        <h3>Higher Secondary</h3>
        <a href="https://amritaschool.edu.in/ettimadai" target="_blank" rel="noopener noreferrer">
          Amrita Vidyalayam, Ettimadai (CBSE)
        </a>
        <div className="education-details">
          <span>
            <FaMapMarkerAlt className="icon" /> Ettimadai, Coimbatore
          </span>
          <span>
            <MdDateRange className="icon" /> 2020 - 2022
          </span>
        </div>
        <p>Score: <strong>78%</strong></p>
      </div>

      <div className="education-card">
        <h3>Web Development Internship</h3>
        <a href="https://www.elevadosoftwares.com/" target="_blank" rel="noopener noreferrer">
          GT Softwares 
        </a>
        <div className="education-details">
          <span>
            <FaMapMarkerAlt className="icon" /> Coimbatore,India
          </span>
          <span>
            <MdDateRange className="icon" /> Sep-2024 - Feb-2025
          </span>
        </div>
        <p>Specialized in MERN Stack Development with expertise in HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB.</p>
      </div>


      <div className="education-card">
        <h3>Full-Stack Web Development </h3>
        <a href="https://www.udemy.com/course/the-complete-web-development-bootcamp/?couponCode=IND21PM/" target="_blank" rel="noopener noreferrer">
       Udemy Online
        </a>
        <div className="education-details">
        <span>
            <FaLaptopCode className="icon" /> Online
          </span>
          <span>
            <MdDateRange className="icon" /> 2023
          </span>
        </div>
        <p>Specialized in Full Stack Development on Udemy with expertise in HTML, CSS, JavaScript, React.js, and Node.js.</p>
      </div>
    </div>

  );
}

export default Education;
