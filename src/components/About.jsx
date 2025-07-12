import React from 'react';
import './About.css';
import ProfileImg from '../assets/Profile.jpg';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I’m <span>Arbaz Salam</span>, a passionate Full Stack Developer and an aspiring Software Development Engineer (SDE). From crafting beautiful frontend interfaces with React to architecting robust backend logic with Node.js and MongoDB, I love translating complex problems into elegant code.
            </p>
            <p>
              My journey isn’t just about technology. Over the past year, I’ve focused on spiritual growth, discipline, and service — whether it’s learning <em>Surah Baqarah</em>, offering regular <em>Tahajjud</em>, or supporting my community through volunteer work.
            </p>
            <p>
              I’m on a mission to build meaningful products that blend function with aesthetics. I believe that great software should not only solve problems — it should inspire.
            </p>
          </div>
          <div className="about-image">
                <img src={ProfileImg} alt="Arbaz Salam" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
