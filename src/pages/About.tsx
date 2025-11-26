import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { CheckCircle, Award, Briefcase, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AboutSection from "../components/AboutSection";
import MissionVision from "../components/MissionVision";
import GlobalReach from "../components/GlobalReach";
import { useIsMobile } from "@/hooks/use-mobile";

const About = () => {
  const isMobile = useIsMobile();
  
  // JSON-LD structured data for better SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ambica Pharma",
    "url": "https://ambicapharma.net",
    "logo": "https://ambicapharma.net/lovable-uploads/a5979ffb-180b-4225-a1e8-15425f28d262.png",
    "foundingDate": "2005",
    "founders": [
      {
        "@type": "Person",
        "name": "Mr. Dilip Jain"
      }
    ],
    "description": "Established in 2005, Ambica Pharma is a reputable name engaged in distributing, trading, exporting, wholesaling, and retailing a wide range of Pharmaceutical Tablets, Capsules, Injectables, Drops, Ointments, and more.",
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
        <title>About Ambica Pharma | Leading Pharmaceutical Wholesaler, Trader & Exporter in India</title>
        <meta name="description" content="Learn about Ambica Pharma, a WHO-GMP certified pharmaceutical distributer established in 2005 with a global footprint in 25+ countries. Known for quality pharmaceuticals including tablets, capsules, injectables & more." />
        <meta name="keywords" content="pharmaceutical distributor india, ambica pharma history, who-gmp certified, pharmaceutical exporter, iso 9001 certified, pharmaceutical company mission vision, pharmaceutical tablets wholesaler, capsules trader, global pharmaceutical company" />
        <link rel="canonical" href="https://ambicapharma.net/about" />
        <meta property="og:title" content="About Ambica Pharma | Leading Pharmaceutical Wholesaler, Trader & Exporter in India" />
        <meta property="og:description" content="Learn about Ambica Pharma, a WHO-GMP certified pharmaceutical distributor established in 2005 with a global footprint in 25+ countries. Known for high-quality pharmaceuticals." />
        <meta property="og:url" content="https://ambicapharma.net/about" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ambicapharma.net/lovable-uploads/c0f96c3b-a789-4906-be6d-0cae782624b8.png" />
        <meta name="twitter:title" content="About Ambica Pharma | Leading Pharmaceutical Wholesaler, Trader & Exporter in India" />
        <meta name="twitter:description" content="Learn about Ambica Pharma, a WHO-GMP certified pharmaceutical distributor established in 2005 with a global footprint in 25+ countries." />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      {/* Hero Section - Enhanced with gradient and more modern design */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/5 dark:from-primary/20 dark:via-secondary/10 dark:to-primary/10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-40 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-gradient-to-r from-blue-300 to-blue-400 blur-3xl animate-blob"></div>
          <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-gradient-to-r from-purple-300 to-indigo-400 blur-3xl animate-blob" style={{ animationDelay: "2s" }}></div>
          <div className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-pink-300 to-purple-400 blur-3xl animate-blob" style={{ animationDelay: "4s" }}></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4"
            >
              <Award className="h-4 w-4 inline mr-2" />
              Established 2005
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary mb-6"
            >
              About Ambica Pharma
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
              className="text-lg md:text-xl text-foreground/80 mb-8"
            >
              Established in 2005, Ambica Pharma is a reputable name engaged in distributing, trading, exporting, wholesaling, and retailing a wide range of Pharmaceutical Tablets, Capsules, Injectables, Drops, Ointments, and more.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-3 md:gap-6"
            >
              <div className="flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                <Award className="h-5 w-5 text-primary" aria-hidden="true" />
                <span className="text-foreground/80 text-sm">ISO 9001:2015</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                <Award className="h-5 w-5 text-primary" aria-hidden="true" />
                <span className="text-foreground/80 text-sm">WHO-GMP Certified</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                <Globe className="h-5 w-5 text-primary" aria-hidden="true" />
                <span className="text-foreground/80 text-sm">Global Presence</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
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
              className="rounded-lg overflow-hidden order-2 md:order-1"
            >
              <img 
                src="/lovable-uploads/458c13fe-ce57-44e5-bd7e-ccc62d1a36e9.png" 
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
              className="space-y-6 order-1 md:order-2"
            >
              <h2 id="founder-section" className="text-3xl font-display font-bold text-primary">Founder & Chairman</h2>
              <div className="text-lg font-semibold text-secondary inline-block px-4 py-1 rounded-full bg-secondary/10">
                Mr. Dilip Jain
              </div>
              <p className="text-foreground/80">
                One such phenomenon is Mr. Dilip Jain (Founder & Chairman, Ambica Pharma), who has maneuvered the foundation and evolution of his firm Ambica Pharma as one of the exceptionally managed and exponentially growing pharmaceutical distribution companies having more than 18 years of distributing and marketing experience.
              </p>
              <p className="text-foreground/80">
                During his more than 22 years of experience in the Pharma industry as an industry leader, Mr. Dilip Jain garnered a wide range of expertise in sales, marketing, and creating distribution networks on a Pan India basis.
              </p>
              <p className="text-foreground/80">
                Implementing his acquired professional skills to lay a strategic grid that ultimately catapulted the evolution of Johnlee Pharmaceuticals as a leading brand of pharmaceutical and life sciences domain, Mr. Dilip Jain has led the firm to focus on high growth potential segments like generic medicines.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <div className="flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                  <Award className="h-5 w-5 text-primary" aria-hidden="true" />
                  <span className="text-foreground/80 text-sm">ISO-9001-2015 Certified</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                  <Briefcase className="h-5 w-5 text-primary" aria-hidden="true" />
                  <span className="text-foreground/80 text-sm">22+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                  <Globe className="h-5 w-5 text-primary" aria-hidden="true" />
                  <span className="text-foreground/80 text-sm">Global Presence</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <MissionVision />
      
      {/* Company History - Enhanced with a better layout */}
      <section className="py-16 bg-background relative overflow-hidden" aria-labelledby="history-section">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-secondary to-green-400 blur-3xl"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700"
            >
              <h2 id="history-section" className="text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-6">Our History</h2>
              <p className="text-foreground/80 mb-4">
                Incepted in the year 2005, Ambica Pharma started as a small pharmaceutical distribution enterprise with a vision to provide quality medicines at affordable prices. Over the years, we have grown to become a leading distributor and exporter of pharmaceutical products in India and globally.
              </p>
              <p className="text-foreground/80 mb-4">
                What began as a modest operation has evolved into a comprehensive pharmaceutical distribution company with state-of-the-art facilities, cutting-edge technologies, and a robust distribution network spanning across multiple countries.
              </p>
              <p className="text-foreground/80">
                Today, Ambica Pharma stands as a testament to perseverance, innovation, and an unwavering commitment to quality healthcare solutions.
              </p>
              
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "100px" }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="h-1 bg-gradient-to-r from-primary to-secondary rounded-full mt-6"
              ></motion.div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="order-first md:order-last"
            >
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Ambica Pharma Distribution Facility History" 
                  className="w-full h-auto rounded-lg transform transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                  width="800"
                  height="500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <p className="text-white font-medium text-lg md:text-xl">From small beginnings to a global presence</p>
                    <p className="text-white/80 text-sm md:text-base">Our journey of excellence since 2005</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Global Reach */}
      <GlobalReach />
      
      {/* Certifications Section - Redesigned for better mobile view */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10" aria-labelledby="certifications-section">
        <div className="container">
          <motion.h2
            id="certifications-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-10 text-center"
          >
            Our Certifications & Standards
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Award className="h-8 w-8 text-primary" />,
                title: "ISO 9001:2015",
                description: "Our ISO 9001:2015 certification ensures that we maintain consistent quality management systems across all our operations, from procurement to delivery."
              },
              {
                icon: <Award className="h-8 w-8 text-primary" />,
                title: "WHO-GMP Compliant",
                description: "Our facilities adhere to World Health Organization Good Manufacturing Practices (WHO-GMP), ensuring the products we distribute meet international quality standards."
              },
              {
                icon: <Award className="h-8 w-8 text-primary" />,
                title: "Quality Control",
                description: "Our advanced quality control processes ensure each batch of medication undergoes rigorous testing before distribution, guaranteeing safety and efficacy."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                whileHover={{ y: -5, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full mx-auto flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3 text-center">{item.title}</h3>
                <p className="text-foreground/80 text-center">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Commitment - Enhanced with better cards for mobile */}
      <section className="py-16 bg-background" aria-labelledby="commitment-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 id="commitment-section" className="text-3xl md:text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4">Our Commitment</h2>
            <p className="text-foreground/80 max-w-3xl mx-auto">
              We strive to uphold our reputation by offering top-quality products that meet global pharmaceutical standards.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                icon: <CheckCircle />,
                title: "Quality Assurance",
                description: "Every product undergoes stringent quality checks before final delivery, maintaining high standards of excellence."
              },
              {
                icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>,
                title: "Experienced Team",
                description: "Our experienced team ensures smooth operations across all departments, enabling efficient order fulfillment and customer satisfaction."
              },
              {
                icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>,
                title: "Skilled Leadership",
                description: "Guided by our skilled leadership, we have grown to become a trusted supplier in the industry."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all"
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">{item.title}</h3>
                <p className="text-foreground/80">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Distribution Expertise - Enhanced for better mobile view */}
      <section className="py-16 bg-background" aria-labelledby="distribution-section">
        <div className="container">
          <motion.h2 
            id="distribution-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-10 text-center"
          >
            Our Distribution Expertise
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-semibold text-primary">State-of-the-Art Facilities</h3>
              <p className="text-foreground/80">
                Our distribution units are equipped with cutting-edge technology and adhere to international quality standards. We specialize in distributing a diverse range of pharmaceutical formulations including:
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
              className="space-y-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-semibold text-primary">Quality Control Process</h3>
              <p className="text-foreground/80">
                Quality is at the core of everything we do at Ambica Pharma. Our comprehensive quality control process includes:
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-secondary mr-3 mt-1 flex-shrink-0" aria-hidden="true" />
                  <span className="text-foreground/80">Product testing and verification before distribution</span>
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
      
      {/* Enhanced CTA Section with gradient background */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="container text-center relative z-10">
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
            <Button asChild className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg shadow-lg">
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
