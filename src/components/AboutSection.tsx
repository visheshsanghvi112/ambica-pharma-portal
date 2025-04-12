
import React from "react";
import { motion } from "framer-motion";
import { Award, Star, TrendingUp, Users, Sparkles, Shield, CheckCircle, Globe, Pill } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="about-section" className="py-20 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-gradient-to-r from-blue-300 to-blue-400 blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-gradient-to-r from-purple-300 to-indigo-400 blur-3xl animate-blob" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-pink-300 to-purple-400 blur-3xl animate-blob" style={{ animationDelay: "4s" }}></div>
      </div>
      
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
            <motion.span 
              className="inline-block px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Sparkles className="h-4 w-4 inline mr-2" />
              Established 2005
            </motion.span>

            <h2 className="text-3xl md:text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-6">
              Leading Pharmaceutical Wholesaler, Trader & Exporter
            </h2>
            
            <div className="space-y-4 text-foreground/80">
              <p className="text-lg">
                Ambica Pharma is a premier pharmaceutical wholesaler, trader, and exporter based in Mumbai, India. Since 2005, we have been dedicated to providing high-quality pharmaceutical products across a wide range of therapeutic categories to global markets.
              </p>
              
              <p className="text-lg">
                As a WHO-GMP and ISO 9001:2015 certified company, we maintain stringent quality control throughout our supply chain, ensuring our pharmaceutical tablets, capsules, injectables, drops, and ointments meet international standards.
              </p>
              
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary my-6 rounded-full"></div>
              
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="p-5 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl border border-primary/10 mt-6"
              >
                <p className="italic text-foreground/70">
                  "Our mission is to enhance global healthcare through quality pharmaceuticals, innovative solutions, and exceptional service, ensuring better health outcomes for communities worldwide."
                </p>
                <p className="font-semibold text-right mt-2 text-primary">— Mr. Dilip Jain, Founder</p>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
              <div className="flex items-start">
                <div className="p-3 bg-primary/10 rounded-lg mr-4 shadow-sm">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary text-lg">WHO-GMP Certified</h3>
                  <p className="text-foreground/70">Highest quality standards</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-secondary/10 rounded-lg mr-4 shadow-sm">
                  <Star className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary text-lg">ISO 9001:2015</h3>
                  <p className="text-foreground/70">Certified quality processes</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-blue-500/10 rounded-lg mr-4 shadow-sm">
                  <Globe className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-blue-500 text-lg">Global Presence</h3>
                  <p className="text-foreground/70">Exporting to 25+ countries</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-purple-500/10 rounded-lg mr-4 shadow-sm">
                  <Users className="h-6 w-6 text-purple-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-purple-500 text-lg">Expert Team</h3>
                  <p className="text-foreground/70">Pharmaceutical specialists</p>
                </div>
              </div>
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
                  <Shield className="h-16 w-16 text-primary mx-auto mb-4" />
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
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-5 -right-5 md:right-10 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-xl border border-primary/10"
            >
              <div className="flex items-center gap-3">
                <Shield className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-sm text-foreground/70">Trusted by</p>
                  <p className="font-bold text-lg text-primary">300+ Partners</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Products Section */}
        <div className="mt-20 bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-2xl shadow-sm border border-primary/10">
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-8 text-center md:text-left">Our Pharmaceutical Product Range</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
            <motion.div 
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-primary/10 rounded-lg mr-3">
                  <Pill className="h-5 w-5 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-primary">Pharmaceutical Tablets</h4>
              </div>
              <p className="text-foreground/70">
                We offer a comprehensive range of pharmaceutical tablets across therapeutic categories including antibiotics, cardiovascular, anti-diabetic, pain management, and more.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="inline-block px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">Antibiotics</span>
                <span className="inline-block px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">Cardiovascular</span>
                <span className="inline-block px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">Anti-diabetic</span>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-secondary/10 rounded-lg mr-3">
                  <Pill className="h-5 w-5 text-secondary" />
                </div>
                <h4 className="text-lg font-semibold text-secondary">Pharmaceutical Capsules</h4>
              </div>
              <p className="text-foreground/70">
                Our capsule formulations include antibiotics, anti-inflammatory, nutritional supplements, and specialized medicine sourced from quality-certified suppliers.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="inline-block px-2 py-1 text-xs bg-secondary/10 text-secondary rounded-full">Anti-inflammatory</span>
                <span className="inline-block px-2 py-1 text-xs bg-secondary/10 text-secondary rounded-full">Supplements</span>
                <span className="inline-block px-2 py-1 text-xs bg-secondary/10 text-secondary rounded-full">Probiotics</span>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-500/10 rounded-lg mr-3">
                  <Pill className="h-5 w-5 text-blue-500" />
                </div>
                <h4 className="text-lg font-semibold text-blue-500">Injectables & Drops</h4>
              </div>
              <p className="text-foreground/70">
                Premium-quality pharmaceutical injectables and drop formulations for various medical conditions, meeting international standards for safety and efficacy.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="inline-block px-2 py-1 text-xs bg-blue-500/10 text-blue-500 rounded-full">Injectables</span>
                <span className="inline-block px-2 py-1 text-xs bg-blue-500/10 text-blue-500 rounded-full">Eye Drops</span>
                <span className="inline-block px-2 py-1 text-xs bg-blue-500/10 text-blue-500 rounded-full">Solutions</span>
              </div>
            </motion.div>
          </div>
          
          <div className="mt-8 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full shadow-md hover:shadow-lg transition-all"
            >
              <CheckCircle className="h-5 w-5" />
              <span>View All Products</span>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
