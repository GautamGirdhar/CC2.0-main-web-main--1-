import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Handle window resize to detect mobile devices
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuOpen && !e.target.closest('.navbar-container')) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [menuOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          CODECRAFTERS
        </Link>

        {/* Hamburger Menu - Show on mobile */}
        {isMobile && (
          <div className={`hamburger ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        )}

        {/* Navigation Menu */}
        <div className={`nav-menu ${menuOpen ? "open" : ""} ${isMobile ? "mobile" : "desktop"}`}>
          <Link to="/rules" className="nav-item" onClick={() => setMenuOpen(false)}>RULES</Link>
          <Link to="/about" className="nav-item" onClick={() => setMenuOpen(false)}>ABOUT</Link>
          
          <Link to="/sponsors" className="nav-item" onClick={() => setMenuOpen(false)}>SPONSORS</Link>

          <Link to="/faqs" className="nav-item" onClick={() => setMenuOpen(false)}>FAQs</Link>
          
          <Link to="/register" className="nav-item register-btn" onClick={() => setMenuOpen(false)}>REGISTER HERE</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;