
import React from "react";
import { Button } from "./ui/button";
import { CheckCircle, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/10 rounded-full -z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Ambica Pharma Laboratory"
              className="rounded-lg shadow-lg hover:scale-[1.02] transition-all duration-500 w-full"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-block px-4 py-1 bg-secondary/10 rounded-full text-secondary font-medium text-sm">
              Established Since 2005
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
              Ambica Pharma: From Humble Beginnings to Industry Leadership
            </h2>
            <p className="text-foreground">
              As a professionally managed company, we focus on continuous growth, 
              delivering pharmaceutical products that meet global standards while 
              maintaining ethical practices and total quality management.
            </p>
            
            <div className="space-y-4 mt-2">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                <p className="text-foreground">
                  Headquartered in Mumbai, Maharashtra, holding prestigious ISO-9001-2015 certification
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                <p className="text-foreground">
                  Following stringent WHO guidelines for production with GMP-certified manufacturing units
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                <p className="text-foreground">
                  Portfolio of 1000+ formulations—from tablets and capsules to syrups and specialized injections
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                <p className="text-foreground">
                  Exporting quality pharmaceuticals to over 25 countries across Asia, Africa, and the Middle East
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2 bg-primary/5 px-4 py-2 rounded-lg">
                <Award className="h-5 w-5 text-primary" />
                <span className="text-primary font-medium">Quality Certified</span>
              </div>
              <div className="flex items-center gap-2 bg-secondary/5 px-4 py-2 rounded-lg">
                <Award className="h-5 w-5 text-secondary" />
                <span className="text-secondary font-medium">WHO GMP</span>
              </div>
            </div>
            
            <Button asChild className="bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 mt-4">
              <Link to="/about">Discover Our Story</Link>
            </Button>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-border"
        >
          <h3 className="text-2xl md:text-3xl font-display font-bold text-primary mb-6">
            Who We Are
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <p className="text-foreground mb-4">
              Incepted in the year 2005, Ambica Pharma is an eminent entity indulged in manufacturing, trading, 
              exporting, wholesaling and retailing a huge compilation of Pharmaceutical Tablets, Capsules, injectables, 
              Drops, Ointments, etc. Manufactured making use of supreme in class material and progressive tools and 
              technology; these are in conformism with the norms and guidelines defined by the market.
            </p>
            <p className="text-foreground">
              With a motive to stand high on the visions of our patrons, we are indulged in providing a huge array 
              of products to our patrons, which are in tandem with the comprehensively accredited standards of quality. 
              Our departments are managed by their respective executives to ensure that all the 
              responsibilities are getting finished effectively within the assured time, maintaining the highest standards
              of quality and efficiency.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
