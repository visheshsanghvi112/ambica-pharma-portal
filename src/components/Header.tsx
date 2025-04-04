
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

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
    <header className="w-full fixed top-0 z-50">
      {/* Main navigation */}
      <nav 
        className={cn(
          "py-4 transition-all duration-300 border-b", 
          scrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-background/80 backdrop-blur-sm border-transparent",
          "dark:bg-background/95"
        )}
      >
        <div className="container flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/a5979ffb-180b-4225-a1e8-15425f28d262.png" 
              alt="Ambica Pharma Logo" 
              className="h-14 transition-all duration-300 hover:scale-105 dark:bg-white/10 dark:p-1 dark:rounded-md" 
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="font-medium text-primary hover:text-secondary transition-colors">
              Home
            </Link>
            <Link to="/about" className="font-medium text-primary hover:text-secondary transition-colors">
              About Us
            </Link>
            
            {/* Contact Us Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center font-medium text-primary hover:text-secondary transition-colors focus:outline-none">
                <span>Contact Us</span>
                <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background/95 backdrop-blur-md border border-border dark:border-primary/20 p-2 w-48">
                <DropdownMenuItem asChild>
                  <Link to="/contact" className="w-full cursor-pointer">Contact Page</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/blog" className="w-full cursor-pointer">Blog</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/careers" className="w-full cursor-pointer">Careers</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/csr" className="w-full cursor-pointer">CSR</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/faq" className="w-full cursor-pointer">FAQ</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/privacy" className="w-full cursor-pointer">Privacy Policy</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <ThemeToggle />
            <Button size="sm" className="bg-gradient-to-r from-secondary to-primary hover:opacity-90 animate-pulse">
              Emergency Order
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button 
              className="md:hidden flex items-center text-primary"
              onClick={toggleMenu}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        <div 
          className={cn(
            "fixed inset-y-0 right-0 bg-background/95 backdrop-blur-sm shadow-xl p-6 w-64 transform transition-transform z-50",
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
            <Link to="/contact" className="font-medium text-primary hover:text-secondary py-2 border-b" onClick={toggleMenu}>
              Contact Us
            </Link>
            
            <div className="pl-4 space-y-2">
              <Link to="/blog" className="font-medium text-primary/90 hover:text-secondary block py-1" onClick={toggleMenu}>
                Blog
              </Link>
              <Link to="/careers" className="font-medium text-primary/90 hover:text-secondary block py-1" onClick={toggleMenu}>
                Careers
              </Link>
              <Link to="/csr" className="font-medium text-primary/90 hover:text-secondary block py-1" onClick={toggleMenu}>
                CSR
              </Link>
              <Link to="/faq" className="font-medium text-primary/90 hover:text-secondary block py-1" onClick={toggleMenu}>
                FAQ
              </Link>
              <Link to="/privacy" className="font-medium text-primary/90 hover:text-secondary block py-1" onClick={toggleMenu}>
                Privacy Policy
              </Link>
            </div>
            
            <Button className="bg-gradient-to-r from-secondary to-primary hover:opacity-90 w-full mt-4 animate-pulse">
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
