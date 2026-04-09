import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header style={{
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      color: 'white',
      padding: '1rem',
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000
    }}>
      <nav>
        <ul style={{
          listStyle: 'none',
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          margin: 0,
          padding: 0
        }}>
          <li><Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Home</Link></li>
          <li><Link to="/about" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>About</Link></li>
          <li><Link to="/skills" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Skills</Link></li>
          <li><Link to="/projects" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Projects</Link></li>
          <li><Link to="/experience" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Experience</Link></li>
          <li><Link to="/cv" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>CV</Link></li>
          <li><Link to="/contact" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;