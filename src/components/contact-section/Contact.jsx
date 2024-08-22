import React from 'react';
import './contact.css'; // Ensure you have the corresponding CSS file

const Contact = () => {
  return (
    <section id="about_me">
      <div className="about-me-header">
        <div className="about-me-text">
          <h1 className="about-header">Contact</h1>
          <p>
            Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem <br /> sed viverra. 
            In vel urna quis libero viverra facilisis ut ac est.
          </p>
        </div>
        <div className="explore">
          <div className="explore-container">
            <div className="exp-img">
              <img src="src/assets/line2.svg" alt="" />
            </div>
          </div>
        </div>
      </div>

      <section id="contact-form">
        <form className="contact-form">
          <label htmlFor="name">Enter your name:</label>
          <input type="text" id="name" name="name" placeholder="Your Name" />
          
          <label htmlFor="email">Enter your email:</label>
          <input type="email" id="email" name="email" placeholder="Your Email" />

          <label htmlFor="number">Enter your number:</label>
          <input type="number" id="number" name="phone-number" placeholder="Your number" />
          
          <label htmlFor="message">Your Message:</label>
          <textarea id="message" name="message" placeholder="Your Message"></textarea>
          
          <button type="submit">Send</button>
        </form>
      </section>
    </section>
  );
};

export default Contact;
