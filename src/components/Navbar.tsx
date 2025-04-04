
import React from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
            
            {/* About Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-primary font-medium">
                Our Team <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link to="/team" className="w-full">Our Teams</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link to="/products" className="text-gray-700 hover:text-primary font-medium">Products</Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary font-medium">Contact</Link>
          </nav>
          
          <div className="md:hidden">
            <button className="text-gray-700" onClick={toggleMenu}>
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden py-4 px-4 bg-white border-t">
          <div className="flex flex-col space-y-3">
            <Link to="/" className="text-gray-700 hover:text-primary font-medium" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-primary font-medium" onClick={() => setIsOpen(false)}>About Us</Link>
            <Link to="/team" className="text-gray-700 hover:text-primary font-medium pl-2" onClick={() => setIsOpen(false)}>Our Teams</Link>
            <Link to="/products" className="text-gray-700 hover:text-primary font-medium" onClick={() => setIsOpen(false)}>Products</Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary font-medium" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
