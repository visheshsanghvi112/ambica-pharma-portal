
import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, MessageCircle, Building, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

declare global {
  interface Window {
    initMap: () => void;
    google: {
      maps: {
        Map: new (container: HTMLElement, options: any) => any;
        Marker: new (options: any) => any;
        InfoWindow: new (options: any) => any;
        NavigationControl: new (options: any) => any;
        Animation: {
          DROP: number;
          BOUNCE: number;
        };
      };
    };
  }
}

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [mapLoaded, setMapLoaded] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const mapScriptLoadedRef = useRef<boolean>(false);

  // Load Google Maps
  useEffect(() => {
    // Skip if map already loaded or no map container
    if (mapLoaded || !mapRef.current) return;
    
    // Define the map initialization function
    window.initMap = () => {
      if (!mapRef.current) return;
      
      try {
        const mumbaiLocation = { lat: 18.9451, lng: 72.8234 };
        const mapInstance = new window.google.maps.Map(mapRef.current, {
          center: mumbaiLocation,
          zoom: 15,
          styles: [
            {
              "featureType": "all",
              "elementType": "labels.text.fill",
              "stylers": [{"saturation": 36}, {"color": "#333333"}, {"lightness": 40}]
            },
            {
              "featureType": "all",
              "elementType": "labels.text.stroke",
              "stylers": [{"visibility": "on"}, {"color": "#ffffff"}, {"lightness": 16}]
            },
            {
              "featureType": "all",
              "elementType": "labels.icon",
              "stylers": [{"visibility": "off"}]
            },
            {
              "featureType": "administrative",
              "elementType": "geometry.fill",
              "stylers": [{"color": "#fefefe"}, {"lightness": 20}]
            },
            {
              "featureType": "administrative",
              "elementType": "geometry.stroke",
              "stylers": [{"color": "#fefefe"}, {"lightness": 17}, {"weight": 1.2}]
            }
          ]
        });
        
        mapInstanceRef.current = mapInstance;
        
        const marker = new window.google.maps.Marker({
          position: mumbaiLocation,
          map: mapInstance,
          title: "Ambica Pharma Office",
          animation: window.google.maps.Animation.DROP
        });
        
        const infowindow = new window.google.maps.InfoWindow({
          content: `
            <div style="padding: 10px; max-width: 200px;">
              <h3 style="margin: 0; font-size: 16px; color: #2B4D82; font-weight: bold;">Ambica Pharma</h3>
              <p style="margin: 5px 0 0; font-size: 12px;">
                22 to 25, 2nd Floor, Chapsey Building, Kalbadevi, Mumbai - 400002
              </p>
            </div>
          `
        });
        
        marker.addListener("click", () => {
          infowindow.open(mapInstance, marker);
        });
        
        setMapLoaded(true);
        mapScriptLoadedRef.current = true;
      } catch (error) {
        console.error("Error initializing map:", error);
      }
    };
    
    // Only load script if not already loaded
    if (!document.querySelector('script[src*="maps.googleapis.com/maps/api/js"]') && !mapScriptLoadedRef.current) {
      try {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=&callback=initMap`;
        script.async = true;
        script.defer = true;
        script.id = 'google-maps-script';
        
        // Add error handling to the script
        script.onerror = () => {
          console.error("Error loading Google Maps script");
          setMapLoaded(false);
        };
        
        document.head.appendChild(script);
      } catch (error) {
        console.error("Error creating Google Maps script:", error);
      }
    } else if (window.google && window.google.maps) {
      // If script is already loaded, just call initMap directly
      window.initMap();
    }
    
    // Cleanup function
    return () => {
      // Clean up the global initMap function
      if (window.initMap) {
        window.initMap = () => {};
      }
      
      // Clean up map instance
      if (mapInstanceRef.current) {
        mapInstanceRef.current = null;
      }
    };
  }, [mapLoaded]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll get back to you soon!",
      duration: 5000,
    });
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <Helmet>
        <title>Contact Us | Ambica Pharma</title>
        <meta name="description" content="Get in touch with Ambica Pharma for inquiries, partnerships, or support." />
      </Helmet>
      
      <motion.section 
        className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 rounded-b-3xl mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-display font-bold text-primary mb-6 relative inline-block"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="relative z-10">Get In Touch</span>
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-secondary/20 rounded-full -z-0"></span>
            </motion.h1>
            <motion.p 
              className="text-lg text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Have questions about our products or services? Our team is here to help you.
            </motion.p>
          </div>
        </div>
      </motion.section>
      
      <motion.section 
        className="container mb-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-12 gap-10">
          <motion.div 
            className="lg:col-span-4 space-y-8"
            variants={itemVariants}
          >
            <motion.div variants={itemVariants}>
              <Card className="overflow-hidden border-primary/5 dark:border-primary/10 shadow-lg dark:shadow-primary/5">
                <CardContent className="p-0">
                  <div className="h-40 bg-gradient-to-r from-primary/80 to-secondary/80 flex items-center justify-center p-6">
                    <MessageCircle className="h-20 w-20 text-white/90" strokeWidth={1.5} />
                  </div>
                  <div className="p-6 space-y-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium text-foreground">Registered Office</h3>
                        <p className="text-muted-foreground text-sm mt-1">
                          22 to 25, 2nd Floor, Chapsey Building, 72/78, Shamaldas Gandhi Marg, Kalbadevi, Mumbai, Maharashtra-400 002
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Building className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium text-foreground">Warehouse</h3>
                        <p className="text-muted-foreground text-sm mt-1">
                          Gala No. 1, First Floor, Building D8, Shree Arihant Compound, Reti Bander Road, Kalher, Bhiwandi (Thane) - 421302
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Phone className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium text-foreground">Phone Numbers</h3>
                        <p className="text-muted-foreground text-sm mt-1">
                          +91 9967006091, 022 48256677<br />
                          Warehouse: +91 70455 94431
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Mail className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium text-foreground">Email</h3>
                        <p className="text-muted-foreground text-sm mt-1">
                          ambicapharma@gmail.com<br />
                          info@ambicapharma.net
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Clock className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium text-foreground">Business Hours</h3>
                        <p className="text-muted-foreground text-sm mt-1">
                          Monday - Saturday: 9:00 AM - 6:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-8"
            variants={itemVariants}
          >
            <Card className="border-primary/5 dark:border-primary/10 shadow-lg dark:shadow-primary/5 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-primary to-secondary"></div>
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-semibold text-primary mb-6 flex items-center">
                  <Send className="w-5 h-5 mr-2" /> Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground">Full Name</Label>
                      <Input 
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="border-input/50 focus:border-primary"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">Email Address</Label>
                      <Input 
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="border-input/50 focus:border-primary"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-foreground">Phone Number</Label>
                      <Input 
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="border-input/50 focus:border-primary"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-foreground">Subject</Label>
                      <Input 
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Product Inquiry"
                        className="border-input/50 focus:border-primary"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">Message</Label>
                    <Textarea 
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please write your message here..."
                      rows={5}
                      className="border-input/50 focus:border-primary resize-none"
                      required
                    />
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      type="submit" 
                      className="bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 transition-all duration-300 w-full md:w-auto"
                    >
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>
      
      <motion.section 
        className="container mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <Card className="border-primary/5 dark:border-primary/10 shadow-lg dark:shadow-primary/5 overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-secondary to-primary"></div>
          <CardContent className="p-0">
            <h2 className="sr-only">Our Location</h2>
            <div 
              ref={mapRef}
              className="h-[600px] w-full bg-muted/30 relative"
            >
              {!mapLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full"></div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.section>
    </div>
  );
};

export default Contact;
