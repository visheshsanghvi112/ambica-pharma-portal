
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Define navigation links with their active states
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
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
          
          <nav className="hidden md:flex items-center space-x-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link 
                    to="/" 
                    className={cn(
                      "text-gray-700 hover:text-primary font-medium transition-colors px-2 py-1",
                      isActive("/") && "text-primary font-semibold"
                    )}
                  >
                    Home
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link 
                    to="/about" 
                    className={cn(
                      "text-gray-700 hover:text-primary font-medium transition-colors px-2 py-1",
                      isActive("/about") && "text-primary font-semibold"
                    )}
                  >
                    About Us
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className={cn(
                      "text-gray-700 hover:text-primary font-medium transition-colors",
                      (isActive("/team")) && "text-primary font-semibold"
                    )}
                  >
                    Our Team
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-1 p-2 bg-white shadow-lg rounded-md">
                      <li className="row-span-1">
                        <NavigationMenuLink asChild>
                          <Link
                            to="/team"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium">Our Teams</div>
                            <p className="text-xs text-muted-foreground">
                              Meet the experts behind our success
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link 
                    to="/products" 
                    className={cn(
                      "text-gray-700 hover:text-primary font-medium transition-colors px-2 py-1",
                      isActive("/products") && "text-primary font-semibold"
                    )}
                  >
                    Products
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className={cn(
                      "text-gray-700 hover:text-primary font-medium transition-colors",
                      (isActive("/contact") || isActive("/achievements")) && "text-primary font-semibold"
                    )}
                  >
                    Contact
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[250px] gap-1 p-2 bg-white shadow-lg rounded-md">
                      <li className="row-span-1">
                        <NavigationMenuLink asChild>
                          <Link
                            to="/contact"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium">Contact Us</div>
                            <p className="text-xs text-muted-foreground">
                              Get in touch with our team
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li className="row-span-1">
                        <NavigationMenuLink asChild>
                          <Link
                            to="/achievements"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium">Achievements</div>
                            <p className="text-xs text-muted-foreground">
                              Our milestones and celebrations
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li className="row-span-1">
                        <NavigationMenuLink asChild>
                          <Link
                            to="/careers"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium">Careers</div>
                            <p className="text-xs text-muted-foreground">
                              Join our growing team
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
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
            <Link 
              to="/" 
              className={cn(
                "text-gray-700 hover:text-primary font-medium px-2 py-2 rounded-md",
                isActive("/") && "bg-primary/5 text-primary"
              )}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={cn(
                "text-gray-700 hover:text-primary font-medium px-2 py-2 rounded-md",
                isActive("/about") && "bg-primary/5 text-primary"
              )}
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/team" 
              className={cn(
                "text-gray-700 hover:text-primary font-medium px-2 py-2 rounded-md",
                isActive("/team") && "bg-primary/5 text-primary"
              )}
              onClick={() => setIsOpen(false)}
            >
              Our Teams
            </Link>
            <Link 
              to="/products" 
              className={cn(
                "text-gray-700 hover:text-primary font-medium px-2 py-2 rounded-md",
                isActive("/products") && "bg-primary/5 text-primary"
              )}
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Link 
              to="/contact" 
              className={cn(
                "text-gray-700 hover:text-primary font-medium px-2 py-2 rounded-md", 
                isActive("/contact") && "bg-primary/5 text-primary"
              )}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/achievements" 
              className={cn(
                "text-gray-700 hover:text-primary font-medium px-2 py-2 rounded-md",
                isActive("/achievements") && "bg-primary/5 text-primary"
              )}
              onClick={() => setIsOpen(false)}
            >
              Achievements
            </Link>
            <Link 
              to="/careers" 
              className={cn(
                "text-gray-700 hover:text-primary font-medium px-2 py-2 rounded-md",
                isActive("/careers") && "bg-primary/5 text-primary"
              )}
              onClick={() => setIsOpen(false)}
            >
              Careers
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
