
import React from 'react';
import { cn } from '@/lib/utils';
import { WhatsApp } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  // Ambica Pharma contact information
  const phoneNumber = '+919004049076'; // Ambica Pharma's phone number
  const message = encodeURIComponent("Hello! I'm interested in learning more about Ambica Pharma's pharmaceutical products and services.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-6 right-6 z-50",
        "w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-full shadow-lg",
        "flex items-center justify-center",
        "transition-all duration-300 hover:scale-110",
        "animate-pulse hover:animate-none",
        "group"
      )}
      aria-label="Contact Ambica Pharma on WhatsApp"
    >
      <div className="relative">
        <WhatsApp className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
      </div>
      <span className="absolute right-16 bg-white text-primary font-medium px-3 py-1.5 rounded-full shadow-md 
        opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-sm">
        Chat with us
      </span>
    </a>
  );
};

export default WhatsAppButton;
