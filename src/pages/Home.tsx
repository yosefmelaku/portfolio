import React from 'react';
import { Link } from 'react-router-dom';

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
          <p className="hero-role">CS Student · Web Dev · Data Science</p>
          <p className="hero-uni">Bahir Dar University</p>
        </div>

        <div className="hero-right">
          <p>
            I'm a motivated Computer Science student at Bahir Dar University with experience
            in web development and data science. I enjoy building projects, working with data,
            and learning new tools that help solve real-world problems.
          </p>
          <p>
            I'm looking for an opportunity to gain practical experience and grow as a developer
            while contributing to a team.
          </p>

          {/* Tech stack pills */}
          <div className="hero-stack">
            {['HTML','CSS','JavaScript','PHP','React','Data Analysis'].map(t => (
              <span key={t} className="hero-stack-pill">{t}</span>
            ))}
          </div>

          <Link to="/about" className="hero-cta">Read more about me →</Link>
        </div>
      </div>
    </section>
  );
};

export default Home;