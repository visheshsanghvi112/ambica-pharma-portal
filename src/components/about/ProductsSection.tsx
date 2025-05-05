
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Pill } from "lucide-react";
import ProductCard from "./ProductCard";

const ProductsSection = () => {
  const products = [
    {
      icon: <Pill className="h-5 w-5 text-primary" />,
      title: "Pharmaceutical Tablets",
      description: "We offer a comprehensive range of pharmaceutical tablets across therapeutic categories including antibiotics, cardiovascular, anti-diabetic, pain management, and more.",
      tags: ["Antibiotics", "Cardiovascular", "Anti-diabetic"],
      colorClass: "text-primary"
    },
    {
      icon: <Pill className="h-5 w-5 text-secondary" />,
      title: "Pharmaceutical Capsules",
      description: "Our capsule formulations include antibiotics, anti-inflammatory, nutritional supplements, and specialized medicine sourced from quality-certified suppliers.",
      tags: ["Anti-inflammatory", "Supplements", "Probiotics"],
      colorClass: "text-secondary"
    },
    {
      icon: <Pill className="h-5 w-5 text-blue-500" />,
      title: "Injectables & Drops",
      description: "Premium-quality pharmaceutical injectables and drop formulations for various medical conditions, meeting international standards for safety and efficacy.",
      tags: ["Injectables", "Eye Drops", "Solutions"],
      colorClass: "text-blue-500"
    }
  ];

  return (
    <div className="mt-20 bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-2xl shadow-sm border border-primary/10">
      <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-8 text-center md:text-left">
        Our Pharmaceutical Product Range
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {products.map((product, index) => (
          <ProductCard 
            key={index}
            icon={product.icon}
            title={product.title}
            description={product.description}
            tags={product.tags}
            colorClass={product.colorClass}
          />
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full shadow-md hover:shadow-lg transition-all"
        >
          <CheckCircle className="h-5 w-5" />
          <span>Learn More About Our Products</span>
        </motion.button>
      </div>
    </div>
  );
};

export default ProductsSection;
