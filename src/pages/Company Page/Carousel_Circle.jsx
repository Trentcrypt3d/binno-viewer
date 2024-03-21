import React, { useState, useEffect } from 'react';
import CardFormat from './Card_Format';


const CardContainer = ({ imageUrls }) => {
  const cards = [
    { size: 'big', index: 0 },
    { size: 'medium', index: 1 },
    { size: 'small', index: 2 }
  ]; // Define the sizes and indices of the cards
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % imageUrls.length);
    }, 1000); // Advance every 1 second

    return () => clearInterval(intervalId);
  }, [imageUrls.length]);

  return (
  
    <div className="flex items-center space-x-8">
      
      {cards.map((card, index) => (
        <CardFormat
          key={index}
          imageUrl={imageUrls[(currentIndex + card.index) % imageUrls.length]}
          size={card.size}
        />
      ))}
    </div>
  );
  
};

export default CardContainer;
