import React, { useState } from "react";
import "./Project.css";
import pho from "../Images/Screenshot 2025-02-13 125905.png";
import foodtrackind from "../Images/healthy-diet-male-hands-holding-smartphone-keeping-track-calories-his-food-with-fitness-app.jpg";
import githubIcon from "../Images/github.svg";
import vechile from "../Images/iStock-628095858.jpg.thumb.1280.1280.png";

const projects = [
  {
    id: 1,
    title: "UniWing",
    image: pho,
    shortText: "UniWing is a social and service-oriented web application for college students...",
    fullText: "UniWing is a social and service-oriented web app for college students, enabling connections, information sharing, and community engagement. It supports communication, blood donation drives, event management, room availability, and a student-focused marketplace.",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    title: "Food Tracking",
    image: foodtrackind,
    shortText: "Food Tracking Web App lets parents register and supervise their children's diet.",
    fullText: "Food Tracking Web Application helps parents monitor their children's diet. By inputting BMI and age, it calculates required calories and suggests meals to meet nutritional goals.",
    tags: ["React", "Firebase", "Tailwind"],
  },
  {
    id: 3,
    title: "E-Commerce",
    image: vechile,
    shortText: "A full-stack e-commerce platform built with React and using Fake Store API.",
    fullText: "A full-stack e-commerce platform with features like user authentication, product management, and an Add to Cart system, built with React and Fake Store API.",
    tags: ["React", "Fake Store API"],
  },
];

function Project() {
  const [expanded, setExpanded] = useState({});

  const toggleReadMore = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="projects-section">
      <h2 className="section-title">My Projects</h2>
      <p className="section-subtitle">A selection of my recent work</p>

      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className={`project-card ${expanded[project.id] ? "expanded" : ""}`}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.shortText}</p>
              <div className="project-full-text">
                {expanded[project.id] && <p>{project.fullText}</p>}
              </div>
              <span className="read-more-toggle" onClick={() => toggleReadMore(project.id)}>
                {expanded[project.id] ? "Read Less" : "Read More"}
              </span>
              <div className="project-tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
              <div className="project-links">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img src={githubIcon} alt="GitHub" className="github-icon" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
