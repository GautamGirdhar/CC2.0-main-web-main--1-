import React from 'react';
import { Download } from 'lucide-react';
import './Rules.css'; // Import external stylesheet

const Rules = () => {
  const handleDownload = () => {
    alert('Downloading problem statement and detailed rules...');
  };

  return (
    <section className="rules-container">
      <div className="rules-header">
        <h2 className="rules-title">HACKATHON RULES</h2>
        <div className="rules-divider"></div>
        <p className="rules-description">
          Please read the following rules carefully before registering for the event.
        </p>
      </div>

      <div className="rules-grid">
        <div className="rules-card">
          <h3 className="rules-subtitle">General Rules</h3>
          <ul className="rules-list">
            <li><span className="rules-bullet"></span>Teams must consist of 2-4 members.</li>
            <li><span className="rules-bullet"></span>All team members should be enrolled in an accredited educational institution.</li>
            <li><span className="rules-bullet"></span>Projects must be started from scratch during the hackathon.</li>
            <li><span className="rules-bullet"></span>Use of open-source libraries and frameworks is allowed.</li>
            <li><span className="rules-bullet"></span>Submissions must include source code and documentation.</li>
          </ul>
        </div>

        <div className="rules-card">
          <h3 className="rules-subtitle">Judging Criteria</h3>
          <ul className="rules-list">
            <li><span className="rules-bullet"></span>Innovation and Creativity: 30%</li>
            <li><span className="rules-bullet"></span>Technical Complexity: 25%</li>
            <li><span className="rules-bullet"></span>Practicality and Impact: 20%</li>
            <li><span className="rules-bullet"></span>Presentation Quality: 15%</li>
            <li><span className="rules-bullet"></span>User Experience: 10%</li>
          </ul>
        </div>
      </div>

      <div className="rules-card">
        <h3 className="rules-subtitle">Timeline</h3>
        <div className="rules-timeline">
          <div className="rules-timeline-item">
            <h4>Registration</h4>
            <p>March 1 - March 20, 2025</p>
          </div>
          <div className="rules-timeline-item">
            <h4>Kickoff</h4>
            <p>March 25, 2025 (9:00 AM)</p>
          </div>
          <div className="rules-timeline-item">
            <h4>Submission Deadline</h4>
            <p>March 27, 2025 (5:00 PM)</p>
          </div>
          <div className="rules-timeline-item">
            <h4>Results</h4>
            <p>March 30, 2025</p>
          </div>
        </div>
      </div>

      <div className="rules-button-container">
        <button onClick={handleDownload} className="rules-download-btn">
          <Download size={18} className="rules-icon" />
          Detailed Rules
        </button>
        <button onClick={handleDownload} className="rules-download-btn">
          <Download size={18} className="rules-icon" />
          Problem Statement
        </button>
      </div>
    </section>
  );
};

export default Rules;
