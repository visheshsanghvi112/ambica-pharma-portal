
import React from "react";
import { Clock, Users, Award, Activity } from "lucide-react";
import { useIsMobile } from "../hooks/use-mobile";
import { motion } from "framer-motion";

const statistics = [
  {
    title: "Years of Marketing & Distribution",
    value: "19",
    icon: <Clock className="h-8 w-8 md:h-10 md:w-10 text-primary" />
  },
  {
    title: "Happy Customers",
    value: "9242+",
    icon: <Users className="h-8 w-8 md:h-10 md:w-10 text-primary" />
  },
  {
    title: "Years of Experience",
    value: "22",
    icon: <Award className="h-8 w-8 md:h-10 md:w-10 text-primary" />
  },
  {
    title: "Quality Products",
    value: "1000+",
    icon: <Activity className="h-8 w-8 md:h-10 md:w-10 text-primary" />
  }
];

const Statistics = () => {
  const isMobile = useIsMobile();

  return (
    <section className="py-16 md:py-20 bg-white dark:bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-primary"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-secondary"></div>
      </div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
            Our Achievements
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mt-4"></div>
          <p className="mt-4 text-foreground/70 max-w-2xl mx-auto">
            We've built a strong reputation for quality and reliability in the pharmaceutical industry
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {statistics.map((stat, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-600 group overflow-hidden" 
            >
              {/* Animated Background Element */}
              <div className="absolute -right-10 -bottom-10 w-32 h-32 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-all duration-500 transform group-hover:scale-150"></div>
              
              <div className="flex justify-center mb-4 relative z-10">
                <div className="p-3 bg-primary/10 dark:bg-primary/20 rounded-lg transform transition-transform group-hover:scale-110 duration-300">
                  {stat.icon}
                </div>
              </div>
              <div className="text-2xl md:text-4xl font-bold text-primary mb-2 md:mb-3 relative z-10">
                {stat.value}
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-xs md:text-sm font-medium relative z-10">
                {stat.title}
              </p>
            </motion.div>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mt-16 md:mt-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-primary mb-4 md:mb-5">
              We Provide Different Medicines To Improve Your Health
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 md:mb-8 text-sm md:text-base leading-relaxed">
              We offer a diverse array of products that consistently adhere to globally accredited quality standards. Our dedicated departmental executives oversee operations to guarantee efficient and timely completion of all tasks.
            </p>
            <div className="space-y-4 md:space-y-5">
              {["Fast Delivery", "Quality Products", "All Medicines"].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * (index + 1) }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 mr-3">
                    <div className="h-2 w-2 bg-secondary rounded-full"></div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base font-medium">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1576602976047-174e57a47881?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Pharmaceutical Products"
                className="w-full h-auto rounded-lg hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-50 pointer-events-none"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
