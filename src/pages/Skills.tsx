import React from 'react';

const Skills: React.FC = () => {
  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'Java',
    'HTML', 'CSS', 'SQL', 'Docker', 'AWS', 'Machine Learning', 'Data Structures & Algorithms'
  ];

  return (
    <div style={{
      padding: '4rem 2rem',
      maxWidth: '1200px',
      margin: '0 auto',
      background: '#2c3e50',
      minHeight: '80vh',
      color: 'white'
    }}>
      <h1>Skills</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
        {skills.map((skill, index) => (
          <span key={index} style={{
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            color: 'white',
            padding: '0.5rem 1rem',
            borderRadius: '20px',
            fontSize: '1rem',
            border: '1px solid rgba(255, 255, 255, 0.3)'
          }}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;