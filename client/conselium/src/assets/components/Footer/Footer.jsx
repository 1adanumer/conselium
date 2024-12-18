import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and company info */}
        <div className="footer-logo">
          <img src="logo.png" alt="SwiftLine Logo" className="logo" />
          <p className="footer-slogan">Delivering Tomorrow, Today.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <ul>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
          <ul>
            <li><a href="#blog">Conselius@gmail.com</a></li>
            <li><a href="#privacy">+1 564238889</a></li>
            <li><a href="#terms">Los Angeles, DownTown</a></li>
            <li><a href="#faq">United States</a></li>
          </ul>

        </div>

        {/* Newsletter Signup */}
        <div className="footer-newsletter">
          <h3>Subscribe to our Newsletter</h3>
          <input type="email" placeholder="Enter your email" className="newsletter-input" />
          <button className="newsletter-btn">Subscribe</button>
        </div>

        
      </div>
    </footer>
  );
};

export default Footer;
