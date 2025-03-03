import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    // Handle window resize
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile && menuOpen) setMenuOpen(false);
    };

    // Handle clicks outside menu
    const handleClickOutside = (e) => {
      if (menuOpen && !e.target.closest(".navbar-container")) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("click", handleClickOutside);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { path: "/rules", label: "RULES" },
    { path: "/about", label: "ABOUT" },
    { path: "/sponsors", label: "SPONSORS" },
    { path: "/faqs", label: "FAQs" },
    { path: "/register", label: "REGISTER HERE", className: "register-btn" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <a href="https://www.ctuniversity.in/">
            <img
              src="/Ct_logo.png"
              alt="CT University Logo"
              className="ctlogo"
            />
          </a>
          <img
            src="/techverse.jpeg"
            alt="TechVerse Logo"
            className="techverselogo"
          />
          <Link to="/" className="navbar-logo">
            CODECRAFTERS
          </Link>
        </div>

        {isMobile && (
          <div
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        )}

        <div
          className={`nav-menu ${menuOpen ? "open" : ""} ${
            isMobile ? "mobile" : "desktop"
          }`}
        >
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className={`nav-item ${link.className || ""}`}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
