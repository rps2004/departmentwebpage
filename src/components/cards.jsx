import React from 'react';
import './cards.css';

export const Card = ({ image, link }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={image} alt="Card" className="card-image" />
      <div className="card-footer">
        {isHovered && (
          <button onClick={() => window.open(link, '_blank')} className="read-more-button">
            Read More
          </button>
        )}
      </div>
    </div>
  );
};


