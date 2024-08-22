import React from 'react';
import './aboutme.css';
const Aboutme = () => {
  return (
    <section id="About_Me">
      <div className="about-me-header">
        <div className="about-me-text">
          <h1 className="about-header">About Me</h1>
          <p>
            Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem <br /> sed viverra. 
            In vel urna quis libero viverra facilisis ut ac est.
          </p>
        </div>
        <div className="explore">
          <div className="explore-container">
            <div className="line"></div>
            <p>Explore</p>
            <div className="line"></div>
          </div>
         
        </div>
        <div className="exp-img">
            <img src="src/assets/line2.svg" alt="Line decoration" />
          </div>
      </div>
      <div className="grid">
        <div className="text-grid">
          <div className="design-grid">
            <h1>Design</h1>
            <p>I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.</p>
          </div>
          <div className="development-grid">
            <h1>Development</h1>
            <p>I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.</p>
          </div>
          <div className="maintenance-grid">
            <h1>Maintenance</h1>
            <p>I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
