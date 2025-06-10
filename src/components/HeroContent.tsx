
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';
import { ArrowRight } from 'lucide-react';

const HeroContent = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Successfully subscribed!",
        description: "Thank you for joining our mailing list.",
      });
      setEmail('');
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-full max-w-md mx-auto px-4">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 text-lg border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder:text-white/70 focus:border-white/50 transition-colors"
                disabled={isLoading}
              />
            </div>
            <Button
              type="submit"
              size="lg"
              disabled={isLoading}
              className="h-12 px-8 bg-white/90 hover:bg-white text-primary font-semibold transition-all duration-300 hover:scale-105 group"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
              ) : (
                <>
                  Subscribe
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HeroContent;
