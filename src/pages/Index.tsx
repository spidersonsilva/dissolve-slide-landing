
import React from 'react';
import ImageSlideshow from '@/components/ImageSlideshow';
import HeroContent from '@/components/HeroContent';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Slideshow and Email Signup */}
      <section className="relative h-screen">
        <ImageSlideshow />
        <HeroContent />
      </section>
    </div>
  );
};

export default Index;
