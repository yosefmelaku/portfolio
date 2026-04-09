import React from 'react';

const Skills: React.FC = () => {
  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'Java',
    'HTML', 'CSS', 'SQL', 'Docker', 'AWS', 'Machine Learning', 'Data Structures & Algorithms'
  ];

  return (
    <section id="skills">
      <h2>Skills</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
        {skills.map((skill, index) => (
          <span key={index} style={{
            backgroundColor: '#646cff',
            color: 'white',
            padding: '0.5rem 1rem',
            borderRadius: '20px',
            fontSize: '1rem'
          }}>
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;