import React, { useState } from "react";
import "./Project.css";
import pho from "../Images/Screenshot 2025-02-13 125905.png";
import foodtrackind from "../Images/healthy-diet-male-hands-holding-smartphone-keeping-track-calories-his-food-with-fitness-app.jpg";
import githubIcon from "../Images/github.svg";
import vechile from "../Images/iStock-628095858.jpg.thumb.1280.1280.png";
import ola from '../Images/Screenshot (17).png'
import facebook from '../Images/fb-new-login.png'
import ecom from '../Images/what-is-e-commerce-SOCIAL.jpg'
import todo from '../Images/Screenshot (45).png'

function Project() {
  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);
  const [isExpanded3, setIsExpanded3] = useState(false);

  const toggleReadMore1 = () => {
    setIsExpanded1(!isExpanded1);
  };

  const toggleReadMore2 = () => {
    setIsExpanded2(!isExpanded2);
  };

  const toggleReadMore3 = () => {
    setIsExpanded3(!isExpanded3);
  };

  return (
    <>
    <section className="projects-section">
      <h2 className="section-title">My Projects</h2>
      <p className="section-subtitle">A selection of my recent work</p>

      <div className="projects-container">
        {/* Project 1 */}
        <div className={`project-card ${isExpanded1 ? "expanded" : ""}`}>
          <img src={pho} alt="UniWing" className="project-image" />
          <div className="project-info">
            <h3>UniWing</h3>
            <p>UniWing is a social and service-oriented web application for college students...</p>
            {isExpanded1 && (
              <div className="project-full-text">
                <p>UniWing is a social and service-oriented web app for college students, enabling connections, information sharing, and community engagement. It supports communication, blood donation drives, event management, room availability, and a student-focused marketplace.</p>
              </div>
            )}
            <span className="read-more-toggle" onClick={toggleReadMore1}>
              {isExpanded1 ? "Read Less" : "Read More"}
            </span>
            <div className="project-tags">
              <span className="tag">React</span>
              <span className="tag">Node.js</span>
              <span className="tag">MongoDB</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/Maheshwaran-85/uniwing-front-end" target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} alt="GitHub" className="github-icon" />
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className={`project-card ${isExpanded2 ? "expanded" : ""}`}>
          <img src={foodtrackind} alt="Food Tracking" className="project-image" />
          <div className="project-info">
            <h3>Food Tracking</h3>
            <p>Food Tracking Web App lets parents register and supervise their children's diet.</p>
            {isExpanded2 && (
              <div className="project-full-text">
                <p>Food Tracking Web Application helps parents monitor their children's diet. By inputting BMI and age, it calculates required calories and suggests meals to meet nutritional goals.</p>
              </div>
            )}
            <span className="read-more-toggle" onClick={toggleReadMore2}>
              {isExpanded2 ? "Read Less" : "Read More"}
            </span>
            <div className="project-tags">
              <span className="tag">Node Js</span>
              <span className="tag">Express Js</span>
              <span className="tag">Mongo DB</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/Maheshwaran-85/food-backend" target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} alt="GitHub" className="github-icon" />
              </a>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className={`project-card ${isExpanded3 ? "expanded" : ""}`}>
          <img src={ecom} alt="E-Commerce" className="project-image" />
          <div className="project-info">
            <h3>E-Commerce</h3>
            <p>A full-stack e-commerce platform built with React and using Fake Store API.</p>
            {isExpanded3 && (
              <div className="project-full-text">
                <p>A full-stack e-commerce platform with features like user authentication, product management, and an Add to Cart system, built with React and Fake Store API.</p>
              </div>
            )}
            <span className="read-more-toggle" onClick={toggleReadMore3}>
              {isExpanded3 ? "Read Less" : "Read More"}
            </span>
            <div className="project-tags">
              <span className="tag">React</span>
              <span className="tag">Fake Store API</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/Maheshwaran-85"  target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} alt="GitHub" className="github-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mini Projects Section */}
      <section className="mini-projects-section">
        <h2 className="section-title">Mini Projects</h2>
        <p className="section-subtitle">
        I’ve built functional clones of popular apps, focusing on key features and responsive design to enhance my web development skills.
        </p>
        
      <div className="projects-container">
        {/* Project 1 */}
        <div className={`project-card ${isExpanded1 ? "expanded" : ""}`}>
          <img src={ola} alt="Ola Webpage Clone" className="project-image" />
          <div className="project-info">
            <h3>Ola Webpage Clone</h3>
            <p>I have created a clone of the Ola Cabs webpage to enhance my skills in mobile and web responsiveness...</p>
            {isExpanded1 && (
              <div className="project-full-text">
                <p> This project allowed me to improve my ability to design adaptive layouts, ensuring a seamless user experience across various screen sizes and devices.</p>
              </div>
            )}
            <span className="read-more-toggle" onClick={toggleReadMore1}>
              {isExpanded1 ? "Read Less" : "Read More"}
            </span>
            <div className="project-tags">
              <span className="tag">React</span>
            
           
            </div>
            <div className="project-links">
              <a href="https://github.com/Maheshwaran-85/Clone-ola-cabs"target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} alt="GitHub" className="github-icon" />
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className={`project-card ${isExpanded2 ? "expanded" : ""}`}>
          <img src={facebook} alt="Food Tracking" className="project-image" />
          <div className="project-info">
            <h3>Facebook login/signup</h3>
            <p>I created a functional clone of the Facebook Login and Signup pages, with emphasis on building authentication workflows</p>
            {isExpanded2 && (
              <div className="project-full-text">
                <p> The project involved form validation, handling user input, and ensuring a responsive design to work across both desktop and mobile devices.</p>
              </div>
            )}
            <span className="read-more-toggle" onClick={toggleReadMore2}>
              {isExpanded2 ? "Read Less" : "Read More"}
            </span>
            <div className="project-tags">
              <span className="tag">React</span>
            </div>
            <div className="project-links">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} alt="GitHub" className="github-icon" />
              </a>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className={`project-card ${isExpanded3 ? "expanded" : ""}`}>
          <img src={todo} alt="E-Commerce" className="project-image" />
          <div className="project-info">
            <h3>To-Do List :
            </h3>
            <p>This project is a simple task management tool that allows users to add, edit, and delete tasks.</p>
            {isExpanded3 && (
              <div className="project-full-text">
                <p>It focuses on functionality like sorting tasks by priority or due date and using local storage to persist tasks even after page reloads.</p>
            
              </div>
            )}
            <span className="read-more-toggle" onClick={toggleReadMore3}>
              {isExpanded3 ? "Read Less" : "Read More"}
            </span>
            <div className="project-tags">
            <span className="tag">React</span>
              <span className="tag">Node.js</span>
              <span className="tag">MongoDB</span>
            </div>
            <div className="project-links">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} alt="GitHub" className="github-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="projects-container">
        {/* Project 4 */}
        {/* <div className={`project-card ${isExpanded1 ? "expanded" : ""}`}>
          <img src={todo} alt="UniWing" className="project-image" />
          <div className="project-info">
            <h3>To-Do List </h3>
            <p>This project is a simple task management tool that allows users to add, edit, and delete tasks.</p>
            {isExpanded1 && (
              <div className="project-full-text">
                <p>It focuses on functionality like sorting tasks by priority or due date and using local storage to persist tasks even after page reloads.</p>
              </div>
            )}
            <span className="read-more-toggle" onClick={toggleReadMore1}>
              {isExpanded1 ? "Read Less" : "Read More"}
            </span>
            <div className="project-tags">
              <span className="tag">React</span>
              <span className="tag">Node.js</span>
              <span className="tag">MongoDB</span>
            </div>
            <div className="project-links">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} alt="GitHub" className="github-icon" />
              </a>
            </div>
          </div>
        </div> */}

        {/* Project 5 */}
        {/* <div className={`project-card ${isExpanded2 ? "expanded" : ""}`}>
          <img src={foodtrackind} alt="Food Tracking" className="project-image" />
          <div className="project-info">
            <h3>WE-CALC</h3>
            <p>I developed V CALC, a web application that integrates five practical calculators, each designed to provide quick and accurate results</p>
            {isExpanded2 && (
              <div className="project-full-text">
                <p> The apps goal is to offer a simple yet efficient solution for everyday calculations, featuring the following calculators:

Basic Calculator: For performing arithmetic operations like addition, subtraction, multiplication, and division.
Age Calculator: Easily calculate a person’s age based on their birthdate.
BMI Calculator: Helps users calculate their Body Mass Index based on height and weight.
EMI Calculator: For calculating loan installments based on principal, interest rate, and tenure.
GST Calculator: Quickly calculates Goods and Services Tax (GST) on any given amount..</p>
              </div>
            )}
            <span className="read-more-toggle" onClick={toggleReadMore2}>
              {isExpanded2 ? "Read Less" : "Read More"}
            </span>
            <div className="project-tags">
              <span className="tag">React</span>
            </div>
            <div className="project-links">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} alt="GitHub" className="github-icon" />
              </a>
            </div>
          </div>
        </div> */}

        {/* Project 3
        <div className={`project-card ${isExpanded3 ? "expanded" : ""}`}>
          <img src={vechile} alt="E-Commerce" className="project-image" />
          <div className="project-info">
            <h3>CRUD using Redux</h3>
            <p>I developed a CRUD (Create, Read, Update, Delete) application using Redux to manage the state of data across components.</p>
            {isExpanded3 && (
              <div className="project-full-text">
                <p>This project allowed me to work on handling application state in a clean and organized manner, ensuring a smooth user experience for creating, reading, updating, and deleting data.</p>
              </div>
            )}
            <span className="read-more-toggle" onClick={toggleReadMore3}>
              {isExpanded3 ? "Read Less" : "Read More"}
            </span>
            <div className="project-tags">
              <span className="tag">React</span>
              <span className="tag">Redux</span>
            </div>
            <div className="project-links">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} alt="GitHub" className="github-icon" />
              </a>
            </div>
          </div>
        </div>*/}
      </div> 
      </section>
    </section>
    
    </>
  );
}

export default Project;
