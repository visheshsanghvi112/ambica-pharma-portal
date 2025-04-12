
import React from "react";
import { motion } from "framer-motion";
import { Award, Star, Globe, Users } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import BackgroundBlobs from "./about/BackgroundBlobs";
import CompanyIntroduction from "./about/CompanyIntroduction";
import KeyFeature from "./about/KeyFeature";
import PartnerBadge from "./about/PartnerBadge";
import ProductsSection from "./about/ProductsSection";

const AboutSection = () => {
  const isMobile = useIsMobile();
  
  const keyFeatures = [
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: "WHO-GMP Certified",
      description: "Highest quality standards",
      colorClass: "text-primary"
    },
    {
      icon: <Star className="h-6 w-6 text-secondary" />,
      title: "ISO 9001:2015",
      description: "Certified quality processes",
      colorClass: "text-secondary"
    },
    {
      icon: <Globe className="h-6 w-6 text-blue-500" />,
      title: "Global Presence",
      description: "Exporting to 25+ countries",
      colorClass: "text-blue-500"
    },
    {
      icon: <Users className="h-6 w-6 text-purple-500" />,
      title: "Expert Team",
      description: "Pharmaceutical specialists",
      colorClass: "text-purple-500"
    }
  ];
  
  return (
    <section id="about-section" className="py-20 relative overflow-hidden">
      <BackgroundBlobs />
      
      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* First column - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <CompanyIntroduction>
              <p className="text-lg">
                Ambica Pharma is a premier pharmaceutical wholesaler, trader, and exporter based in Mumbai, India. Since 2005, we have been dedicated to providing high-quality pharmaceutical products across a wide range of therapeutic categories to global markets.
              </p>
              
              <p className="text-lg">
                As a WHO-GMP and ISO 9001:2015 certified company, we maintain stringent quality control throughout our supply chain, ensuring our pharmaceutical tablets, capsules, injectables, drops, and ointments meet international standards.
              </p>
            </CompanyIntroduction>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
              {keyFeatures.map((feature, index) => (
                <KeyFeature 
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  colorClass={feature.colorClass}
                />
              ))}
            </div>
          </motion.div>
          
          {/* Second column - Design element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 md:order-2 relative"
          >
            <div className="relative z-10 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 p-8 rounded-2xl shadow-lg border border-primary/10 h-full min-h-[320px] flex flex-col justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-30 rounded-2xl"></div>
              
              <div className="relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-center mb-6"
                >
                  <div className="h-16 w-16 text-primary mx-auto mb-4 flex items-center justify-center bg-primary/10 rounded-full">
                    <Award className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Quality Commitment</h3>
                  <p className="text-foreground/80">
                    Our dedication to quality ensures we distribute only the finest pharmaceutical products that meet international standards.
                  </p>
                </motion.div>
                
                <div className="flex flex-wrap justify-center gap-3 mt-6">
                  <motion.span 
                    className="inline-block px-3 py-1.5 text-sm font-medium bg-white/90 dark:bg-gray-800/90 text-primary rounded-full shadow-sm"
                    whileHover={{ scale: 1.05 }}
                  >
                    Quality-Focused
                  </motion.span>
                  <motion.span 
                    className="inline-block px-3 py-1.5 text-sm font-medium bg-white/90 dark:bg-gray-800/90 text-secondary rounded-full shadow-sm"
                    whileHover={{ scale: 1.05 }}
                  >
                    Advanced Technology
                  </motion.span>
                  <motion.span 
                    className="inline-block px-3 py-1.5 text-sm font-medium bg-white/90 dark:bg-gray-800/90 text-blue-500 rounded-full shadow-sm"
                    whileHover={{ scale: 1.05 }}
                  >
                    Global Distribution
                  </motion.span>
                </div>
              </div>
            </div>
            
            <PartnerBadge />
          </motion.div>
        </div>
        
        {/* Products Section */}
        <ProductsSection />
      </div>
    </section>
  );
};

export default AboutSection;
