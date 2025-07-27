
import React from "react";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const PartnerBadge = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      viewport={{ once: true }}
      className="absolute -bottom-5 md:bottom-10 right-5 md:right-10 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-xl border border-primary/10"
    >
      <div className="flex items-center gap-3">
        <Shield className="h-8 w-8 text-primary" />
        <div>
          <p className="text-sm text-foreground/70">Trusted by</p>
          <p className="font-bold text-lg text-primary">300+ Partners</p>
        </div>
      </div>
    </motion.div>
  );
};

export default PartnerBadge;
