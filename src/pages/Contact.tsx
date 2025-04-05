
import React from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import MapComponent from "@/components/MapComponent";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  subject: z.string().min(2, {
    message: "Subject must be at least 2 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const Contact = () => {
  const { toast } = useToast();
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

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real application, you would send this data to your server
    console.log(values);
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll be in touch soon.",
    });
    form.reset();
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

      <section className="py-12 md:py-16 bg-gradient-to-b from-background to-secondary/5">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">Get in Touch</h1>
            <p className="text-lg text-muted-foreground">
              We're here to answer any questions you may have about our products and services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-card dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-xl font-semibold mb-2">Call Us</h2>
              <p className="text-muted-foreground mb-4">We're available Monday to Saturday, 9am to 6pm.</p>
              <a href="tel:+919967006091" className="text-primary hover:underline block">+91 9967006091</a>
              <a href="tel:02248256677" className="text-primary hover:underline block">022 48256677</a>
            </div>

            <div className="bg-card dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-xl font-semibold mb-2">Email Us</h2>
              <p className="text-muted-foreground mb-4">Our support team will get back to you within 24 hours.</p>
              <a href="mailto:info@ambicapharma.net" className="text-primary hover:underline block">info@ambicapharma.net</a>
            </div>

            <div className="bg-card dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-xl font-semibold mb-2">Business Hours</h2>
              <p className="text-muted-foreground mb-2">Office: Monday - Friday: 10am - 7:30pm</p>
              <p className="text-muted-foreground mb-2">Warehouse: Monday - Saturday: 9am - 12pm</p>
              <p className="text-muted-foreground">Sunday: Closed</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 font-display">Send Us a Message</h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
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
                            <Input placeholder="john@example.com" {...field} />
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
                            <Input placeholder="+91 9967006091" {...field} />
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
                            <Input placeholder="Product Inquiry" {...field} />
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
                            className="min-h-32"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="bg-primary hover:bg-primary/90">Send Message</Button>
                </form>
              </Form>
            </div>
            
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-6 font-display">Registered Office</h2>
                <div className="flex items-start space-x-4 mb-4">
                  <div className="mt-1">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Ambica Pharma</h3>
                    <p className="text-muted-foreground">
                      22 to 25, 2nd Floor, Chapsey Building, 72/78, Shamaldas Gandhi Marg, Kalbadevi, Mumbai, Maharashtra-400 002
                    </p>
                  </div>
                </div>
                
                <div className="mb-8">
                  <MapComponent lat={18.9537611} lng={72.8254747} zoom={15} title="Ambica Pharma Registered Office" />
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-4 font-display">Warehouse</h2>
                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Ambica Pharma Warehouse</h3>
                    <p className="text-muted-foreground">
                      Gala No. 1, First Floor, Building D8, Shree Arihant Compound, Reti Bander Road, Kalher, Bhiwandi (Thane) - 421302
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-card dark:bg-gray-800 p-8 rounded-xl border border-border shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-center font-display">Emergency Contact</h2>
            <div className="text-center max-w-2xl mx-auto">
              <p className="mb-4 text-muted-foreground">
                For urgent matters or emergency orders, please contact our dedicated emergency line:
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4">
                <a href="tel:+919967006091" className="flex items-center gap-2 text-primary hover:underline">
                  <Phone className="h-5 w-5" />
                  <span>+91 9967006091</span>
                </a>
                <a href="mailto:info@ambicapharma.net" className="flex items-center gap-2 text-primary hover:underline">
                  <Mail className="h-5 w-5" />
                  <span>info@ambicapharma.net</span>
                </a>
              </div>
              <Button className="bg-gradient-to-r from-secondary to-primary animate-pulse">
                Emergency Order
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
