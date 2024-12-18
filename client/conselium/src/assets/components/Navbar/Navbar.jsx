import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState({
    home: false,
    services: false,
    about: false,
    portfolio: false,
    contact: false,
  });

  const toggleDropdown = (menu) => {
    setDropdownVisible((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  return (
    <nav className="navbar">
      {/* Left side for Logo */}
      <div className="logo">Conselium</div>

      {/* Middle for Navigation Links */}
      <ul className="nav-links">
        <li>
          <a href="#home">Home</a>
          <span className="dropdown-arrow" onClick={() => toggleDropdown('home')}>▼</span>
          {dropdownVisible.home && (
            <ul className="dropdown-menu">
              <li><a href="#home-sub1">Home Submenu 1</a></li>
              <li><a href="#home-sub2">Home Submenu 2</a></li>
              <li><a href="#home-sub3">Home Submenu 3</a></li>
            </ul>
          )}
        </li>
        <li>
          <a href="#services">About</a>
          <span className="dropdown-arrow" onClick={() => toggleDropdown('services')}>▼</span>
          {dropdownVisible.services && (
            <ul className="dropdown-menu">
              <li><a href="#services-sub1">Services Submenu 1</a></li>
              <li><a href="#services-sub2">Services Submenu 2</a></li>
              <li><a href="#services-sub3">Services Submenu 3</a></li>
            </ul>
          )}
        </li>
        <li>
          <a href="#about">Consulting Services</a>
          <span className="dropdown-arrow" onClick={() => toggleDropdown('about')}>▼</span>
          {dropdownVisible.about && (
            <ul className="dropdown-menu">
              <li><a href="#about-sub1">About Submenu 1</a></li>
              <li><a href="#about-sub2">About Submenu 2</a></li>
              <li><a href="#about-sub3">About Submenu 3</a></li>
            </ul>
          )}
        </li>
        <li>
          <a href="#portfolio">Training Services</a>
          <span className="dropdown-arrow" onClick={() => toggleDropdown('portfolio')}>▼</span>
          {dropdownVisible.portfolio && (
            <ul className="dropdown-menu">
              <li><a href="#portfolio-sub1">Portfolio Submenu 1</a></li>
              <li><a href="#portfolio-sub2">Portfolio Submenu 2</a></li>
              <li><a href="#portfolio-sub3">Portfolio Submenu 3</a></li>
            </ul>
          )}
        </li>
        <li>
          <a href="#contact">Insights & Media</a>
          <span className="dropdown-arrow" onClick={() => toggleDropdown('contact')}>▼</span>
          {dropdownVisible.contact && (
            <ul className="dropdown-menu">
              <li><a href="#contact-sub1">Contact Submenu 1</a></li>
              <li><a href="#contact-sub2">Contact Submenu 2</a></li>
              <li><a href="#contact-sub3">Contact Submenu 3</a></li>
            </ul>
          )}
        </li>
      </ul>

      {/* Right side for Button */}
      <button className="dynamic-button">Free Consulation →</button>
    </nav>
  );
};

export default Navbar;