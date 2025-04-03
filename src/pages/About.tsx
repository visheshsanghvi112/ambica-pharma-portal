
import React from "react";
import { Helmet } from "react-helmet-async";
import AboutSection from "../components/AboutSection";
import MissionVision from "../components/MissionVision";
import GlobalReach from "../components/GlobalReach";
import Testimonials from "../components/Testimonials";

const About = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Helmet>
        <title>About Us | Ambica Pharma</title>
        <meta name="description" content="Learn about Ambica Pharma, our history, mission, and values." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="py-16 bg-primary/5 dark:bg-primary/10">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>About Ambica Pharma</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl animate-fade-up" style={{ animationDelay: "0.3s" }}>
            Since 2005, we've been dedicated to providing high-quality pharmaceutical products with a commitment to innovation, ethical standards, and customer satisfaction.
          </p>
        </div>
      </section>
      
      {/* About Section (moved from index) */}
      <AboutSection />
      
      {/* Mission & Vision (moved from index) */}
      <MissionVision />
      
      {/* Company History */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <h2 className="text-3xl font-display font-bold text-primary mb-6">Our History</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Incepted in the year 2005, Ambica Pharma started as a small pharmaceutical enterprise with a vision to provide quality medicines at affordable prices. Over the years, we have grown to become a leading manufacturer and distributor of pharmaceutical products in India and globally.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                What began as a modest operation has evolved into a comprehensive pharmaceutical company with state-of-the-art manufacturing facilities, cutting-edge research and development, and a robust distribution network spanning across multiple countries.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Today, Ambica Pharma stands as a testament to perseverance, innovation, and an unwavering commitment to quality healthcare solutions.
              </p>
            </div>
            <div className="order-first md:order-last animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <img 
                src="https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Ambica Pharma History" 
                className="rounded-lg shadow-lg hover-scale"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Global Reach (moved from index) */}
      <GlobalReach />
      
      {/* Leadership */}
      <section className="py-16 bg-accent dark:bg-accent/50">
        <div className="container">
          <h2 className="text-3xl font-display font-bold text-primary mb-10 text-center animate-fade-up">Our Leadership</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Leader 1 */}
            <div className="bg-white dark:bg-card p-6 rounded-lg shadow-md dark-card hover-lift animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <img 
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                alt="Rajesh Sharma" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-primary/20"
              />
              <h3 className="text-xl font-semibold text-primary text-center">Rajesh Sharma</h3>
              <p className="text-gray-500 dark:text-gray-400 text-center mb-4">Chief Executive Officer</p>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                With over 25 years of experience in the pharmaceutical industry, Rajesh leads our company with a vision for innovation and global expansion.
              </p>
            </div>
            
            {/* Leader 2 */}
            <div className="bg-white dark:bg-card p-6 rounded-lg shadow-md dark-card hover-lift animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                alt="Priya Patel" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-primary/20"
              />
              <h3 className="text-xl font-semibold text-primary text-center">Priya Patel</h3>
              <p className="text-gray-500 dark:text-gray-400 text-center mb-4">Chief Operations Officer</p>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Priya oversees all operations, ensuring that our manufacturing and distribution meet the highest standards of efficiency and quality.
              </p>
            </div>
            
            {/* Leader 3 */}
            <div className="bg-white dark:bg-card p-6 rounded-lg shadow-md dark-card hover-lift animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <img 
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                alt="Dr. Ananya Das" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-primary/20"
              />
              <h3 className="text-xl font-semibold text-primary text-center">Dr. Ananya Das</h3>
              <p className="text-gray-500 dark:text-gray-400 text-center mb-4">Head of Research & Development</p>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Leading our R&D department, Dr. Das drives innovation and ensures all our products meet rigorous scientific standards.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials (moved from index) */}
      <Testimonials />
      
      {/* Values */}
      <section className="py-16 bg-background">
        <div className="container">
          <h2 className="text-3xl font-display font-bold text-primary mb-10 text-center animate-fade-up">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Value 1 */}
            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-card hover:shadow-md transition-shadow hover-lift animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Quality</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We maintain the highest standards in every aspect of our operations, from research to manufacturing.
              </p>
            </div>
            
            {/* Value 2 */}
            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-card hover:shadow-md transition-shadow hover-lift animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We continuously strive to develop new and improved pharmaceutical solutions to meet evolving healthcare needs.
              </p>
            </div>
            
            {/* Value 3 */}
            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-card hover:shadow-md transition-shadow hover-lift animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Integrity</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We operate with transparency, honesty, and ethical practices in all our business dealings.
              </p>
            </div>
            
            {/* Value 4 */}
            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-card hover:shadow-md transition-shadow hover-lift animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Patient-Centric</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Every decision we make is guided by our commitment to improve patient health and well-being.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
