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
    author: "Raj Sharma",
    position: "Pharmacy Owner, Delhi"
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
    position: "Pediatrician, Bangalore"
  }
];

// Global achievements data
const globalAchievements = [
  { 
    title: "Countries Served", 
    value: "25+", 
    icon: <Globe className="h-6 w-6 text-blue-500" />
  },
  { 
    title: "Trusted Partners", 
    value: "300+", 
    icon: <UserCheck className="h-6 w-6 text-green-500" />
  },
  { 
    title: "Product Range", 
    value: "1000+", 
    icon: <TrendingUp className="h-6 w-6 text-purple-500" />
  },
  { 
    title: "Awards Won", 
    value: "15+", 
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

  return (
    <div className="min-h-screen">
      {/* SEO Optimization */}
      <SEOHead 
        title="Ambica Pharma - Leading Pharmaceutical Wholesaler, Trader & Exporter in India"
        description="Ambica Pharma is a top pharmaceutical wholesaler, trader and exporter offering high-quality medicines, tablets, capsules, injectables, and drops with WHO-GMP and ISO 9001 certification. Serving global markets in 25+ countries since 2005."
        keywords="pharmaceutical wholesaler, pharmaceutical trader, medicine exporter, Ambica Pharma, pharmaceutical tablets, pharmaceutical capsules, pharmaceutical injectables, medicine manufacturer, drug distributor, pharmaceutical drops, WHO-GMP certified, ISO 9001 pharma, healthcare products, generic medicine exporter, pharmaceutical suppliers India"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Ambica Pharma",
          "url": "https://ambicapharma.net",
          "logo": "/lovable-uploads/e75f626d-a490-496b-8817-294d7128b441.png",
          "foundingDate": "2005",
          "description": "Leading pharmaceutical wholesaler, trader, and exporter of tablets, capsules, and injectables with WHO-GMP certification, serving global markets since 2005.",
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
          }
        }}
      />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Quick Overview */}
      <section className="py-16 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-gradient-to-r from-blue-300 to-blue-400 blur-3xl animate-blob"></div>
          <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-gradient-to-r from-purple-300 to-indigo-400 blur-3xl animate-blob" style={{ animationDelay: "2s" }}></div>
          <div className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-pink-300 to-purple-400 blur-3xl animate-blob" style={{ animationDelay: "4s" }}></div>
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
              className="px-3 py-1 text-sm font-medium bg-secondary/10 text-secondary rounded-full mb-4 inline-block"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(var(--secondary), 0.2)" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Sparkles className="h-4 w-4 inline mr-1" />
              Trusted Pharmaceutical Partner
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">
              Established Excellence Since 2005
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-violet-600 mx-auto mt-2 mb-4 rounded-full"></div>
            <p className="text-foreground/80 max-w-3xl mx-auto text-lg">
              Ambica Pharma is a trusted name in pharmaceutical distribution, known for quality products and exceptional service across India and international markets.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)" }}
              className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-blue-900/30 p-8 rounded-xl shadow-md hover:shadow-xl transition-all border border-blue-100 dark:border-blue-900/50 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-100 to-transparent rounded-bl-full"></div>
              <motion.div 
                className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-800 dark:to-blue-700 rounded-full flex items-center justify-center mb-6 text-blue-600 dark:text-blue-300 relative z-10"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </motion.div>
              <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-3">Business Type</h3>
              <p className="text-foreground/80 mb-4">Wholesaler, Trader & Merchant Exporter</p>
            </motion.div>
            
            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)" }}
              className="bg-gradient-to-br from-white to-indigo-50 dark:from-gray-800 dark:to-indigo-900/30 p-8 rounded-xl shadow-md hover:shadow-xl transition-all border border-indigo-100 dark:border-indigo-900/50 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-indigo-100 to-transparent rounded-bl-full"></div>
              <motion.div 
                className="w-14 h-14 bg-gradient-to-br from-indigo-100 to-indigo-200 dark:from-indigo-800 dark:to-indigo-700 rounded-full flex items-center justify-center mb-6 text-indigo-600 dark:text-indigo-300 relative z-10"
                whileHover={{ rotate: -5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </motion.div>
              <h3 className="text-xl font-bold text-indigo-700 dark:text-indigo-300 mb-3">Year of Establishment</h3>
              <p className="text-foreground/80 mb-4">2005</p>
            </motion.div>
            
            {/* Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)" }}
              className="bg-gradient-to-br from-white to-violet-50 dark:from-gray-800 dark:to-violet-900/30 p-8 rounded-xl shadow-md hover:shadow-xl transition-all border border-violet-100 dark:border-violet-900/50 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-violet-100 to-transparent rounded-bl-full"></div>
              <motion.div 
                className="w-14 h-14 bg-gradient-to-br from-violet-100 to-violet-200 dark:from-violet-800 dark:to-violet-700 rounded-full flex items-center justify-center mb-6 text-violet-600 dark:text-violet-300 relative z-10"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </motion.div>
              <h3 className="text-xl font-bold text-violet-700 dark:text-violet-300 mb-3">Experience</h3>
              <p className="text-foreground/80 mb-4">19+ Years in the Pharmaceutical Industry</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Global Presence Banner with enhanced visual effects and number counter */}
      <section ref={ref} className="py-12 bg-gradient-to-r from-blue-50 via-transparent to-indigo-50 dark:from-blue-900/10 dark:via-transparent dark:to-indigo-900/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')] opacity-5 mix-blend-overlay"></div>
        
        {/* Animated pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        <div className="container relative z-10">
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
          >
            {globalAchievements.map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
                }}
                className="bg-gradient-to-br from-white/90 to-blue-50/90 dark:from-gray-800/90 dark:to-blue-900/30 backdrop-blur-sm p-4 md:p-6 rounded-lg shadow-lg border border-blue-100 dark:border-blue-900/50 text-center transform transition-transform"
              >
                <motion.div 
                  className="flex justify-center mb-3"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <div className="p-2 rounded-full bg-gradient-to-br from-primary/10 to-primary/20">
                    {item.icon}
                  </div>
                </motion.div>
                <motion.div 
                  className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600"
                >
                  <CounterAnimation targetValue={item.value} />
                </motion.div>
                <p className="text-sm font-medium text-foreground/70">{item.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Our Impact in Numbers */}
      <Statistics />
      
      {/* Product Categories with enhanced cards */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50 dark:from-background dark:to-indigo-900/10 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-40 left-20 w-64 h-64 bg-gradient-to-br from-blue-200/40 to-blue-300/20 dark:from-blue-500/10 dark:to-blue-700/5 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-indigo-200/40 to-purple-300/20 dark:from-indigo-500/10 dark:to-purple-700/5 rounded-full filter blur-3xl"></div>
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
              className="inline-block px-3 py-1 text-sm font-medium bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/60 dark:to-indigo-900/60 text-blue-700 dark:text-blue-300 rounded-full mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <TrendingUp className="h-4 w-4 inline mr-1" />
              Extensive Range
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 mb-4">Our Product Categories</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-violet-600 mx-auto mt-2 mb-4 rounded-full"></div>
            <p className="text-foreground/80 max-w-3xl mx-auto text-lg">
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
                <Card className="bg-gradient-to-br from-white to-slate-50 dark:from-gray-800 dark:to-slate-900 border border-blue-100 dark:border-blue-900/50 shadow-lg h-full overflow-hidden relative">
                  <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
                  <CardContent className="p-4 md:p-6 h-full flex flex-col">
                    <motion.div 
                      className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 p-3 md:p-4 rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mx-auto mb-3 md:mb-4"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                      {category.icon}
                    </motion.div>
                    <h3 className="text-lg md:text-xl font-bold text-blue-700 dark:text-blue-300 text-center mb-2">{category.title}</h3>
                    <p className="text-foreground/70 text-center text-sm md:text-base">{category.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-foreground/70 italic mb-4">Looking for a specific medicine? Contact us for information on our complete product range.</p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button asChild className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-md hover:shadow-lg transition-all">
                <Link to="/contact" className="flex items-center gap-2">
                  Contact Us <ArrowRight className="h-4 w-4 animate-pulse" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us - Enhanced with better styling */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent"></div>
          
          {/* Animated floating particles */}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-primary/10 dark:bg-primary/20"
              style={{
                width: Math.random() * 50 + 10,
                height: Math.random() * 50 + 10,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [Math.random() * 10, Math.random() * -10, Math.random() * 10],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: "easeInOut",
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
              className="inline-block px-3 py-1 text-sm font-medium bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/60 dark:to-purple-900/60 text-indigo-700 dark:text-indigo-300 rounded-full mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <CheckCircle className="h-4 w-4 inline mr-1" />
              Our Commitment
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 mb-4">
              Why Choose Ambica Pharma?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-violet-600 mx-auto mt-2 mb-4 rounded-full"></div>
            <p className="text-foreground/80 text-lg">
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
                gradient: "from-yellow-500 to-amber-500"
              },
              {
                title: "Competitive Pricing",
                description: "We offer the best market rates through efficient supply chain management and strong manufacturer relationships.",
                icon: <CheckCircle className="h-6 w-6 md:h-8 md:w-8 text-green-500" />,
                delay: 0.2,
                gradient: "from-green-500 to-emerald-500"
              },
              {
                title: "Extensive Distribution",
                description: "Our robust network ensures timely delivery of pharmaceuticals across India and international markets.",
                icon: <Globe className="h-6 w-6 md:h-8 md:w-8 text-blue-500" />,
                delay: 0.3,
                gradient: "from-blue-500 to-sky-500" 
              },
              {
                title: "Expert Consultation",
                description: "Our pharmaceutical experts provide comprehensive guidance on product selection and regulatory compliance.",
                icon: <UserCheck className="h-6 w-6 md:h-8 md:w-8 text-purple-500" />,
                delay: 0.4,
                gradient: "from-purple-500 to-indigo-500"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: item.delay }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="flex flex-col items-center text-center p-4 md:p-6 rounded-lg bg-gradient-to-br from-white to-blue-50/90 dark:from-gray-800 dark:to-blue-900/30 backdrop-blur-sm shadow-md hover:shadow-xl transition-all border border-blue-100 dark:border-blue-900/50 group"
              >
                <motion.div 
                  className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${item.gradient} rounded-full flex items-center justify-center mb-3 md:mb-4 text-white transform transition-all duration-300`}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
