
import React from "react";
import { motion } from "framer-motion";
import { Award, Star, Globe, Users, CheckCircle, Zap, ShieldCheck } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import BackgroundBlobs from "./about/BackgroundBlobs";
import CompanyIntroduction from "./about/CompanyIntroduction";
import KeyFeature from "./about/KeyFeature";
import PartnerBadge from "./about/PartnerBadge";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

const AboutSection = () => {
  const isMobile = useIsMobile();
  
  const keyFeatures = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "WHO-GMP Certified",
      description: "Highest quality standards",
      colorClass: "text-primary",
      image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "ISO 9001:2015",
      description: "Certified quality processes",
      colorClass: "text-secondary",
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Presence",
      description: "Exporting to 25+ countries",
      colorClass: "text-blue-500",
      image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Team",
      description: "Pharmaceutical specialists",
      colorClass: "text-purple-500",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];
  
  const additionalFeatures = [
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Quality Assurance",
      description: "Stringent quality control throughout supply chain",
      colorClass: "text-emerald-500"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Fast Delivery",
      description: "Efficient global distribution network",
      colorClass: "text-amber-500"
    }
  ];
  
  return (
    <section id="about-section" className="py-16 md:py-20 relative overflow-hidden">
      <BackgroundBlobs />
      
      <div className="container relative z-10">
        {/* Main heading with gradient */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4"
          >
            About Ambica Pharma
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-6"
          ></motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* First column - Text content with improved mobile styling */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <CompanyIntroduction>
              <div className="space-y-4">
                <p className="text-base md:text-lg leading-relaxed">
                  <span className="text-primary font-semibold">Ambica Pharma</span> is a premier pharmaceutical wholesaler, trader, and exporter based in Mumbai, India. Since 2005, we have been dedicated to providing high-quality pharmaceutical products across a wide range of therapeutic categories to global markets.
                </p>
                
                <p className="text-base md:text-lg leading-relaxed">
                  As a <span className="text-secondary font-semibold">WHO-GMP</span> and <span className="text-secondary font-semibold">ISO 9001:2015</span> certified company, we maintain stringent quality control throughout our supply chain, ensuring our pharmaceutical products meet international standards.
                </p>
              </div>
            </CompanyIntroduction>
            
            {/* Mobile-optimized feature cards with improved spacing */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {keyFeatures.slice(0, 2).map((feature, index) => (
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
          
          {/* Second column - Enhanced image with overlay */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-1 md:order-2 relative"
          >
            <Card className="relative overflow-hidden rounded-xl shadow-xl border-0">
              <div className="overflow-hidden rounded-xl">
                <motion.img 
                  src="https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Pharmaceutical laboratory" 
                  className="w-full h-auto object-cover transition-transform hover:scale-105 duration-500"
                  style={{ minHeight: '350px' }}
                  whileHover={{ scale: 1.05 }}
                  initial={{ scale: 1 }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white font-semibold text-xl mb-2">Excellence in Pharmaceuticals</h3>
                  <p className="text-white/90 text-sm mb-4">Our state-of-the-art facilities ensure quality at every step</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="default" className="bg-primary/90 hover:bg-primary text-white">
                      Since 2005
                    </Badge>
                    <Badge variant="secondary" className="bg-secondary/90 hover:bg-secondary text-white">
                      Mumbai, India
                    </Badge>
                    <Badge variant="outline" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                      Global Exporter
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>
            
            <PartnerBadge />
          </motion.div>
        </div>
        
        {/* Additional row of features - Full width on mobile, 2 columns on desktop */}
        <div className="mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {keyFeatures.slice(2, 4).map((feature, index) => (
              <motion.div
                key={index + 2}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="col-span-1"
              >
                <KeyFeature 
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  colorClass={feature.colorClass}
                />
              </motion.div>
            ))}
            
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={index + 4}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index + 2) * 0.1 }}
                viewport={{ once: true }}
                className="col-span-1"
              >
                <KeyFeature 
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  colorClass={feature.colorClass}
                />
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Image gallery section for mobile - Visible on mobile only */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 md:hidden"
        >
          <h3 className="text-xl font-semibold text-primary mb-4">Our Facility</h3>
          <div className="grid grid-cols-2 gap-3">
            {keyFeatures.map((feature, index) => (
              feature.image && (
                <div key={index} className="relative rounded-lg overflow-hidden aspect-video shadow-md">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <span className="text-white text-xs font-medium p-2">{feature.title}</span>
                  </div>
                </div>
              )
            ))}
          </div>
        </motion.div>
        
        {/* Visual timeline - Visible on tablets and desktop */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 hidden md:block"
        >
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute h-full w-1 bg-gradient-to-b from-primary to-secondary left-1/2 transform -translate-x-1/2 rounded-full opacity-50"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {[
                { year: "2005", title: "Founded in Mumbai", description: "Established as a pharmaceutical distribution company" },
                { year: "2010", title: "ISO Certification", description: "Achieved ISO 9001:2015 certification for quality management" },
                { year: "2015", title: "Global Expansion", description: "Expanded operations to over 15 countries worldwide" },
                { year: "2023", title: "Modern Facilities", description: "Implemented state-of-the-art distribution technologies" }
              ].map((item, index) => (
                <div key={index} className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <h4 className="text-primary font-semibold text-2xl">{item.year}</h4>
                    <h5 className="text-secondary font-medium text-lg">{item.title}</h5>
                    <p className="text-foreground/70">{item.description}</p>
                  </div>
                  <div className="z-10 flex-shrink-0">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary shadow-lg"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
