
import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Trophy, Calendar, History, ChevronRight, Check, Star, Award, Gift, PartyPopper, Milestone } from "lucide-react";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.1 
    } 
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

// Enhanced animations
const slideInLeft = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
};

const slideInRight = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.2 } }
};

const scaleIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } }
};

const timelineEntries = [
  {
    year: "2005",
    title: "Foundation",
    description: "Ambica Pharma was established with a vision to provide quality medicines at affordable prices."
  },
  {
    year: "2008",
    title: "First Manufacturing Unit",
    description: "Set up our first manufacturing facility with state-of-the-art equipment."
  },
  {
    year: "2011",
    title: "ISO Certification",
    description: "Achieved ISO 9001:2015 certification for quality management."
  },
  {
    year: "2014",
    title: "Pan-India Expansion",
    description: "Expanded our distribution network across all major states in India."
  },
  {
    year: "2017",
    title: "International Market Entry",
    description: "Started exporting pharmaceutical products to international markets."
  },
  {
    year: "2020",
    title: "COVID-19 Response",
    description: "Ramped up production of essential medicines during the global pandemic."
  },
  {
    year: "2023",
    title: "Digital Transformation",
    description: "Implemented advanced digital solutions across all operations."
  },
  {
    year: "2025",
    title: "Sustainability Initiative",
    description: "Launched eco-friendly packaging and sustainable manufacturing practices."
  }
];

