
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Lightbulb, Target } from "lucide-react";

const MissionVision = () => {
  return (
    <section className="py-16 bg-accent dark:bg-accent/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
            Our Mission & Vision
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Guided by our commitment to excellence and innovation, we strive to make a positive impact 
            on global healthcare through quality pharmaceutical products.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow dark-card hover-lift animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <CardHeader className="bg-gradient rounded-t-lg py-6">
              <CardTitle className="text-white flex items-center gap-2">
                <Target className="h-6 w-6" />
                Mission
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-600 dark:text-gray-300">
                To revolutionize healthcare by delivering high-quality, affordable, and innovative 
                pharmaceutical products that enrich lives and improve global well-being. We are driven 
                by a passion for excellence, a commitment to sustainability, and a vision to create a 
                healthier future for all.
              </p>
            </CardContent>
          </Card>
          
          {/* Vision Card */}
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow dark-card hover-lift animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <CardHeader className="bg-gradient-secondary rounded-t-lg py-6">
              <CardTitle className="text-white flex items-center gap-2">
                <Lightbulb className="h-6 w-6" />
                Vision
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-600 dark:text-gray-300">
                To become a global beacon of pharmaceutical innovation and quality, setting the gold 
                standard for excellence. We aspire to make advanced healthcare accessible to every 
                corner of the world, empowering communities and creating a lasting legacy of trust and impact.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
