
import React from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Sparkles } from 'lucide-react';

const HeroContent = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center text-white px-4 max-w-4xl mx-auto">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-8 animate-pulse">
          <Sparkles className="w-10 h-10" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Discover Your Style
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed animate-fade-in">
          Curated collections that speak to your unique aesthetic. 
          From timeless classics to cutting-edge trends.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 font-semibold transition-all duration-300 hover:scale-105 group"
          >
            <ShoppingBag className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
            Shop Collection
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4 font-semibold transition-all duration-300 hover:scale-105"
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
