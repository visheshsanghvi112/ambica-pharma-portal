
import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight, Shield, Award, Heart } from "lucide-react";

const HeroSection: React.FC = () => {
  // Using React.useRef and React.useEffect directly to avoid hook resolution issues
  const ref = React.useRef(null);
  const controls = React.useRef({
    start: (variant: string) => {
      // This is a simplified version to avoid framer-motion issues
      console.log("Animation started:", variant);
    }
  }).current;

  React.useEffect(() => {
    // Simplified animation logic
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  return (
    <div ref={ref} className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 pt-8 pb-12 md:pt-16 md:pb-20 lg:pt-20 overflow-hidden">
      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 z-10">
            <div>
              <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-secondary/10 text-secondary rounded-full mb-4 animate-pulse">
                <Award className="h-4 w-4 mr-1 drop-shadow-[0_1px_1px_rgba(34,197,94,0.4)]" /> Trusted Since 2005
              </span>
            </div>
            
            <div className="relative inline-block">
              <div className="pointer-events-none absolute -inset-x-8 -bottom-4 h-10 bg-gradient-to-r from-primary/25 via-primary/10 to-secondary/25 blur-3xl opacity-60"></div>
              <h1 className="relative text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-secondary">
                Advancing Healthcare<br /> With Excellence
              </h1>
            </div>
            
            <p className="text-lg text-foreground/80 max-w-md">
              Ambica Pharma has evolved from a humble startup into a leading force in pharmaceutical 
              distribution. With over 19 years of expertise, we pride ourselves on quality, service, and client satisfaction.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div>
                <Button asChild size="lg" className="group bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-xl">
                  <Link to="/about" className="flex items-center gap-2">
                    Learn More <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
              <div>
                <Button asChild variant="outline" size="lg" className="group border-primary text-primary hover:bg-primary hover:text-white">
                  <Link to="/contact" className="flex items-center gap-2">
                    Contact Us <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Key benefits with enhanced 3D icons with white icons */}
            <div className="flex flex-wrap gap-4 pt-4">
              {[
                { 
                  icon: <Shield className="h-5 w-5 text-white" />, 
                  text: "ISO-9001:2008 Certified",
                  bgColor: "bg-green-500" 
                },
                { 
                  icon: <Heart className="h-5 w-5 text-white" />, 
                  text: "WHO-GMP Standards",
                  bgColor: "bg-red-500" 
                },
                { 
                  icon: <Award className="h-5 w-5 text-white" />, 
                  text: "Quality Assured",
                  bgColor: "bg-amber-500" 
                }
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  className={`flex items-center gap-2 text-sm text-foreground/70 bg-white/50 px-3 py-1.5 rounded-full backdrop-blur-sm hover:scale-105 hover:bg-white/80 hover:shadow-md transition-all duration-300 border border-gray-100/30`}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
                  }}
                >
                  <div className={`p-1 ${item.bgColor} rounded-full flex items-center justify-center shadow-sm`}>
                    {item.icon}
                  </div>
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="relative z-10">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-30 animate-pulse"></div>
              <div className="transform transition-transform duration-500 hover:scale-105">
                <video
                  src="/lovable-uploads/ambicavideo.mp4"
                  autoPlay
                  loop
                  muted
                  className="rounded-lg shadow-2xl max-w-full h-auto relative"
                ></video>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background to-transparent"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl animate-blob"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/10 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
      
      {/* Wave decoration at bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden z-0 opacity-20">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="currentColor" fillOpacity="1" className="text-primary"
            d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,154.7C672,149,768,171,864,181.3C960,192,1056,192,1152,181.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
          </path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
