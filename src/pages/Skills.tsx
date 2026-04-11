import React from 'react';

const skills = [
  'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'Java',
  'HTML', 'CSS', 'SQL', 'Docker', 'AWS', 'Machine Learning',
  'Data Structures & Algorithms',
];

const Skills: React.FC = () => {
  return (
    <section className="page-section skills-section">
      <div className="container">
        <h1>Skills</h1>
        <div className="skills-grid">
          {skills.map((skill, i) => (
            <span key={i} className="skill-badge">{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;