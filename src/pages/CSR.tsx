
import React from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";

const CSR = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Corporate Social Responsibility | Ambica Pharma</title>
        <meta name="description" content="Ambica Pharma's Corporate Social Responsibility initiatives and commitment to social welfare." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary dark:text-primary-light mb-6 animate-fade-in">Corporate Social Responsibility</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl animate-fade-in" style={{ animationDelay: "100ms" }}>
            At Ambica Pharma, we are committed to making a positive impact on society and the environment through our CSR initiatives.
          </p>
        </div>
      </section>
      
      {/* CSR Vision */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-3xl font-display font-bold text-primary dark:text-primary-light">Our CSR Vision</h2>
              <p className="text-gray-600 dark:text-gray-400">
                At Ambica Pharma, we believe in the power of sustainable development and responsible business practices. Our CSR vision is to create a healthier world by supporting initiatives that improve access to healthcare, protect the environment, and empower communities.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                We are committed to integrating social, environmental, ethical, and human rights concerns into our business operations and core strategy in close collaboration with our stakeholders.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <img 
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="CSR Vision"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* CSR Initiatives */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/20">
        <div className="container">
          <h2 className="text-3xl font-display font-bold text-primary dark:text-primary-light mb-10 text-center animate-fade-in">Our CSR Initiatives</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Initiative 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: "100ms" }}>
              <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary dark:text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary dark:text-primary-light mb-3">Healthcare Access</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                We work to improve access to quality healthcare in underserved communities through free medical camps, medicine donations, and health education programs.
              </p>
              <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 mb-4">
                <li>Free medical check-up camps</li>
                <li>Medicine donation drives</li>
                <li>Health awareness programs</li>
              </ul>
            </div>
            
            {/* Initiative 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: "200ms" }}>
              <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary dark:text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary dark:text-primary-light mb-3">Environmental Sustainability</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                We are committed to reducing our environmental footprint through sustainable manufacturing practices, waste reduction, and conservation efforts.
              </p>
              <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 mb-4">
                <li>Green manufacturing initiatives</li>
                <li>Tree plantation drives</li>
                <li>Waste management programs</li>
              </ul>
            </div>
            
            {/* Initiative 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: "300ms" }}>
              <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary dark:text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary dark:text-primary-light mb-3">Education & Skill Development</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                We support education and skill development initiatives to help create a more skilled and empowered workforce for the future.
              </p>
              <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 mb-4">
                <li>Scholarships for deserving students</li>
                <li>School infrastructure development</li>
                <li>Vocational training programs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Impact Report */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-display font-bold text-primary dark:text-primary-light mb-10 text-center animate-fade-in">Our Impact</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {/* Stat 1 */}
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 p-6 rounded-lg text-center hover:shadow-md transition-shadow animate-fade-in" style={{ animationDelay: "100ms" }}>
              <h3 className="text-4xl font-bold text-primary dark:text-primary-light mb-2">10,000+</h3>
              <p className="text-gray-600 dark:text-gray-400">People benefited from medical camps</p>
            </div>
            
            {/* Stat 2 */}
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 p-6 rounded-lg text-center hover:shadow-md transition-shadow animate-fade-in" style={{ animationDelay: "200ms" }}>
              <h3 className="text-4xl font-bold text-primary dark:text-primary-light mb-2">15,000+</h3>
              <p className="text-gray-600 dark:text-gray-400">Trees planted in reforestation efforts</p>
            </div>
            
            {/* Stat 3 */}
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 p-6 rounded-lg text-center hover:shadow-md transition-shadow animate-fade-in" style={{ animationDelay: "300ms" }}>
              <h3 className="text-4xl font-bold text-primary dark:text-primary-light mb-2">500+</h3>
              <p className="text-gray-600 dark:text-gray-400">Students supported with scholarships</p>
            </div>
            
            {/* Stat 4 */}
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 p-6 rounded-lg text-center hover:shadow-md transition-shadow animate-fade-in" style={{ animationDelay: "400ms" }}>
              <h3 className="text-4xl font-bold text-primary dark:text-primary-light mb-2">30%</h3>
              <p className="text-gray-600 dark:text-gray-400">Reduction in carbon footprint</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Get Involved */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-light text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-display font-bold mb-6 animate-fade-in">Get Involved with Our CSR Initiatives</h2>
          <p className="max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "100ms" }}>
            Join us in our mission to create positive change. Whether you're an individual, organization, or potential partner, there are many ways to contribute to our CSR efforts.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <Button className="bg-white text-primary hover:bg-gray-100 transition-colors">Become a Partner</Button>
            <Button className="bg-secondary text-white hover:bg-secondary-light transition-colors">Volunteer with Us</Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 transition-colors">Contact CSR Team</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CSR;
