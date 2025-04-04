
import React from "react";
import { motion } from "framer-motion";

interface Brand {
  name: string;
  logo?: string; // Optional path to logo image
}

const BrandSlider: React.FC = () => {
  // List of pharmaceutical brands with their names and logo placeholders
  const brands: Brand[] = [
    { name: "Cipla", logo: "/lovable-uploads/brands/cipla.png" },
    { name: "Hab Pharma", logo: "/lovable-uploads/brands/hab.png" },
    { name: "Sun Pharma", logo: "/lovable-uploads/brands/sun.png" },
    { name: "Dr. Reddy's", logo: "/lovable-uploads/brands/drreddys.png" },
    { name: "Lupin", logo: "/lovable-uploads/brands/lupin.png" },
    { name: "Zydus Cadila", logo: "/lovable-uploads/brands/zydus.png" },
    { name: "Alkem Laboratories", logo: "/lovable-uploads/brands/alkem.png" },
    { name: "Mankind Pharma", logo: "/lovable-uploads/brands/mankind.png" },
    { name: "Torrent Pharmaceuticals", logo: "/lovable-uploads/brands/torrent.png" },
    { name: "Glenmark", logo: "/lovable-uploads/brands/glenmark.png" },
    { name: "Intas Pharmaceuticals", logo: "/lovable-uploads/brands/intas.png" },
    { name: "Abbott India Limited", logo: "/lovable-uploads/brands/abbott.png" },
    { name: "Biocon", logo: "/lovable-uploads/brands/biocon.png" },
    { name: "Ipca Laboratories", logo: "/lovable-uploads/brands/ipca.png" },
    { name: "Emcure Pharmaceuticals", logo: "/lovable-uploads/brands/emcure.png" },
    { name: "Johnlee Pharmaceuticals Pvt. Ltd.", logo: "/lovable-uploads/brands/johnlee.png" },
    { name: "Universal", logo: "/lovable-uploads/brands/universal.png" }
  ];

  // Duplicate the brands array to create a seamless loop
  const duplicatedBrands = [...brands, ...brands];

  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 py-10">
      <div className="mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
          Top Pharmaceutical Brands We Partner With
        </h2>
        <p className="text-foreground/80 max-w-3xl mx-auto">
          We collaborate with leading pharmaceutical manufacturers to provide high-quality medicines at competitive prices.
        </p>
      </div>
      
      <div className="relative py-4">
        {/* Top subtle gradient shadow */}
        <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-background to-transparent z-10"></div>
        
        {/* Continuous slider animation */}
        <motion.div
          className="flex items-center whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: 30 
          }}
        >
          {duplicatedBrands.map((brand, index) => (
            <div 
              key={index} 
              className="mx-8 flex flex-col items-center justify-center"
            >
              <div className="w-32 h-32 bg-white dark:bg-gray-800 rounded-lg shadow-md flex items-center justify-center p-4 hover:shadow-lg transition-all duration-300">
                {brand.logo ? (
                  <img 
                    src={brand.logo} 
                    alt={`${brand.name} logo`}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      // Fallback to text if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.innerHTML = brand.name;
                    }}
                  />
                ) : (
                  <span className="text-lg font-medium text-primary">{brand.name}</span>
                )}
              </div>
            </div>
          ))}
        </motion.div>
        
        {/* Bottom subtle gradient shadow */}
        <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-background to-transparent z-10"></div>
      </div>
    </div>
  );
};

export default BrandSlider;
