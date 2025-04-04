
import React from "react";
import HeroSection from "../components/HeroSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, Heart, Tablet, Brain, Shield, Lungs, Pill, Baby, Eye, MessageCircle } from "lucide-react";
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
    icon: <Lungs className="h-12 w-12 text-cyan-500" />
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
              Ambica Pharma is a reputable name engaged in manufacturing, trading, exporting, 
              wholesaling, and retailing a wide range of Pharmaceutical products.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 p-8 rounded-xl shadow-sm hover:shadow-md transition-all"
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
              className="bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 p-8 rounded-xl shadow-sm hover:shadow-md transition-all"
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
              className="bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 p-8 rounded-xl shadow-sm hover:shadow-md transition-all"
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
      
      {/* Product Categories */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">Our Product Categories</h2>
            <p className="text-foreground/80 max-w-3xl mx-auto">
              Explore our extensive range of quality generic medicines across therapeutic categories.
            </p>
          </motion.div>
          
          <Carousel className="w-full">
            <CarouselContent>
              {productCategories.map((category, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="h-full"
                  >
                    <Card className="bg-white dark:bg-card border border-primary/10 shadow-lg hover:shadow-xl transition-all h-full overflow-hidden">
                      <div className="h-2 bg-gradient-to-r from-primary to-secondary"></div>
                      <CardContent className="p-6 h-full flex flex-col">
                        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                          {category.icon}
                        </div>
                        <h3 className="text-xl font-bold text-primary text-center mb-2">{category.title}</h3>
                        <p className="text-foreground/70 text-center mb-4">{category.description}</p>
                        <div className="mt-auto">
                          <Button variant="outline" className="w-full hover:bg-primary/10 hover:text-primary transition-colors" asChild>
                            <Link to="/products">Learn More</Link>
                          </Button>
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
          
          <div className="text-center mt-8">
            <p className="text-foreground/70 italic mb-4">Looking for a specific medicine? Contact us for information on our complete product range.</p>
            <Button asChild className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16 bg-background">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">Why Choose Us?</h2>
            <p className="text-foreground/80">
              We strive to uphold our reputation by offering top-quality products that meet global pharmaceutical standards.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Reason 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex items-start space-x-3 p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all"
            >
              <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-primary mb-2">Flexible Payment Modes</h3>
                <p className="text-sm text-foreground/70">Multiple payment options for your convenience.</p>
              </div>
            </motion.div>
            
            {/* Reason 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-start space-x-3 p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all"
            >
              <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-primary mb-2">Timely Delivery</h3>
                <p className="text-sm text-foreground/70">We ensure prompt and on-time delivery of orders.</p>
              </div>
            </motion.div>
            
            {/* Reason 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex items-start space-x-3 p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all"
            >
              <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-primary mb-2">Extensive Distribution Network</h3>
                <p className="text-sm text-foreground/70">Wide coverage for efficient product delivery.</p>
              </div>
            </motion.div>
            
            {/* Reason 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex items-start space-x-3 p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all"
            >
              <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-primary mb-2">Ethical Business Practices</h3>
                <p className="text-sm text-foreground/70">We maintain high ethical standards in all operations.</p>
              </div>
            </motion.div>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-medium">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Customer Testimonials Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 dark:from-primary/10 dark:via-secondary/10 dark:to-primary/10">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">What Our Customers Say</h2>
            <p className="text-foreground/80 max-w-3xl mx-auto">
              Discover how Ambica Pharma is making a difference in people's lives across India.
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
                    <Card className="bg-white dark:bg-card border border-primary/10 shadow-lg hover:shadow-xl transition-all h-full overflow-hidden">
                      <div className="h-2 bg-gradient-to-r from-secondary to-primary"></div>
                      <CardContent className="p-6 h-full flex flex-col">
                        <div className="mb-4 text-secondary">
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
      
      {/* Brands We Deal With */}
      <section className="py-16 bg-background">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">Brands We Deal In</h2>
            <p className="text-foreground/80 max-w-3xl mx-auto">
              We partner with leading pharmaceutical brands to provide you with quality medicines.
            </p>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all hover-lift"
            >
              <h3 className="text-xl font-semibold text-primary">Cipla</h3>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all hover-lift"
            >
              <h3 className="text-xl font-semibold text-primary">Hab Pharma</h3>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all hover-lift"
            >
              <h3 className="text-xl font-semibold text-primary">Universal</h3>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true }}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all hover-lift"
            >
              <h3 className="text-xl font-semibold text-primary">Abbott India Limited</h3>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              viewport={{ once: true }}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all hover-lift"
            >
              <h3 className="text-xl font-semibold text-primary">Johnlee Pharmaceuticals Pvt. Ltd.</h3>
            </motion.div>
          </div>
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
              Contact us today to discuss how we can meet your pharmaceutical needs with our high-quality products and excellent service.
            </p>
            <Button asChild className="bg-white text-primary hover:bg-white/90">
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
