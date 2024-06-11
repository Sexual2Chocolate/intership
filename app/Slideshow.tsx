import React, { useState, useEffect } from 'react';
import Collection from './test';
import './slideshow.css';

const Slideshow = ({ collections }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % collections.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [collections.length]);

  return (
    <div className="slideshow-container">
      {collections.map((collection, index) => (
        <div
          key={index}
          className={`slides ${currentIndex === index ? 'active' : ''}`}
        >
          {currentIndex === index && <Collection {...collection} />}
        </div>
      ))}
      <div className="progress-container">
        {collections.map((_, index) => (
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
