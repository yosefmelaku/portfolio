import React from 'react';

const experiences = [
  {
    position: 'Software Engineering Intern',
    company: 'Tech Corp',
    duration: 'Summer 2024',
    description:
      'Developed web applications using React and Node.js. Collaborated with the team on agile development processes and participated in code reviews.',
  },
  {
    position: 'Teaching Assistant',
    company: 'University of Technology',
    duration: '2023 – 2024',
    description:
      'Assisted in teaching Data Structures and Algorithms. Helped students with programming assignments and conducted lab sessions.',
  },
  {
    position: 'Freelance Web Developer',
    company: 'Self-employed',
    duration: '2022 – Present',
    description:
      'Built custom websites for small businesses using HTML, CSS, JavaScript, and various frameworks. Managed client relationships and project timelines.',
  },
];

const Experience: React.FC = () => {
  return (
    <section className="page-section experience-section">
      <div className="container">
        <h1>Experience</h1>
        <div className="exp-list">
          {experiences.map((exp, i) => (
            <div key={i} className="exp-card">
              <h3>{exp.position}</h3>
              <p className="company">{exp.company}</p>
              <p className="duration">{exp.duration}</p>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;