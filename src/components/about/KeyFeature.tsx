
import React from "react";
import { motion } from "framer-motion";

interface KeyFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  colorClass: string;
}

const KeyFeature = ({ icon, title, description, colorClass }: KeyFeatureProps) => {
  // Extract the color name from the colorClass (e.g., "text-primary" -> "primary")
  const colorName = colorClass.split('-')[1];
  
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="flex items-start p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className={`p-3 bg-${colorName}-500 rounded-lg mr-4 shadow-sm relative group`}>
        {/* Add a 3D shadow effect */}
        <div className="absolute inset-0 rounded-lg bg-black/5 blur-sm -bottom-1 left-1 group-hover:scale-105 transition-all"></div>
        
        {/* Add a subtle glow effect */}
        <div className={`absolute inset-0 bg-${colorName}-400/50 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-all`}></div>
        
        {/* The icon with white color for better contrast */}
        <div className="relative">
          <div className="text-white">
            {icon}
          </div>
        </div>
      </div>
      <div>
        <h3 className={`font-semibold ${colorClass} text-lg`}>{title}</h3>
        <p className="text-foreground/70">{description}</p>
      </div>
    </motion.div>
  );
};

export default KeyFeature;
