
import React from "react";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const PartnerBadge = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="absolute -bottom-6 md:-bottom-8 -right-4 md:-right-10 z-20"
    >
      <div className="relative">
        {/* Badge shadow */}
        <div className="absolute inset-0 rounded-full bg-primary/20 blur-md transform scale-90 translate-y-1"></div>
        
        {/* Badge body */}
        <div className="bg-gradient-to-br from-primary to-secondary text-white p-3 md:p-4 rounded-full flex items-center gap-2 shadow-lg relative z-10">
          <Shield className="h-5 w-5 md:h-6 md:w-6" />
          <span className="text-sm md:text-base font-semibold">Trusted Partner Since 2005</span>
        </div>
        
        {/* Badge glow */}
        <div className="absolute inset-0 rounded-full bg-primary/30 blur-xl opacity-50 animate-pulse"></div>
      </div>
    </motion.div>
  );
};

export default PartnerBadge;
