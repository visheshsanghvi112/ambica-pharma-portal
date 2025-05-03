
import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { CheckCircle, Heart, Tablet, Brain, Shield, Pill, Baby, Eye, MessageCircle, ArrowRight, Award, Star, TrendingUp, Globe, UserCheck, Sparkles } from "lucide-react";
import Statistics from "../components/Statistics";
import Testimonials from "../components/Testimonials";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import SEOHead from "../components/SEOHead";

// CounterAnimation component for number counting
const CounterAnimation = ({ targetValue }) => {
  // Remove any non-numeric characters for counting
  const numericValue = parseInt(targetValue.replace(/\D/g, ""));
  
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative inline-block"
    >
      {targetValue}
      <motion.span
        className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-indigo-500"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </motion.span>
  );
};

// Product categories data
const productCategories = [
  {
    title: "Cardiovascular",
    description: "Quality medicines for heart health and blood pressure management",
    icon: <Heart className="h-12 w-12 text-red-500" />
  },
  {
    title: "Diabetic Care",
    description: "Affordable options for diabetes management and blood sugar control",
    icon: <Tablet className="h-12 w-12 text-blue-500" />
  },
  {
    title: "Neurological",
    description: "Treatments for neurological conditions and pain management",
    icon: <Brain className="h-12 w-12 text-purple-500" />
  },
  {
    title: "Antibiotics",
    description: "Broad spectrum antibiotics for various infections at lower costs",
    icon: <Shield className="h-12 w-12 text-green-500" />
  },
  {
    title: "Respiratory",
    description: "Medicines for asthma, COPD, and other respiratory conditions",
    icon: <Shield className="h-12 w-12 text-cyan-500" />
  },
  {
    title: "Gastrointestinal",
    description: "Treatments for digestive disorders and gastrointestinal health",
    icon: <Pill className="h-12 w-12 text-amber-500" />
  },
  {
    title: "Pediatric Care",
    description: "Safe and affordable medicines formulated for children",
    icon: <Baby className="h-12 w-12 text-pink-500" />
  },
  {
    title: "Ophthalmics",
    description: "Eye care medicines and treatments at significant savings",
    icon: <Eye className="h-12 w-12 text-indigo-500" />
  }
];

// Customer testimonials data
const customerTestimonials = [
  {
    quote: "Ambica Pharma has been our reliable supplier for diabetes medications. Their quality products and timely delivery make them our preferred partner.",
    author: "Gaurav Mishra",
    position: "Regular Customer, Delhi"
  },
  {
    quote: "As a small clinic owner, I've been sourcing medicines from Ambica for years. Their prompt service and competitive pricing keep my patients happy.",
    author: "Dr. Priya Patel",
    position: "General Physician, Mumbai"
  },
  {
    quote: "Finding affordable cardiovascular medications was challenging until I discovered Ambica Pharma. Now my patients can afford their treatment plans.",
    author: "Dr. Kumar Singh",
    position: "Cardiologist, Hyderabad"
  },
  {
    quote: "The pediatric antibiotics from Ambica Pharma are trusted by our hospital for efficacy and safety. We appreciate their commitment to quality.",
    author: "Dr. Anita Desai",
    position: "Pediatrician, Mumbai"
  }
];

// Global achievements data
const globalAchievements = [
  { 
    title: "Countries Served", 
    value: "45+", 
    icon: <Globe className="h-6 w-6 text-blue-500" />
  },
  { 
    title: "Trusted Partners", 
    value: "300000+", 
    icon: <UserCheck className="h-6 w-6 text-green-500" />
  },
  { 
    title: "Product Range", 
    value: "5000+", 
    icon: <TrendingUp className="h-6 w-6 text-purple-500" />
  },
  { 
    title: "Awards Won", 
    value: "35+", 
    icon: <Award className="h-6 w-6 text-amber-500" />
  }
];

