
import React from "react";
import { Phone } from "lucide-react";
import { Button } from "./ui/button";

const EmergencyCall = () => {
  return (
    <section className="py-12 bg-gradient">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
              In need of emergency medicines?<br />We're just a call away!
            </h2>
            <p className="text-white/90 mb-6">
              Global delivery for your emergency medicine needs. Trusted by many for fast and reliable service.
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              <Phone className="mr-2 h-5 w-5" />
              Call +91 9967006091
            </Button>
          </div>
          
          <div className="hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Emergency Medicine Delivery"
              className="rounded-lg shadow-xl max-w-sm ml-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyCall;
