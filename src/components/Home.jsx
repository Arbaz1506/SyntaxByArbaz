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
        <h1>
          <span className="name-white">Arbaz</span>{' '}
          <span className="name-blue">Salam</span>
        </h1>
        <h2>Full Stack Developer & Aspiring SDE</h2>

        <div className="social-icons">
          <a href="mailto:arbazsalam15@gmail.com" target="_blank" rel="noreferrer" title="Send Email"><FaEnvelope /></a>
          <a href="https://drive.google.com/file/d/1Ir6VcB3xpvki7MzvO7p5-62DPIC-btYp/view?usp=sharing" target="_blank" rel="noopener noreferrer" title="View/Download Resume"><FaFileAlt /></a>
          <a href="https://www.linkedin.com/in/arbazsalam156/" target="_blank" rel="noreferrer" title="Visit LinkedIn Profile"><FaLinkedin /></a>
          <a href="https://github.com/Arbaz1506" target="_blank" rel="noreferrer" title="Visit GitHub Profile"><FaGithub /></a>
          <a href="https://x.com/__arbaz15__" target="_blank" rel="noreferrer" title="Follow on Twitter (X)"><FaTwitter /></a>
          <a href="https://leetcode.com/u/arbaz_156/" target="_blank" rel="noreferrer" title="Check LeetCode Profile"><SiLeetcode /></a>
        </div>
      </div>
    </section>
  );
}

export default Home;
