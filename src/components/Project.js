import React from 'react';
import './Projects.css';

function Project() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <div className="project-card">
        <h3>E-Commerce Website (MERN Stack)</h3>
        <ul>
          <li>Developed a full-featured e-commerce platform with product browsing and user authentication.</li>
          <li>Designed a responsive UI using React and Bootstrap for mobile and desktop.</li>
          <li>Integrated backend APIs with Node.js and Express.js, managed data with MongoDB.</li>
          <li><strong>Tech Stack:</strong> React, Node.js, Express.js, MongoDB, Bootstrap</li>
        </ul>
      </div>

      <div className="project-card">
        <h3>Personal Portfolio Website (Frontend/UI Design)</h3>
        <ul>
          <li>Designed and deployed a personal portfolio to showcase web development projects and skills.</li>
          <li>Implemented smooth navigation, modern animations, and responsive layouts using React and CSS.</li>
          <li>Optimized UI performance and accessibility across devices.</li>
          <li><strong>Tech Stack:</strong> React, JavaScript, HTML, CSS</li>
        </ul>
      </div>

    </section>
  );
}

export default Project;
