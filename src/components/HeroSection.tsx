
import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 py-20 md:py-28 overflow-hidden">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 z-10"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary leading-tight">
              Advancing Healthcare<br /> With Excellence
            </h1>
            <p className="text-lg text-foreground/80 max-w-md">
              Ambica Pharma has evolved from a humble startup into a leading force in the pharmaceutical 
              industry. With over 19 years of expertise, we pride ourselves on innovation, quality, and client satisfaction.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90">
                  <Link to="/about">Learn More</Link>
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative z-10 hidden md:block"
          >
            <img 
              src="https://images.unsplash.com/photo-1583911860205-72f8ac8ddcbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Pharmaceutical Research"
              className="rounded-lg shadow-2xl max-w-full h-auto transform transition-transform duration-500 hover:scale-105"
            />
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/10 to-transparent dark:from-secondary/5"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background to-transparent"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 dark:bg-primary/20 rounded-full filter blur-3xl animate-blob"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/10 dark:bg-secondary/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
    </div>
  );
};

export default HeroSection;
