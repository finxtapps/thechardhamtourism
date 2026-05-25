// src/components/Hero.js

import React from "react";
import "../styles/home.css";

function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <p className="hero-subtitle">Dubai Tour Packages</p>

        <h1>Explore Our Tour Packages</h1>

        <div className="hero-tabs">
          <div className="hero-tab">
            <span>🛳️</span>
            <p>Cruise</p>
          </div>

          <div className="hero-tab active">
            <span>📍</span>
            <p>Popular Trips</p>
          </div>

          <div className="hero-tab">
            <span>🏖️</span>
            <p>Holiday Destination</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;