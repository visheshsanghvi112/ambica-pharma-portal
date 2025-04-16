
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
import { Phone, Mail, Clock, MapPin, CheckCircle2, AlertCircle, Send, Building, HelpCircle } from "lucide-react";
import MapComponent from "@/components/MapComponent";
import { submitContactForm, logAnalyticsEvent } from "@/lib/firebase";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

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

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

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

      <section className="relative py-16 md:py-24 bg-gradient-to-b from-background via-secondary/5 to-background">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-primary/5 to-transparent opacity-50"></div>
        <div className="absolute top-40 right-10 w-72 h-72 rounded-full bg-secondary/10 blur-3xl"></div>
        <div className="absolute bottom-40 left-10 w-80 h-80 rounded-full bg-primary/10 blur-3xl"></div>
        
        <div className="container relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Get in Touch</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're here to answer any questions you may have about our pharmaceutical products and services. Reach out to us through any of the channels below.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: <Phone className="h-6 w-6 text-primary" />,
                title: "Call Us",
                description: "We're available Monday to Saturday, 9am to 6pm.",
                items: [
                  { link: "tel:+919967006091", text: "+91 9967006091" },
                  { link: "tel:02248256677", text: "022 48256677" }
                ]
              },
              {
                icon: <Mail className="h-6 w-6 text-primary" />,
                title: "Email Us",
                description: "Our support team will get back to you within 24 hours.",
                items: [
                  { link: "mailto:ambicapharma@gmail.com", text: "ambicapharma@gmail.com" }
                ]
              },
              {
                icon: <Clock className="h-6 w-6 text-primary" />,
                title: "Business Hours",
                description: "Our office and warehouse operating hours.",
                items: [
                  { text: "Office: Mon-Fri: 10am - 7:30pm" },
                  { text: "Warehouse: Mon-Sat: 9am - 7:30pm" },
                  { text: "Sunday: Closed" }
                ]
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full border-border/40 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5 group">
                  <CardContent className="p-6 flex flex-col items-center text-center h-full">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      {item.icon}
                    </div>
                    <h2 className="text-xl font-semibold mb-3">{item.title}</h2>
                    <p className="text-muted-foreground mb-4 text-sm">{item.description}</p>
                    <div className="mt-auto space-y-1">
                      {item.items.map((subItem, idx) => (
                        <div key={idx}>
                          {subItem.link ? (
                            <a href={subItem.link} className="text-primary hover:text-primary/80 hover:underline transition-colors font-medium">
                              {subItem.text}
                            </a>
                          ) : (
                            <p className="text-foreground/80">{subItem.text}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="sticky top-24">
                <h2 className="text-2xl md:text-3xl font-semibold mb-6 font-display bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary inline-block">Send Us a Message</h2>
                
                {submissionStatus.status === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-br from-white to-green-50 dark:from-gray-900 dark:to-green-950/30 p-8 rounded-xl border border-green-100 dark:border-green-900/40 shadow-lg"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-4 text-green-800 dark:text-green-400">Message Sent Successfully!</h3>
                    <p className="text-center text-green-700 dark:text-green-300 mb-6">
                      Thank you for contacting us. We have received your message and will get back to you shortly.
                    </p>
                    
                    <Button 
                      onClick={() => setSubmissionStatus({ status: 'idle', message: '' })}
                      className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 w-full"
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <Form {...form}>
                    <Card className="border-border/40 shadow-lg p-6 bg-gradient-to-br from-white to-blue-50/30 dark:from-gray-900 dark:to-blue-950/20">
                      {submissionStatus.status === 'error' && (
                        <Alert className="bg-red-50 border-red-200 mb-6 dark:bg-red-900/30 dark:border-red-800/60">
                          <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                          <AlertTitle className="text-red-800 dark:text-red-400">Submission Failed</AlertTitle>
                          <AlertDescription className="text-red-700 dark:text-red-300">
                            {submissionStatus.message}
                          </AlertDescription>
                        </Alert>
                      )}
                      
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                        <div className="grid md:grid-cols-2 gap-5">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-foreground/90 font-medium">Your Name</FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder="John Doe" 
                                    {...field} 
                                    className="border-primary/20 focus:border-primary focus-visible:ring-1 focus-visible:ring-primary/30"
                                  />
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
                                <FormLabel className="text-foreground/90 font-medium">Email Address</FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder="john@example.com" 
                                    type="email" 
                                    {...field} 
                                    className="border-primary/20 focus:border-primary focus-visible:ring-1 focus-visible:ring-primary/30"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-5">
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-foreground/90 font-medium">Phone Number</FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder="+91 9967006091" 
                                    {...field} 
                                    className="border-primary/20 focus:border-primary focus-visible:ring-1 focus-visible:ring-primary/30"
                                  />
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
                                <FormLabel className="text-foreground/90 font-medium">Subject</FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder="Product Inquiry" 
                                    {...field} 
                                    className="border-primary/20 focus:border-primary focus-visible:ring-1 focus-visible:ring-primary/30"
                                  />
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
                              <FormLabel className="text-foreground/90 font-medium">Your Message</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Please provide details about your inquiry..."
                                  className="min-h-32 border-primary/20 focus:border-primary focus-visible:ring-1 focus-visible:ring-primary/30 resize-none"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                              <p className="text-xs text-muted-foreground mt-1 text-right">
                                {field.value.length}/500 characters
                              </p>
                            </FormItem>
                          )}
                        />
                        
                        <Button 
                          type="submit" 
                          className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transition-all w-full md:w-auto px-8"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="mr-2 h-4 w-4" />
                              Send Message
                            </>
                          )}
                        </Button>
                      </form>
                    </Card>
                  </Form>
                )}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-6 font-display bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary inline-block">Our Locations</h2>
                <Card className="mb-8 overflow-hidden border-border/40 hover:border-primary/30 transition-all hover:shadow-lg">
                  <CardContent className="p-0">
                    <div className="p-6">
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="mt-1 shrink-0">
                          <Building className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">Registered Office</h3>
                          <p className="text-muted-foreground text-sm">
                            22 to 25, 2nd Floor, Chapsey Building, 72/78, Shamaldas Gandhi Marg, Kalbadevi, Mumbai, Maharashtra-400 002
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="h-[300px] w-full overflow-hidden rounded-b-lg">
                      <MapComponent lat={18.9537611} lng={72.8254747} zoom={15} title="Ambica Pharma Registered Office" />
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden border-border/40 hover:border-primary/30 transition-all hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="mt-1 shrink-0">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Warehouse Facility</h3>
                        <p className="text-muted-foreground text-sm">
                          Gala No.9 to 12, First Floor, Building D8, Shree Arihant Compound, Reti Bander Road, Kalher, Bhiwandi (Thane) - 421302
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <Card className="overflow-hidden border-border/40 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-950/30 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center p-4">
                    <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/40 flex items-center justify-center mb-4">
                      <Phone className="h-8 w-8 text-red-600 dark:text-red-400" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Emergency Contact</h3>
                    <p className="text-muted-foreground mb-6 max-w-md">
                      For urgent matters or emergency orders, please contact our dedicated emergency line:
                    </p>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
                      <a href="tel:+919967006091" className="flex items-center gap-2 text-primary hover:underline">
                        <Phone className="h-5 w-5" />
                        <span>+91 9967006091</span>
                      </a>
                      <a href="mailto:info@ambicapharma.net" className="flex items-center gap-2 text-primary hover:underline">
                        <Mail className="h-5 w-5" />
                        <span>info@ambicapharma.net</span>
                      </a>
                    </div>
                    <Button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 animate-pulse">
                      Emergency Order
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden border-border/40 hover:border-primary/30 transition-all hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 shrink-0">
                      <HelpCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Frequently Asked Questions</h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        Have questions about our products or services? Visit our FAQ page for answers to commonly asked questions.
                      </p>
                      <Button asChild variant="outline" className="border-primary/30 hover:bg-primary/10">
                        <Link to="/faq">View FAQs</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
