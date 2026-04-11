import React from 'react';

const CV: React.FC = () => {
  const skills = [
    { name: 'JavaScript / TypeScript', level: 90 },
    { name: 'React & Next.js',         level: 88 },
    { name: 'Node.js / Express',       level: 80 },
    { name: 'Python',                  level: 75 },
    { name: 'SQL & PostgreSQL',        level: 72 },
    { name: 'Docker / AWS',            level: 65 },
  ];

  const experience = [
    {
      role: 'Software Engineering Intern',
      org: 'Tech Corp',
      period: 'Summer 2024',
      bullets: [
        'Built React dashboards consumed by 5,000+ daily users.',
        'Reduced API response times by 35% through query optimisation.',
        'Participated in daily standups and sprint planning ceremonies.',
      ],
    },
    {
      role: 'Teaching Assistant — Data Structures',
      org: 'University of Technology',
      period: '2023 – 2024',
      bullets: [
        'Guided 120 students through algorithms and complexity theory.',
        'Designed weekly lab challenges that improved pass rates by 18%.',
      ],
    },
    {
      role: 'Freelance Web Developer',
      org: 'Self-employed',
      period: '2022 – Present',
      bullets: [
        'Delivered 10+ custom websites for small-to-mid-size businesses.',
        'Managed full project lifecycle: discovery → design → deployment.',
      ],
    },
  ];

  const education = [
    {
      degree: 'B.Sc. Computer Science',
      school: 'University of Technology',
      period: '2021 – 2025',
      note: "GPA 3.8 · Dean's List 2023 & 2024",
    },
  ];

  const languages = ['English (Fluent)', 'Amharic (Native)'];
  const interests  = ['Open-source', 'Hackathons', 'Machine Learning', 'UI/UX Design'];

  return (
    <div className="cv-page">
      {/* ── SIDEBAR ─────────────────────────────── */}
      <aside className="cv-sidebar">
        <div className="cv-sidebar-avatar-wrap">
          <div className="cv-sidebar-avatar"></div>
        </div>

        <h1 className="cv-sidebar-name">Yosef Melaku</h1>
        <p  className="cv-sidebar-title">Computer Science Student</p>

        <a
          href="/cv.pdf"
          download="Yosef_Melaku_CV.pdf"
          className="cv-dl-btn"
        >
          ↓ Download CV
        </a>

        <div className="cv-sidebar-section">
          <h4>Contact</h4>
          <ul>
            <li>
              <span className="cv-icon">✉</span>
              <a href="mailto:yosefmelaku9876@gmail.com">yosefmelaku9876@gmail.com</a>
            </li>
            <li>
              <span className="cv-icon">📞</span>
              <a href="tel:+251955765726">+251 955 765 726</a>
            </li>
            <li>
              <span className="cv-icon">🔗</span>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <span className="cv-icon">🐙</span>
              <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
          </ul>
        </div>

        <div className="cv-sidebar-section">
          <h4>Languages</h4>
          <ul>
            {languages.map((l, i) => <li key={i}>{l}</li>)}
          </ul>
        </div>

        <div className="cv-sidebar-section">
          <h4>Interests</h4>
          <div className="cv-tags">
            {interests.map((t, i) => <span key={i} className="cv-tag">{t}</span>)}
          </div>
        </div>
      </aside>

      {/* ── MAIN CONTENT ────────────────────────── */}
      <main className="cv-main">

        {/* Skills */}
        <section className="cv-content-section">
          <h2 className="cv-section-title">
            <span className="cv-section-icon">⚡</span> Skills
          </h2>
          <div className="cv-skills">
            {skills.map((s, i) => (
              <div key={i} className="cv-skill-row">
                <div className="cv-skill-label">
                  <span>{s.name}</span>
                  <span className="cv-skill-pct">{s.level}%</span>
                </div>
                <div className="cv-skill-bar">
                  <div
                    className="cv-skill-fill"
                    style={{ width: `${s.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="cv-content-section">
          <h2 className="cv-section-title">
            <span className="cv-section-icon">💼</span> Experience
          </h2>
          <div className="cv-timeline">
            {experience.map((e, i) => (
              <div key={i} className="cv-timeline-item">
                <div className="cv-timeline-dot" />
                <div className="cv-timeline-body">
                  <div className="cv-tl-header">
                    <div>
                      <p className="cv-tl-role">{e.role}</p>
                      <p className="cv-tl-org">{e.org}</p>
                    </div>
                    <span className="cv-tl-period">{e.period}</span>
                  </div>
                  <ul className="cv-tl-bullets">
                    {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="cv-content-section">
          <h2 className="cv-section-title">
            <span className="cv-section-icon">🎓</span> Education
          </h2>
          <div className="cv-timeline">
            {education.map((e, i) => (
              <div key={i} className="cv-timeline-item">
                <div className="cv-timeline-dot" />
                <div className="cv-timeline-body">
                  <div className="cv-tl-header">
                    <div>
                      <p className="cv-tl-role">{e.degree}</p>
                      <p className="cv-tl-org">{e.school}</p>
                    </div>
                    <span className="cv-tl-period">{e.period}</span>
                  </div>
                  <p className="cv-tl-note">{e.note}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
};

export default CV;