const celebrations = [
  {
    title: "Annual Day Celebration",
    date: "January 2024",
    description: "Celebrating our company's founding with all team members.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Team Building Retreat",
    date: "March 2024",
    description: "A weekend retreat focused on team building and strategic planning.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Diwali Celebration",
    date: "November 2023",
    description: "Festive celebrations with the entire Ambica Pharma family.",
    image: "https://images.unsplash.com/photo-1604604994333-f1b9a9304323?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "CSR Initiative Launch",
    date: "September 2023",
    description: "Launch of our healthcare initiative for underprivileged communities.",
    image: "https://images.unsplash.com/photo-1593113630400-ea4288922497?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "New Product Launch Event",
    date: "July 2023",
    description: "Successful launch of our new antibiotics range with healthcare professionals.",
    image: "https://images.unsplash.com/photo-1560523160-754a9e25c68f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Employee Wellness Program",
    date: "April 2023",
    description: "Kickoff of our comprehensive employee wellness initiative focusing on physical and mental health.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const companyAchievements = [
  {
    title: "Best Pharmaceutical Company",
    year: "2023",
    awarded_by: "India Pharma Excellence Awards",
    description: "Recognized for our contributions to the pharmaceutical industry.",
    icon: <Trophy className="h-10 w-10 text-secondary" />
  },
  {
    title: "Quality Excellence Award",
    year: "2022",
    awarded_by: "National Quality Foundation",
    description: "Acknowledged for maintaining high quality standards in all processes.",
    icon: <Check className="h-10 w-10 text-secondary" />
  },
  {
    title: "Best Employer",
    year: "2021",
    awarded_by: "HR Excellence Institute",
    description: "Awarded for creating a positive and productive work environment.",
    icon: <Trophy className="h-10 w-10 text-secondary" />
  },
  {
    title: "Innovation in Healthcare",
    year: "2020",
    awarded_by: "Healthcare Innovation Summit",
    description: "Recognized for innovative approaches in pharmaceutical development.",
    icon: <Check className="h-10 w-10 text-secondary" />
  },
  {
    title: "Export Excellence",
    year: "2019",
    awarded_by: "Federation of Indian Export Organizations",
    description: "Acknowledged for outstanding performance in pharmaceutical exports.",
    icon: <Trophy className="h-10 w-10 text-secondary" />
  },
  {
    title: "Corporate Social Responsibility",
    year: "2018",
    awarded_by: "CSR Foundation of India",
    description: "Recognized for impactful social initiatives and community engagement.",
    icon: <Check className="h-10 w-10 text-secondary" />
  }
];

// Additional achievements for more space
const additionalAchievements = [
  {
    title: "Research & Development Excellence",
    year: "2022",
    awarded_by: "Pharmaceutical Research Council",
    description: "For groundbreaking research in pharmaceutical formulations and drug delivery systems.",
    icon: <Star className="h-10 w-10 text-secondary" />
  },
  {
    title: "Supply Chain Optimization",
    year: "2021",
    awarded_by: "Logistics Excellence Forum",
    description: "For implementing cutting-edge supply chain solutions ensuring medicine availability during challenging times.",
    icon: <Award className="h-10 w-10 text-secondary" />
  }
];

const Achievements = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Achievements & Milestones | Ambica Pharma - Our Journey of Excellence</title>
        <meta name="description" content="Explore Ambica Pharma's achievements, awards, and milestones. From ISO certification to global expansion, discover our journey of excellence in pharmaceutical distribution." />
        <meta name="keywords" content="Ambica Pharma achievements, pharmaceutical awards, company milestones, ISO certification, WHO-GMP, export excellence, pharmaceutical industry awards, company history" />
        <link rel="canonical" href="https://ambicapharma.net/achievements" />
        <meta property="og:title" content="Achievements & Milestones | Ambica Pharma" />
        <meta property="og:description" content="Explore Ambica Pharma's journey of excellence - awards, certifications, and milestones since 2005." />
        <meta property="og:url" content="https://ambicapharma.net/achievements" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Achievements & Milestones | Ambica Pharma" />
        <meta name="twitter:description" content="Explore Ambica Pharma's journey of excellence in pharmaceutical distribution." />
      </Helmet>
      
      {/* Hero Section - Enhanced with gradient */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/5 dark:from-primary/20 dark:via-secondary/10 dark:to-primary/10 relative overflow-hidden">
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4"
            >
              <Trophy className="h-4 w-4 inline mr-2" />
              19+ Years of Excellence
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary mb-6"
            >
              Our Achievements
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full"
            ></motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg md:text-xl text-foreground/80"
            >
              Explore our journey of excellence, celebrations, and growth throughout the years. We take pride in the milestones that have shaped our success story.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Enhanced Achievement Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-800">
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeft}
            className="flex items-center mb-12 md:mb-16"
          >
            <Trophy className="h-10 w-10 text-primary mr-4" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">Company Achievements</h2>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {[...companyAchievements, ...additionalAchievements].map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-accent/30 dark:bg-gray-700 rounded-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600 h-full"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="p-4 bg-primary/10 dark:bg-primary/20 rounded-lg transform transition-transform hover:rotate-12 hover:scale-110 duration-300">
                    {achievement.icon}
                  </div>
                  <span className="text-secondary font-bold text-lg py-1 px-3 bg-secondary/10 rounded-full">{achievement.year}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">{achievement.title}</h3>
                <p className="text-foreground/60 text-sm mb-4 inline-block bg-primary/5 px-3 py-1 rounded-full">Awarded by: {achievement.awarded_by}</p>
                <p className="text-foreground/80 leading-relaxed">{achievement.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Enhanced Celebrations Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInRight}
            className="flex items-center mb-12 md:mb-16"
          >
            <Calendar className="h-10 w-10 text-primary mr-4" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">Celebrations</h2>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-10 md:gap-12"
          >
            {celebrations.map((celebration, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                className="flex flex-col md:flex-row bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full border border-gray-100 dark:border-gray-600"
              >
                <div className="md:w-2/5 h-60 md:h-auto relative overflow-hidden">
                  <motion.img 
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    src={celebration.image} 
                    alt={celebration.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <span className="text-white font-medium p-4">{celebration.date}</span>
                  </div>
                </div>
                <div className="md:w-3/5 p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-primary mt-1 mb-4">{celebration.title}</h3>
                  <p className="text-foreground/80 leading-relaxed">{celebration.description}</p>
                  <motion.div 
                    whileHover={{ x: 5 }} 
                    transition={{ duration: 0.2 }}
                    className="mt-5 inline-flex items-center text-secondary font-medium"
                  >
                    <span>View Gallery</span>
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Enhanced Journey/Timeline Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-800">
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeft}
            className="flex items-center mb-12 md:mb-16"
          >
            <History className="h-10 w-10 text-primary mr-4" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">Our Journey</h2>
          </motion.div>
          
          <div className="relative">
            {/* Timeline Line with Animation */}
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary/20 z-0"
            />
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="relative z-10"
            >
              {timelineEntries.map((entry, index) => (
                <motion.div 
                  key={index}
                  variants={index % 2 === 0 ? slideInLeft : slideInRight}
                  whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                  className={`flex flex-col md:flex-row md:items-center mb-16 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="md:w-1/2 flex justify-center md:justify-end items-center mb-4 md:mb-0 md:px-8">
                    <div className={`p-6 rounded-lg shadow-lg w-full max-w-md bg-white dark:bg-gray-700 border-l-4 ${
                      index % 2 === 0 ? 'border-secondary' : 'border-primary'
                    }`}>
                      <motion.span 
                        whileHover={{ scale: 1.1 }} 
                        className="text-xl font-bold text-secondary inline-block px-4 py-1 bg-secondary/10 rounded-full mb-3"
                      >
                        {entry.year}
                      </motion.span>
                      <h3 className="text-2xl font-bold text-primary my-3">{entry.title}</h3>
                      <p className="text-foreground/80 leading-relaxed">{entry.description}</p>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 relative flex justify-center md:justify-start">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="absolute top-0 md:top-1/2 left-0 md:left-0 transform md:-translate-y-1/2 w-8 h-8 rounded-full bg-primary border-4 border-white dark:border-gray-800"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Enhanced CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-primary to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-64 bg-white/10 transform -skew-y-6"></div>
          <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-r from-primary/25 to-secondary/25 transform skew-y-6"></div>
        </div>
        
        <div className="container text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold mb-8"
          >
            Join Our Success Story
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Be a part of our journey as we continue to grow and achieve new milestones in the pharmaceutical industry.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6"
          >
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <Link to="/careers" className="px-8 py-4 bg-white text-primary font-medium rounded-md hover:bg-opacity-90 transition-colors flex items-center shadow-lg">
                Explore Careers <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <Link to="/contact" className="px-8 py-4 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors flex items-center">
                Contact Us <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Achievements;
