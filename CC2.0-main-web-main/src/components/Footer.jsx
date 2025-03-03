import "./Footer.css";
import { FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

import { ImWhatsapp } from "react-icons/im";

function Footer() {
  const socialLinks = [
    {
      name: "Whatsapp",
      url: "https://chat.whatsapp.com/IiClyLPXlooJZWlJ66CnlN",
      icon: <ImWhatsapp />,
    },
    {
      name: "LinkedIn",
      url: "http://linkedin.com/in/techverse-ct-university-aa3357351",
      icon: <FaLinkedin />,
    },
    {
      name: "Email",
      url: "mailto:techverse@ctuniversity.in",
      icon: <FaEnvelope />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/tech.versectu?utm_source=qr",
      icon: <FaInstagram />,
    },
  ]; // ✅ Added missing closing bracket

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Email Link */}
        <p className="footer-tagline">
          EMPOWERING INNOVATION, ONE LINE OF CODE AT A TIME.
        </p>

        {/* Social Icons */}
        <div className="social-icons">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
