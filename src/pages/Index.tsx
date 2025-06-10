
import React from 'react';
import ImageSlideshow from '@/components/ImageSlideshow';
import HeroContent from '@/components/HeroContent';
import EmailSignup from '@/components/EmailSignup';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Slideshow */}
      <section className="relative">
        <ImageSlideshow />
        <HeroContent />
      </section>

      {/* Email Signup Section */}
      <EmailSignup />

      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-80">
            © 2025 Your Store. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
