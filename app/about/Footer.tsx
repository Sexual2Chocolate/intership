import React from 'react';
import './Footer.css'; // Make sure to create and import this CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span className="footer-text">MARKETPLACE:</span>
        <div className="footer-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-discord"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
