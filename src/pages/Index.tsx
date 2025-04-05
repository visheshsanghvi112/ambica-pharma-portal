
import React from "react";
import HeroSection from "../components/HeroSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, Heart, Tablet, Brain, Shield, Pill, Baby, Eye, MessageCircle, ArrowRight } from "lucide-react";
import Statistics from "../components/Statistics";
import Testimonials from "../components/Testimonials";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

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

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* Quick Overview */}
      <section className="py-16 bg-background">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">Established Excellence Since 2005</h2>
            <p className="text-foreground/80 max-w-3xl mx-auto">
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
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-lg transition-all border border-primary/10"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Business Type</h3>
              <p className="text-foreground/80 mb-4">Wholesaler, Trader & Merchant Exporter</p>
            </motion.div>
            
            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-lg transition-all border border-primary/10"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Year of Establishment</h3>
              <p className="text-foreground/80 mb-4">2005</p>
            </motion.div>
            
            {/* Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-lg transition-all border border-primary/10"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Experience</h3>
              <p className="text-foreground/80 mb-4">19+ Years in the Pharmaceutical Industry</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Impact in Numbers */}
      <Statistics />
      
      {/* Product Categories with enhanced cards */}
      <section className="py-16 bg-background">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">Our Product Categories</h2>
            <p className="text-foreground/80 max-w-3xl mx-auto">
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
              >
                <Card className="bg-white dark:bg-card border border-primary/10 shadow-lg hover:shadow-xl transition-all h-full overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-primary to-secondary"></div>
                  <CardContent className="p-4 md:p-6 h-full flex flex-col">
                    <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-3 md:p-4 rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mx-auto mb-3 md:mb-4">
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
            <Button asChild className="bg-primary hover:bg-primary/90 text-white">
              <Link to="/contact" className="flex items-center gap-2">
                Contact Us <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">Why Choose Ambica Pharma?</h2>
            <p className="text-foreground/80">
              We uphold the highest standards of quality and service in all our pharmaceutical products and business operations.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-4 md:p-6 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all border border-primary/10"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3 md:mb-4">
                <CheckCircle className="h-6 w-6 md:h-8 md:w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-primary text-lg md:text-xl mb-2">Quality Assurance</h3>
              <p className="text-foreground/70 text-sm md:text-base">All products meet rigorous quality standards and are sourced from certified manufacturers.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-4 md:p-6 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all border border-primary/10"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3 md:mb-4">
                <CheckCircle className="h-6 w-6 md:h-8 md:w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-primary text-lg md:text-xl mb-2">Competitive Pricing</h3>
              <p className="text-foreground/70 text-sm md:text-base">We offer the best market rates through efficient supply chain management and strong manufacturer relationships.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-4 md:p-6 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all border border-primary/10"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3 md:mb-4">
                <CheckCircle className="h-6 w-6 md:h-8 md:w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-primary text-lg md:text-xl mb-2">Extensive Distribution</h3>
              <p className="text-foreground/70 text-sm md:text-base">Our robust network ensures timely delivery of pharmaceuticals across India and international markets.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-4 md:p-6 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all border border-primary/10"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3 md:mb-4">
                <CheckCircle className="h-6 w-6 md:h-8 md:w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-primary text-lg md:text-xl mb-2">Expert Consultation</h3>
              <p className="text-foreground/70 text-sm md:text-base">Our pharmaceutical experts provide comprehensive guidance on product selection and regulatory compliance.</p>
            </motion.div>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild className="bg-primary hover:bg-primary/90 text-white font-medium">
              <Link to="/about" className="flex items-center gap-2">
                Learn More About Us <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Customer Testimonials Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">Client Testimonials</h2>
            <p className="text-foreground/80 max-w-3xl mx-auto">
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
                    <Card className="bg-white dark:bg-card border border-primary/10 shadow-md hover:shadow-lg transition-all h-full overflow-hidden">
                      <div className="h-2 bg-gradient-to-r from-primary to-secondary"></div>
                      <CardContent className="p-6 h-full flex flex-col">
                        <div className="mb-4 text-primary">
                          <MessageCircle className="h-8 w-8 mx-auto" />
                        </div>
                        <p className="text-foreground/70 text-center italic mb-6">"{testimonial.quote}"</p>
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
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Ready to Partner With Us?</h2>
            <p className="max-w-2xl mx-auto mb-8 text-white/90">
              Contact Ambica Pharma today to discuss how we can meet your pharmaceutical needs with our high-quality products and excellent service.
            </p>
            <Button asChild className="bg-white text-primary hover:bg-white/90">
              <Link to="/contact" className="flex items-center gap-2">
                Contact Us Today <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
