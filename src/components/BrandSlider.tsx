
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface Brand {
  name: string;
  logo: string; // Path to logo image
}

const BrandCards: React.FC = () => {
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

  return (
    <section className="py-12 bg-gradient-to-r from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {brands.map((brand, index) => (
            <Card 
              key={index} 
              className="bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300 border border-primary/10"
            >
              <CardContent className="p-4 flex flex-col items-center justify-center">
                <div className="w-full h-24 flex items-center justify-center mb-2">
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
                <p className="text-center text-sm font-medium text-foreground">{brand.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandCards;
