import React from 'react';

const CV: React.FC = () => {
  return (
    <div style={{
      padding: '4rem 2rem',
      maxWidth: '1200px',
      margin: '0 auto',
      background: '#1a252f',
      minHeight: '80vh',
      color: 'white',
      textAlign: 'center'
    }}>
      <h1>My CV</h1>
      <p>Download my CV to learn more about my background and experience.</p>
      <a
        href="/cv.pdf" // Placeholder - you'll need to add your CV file to public folder
        download="My_CV.pdf"
        style={{
          display: 'inline-block',
          backgroundColor: 'white',
          color: '#667eea',
          padding: '1rem 2rem',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontSize: '1.2rem',
          marginTop: '2rem'
        }}
      >
        Download CV
      </a>
      <div style={{ marginTop: '3rem' }}>
        <h2>Quick Overview</h2>
        <div style={{ textAlign: 'left', maxWidth: '800px', margin: '0 auto' }}>
          <h3>Education</h3>
          <p>Bachelor of Science in Computer Science - University of Technology (2021-2025)</p>
          <h3>Skills</h3>
          <p>JavaScript, TypeScript, React, Node.js, Python, Java, HTML, CSS, SQL</p>
          <h3>Experience</h3>
          <p>Software Engineering Intern at Tech Corp, Teaching Assistant, Freelance Web Developer</p>
        </div>
      </div>
    </div>
  );
};

export default CV;