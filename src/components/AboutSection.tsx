
import React from "react";
import { Button } from "./ui/button";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Ambica Pharma Laboratory"
              className="rounded-lg shadow-lg"
            />
          </div>
          
          <div className="space-y-6">
            <div className="inline-block px-4 py-1 bg-secondary/10 rounded-full text-secondary font-medium text-sm">
              Since 2005
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
              Ambica Pharma has evolved from a humble startup into a leading force
            </h2>
            <p className="text-gray-600">
              As a professionally managed company, we focus on continuous growth, 
              delivering pharmaceutical products that meet global standards while 
              maintaining ethical practices and total quality management.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-secondary mr-2 mt-1" />
                <p className="text-gray-700">
                  Headquartered in Mumbai, Maharashtra, Ambica Pharma holds ISO-9001-2015 certification
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-secondary mr-2 mt-1" />
                <p className="text-gray-700">
                  Follows stringent WHO guidelines for production and GMP-certified unit
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-secondary mr-2 mt-1" />
                <p className="text-gray-700">
                  Over 1000+ formulations—ranging from tablets and capsules to syrups and injections
                </p>
              </div>
            </div>
            
            <Button asChild className="bg-gradient mt-4">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
