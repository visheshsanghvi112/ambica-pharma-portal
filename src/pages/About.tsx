
import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { CheckCircle, Award, Briefcase, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AboutSection from "../components/AboutSection";
import MissionVision from "../components/MissionVision";
import GlobalReach from "../components/GlobalReach";

const About = () => {
  // JSON-LD structured data for better SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ambica Pharma",
    "url": "https://ambicapharma.com",
    "logo": "https://ambicapharma.com/lovable-uploads/a5979ffb-180b-4225-a1e8-15425f28d262.png",
    "foundingDate": "2005",
    "founders": [
      {
        "@type": "Person",
        "name": "Mr. Dilip Jain"
      }
    ],
    "description": "Established in 2005, Ambica Pharma is a reputable name engaged in manufacturing, trading, exporting, wholesaling, and retailing a wide range of Pharmaceutical Tablets, Capsules, Injectables, Drops, Ointments, and more.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "addressCountry": "India"
    },
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "certification",
        "name": "ISO-9001-2015"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "certification",
        "name": "WHO-GMP"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Helmet>
        <title>About Ambica Pharma | Leading Pharmaceutical Manufacturer in India</title>
        <meta name="description" content="Learn about Ambica Pharma, a WHO-GMP certified pharmaceutical manufacturer established in 2005 with a global footprint in 25+ countries. Known for quality pharmaceuticals including tablets, capsules, injectables & more." />
        <meta name="keywords" content="pharmaceutical manufacturer india, ambica pharma history, who-gmp certified, pharmaceutical exporter, iso 9001 certified, pharmaceutical company mission vision, pharmaceutical tablets, capsules manufacturer, global pharmaceutical company" />
        <link rel="canonical" href="https://ambicapharma.com/about" />
        <meta property="og:title" content="About Ambica Pharma | Leading Pharmaceutical Manufacturer in India" />
        <meta property="og:description" content="Learn about Ambica Pharma, a WHO-GMP certified pharmaceutical manufacturer established in 2005 with a global footprint in 25+ countries. Known for high-quality pharmaceuticals." />
        <meta property="og:url" content="https://ambicapharma.com/about" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ambicapharma.com/lovable-uploads/c0f96c3b-a789-4906-be6d-0cae782624b8.png" />
        <meta name="twitter:title" content="About Ambica Pharma | Leading Pharmaceutical Manufacturer in India" />
        <meta name="twitter:description" content="Learn about Ambica Pharma, a WHO-GMP certified pharmaceutical manufacturer established in 2005 with a global footprint in 25+ countries." />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10">
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-display font-bold text-primary mb-6"
          >
            About Ambica Pharma
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-foreground/80 max-w-3xl"
          >
            Established in 2005, Ambica Pharma is a reputable name engaged in manufacturing, trading, exporting, wholesaling, and retailing a wide range of Pharmaceutical Tablets, Capsules, Injectables, Drops, Ointments, and more.
          </motion.p>
        </div>
      </section>
      
      {/* About Section (moved from index) */}
      <AboutSection />
      
      {/* Founder Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10" aria-labelledby="founder-section">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden"
            >
              <img 
                src="/lovable-uploads/c0f96c3b-a789-4906-be6d-0cae782624b8.png" 
                alt="Mr. Dilip Jain - Founder & Chairman of Ambica Pharma" 
                className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 id="founder-section" className="text-3xl font-display font-bold text-primary">Founder & Chairman</h2>
              <div className="text-lg font-semibold text-secondary inline-block px-4 py-1 rounded-full bg-secondary/10">
                Mr. Dilip Jain
              </div>
              <p className="text-foreground/80">
                One such phenomenon is Mr. Dilip Jain (Founder & Chairman, Ambica Pharma), who has maneuvered the foundation and evolution of his firm Ambica Pharma as one of the exceptionally managed and exponentially growing pharmaceutical companies having more than 18 years of manufacturing and marketing experience.
              </p>
              <p className="text-foreground/80">
                During his more than 22 years of experience in the Pharma industry as an industry leader, Mr. Dilip Jain garnered a wide range of expertise in sales, marketing, and creating distribution networks on a Pan India basis.
              </p>
              <p className="text-foreground/80">
                Implementing his acquired professional skills to lay a strategic grid that ultimately catapulted the evolution of Johnlee Pharmaceuticals as a leading brand of pharmaceutical and life sciences domain, Mr. Dilip Jain has led the firm to focus on high growth potential segments like generic medicines.
              </p>
              <div className="flex flex-wrap space-x-4 mt-6">
                <div className="flex items-center space-x-2 mb-2">
                  <Award className="h-5 w-5 text-primary" aria-hidden="true" />
                  <span className="text-foreground/80 text-sm">ISO-9001-2015 Certified</span>
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <Briefcase className="h-5 w-5 text-primary" aria-hidden="true" />
                  <span className="text-foreground/80 text-sm">22+ Years Industry Experience</span>
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <Globe className="h-5 w-5 text-primary" aria-hidden="true" />
                  <span className="text-foreground/80 text-sm">Global Presence in 25+ Countries</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision (moved from index) */}
      <MissionVision />
      
      {/* Company History */}
      <section className="py-16 bg-background" aria-labelledby="history-section">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 id="history-section" className="text-3xl font-display font-bold text-primary mb-6">Our History</h2>
              <p className="text-foreground/80 mb-4">
                Incepted in the year 2005, Ambica Pharma started as a small pharmaceutical enterprise with a vision to provide quality medicines at affordable prices. Over the years, we have grown to become a leading manufacturer and distributor of pharmaceutical products in India and globally.
              </p>
              <p className="text-foreground/80 mb-4">
                What began as a modest operation has evolved into a comprehensive pharmaceutical company with state-of-the-art manufacturing facilities, cutting-edge research and development, and a robust distribution network spanning across multiple countries.
              </p>
              <p className="text-foreground/80">
                Today, Ambica Pharma stands as a testament to perseverance, innovation, and an unwavering commitment to quality healthcare solutions.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="order-first md:order-last"
            >
              <img 
                src="https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Ambica Pharma Manufacturing Facility History" 
                className="rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
                loading="lazy"
                width="800"
                height="500"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Global Reach (moved from index) */}
      <GlobalReach />
      
      {/* Certifications Section - New section for SEO */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10" aria-labelledby="certifications-section">
        <div className="container">
          <motion.h2
            id="certifications-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-primary mb-10 text-center"
          >
            Our Certifications & Standards
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">ISO 9001:2015</h3>
              <p className="text-foreground/80">
                Our ISO 9001:2015 certification ensures that we maintain consistent quality management systems across all our operations, from product development to delivery.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">WHO-GMP Compliant</h3>
              <p className="text-foreground/80">
                Our manufacturing facilities adhere to World Health Organization Good Manufacturing Practices (WHO-GMP), ensuring our products meet international quality standards.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Quality Control</h3>
              <p className="text-foreground/80">
                Our advanced quality control laboratory ensures each batch of medication undergoes rigorous testing before reaching the market, guaranteeing safety and efficacy.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Commitment */}
      <section className="py-16 bg-background" aria-labelledby="commitment-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 id="commitment-section" className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">Our Commitment</h2>
            <p className="text-foreground/80 max-w-3xl mx-auto">
              We strive to uphold our reputation by offering top-quality products that meet global pharmaceutical standards.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Quality Assurance</h3>
              <p className="text-foreground/80">
                Every product undergoes stringent quality checks before final delivery, maintaining high standards of excellence.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Experienced Team</h3>
              <p className="text-foreground/80">
                Our experienced team ensures smooth operations across all departments, enabling efficient order fulfillment and customer satisfaction.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Skilled Leadership</h3>
              <p className="text-foreground/80">
                Guided by our skilled leadership, we have grown to become a trusted supplier in the industry.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10" aria-labelledby="values-section">
        <div className="container">
          <motion.h2
            id="values-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }} 
            className="text-3xl font-display font-bold text-primary mb-10 text-center"
          >
            Our Core Values
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Value 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 hover:shadow-md transition-shadow transform transition-transform duration-300 hover:scale-105"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Quality</h3>
              <p className="text-foreground/80">
                We maintain the highest standards in every aspect of our operations, from research to manufacturing.
              </p>
            </motion.div>
            
            {/* Value 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 hover:shadow-md transition-shadow transform transition-transform duration-300 hover:scale-105"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Innovation</h3>
              <p className="text-foreground/80">
                We continuously strive to develop new and improved pharmaceutical solutions to meet evolving healthcare needs.
              </p>
            </motion.div>
            
            {/* Value 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 hover:shadow-md transition-shadow transform transition-transform duration-300 hover:scale-105"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Integrity</h3>
              <p className="text-foreground/80">
                We operate with transparency, honesty, and ethical practices in all our business dealings.
              </p>
            </motion.div>
            
            {/* Value 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 hover:shadow-md transition-shadow transform transition-transform duration-300 hover:scale-105"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Patient-Centric</h3>
              <p className="text-foreground/80">
                Every decision we make is guided by our commitment to improve patient health and well-being.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Manufacturing Expertise - New section for SEO */}
      <section className="py-16 bg-background" aria-labelledby="manufacturing-section">
        <div className="container">
          <motion.h2 
            id="manufacturing-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-display font-bold text-primary mb-10 text-center"
          >
            Our Manufacturing Expertise
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-primary">State-of-the-Art Facilities</h3>
              <p className="text-foreground/80">
                Our manufacturing units are equipped with cutting-edge technology and adhere to international quality standards. We specialize in producing a diverse range of pharmaceutical formulations including:
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-secondary mr-3 mt-1 flex-shrink-0" aria-hidden="true" />
                  <span className="text-foreground/80">Tablets and Capsules in various dosage forms</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-secondary mr-3 mt-1 flex-shrink-0" aria-hidden="true" />
                  <span className="text-foreground/80">Injectables including lyophilized formulations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-secondary mr-3 mt-1 flex-shrink-0" aria-hidden="true" />
                  <span className="text-foreground/80">Liquid orals like syrups and drops</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-secondary mr-3 mt-1 flex-shrink-0" aria-hidden="true" />
                  <span className="text-foreground/80">Ointments, creams, and topical solutions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-secondary mr-3 mt-1 flex-shrink-0" aria-hidden="true" />
                  <span className="text-foreground/80">Specialty formulations for various therapeutic areas</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-primary">Quality Control Process</h3>
              <p className="text-foreground/80">
                Quality is at the core of everything we do at Ambica Pharma. Our comprehensive quality control process includes:
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-secondary mr-3 mt-1 flex-shrink-0" aria-hidden="true" />
                  <span className="text-foreground/80">Raw material testing and verification before production</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-secondary mr-3 mt-1 flex-shrink-0" aria-hidden="true" />
                  <span className="text-foreground/80">In-process quality checks at multiple stages</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-secondary mr-3 mt-1 flex-shrink-0" aria-hidden="true" />
                  <span className="text-foreground/80">Finished product analysis for potency and purity</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-secondary mr-3 mt-1 flex-shrink-0" aria-hidden="true" />
                  <span className="text-foreground/80">Stability studies to ensure product efficacy throughout shelf life</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-secondary mr-3 mt-1 flex-shrink-0" aria-hidden="true" />
                  <span className="text-foreground/80">Documentation and batch record maintenance for traceability</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold mb-6"
          >
            Ready to Partner With Us?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto mb-8 text-white/90"
          >
            Contact us today to discuss how we can meet your pharmaceutical needs with our high-quality products and excellent service.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button asChild className="bg-white text-primary hover:bg-white/90">
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
