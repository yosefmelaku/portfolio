import React from 'react';

const Experience: React.FC = () => {
  const experiences = [
    {
      position: 'Software Engineering Intern',
      company: 'Tech Corp',
      duration: 'Summer 2024',
      description: 'Developed web applications using React and Node.js. Collaborated with the team on agile development processes and participated in code reviews.'
    },
    {
      position: 'Teaching Assistant',
      company: 'University of Technology',
      duration: '2023 - 2024',
      description: 'Assisted in teaching Data Structures and Algorithms course. Helped students with programming assignments and conducted lab sessions.'
    },
    {
      position: 'Freelance Web Developer',
      company: 'Self-employed',
      duration: '2022 - Present',
      description: 'Built custom websites for small businesses using HTML, CSS, JavaScript, and various frameworks. Managed client relationships and project timelines.'
    }
  ];

  return (
    <div style={{
      padding: '4rem 2rem',
      maxWidth: '1200px',
      margin: '0 auto',
      background: '#e8f4f8',
      minHeight: '80vh',
      color: '#333'
    }}>
      <h1>Experience</h1>
      <div style={{ textAlign: 'left', maxWidth: '800px', margin: '0 auto' }}>
        {experiences.map((exp, index) => (
          <div key={index} style={{
            marginBottom: '2rem',
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            border: '1px solid #ddd'
          }}>
            <h3>{exp.position}</h3>
            <p style={{ fontWeight: 'bold', color: '#fff' }}>{exp.company}</p>
            <p style={{ fontStyle: 'italic' }}>{exp.duration}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;