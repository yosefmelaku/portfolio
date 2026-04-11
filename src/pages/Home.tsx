import React from 'react';

const JossiPhoto = new URL('../Jossi.jpg', import.meta.url).href;

const Home: React.FC = () => {
  return (
    <section className="home-hero">
      <div className="home-hero-inner">
        {/* Left column */}
        <div className="hero-left">
          <div className="hero-avatar">
            <img src={JossiPhoto} alt="Yosef Melaku" />
          </div>
          <h1 className="hero-name">Yosef Melaku</h1>
          <p className="hero-role">Computer Science Student</p>
        </div>

        {/* Right column */}
        <div className="hero-right">
          <h2>About Me</h2>
          <p>
            Hello! I'm a passionate Computer Science student with a keen interest in software development,
            web technologies, and problem-solving. I enjoy building innovative solutions and learning new
            technologies. Currently pursuing my degree in Computer Science, I have experience in various
            programming languages and frameworks.
          </p>
          <p>
            When I'm not coding, you can find me exploring new tech trends, contributing to open-source
            projects, or participating in hackathons. I'm always eager to take on new challenges and
            collaborate with like-minded individuals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;