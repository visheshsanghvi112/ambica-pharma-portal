
import React from "react";
import { Card, CardContent } from "./ui/card";
import { MapPin } from "lucide-react";

const countries = [
  {
    name: "India",
    description: "Serving across all regions with a commitment to innovation and excellence.",
    icon: "🇮🇳"
  },
  {
    name: "United States",
    description: "Leading the way with extensive market presence and innovative solutions.",
    icon: "🇺🇸"
  },
  {
    name: "Germany",
    description: "Pioneering pharmaceutical innovations and excellence in Europe.",
    icon: "🇩🇪"
  },
  {
    name: "Brazil",
    description: "Delivering high-quality products across South America with a strong market presence.",
    icon: "🇧🇷"
  },
  {
    name: "China",
    description: "Expanding across Asia with cutting-edge technology and quality standards.",
    icon: "🇨🇳"
  },
  {
    name: "Australia",
    description: "Providing high-quality pharmaceuticals across Oceania with a global approach.",
    icon: "🇦🇺"
  }
];

const GlobalReach = () => {
  return (
    <section className="py-16 bg-white dark:bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
            Our Global Reach
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Ambica Pharma delivers excellence in pharmaceutical products and services across continents,
            with a commitment to innovation, quality, and customer satisfaction.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {countries.map((country, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow dark-card hover-lift animate-fade-up" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{country.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">{country.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{country.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center animate-fade-up" style={{ animationDelay: "0.7s" }}>
          <div className="inline-block px-8 py-3 bg-accent dark:bg-accent/50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-primary flex items-center justify-center">
              <MapPin className="mr-2 h-5 w-5" />
              Connect with Us Globally
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;
