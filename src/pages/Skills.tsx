import React from 'react';

const coreCourses = [
  'Data Structures & Algorithms',
  'Object-Oriented Programming',
  'Database Management Systems',
  'Operating Systems',
  'Software Engineering',
  'Computer Networks',
  'Computer Architecture',
  'Discrete Mathematics',
];

const specializedCourses = [
  'Web Programming (PHP, React)',
  'Data Science & Analysis',
  'Artificial Intelligence',
  'Cloud Computing',
  'Mobile Application Development',
  'System Analysis & Design',
];

const Skills: React.FC = () => {
  return (
    <section className="page-section skills-section">
      <div className="container">
        <h1 style={{ marginBottom: '0.5rem' }}>Professional Coursework</h1>
        <p style={{ color: 'var(--clr-muted)', textAlign: 'center', marginBottom: '3rem' }}>
          Key subjects studied during my Computer Science degree at Bahir Dar University.
        </p>

        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.2rem', color: '#4f6ef7', marginBottom: '1.5rem', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Core Computer Science
          </h2>
          <div className="skills-grid">
            {coreCourses.map((course, i) => (
              <span key={i} className="skill-badge">{course}</span>
            ))}
          </div>
        </div>

        <div>
          <h2 style={{ fontSize: '1.2rem', color: '#7c3aed', marginBottom: '1.5rem', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Specialization & Applied
          </h2>
          <div className="skills-grid">
            {specializedCourses.map((course, i) => (
              <span key={i} className="skill-badge">{course}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;