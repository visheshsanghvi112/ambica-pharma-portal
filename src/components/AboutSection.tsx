
import React from "react";
import { Button } from "./ui/button";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <img
              src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Ambica Pharma Laboratory"
              className="rounded-lg shadow-lg hover-scale"
            />
          </div>
          
          <div className="space-y-6 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="inline-block px-4 py-1 bg-secondary/10 rounded-full text-secondary font-medium text-sm">
              Since 2005
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
              Ambica Pharma has evolved from a humble startup into a leading force
            </h2>
            <p className="text-foreground">
              As a professionally managed company, we focus on continuous growth, 
              delivering pharmaceutical products that meet global standards while 
              maintaining ethical practices and total quality management.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-secondary mr-2 mt-1" />
                <p className="text-foreground">
                  Headquartered in Mumbai, Maharashtra, Ambica Pharma holds ISO-9001-2015 certification
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-secondary mr-2 mt-1" />
                <p className="text-foreground">
                  Follows stringent WHO guidelines for production and GMP-certified unit
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-secondary mr-2 mt-1" />
                <p className="text-foreground">
                  Over 1000+ formulations—ranging from tablets and capsules to syrups and injections
                </p>
              </div>
            </div>
            
            <Button asChild className="bg-primary hover:bg-primary-light mt-4">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <h3 className="text-2xl md:text-3xl font-display font-bold text-primary mb-6">
            Who We Are
          </h3>
          <p className="text-foreground mb-4 max-w-4xl">
            Incepted in the year 2005, Ambica Pharma is an eminent entity indulged in manufacturing, trading, 
            exporting, wholesaling and retailing a huge compilation of Pharmaceutical Tablets, Capsules, injectables, 
            Drops, Ointments, etc. Manufactured making use of supreme in class material and progressive tools and 
            technology; these are in conformism with the norms and guidelines defined by the market.
          </p>
          <p className="text-foreground max-w-4xl">
            With a motive to stand high on the visions of our patrons, we are indulged in providing a huge array 
            of products to our patrons, which are in tandem with the comprehensively accredited standards of quality. 
            Along with this, all our departments are managed by their respective executives to ensure that all the 
            responsibilities are getting finished effectively within the assured time. Since our inception, we are 
            working under the supervision of our skilled mentor His enormous knowledge and information in this domain 
            have directed us in becoming one of the well-known suppliers of the industry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
