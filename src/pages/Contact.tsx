import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, MessageCircle, Building, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import MapComponent from "@/components/MapComponent";

// Define the window interface for Google Maps
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

  // Load Google Maps script
  useEffect(() => {
    // Ensure the script is only added once
    if (!document.getElementById('google-maps-script')) {
      // Define the initMap function
      window.initMap = () => {
        console.log("Google Maps API loaded");
      };

      // Create script element
      const script = document.createElement('script');
      script.id = 'google-maps-script';
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY || ''}&callback=initMap`;
      script.async = true;
      script.defer = true;
      
      // Add script to document
      document.head.appendChild(script);
      
      return () => {
        // Clean up script on unmount
        const scriptElement = document.getElementById('google-maps-script');
        if (scriptElement) {
          document.head.removeChild(scriptElement);
        }
        delete window.initMap;
      };
    }
  }, []);

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
        <MapComponent 
          lat={18.9451}
          lng={72.8234}
          zoom={15}
        />
      </motion.section>
    </div>
  );
};

export default Contact;
