
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Search, 
  Calendar, 
  MapPin, 
  Briefcase, 
  Clock, 
  Upload, 
  CheckCircle, 
  AlertCircle,
  Send 
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";

const Careers = () => {
  const { toast } = useToast();
  const [activeJobId, setActiveJobId] = useState<number | null>(null);
  const [applicationFormVisible, setApplicationFormVisible] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");

  const jobCategories = [
    { name: "Research & Development", count: 5 },
    { name: "Manufacturing", count: 3 },
    { name: "Quality Assurance", count: 4 },
    { name: "Marketing & Sales", count: 2 },
    { name: "Human Resources", count: 1 },
    { name: "Finance & Accounting", count: 2 },
  ];

  const jobLocations = [
    "All Locations",
    "Mumbai, India",
    "Delhi, India",
    "Pune, India",
    "Hyderabad, India"
  ];

  const jobListings = [
    {
      id: 1,
      title: "Research Scientist",
      department: "Research & Development",
      location: "Mumbai, India",
      type: "Full-time",
      postedDate: "March 25, 2025",
      description: "As a Research Scientist at Ambica Pharma, you will be responsible for designing and conducting experiments, analyzing data, and developing new pharmaceutical formulations. You will work closely with cross-functional teams to drive innovation in our product pipeline.",
      requirements: [
        "Ph.D. or Master's degree in Pharmaceutical Sciences, Chemistry, or related field",
        "3+ years of experience in pharmaceutical research and development",
        "Experience with analytical techniques and equipment",
        "Strong problem-solving skills and attention to detail",
        "Excellent communication and collaboration abilities"
      ],
      responsibilities: [
        "Design and conduct experiments to develop new pharmaceutical formulations",
        "Analyze experimental data and prepare detailed reports",
        "Collaborate with cross-functional teams to drive product development",
        "Stay updated on industry trends and emerging technologies",
        "Contribute to patent applications and regulatory submissions"
      ]
    },
    {
      id: 2,
      title: "Quality Control Analyst",
      department: "Quality Assurance",
      location: "Pune, India",
      type: "Full-time",
      postedDate: "March 28, 2025",
      description: "We are seeking a detail-oriented Quality Control Analyst to ensure our pharmaceutical products meet the highest standards of quality and compliance. You will perform various analytical tests and inspections to verify product quality throughout the manufacturing process.",
      requirements: [
        "Bachelor's degree in Pharmacy, Chemistry, or related field",
        "2+ years of experience in pharmaceutical quality control",
        "Knowledge of GMP regulations and quality management systems",
        "Experience with analytical instruments and testing methods",
        "Strong documentation and record-keeping skills"
      ],
      responsibilities: [
        "Perform chemical and physical testing of raw materials and finished products",
        "Inspect manufacturing processes to ensure compliance with quality standards",
        "Document test results and prepare detailed reports",
        "Identify and report quality issues and deviations",
        "Participate in quality audits and regulatory inspections"
      ]
    },
    {
      id: 3,
      title: "Production Supervisor",
      department: "Manufacturing",
      location: "Mumbai, India",
      type: "Full-time",
      postedDate: "March 30, 2025",
      description: "As a Production Supervisor, you will oversee the daily manufacturing operations of our pharmaceutical production facility. You will ensure that production targets are met while maintaining quality standards and compliance with regulations.",
      requirements: [
        "Bachelor's degree in Pharmacy, Engineering, or related field",
        "5+ years of experience in pharmaceutical manufacturing",
        "Knowledge of GMP regulations and production processes",
        "Strong leadership and team management skills",
        "Experience with production planning and scheduling"
      ],
      responsibilities: [
        "Supervise production staff and coordinate daily manufacturing activities",
        "Monitor production processes to ensure efficiency and compliance",
        "Troubleshoot equipment issues and implement process improvements",
        "Ensure adherence to quality standards and regulatory requirements",
        "Maintain accurate production records and documentation"
      ]
    },
    {
      id: 4,
      title: "Marketing Manager",
      department: "Marketing & Sales",
      location: "Delhi, India",
      type: "Full-time",
      postedDate: "April 1, 2025",
      description: "We are looking for a dynamic Marketing Manager to develop and implement marketing strategies for our pharmaceutical products. You will work closely with the sales team to drive product awareness and market growth.",
      requirements: [
        "MBA with specialization in Marketing",
        "4+ years of experience in pharmaceutical marketing",
        "Strong understanding of pharmaceutical industry and market dynamics",
        "Excellent communication and presentation skills",
        "Experience with digital marketing and social media campaigns"
      ],
      responsibilities: [
        "Develop and implement marketing strategies for pharmaceutical products",
        "Conduct market research and competitor analysis",
        "Create marketing materials and content for various channels",
        "Collaborate with sales team to drive product awareness and market share",
        "Analyze marketing metrics and prepare performance reports"
      ]
    },
    {
      id: 5,
      title: "HR Executive",
      department: "Human Resources",
      location: "Mumbai, India",
      type: "Full-time",
      postedDate: "April 2, 2025",
      description: "As an HR Executive, you will support various HR functions including recruitment, onboarding, employee relations, and performance management. You will help create a positive work environment that promotes employee engagement and development.",
      requirements: [
        "Bachelor's degree in Human Resources, Business Administration, or related field",
        "2+ years of experience in HR roles",
        "Knowledge of HR practices and labor laws",
        "Strong interpersonal and communication skills",
        "Experience with HRIS and recruitment platforms"
      ],
      responsibilities: [
        "Support recruitment and onboarding processes",
        "Maintain employee records and HR documentation",
        "Assist in performance management and employee development initiatives",
        "Address employee queries and concerns",
        "Support HR projects and initiatives as needed"
      ]
    },
  ];

  const filteredJobs = jobListings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         job.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = locationFilter === "" || locationFilter === "All Locations" || 
                           job.location === locationFilter;
    return matchesSearch && matchesLocation;
  });

  const handleApplyJob = (jobId: number) => {
    setActiveJobId(jobId);
    setApplicationFormVisible(true);
    // Scroll to application form
    setTimeout(() => {
      document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setFormSubmitting(false);
      setApplicationFormVisible(false);
      setActiveJobId(null);
      
      toast({
        title: "Application Submitted",
        description: "Thank you for your application. We will get back to you soon.",
        duration: 5000,
      });
      
      // Reset form
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Careers at Ambica Pharma | Join Our Team</title>
        <meta name="description" content="Join the Ambica Pharma team. Explore our current job openings and career opportunities in pharmaceuticals. Apply today and be part of our mission to improve healthcare globally." />
        <meta name="keywords" content="pharmaceutical jobs, pharmaceutical careers, Ambica Pharma careers, job openings, pharmaceutical industry jobs, Mumbai jobs, Delhi jobs, research scientist jobs, quality control jobs" />
        <meta property="og:title" content="Careers at Ambica Pharma | Join Our Team" />
        <meta property="og:description" content="Join the Ambica Pharma team. Explore exciting career opportunities in the pharmaceutical industry." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ambicapharma.com/careers" />
        <link rel="canonical" href="https://www.ambicapharma.com/careers" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light text-white">
        <div className="container text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Careers at Ambica Pharma
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg max-w-2xl mx-auto mb-8"
          >
            Join our team of passionate professionals dedicated to improving healthcare worldwide.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-md mx-auto bg-white/10 backdrop-blur-sm p-2 rounded-full flex items-center"
          >
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
          </motion.div>
        </div>
      </section>
      
      {/* Company Overview */}
      <section className="py-12 bg-white dark:bg-gray-800/30">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-primary mb-6">
              About Ambica Pharma
            </h2>
            <div className="text-foreground/80 space-y-4">
              <p>
                Ambica Pharma has been accredited with ISO-9001:2008 and manufactures pharmaceutical formulations as per the guidelines of WHO. It is a GMP Certified Unit with total quality management and In-house Testing Laboratory.
              </p>
              <p>
                Our success is the result of focusing on our clients' top priorities such as quality products, on-time delivery, competitive rates, and unparalleled responsiveness. Johnlee manufactures more than 400 plus Pharmaceutical Formulation Products in the form of Tablets, Capsules, Dry syrup, Liquid Orals, and Sustained Release Preparations.
              </p>
              <p>
                The Company will also increasingly focus on high growth potential segments like Vaccines and Biogenetics.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Why Join Us */}
      <section className="py-16">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-display font-bold text-primary dark:text-primary-light mb-10 text-center"
          >
            Why Join Ambica Pharma?
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Reason 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md text-center transform transition-transform hover:scale-105"
            >
              <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary dark:text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary dark:text-primary-light mb-3">Innovative Environment</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Be part of a team that's constantly innovating and pushing boundaries in pharmaceutical research and development.
              </p>
            </motion.div>
            
            {/* Reason 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md text-center transform transition-transform hover:scale-105"
            >
              <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary dark:text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary dark:text-primary-light mb-3">Growth Opportunities</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We invest in our employees' professional development through training, mentorship, and career advancement pathways.
              </p>
            </motion.div>
            
            {/* Reason 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md text-center transform transition-transform hover:scale-105"
            >
              <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary dark:text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary dark:text-primary-light mb-3">Global Impact</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Make a difference in people's lives through our mission to provide high-quality, affordable healthcare solutions globally.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Job Categories and Listings */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/20">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-display font-bold text-primary dark:text-primary-light mb-10 text-center"
          >
            Current Opportunities
          </motion.h2>
          
          {/* Search and Filter */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md mb-8 flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input 
                type="text" 
                placeholder="Search positions..." 
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={locationFilter} onValueChange={setLocationFilter}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Filter by location" />
              </SelectTrigger>
              <SelectContent>
                {jobLocations.map((location) => (
                  <SelectItem key={location} value={location}>
                    {location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {/* Job Categories */}
            <div className="md:col-span-1">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-md sticky top-24"
              >
                <h3 className="text-lg font-semibold text-primary dark:text-primary-light mb-4">Job Categories</h3>
                <ul className="space-y-3">
                  {jobCategories.map((category) => (
                    <li 
                      key={category.name} 
                      className="flex justify-between items-center text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light cursor-pointer transition-colors"
                      onClick={() => setSearchTerm(category.name)}
                    >
                      <span>{category.name}</span>
                      <span className="bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light text-xs px-2 py-1 rounded-full">{category.count}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
            
            {/* Job Listings */}
            <div className="md:col-span-3">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                {filteredJobs.length > 0 ? (
                  filteredJobs.map((job) => (
                    <Accordion 
                      key={job.id} 
                      type="single" 
                      collapsible 
                      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
                    >
                      <AccordionItem value={`job-${job.id}`} className="border-none">
                        <AccordionTrigger className="p-6 hover:no-underline">
                          <div className="flex flex-col md:flex-row md:items-center justify-between w-full text-left">
                            <div>
                              <h3 className="text-xl font-semibold text-primary dark:text-primary-light">{job.title}</h3>
                              <div className="flex flex-wrap gap-2 mt-2">
                                <span className="inline-flex items-center text-xs text-gray-500 dark:text-gray-400">
                                  <Briefcase className="h-3 w-3 mr-1" /> {job.department}
                                </span>
                                <span className="inline-flex items-center text-xs text-gray-500 dark:text-gray-400">
                                  <MapPin className="h-3 w-3 mr-1" /> {job.location}
                                </span>
                                <span className="inline-flex items-center text-xs text-gray-500 dark:text-gray-400">
                                  <Calendar className="h-3 w-3 mr-1" /> {job.postedDate}
                                </span>
                              </div>
                            </div>
                            <span className="bg-secondary/10 text-secondary text-xs px-3 py-1 rounded-full mt-2 md:mt-0">
                              {job.type}
                            </span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pb-6 px-6">
                          <div className="space-y-4">
                            <p className="text-gray-600 dark:text-gray-300">{job.description}</p>
                            
                            <div>
                              <h4 className="font-semibold text-primary dark:text-primary-light mb-2">Requirements:</h4>
                              <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-1">
                                {job.requirements.map((req, idx) => (
                                  <li key={idx}>{req}</li>
                                ))}
                              </ul>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold text-primary dark:text-primary-light mb-2">Responsibilities:</h4>
                              <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-1">
                                {job.responsibilities.map((resp, idx) => (
                                  <li key={idx}>{resp}</li>
                                ))}
                              </ul>
                            </div>
                            
                            <div className="pt-4">
                              <Button 
                                className="bg-primary hover:bg-primary-light transition-colors"
                                onClick={() => handleApplyJob(job.id)}
                              >
                                Apply Now
                              </Button>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ))
                ) : (
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md text-center">
                    <AlertCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-2">No matching jobs found</h3>
                    <p className="text-gray-500 dark:text-gray-400">Try adjusting your search criteria or browse all our open positions.</p>
                    <Button 
                      variant="outline" 
                      className="mt-4"
                      onClick={() => {
                        setSearchTerm("");
                        setLocationFilter("");
                      }}
                    >
                      View all positions
                    </Button>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Application Form */}
      {applicationFormVisible && (
        <section id="application-form" className="py-16 bg-gray-50 dark:bg-gray-900/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto"
            >
              <Card className="border-none shadow-lg">
                <CardHeader className="bg-primary text-white rounded-t-lg">
                  <CardTitle className="text-2xl">
                    {activeJobId && `Apply for ${jobListings.find(job => job.id === activeJobId)?.title}`}
                  </CardTitle>
                  <CardDescription className="text-white/80">
                    Fill out the form below to submit your application
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmitApplication} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name <span className="text-red-500">*</span></Label>
                        <Input id="firstName" required placeholder="Enter your first name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name <span className="text-red-500">*</span></Label>
                        <Input id="lastName" required placeholder="Enter your last name" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
                        <Input id="email" type="email" required placeholder="Enter your email address" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number <span className="text-red-500">*</span></Label>
                        <Input id="phone" required placeholder="Enter your phone number" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="linkedin">LinkedIn Profile (Optional)</Label>
                      <Input id="linkedin" placeholder="https://linkedin.com/in/yourprofile" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="experience">Years of Experience <span className="text-red-500">*</span></Label>
                      <Select defaultValue="0-1">
                        <SelectTrigger>
                          <SelectValue placeholder="Select experience level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0-1">0-1 years</SelectItem>
                          <SelectItem value="1-3">1-3 years</SelectItem>
                          <SelectItem value="3-5">3-5 years</SelectItem>
                          <SelectItem value="5-10">5-10 years</SelectItem>
                          <SelectItem value="10+">10+ years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="coverLetter">Cover Letter <span className="text-red-500">*</span></Label>
                      <Textarea 
                        id="coverLetter" 
                        required 
                        placeholder="Tell us why you're interested in this position and what makes you a good fit" 
                        className="min-h-[120px]" 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Resume/CV <span className="text-red-500">*</span></Label>
                      <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center">
                        <Upload className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Drag and drop your resume here, or <span className="text-primary cursor-pointer">browse files</span>
                        </p>
                        <p className="text-xs text-gray-400 mt-2">
                          Accepted formats: PDF, DOCX, RTF (Max size: 5MB)
                        </p>
                        <Input 
                          id="resume" 
                          type="file" 
                          className="hidden" 
                          accept=".pdf,.docx,.rtf"
                          required 
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <input 
                          type="checkbox" 
                          id="terms" 
                          className="border border-gray-300 rounded h-4 w-4 mt-1 mr-2" 
                          required
                        />
                        <Label htmlFor="terms" className="text-sm text-gray-600 dark:text-gray-300">
                          I consent to Ambica Pharma processing my personal data for recruitment purposes. I understand that my data will be kept confidential and secure according to the company's privacy policy.
                        </Label>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-end">
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={() => setApplicationFormVisible(false)}
                      >
                        Cancel
                      </Button>
                      <Button 
                        type="submit" 
                        className="bg-primary hover:bg-primary-light transition-colors"
                        disabled={formSubmitting}
                      >
                        {formSubmitting ? (
                          <>
                            <span className="animate-spin mr-2">•</span>
                            Submitting...
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4 mr-2" />
                            Submit Application
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      )}
      
      {/* Benefits Section */}
      <section className="py-16">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-primary dark:text-primary-light mb-4">Employee Benefits</h2>
            <p className="text-foreground/80 max-w-3xl mx-auto">
              We value our employees and offer a comprehensive benefits package to ensure their well-being and job satisfaction.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Benefit 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all"
            >
              <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-primary dark:text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary dark:text-primary-light mb-2">Comprehensive Health Insurance</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Medical, dental, and vision coverage for employees and their dependents.
              </p>
            </motion.div>
            
            {/* Benefit 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all"
            >
              <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Clock className="h-7 w-7 text-primary dark:text-primary-light" />
              </div>
              <h3 className="text-lg font-semibold text-primary dark:text-primary-light mb-2">Flexible Work Schedule</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Work-life balance with flexible hours and remote work options when applicable.
              </p>
            </motion.div>
            
            {/* Benefit 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all"
            >
              <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-primary dark:text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary dark:text-primary-light mb-2">Professional Development</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Educational assistance, training programs, and career growth opportunities.
              </p>
            </motion.div>
            
            {/* Benefit 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all"
            >
              <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-primary dark:text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 11V9a2 2 0 00-2-2m2 4v4a2 2 0 104 0v-1m-4-3H9m2 0h4m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary dark:text-primary-light mb-2">Competitive Compensation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Attractive salary packages, performance bonuses, and stock options.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-secondary to-secondary-light text-white">
        <div className="container text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-display font-bold mb-6"
          >
            Ready to Join Our Team?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto mb-8"
          >
            Explore our current openings and take the next step in your career with Ambica Pharma.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button 
              className="bg-white text-secondary hover:bg-gray-100 transition-colors"
              onClick={() => document.getElementById('job-listings')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View All Job Openings
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
