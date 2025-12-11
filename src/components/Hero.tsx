import { Button } from "@/components/ui/button";
import { DollarSign, Gift } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";
import logoWhite from "@/assets/logo-white.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="Earth horizon" 
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Large Logo Watermark */}
      <img 
        src={logoWhite} 
        alt="" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-2xl opacity-10 pointer-events-none"
      />

      {/* Badges */}
      <div className="flex gap-6 mb-6 z-10">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center mb-2 animate-float">
            <DollarSign className="w-8 h-8 text-primary" />
          </div>
          <span className="text-sm font-medium text-foreground">Primary</span>
          <span className="text-xs text-primary">Challenge</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center mb-2 animate-float" style={{ animationDelay: '0.5s' }}>
            <Gift className="w-8 h-8 text-primary" />
          </div>
          <span className="text-sm font-medium text-foreground">Free</span>
          <span className="text-xs text-primary">Challenge</span>
        </div>
      </div>

      {/* Main Heading */}
      <h1 className="text-center z-10">
        <span className="block text-2xl md:text-3xl font-medium text-foreground mb-2">Buy one</span>
        <span className="block text-5xl md:text-7xl font-display font-bold text-gradient">
          Get Two!
        </span>
      </h1>

      {/* CTA Button */}
      <Button variant="hero" size="lg" className="mt-8 z-10" asChild>
        <a href="https://thebestprop.com/checkout" target="_blank" rel="noopener noreferrer">Start Now</a>
      </Button>
    </section>
  );
};

export default Hero;
