
import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative bg-accent dark:bg-accent/30 py-20 md:py-28 overflow-hidden">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 z-10 animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary leading-tight">
              Advancing Healthcare<br /> With Excellence
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-md">
              Ambica Pharma has evolved from a humble startup into a leading force in the pharmaceutical 
              industry. With over 19 years of expertise, we pride ourselves on innovation, quality, and client satisfaction.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-gradient text-white hover:opacity-90 animate-fade-up" style={{ animationDelay: "0.3s" }}>
                <Link to="/about">Learn More</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white animate-fade-up" style={{ animationDelay: "0.4s" }}>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
          
          <div className="relative z-10 hidden md:block animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <img 
              src="https://images.unsplash.com/photo-1583911860205-72f8ac8ddcbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Pharmaceutical Research"
              className="rounded-lg shadow-2xl max-w-full h-auto hover-scale"
            />
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/10 to-transparent dark:from-secondary/5"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  );
};

export default HeroSection;
