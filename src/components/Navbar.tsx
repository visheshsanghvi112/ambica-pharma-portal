
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/b829635b-d0e3-46ff-a0a9-ea07e3056b39.png" 
              alt="Ambica Pharma Logo" 
              className="h-10" 
            />
            <span className="font-display font-bold text-primary text-xl">Ambica Pharma</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary font-medium">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-primary font-medium">About Us</Link>
            <Link to="/products" className="text-gray-700 hover:text-primary font-medium">Products</Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary font-medium">Contact</Link>
          </nav>
          
          <div className="md:hidden">
            {/* Mobile menu button placeholder */}
            <button className="text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
