
import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Trophy, Calendar, History, ChevronRight, Check } from "lucide-react";
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

const Achievements = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Achievements | Ambica Pharma</title>
        <meta name="description" content="Celebrating the milestones, achievements and journey of Ambica Pharma." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-display font-bold text-primary mb-6"
          >
            Our Achievements
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-foreground/80 max-w-3xl"
          >
            Explore our journey of excellence, celebrations, and growth throughout the years. 
            At Ambica Pharma, we take pride in our achievements and the milestones that have shaped our success story.
          </motion.p>
        </div>
      </section>
      
      {/* Achievement Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container">
          <div className="flex items-center mb-10">
            <Trophy className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-3xl font-display font-bold text-primary">Company Achievements</h2>
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {companyAchievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-accent/30 dark:bg-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-600"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-primary/10 dark:bg-primary/20 rounded-lg">
                    {achievement.icon}
                  </div>
                  <span className="text-secondary font-bold text-lg">{achievement.year}</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{achievement.title}</h3>
                <p className="text-foreground/60 text-sm mb-3">Awarded by: {achievement.awarded_by}</p>
                <p className="text-foreground/80">{achievement.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Celebrations Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container">
          <div className="flex items-center mb-10">
            <Calendar className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-3xl font-display font-bold text-primary">Celebrations</h2>
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {celebrations.map((celebration, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col md:flex-row bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="md:w-2/5 h-60 md:h-auto relative">
                  <img 
                    src={celebration.image} 
                    alt={celebration.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-3/5 p-6">
                  <span className="text-sm text-secondary font-medium">{celebration.date}</span>
                  <h3 className="text-xl font-bold text-primary mt-1 mb-3">{celebration.title}</h3>
                  <p className="text-foreground/80">{celebration.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Journey/Timeline Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container">
          <div className="flex items-center mb-10">
            <History className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-3xl font-display font-bold text-primary">Our Journey</h2>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary/20 z-0"></div>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative z-10"
            >
              {timelineEntries.map((entry, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className={`flex flex-col md:flex-row md:items-center mb-12 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="md:w-1/2 flex justify-center md:justify-end md:pr-12 items-center mb-4 md:mb-0">
                    <div className={`p-4 rounded-lg shadow-md w-full max-w-md bg-white dark:bg-gray-700 border-l-4 ${
                      index % 2 === 0 ? 'border-secondary' : 'border-primary'
                    }`}>
                      <span className="text-lg font-bold text-secondary">{entry.year}</span>
                      <h3 className="text-xl font-bold text-primary my-2">{entry.title}</h3>
                      <p className="text-foreground/80">{entry.description}</p>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 relative flex justify-center md:justify-start">
                    <div className="absolute top-0 md:top-1/2 left-0 md:left-0 transform md:-translate-y-1/2 w-6 h-6 rounded-full bg-primary border-4 border-white dark:border-gray-800"></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">Join Our Success Story</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Be a part of our journey as we continue to grow and achieve new milestones in the pharmaceutical industry.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/careers" className="px-6 py-3 bg-white text-primary font-medium rounded-md hover:bg-opacity-90 transition-colors flex items-center">
              Explore Careers <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
            <Link to="/contact" className="px-6 py-3 bg-transparent border border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors flex items-center">
              Contact Us <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Achievements;
