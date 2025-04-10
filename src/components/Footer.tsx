
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Phone, Mail, MapPin, Send, Facebook, Twitter, Linkedin, Instagram, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

const Footer = () => {
  return (
    <footer className="bg-primary text-white dark:bg-primary/95">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4 animate-fade-in">
            <h3 className="text-xl font-display font-semibold">About Us</h3>
            <p className="text-sm text-white/80 dark:text-white/80">
              Experience excellence in pharmaceutical distribution, trading, and export at Ambica Pharma, 
              where quality meets commitment since 2005.
            </p>
            <div className="flex items-center space-x-3">
              <a href="https://facebook.com" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors transform transition-transform hover:scale-110" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://twitter.com" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors transform transition-transform hover:scale-110" aria-label="Twitter">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="https://linkedin.com" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors transform transition-transform hover:scale-110" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="https://instagram.com" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors transform transition-transform hover:scale-110" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: "100ms" }}>
            <h3 className="text-xl font-display font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-white/80 dark:text-white/80 hover:text-white transition-colors hover:translate-x-1 inline-block">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-white/80 dark:text-white/80 hover:text-white transition-colors hover:translate-x-1 inline-block">About Us</Link>
              </li>
              <li>
                <Link to="/global-reach" className="text-sm text-white/80 dark:text-white/80 hover:text-white transition-colors hover:translate-x-1 inline-block">Global Reach</Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-white/80 dark:text-white/80 hover:text-white transition-colors hover:translate-x-1 inline-block">Blog</Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm text-white/80 dark:text-white/80 hover:text-white transition-colors hover:translate-x-1 inline-block">Careers</Link>
              </li>
              <li>
                <Link to="/csr" className="text-sm text-white/80 dark:text-white/80 hover:text-white transition-colors hover:translate-x-1 inline-block">CSR</Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-white/80 dark:text-white/80 hover:text-white transition-colors hover:translate-x-1 inline-block">FAQ</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-white/80 dark:text-white/80 hover:text-white transition-colors hover:translate-x-1 inline-block">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-white/80 dark:text-white/80 hover:text-white transition-colors hover:translate-x-1 inline-block">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <h3 className="text-xl font-display font-semibold">Registered Office</h3>
            <address className="not-italic text-sm text-white/80 dark:text-white/80 space-y-2">
              <p className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <span>22 to 25, 2nd Floor, Chapsey Building, 72/78, Shamaldas Gandhi Marg, Kalbadevi, Mumbai, Maharashtra-400 002</span>
              </p>
              <p className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>+91 90040 49076 | +91 99670 06091</span>
              </p>
              <p className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>022 48256677</span>
              </p>
              <p className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>ambicapharma@gmail.com</span>
              </p>
              <p className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>info@ambicapharma.net</span>
              </p>
            </address>
            
            <h3 className="text-xl font-display font-semibold pt-2">Warehouse</h3>
            <address className="not-italic text-sm text-white/80 dark:text-white/80 space-y-2">
              <p className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <span>Gala No. 9 to 12, First Floor, Building D8, Shree Arihant Compound, Reti Bander Road, Kalher, Bhiwandi (Thane) - 421302</span>
              </p>
              <p className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>+91 70455 94431</span>
              </p>
              <p className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>warehouse@ambicapharma.net</span>
              </p>
              <p className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>Timings: 9:00 AM - 7:30 PM</span>
              </p>
            </address>
          </div>
          
          {/* Newsletter */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: "300ms" }}>
            <h3 className="text-xl font-display font-semibold">Newsletter</h3>
            <p className="text-sm text-white/80 dark:text-white/80">
              Subscribe to our newsletter to get all our news in your inbox.
            </p>
            <form className="flex">
              <Input 
                type="email" 
                placeholder="Email Address" 
                className="rounded-r-none border-r-0 bg-white/10 border-white/20 text-white placeholder:text-gray-300 dark:bg-white/5" 
              />
              <Button type="submit" className="rounded-l-none bg-secondary hover:bg-secondary/80">
                <Send className="h-4 w-4" />
              </Button>
            </form>
            
            <div className="mt-6 p-4 bg-white/10 rounded-lg">
              <h4 className="font-semibold mb-2">ISO-9001:2008 certified • GMP Certified</h4>
              <p className="text-xs text-white/80">
                The Company has been accredited with ISO-9001:2008 and distributes pharmaceutical formulations as per the guidelines of WHO.
              </p>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-white/20 mt-8 pt-6 text-center text-sm text-white/80 dark:text-white/80"
        >
          <p>© Copyright 2025 | All Rights Reserved by Ambica Pharma</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
