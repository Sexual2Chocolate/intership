import React, { useState, useEffect } from 'react';
import './slideshow.css';

const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slideshow-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slides ${currentIndex === index ? 'active' : ''}`}
        >
          <img src={image} alt={`slide-${index}`} style={{ width: '100%' }} />
        </div>
      ))}
      <div className="progress-container">
        {images.map((_, index) => (
          <div
            key={index}
            className={`progress-bar ${currentIndex === index ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
