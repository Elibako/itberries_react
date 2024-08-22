import React from 'react';
import './navbar.css';  // Import the CSS file

const Navbar = () => {
  return (
    <div className='container' id='navbar'>
      <nav className='navbar'>
        <div className='logo'>
          <img src='src/assets/logo.png' alt='Logo' /> 
        </div>
        <input type='checkbox' id='menu-toggle' />
        <label htmlFor='menu-toggle' className='menu-icon'>&#9776;</label>
        <ul className='nav-links'>
          <li><a href='#About_Me'>About me</a></li>
          <li><a href='#skills-list'>Skills</a></li>
          <li><a href='#portfolio-section'>Portfolio</a></li>
          <li><a href='#about_me'>Contact Me</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
