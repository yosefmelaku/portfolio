import React from 'react';

const CV: React.FC = () => {
  return (
    <section className="page-section cv-section">
      <div className="container">
        <h1>My CV</h1>
        <p>Download my CV to learn more about my background and experience.</p>
        <a
          href="/cv.pdf"
          download="Yosef_Melaku_CV.pdf"
          className="cv-download-btn"
        >
          Download CV
        </a>

        <div className="cv-overview">
          <h2>Quick Overview</h2>
          <h3>Education</h3>
          <p>Bachelor of Science in Computer Science — University of Technology (2021–2025)</p>
          <h3>Skills</h3>
          <p>JavaScript, TypeScript, React, Node.js, Python, Java, HTML, CSS, SQL</p>
          <h3>Experience</h3>
          <p>Software Engineering Intern at Tech Corp · Teaching Assistant · Freelance Web Developer</p>
        </div>
      </div>
    </section>
  );
};

export default CV;