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
import { BsFillCloudSunFill } from 'react-icons/bs';
import { AiOutlineApi } from 'react-icons/ai';

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2>Skills</h2>

      <div className="skills-grid">
        <div className="icons">
          {/* Languages */}
          <div className="icon-container"><SiC style={{ color: '#A8B9CC' }} /></div>
          <div className="icon-container"><SiCplusplus style={{ color: '#00599C' }} /></div>
          <div className="icon-container"><FaPython style={{ color: '#306998' }} /></div>
          <div className="icon-container"><FaJs style={{ color: '#f0db4f' }} /></div>

          {/* Web Development */}
          <div className="icon-container"><FaHtml5 style={{ color: '#e34c26' }} /></div>
          <div className="icon-container"><FaCss3Alt style={{ color: '#264de4' }} /></div>
          <div className="icon-container"><SiTailwindcss style={{ color: '#38bdf8' }} /></div>
          <div className="icon-container"><FaReact style={{ color: '#61dbfb' }} /></div>
          <div className="icon-container"><SiRedux style={{ color: '#764abc' }} /></div>
          <div className="icon-container"><FaNodeJs style={{ color: '#68a063' }} /></div>
          <div className="icon-container"><SiExpress style={{ color: '#ffffff' }} /></div>
          <div className="icon-container"><SiMongodb style={{ color: '#4db33d' }} /></div>
          <div className="icon-container"><FaDatabase style={{ color: '#f29111' }} /></div>
          <div className="icon-container"><SiMysql style={{ color: '#00758f' }} /></div>

          {/* Tools & APIs */}
          <div className="icon-container"><FaGitAlt style={{ color: '#f1502f' }} /></div>
          <div className="icon-container"><SiGithub style={{ color: '#ffffff' }} /></div>
          <div className="icon-container"><SiPostman style={{ color: '#ff6c37' }} /></div>
          <div className="icon-container"><SiJson style={{ color: '#ffffff' }} /></div>

          {/* Coding Practice */}
          <div className="icon-container"><SiLeetcode style={{ color: '#f89f1b' }} /></div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
