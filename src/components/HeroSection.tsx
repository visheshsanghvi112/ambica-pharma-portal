
import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight, Shield, Award, Heart, Sparkles } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 pt-32 pb-20 md:py-36 overflow-hidden">
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
                <Award className="h-4 w-4 mr-2" /> WHO-GMP Certified Since 2005
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-secondary">
                Advancing Healthcare With Excellence
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-foreground/80 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              With over 19 years of expertise, Ambica Pharma has evolved into a leading force in pharmaceutical distribution, setting new standards in quality and service excellence.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button asChild size="lg" className="group bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 shadow-lg hover:shadow-xl transition-all duration-300">
                <Link to="/about" className="flex items-center gap-2">
                  Discover More <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="group border-primary/20 hover:border-primary/40 hover:bg-primary/5">
                <Link to="/contact" className="flex items-center gap-2">
                  Get in Touch <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>

            <motion.div 
              className="flex flex-wrap gap-4 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {[
                { icon: <Shield className="h-5 w-5 text-emerald-500" />, text: "ISO-9001:2008" },
                { icon: <Heart className="h-5 w-5 text-rose-500" />, text: "WHO-GMP" },
                { icon: <Sparkles className="h-5 w-5 text-amber-500" />, text: "Quality Assured" }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-2 text-sm bg-white/50 dark:bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/10 hover:border-primary/20 transition-all duration-300"
                >
                  {item.icon}
                  <span className="text-foreground/70">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </div>
          
          <motion.div 
            className="relative z-10 hidden lg:block"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-30"></div>
              <div className="relative rounded-lg overflow-hidden transform transition-transform duration-500 hover:scale-[1.02]">
                <video
                  src="/lovable-uploads/ambicavideo.mp4"
                  autoPlay
                  loop
                  muted
                  className="w-full h-auto shadow-2xl rounded-lg"
                ></video>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background to-transparent"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
    </div>
  );
};

export default HeroSection;
