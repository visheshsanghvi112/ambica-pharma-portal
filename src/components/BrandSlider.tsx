
import React from "react";
import { motion } from "framer-motion";

interface Brand {
  name: string;
  logo: string; // Path to logo image
}

const BrandSlider: React.FC = () => {
  // List of pharmaceutical brands with their names and logos
  const brands: Brand[] = [
    { name: "Cipla", logo: "https://www.cipla.com/sites/all/themes/cipla/images/logo.svg" },
    { name: "Hab Pharma", logo: "https://habpharma.in/wp-content/uploads/2022/09/hab-pharma-logo.png" },
    { name: "Sun Pharma", logo: "https://www.sunpharma.com/sites/all/themes/sunpharma/images/logo/sunpharma-logo.png" },
    { name: "Dr. Reddy's", logo: "https://www.drreddys.com/media/156699/dr-reddys-labs-new-logo.png" },
    { name: "Lupin", logo: "https://www.lupin.com/wp-content/uploads/2021/01/lupin-logo.png" },
    { name: "Zydus Cadila", logo: "https://zyduscadila.com/wp-content/uploads/2020/10/zydus-logo.png" },
    { name: "Alkem Laboratories", logo: "https://www.alkemlabs.com/img/logo.png" },
    { name: "Mankind Pharma", logo: "https://www.mankindpharma.com/sites/default/files/inline-images/logo.png" },
    { name: "Torrent Pharmaceuticals", logo: "https://www.torrentpharma.com/assets/images/torrent-pharma-logo.png" },
    { name: "Glenmark", logo: "https://www.glenmarkpharma.com/sites/all/themes/glenmark/images/logo.png" },
    { name: "Intas Pharmaceuticals", logo: "https://www.intaspharma.com/wp-content/uploads/2020/07/intas-logo.png" },
    { name: "Abbott India Limited", logo: "https://www.abbott.com/sites/abbott-com/files/abbott_logo.png" },
    { name: "Biocon", logo: "https://www.biocon.com/wp-content/uploads/2020/04/Biocon_Logo.svg" },
    { name: "Ipca Laboratories", logo: "https://ipca.com/images/logo.png" },
    { name: "Emcure Pharmaceuticals", logo: "https://www.emcure.com/wp-content/uploads/2020/03/emcure-logo.png" },
    { name: "Johnlee Pharmaceuticals", logo: "https://images.unsplash.com/photo-1576602976047-174e57a47881?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
    { name: "Universal", logo: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" }
  ];

  // Duplicate the brands array to create a seamless loop
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="py-12 bg-gradient-to-r from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10">
      <div className="container">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
            Our Trusted Partners
          </h2>
          <p className="text-foreground/80 max-w-3xl mx-auto mb-6">
            We collaborate with leading pharmaceutical manufacturers to provide high-quality medicines at competitive prices.
          </p>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
        </div>
        
        <div className="relative py-8">
          {/* Top gradient overlay */}
          <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-background to-transparent z-10"></div>
          
          {/* Brand logos slider */}
          <motion.div
            className="flex items-center whitespace-nowrap gap-8 py-6 px-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              repeat: Infinity, 
              ease: "linear", 
              duration: 40 
            }}
          >
            {duplicatedBrands.map((brand, index) => (
              <div 
                key={index} 
                className="mx-6 flex flex-col items-center justify-center"
              >
                <div className="w-36 h-36 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-4 flex items-center justify-center transform hover:scale-105 border border-primary/10">
                  <img 
                    src={brand.logo} 
                    alt={`${brand.name} logo`}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      // Fallback to branded text if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        const textElement = document.createElement('div');
                        textElement.className = 'text-lg font-medium text-primary text-center';
                        textElement.textContent = brand.name;
                        parent.appendChild(textElement);
                      }
                    }}
                  />
                </div>
                <p className="mt-2 text-sm font-medium text-foreground/70 dark:text-foreground/60 hidden">{brand.name}</p>
              </div>
            ))}
          </motion.div>
          
          {/* Bottom gradient overlay */}
          <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-background to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default BrandSlider;
