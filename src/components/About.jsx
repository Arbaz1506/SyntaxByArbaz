import React from 'react';
import './About.css';
import ProfileImg from '../assets/Profile.jpg';

function About() {
  return (
    <section id="about" className="about-section">
      <h2 className="about-title">About Me</h2>

      <div className="about-card">
        <div className="profile-side">
          <img src={ProfileImg} alt="Arbaz Salam" className="about-img" />
          <p className="quote">
            “Code is my canvas. Every project, a new story.”  
          </p>
        </div>

        <div className="text-side">
          <p>
            I’m <strong>Arbaz Salam</strong>, a developer who loves turning complex ideas into seamless digital experiences. My work spans across frontend creativity and backend logic — using tools like <strong>React</strong>, <strong>Node.js</strong>, <strong>MongoDB</strong>, and <strong>Tailwind CSS</strong>.
          </p>
          <p>
            My roots lie in <strong>C++</strong> and problem-solving. With 200+ problems solved on platforms like <strong>LeetCode</strong> and <strong>AtCoder</strong>, I’ve built a strong base in <span className="highlight">DSA, logic, and clean code</span>.
          </p>
          <p>
            I’m currently exploring ways to blend <strong>design, performance, and real-world impact</strong> — whether it’s a dynamic weather app, an intuitive portfolio, or a full-fledged product. My goal? To become a <span className="highlight">Software Engineer</span> who builds with empathy and excellence.
          </p>

          <div className="tech-grid">
            <div>
              <h4>Languages</h4>
              <p>C++, JavaScript, Python</p>
            </div>
            <div>
              <h4>Stack</h4>
              <p>React, Node.js, Express, MongoDB</p>
            </div>
            <div>
              <h4>Tools</h4>
              <p>Git, GitHub, Postman, REST APIs</p>
            </div>
            <div>
              <h4>Practice</h4>
              <p>400+ DSA problems solved</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
