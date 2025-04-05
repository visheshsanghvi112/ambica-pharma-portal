
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
    <section className="py-10 md:py-16 bg-white dark:bg-background">
      <div className="container px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-display font-bold text-primary">
            Our Achievements
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mt-4"></div>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {statistics.map((stat, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-4 md:p-6 bg-accent/50 dark:bg-accent/30 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1" 
            >
              <div className="flex justify-center mb-3 md:mb-4">
                {stat.icon}
              </div>
              <div className="text-2xl md:text-4xl font-bold text-primary mb-2 md:mb-3">{stat.value}</div>
              <p className="text-gray-600 dark:text-gray-300 text-xs md:text-sm font-medium">{stat.title}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mt-12 md:mt-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <h2 className="text-xl md:text-3xl font-display font-bold text-primary mb-4 md:mb-5">
              We Provide Different Medicines To Improve Your Health
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-5 md:mb-6 text-sm md:text-base">
              We offer a diverse array of products that consistently adhere to globally accredited quality standards. Our dedicated departmental executives oversee operations to guarantee efficient and timely completion of all tasks.
            </p>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center">
                <div className="h-2 w-2 bg-secondary rounded-full mr-2"></div>
                <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">Fast Delivery</p>
              </div>
              <div className="flex items-center">
                <div className="h-2 w-2 bg-secondary rounded-full mr-2"></div>
                <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">Quality Products</p>
              </div>
              <div className="flex items-center">
                <div className="h-2 w-2 bg-secondary rounded-full mr-2"></div>
                <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">All Medicines</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <img
              src="https://images.unsplash.com/photo-1576602976047-174e57a47881?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Pharmaceutical Products"
              className="rounded-lg shadow-lg hover:scale-[1.02] transition-transform duration-500 w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
