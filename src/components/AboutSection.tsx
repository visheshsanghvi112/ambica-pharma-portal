
import React from "react";
import { motion } from "framer-motion";
import { Award, Star, Globe, Users } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import BackgroundBlobs from "./about/BackgroundBlobs";
import CompanyIntroduction from "./about/CompanyIntroduction";
import KeyFeature from "./about/KeyFeature";
import PartnerBadge from "./about/PartnerBadge";
import { Badge } from "./ui/badge";

const AboutSection = () => {
  const isMobile = useIsMobile();
  
  const keyFeatures = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "WHO-GMP Certified",
      description: "Highest quality standards",
      colorClass: "text-primary",
      iconBgClass: "bg-gradient-to-br from-green-500 to-emerald-600"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "ISO 9001:2015",
      description: "Certified quality processes",
      colorClass: "text-secondary",
      iconBgClass: "bg-gradient-to-br from-blue-500 to-indigo-600"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Presence",
      description: "Exporting to 25+ countries",
      colorClass: "text-blue-500",
      iconBgClass: "bg-gradient-to-br from-purple-500 to-pink-600"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Team",
      description: "Pharmaceutical specialists",
      colorClass: "text-purple-500",
      iconBgClass: "bg-gradient-to-br from-orange-500 to-amber-600"
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
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
              {keyFeatures.map((feature, index) => (
                <KeyFeature 
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  colorClass={feature.colorClass}
                  iconBgClass={feature.iconBgClass}
                />
              ))}
            </div>
          </motion.div>
          
          {/* Second column - Image and badges */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 md:order-2 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" 
                alt="Pharmaceutical laboratory" 
                className="w-full h-auto object-cover"
                style={{ minHeight: '350px' }}
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-6">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="default" className="bg-white/90 text-primary hover:bg-white/80">
                    Quality-Focused
                  </Badge>
                  <Badge variant="secondary" className="bg-white/90 text-secondary hover:bg-white/80">
                    Advanced Technology
                  </Badge>
                  <Badge variant="outline" className="bg-white/90 text-blue-500 hover:bg-white/80">
                    Global Distribution
                  </Badge>
                </div>
              </div>
            </div>
            
            <PartnerBadge />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
