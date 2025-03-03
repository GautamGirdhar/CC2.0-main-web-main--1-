import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h2 className="about-title">About CodeCrafters Hackathon</h2>
        <div className="about-title-underline"></div>
      </div>
      
      <div className="about-content">
        <div className="about-info-card">
          <h3 className="card-title">What is CodeCrafters?</h3>
          <p className="card-text">
          Codecrafters 2.0 is an exciting hackathon event taking place at CT University in Ludhiana from April 13, 2025, at 10 AM to April 14, 2025, at 10 AM. This event promises to be a vibrant celebration of creativity and innovation, bringing together tech enthusiasts, students, and professionals to collaborate and showcase their skills.

Organized by the Techverse Club, the members are thrilled to be part of this initiative, serving as coordinators and facilitators throughout the event. Participants will have the opportunity to work on various projects, tackle real-world challenges, and network with like-minded individuals. The hackathon aims to foster teamwork and inspire innovative solutions in technology.

With a focus on collaboration and learning, Codecrafters 2.0 will feature workshops, mentorship sessions, and prizes for the best projects. This is a fantastic opportunity for participants to enhance their coding skills, gain valuable experience, and potentially launch their ideas into the tech world. Whether you are a seasoned coder or a newcomer, Codecrafters 2.0 welcomes everyone to join in this thrilling journey of discovery and innovation. Don’t miss out on this chance to be part of something extraordinary! Codecrafters 2.0 is set to be an exhilarating hackathon event hosted at CT University in Ludhiana, running from April 13, 2025, at 10 AM to April 14, 2025, at 10 AM. This event is designed to unite tech enthusiasts, students, and professionals, providing a platform for collaboration and innovation.

The Techverse Club is the proud organizer of this event, with its members eagerly participating as coordinators and facilitators. They are committed to creating an engaging environment where participants can dive into various projects, address real-world challenges, and connect with peers who share their passion for technology.

Codecrafters 2.0 will emphasize teamwork and creativity, featuring a range of activities including workshops, mentorship opportunities, and exciting prizes for outstanding projects. This hackathon is an excellent chance for participants to sharpen their coding abilities, gain practical experience, and potentially bring their innovative ideas to life.

Whether you are an experienced developer or just starting your coding journey, Codecrafters 2.0 invites everyone to take part in this remarkable experience. Join us for a weekend filled with learning, networking, and the thrill of creating something extraordinary!
          </p>
          <p className="card-text">
            Whether you're a seasoned programmer or just starting your coding journey, CodeCrafters provides the perfect platform to enhance your skills, expand your network, and transform your ideas into reality.
          </p>
        </div>
        
        <div className="about-features">
          <div className="feature-item">
            <div className="feature-icon">
              <i className="feature-bullet"></i>
            </div>
            <div className="feature-content">
              <h4 className="feature-title">Collaborative Environment</h4>
              <p className="feature-text">Work with like-minded individuals and industry experts in a supportive atmosphere designed to foster innovation.</p>
            </div>
          </div>
          
          <div className="feature-item">
            <div className="feature-icon">
              <i className="feature-bullet"></i>
            </div>
            <div className="feature-content">
              <h4 className="feature-title">Expert Mentorship</h4>
              <p className="feature-text">Receive guidance from industry professionals who will help you refine your ideas and overcome technical challenges.</p>
            </div>
          </div>

          <div className="feature-item">
  <div className="feature-icon">
    <i className="feature-bullet"></i>
  </div>
  <div className="feature-content">
    <h4 className="feature-title">Workshops and Skill Development</h4>
    <p className="feature-text">Participate in hands-on workshops designed to enhance your technical skills and knowledge in various domains.</p>
  </div>
</div>

<div className="feature-item">
  <div className="feature-icon">
    <i className="feature-bullet"></i>
  </div>
  <div className="feature-content">
    <h4 className="feature-title">Exciting Prizes</h4>
    <p className="feature-text">Compete for amazing prizes and recognition for your innovative projects, showcasing your talent and hard work.</p>
  </div>
</div>

<div className="feature-item">
  <div className="feature-icon">
    <i className="feature-bullet"></i>
  </div>
  <div className="feature-content">
    <h4 className="feature-title">Real-World Challenges</h4>
    <p className="feature-text">Tackle practical problems faced by industries today, giving your projects real-world relevance and impact.</p>
  </div>
</div>

<div className="feature-item">
  <div className="feature-icon">
    <i className="feature-bullet"></i>
  </div>
  <div className="feature-content">
    <h4 className="feature-title">Showcase Your Work</h4>
    <p className="feature-text">Present your projects to a panel of judges and an audience, gaining valuable feedback and exposure for your innovative ideas.</p>
  </div>
</div>


          
          <div className="feature-item">
            <div className="feature-icon">
              <i className="feature-bullet"></i>
            </div>
            <div className="feature-content">
              <h4 className="feature-title">Valuable Workshops</h4>
              <p className="feature-text">Attend skill-building sessions on emerging technologies, project management, and presentation techniques.</p>
            </div>
          </div>
          
          <div className="feature-item">
            <div className="feature-icon">
              <i className="feature-bullet"></i>
            </div>
            <div className="feature-content">
              <h4 className="feature-title">Networking Opportunities</h4>
              <p className="feature-text">Connect with potential employers, collaborators, and friends who share your passion for technology.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="about-stats">
        <div className="stat-item">
          <div className="stat-value">1,200+</div>
          <div className="stat-label">Participants</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">24</div>
          <div className="stat-label">Hours</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">25+</div>
          <div className="stat-label">Cities</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">INR 100K+</div>
          <div className="stat-label">In Prizes</div>
        </div>
      </div>
      
      <div className="about-cta">
        <p className="cta-text">Ready to turn your ideas into reality?</p>
       <Link to="/register" className="cta-button" >JOIN CODECRAFTERS</Link>
      </div>
    </div>
  );
};

export default About;