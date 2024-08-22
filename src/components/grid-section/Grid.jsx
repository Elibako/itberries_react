import React from 'react';
import './grid.css';

const ImageGrid = () => {
  return (
    <div className="image-grid">
      {/* Images in the first row */}
      <div className="image-container">
        <img src="src/assets/Project-1.png" alt="" />
        <div className="overlay">
          <div className="overlay-text">Overlay Text 1</div>
        </div>
      </div>
      <div className="image-container">
        <img src="src/assets/Project.png" alt="" />
        <div className="overlay">
          <div className="overlay-text" style={{ fontSize: 'small' }}>
            coded, designed
            <p><strong>eatsome.</strong></p>
            <p style={{ fontSize: 'small' }}>
              Restaurant browsing in React.js (Using Yelp API)
            </p>
            <div className="morebtn">
              <a href="#">More</a>
              <a href="#">Demo</a>
            </div>
          </div>
        </div>
      </div>
      <div className="image-container">
        <img src="src/assets/Rectangle 17.png" alt="" />
        <div className="overlay">
          <div className="overlay-text">Overlay Text 3</div>
        </div>
      </div>
      {/* Images in the second row */}
      <div className="image-container">
        <img src="src/assets/Rectangle 17.png" alt="" />
        <div className="overlay">
          <div className="overlay-text">Overlay Text 4</div>
        </div>
      </div>
      <div className="image-container">
        <img src="src/assets/Project-1.png" alt="" />
        <div className="overlay">
          <div className="overlay-text">Overlay Text 5</div>
        </div>
      </div>
      {/* Images in the third row */}
      <div className="image-container">
        <img src="src/assets/Project.png" alt="" />
        <div className="overlay">
          <div className="overlay-text">Overlay Text 6</div>
        </div>
      </div>

    </div>
  );
};

export default ImageGrid;
