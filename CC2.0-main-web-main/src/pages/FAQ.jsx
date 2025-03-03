import React, { useState } from "react";
import "./FAQ.css";
import { Link } from "react-router-dom";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is Codecrafters 2.0?",
      answer:
        "Codecrafters 2.0 is a hackathon event organized by the Techverse Club at CT University, Ludhiana, where participants collaborate to create innovative tech solutions.",
    },
    {
      question: "Who can participate in the hackathon?",
      answer:
        "The hackathon is open to all students, tech enthusiasts, and professionals who are interested in coding and technology.",
    },
    {
      question: "What should I bring to the event?",
      answer:
        "Participants should bring their laptops, chargers, and any other materials they may need for coding. It's also a good idea to bring your creativity!",
    },
    {
      question: "Are there any prizes for winners?",
      answer:
        "Yes! There will be exciting prizes for the best projects, along with recognition and opportunities for networking.",
    },
    {
      question: "Will there be food and refreshments?",
      answer:
        "Yes, food and refreshments will be provided throughout the event to keep participants energized.",
    },
    {
      question: "What is the duration of the hackathon?",
      answer:
        "The hackathon will take place over a 24-hour period, starting from April 10, 2025, at 10 AM and ending on April 11, 2025, at 3:00 PM.",
    },
    {
      question: "Is there a registration fee?",
      answer:
        "No, registration for Codecrafters 2.0 is completely free! We encourage everyone to participate.",
    },
    {
      question: "How will the projects be judged?",
      answer:
        "Projects will be evaluated based on creativity, technical implementation, and overall impact. A panel of judges will review the submissions.",
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faqs-container">
      <h2 className="faqs-title">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleAnswer(index)}>
            <h4>{faq.question}</h4>
            <span className="faq-toggle">
              {activeIndex === index ? "-" : "+"}
            </span>
          </div>
          {activeIndex === index && <p className="faq-answer">{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQs;
