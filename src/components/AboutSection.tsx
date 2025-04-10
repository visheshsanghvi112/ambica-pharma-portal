
import React from "react";
import { motion } from "framer-motion";
import { Award, Star, TrendingUp, Users } from "lucide-react";

// Component with enhanced SEO content
const AboutSection = () => {
  return (
    <section id="about-section" className="py-16 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
              Established 2005
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
              Leading Pharmaceutical Wholesaler, Trader & Exporter
            </h2>
            <p className="text-foreground/80 mb-4">
              Ambica Pharma is a premier pharmaceutical wholesaler, trader, and exporter based in Mumbai, India. Since 2005, we have been dedicated to providing high-quality pharmaceutical products across a wide range of therapeutic categories to global markets.
            </p>
            <p className="text-foreground/80 mb-6">
              As a WHO-GMP and ISO 9001:2015 certified company, we maintain stringent quality control throughout our supply chain, ensuring our pharmaceutical tablets, capsules, injectables, drops, and ointments meet international standards.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-start">
                <div className="p-2 bg-primary/10 rounded-lg mr-3">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary">WHO-GMP Certified</h3>
                  <p className="text-sm text-foreground/70">Highest quality standards</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 bg-primary/10 rounded-lg mr-3">
                  <Star className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary">ISO 9001:2015</h3>
                  <p className="text-sm text-foreground/70">Certified quality processes</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 bg-primary/10 rounded-lg mr-3">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary">Global Presence</h3>
                  <p className="text-sm text-foreground/70">Exporting to 25+ countries</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 bg-primary/10 rounded-lg mr-3">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary">Expert Team</h3>
                  <p className="text-sm text-foreground/70">Pharmaceutical specialists</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <img 
              src="/lovable-uploads/36cc82a7-f6de-40c0-a6c0-fb0fe02bce8d.png" 
              alt="Ambica Pharma - Pharmaceutical Manufacturing and Quality Control Facility" 
              className="rounded-lg shadow-xl"
              loading="lazy"
              width="600"
              height="400"
            />
          </motion.div>
        </div>
        
        <div className="mt-16 bg-primary/5 p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-primary mb-4">Our Pharmaceutical Product Range</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold text-primary mb-2">Pharmaceutical Tablets</h4>
              <p className="text-foreground/70">
                We offer a comprehensive range of pharmaceutical tablets across therapeutic categories including antibiotics, cardiovascular, anti-diabetic, pain management, and more.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold text-primary mb-2">Pharmaceutical Capsules</h4>
              <p className="text-foreground/70">
                Our capsule formulations include antibiotics, anti-inflammatory, nutritional supplements, and specialized medicine manufactured under strict quality control.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold text-primary mb-2">Injectables & Drops</h4>
              <p className="text-foreground/70">
                Premium-quality pharmaceutical injectables and drop formulations for various medical conditions, meeting international standards for safety and efficacy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
