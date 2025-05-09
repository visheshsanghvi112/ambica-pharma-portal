
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { Phone, Mail, Clock, MapPin, CheckCircle2, AlertCircle, Send, Building, Users } from "lucide-react";
import MapComponent from "@/components/MapComponent";
import { submitContactForm, logAnalyticsEvent } from "@/lib/firebase";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }).refine((val) => /^[0-9+\- ]+$/.test(val), {
    message: "Phone number can only contain digits, spaces, and +/- symbols.",
  }),
  subject: z.string().min(2, {
    message: "Subject must be at least 2 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }).max(500, {
    message: "Message cannot exceed 500 characters.",
  }),
});

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<{
    status: 'idle' | 'success' | 'error';
    message: string;
  }>({ status: 'idle', message: '' });
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setSubmissionStatus({ status: 'idle', message: '' });
    
    // Log analytics event
    logAnalyticsEvent('contact_form_submit', {
      subject: values.subject
    });
    
    console.log("Submitting contact form:", values);
    
    try {
      // Submit to Firestore
      const result = await submitContactForm(values);
      console.log("Contact form submission result:", result);
      
      if (result.success) {
        setSubmissionStatus({
          status: 'success',
          message: result.message || "Your message has been sent successfully!"
        });
        
        toast({
          title: "Message Sent!",
          description: "Thank you for contacting us. We'll be in touch soon.",
        });
        
        form.reset();
      } else {
        setSubmissionStatus({
          status: 'error',
          message: result.message || "There was a problem sending your message. Please try again."
        });
        
        toast({
          title: "Submission Error",
          description: result.message || "There was a problem sending your message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Unexpected error in contact form submission:", error);
      
      setSubmissionStatus({
        status: 'error',
        message: "An unexpected error occurred. Please try again later."
      });
      
      toast({
        title: "Submission Error",
        description: "An unexpected error occurred. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <Helmet>
        <title>Contact Ambica Pharma | Get in Touch with Us</title>
        <meta
          name="description"
          content="Contact Ambica Pharma for inquiries about our pharmaceutical products, distribution partnerships, or career opportunities. We're here to help."
        />
        <meta name="keywords" content="contact Ambica Pharma, pharmaceutical company contact, pharma inquiry, medicine distributor contact" />
      </Helmet>

      <motion.section 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="py-12 md:py-16 bg-gradient-to-b from-background via-primary/5 to-secondary/5"
      >
        <div className="container px-4 sm:px-6 max-w-7xl mx-auto">
          <motion.div 
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground">
              We're here to answer any questions you may have about our products and services.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16"
          >
            {[
              {
                icon: <Phone className="h-6 w-6 text-primary" />,
                title: "Call Us",
                description: "We're available Monday to Saturday, 9am to 6pm.",
                items: [
                  { 
                    href: "tel:+919967006091", 
                    text: "+91 9967006091" 
                  },
                  { 
                    href: "tel:02248256677", 
                    text: "022 48256677" 
                  }
                ]
              },
              {
                icon: <Mail className="h-6 w-6 text-primary" />,
                title: "Email Us",
                description: "Our support team will get back to you within 24 hours.",
                items: [
                  { 
                    href: "mailto:ambicapharma@gmail.com", 
                    text: "ambicapharma@gmail.com" 
                  },
                  { 
                    href: "mailto:info@ambicapharma.net", 
                    text: "info@ambicapharma.net" 
                  }
                ]
              },
              {
                icon: <Clock className="h-6 w-6 text-primary" />,
                title: "Business Hours",
                description: "Our working hours:",
                items: [
                  { text: "Office: Monday - Friday: 10am - 7:30pm" },
                  { text: "Warehouse: Monday - Saturday: 9am - 7:30pm" },
                  { text: "Sunday: Closed" }
                ]
              }
            ].map((card, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.03, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="bg-card dark:bg-gray-800/90 p-6 rounded-xl shadow-sm border border-border/80 hover:border-primary/20 text-center backdrop-blur-sm"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  {card.icon}
                </div>
                <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
                <p className="text-muted-foreground mb-4">{card.description}</p>
                <div className="space-y-1">
                  {card.items.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      {item.href ? (
                        <a 
                          href={item.href} 
                          className="text-primary hover:underline hover:text-primary/80 transition-colors duration-200 block"
                        >
                          {item.text}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{item.text}</p>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 font-display bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary inline-block">
                Send Us a Message
              </h2>
              
              {submissionStatus.status === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  className="bg-background/80 backdrop-blur-sm p-8 rounded-lg border shadow-sm"
                >
                  <Alert className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 mb-6">
                    <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                    <AlertTitle className="text-green-800 dark:text-green-300 text-lg font-semibold">Message Sent Successfully!</AlertTitle>
                    <AlertDescription className="text-green-700 dark:text-green-400">
                      Thank you for contacting us. We have received your message and will get back to you shortly.
                    </AlertDescription>
                  </Alert>
                  
                  <Button 
                    onClick={() => setSubmissionStatus({ status: 'idle', message: '' })}
                    className="bg-primary hover:bg-primary/90 mt-4"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="bg-background/80 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-md border border-border/80"
                >
                  <Form {...form}>
                    {submissionStatus.status === 'error' && (
                      <Alert className="bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 mb-6">
                        <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                        <AlertTitle className="text-red-800 dark:text-red-300">Submission Failed</AlertTitle>
                        <AlertDescription className="text-red-700 dark:text-red-400">
                          {submissionStatus.message}
                        </AlertDescription>
                      </Alert>
                    )}
                    
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Your Name</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" className="border-primary/20 focus:border-primary" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address</FormLabel>
                              <FormControl>
                                <Input placeholder="john@example.com" type="email" className="border-primary/20 focus:border-primary" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input placeholder="+91 9967006091" className="border-primary/20 focus:border-primary" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Subject</FormLabel>
                              <FormControl>
                                <Input placeholder="Product Inquiry" className="border-primary/20 focus:border-primary" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Message</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Please provide details about your inquiry..."
                                className="min-h-32 border-primary/20 focus:border-primary"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                            <p className="text-xs text-muted-foreground">
                              {field.value.length}/500 characters
                            </p>
                          </FormItem>
                        )}
                      />
                      
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button 
                          type="submit" 
                          className="w-full md:w-auto bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <span className="flex items-center gap-2">
                              <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
                              Sending...
                            </span>
                          ) : (
                            <span className="flex items-center gap-2">
                              <Send className="h-4 w-4" />
                              Send Message
                            </span>
                          )}
                        </Button>
                      </motion.div>
                    </form>
                  </Form>
                </motion.div>
              )}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-6 font-display bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary inline-block">
                  Registered Office
                </h2>
                <Card className="overflow-hidden border-border/80 hover:border-primary/20 transition-colors duration-300 mb-6">
                  <CardContent className="p-0">
                    <div className="p-6 border-b border-border/80">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                          <Building className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">Ambica Pharma</h3>
                          <p className="text-muted-foreground mt-1">
                            22 to 25, 2nd Floor, Chapsey Building, 72/78, Shamaldas Gandhi Marg, Kalbadevi, Mumbai, Maharashtra-400 002
                          </p>
                        </div>
                      </div>
                    </div>
                    <a href="https://www.google.com/maps/search/?api=1&query=18.947723655912238,72.82820321114292" target="_blank" rel="noopener noreferrer">
  <img 
    src="https://maps.googleapis.com/maps/api/staticmap?center=18.947723655912238,72.82820321114292&zoom=15&size=600x300&maptype=roadmap&markers=color:red%7Clabel:A%7C18.947723655912238,72.82820321114292&key=YOUR_GOOGLE_MAPS_API_KEY" 
    alt="Ambica Pharma Location" 
    style="width: 100%; max-width: 600px; border-radius: 8px;"
  />
</a>



                  </CardContent>
                </Card>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-6 font-display bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary inline-block">
                  Warehouse
                </h2>
                <Card className="overflow-hidden border-border/80 hover:border-primary/20 transition-colors duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Ambica Pharma Warehouse</h3>
                        <p className="text-muted-foreground mt-1">
                          Gala No.9 to 12, First Floor, Building D8, Shree Arihant Compound, Reti Bander Road, Kalher, Bhiwandi (Thane) - 421302
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-xl border border-primary/20 shadow-lg backdrop-blur-sm"
          >
            <h2 className="text-2xl font-semibold mb-6 text-center font-display">Emergency Contact</h2>
            <div className="text-center max-w-2xl mx-auto">
              <p className="mb-6 text-muted-foreground">
                For urgent matters or emergency orders, please contact our dedicated emergency line:
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
                <motion.a 
                  href="tel:+919967006091" 
                  className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors bg-primary/10 hover:bg-primary/20 px-4 py-2 rounded-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="h-5 w-5" />
                  <span>+91 9967006091</span>
                </motion.a>
                <motion.a 
                  href="mailto:info@ambicapharma.net" 
                  className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors bg-primary/10 hover:bg-primary/20 px-4 py-2 rounded-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="h-5 w-5" />
                  <span>info@ambicapharma.net</span>
                </motion.a>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/emergency">
                  <Button className="bg-gradient-to-r from-secondary to-primary animate-pulse px-6 py-2 text-base">
                    Emergency Order
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default Contact;
