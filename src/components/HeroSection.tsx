
import React, { useEffect } from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { ChevronRight, ArrowRight, Shield, Award, Heart } from "lucide-react";

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
    <div ref={ref} className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 pt-32 pb-20 md:py-36 overflow-hidden">
      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="space-y-6 z-10"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-secondary/10 text-secondary rounded-full mb-4 animate-pulse">
                <Award className="h-4 w-4 mr-1" /> Trusted Since 2005
              </span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-secondary"
            >
              Advancing Healthcare<br /> With Excellence
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg text-foreground/80 max-w-md"
            >
              Ambica Pharma has evolved from a humble startup into a leading force in the pharmaceutical 
              industry. With over 19 years of expertise, we pride ourselves on innovation, quality, and client satisfaction.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button asChild size="lg" className="group bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-xl">
                  <Link to="/about" className="flex items-center gap-2">
                    Learn More <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button asChild variant="outline" size="lg" className="group border-primary text-primary hover:bg-primary hover:text-white">
                  <Link to="/contact" className="flex items-center gap-2">
                    Contact Us <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Key benefits */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              {[
                { icon: <Shield className="h-5 w-5 text-green-500" />, text: "ISO-9001:2008 Certified" },
                { icon: <Heart className="h-5 w-5 text-red-500" />, text: "WHO-GMP Standards" },
                { icon: <Award className="h-5 w-5 text-amber-500" />, text: "Quality Assured" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-foreground/70 bg-white/50 px-3 py-1.5 rounded-full backdrop-blur-sm">
                  {item.icon}
                  <span>{item.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative z-10"
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-30 animate-pulse"></div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <video
                  src="/lovable-uploads/ambicavideo.mp4"
                  autoPlay
                  loop
                  muted
                  className="rounded-lg shadow-2xl max-w-full h-auto relative transform transition-transform duration-500 hover:scale-105 border border-gray-100"
                ></video>
              </motion.div>
              {/* Removed the SVG element as requested */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center animate-pulse">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                  {/* Play icon removed */}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background to-transparent"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl animate-blob"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/10 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/20"
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

      {/* Wave decoration at bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden z-0 opacity-20">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="currentColor" fillOpacity="1" className="text-primary"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,154.7C1248,128,1344,64,1392,32L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
          </path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
