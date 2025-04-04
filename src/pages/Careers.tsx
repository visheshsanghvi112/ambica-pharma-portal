
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Search, Upload, CheckCircle, AlertCircle } from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

const Careers = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    resume: null as File | null,
    message: ""
  });

  const jobCategories = [
    { name: "Research & Development", count: 5 },
    { name: "Manufacturing", count: 3 },
    { name: "Quality Assurance", count: 4 },
    { name: "Marketing & Sales", count: 2 },
    { name: "Human Resources", count: 1 },
    { name: "Finance & Accounting", count: 2 },
  ];

  const jobListings = [
    {
      id: 1,
      title: "Research Scientist",
      department: "Research & Development",
      location: "Mumbai, India",
      type: "Full-time",
      postedDate: "March 25, 2025",
      description: "Join our research team to develop innovative pharmaceutical formulations following WHO guidelines and GMP practices.",
      requirements: "PhD in Pharmaceutical Sciences or related field with 3+ years of experience in drug formulation research."
    },
    {
      id: 2,
      title: "Quality Control Analyst",
      department: "Quality Assurance",
      location: "Pune, India",
      type: "Full-time",
      postedDate: "March 28, 2025",
      description: "Ensure pharmaceutical products meet ISO-9001:2008 standards through comprehensive testing and quality management.",
      requirements: "Bachelor's degree in Pharmacy or Chemistry with 2+ years of experience in pharmaceutical QC."
    },
    {
      id: 3,
      title: "Production Supervisor",
      department: "Manufacturing",
      location: "Mumbai, India",
      type: "Full-time",
      postedDate: "March 30, 2025",
      description: "Oversee the production of tablets, capsules, dry syrups, liquid orals, and sustained release preparations.",
      requirements: "Bachelor's degree in Pharmacy or related field with 5+ years of production experience."
    },
    {
      id: 4,
      title: "Marketing Manager",
      department: "Marketing & Sales",
      location: "Delhi, India",
      type: "Full-time",
      postedDate: "April 1, 2025",
      description: "Develop marketing strategies for our 400+ pharmaceutical formulation products in the Indian and international markets.",
      requirements: "MBA in Marketing with 4+ years of experience in pharmaceutical marketing."
    },
    {
      id: 5,
      title: "HR Executive",
      department: "Human Resources",
      location: "Mumbai, India",
      type: "Full-time",
      postedDate: "April 2, 2025",
      description: "Join our team focused on recruiting top talent for our expanding focus areas including Vaccines and Biogenetics.",
      requirements: "Master's degree in HR or related field with 2+ years of experience in talent acquisition."
    },
  ];

  const filteredJobs = jobListings.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormValues(prev => ({ ...prev, resume: e.target.files ? e.target.files[0] : null }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      toast({
        title: "Application Submitted",
        description: "We've received your application and will contact you soon!",
        variant: "default",
      });
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormValues({
          fullName: "",
          email: "",
          phone: "",
          position: "",
          experience: "",
          resume: null,
          message: ""
        });
        setSubmitSuccess(false);
      }, 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Careers at Ambica Pharma | Join Our Team</title>
        <meta name="description" content="Explore career opportunities at Ambica Pharma. Join our team of pharmaceutical professionals and contribute to global healthcare innovation." />
        <meta name="keywords" content="pharmaceutical jobs, Ambica Pharma careers, pharmaceutical company jobs, drug manufacturing jobs, pharma jobs India" />
        <meta property="og:title" content="Careers at Ambica Pharma | Join Our Team" />
        <meta property="og:description" content="Explore career opportunities at Ambica Pharma. Join our team of pharmaceutical professionals and contribute to global healthcare innovation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ambicapharma.com/careers" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Careers at Ambica Pharma | Join Our Team" />
        <meta name="twitter:description" content="Explore career opportunities at Ambica Pharma. Join our team of pharmaceutical professionals and contribute to global healthcare innovation." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light text-white">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 animate-fade-in">Careers at Ambica Pharma</h1>
          <p className="text-lg max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "100ms" }}>
            Join our team of passionate professionals dedicated to improving healthcare worldwide.
          </p>
          <div className="max-w-md mx-auto bg-white/10 backdrop-blur-sm p-2 rounded-full flex items-center animate-fade-in" style={{ animationDelay: "200ms" }}>
            <Input 
              type="search" 
              placeholder="Search for job openings..." 
              className="border-0 bg-transparent focus-visible:ring-0 text-white placeholder:text-white/70" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button className="rounded-full bg-white text-primary hover:bg-white/90">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Company Information */}
      <section className="py-10 bg-background">
        <div className="container">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-primary/10">
            <h2 className="text-2xl font-display font-bold text-primary dark:text-primary-light mb-4">About Ambica Pharma</h2>
            <div className="space-y-4 text-foreground/80 dark:text-foreground/70">
              <p>
                Ambica Pharma has been accredited with ISO-9001:2008 and manufactures pharmaceutical formulations as per the guidelines of WHO. 
                We are a GMP Certified Unit with total quality management and an In-house Testing Laboratory.
              </p>
              <p>
                Our success is the result of focusing on our clients top priorities such as quality products, on-time delivery, competitive rates 
                and unparalleled responsiveness. We manufacture more than 400 pharmaceutical formulation products in the form of Tablets, Capsules, 
                Dry syrup, Liquid Orals and Sustained Release Preparations.
              </p>
              <p>
                The company will also increasingly focus in high growth potential segments like Vaccines and Biogenetics.
              </p>
              
              <div className="grid md:grid-cols-4 gap-4 mt-6">
                <div className="bg-primary/5 dark:bg-primary/10 p-4 rounded-lg text-center">
                  <div className="font-bold text-primary dark:text-primary-light text-xl mb-1">400+</div>
                  <div className="text-sm">Formulation Products</div>
                </div>
                <div className="bg-primary/5 dark:bg-primary/10 p-4 rounded-lg text-center">
                  <div className="font-bold text-primary dark:text-primary-light text-xl mb-1">ISO 9001</div>
                  <div className="text-sm">Certified</div>
                </div>
                <div className="bg-primary/5 dark:bg-primary/10 p-4 rounded-lg text-center">
                  <div className="font-bold text-primary dark:text-primary-light text-xl mb-1">GMP</div>
                  <div className="text-sm">Certified</div>
                </div>
                <div className="bg-primary/5 dark:bg-primary/10 p-4 rounded-lg text-center">
                  <div className="font-bold text-primary dark:text-primary-light text-xl mb-1">WHO</div>
                  <div className="text-sm">Guidelines Compliant</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Join Us */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-display font-bold text-primary dark:text-primary-light mb-10 text-center animate-fade-in">Why Join Ambica Pharma?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Reason 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md text-center transform transition-transform hover:scale-105 animate-fade-in" style={{ animationDelay: "100ms" }}>
              <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary dark:text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary dark:text-primary-light mb-3">Innovative Environment</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Be part of a team that's constantly innovating and pushing boundaries in pharmaceutical research and development.
              </p>
            </div>
            
            {/* Reason 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md text-center transform transition-transform hover:scale-105 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary dark:text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary dark:text-primary-light mb-3">Growth Opportunities</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We invest in our employees' professional development through training, mentorship, and career advancement pathways.
              </p>
            </div>
            
            {/* Reason 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md text-center transform transition-transform hover:scale-105 animate-fade-in" style={{ animationDelay: "300ms" }}>
              <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary dark:text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary dark:text-primary-light mb-3">Global Impact</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Make a difference in people's lives through our mission to provide high-quality, affordable healthcare solutions globally.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Job Categories and Listings */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/20">
        <div className="container">
          <h2 className="text-3xl font-display font-bold text-primary dark:text-primary-light mb-10 text-center animate-fade-in">Current Opportunities</h2>
          
          <Tabs defaultValue="listings" className="w-full">
            <TabsList className="w-full max-w-md mx-auto mb-8">
              <TabsTrigger value="listings" className="flex-1">Job Listings</TabsTrigger>
              <TabsTrigger value="application" className="flex-1">Application Form</TabsTrigger>
            </TabsList>
            
            <TabsContent value="listings">
              <div className="grid md:grid-cols-4 gap-8">
                {/* Job Categories */}
                <div className="md:col-span-1">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-md animate-fade-in" style={{ animationDelay: "100ms" }}>
                    <h3 className="text-lg font-semibold text-primary dark:text-primary-light mb-4">Job Categories</h3>
                    <ul className="space-y-3">
                      {jobCategories.map((category) => (
                        <li 
                          key={category.name} 
                          className="flex justify-between items-center text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light cursor-pointer transition-colors"
                          onClick={() => setSearchTerm(category.name)}
                        >
                          <span>{category.name}</span>
                          <span className="bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light text-xs px-2 py-1 rounded-full">{category.count}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Job Listings */}
                <div className="md:col-span-3">
                  <div className="space-y-4 animate-fade-in" style={{ animationDelay: "200ms" }}>
                    {filteredJobs.length > 0 ? (
                      filteredJobs.map((job) => (
                        <Accordion type="single" collapsible key={job.id}>
                          <AccordionItem value={`job-${job.id}`} className="border-b-0">
                            <Card className="bg-white dark:bg-gray-800 mb-4">
                              <CardHeader className="pb-2">
                                <div className="flex flex-wrap justify-between items-start">
                                  <div>
                                    <CardTitle className="text-xl text-primary dark:text-primary-light">{job.title}</CardTitle>
                                    <CardDescription className="mt-1">{job.department} | {job.location}</CardDescription>
                                  </div>
                                  <span className="bg-secondary/10 text-secondary text-xs px-3 py-1 rounded-full">{job.type}</span>
                                </div>
                              </CardHeader>
                              <CardContent className="pb-2">
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                                  <div>
                                    <span className="text-gray-500 dark:text-gray-400 block">Department</span>
                                    <span className="text-gray-700 dark:text-gray-300">{job.department}</span>
                                  </div>
                                  <div>
                                    <span className="text-gray-500 dark:text-gray-400 block">Location</span>
                                    <span className="text-gray-700 dark:text-gray-300">{job.location}</span>
                                  </div>
                                  <div>
                                    <span className="text-gray-500 dark:text-gray-400 block">Posted</span>
                                    <span className="text-gray-700 dark:text-gray-300">{job.postedDate}</span>
                                  </div>
                                </div>
                                <AccordionTrigger className="text-sm text-primary">View Details</AccordionTrigger>
                                <AccordionContent>
                                  <div className="mt-4 space-y-4">
                                    <div>
                                      <h4 className="font-semibold text-primary dark:text-primary-light">Job Description</h4>
                                      <p className="mt-1 text-gray-600 dark:text-gray-400">{job.description}</p>
                                    </div>
                                    <div>
                                      <h4 className="font-semibold text-primary dark:text-primary-light">Requirements</h4>
                                      <p className="mt-1 text-gray-600 dark:text-gray-400">{job.requirements}</p>
                                    </div>
                                  </div>
                                </AccordionContent>
                              </CardContent>
                              <CardFooter>
                                <div className="flex justify-end">
                                  <Button className="bg-primary hover:bg-primary-light transition-colors">Apply Now</Button>
                                </div>
                              </CardFooter>
                            </Card>
                          </AccordionItem>
                        </Accordion>
                      ))
                    ) : (
                      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg text-center">
                        <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-primary dark:text-primary-light mb-2">No jobs found</h3>
                        <p className="text-muted-foreground">
                          We couldn't find any jobs matching your search criteria. Try adjusting your search or check back later.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="application">
              <div className="max-w-2xl mx-auto">
                <Card className="bg-white dark:bg-gray-800">
                  <CardHeader>
                    <CardTitle className="text-primary dark:text-primary-light">Job Application Form</CardTitle>
                    <CardDescription>Fill out the form below to apply for a position at Ambica Pharma</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {submitSuccess ? (
                      <div className="py-8 text-center">
                        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-primary dark:text-primary-light mb-2">Application Submitted Successfully!</h3>
                        <p className="text-muted-foreground max-w-md mx-auto">
                          Thank you for your interest in Ambica Pharma. We've received your application and will review it shortly.
                          Our HR team will contact you if your profile matches our requirements.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="fullName">Full Name</Label>
                            <Input
                              id="fullName"
                              name="fullName"
                              value={formValues.fullName}
                              onChange={handleInputChange}
                              placeholder="John Doe"
                              required
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formValues.email}
                              onChange={handleInputChange}
                              placeholder="john.doe@example.com"
                              required
                            />
                          </div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input
                              id="phone"
                              name="phone"
                              value={formValues.phone}
                              onChange={handleInputChange}
                              placeholder="+91 9876543210"
                              required
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="position">Position Applied For</Label>
                            <Input
                              id="position"
                              name="position"
                              value={formValues.position}
                              onChange={handleInputChange}
                              placeholder="Research Scientist"
                              required
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label>Experience Level</Label>
                          <RadioGroup 
                            onValueChange={(value) => setFormValues(prev => ({ ...prev, experience: value }))} 
                            defaultValue={formValues.experience}
                            className="flex space-x-4"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="fresher" id="fresher" />
                              <Label htmlFor="fresher" className="cursor-pointer">Fresher</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="1-3" id="1-3" />
                              <Label htmlFor="1-3" className="cursor-pointer">1-3 years</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="3-5" id="3-5" />
                              <Label htmlFor="3-5" className="cursor-pointer">3-5 years</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="5+" id="5+" />
                              <Label htmlFor="5+" className="cursor-pointer">5+ years</Label>
                            </div>
                          </RadioGroup>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="resume">Upload Resume</Label>
                          <div className="border border-input rounded-md p-4 bg-background/50">
                            <label className="flex flex-col items-center cursor-pointer">
                              <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                              <span className="text-sm font-medium mb-1">Click to upload your resume</span>
                              <span className="text-xs text-muted-foreground">PDF, DOC or DOCX (Max 2MB)</span>
                              <input 
                                type="file" 
                                id="resume" 
                                accept=".pdf,.doc,.docx" 
                                className="hidden"
                                onChange={handleFileChange}
                                required
                              />
                            </label>
                            {formValues.resume && (
                              <div className="mt-2 text-sm text-center text-green-600 dark:text-green-500">
                                {formValues.resume.name} uploaded successfully
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="message">Cover Letter / Additional Information</Label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formValues.message}
                            onChange={handleInputChange}
                            placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                            className="min-h-[120px]"
                          />
                        </div>
                        
                        <Button 
                          type="submit" 
                          className="w-full bg-primary hover:bg-primary-light transition-colors"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Submitting..." : "Submit Application"}
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-secondary to-secondary-light text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-display font-bold mb-6 animate-fade-in">Ready to Join Our Team?</h2>
          <p className="max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "100ms" }}>
            Explore our current openings and take the next step in your career with Ambica Pharma.
          </p>
          <Button className="bg-white text-secondary hover:bg-gray-100 transition-colors animate-fade-in" style={{ animationDelay: "200ms" }}>
            View All Job Openings
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Careers;
