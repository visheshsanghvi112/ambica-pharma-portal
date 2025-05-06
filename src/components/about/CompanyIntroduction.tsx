
import React from "react";
import { motion } from "framer-motion";

interface CompanyIntroductionProps {
  children: React.ReactNode;
}

const CompanyIntroduction = ({ children }: CompanyIntroductionProps) => {
  return (
    <div className="mb-8">
      <div className="inline-block">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-semibold relative z-10 mb-6"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Our Story
          </span>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-primary to-secondary absolute -bottom-1 left-0 rounded-full"
          />
        </motion.h2>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="relative"
      >
        {/* Decorative element */}
        <div className="absolute left-0 top-0 w-20 h-20 -ml-6 -mt-6 rounded-full bg-primary/5 dark:bg-primary/10 z-0"></div>
        <div className="absolute right-0 bottom-0 w-16 h-16 -mr-4 -mb-4 rounded-full bg-secondary/5 dark:bg-secondary/10 z-0"></div>
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default CompanyIntroduction;
