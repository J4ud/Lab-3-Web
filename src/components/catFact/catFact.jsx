import React from 'react';
import './catFact.css';

const CatFact = ({ fact }) => {
  return (
    <div className="cat-fact">
      <p>{fact}</p>
    </div>
  );
};

export default CatFact;