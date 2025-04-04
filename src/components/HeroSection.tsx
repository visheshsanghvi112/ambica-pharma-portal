
import React, { useEffect } from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { ChevronRight, ArrowRight } from "lucide-react";

const HeroSection = () => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div ref={ref} className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 dark:from-primary/20 dark:via-background/80 dark:to-secondary/20 pt-32 pb-20 md:py-36 overflow-hidden">
      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="space-y-6 z-10"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-block px-3 py-1 text-sm font-medium bg-secondary/10 dark:bg-secondary/20 text-secondary dark:text-secondary-foreground rounded-full mb-4 animate-pulse">
                Trusted Since 2005
              </span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground dark:text-primary-foreground leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-secondary dark:from-white dark:via-primary-foreground dark:to-secondary-foreground"
            >
              Advancing Healthcare<br /> With Excellence
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg text-foreground/80 dark:text-primary-foreground/90 max-w-md"
            >
              Ambica Pharma has evolved from a humble startup into a leading force in the pharmaceutical 
              industry. With over 19 years of expertise, we pride ourselves on innovation, quality, and client satisfaction.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <Button asChild size="lg" className="group bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 shadow-lg shadow-primary/20 dark:shadow-primary/10 transition-all duration-300 hover:shadow-xl">
                <Link to="/about" className="flex items-center gap-2">
                  Learn More <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="group border-primary text-primary hover:bg-primary hover:text-white dark:border-primary-foreground dark:text-primary-foreground dark:hover:bg-primary-foreground/10">
                <Link to="/contact" className="flex items-center gap-2">
                  Contact Us <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.5 }}
  className="relative z-10"
>
  <div className="relative">
    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-30 dark:opacity-40 animate-pulse"></div>
    <video
      src="/lovable-uploads/ambicavideo.mp4"
      autoPlay
      loop
      muted
      className="rounded-lg shadow-2xl max-w-full h-auto relative transform transition-transform duration-500 hover:scale-105 dark:border dark:border-white/10"
    ></video>
  </div>
</motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/10 to-transparent dark:from-secondary/5 dark:to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background to-transparent"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 dark:bg-primary/20 rounded-full filter blur-3xl animate-blob"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/10 dark:bg-secondary/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/20 dark:bg-primary/30"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{ 
              x: [
                Math.random() * window.innerWidth, 
                Math.random() * window.innerWidth, 
                Math.random() * window.innerWidth
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight
              ] 
            }}
            transition={{ 
              repeat: Infinity, 
              duration: Math.random() * 20 + 10,
              ease: "linear" 
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
