import React from 'react';

const About: React.FC = () => {
  return (
    <section className="page-section about-section">
      <div className="container">
        <h1>About Me</h1>
        <p>
          Hello! I'm a Computer Science student with a keen interest in software development,
          web technologies, and problem-solving. I enjoy building innovative solutions and learning new
          technologies. Currently pursuing my degree in Computer Science, I have experience in various
          programming languages and frameworks.
        </p>
        <p>
          When I'm not coding, you can find me exploring new tech trends, contributing to open-source projects,
          or participating in hackathons. I'm always eager to take on new challenges and collaborate with
          like-minded individuals.
        </p>
        <h2>My Journey</h2>
        <p>
          My journey in computer science began with a curiosity about how things work behind the scenes.
          From building my first "Hello World" program to developing complex web applications, I've grown
          tremendously. I'm particularly interested in full-stack development, machine learning, and creating
          user-friendly interfaces.
        </p>
      </div>
    </section>
  );
};

export default About;