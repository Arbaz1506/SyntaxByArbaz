import React, { useState } from 'react';
import './Navbar.css';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Certifications And Achievement", link: "#certifications" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="navbar">
        <div className="hamburger" onClick={() => setMenuOpen(true)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* <div className="logo">SyntaxByArbaz</div> */}

        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.name}>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Fullscreen Overlay Menu */}
      <div className={`overlay-menu ${menuOpen ? 'open' : ''}`}>
        <div className="close-btn" onClick={() => setMenuOpen(false)}>&times;</div>
        <ul>
          {navItems.map((item) => (
            <li key={item.name}>
              <a href={item.link} onClick={() => setMenuOpen(false)}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
