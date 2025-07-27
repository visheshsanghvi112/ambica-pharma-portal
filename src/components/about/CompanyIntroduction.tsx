
import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface CompanyIntroductionProps {
  children: React.ReactNode;
}

const CompanyIntroduction = ({ children }: CompanyIntroductionProps) => {
  return (
    <div className="space-y-4 text-foreground/80">
      <motion.span 
        className="inline-block px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full mb-6"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Sparkles className="h-4 w-4 inline mr-2" />
        Established 2005
      </motion.span>

      <h2 className="text-3xl md:text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-6">
        Leading Pharmaceutical Wholesaler, Trader & Exporter
      </h2>
      
      {children}
      
      <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary my-6 rounded-full"></div>
      
      <motion.div 
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="p-5 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl border border-primary/10 mt-6"
      >
        <p className="italic text-foreground/70">
          "Our mission is to enhance global healthcare through quality pharmaceuticals, innovative solutions, and exceptional service, ensuring better health outcomes for communities worldwide."
        </p>
        <p className="font-semibold text-right mt-2 text-primary">— Mr. Dilip Jain, Founder</p>
      </motion.div>
    </div>
  );
};

export default CompanyIntroduction;
