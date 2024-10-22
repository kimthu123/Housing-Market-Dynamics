import React from 'react';
import './Footer.css';  // Create CSS for Footer styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Contact Us: (123) 456-7890</p>
        <p>Email: info@realestate.com</p>
        <p>Address: 123 Main St, City, Country</p>
        <p>&copy; 2024 Real Estate Investments</p>
      </div>
    </footer>
  );
};

export default Footer;
