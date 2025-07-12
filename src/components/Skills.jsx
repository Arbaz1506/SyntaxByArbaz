import React from 'react';
import './Skills.css';
import {
  SiC, SiCplusplus, SiPython, SiJavascript,
  SiHtml5, SiCss3, SiTailwindcss, SiReact, SiNodedotjs,
  SiExpress, SiMongodb, SiMysql, SiPostman,
  SiJson, SiVisualstudiocode, SiGithub
} from 'react-icons/si';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>💻 Tech Stack</h2>
      <div className="skills-grid">

        {/* Languages */}
        <div className="skill-category">
          <h3>Languages</h3>
          <div className="icons">
            <SiC title="C" />
            <SiCplusplus title="C++" />
            <SiPython title="Python" />
            <SiJavascript title="JavaScript" />
          </div>
        </div>

        {/* Web Development */}
        <div className="skill-category">
          <h3>Web Development</h3>
          <div className="icons">
            <SiHtml5 title="HTML5" />
            <SiCss3 title="CSS3" />
            <SiTailwindcss title="Tailwind CSS" />
            <SiReact title="ReactJS" />
            <SiNodedotjs title="NodeJS" />
            <SiExpress title="ExpressJS" />
            <SiMongodb title="MongoDB" />
            <SiMysql title="MySQL" />
          </div>
        </div>

        {/* Tools & Utilities */}
        <div className="skill-category">
          <h3>Tools & Utilities</h3>
          <div className="icons">
            <SiGithub title="GitHub" />
            <SiPostman title="Postman" />
            <SiJson title="JSON" />
            <SiVisualstudiocode title="VS Code" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
