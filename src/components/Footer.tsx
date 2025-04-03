
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Phone, Mail, MapPin, Send, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white dark:bg-primary/90">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4 animate-fade-in">
            <h3 className="text-xl font-display font-semibold">About Us</h3>
            <p className="text-sm text-gray-200 dark:text-gray-300">
              Discover excellence in pharmaceutical manufacturing and distribution at Ambica Pharma, 
              where quality meets commitment since 2005.
            </p>
            <div className="flex space-x-3">
              <a href="https://facebook.com" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors hover:scale-110" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://twitter.com" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors hover:scale-110" aria-label="Twitter">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="https://linkedin.com" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors hover:scale-110" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="https://instagram.com" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors hover:scale-110" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: "100ms" }}>
            <h3 className="text-xl font-display font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-200 dark:text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-200 dark:text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block">About Us</Link>
              </li>
              <li>
                <Link to="/global-reach" className="text-sm text-gray-200 dark:text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block">Global Reach</Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-gray-200 dark:text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block">Blog</Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm text-gray-200 dark:text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block">Careers</Link>
              </li>
              <li>
                <Link to="/csr" className="text-sm text-gray-200 dark:text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block">CSR</Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-gray-200 dark:text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block">FAQ</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-gray-200 dark:text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-200 dark:text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <h3 className="text-xl font-display font-semibold">Registered Office</h3>
            <address className="not-italic text-sm text-gray-200 dark:text-gray-300 space-y-2">
              <p className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <span>22 to 25, 2nd Floor, Chapsey Building, 72/78, Shamaldas Gandhi Marg, Kalbadevi, Mumbai, Maharashtra-400 002</span>
              </p>
              <p className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>+91 9967006091</span>
              </p>
              <p className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>022 48256677</span>
              </p>
              <p className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>ambicapharma@gmail.com</span>
              </p>
            </address>
          </div>
          
          {/* Newsletter */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: "300ms" }}>
            <h3 className="text-xl font-display font-semibold">Newsletter</h3>
            <p className="text-sm text-gray-200 dark:text-gray-300">
              Subscribe to our newsletter to get all our news in your inbox.
            </p>
            <form className="flex">
              <Input 
                type="email" 
                placeholder="Email Address" 
                className="rounded-r-none border-r-0 bg-white/10 border-white/20 text-white placeholder:text-gray-300 dark:bg-white/5" 
              />
              <Button type="submit" className="rounded-l-none bg-secondary hover:bg-secondary-light">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 pt-6 text-center text-sm text-gray-300">
          <p>© Copyright 2025 | All Rights Reserved by Ambica Pharma</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
