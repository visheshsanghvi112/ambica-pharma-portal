
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Pill } from "lucide-react";
import ProductCard from "./ProductCard";

const ProductsSection = () => {
  const products = [
    {
      icon: <Pill className="h-4 w-4 text-primary" />,
      title: "Pharmaceutical Tablets",
      description: "We offer a comprehensive range of pharmaceutical tablets across therapeutic categories including antibiotics, cardiovascular, anti-diabetic, pain management, and more.",
      tags: ["Antibiotics", "Cardiovascular", "Anti-diabetic"],
      colorClass: "text-primary",
      image: "/lovable-uploads/1ba95355-1c30-42b5-bfbd-fc0bb85e1a41.png",
      imageAlt: "High-quality pharmaceutical tablets manufactured with WHO-GMP certification"
    },
    {
      icon: <Pill className="h-4 w-4 text-secondary" />,
      title: "Pharmaceutical Capsules",
      description: "Our capsule formulations include antibiotics, anti-inflammatory, nutritional supplements, and specialized medicine sourced from quality-certified suppliers.",
      tags: ["Anti-inflammatory", "Supplements", "Probiotics"],
      colorClass: "text-secondary",
      image: "/lovable-uploads/93092566-4a97-4281-9733-909843f42279.png",
      imageAlt: "Premium pharmaceutical capsules with strict quality control measures"
    },
    {
      icon: <Pill className="h-4 w-4 text-blue-500" />,
      title: "Injectables & Drops",
      description: "Premium-quality pharmaceutical injectables and drop formulations for various medical conditions, meeting international standards for safety and efficacy.",
      tags: ["Injectables", "Eye Drops", "Solutions"],
      colorClass: "text-blue-500",
      image: "/lovable-uploads/b9310eb6-c2d2-4e00-acdd-dbca91490105.png",
      imageAlt: "Pharmaceutical injectables and drops manufactured with ISO 9001:2015 certification"
    }
  ];

  // Product schema for structured data
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": products.map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": product.title,
        "description": product.description,
        "category": product.tags.join(", "),
        "image": product.image ? `https://ambicapharma.net${product.image}` : undefined,
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "priceCurrency": "INR",
          "priceValidUntil": "2025-12-31",
          "seller": {
            "@type": "Organization",
            "name": "Ambica Pharma"
          }
        },
        "brand": {
          "@type": "Brand",
          "name": "Ambica Pharma"
        }
      }
    }))
  };

  return (
    <div className="mt-16 bg-gradient-to-br from-primary/5 to-secondary/5 p-6 md:p-8 rounded-2xl shadow-sm border border-primary/10">
      <h3 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-6 text-center md:text-left">
        Our Pharmaceutical Product Range
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
        {products.map((product, index) => (
          <ProductCard 
            key={index}
            icon={product.icon}
            title={product.title}
            description={product.description}
            tags={product.tags}
            colorClass={product.colorClass}
            image={product.image}
            imageAlt={product.imageAlt}
          />
        ))}
      </div>
      
      <div className="mt-6 text-center">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 px-5 py-2 text-sm bg-gradient-to-r from-primary to-secondary text-white rounded-full shadow-md hover:shadow-lg transition-all"
        >
          <CheckCircle className="h-4 w-4" />
          <span>Learn More About Our Products</span>
        </motion.button>
      </div>
      
      {/* Inject structured product data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
    </div>
  );
};

export default ProductsSection;
