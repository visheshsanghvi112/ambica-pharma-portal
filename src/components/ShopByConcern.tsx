import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Hand } from "lucide-react";

const ShopByConcern = () => {
  const concerns = [
    {
      id: "immunity",
      label: "Immunity",
      image: "/lovable-uploads/Immunity.png",
    },
    {
      id: "anti-aging",
      label: "Anti-Aging",
      image: "/lovable-uploads/Anti Aging.png",
    },
    {
      id: "detoxification",
      label: "Detoxification",
      image: "/lovable-uploads/detoxification_png.png",
    },
    {
      id: "sexual-support",
      label: "Sexual Support",
      image: "/lovable-uploads/Sexual Support.png",
    },
    {
      id: "oral-care",
      label: "Oral Care",
      image: "/lovable-uploads/Oral Care.png",
    },
    {
      id: "pain-management",
      label: "Pain Management",
      image: "/lovable-uploads/Pain Management.png",
    },
    {
      id: "sleep-management",
      label: "Sleep Management",
      image: "/lovable-uploads/Sleep Management.png",
    },
    {
      id: "weight-management",
      label: "Weight Management",
      image: "/lovable-uploads/Weight Managemtn.png",
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="container relative z-10 px-4 md:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-sm opacity-50"></div>
              <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-full">
                <Hand className="w-5 h-5 text-white" />
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-700 dark:text-blue-400">
              SHOP BY CONCERN
            </h2>
          </div>
        </motion.div>

        {/* Concerns Grid - Horizontal scroll on mobile, grid on larger screens */}
        <div className="flex md:grid md:grid-cols-8 gap-4 md:gap-6 lg:gap-8 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 scrollbar-hide">
          <style>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
            .scrollbar-hide {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}</style>
          {concerns.map((concern, index) => (
            <motion.div
              key={concern.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex flex-col items-center group cursor-pointer flex-shrink-0 min-w-[80px] md:min-w-0"
            >
              <Link
                to={`/contact?concern=${concern.id}`}
                className="flex flex-col items-center w-full"
              >
                {/* Circular Image */}
                <motion.div
                  className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden bg-white dark:bg-gray-800 shadow-lg border-2 border-gray-200 dark:border-gray-700 mb-2 md:mb-3 group-hover:border-blue-500 dark:group-hover:border-blue-400 transition-all duration-300"
                  whileHover={{ boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)" }}
                >
                  <img
                    src={concern.image}
                    alt={concern.label}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback if image doesn't load
                      e.currentTarget.src = "https://via.placeholder.com/150?text=" + concern.label;
                    }}
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-all duration-300"></div>
                </motion.div>

                {/* Label */}
                <span className="text-[10px] sm:text-xs md:text-sm font-semibold text-gray-800 dark:text-gray-200 text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
                  {concern.label}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByConcern;

