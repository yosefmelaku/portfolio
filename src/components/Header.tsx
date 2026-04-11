import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/',           label: 'Home'       },
  { to: '/about',      label: 'About'      },
  { to: '/skills',     label: 'Skills'     },
  { to: '/projects',   label: 'Projects'   },
  { to: '/experience', label: 'Experience' },
  { to: '/cv',         label: 'CV'         },
  { to: '/contact',    label: 'Contact'    },
];

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const close = () => setOpen(false);

  return (
    <>
      <header className="site-header">
        <div className="nav-inner">
          <span className="nav-brand">Yosef Melaku</span>

          {/* Desktop links */}
          <nav>
            <ul className="nav-links">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className={location.pathname === to ? 'active' : ''}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Hamburger */}
          <button
            className={`nav-hamburger${open ? ' open' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(o => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div className={`nav-drawer${open ? ' open' : ''}`} aria-hidden={!open}>
        <ul>
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link to={to} onClick={close}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Header;