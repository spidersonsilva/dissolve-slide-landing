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

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe');
      }

      toast({
        title: "Successfully subscribed!",
        description: "Thank you for joining our mailing list.",
      });
      setEmail('');
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Bible verse at the top */}
      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 text-center px-4 w-full max-w-sm sm:max-w-md">
        <h1 className="font-syne-mono text-white text-2xl md:text-4xl font-bold mb-2 drop-shadow-lg leading-snug">
          In the beginning God created the heavens and the earth.
        </h1>
        <p className="text-white/80 text-sm md:text-base drop-shadow-md">
          Genesis 1:1
        </p>
      </div>

      {/* Email signup at the bottom */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-md px-4">
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
                  Join Us
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default HeroContent;
