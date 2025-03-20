import React from 'react';
import './CatImage.css';

const CatImage = ({ imageUrl }) => {
  if (!imageUrl) {
    return null; // No renderizar nada si imageUrl está vacío
  }

  return (
    <div className="cat-image">
      <img id='catimg' src={imageUrl} alt="Random cat" />
    </div>
  );
};

export default CatImage;