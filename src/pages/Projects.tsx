import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'E-commerce Website',
      description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      link: '#'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates using WebSockets. Includes features like task assignment, progress tracking, and team collaboration.',
      technologies: ['React', 'Socket.io', 'PostgreSQL', 'Express'],
      link: '#'
    },
    {
      title: 'Data Visualization Dashboard',
      description: 'An interactive dashboard for visualizing complex datasets. Built with D3.js and React, featuring various chart types and data filtering capabilities.',
      technologies: ['React', 'D3.js', 'Python', 'Flask'],
      link: '#'
    }
  ];

  return (
    <div style={{
      padding: '4rem 2rem',
      maxWidth: '1200px',
      margin: '0 auto',
      background: '#34495e',
      minHeight: '80vh',
      color: 'white'
    }}>
      <h1>Projects</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {projects.map((project, index) => (
          <div key={index} style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '8px',
            padding: '1.5rem',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div style={{ marginBottom: '1rem' }}>
              <strong>Technologies:</strong> {project.technologies.join(', ')}
            </div>
            <a href={project.link} style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>View Project →</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;