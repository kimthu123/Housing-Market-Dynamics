import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';  // Add any styles for the header

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Real Estate</h1>
      </div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/properties">Properties</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
