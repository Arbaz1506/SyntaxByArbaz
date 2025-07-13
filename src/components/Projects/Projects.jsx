import React from 'react';
import ProjectCard from './ProjectCard';
import projects from './ProjectsData';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            repo={project.repo}
            demo={project.demo}
            image={project.image}
            description={project.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
