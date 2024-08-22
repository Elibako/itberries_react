import React from 'react';
import './footer.css'; // Ensure you have the corresponding CSS file

const Footer = () => {
  return (
    <section id="footer">
      <div className="footer">
        <footer className="footer-content">
          <div className="footer-top">
            <div className="up-icon">
              <img src="src/assets/up.svg" alt="Up Icon" />
            </div>
            <a href="#navbar" className="back-anchor-tag">Back to top</a>
          </div>
          <div className="footer-icons">
            <img src="src/assets/facebook.svg" alt="Facebook Icon" />
            <img src="src/assets/IG.svg" alt="Instagram Icon" />
            <img src="src/assets/Instagram.svg" alt="Instagram Icon" />
            <img src="src/assets/mail.svg" alt="Mail Icon" />
          </div>
          <p>&copy; 2020 Tomasz Gajda All Rights Reserved.</p>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
