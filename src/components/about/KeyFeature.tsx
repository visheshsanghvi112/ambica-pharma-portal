
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface KeyFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  colorClass: string;
  image?: string;
}

const KeyFeature = ({ icon, title, description, colorClass, image }: KeyFeatureProps) => {
  // Extract the color name from the colorClass (e.g., "text-primary" -> "primary")
  const colorName = colorClass.replace("text-", "");
  
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="h-full border-t-4 hover:shadow-lg transition-all duration-300" 
            style={{ borderTopColor: `var(--${colorName})` }}>
        <CardContent className="p-5">
          <div className="flex items-start">
            <div className="relative mr-4 mt-1">
              {/* Create a glowing effect around the icon */}
              <div className={`absolute inset-0 rounded-full bg-${colorName}/20 blur-sm`}></div>
              
              {/* Icon container */}
              <div className={`p-2 relative z-10 bg-${colorName} rounded-full text-white`}>
                {icon}
              </div>
            </div>
            
            <div>
              <h3 className={`font-semibold ${colorClass} text-lg mb-1`}>{title}</h3>
              <p className="text-foreground/70 text-sm">{description}</p>
              
              {image && (
                <div className="mt-3 rounded-md overflow-hidden">
                  <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-auto object-cover rounded-md"
                    loading="lazy"
                    style={{ maxHeight: '120px' }}
                  />
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default KeyFeature;
