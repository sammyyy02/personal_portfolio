import React, { useContext, useEffect, useState } from 'react';
import './Navbar.css';
import { ThemeContext } from '../ThemeContext';

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'education', 'certifications', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 80; // Adjust for navbar height
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, section) => {
    e.preventDefault();
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false); // Close menu on link click
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${theme}`}>
      <div className="logo">Sanket Chavan</div>
      <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
        <div className={`hamburger ${menuOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {['home', 'about', 'skills', 'projects', 'education', 'certifications', 'contact'].map(section => (
          <li key={section}>
            <a
              href={`#${section}`}
              className={activeSection === section ? 'active' : ''}
              onClick={(e) => handleClick(e, section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          </li>
        ))}
        <li>
      <a href="/Sanket_Chavan_Resume..pdf" download className="download-btn" onClick={() => setMenuOpen(false)}>
        Download Resume
      </a>
        </li>
        <li>
          <button className="theme-toggle" onClick={() => { toggleTheme(); setMenuOpen(false); }}>
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
