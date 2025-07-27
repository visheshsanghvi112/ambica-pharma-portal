
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { motion } from "framer-motion";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll lock when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="w-full z-50 relative">
      <nav className={cn(
        "py-4 transition-all duration-300 border-b",
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-background/80 backdrop-blur-sm border-transparent"
      )}>
        <div className="container flex justify-between items-center">
          {/* Logo - Further increased size but maintaining header height */}
          <Link to="/" className="flex items-center">
            <img
              src="/lovable-uploads/a5979ffb-180b-4225-a1e8-15425f28d262.png"
              alt="Ambica Pharma Logo"
              className="h-20 md:h-24 scale-110 transition-all duration-300 hover:scale-115 dark:bg-white/10 dark:p-1 dark:rounded-md"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className={cn("font-medium", isActive("/") && "text-secondary")}>
              Home
            </Link>
            <Link to="/about" className={cn("font-medium", isActive("/about") && "text-secondary")}>
              About Us
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center font-medium">
                <span>Contact Us</span><ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background/95 p-2 w-48">
                {[
                  { path: "/contact", label: "Contact" },
                  { path: "/careers", label: "Careers" },
                  { path: "/csr", label: "CSR" },
                  { path: "/faq", label: "FAQ" },
                  { path: "/privacy", label: "Privacy Policy" }
                ].map(item => (
                  <DropdownMenuItem key={item.path} asChild>
                    <Link to={item.path}>{item.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/contact">
                <Button className="bg-gradient-to-r from-secondary to-primary text-white animate-pulse">
                  Emergency Order
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button onClick={toggleMenu} className="text-primary">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar & Overlay */}
      <div className={cn(
        "fixed inset-0 z-40 transition-all duration-300",
        isOpen ? "visible" : "invisible pointer-events-none"
      )}>
        {/* Backdrop */}
        <div
          className={cn(
            "absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300",
            isOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={closeMenu}
        />

        {/* Sidebar */}
        <div className={cn(
          "absolute right-0 top-0 h-full w-72 bg-background shadow-2xl p-6 z-50 transition-transform duration-300 ease-in-out flex flex-col",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}>
          {/* Close button inside sidebar */}
          <button className="mb-6 self-end text-muted-foreground" onClick={closeMenu}>
            <X className="h-5 w-5" />
          </button>

          {/* Menu Items */}
          <nav className="flex flex-col space-y-4">
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About Us" },
              { path: "/contact", label: "Contact Us" },
              { path: "/blog", label: "Blog" },
              { path: "/careers", label: "Careers" },
              { path: "/achievements", label: "Achievements" },
              { path: "/csr", label: "CSR" },
              { path: "/faq", label: "FAQ" },
              { path: "/privacy", label: "Privacy Policy" },
            ].map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                onClick={closeMenu}
                className={cn(
                  "font-medium text-primary border-b py-1",
                  isActive(path) && "text-secondary font-semibold"
                )}
              >
                {label}
              </Link>
            ))}

            <Link to="/contact" onClick={closeMenu}>
              <Button className="bg-gradient-to-r from-secondary to-primary mt-6 animate-pulse w-full">
                Emergency Order
              </Button>
            </Link>
          </nav>

          {/* Contact Info */}
          <div className="mt-auto pt-8 space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" /><span>+91 9967006091</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" /><span>info@ambicapharma.net</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
