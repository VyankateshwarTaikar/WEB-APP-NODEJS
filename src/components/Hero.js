import React from 'react';
import './Hero.css';  // CSS to replicate the exact design

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hello, I'm John Doe</h1>
        <p>Creative Developer based in New York</p>
        <a href="/resume" className="btn">Download Resume</a>
      </div>
    </section>
  );
}

export default Hero;
