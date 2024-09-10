import React from 'react';
import './Portfolio.css';  // Styling for portfolio section

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio-items">
        <div className="portfolio-item">
          <img src="/path-to-image.jpg" alt="Project 1" />
          <h3>Project 1</h3>
        </div>
        {/* Add more projects */}
      </div>
    </section>
  );
}

export default Portfolio;
