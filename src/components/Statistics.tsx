
import React from "react";
import { Clock, Users, Award, Activity } from "lucide-react";
import { useIsMobile } from "../hooks/use-mobile";

const statistics = [
  {
    title: "Years of Marketing & Distribution",
    value: "19",
    icon: <Clock className="h-10 w-10 text-primary" />
  },
  {
    title: "Happy Customers",
    value: "9242+",
    icon: <Users className="h-10 w-10 text-primary" />
  },
  {
    title: "Years of Experience",
    value: "22",
    icon: <Award className="h-10 w-10 text-primary" />
  },
  {
    title: "Quality Products",
    value: "1000+",
    icon: <Activity className="h-10 w-10 text-primary" />
  }
];

const Statistics = () => {
  const isMobile = useIsMobile();

  return (
    <section className="py-12 md:py-16 bg-white dark:bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12 animate-fade-up">
          <h2 className="text-2xl md:text-4xl font-display font-bold text-primary">
            Our Achievements
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          {statistics.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-3 md:p-6 bg-accent dark:bg-accent/30 rounded-lg shadow-sm hover:shadow-md transition-shadow hover-lift animate-fade-up" 
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="flex justify-center mb-2 md:mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1 md:mb-2 animate-pulse-slow">{stat.value}</div>
              <p className="text-gray-600 dark:text-gray-300 text-xs md:text-sm">{stat.title}</p>
            </div>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mt-10 md:mt-16 items-center">
          <div className="animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <h2 className="text-xl md:text-3xl font-display font-bold text-primary mb-3 md:mb-4">
              We Provide Different Medicines To Improve Your Health
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 md:mb-6 text-sm md:text-base">
              We offer a diverse array of products that consistently adhere to globally accredited quality standards. Our dedicated departmental executives oversee operations to guarantee efficient and timely completion of all tasks.
            </p>
            <div className="space-y-2 md:space-y-3">
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
          </div>
          
          <div className="animate-fade-up mt-6 md:mt-0" style={{ animationDelay: "0.7s" }}>
            <img
              src="https://images.unsplash.com/photo-1576602976047-174e57a47881?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Pharmaceutical Products"
              className="rounded-lg shadow-lg hover-scale w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
