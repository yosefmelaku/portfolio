import React from 'react';

const projects = [
  {
    title: 'E-commerce Website',
    description:
      'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment integration.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    link: '#',
  },
  {
    title: 'Task Management App',
    description:
      'A collaborative task management application with real-time updates using WebSockets. Includes task assignment, progress tracking, and team collaboration.',
    technologies: ['React', 'Socket.io', 'PostgreSQL', 'Express'],
    link: '#',
  },
  {
    title: 'Data Visualization Dashboard',
    description:
      'An interactive dashboard for visualizing complex datasets. Built with D3.js and React, featuring various chart types and data filtering capabilities.',
    technologies: ['React', 'D3.js', 'Python', 'Flask'],
    link: '#',
  },
];

const Projects: React.FC = () => {
  return (
    <section className="page-section projects-section">
      <div className="container">
        <h1>Projects</h1>
        <div className="projects-grid">
          {projects.map((project, i) => (
            <div key={i} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-tags">
                {project.technologies.join(' · ')}
              </div>
              <a href={project.link}>View Project →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;