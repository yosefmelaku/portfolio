import React from 'react';

const highlights = [
  { icon: '🎓', label: 'University',  value: 'Bahir Dar University'                },
  { icon: '💻', label: 'Focus Area',  value: 'Web Development & Data Science'      },
  { icon: '🌍', label: 'Location',    value: 'Bahir Dar, Ethiopia'                 },
  { icon: '🚀', label: 'Status',      value: 'Open to Opportunities'               },
];

const About: React.FC = () => {
  return (
    <div className="about-page">

      {/* ── HERO BANNER ── */}
      <div className="about-hero">
        <div className="about-hero-inner">
          <span className="about-tag">About Me</span>
          <h1 className="about-title">I build things that solve real-world problems</h1>
          <p className="about-lead">
            I'm Yosef Melaku — a Computer Science student at Bahir Dar University with
            experience in web development and data science, looking to grow as a developer
            while contributing to a team.
          </p>
        </div>
      </div>

      {/* ── QUICK STATS ── */}
      <div className="about-highlights">
        {highlights.map((h, i) => (
          <div key={i} className="about-highlight-card">
            <span className="about-highlight-icon">{h.icon}</span>
            <div>
              <p className="about-highlight-label">{h.label}</p>
              <p className="about-highlight-value">{h.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── BODY CONTENT ── */}
      <div className="about-content">

        <div className="about-prose-block">
          <h2>Who I Am</h2>
          <p>
            I'm a motivated Computer Science student at Bahir Dar University with experience
            in both web development and data science. I enjoy building projects, working with
            data, and picking up new tools that help solve real problems.
          </p>
          <p>
            On the web side I work with HTML, CSS, JavaScript, PHP, and React. I'm also
            developing my skills in data analysis — learning how to turn raw numbers into
            something actually useful.
          </p>
        </div>

        <div className="about-prose-block">
          <h2>What I'm Looking For</h2>
          <p>
            I'm looking for an opportunity to gain practical experience and grow as a developer
            while contributing to a team that's building something meaningful. I'm comfortable
            starting small — I learn quickly and I'm not afraid of the parts I don't know yet.
          </p>
          <p>
            Whether it's a web project, a data pipeline, or something in between, I'm ready
            to put in the work and grow through it.
          </p>
        </div>

        <div className="about-prose-block">
          <h2>How I Got Here</h2>
          <p>
            It started with curiosity — wondering what was actually happening behind the
            screens I spent time on. That curiosity became a degree, and the degree became
            real projects with real code I'm proud of.
          </p>
          <p>
            Right now I'm most interested in full-stack web development and data science —
            two areas where I feel there's still a lot left to learn and build, and I'm
            genuinely enjoying the process.
          </p>
        </div>

      </div>
    </div>
  );
};

export default About;