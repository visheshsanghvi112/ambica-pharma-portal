
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, MessageSquareQuestion, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const faqCategories = [
    { id: "all", name: "All Questions" },
    { id: "products", name: "Products" },
    { id: "ordering", name: "Ordering" },
    { id: "business", name: "Business" },
    { id: "quality", name: "Quality" }
  ];

  const faqs = [
    {
      question: "What products does Ambica Pharma offer?",
      answer: "Ambica Pharma offers a wide range of pharmaceutical products including tablets, capsules, injectables, syrups, ointments, and more. Our product portfolio contains over 1000+ formulations tailored to address various therapeutic needs.",
      category: "products"
    },
    {
      question: "How can I place an order with Ambica Pharma?",
      answer: "You can place orders by contacting our sales team via phone at +91 9967006091 or by email at ambicapharma@gmail.com. For urgent requirements, you can use the 'Emergency Order' button on our website to expedite the process.",
      category: "ordering"
    },
    {
      question: "Does Ambica Pharma export products internationally?",
      answer: "Yes, Ambica Pharma has a strong global presence with exports to multiple countries across Africa, Asia, the Middle East, and parts of Europe. Please visit our Global Reach page for more detailed information on our international business.",
      category: "business"
    },
    {
      question: "What certifications and quality standards does Ambica Pharma comply with?",
      answer: "Ambica Pharma holds ISO-9001-2015 certification and follows WHO GMP guidelines. Our manufacturing facilities are regularly audited and fully compliant with international quality standards to ensure safety and efficacy of all our products.",
      category: "quality"
    },
    {
      question: "Can I become a distributor for Ambica Pharma products?",
      answer: "Yes, we are always looking to expand our distribution network. Interested parties can reach out to our business development team through the Contact Us page or directly via email at ambicapharma@gmail.com with details about your organization and market.",
      category: "business"
    },
    {
      question: "How does Ambica Pharma ensure product quality?",
      answer: "We maintain strict quality control protocols at every stage of manufacturing, from raw material selection to finished product testing. Our dedicated QA/QC team conducts rigorous testing to ensure all products meet both regulatory requirements and our internal quality standards.",
      category: "quality"
    },
    {
      question: "What is the minimum order quantity for Ambica Pharma products?",
      answer: "Minimum order quantities vary by product line and destination country. Please contact our sales team for specific information regarding your requirements and location.",
      category: "ordering"
    },
    {
      question: "Does Ambica Pharma offer custom manufacturing services?",
      answer: "Yes, we offer contract manufacturing services for pharmaceutical companies looking to outsource production. We can develop and manufacture products according to your specific formulations and requirements while maintaining strict confidentiality.",
      category: "products"
    },
    {
      question: "What is the lead time for order fulfillment?",
      answer: "Standard lead time for domestic orders is 1-2 weeks and for international orders 3-4 weeks, depending on regulatory clearances. However, this may vary based on product availability, order volume, and destination. Emergency orders are processed on priority.",
      category: "ordering"
    },
    {
      question: "How can I verify the authenticity of Ambica Pharma products?",
      answer: "All our products come with batch codes and authentication measures. You can verify product authenticity by entering the batch code on our website or by contacting our customer service team directly.",
      category: "products"
    }
  ];

  // Filter FAQs based on search term and category
  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "all" || faq.category === categoryFilter;
    
    return matchesSearch && matchesCategory;
  });

  // FAQ item animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Frequently Asked Questions"
        description="Find answers to commonly asked questions about Ambica Pharma's products, services, ordering process, and more."
        keywords="FAQ, questions, answers, pharmaceutical queries, medicine queries, drug inquiries, Ambica pharma FAQ"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        }}
      />
      
      {/* Hero Section with Gradient Background */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,rgba(255,255,255,0.7),transparent)]"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Frequently Asked Questions
              </h1>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Find answers to commonly asked questions about our products, services, ordering process, and more.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Search and Filter Bar */}
      <section className="py-8 bg-card border-t border-b shadow-sm sticky top-0 z-20 backdrop-blur-lg bg-opacity-90">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="relative w-full md:w-1/2">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
              </div>
              <input
                type="search"
                className="block w-full p-3 pl-10 text-sm border border-gray-300 rounded-lg bg-card focus:ring-primary focus:border-primary"
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap justify-center gap-2">
              {faqCategories.map(category => (
                <button
                  key={category.id}
                  className={`px-4 py-2 text-sm rounded-full transition-all ${
                    categoryFilter === category.id
                      ? "bg-primary text-white shadow-lg"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                  }`}
                  onClick={() => setCategoryFilter(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Categories */}
      <section className="py-12">
        <div className="container max-w-4xl">
          {filteredFAQs.length > 0 ? (
            <motion.div 
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filteredFAQs.map((faq, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="transition-all"
                >
                  <Card className="overflow-hidden hover:shadow-md transition-all border-l-4 border-l-primary/80">
                    <AccordionItem 
                      value={`item-${index}`}
                      className="border-none"
                    >
                      <AccordionTrigger className="text-lg font-medium py-4 px-6">
                        <div className="flex items-center gap-2 text-left">
                          <MessageSquareQuestion className="h-5 w-5 text-primary flex-shrink-0" />
                          <span>{faq.question}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 pt-2 pb-4 px-6">
                        <div className="pl-7 border-l border-dashed border-gray-300">
                          {faq.answer}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-8">
              <MessageSquareQuestion className="h-12 w-12 mx-auto text-gray-400" />
              <h3 className="mt-4 text-xl font-medium">No matching questions found</h3>
              <p className="mt-2 text-gray-500">Try adjusting your search or filter criteria</p>
              <button 
                className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                onClick={() => {
                  setSearchTerm("");
                  setCategoryFilter("all");
                }}
              >
                Reset filters
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* Common FAQ Categories */}
      <section className="py-12 bg-gray-50">
        <div className="container max-w-6xl">
          <h2 className="text-2xl font-bold text-center mb-8">Browse by Category</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Products", icon: <BookOpen className="h-6 w-6" />, id: "products", description: "Learn about our product range, availability, and custom solutions" },
              { title: "Ordering", icon: <MessageSquareQuestion className="h-6 w-6" />, id: "ordering", description: "Information about placing orders, lead times, and requirements" },
              { title: "Business", icon: <BookOpen className="h-6 w-6" />, id: "business", description: "Partnership opportunities, export capabilities, and distribution" },
              { title: "Quality", icon: <MessageSquareQuestion className="h-6 w-6" />, id: "quality", description: "Our quality control processes and certifications" }
            ].map((category) => (
              <Card key={category.title} className="hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer" onClick={() => setCategoryFilter(category.id)}>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
                  <p className="text-sm text-gray-500">{category.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Still have questions section with dynamic stats */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <Card className="overflow-hidden">
            <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <h2 className="text-2xl font-display font-semibold text-primary mb-4">Still have questions?</h2>
                  <p className="text-gray-700 mb-6">
                    If you couldn't find the answer to your question, please feel free to contact our customer support team for personalized assistance.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-primary text-white font-medium hover:bg-primary/90 transition-colors">
                      <MessageSquareQuestion className="h-4 w-4" />
                      Contact Support
                    </a>
                    <a href="tel:+919967006091" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-secondary text-white font-medium hover:bg-secondary/90 transition-colors">
                      Call Us
                    </a>
                  </div>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm w-full md:w-auto">
                  <h3 className="text-lg font-medium text-center mb-4">Customer Support Stats</h3>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-3">
                      <p className="text-3xl font-bold text-primary">24/7</p>
                      <p className="text-xs text-gray-500">Support Hours</p>
                    </div>
                    <div className="p-3">
                      <p className="text-3xl font-bold text-primary">15m</p>
                      <p className="text-xs text-gray-500">Avg. Response</p>
                    </div>
                    <div className="p-3">
                      <p className="text-3xl font-bold text-primary">98%</p>
                      <p className="text-xs text-gray-500">Satisfied Customers</p>
                    </div>
                    <div className="p-3">
                      <p className="text-3xl font-bold text-primary">12+</p>
                      <p className="text-xs text-gray-500">Languages</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
      
      {/* FAQ Assistance */}
      <section className="py-12 bg-gray-50">
        <div className="container max-w-4xl">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-semibold mb-4">Didn't find what you're looking for?</h3>
            
            <Collapsible className="w-full">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500 mb-4">
                  We continuously update our FAQ section based on customer inquiries. Submit your question and we'll get back to you.
                </p>
                <CollapsibleTrigger asChild>
                  <button className="rounded-full p-1 hover:bg-gray-100">
                    <ChevronDown className="h-5 w-5" />
                  </button>
                </CollapsibleTrigger>
              </div>
              
              <CollapsibleContent>
                <div className="pt-4 border-t">
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="question" className="block text-sm font-medium text-gray-700 mb-1">Your Question</label>
                      <textarea
                        id="question"
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                        placeholder="Type your question here..."
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                    >
                      Submit Question
                    </button>
                  </form>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
