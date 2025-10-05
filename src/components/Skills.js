import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Technical Skills</h2>
      <div className="skills-list">
        <p><strong>Frontend:</strong> HTML5, CSS3, JavaScript (ES6+), React.js, Bootstrap, Tailwind CSS</p>
        <p><strong>Backend:</strong> Node.js, Express.js</p>
        <p><strong>Database:</strong> MongoDB</p>
        <p><strong>Version Control:</strong> Git, GitHub</p>
        {/* <p><strong>Tools:</strong> VS Code, Postman, npm, REST APIs</p> */}
      </div>
      <h2>Soft Skills</h2>
      <ul>
        <li>Problem Solving & Critical Thinking</li>
        <li>UI/UX Design Thinking</li>
        <li>Team Collaboration & Adaptability</li>
        <li>Time Management & Attention to Detail</li>
        <li>Creativity and User Empathy</li>
      </ul>
      <h2>Interests</h2>
      <ul>
        <li>Web Design</li>
        <li>UI Animation</li>
        <li>Front-End Optimization</li>
        <li>Modern JavaScript Frameworks</li>
      </ul>
    </section>
  );
}

export default Skills;
