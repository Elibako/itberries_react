import React from 'react';
import './portfolio.css'
const Portfolio = () => {
  return (
        
    <div>
       < div id="portfolio-section">
            <h1>
                Portfolio
               </h1>
        </div>

      {/* Filter Navbar */}
      <div className="filter-navbar">
        <a href="#" className="filter-link active">
          All Employees
        </a>
        <a href="#" className="filter-link">Teams</a>
        <a href="#" className="filter-link">Roles</a>
      </div>
    </div>
    
  );
};

export default Portfolio;
