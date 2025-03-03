import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-container">
      <div className="hero-section">
        <h1 className="hero-title">Code Crafters 2.0</h1>
        <div className="hero-subtitle">
          <span>Is </span>
          <Link to="/here" className="here-link" aria-label="Go to the here page">
           Here!
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
