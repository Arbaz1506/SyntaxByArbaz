import React from 'react';
import ParticlesBackground from './ParticlesBackground';
import { FaEnvelope, FaLinkedin, FaGithub, FaFileAlt } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { FaTwitter } from 'react-icons/fa';
import './Home.css';

function Home() {
  return (
    <section id="home" className="home-section">
      <ParticlesBackground />

      <div className="home-content">
        <h1><span className="name-white">Arbaz</span> <span className="name-blue">Salam</span></h1>
        <h2>Full Stack Developer & Aspiring SDE</h2>
        <div className="social-icons">
          <a href="mailto:arbazsalam15@gmail.com" target="_blank" rel="noreferrer"><FaEnvelope /></a>
          <a href="/assets/Arbaz_Resume.pdf" download><FaFileAlt /></a>
          <a href="https://www.linkedin.com/in/arbazsalam156/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/Arbaz1506" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://x.com/__arbaz15__" target="_blank" rel="noreferrer"><FaTwitter /></a>
          <a href="https://leetcode.com/u/arbaz_156/" target="_blank" rel="noreferrer"><SiLeetcode /></a>
        </div>
      </div>
    </section>
  );
}

export default Home;
