import { useState, useEffect } from "react";
import "./Here.css";

import { Link } from "react-router-dom";

const LandingPage = () => {
  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Update countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      // Set your registration end date here
      const registrationEndDate = new Date("2025-03-31T23:59:59");
      const now = new Date();
      const difference = registrationEndDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Sample data for hackathon visualization
  const hackathonData = [
    { country: "USA", count: 340 },
    { country: "India", count: 285 },
    { country: "UK", count: 195 },
    { country: "Germany", count: 180 },
    { country: "Canada", count: 165 },
  ];

  return (
    <div className="codecrafters-landing">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="codecrafters-container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">CODECRAFTERS 2.0</h1>
              <p className="hero-subtitle">
                Unleash your coding potential and build something extraordinary
              </p>
              <div className="countdown-container">
                <p className="countdown-title">Registration Closes In:</p>
                <div className="countdown-timer">
                  <div className="countdown-item">
                    <div className="countdown-value">{timeLeft.days}</div>
                    <div className="countdown-label">Days</div>
                  </div>
                  <div className="countdown-item">
                    <div className="countdown-value">{timeLeft.hours}</div>
                    <div className="countdown-label">Hours</div>
                  </div>
                  <div className="countdown-item">
                    <div className="countdown-value">{timeLeft.minutes}</div>
                    <div className="countdown-label">Minutes</div>
                  </div>
                  <div className="countdown-item">
                    <div className="countdown-value">{timeLeft.seconds}</div>
                    <div className="countdown-label">Seconds</div>
                  </div>
                </div>
              </div>
              <Link to="/register" className=" register-button">
                REGISTER HERE
              </Link>
            </div>
            <div className="hero-sidebar">
              <div className="highlights-card">
                <h2 className="highlights-title">Event Highlights</h2>
                <ul className="highlights-list">
                  <li className="highlight-item">
                    <div className="highlight-bullet"></div>
                    <span>24-hour intense coding challenge</span>
                  </li>
                  <li className="highlight-item">
                    <div className="highlight-bullet"></div>
                    <span>100k+ INR in prizes</span>
                  </li>
                  <li className="highlight-item">
                    <div className="highlight-bullet"></div>
                    <span>Networking with industry experts</span>
                  </li>
                  <li className="highlight-item">
                    <div className="highlight-bullet"></div>
                    <span>Workshops and mentorship</span>
                  </li>
                  <li className="highlight-item">
                    <div className="highlight-bullet"></div>
                    <span>Opportunity to showcase your skills</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="codecrafters-container">
          <h2 className="section-title">About CodeCrafters 2.0</h2>
          <div className="about-content">
            <div className="about-card">
              <h3 className="card-title">What is CodeCrafters?</h3>
              <p className="card-text">
                CodeCrafters is an annual hackathon that brings together the
                brightest minds in technology to solve real-world problems
                through code. Now in its second year, CodeCrafters 2.0 promises
                to be bigger and better than ever before.
              </p>
              <p className="card-text">
                Our mission is to foster innovation, collaboration, and learning
                in a competitive yet supportive environment. Whether you&apos;re
                a seasoned developer or just starting your coding journey,
                CodeCrafters welcomes participants of all skill levels.
              </p>
            </div>
            <div className="about-card">
              <h3 className="card-title">Why Participate?</h3>
              <div className="reasons-list">
                <div className="reason-item">
                  <div className="reason-number">1</div>
                  <div className="reason-content">
                    <h4 className="reason-title">Learn & Grow</h4>
                    <p className="reason-text">
                      Enhance your technical skills and learn from peers and
                      mentors.
                    </p>
                  </div>
                </div>
                <div className="reason-item">
                  <div className="reason-number">2</div>
                  <div className="reason-content">
                    <h4 className="reason-title">Network</h4>
                    <p className="reason-text">
                      Connect with industry professionals and like-minded
                      individuals.
                    </p>
                  </div>
                </div>
                <div className="reason-item">
                  <div className="reason-number">3</div>
                  <div className="reason-content">
                    <h4 className="reason-title">Win Prizes</h4>
                    <p className="reason-text">
                      Compete for cash prizes, internships, and exciting tech
                      gadgets.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hackathon History */}
      <section className="history-section">
        <div className="codecrafters-container">
          <h2 className="section-title">The Evolution of Hackathons</h2>
          <div className="history-card">
            <p className="history-text">
              The concept of hackathons originated in the late 1990s. The term
              &quot;hackathon&quot; is a combination of &quot;hack&quot;
              (exploratory programming) and &quot;marathon&quot; (a
              long-distance running event). One of the first known hackathons
              was organized by OpenBSD in Calgary in 1999, where ten developers
              came together to avoid legal problems caused by export regulations
              of cryptographic software from the United States.
            </p>
            <p className="history-text">
              In the early 2000s, companies like Yahoo! and Facebook began
              hosting internal hackathons to encourage innovation among their
              employees. Facebook&apos;s &quot;Like&quot; button and Chat
              feature were both developed during company hackathons.
            </p>
            <p className="history-text">
              Today, hackathons have evolved into global phenomena with
              thousands of events taking place annually across the world. They
              span various sectors including technology, healthcare, finance,
              education, and social impact. Major hackathons like Major League
              Hacking, AngelHack, and NASA Space Apps Challenge attract
              participants from around the globe.
            </p>
          </div>
        </div>
      </section>

      {/* Visualization Section */}
      <section className="visualization-section">
        <div className="codecrafters-container">
          <h2 className="section-title">Global Hackathon Landscape</h2>
          <div className="visualization-card">
            <h3 className="visualization-title">
              Top Countries Hosting Hackathons Annually
            </h3>
            <div className="chart-container">
              {hackathonData.map((item, index) => (
                <div key={index} className="chart-column">
                  <div
                    className="chart-bar"
                    style={{
                      height: `${
                        (item.count / hackathonData[0].count) * 200
                      }px`,
                    }}
                  ></div>
                  <div className="chart-label">
                    <div className="country-name">{item.country}</div>
                    <div className="country-value">{item.count}</div>
                  </div>
                </div>
              ))}
            </div>
            <p className="chart-caption">
              Data based on global hackathon statistics for 2024
            </p>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="cta-section">
        <div className="codecrafters-container">
          <h2 className="cta-title">Ready to Code, Create, and Conquer?</h2>
          <p className="cta-text">
            Join hundreds of coders, designers, and innovators in this exciting
            48-hour hackathon experience!
          </p>
          <Link to="/register" className=" register-button">
            REGISTER HERE
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
