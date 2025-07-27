
import React from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CSR = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Corporate Social Responsibility | Ambica Pharma</title>
        <meta name="description" content="Ambica Pharma's Corporate Social Responsibility initiatives and commitment to social welfare." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20">
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-display font-bold text-primary dark:text-primary mb-6"
          >
            Corporate Social Responsibility
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-foreground/80 dark:text-foreground/80 max-w-3xl"
          >
            We are a research-based pharmaceutical company. Our mission is to improve the quality of human life by enabling people to do more, feel better and live longer.
          </motion.p>
        </div>
      </section>
      
      {/* CSR Philosophy */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-display font-bold text-primary dark:text-primary">Our CSR Philosophy</h2>
              <p className="text-foreground/80 dark:text-foreground/80">
                We believe that through our business we make a valuable contribution to society by developing and marketing medicines which improve people's lives. Our philosophy is to target support to selected programs that are innovative, sustainable and which produce tangible results.
              </p>
              <p className="text-foreground/80 dark:text-foreground/80">
                As a globally trusted corporate citizen, Ambica Pharma is determined to complement its accessible and efficacious products with progressive endeavors for societal and ecological welfare. Through various path-breaking initiatives revolving around enriching health, infrastructure, education and environment, Ambica Pharma is committed to not just change, but revolutionize society in its quest to build a better tomorrow.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden shadow-lg transform transition-all hover:scale-105"
            >
              <img 
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="CSR Vision"
                className="w-full h-80 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CSR Initiatives */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-display font-bold text-primary dark:text-primary mb-10 text-center"
          >
            Our CSR Initiatives
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Initiative 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all"
            >
              <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary dark:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary dark:text-primary mb-3">Healthcare Access</h3>
              <p className="text-foreground/80 dark:text-foreground/80 mb-4">
                We work to improve access to quality healthcare in underserved communities through free medical camps, medicine donations, and health education programs.
              </p>
              <ul className="list-disc pl-5 text-foreground/80 dark:text-foreground/80 mb-4">
                <li>Free medical check-up camps</li>
                <li>Medicine donation drives</li>
                <li>Health awareness programs</li>
              </ul>
            </motion.div>
            
            {/* Initiative 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all"
            >
              <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary dark:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary dark:text-primary mb-3">Environmental Sustainability</h3>
              <p className="text-foreground/80 dark:text-foreground/80 mb-4">
                We are committed to reducing our environmental footprint through sustainable manufacturing practices, waste reduction, and conservation efforts.
              </p>
              <ul className="list-disc pl-5 text-foreground/80 dark:text-foreground/80 mb-4">
                <li>Green manufacturing initiatives</li>
                <li>Tree plantation drives</li>
                <li>Waste management programs</li>
              </ul>
            </motion.div>
            
            {/* Initiative 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all"
            >
              <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary dark:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary dark:text-primary mb-3">Education & Skill Development</h3>
              <p className="text-foreground/80 dark:text-foreground/80 mb-4">
                We support education and skill development initiatives to help create a more skilled and empowered workforce for the future.
              </p>
              <ul className="list-disc pl-5 text-foreground/80 dark:text-foreground/80 mb-4">
                <li>Scholarships for deserving students</li>
                <li>School infrastructure development</li>
                <li>Vocational training programs</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Approach */}
      <section className="py-16 bg-background">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-primary dark:text-primary mb-4">Our Approach to CSR</h2>
            <p className="text-foreground/80 dark:text-foreground/80">
              At Ambica Pharma, corporate social responsibility is not just a policy but a core part of our business strategy. 
              We believe in creating shared value that benefits both society and our business.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary dark:bg-primary/20 dark:text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary dark:text-primary mb-2">Strategic Integration</h3>
                  <p className="text-foreground/80 dark:text-foreground/80">
                    We integrate CSR into our core business strategy, aligning social initiatives with our business objectives and expertise.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary dark:bg-primary/20 dark:text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary dark:text-primary mb-2">Stakeholder Engagement</h3>
                  <p className="text-foreground/80 dark:text-foreground/80">
                    We actively engage with stakeholders to understand their needs and expectations, and to ensure our CSR initiatives address real issues.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary dark:bg-primary/20 dark:text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary dark:text-primary mb-2">Impact Measurement</h3>
                  <p className="text-foreground/80 dark:text-foreground/80">
                    We measure the impact of our CSR initiatives to ensure they are making a real difference and to identify areas for improvement.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary dark:bg-primary/20 dark:text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary dark:text-primary mb-2">Partnerships & Collaboration</h3>
                  <p className="text-foreground/80 dark:text-foreground/80">
                    We collaborate with NGOs, governments, and other organizations to maximize the impact of our CSR initiatives.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary dark:bg-primary/20 dark:text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary dark:text-primary mb-2">Long-term Commitment</h3>
                  <p className="text-foreground/80 dark:text-foreground/80">
                    We make long-term commitments to our CSR initiatives, ensuring sustained positive impact on communities and the environment.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary dark:bg-primary/20 dark:text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary dark:text-primary mb-2">Transparency & Accountability</h3>
                  <p className="text-foreground/80 dark:text-foreground/80">
                    We maintain transparency in our CSR activities and hold ourselves accountable for the impact of our initiatives.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Impact Report */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-display font-bold text-primary dark:text-primary mb-10 text-center"
          >
            Our Impact
          </motion.h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {/* Stat 1 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg text-center hover:shadow-md transition-shadow transform transition-transform duration-300 hover:scale-105"
            >
              <h3 className="text-4xl font-bold text-primary dark:text-primary mb-2">10,000+</h3>
              <p className="text-foreground/80 dark:text-foreground/80">People benefited from medical camps</p>
            </motion.div>
            
            {/* Stat 2 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg text-center hover:shadow-md transition-shadow transform transition-transform duration-300 hover:scale-105"
            >
              <h3 className="text-4xl font-bold text-primary dark:text-primary mb-2">15,000+</h3>
              <p className="text-foreground/80 dark:text-foreground/80">Trees planted in reforestation efforts</p>
            </motion.div>
            
            {/* Stat 3 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg text-center hover:shadow-md transition-shadow transform transition-transform duration-300 hover:scale-105"
            >
              <h3 className="text-4xl font-bold text-primary dark:text-primary mb-2">500+</h3>
              <p className="text-foreground/80 dark:text-foreground/80">Students supported with scholarships</p>
            </motion.div>
            
            {/* Stat 4 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg text-center hover:shadow-md transition-shadow transform transition-transform duration-300 hover:scale-105"
            >
              <h3 className="text-4xl font-bold text-primary dark:text-primary mb-2">30%</h3>
              <p className="text-foreground/80 dark:text-foreground/80">Reduction in carbon footprint</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Get Involved */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-display font-bold mb-6"
          >
            Get Involved with Our CSR Initiatives
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto mb-8"
          >
            Join us in our mission to create positive change. Whether you're an individual, organization, or potential partner, there are many ways to contribute to our CSR efforts.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button className="bg-white text-primary hover:bg-gray-100 transition-colors">Become a Partner</Button>
            <Button className="bg-secondary text-white hover:bg-secondary/80 transition-colors">Volunteer with Us</Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 transition-colors">Contact CSR Team</Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CSR;
