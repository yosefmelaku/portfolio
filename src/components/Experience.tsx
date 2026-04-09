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
    <section id="experience">
      <h2>Experience</h2>
      <div style={{ textAlign: 'left', maxWidth: '800px', margin: '0 auto' }}>
        {experiences.map((exp, index) => (
          <div key={index} style={{ marginBottom: '2rem' }}>
            <h3>{exp.position}</h3>
            <p style={{ fontWeight: 'bold', color: '#646cff' }}>{exp.company}</p>
            <p style={{ fontStyle: 'italic' }}>{exp.duration}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;