const Index = () => {
  // Setup animation controls for scroll animations
  const controls = useAnimation();
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Enhanced SEO structured data for the homepage
  const homePageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://ambicapharma.net/#webpage",
    "url": "https://ambicapharma.net/",
    "name": "Ambica Pharma - Leading Pharmaceutical Wholesaler, Trader & Exporter in India",
    "isPartOf": {
      "@id": "https://ambicapharma.net/#website"
    },
    "primaryImageOfPage": {
      "@id": "https://ambicapharma.net/lovable-uploads/e75f626d-a490-496b-8817-294d7128b441.png"
    },
    "datePublished": "2005-01-01T00:00:00+00:00",
    "dateModified": "2025-05-03T00:00:00+00:00",
    "description": "Ambica Pharma is a top pharmaceutical wholesaler, trader and exporter offering high-quality medicines, tablets, capsules, injectables, and drops with WHO-GMP and ISO 9001 certification. Serving global markets in 25+ countries since 2005.",
    "breadcrumb": {
      "@id": "https://ambicapharma.net/#breadcrumb"
    },
    "inLanguage": "en-US",
    "potentialAction": [
      {
        "@type": "ReadAction",
        "target": ["https://ambicapharma.net/"]
      },
      {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://ambicapharma.net/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    ],
    "mainEntity": {
      "@type": "Organization",
      "name": "Ambica Pharma",
      "url": "https://ambicapharma.net",
      "logo": "https://ambicapharma.net/lovable-uploads/e75f626d-a490-496b-8817-294d7128b441.png",
      "description": "Leading pharmaceutical wholesaler, trader, and exporter of tablets, capsules, and injectables with WHO-GMP certification, serving global markets since 2005.",
      "founders": [
        {
          "@type": "Person",
          "name": "Dilip Shah",
          "jobTitle": "Founder & Managing Director"
        }
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "22 to 25, 2nd Floor, Chapsey Building, 72/78, Shamaldas Gandhi Marg, Kalbadevi",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "postalCode": "400 002",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9004049076",
        "contactType": "customer service",
        "availableLanguage": ["English", "Hindi"]
      },
      "sameAs": [
        "https://www.facebook.com/ambicapharma",
        "https://twitter.com/ambicapharma",
        "https://www.linkedin.com/company/ambica-pharma"
      ]
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen">
      {/* Enhanced SEO Optimization */}
      <SEOHead 
        title="Ambica Pharma - Leading Pharmaceutical Wholesaler, Trader & Exporter in India"
        description="Ambica Pharma is a top pharmaceutical wholesaler, trader and exporter offering high-quality medicines, tablets, capsules, injectables, and drops with WHO-GMP and ISO 9001 certification. Serving global markets in 25+ countries since 2005."
        keywords="pharmaceutical wholesaler, pharmaceutical trader, medicine exporter, Ambica Pharma, AmbicaPharma, Ambica, Ambicapharma, Mumbai pharmaceutical company, pharmaceutical tablets, pharmaceutical capsules, pharmaceutical injectables, medicine manufacturer, drug distributor, pharmaceutical drops, WHO-GMP certified, ISO 9001 pharma, healthcare products, generic medicine exporter, pharmaceutical suppliers India, bulk medicine distributor, pharmaceutical business, pharma franchise, pharmaceutical company Mumbai, affordable medicines, quality medicines, global pharma exporter"
        structuredData={homePageStructuredData}
        publishedDate="2005-01-01"
        modifiedDate="2025-05-03"
      />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Quick Overview - Enhanced Gradients and Animations */}
      <section className="py-16 bg-gradient-to-r from-indigo-50 via-blue-50/80 to-indigo-50/70 dark:from-indigo-900/20 dark:via-blue-900/30 dark:to-indigo-900/40 relative overflow-hidden">
        {/* Enhanced animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-40 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
              rotate: [0, 10, 0]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 left-10 w-40 h-40 rounded-full bg-gradient-to-r from-blue-300 to-blue-400 blur-3xl"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.6, 0.2],
              rotate: [0, -8, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-gradient-to-r from-purple-300 to-indigo-400 blur-3xl"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.4, 0.1],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 4 }}
            className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-pink-300 to-purple-400 blur-3xl"
          />
        </div>
        
        <div className="container relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.span 
              className="px-4 py-1.5 text-sm font-medium bg-gradient-to-r from-secondary/20 to-primary/20 text-secondary dark:text-secondary-light rounded-full mb-4 inline-block backdrop-blur-sm"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                backgroundImage: "linear-gradient(to right, rgba(var(--secondary), 0.3), rgba(var(--primary), 0.3))" 
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="inline-block mr-1.5"
              >
                <Sparkles className="h-4 w-4 inline" />
              </motion.span>
              Trusted Pharmaceutical Partner
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 animate-gradient">
              Established Excellence Since 2005
            </h2>
            <motion.div 
              className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-violet-600 mx-auto mt-2 mb-5 rounded-full"
              animate={{ width: ["0%", "100%", "80%", "100%"] }}
              transition={{ duration: 2, times: [0, 0.4, 0.5, 0.6], ease: "easeInOut" }}
            />
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-foreground/80 max-w-3xl mx-auto text-lg backdrop-blur-[1px]"
            >
              Ambica Pharma is a trusted name in pharmaceutical distribution, known for quality products and exceptional service across India and international markets.
            </motion.p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Cards with enhanced visual effects */}
            {[
              {
                title: "Business Type",
                content: "Wholesaler, Trader & Merchant Exporter",
                icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
                gradient: "from-blue-100 to-blue-50",
                darkGradient: "dark:from-blue-900/30 dark:to-blue-800/20",
                iconGradient: "from-blue-100 to-blue-200",
                darkIconGradient: "dark:from-blue-800 dark:to-blue-700",
                textColor: "text-blue-700",
                darkTextColor: "dark:text-blue-300",
                delay: 0.1
              },
              {
                title: "Year of Establishment",
                content: "2005",
                icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                gradient: "from-indigo-100 to-indigo-50",
                darkGradient: "dark:from-indigo-900/30 dark:to-indigo-800/20",
                iconGradient: "from-indigo-100 to-indigo-200",
                darkIconGradient: "dark:from-indigo-800 dark:to-indigo-700",
                textColor: "text-indigo-700",
                darkTextColor: "dark:text-indigo-300",
                delay: 0.2
              },
              {
                title: "Experience",
                content: "19+ Years in the Pharmaceutical Industry",
                icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                gradient: "from-violet-100 to-violet-50",
                darkGradient: "dark:from-violet-900/30 dark:to-violet-800/20",
                iconGradient: "from-violet-100 to-violet-200",
                darkIconGradient: "dark:from-violet-800 dark:to-violet-700",
                textColor: "text-violet-700",
                darkTextColor: "dark:text-violet-300",
                delay: 0.3
              }
            ].map((card, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: card.delay }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 20px 30px rgba(0, 0, 0, 0.1)",
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
                className={`bg-gradient-to-br ${card.gradient} ${card.darkGradient} p-8 rounded-xl shadow-md hover:shadow-xl transition-all border border-blue-100 dark:border-blue-900/50 relative overflow-hidden`}
              >
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: card.delay + 0.3, duration: 0.5 }}
                  className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-100/80 to-transparent dark:from-blue-800/20 rounded-bl-full"
                />
                
                <motion.div 
                  className={`w-14 h-14 bg-gradient-to-br ${card.iconGradient} ${card.darkIconGradient} rounded-full flex items-center justify-center mb-6 ${card.textColor} ${card.darkTextColor} relative z-10`}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  {card.icon}
                </motion.div>
                <motion.h3 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: card.delay + 0.4, duration: 0.5 }}
                  className={`text-xl font-bold ${card.textColor} ${card.darkTextColor} mb-3`}
                >
                  {card.title}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: card.delay + 0.5, duration: 0.5 }}
                  className="text-foreground/80 mb-4"
                >
                  {card.content}
                </motion.p>
                <motion.div 
                  className="absolute -bottom-1 -right-1 w-32 h-32 bg-gradient-to-t from-white/60 to-transparent opacity-40 rounded-full"
                  animate={{ rotate: [0, 10, 0], scale: [1, 1.05, 1] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Global Presence Banner with enhanced visual effects and number counter */}
      <section ref={ref} className="py-12 bg-gradient-to-r from-blue-50 via-transparent to-indigo-50 dark:from-blue-900/10 dark:via-transparent dark:to-indigo-900/10 relative overflow-hidden">
        {/* Enhanced background and patterns */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')] opacity-5 mix-blend-overlay"></div>
        
        <motion.div 
          className="absolute inset-0 bg-grid-pattern opacity-10"
          animate={{ 
            backgroundPosition: ['0px 0px', '20px 20px', '0px 0px'], 
            opacity: [0.1, 0.15, 0.1] 
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <div className="container relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
          >
            {globalAchievements.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.05)" 
                }}
                className="bg-gradient-to-br from-white/90 via-white/80 to-blue-50/90 dark:from-gray-800/90 dark:via-gray-800/80 dark:to-blue-900/30 backdrop-blur-sm p-4 md:p-6 rounded-lg shadow-lg border border-blue-100/80 dark:border-blue-900/50 text-center transform transition-all"
              >
                <motion.div 
                  className="flex justify-center mb-3"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <motion.div 
                    className="p-3 rounded-full bg-gradient-to-br from-primary/10 to-primary/20 dark:from-primary/20 dark:to-primary/30"
                    animate={{ 
                      boxShadow: ['0 0 0 rgba(var(--primary), 0.4)', '0 0 20px rgba(var(--primary), 0.2)', '0 0 0 rgba(var(--primary), 0.4)'] 
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {item.icon}
                  </motion.div>
                </motion.div>
                <motion.div 
                  className="text-2xl md:text-3xl font-bold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.8 }}
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 animate-gradient-slow">
                    <CounterAnimation targetValue={item.value} />
                  </span>
                </motion.div>
                <p className="text-sm font-medium text-foreground/80 dark:text-foreground/70">{item.title}</p>
                <motion.div 
                  className="absolute inset-0 rounded-lg opacity-0"
                  whileHover={{ opacity: 0.05 }}
                  transition={{ duration: 0.3 }}
                  style={{ 
                    background: `radial-gradient(circle at center, ${index % 2 === 0 ? '#3b82f6' : '#6366f1'}, transparent 70%)` 
                  }} 
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Our Impact in Numbers - Statistics component is used here */}
      <Statistics />
      
      {/* Product Categories with enhanced animations and UI effects */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50 dark:from-background dark:to-indigo-900/10 relative overflow-hidden">
        {/* Enhanced background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              x: [0, 20, 0], 
              y: [0, -20, 0],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-40 left-20 w-64 h-64 bg-gradient-to-br from-blue-200/40 to-blue-300/20 dark:from-blue-500/10 dark:to-blue-700/5 rounded-full filter blur-3xl"
          />
          <motion.div 
            animate={{ 
              x: [0, -30, 0], 
              y: [0, 15, 0],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 5 }}
            className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-indigo-200/40 to-purple-300/20 dark:from-indigo-500/10 dark:to-purple-700/5 rounded-full filter blur-3xl"
          />
        </div>
        
        <div className="container relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.span 
              className="inline-block px-4 py-1.5 text-sm font-medium bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/60 dark:to-indigo-900/60 text-blue-700 dark:text-blue-300 rounded-full mb-4 shadow-sm"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.span
                animate={{ rotate: [0, 180, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="inline-block mr-1.5"
              >
                <TrendingUp className="h-4 w-4 inline" />
              </motion.span>
              Extensive Range
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 animate-gradient"
              >
                Our Product Categories
              </motion.span>
            </h2>
            <motion.div 
              className="w-28 h-1.5 bg-gradient-to-r from-blue-600 to-violet-600 mx-auto mt-2 mb-5 rounded-full"
              animate={{ 
                width: ['0%', '100%'],
                boxShadow: ['0 0 0 rgba(79, 70, 229, 0)', '0 0 15px rgba(79, 70, 229, 0.3)', '0 0 0 rgba(79, 70, 229, 0)']
              }}
              transition={{ duration: 2, times: [0, 0.6, 1], ease: "easeOut" }}
            />
            <p className="text-foreground/80 max-w-3xl mx-auto text-lg backdrop-blur-[1px]">
              Explore our extensive range of high-quality pharmaceutical products across therapeutic categories.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {productCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: { duration: 0.3 } 
                }}
              >
                <Card className="bg-gradient-to-br from-white via-white/95 to-slate-50/90 dark:from-gray-800 dark:via-gray-800/95 dark:to-slate-900 border border-blue-100/80 dark:border-blue-900/50 shadow-lg h-full overflow-hidden relative group">
                  <motion.div 
                    className="h-2 bg-gradient-to-r from-blue-500 to-indigo-500"
                    animate={{ 
                      backgroundPosition: ['0% 0%', '100% 0%'],
                    }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                  />
                  <CardContent className="p-4 md:p-6 h-full flex flex-col">
                    <motion.div 
                      className="bg-gradient-to-br from-blue-50 to-indigo-50/80 dark:from-blue-900/30 dark:to-indigo-900/30 p-3 md:p-4 rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mx-auto mb-3 md:mb-4"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                      {category.icon}
                    </motion.div>
                    <motion.h3 
                      className="text-lg md:text-xl font-bold text-blue-700 dark:text-blue-300 text-center mb-2 relative"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                    >
                      {category.title}
                      <motion.div 
                        className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-blue-500/50 dark:bg-blue-400/50 rounded-full"
                        animate={{ width: ['0%', '80%', '60%'] }}
                        transition={{ duration: 1.5, delay: 0.5 + index * 0.1, ease: "easeInOut" }}
                      />
                    </motion.h3>
                    <p className="text-foreground/70 text-center text-sm md:text-base">{category.description}</p>
                    
                    {/* Subtle hover animation overlay */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <p className="text-foreground/70 italic mb-6">Looking for a specific medicine? Contact us for information on our complete product range.</p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="relative inline-block"
            >
              <motion.div 
                className="absolute -inset-1.5 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-lg blur-md"
                animate={{ 
                  opacity: [0.5, 0.7, 0.5],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <Button asChild className="relative bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-md hover:shadow-xl transition-all">
                <Link to="/contact" className="flex items-center gap-2">
                  Contact Us 
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.span>
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us - Enhanced with better styling and animations */}
      <section className="py-16 bg-gradient-to-r from-blue-50 via-indigo-50/50 to-blue-50 dark:from-blue-900/10 dark:via-indigo-900/15 dark:to-blue-900/10 relative overflow-hidden">
        {/* Enhanced decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent opacity-70"></div>
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent opacity-70"></div>
          
          {/* Enhanced animated floating particles */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-primary/10 dark:bg-primary/20"
              style={{
                width: Math.random() * 60 + 10,
                height: Math.random() * 60 + 10,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [Math.random() * 15, Math.random() * -15, Math.random() * 15],
                x: [Math.random() * 15, Math.random() * -15, Math.random() * 15],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, Math.random() * 0.3 + 1, 1],
              }}
              transition={{
                duration: Math.random() * 8 + 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        
        <div className="container relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <motion.span 
              className="inline-block px-4 py-1.5 text-sm font-medium bg-gradient-to-r from-indigo-100 to-purple-100/80 dark:from-indigo-900/60 dark:to-purple-900/60 text-indigo-700 dark:text-indigo-300 rounded-full mb-4 shadow-sm backdrop-blur-[2px]"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="inline-block mr-1.5"
              >
                <CheckCircle className="h-4 w-4 inline" />
              </motion.span>
              Our Commitment
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 animate-gradient"
              >
                Why Choose Ambica Pharma?
              </motion.span>
            </h2>
            <motion.div 
              className="w-28 h-1.5 bg-gradient-to-r from-blue-600 to-violet-600 mx-auto mt-2 mb-5 rounded-full"
              animate={{ 
                width: ['0%', '100%'],
                boxShadow: ['0 0 0 rgba(79, 70, 229, 0)', '0 0 15px rgba(79, 70, 229, 0.3)', '0 0 0 rgba(79, 70, 229, 0)']
              }}
              transition={{ duration: 2, times: [0, 0.6, 1], ease: "easeOut" }}
            />
            <p className="text-foreground/80 text-lg backdrop-blur-[1px]">
              We uphold the highest standards of quality and service in all our pharmaceutical products and business operations.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                title: "Quality Assurance",
                description: "All products meet rigorous quality standards and are sourced from certified manufacturers.",
                icon: <Star className="h-6 w-6 md:h-8 md:w-8 text-yellow-500" />,
                delay: 0.1,
                gradient: "from-yellow-500 to-amber-500",
                bgGradient: "from-yellow-50 to-amber-50/50",
                darkBgGradient: "dark:from-yellow-900/20 dark:to-amber-900/10"
              },
              {
                title: "Competitive Pricing",
                description: "We offer the best market rates through efficient supply chain management and strong manufacturer relationships.",
                icon: <CheckCircle className="h-6 w-6 md:h-8 md:w-8 text-green-500" />,
                delay: 0.2,
                gradient: "from-green-500 to-emerald-500",
                bgGradient: "from-green-50 to-emerald-50/50",
                darkBgGradient: "dark:from-green-900/20 dark:to-emerald-900/10"
              },
              {
                title: "Extensive Distribution",
                description: "Our robust network ensures timely delivery of pharmaceuticals across India and international markets.",
                icon: <Globe className="h-6 w-6 md:h-8 md:w-8 text-blue-500" />,
                delay: 0.3,
                gradient: "from-blue-500 to-sky-500",
                bgGradient: "from-blue-50 to-sky-50/50",
                darkBgGradient: "dark:from-blue-900/20 dark:to-sky-900/10"
              },
              {
                title: "Expert Consultation",
                description: "Our pharmaceutical experts provide comprehensive guidance on product selection and regulatory compliance.",
                icon: <UserCheck className="h-6 w-6 md:h-8 md:w-8 text-purple-500" />,
                delay: 0.4,
                gradient: "from-purple-500 to-indigo-500",
                bgGradient: "from-purple-50 to-indigo-50/50",
                darkBgGradient: "dark:from-purple-900/20 dark:to-indigo-900/10"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: item.delay }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 30px rgba(0, 0, 0, 0.1)",
                  transition: { type: "spring", stiffness: 300, damping: 10 } 
                }}
                className={`flex flex-col items-center text-center p-6 md:p-8 rounded-lg bg-gradient-to-br from-white/95 via-white/90 to-white/85 dark:from-gray-800 dark:via-gray-800/90 dark:to-gray-800/85 ${item.bgGradient} ${item.darkBgGradient} backdrop-blur-sm shadow-md hover:shadow-xl transition-all border border-blue-100/80 dark:border-blue-900/30 group relative`}
              >
                {/* Animated background gradient */}
                <motion.div 
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.05 }}
                  style={{ 
                    background: `radial-gradient(circle at center, ${index % 2 === 0 ? '#4f46e5' : '#3b82f6'}, transparent 70%)`
                  }}
                />
                
                <motion.div 
                  className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${item.gradient} rounded-full flex items-center justify-center mb-5 md:mb-6 text-white transform transition-all duration-300`}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  animate={{ 
                    boxShadow: ['0 0 0 rgba(0, 0, 0, 0.2)', '0 0 20px rgba(0, 0, 0, 0.1)', '0 0 0 rgba(0, 0, 0, 0.2)']
                  }}
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                >
                  {item.icon}
                  
                  {/* Animated pulse ring */}
                  <motion.div 
                    className="absolute inset-0 rounded-full"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 0, 0.7]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                    style={{ 
                      background: `linear-gradient(to right, ${item.gradient.split(' ')[1]}, ${item.gradient.split(' ')[3]})`
                    }}
                  />
                </motion.div>
                <motion.h3 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="text-lg md:text-xl font-bold mb-3 relative"
                >
                  {item.title}
                  <motion.div 
                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary/40 to-secondary/40 rounded-full"
                    animate={{ width: ['0%', '50%', '30%', '50%'] }}
                    transition={{ duration: 2, delay: 0.5 + index * 0.2, ease: "easeInOut" }}
                  />
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-sm md:text-base text-foreground/70"
                >
                  {item.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
