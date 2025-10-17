import React from 'react';
import './Skills.css';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaPython,
  FaDatabase
} from 'react-icons/fa';
import {
  SiC, SiCplusplus, SiTailwindcss, SiMongodb, SiExpress, SiMysql, SiPostman,
  SiGithub, SiJson, SiRedux, SiLeetcode
} from 'react-icons/si';

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2>Skills</h2>

      <div className="skills-grid">
        <div className="icons">

          {/* Languages */}
          <div className="icon-container" title="C"><SiC style={{ color: '#A8B9CC' }} /></div>
          <div className="icon-container" title="C++"><SiCplusplus style={{ color: '#00599C' }} /></div>
          <div className="icon-container" title="Python"><FaPython style={{ color: '#306998' }} /></div>
          <div className="icon-container" title="JavaScript"><FaJs style={{ color: '#f0db4f' }} /></div>

          {/* Web Development */}
          <div className="icon-container" title="HTML5"><FaHtml5 style={{ color: '#e34c26' }} /></div>
          <div className="icon-container" title="CSS3"><FaCss3Alt style={{ color: '#264de4' }} /></div>
          <div className="icon-container" title="Tailwind CSS"><SiTailwindcss style={{ color: '#38bdf8' }} /></div>
          <div className="icon-container" title="React.js"><FaReact style={{ color: '#61dbfb' }} /></div>
          <div className="icon-container" title="Redux"><SiRedux style={{ color: '#764abc' }} /></div>
          <div className="icon-container" title="Node.js"><FaNodeJs style={{ color: '#68a063' }} /></div>
          <div className="icon-container" title="Express.js"><SiExpress style={{ color: '#ffffff' }} /></div>
          <div className="icon-container" title="MongoDB"><SiMongodb style={{ color: '#4db33d' }} /></div>
          <div className="icon-container" title="Database"><FaDatabase style={{ color: '#f29111' }} /></div>
          <div className="icon-container" title="MySQL"><SiMysql style={{ color: '#00758f' }} /></div>

          {/* Tools & APIs */}
          <div className="icon-container" title="Git"><FaGitAlt style={{ color: '#f1502f' }} /></div>
          <div className="icon-container" title="GitHub"><SiGithub style={{ color: '#ffffff' }} /></div>
          <div className="icon-container" title="Postman"><SiPostman style={{ color: '#ff6c37' }} /></div>
          <div className="icon-container" title="JSON"><SiJson style={{ color: '#ffffff' }} /></div>

          {/* Coding Practice */}
          <div className="icon-container" title="LeetCode"><SiLeetcode style={{ color: '#f89f1b' }} /></div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
