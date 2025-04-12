
import React from "react";
import { motion } from "framer-motion";
import { Pill } from "lucide-react";

interface ProductCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
  colorClass: string;
}

const ProductCard = ({ icon, title, description, tags, colorClass }: ProductCardProps) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all"
    >
      <div className="flex items-center mb-4">
        <div className={`p-2 ${colorClass}/10 rounded-lg mr-3`}>
          {icon}
        </div>
        <h4 className={`text-lg font-semibold ${colorClass}`}>{title}</h4>
      </div>
      <p className="text-foreground/70">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mt-4">
        {tags.map((tag, index) => (
          <span 
            key={index} 
            className={`inline-block px-2 py-1 text-xs ${colorClass}/10 ${colorClass} rounded-full`}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ProductCard;
