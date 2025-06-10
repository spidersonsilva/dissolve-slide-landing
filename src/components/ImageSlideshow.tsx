
import React, { useState, useEffect } from 'react';

const ImageSlideshow = () => {
  const images = [
    '/lovable-uploads/e81042b8-91c3-4322-9198-3c74930f84c8.png',
    '/lovable-uploads/89067492-e791-419a-b38e-2441dfd6a3ac.png',
    '/lovable-uploads/968e7749-387e-4c5a-bb57-2969d07054e6.png'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentImageIndex(nextImageIndex);
        setNextImageIndex((nextImageIndex + 1) % images.length);
        setIsTransitioning(false);
      }, 1000); // Half of transition duration
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [nextImageIndex, images.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Current Image */}
      <div
        className={`absolute inset-0 transition-opacity duration-2000 ease-in-out ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <img
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex + 1}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Next Image (for smooth transition) */}
      <div
        className={`absolute inset-0 transition-opacity duration-2000 ease-in-out ${
          isTransitioning ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <img
          src={images[nextImageIndex]}
          alt={`Slide ${nextImageIndex + 1}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true);
                setTimeout(() => {
                  setCurrentImageIndex(index);
                  setNextImageIndex((index + 1) % images.length);
                  setIsTransitioning(false);
                }, 1000);
              }
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlideshow;
