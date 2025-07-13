import React from 'react';
import weather from '../../assets/weather.jpg';
import form from '../../assets/form.png';
import login from '../../assets/login.png';
import tick from '../../assets/tick.png';
import thought from '../../assets/thought.png';
import password from '../../assets/password.jpg';
import './ProjectCard.css';

// 🧠 Map image keys to imported files
const imageMap = {
  weather,
  form,
  login,
  tick,
  thought,
  password
};

const ProjectCard = ({ title, repo, demo, image, description }) => {
  const imageSrc = imageMap[image]; // Match 'image' string from JSON to import

  return (
    <div className="project-card">
      <img src={imageSrc} alt={title} className="project-image" />
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-links">
          <a href={demo} target="_blank" rel="noopener noreferrer" className="project-btn">Live Demo</a>
          <a href={repo} target="_blank" rel="noopener noreferrer" className="project-btn">GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
