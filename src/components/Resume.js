import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <section className="resume">
      <h2>Resume</h2>
      <div className="resume-items">
        <div className="experience">
          <h3>Experience</h3>
          <ul>
            <li><strong>Frontend Developer</strong> at XYZ Company</li>
            <li><strong>Web Designer</strong> at ABC Company</li>
          </ul>
        </div>
        <div className="education">
          <h3>Education</h3>
          <ul>
            <li><strong>B.Sc. in Computer Science</strong> from XYZ University</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;
