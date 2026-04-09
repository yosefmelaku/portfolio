import React from 'react';

const Education: React.FC = () => {
  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Technology',
      year: '2021 - 2025',
      description: 'Focused on software engineering, algorithms, and computer systems. GPA: 3.8/4.0'
    },
    {
      degree: 'High School Diploma',
      institution: 'Tech High School',
      year: '2017 - 2021',
      description: 'Specialized in Mathematics and Computer Science'
    }
  ];

  return (
    <section id="education">
      <h2>Education</h2>
      <div style={{ textAlign: 'left', maxWidth: '800px', margin: '0 auto' }}>
        {education.map((edu, index) => (
          <div key={index} style={{ marginBottom: '2rem' }}>
            <h3>{edu.degree}</h3>
            <p style={{ fontWeight: 'bold', color: '#646cff' }}>{edu.institution}</p>
            <p style={{ fontStyle: 'italic' }}>{edu.year}</p>
            <p>{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;