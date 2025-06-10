
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
      }, 800); // Faster transition duration
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, [nextImageIndex, images.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Current Image */}
      <div
        className={`absolute inset-0 transition-all duration-[800ms] ease-in-out ${
          isTransitioning ? 'scale-110 opacity-0 blur-sm' : 'scale-100 opacity-100 blur-0'
        }`}
        style={{
          transform: isTransitioning ? 'scale(1.1) translateY(-20px)' : 'scale(1) translateY(0)',
        }}
      >
        <img
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex + 1}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Next Image (for smooth liquid transition) */}
      <div
        className={`absolute inset-0 transition-all duration-[800ms] ease-in-out ${
          isTransitioning ? 'scale-100 opacity-100 blur-0' : 'scale-110 opacity-0 blur-sm'
        }`}
        style={{
          transform: isTransitioning ? 'scale(1) translateY(0)' : 'scale(1.1) translateY(20px)',
        }}
      >
        <img
          src={images[nextImageIndex]}
          alt={`Slide ${nextImageIndex + 1}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>
    </div>
  );
};

export default ImageSlideshow;
