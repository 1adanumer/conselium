import React from 'react';
import './Hero.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Safeguard your business with our <br></br>comprehensive AMLCFT and financial crime solutions</h1>
        <div className="statue-container">
          <img src='socrates.png' alt="3D Statue" className="statue-image" />
          <div className="points">
            <div className="point point-left">
              <p>
              →
              Ensure Compliance. Detect Threats. Empower Your Team.
              </p>
            </div>
            <div className="point point-right">
              <p>
              →
              Protect your organization from the devastating impacts of financial crimes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
