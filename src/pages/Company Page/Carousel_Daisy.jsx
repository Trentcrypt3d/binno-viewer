import React, { useState, useEffect } from 'react';
import CarouselCompany from './Company_Container';

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselItems = [
    // <CarouselCompany key={'ross'}/>,
    "https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg",
    "https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg",
    "https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg",
    "https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg",
    "https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg",
    "https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % carouselItems.length);
    }, 2000); // Change slide every 2 seconds

    return () => clearInterval(intervalId);
  }, [carouselItems.length]); // Re-run effect when carouselItems.length changes

  return (
    <div className="carousel carousel-end max-w-5xl p-0 space-x-4 bg-neutral rounded-box h-auto" style={{ overflowX: "hidden" }}>
      <div className="carousel-inner" style={{ display: "flex", flexDirection: "row", transition: "transform 0.5s ease", transform: `translateX(${currentIndex * 31.5}%)` }}>
        {carouselItems.map((item, index) => (
          <div key={index} className={`carousel-item ${index === currentIndex ? 'centered-item' : ''}`}>
            <img src={item} className="rounded-box m-4" alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
