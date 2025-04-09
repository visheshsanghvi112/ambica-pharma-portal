
import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { CheckCircle, Heart, Tablet, Brain, Shield, Pill, Baby, Eye, MessageCircle, ArrowRight, Award, Star, TrendingUp, Globe, UserCheck } from "lucide-react";
import Statistics from "../components/Statistics";
import Testimonials from "../components/Testimonials";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Helmet } from "react-helmet-async";

// Product categories data
const productCategories = [
  {
    title: "Cardiovascular",
    description: "Generic medicines for heart health and blood pressure management",
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
    quote: "Ambica Pharma's generic medicines helped me manage my diabetes at half the cost. Their quality and service are exceptional.",
    author: "Raj Sharma",
    position: "Patient, Delhi"
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
      {/* SEO Enhancements */}
      <Helmet>
        <title>Ambica Pharma - Leading Pharmaceutical Manufacturer & Exporter</title>
        <meta name="description" content="Ambica Pharma manufactures high-quality pharmaceutical products, serving 25+ countries with 1000+ medicines across therapeutic categories since 2005." />
        <meta name="keywords" content="pharmaceutical manufacturer, Ambica Pharma, medicine manufacturer, pharmaceutical exporter, healthcare, tablets, capsules, injectables, WHO-GMP, ISO 9001" />
        <link rel="canonical" href="https://ambicapharma.com" />
        {/* Structured Data for Organization */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Ambica Pharma",
              "url": "https://ambicapharma.com",
              "logo": "https://ambicapharma.com/lovable-uploads/a5979ffb-180b-4225-a1e8-15425f28d262.png",
              "foundingDate": "2005",
              "description": "Leading pharmaceutical manufacturer with WHO-GMP certification, serving global markets since 2005.",
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
            }
          `}
        </script>
      </Helmet>
      <HeroSection />
      
      {/* Quick Overview */}
      <section className="py-16 bg-background relative overflow-hidden">
        {/* Background gradient decorations */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-primary animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-secondary animate-pulse" style={{ animationDelay: "1s" }}></div>
        </div>
        
        <div className="container relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="px-3 py-1 text-sm font-medium bg-secondary/10 text-secondary rounded-full mb-4 inline-block">
              Trusted Pharmaceutical Partner
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-secondary">
              Established Excellence Since 2005
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-2 mb-4 rounded-full"></div>
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
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all border border-primary/10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full"></div>
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary relative z-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-light mb-3">Business Type</h3>
              <p className="text-foreground/80 mb-4">Wholesaler, Trader & Merchant Exporter</p>
            </motion.div>
            
            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all border border-primary/10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-secondary/10 to-transparent rounded-bl-full"></div>
              <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mb-6 text-secondary relative z-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary to-secondary-light mb-3">Year of Establishment</h3>
              <p className="text-foreground/80 mb-4">2005</p>
            </motion.div>
            
            {/* Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all border border-primary/10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full"></div>
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary relative z-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-3">Experience</h3>
              <p className="text-foreground/80 mb-4">19+ Years in the Pharmaceutical Industry</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Global Presence Banner */}
      <section ref={ref} className="py-12 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')] opacity-5 mix-blend-overlay"></div>
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
                className="bg-white/90 backdrop-blur-sm p-4 md:p-6 rounded-lg shadow-lg border border-primary/10 text-center transform transition-transform hover:scale-105"
              >
                <div className="flex justify-center mb-3">
                  <div className="p-2 rounded-full bg-primary/10">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">{item.value}</h3>
                <p className="text-sm font-medium text-foreground/70">{item.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Our Impact in Numbers */}
      <Statistics />
      
      {/* Product Categories with enhanced cards */}
      <section className="py-16 bg-background relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-40 left-20 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary/5 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="container relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
              Extensive Range
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-secondary mb-4">Our Product Categories</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-2 mb-4 rounded-full"></div>
            <p className="text-foreground/80 max-w-3xl mx-auto text-lg">
              Explore our extensive range of high-quality pharmaceutical products across therapeutic categories.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
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
                <Card className="bg-white border border-primary/10 shadow-lg h-full overflow-hidden relative">
                  <div className="h-2 bg-gradient-to-r from-primary to-secondary"></div>
                  <CardContent className="p-4 md:p-6 h-full flex flex-col">
                    <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-3 md:p-4 rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mx-auto mb-3 md:mb-4 transform transition-transform hover:scale-110">
                      {category.icon}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-primary text-center mb-2">{category.title}</h3>
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
              <Button asChild className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-md hover:shadow-lg transition-all">
                <Link to="/contact" className="flex items-center gap-2">
                  Contact Us <ArrowRight className="h-4 w-4 animate-pulse" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us - Enhanced with more attractive UI */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent"></div>
        </div>
        
        <div className="container relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <span className="inline-block px-3 py-1 text-sm font-medium bg-secondary/10 text-secondary rounded-full mb-4">
              Our Commitment
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-secondary mb-4">
              Why Choose Ambica Pharma?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-2 mb-4 rounded-full"></div>
            <p className="text-foreground/80 text-lg">
              We uphold the highest standards of quality and service in all our pharmaceutical products and business operations.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
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
                className="flex flex-col items-center text-center p-4 md:p-6 rounded-lg bg-white/90 backdrop-blur-sm shadow-md hover:shadow-xl transition-all border border-primary/10 group"
              >
                <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${item.gradient} rounded-full flex items-center justify-center mb-3 md:mb-4 text-white transform transition-all duration-300 group-hover:scale-110`}>
                  {item.icon}
                </div>
                <h3 className="font-semibold text-primary text-lg md:text-xl mb-2">{item.title}</h3>
                <p className="text-foreground/70 text-sm md:text-base">{item.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button asChild className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-medium shadow-md hover:shadow-lg">
                <Link to="/about" className="flex items-center gap-2">
                  Learn More About Us <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Customer Testimonials Section - Enhanced with better styling */}
      <section className="py-16 bg-background relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl opacity-70 animate-pulse" style={{ animationDuration: "15s" }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full filter blur-3xl opacity-70 animate-pulse" style={{ animationDuration: "20s", animationDelay: "2s" }}></div>
        </div>
        
        <div className="container relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-3 py-1 text-sm font-medium bg-secondary/10 text-secondary rounded-full mb-4">
              Success Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-secondary mb-4">Client Testimonials</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-2 mb-4 rounded-full"></div>
            <p className="text-foreground/80 max-w-3xl mx-auto text-lg">
              Hear from healthcare professionals and patients who trust Ambica Pharma for their pharmaceutical needs.
            </p>
          </motion.div>
          
          <Carousel className="w-full">
            <CarouselContent>
              {customerTestimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="h-full"
                  >
                    <Card className="bg-white border border-primary/10 shadow-md hover:shadow-lg transition-all h-full overflow-hidden group">
                      <div className="h-2 bg-gradient-to-r from-primary to-secondary"></div>
                      <CardContent className="p-6 h-full flex flex-col">
                        <div className="mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
                          <MessageCircle className="h-8 w-8 mx-auto text-secondary" />
                        </div>
                        <p className="text-foreground/70 text-center italic mb-6 relative">
                          <span className="text-primary text-3xl absolute -top-2 -left-1 opacity-20">"</span>
                          {testimonial.quote}
                          <span className="text-primary text-3xl absolute -bottom-4 -right-1 opacity-20">"</span>
                        </p>
                        <div className="mt-auto text-center">
                          <h4 className="font-semibold text-primary">{testimonial.author}</h4>
                          <p className="text-foreground/60 text-sm">{testimonial.position}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-1 lg:left-4" />
            <CarouselNext className="right-1 lg:right-4" />
          </Carousel>
        </div>
      </section>
      
      {/* CTA Section has been removed as requested */}
    </div>
  );
};

export default Index;
