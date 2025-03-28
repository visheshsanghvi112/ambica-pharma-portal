
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full">
      {/* Top info bar */}
      <div className="bg-primary text-white py-2 hidden md:block">
        <div className="container flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="h-4 w-4" />
              <span className="text-sm">+91 9967006091</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-4 w-4" />
              <span className="text-sm">ambicapharma@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">Chapsey Building, Mumbai, Maharashtra</span>
          </div>
        </div>
      </div>
      
      {/* Main navigation */}
      <nav 
        className={cn(
          "py-4 transition-all duration-300", 
          scrolled ? "bg-white shadow-md" : "bg-white"
        )}
      >
        <div className="container flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/lovable-uploads/b829635b-d0e3-46ff-a0a9-ea07e3056b39.png" alt="Ambica Pharma Logo" className="h-12" />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium text-primary hover:text-secondary transition-colors">
              Home
            </Link>
            <Link to="/about" className="font-medium text-primary hover:text-secondary transition-colors">
              About Us
            </Link>
            <Link to="/products" className="font-medium text-primary hover:text-secondary transition-colors">
              Products
            </Link>
            <Link to="/global-reach" className="font-medium text-primary hover:text-secondary transition-colors">
              Global Reach
            </Link>
            <Link to="/contact" className="font-medium text-primary hover:text-secondary transition-colors">
              Contact Us
            </Link>
            <Button size="sm" className="bg-secondary hover:bg-secondary-light">
              Emergency Order
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden flex items-center text-primary"
            onClick={toggleMenu}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        <div 
          className={cn(
            "fixed inset-y-0 right-0 bg-white shadow-xl p-6 w-64 transform transition-transform z-50",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex flex-col space-y-4 mt-10">
            <Link to="/" className="font-medium text-primary hover:text-secondary py-2 border-b" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/about" className="font-medium text-primary hover:text-secondary py-2 border-b" onClick={toggleMenu}>
              About Us
            </Link>
            <Link to="/products" className="font-medium text-primary hover:text-secondary py-2 border-b" onClick={toggleMenu}>
              Products
            </Link>
            <Link to="/global-reach" className="font-medium text-primary hover:text-secondary py-2 border-b" onClick={toggleMenu}>
              Global Reach
            </Link>
            <Link to="/contact" className="font-medium text-primary hover:text-secondary py-2 border-b" onClick={toggleMenu}>
              Contact Us
            </Link>
            <Button className="bg-secondary hover:bg-secondary-light w-full mt-4">
              Emergency Order
            </Button>
          </div>
          
          <div className="mt-8 space-y-3">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-primary" />
              <span className="text-sm">+91 9967006091</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-primary" />
              <span className="text-sm">ambicapharma@gmail.com</span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
