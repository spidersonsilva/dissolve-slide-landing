import React, { useState, useEffect, useRef } from 'react';

const ImageSlideshow = () => {
  const images = [
    '/lovable-uploads/e81042b8-91c3-4322-9198-3c74930f84c8.png',
    '/lovable-uploads/89067492-e791-419a-b38e-2441dfd6a3ac.png',
    '/lovable-uploads/968e7749-387e-4c5a-bb57-2969d07054e6.png',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const flashRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      // Step 1: show flash
      if (flashRef.current) {
        flashRef.current.style.transition = 'opacity 80ms ease-in';
        flashRef.current.style.opacity = '1';
      }

      // Step 2: after flash, hide it and switch image
      setTimeout(() => {
        if (flashRef.current) {
          flashRef.current.style.transition = 'opacity 100ms ease-out';
          flashRef.current.style.opacity = '0';
        }

        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 100); // Adjust if needed
    }, 2500); // Every 2.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Main image */}
      <img
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
        className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-300 ease-in-out ${
          images[currentImageIndex].includes('e81042b8')
            ? 'object-[50.6%_center]'
            : 'object-center'
        }`}
      />

      {/* Flash overlay */}
      <div
        ref={flashRef}
        className="absolute inset-0 bg-white mix-blend-difference opacity-0 pointer-events-none"
      />

      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/20" />
    </div>
  );
};

export default ImageSlideshow;
