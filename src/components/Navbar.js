import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/tour-logo.jpeg';
import '../styles/navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: 'Holidays', path: '/' },
    { label: 'Bus', path: '/bus' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <NavLink to="/" className="brand" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="Tour Planner Logo" className="navbar-logo" />
          <span className="brand-text">Tour Planner</span>
        </NavLink>

        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
