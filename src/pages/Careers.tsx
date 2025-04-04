
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import { Helmet } from "react-helmet-async";

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
  position: z.string({
    required_error: "Please select a position.",
  }),
  experience: z.string({
    required_error: "Please select your experience level.",
  }),
  message: z.string().min(10, {
    message: "Cover letter must be at least 10 characters.",
  }),
  resume: z.any()
    .refine((file) => file?.length === 1, "Resume is required.")
    .refine(
      (file) => file?.[0]?.size <= 5000000,
      "Max file size is 5MB."
    )
    .refine(
      (file) => 
        ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(file?.[0]?.type),
      "Only PDF and Word documents are accepted."
    ),
});

const Careers = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real application, you would send this data to your server
    console.log(values);
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest in joining our team. We'll be in touch soon.",
    });
    form.reset();
  }

  const positions = [
    "Sales Representative",
    "Marketing Specialist",
    "Quality Control Analyst",
    "Research Scientist",
    "Production Supervisor",
    "Regulatory Affairs Specialist",
    "Medical Representative",
    "Logistics Coordinator",
    "Administrative Assistant",
    "Business Development Manager"
  ];

  const experienceLevels = [
    "Entry Level (0-2 years)",
    "Mid Level (3-5 years)",
    "Senior Level (6-10 years)",
    "Executive Level (10+ years)"
  ];

  return (
    <>
      <Helmet>
        <title>Careers at Ambica Pharma | Join Our Team</title>
        <meta name="description" content="Explore career opportunities at Ambica Pharma. Join our innovative team and make a difference in the pharmaceutical industry." />
        <meta name="keywords" content="pharmaceutical careers, Ambica Pharma jobs, pharma employment, Mumbai pharmaceutical jobs" />
      </Helmet>
      
      <section className="py-12 md:py-24 bg-gradient-to-b from-background to-secondary/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">Careers at Ambica Pharma</h1>
            <p className="text-muted-foreground text-lg">Join our team of passionate professionals dedicated to improving global healthcare.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 font-display">Why Work With Us?</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Innovation-Driven Culture</h3>
                    <p className="text-muted-foreground">We're constantly pushing the boundaries of pharmaceutical excellence.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Professional Growth</h3>
                    <p className="text-muted-foreground">We invest in our employees' development through training and mentorship.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Global Impact</h3>
                    <p className="text-muted-foreground">Your work will help improve healthcare outcomes worldwide.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Competitive Benefits</h3>
                    <p className="text-muted-foreground">We offer attractive compensation packages and work-life balance.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-border">
              <h2 className="text-2xl font-semibold mb-4 font-display">Our Company</h2>
              <p className="mb-4">
                The Company has been accredited with ISO-9001:2008 and manufactures pharmaceutical formulations as per the guidelines of WHO. It is a (GMP Certified) Unit with total quality management and In-house Testing Laboratory.
              </p>
              <p className="mb-4">
                Our success is the result of focusing on our clients top priorities such as quality products, on-time delivery, competitive rates and unparalleled responsiveness.
              </p>
              <p className="mb-4">
                Johnlee manufactures more than 400 plus Pharmaceutical Formulation Products in the form of Tablets, Capsules, Dry syrup, Liquid Orals and Sustained Release Preparations.
              </p>
              <p>
                It is the Company constant and Company will also increasingly focus in high growth potential segments like Vaccines and Biogenetics.
              </p>
            </div>
          </div>
          
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center font-display">Current Openings</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Sales Representative",
                  location: "Mumbai, Maharashtra",
                  type: "Full-time"
                },
                {
                  title: "Quality Control Analyst",
                  location: "Mumbai, Maharashtra",
                  type: "Full-time"
                },
                {
                  title: "Production Supervisor",
                  location: "Bhiwandi, Maharashtra",
                  type: "Full-time"
                },
                {
                  title: "Research Scientist",
                  location: "Mumbai, Maharashtra",
                  type: "Full-time"
                },
                {
                  title: "Medical Representative",
                  location: "Multiple Locations",
                  type: "Full-time"
                },
                {
                  title: "Business Development Manager",
                  location: "Mumbai, Maharashtra",
                  type: "Full-time"
                }
              ].map((job, index) => (
                <div key={index} className="bg-card p-6 rounded-lg border border-border hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-lg mb-2">{job.title}</h3>
                  <div className="flex items-center text-sm text-muted-foreground mb-1">
                    <span className="mr-2">📍</span> {job.location}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <span className="mr-2">⏱️</span> {job.type}
                  </div>
                  <Button variant="outline" size="sm" className="w-full">View Details</Button>
                </div>
              ))}
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto bg-primary-foreground dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-border">
            <div className="p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary text-center font-display">Ready to Join Our Team?</h2>
              <p className="text-center mb-8 text-muted-foreground">
                Submit your application below and we'll be in touch if your qualifications match our requirements.
              </p>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
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
                      name="position"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Position</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select position" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {positions.map((position) => (
                                <SelectItem key={position} value={position}>{position}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="experience"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Experience Level</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select experience level" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {experienceLevels.map((level) => (
                                <SelectItem key={level} value={level}>{level}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="resume"
                      render={({ field: { onChange, value, ...rest } }) => (
                        <FormItem className="md:col-span-2">
                          <FormLabel>Resume/CV</FormLabel>
                          <FormControl>
                            <Input 
                              type="file" 
                              className="cursor-pointer" 
                              onChange={(e) => onChange(e.target.files)}
                              accept=".pdf,.doc,.docx"
                              {...rest}
                            />
                          </FormControl>
                          <FormDescription>
                            Upload your resume (PDF or Word, max 5MB)
                          </FormDescription>
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
                        <FormLabel>Cover Letter</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us why you're interested in this position and what you would bring to our team..."
                            className="min-h-32"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="w-full">Submit Application</Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;
