
import React from "react";
import { Helmet } from "react-helmet-async";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What products does Ambica Pharma offer?",
      answer: "Ambica Pharma offers a wide range of pharmaceutical products including tablets, capsules, injectables, syrups, ointments, and more. Our product portfolio contains over 1000+ formulations tailored to address various therapeutic needs."
    },
    {
      question: "How can I place an order with Ambica Pharma?",
      answer: "You can place orders by contacting our sales team via phone at +91 9967006091 or by email at ambicapharma@gmail.com. For urgent requirements, you can use the 'Emergency Order' button on our website to expedite the process."
    },
    {
      question: "Does Ambica Pharma export products internationally?",
      answer: "Yes, Ambica Pharma has a strong global presence with exports to multiple countries across Africa, Asia, the Middle East, and parts of Europe. Please visit our Global Reach page for more detailed information on our international business."
    },
    {
      question: "What certifications and quality standards does Ambica Pharma comply with?",
      answer: "Ambica Pharma holds ISO-9001-2015 certification and follows WHO GMP guidelines. Our manufacturing facilities are regularly audited and fully compliant with international quality standards to ensure safety and efficacy of all our products."
    },
    {
      question: "Can I become a distributor for Ambica Pharma products?",
      answer: "Yes, we are always looking to expand our distribution network. Interested parties can reach out to our business development team through the Contact Us page or directly via email at ambicapharma@gmail.com with details about your organization and market."
    },
    {
      question: "How does Ambica Pharma ensure product quality?",
      answer: "We maintain strict quality control protocols at every stage of manufacturing, from raw material selection to finished product testing. Our dedicated QA/QC team conducts rigorous testing to ensure all products meet both regulatory requirements and our internal quality standards."
    },
    {
      question: "What is the minimum order quantity for Ambica Pharma products?",
      answer: "Minimum order quantities vary by product line and destination country. Please contact our sales team for specific information regarding your requirements and location."
    },
    {
      question: "Does Ambica Pharma offer custom manufacturing services?",
      answer: "Yes, we offer contract manufacturing services for pharmaceutical companies looking to outsource production. We can develop and manufacture products according to your specific formulations and requirements while maintaining strict confidentiality."
    },
    {
      question: "What is the lead time for order fulfillment?",
      answer: "Standard lead time for domestic orders is 1-2 weeks and for international orders 3-4 weeks, depending on regulatory clearances. However, this may vary based on product availability, order volume, and destination. Emergency orders are processed on priority."
    },
    {
      question: "How can I verify the authenticity of Ambica Pharma products?",
      answer: "All our products come with batch codes and authentication measures. You can verify product authenticity by entering the batch code on our website or by contacting our customer service team directly."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Frequently Asked Questions | Ambica Pharma</title>
        <meta name="description" content="Find answers to commonly asked questions about Ambica Pharma's products, services, ordering process, and more." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="py-16 bg-primary/10">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Find answers to commonly asked questions about our products, services, ordering process, and more.
          </p>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border rounded-lg px-6 shadow-sm bg-card"
              >
                <AccordionTrigger className="text-lg font-medium py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-12 p-6 bg-primary/5 rounded-lg border">
            <h2 className="text-xl font-display font-semibold text-primary mb-4">Still have questions?</h2>
            <p className="text-gray-600 mb-6">
              If you couldn't find the answer to your question, please feel free to contact our customer support team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-primary text-white font-medium hover:bg-primary-light transition-colors">
                Contact Support
              </a>
              <a href="tel:+919967006091" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-secondary text-white font-medium hover:bg-secondary-light transition-colors">
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
