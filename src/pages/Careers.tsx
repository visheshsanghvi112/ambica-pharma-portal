
import React, { useState } from 'react';
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
import { ArrowLeft, ArrowRight, BriefcaseBusiness, CalendarDays, Users, MapPin, CircleDollarSign, Clock, GraduationCap, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

// Job details data
const jobsData = [
  {
    id: "sales-rep",
    title: "Sales Representative",
    location: "Mumbai, Maharashtra",
    type: "Full-time",
    salary: "₹4.5-6.5 LPA based on experience",
    department: "Sales",
    experience: "2-5 years",
    education: "Bachelor's degree in Pharmacy, Life Sciences, or related field",
    description: "We are seeking an enthusiastic Sales Representative to promote our pharmaceutical products to healthcare professionals and build strong relationships with customers in the assigned territory.",
    responsibilities: [
      "Develop and maintain relationships with healthcare professionals to promote company products",
      "Achieve sales targets and market share objectives in assigned territory",
      "Provide product information and educational materials to healthcare professionals",
      "Organize and conduct product presentations to groups of doctors and pharmacists",
      "Track and report competitive activities and market trends",
      "Maintain accurate records of all sales activities and customer interactions",
      "Participate in medical conferences, seminars, and other professional gatherings"
    ],
    requirements: [
      "Bachelor's degree in Pharmacy, Life Sciences, or related field",
      "2-5 years of pharmaceutical sales experience",
      "Strong understanding of pharmaceutical products and medical terminology",
      "Excellent communication and presentation skills",
      "Valid driver's license and willingness to travel within the assigned territory",
      "Proficiency in MS Office and CRM software",
      "Strong organizational and time management skills"
    ],
    benefits: [
      "Competitive salary and performance-based incentives",
      "Health insurance coverage for you and your family",
      "Professional development opportunities",
      "Company vehicle and mobile phone",
      "Retirement benefits",
      "Paid time off and holidays"
    ]
  },
  {
    id: "quality-control",
    title: "Quality Control Analyst",
    location: "Mumbai, Maharashtra",
    type: "Full-time",
    salary: "₹5-7 LPA based on experience",
    department: "Quality Assurance",
    experience: "3-6 years",
    education: "M.Sc or Ph.D. in Chemistry, Microbiology, or related field",
    description: "We are looking for a detail-oriented Quality Control Analyst to ensure our pharmaceutical products meet all quality and regulatory standards through testing and analysis.",
    responsibilities: [
      "Perform chemical and microbiological testing of raw materials, in-process samples, and finished products",
      "Analyze test data and prepare comprehensive reports",
      "Calibrate and maintain laboratory equipment",
      "Implement and follow Good Laboratory Practices (GLP) and Good Manufacturing Practices (GMP)",
      "Document all testing procedures and results accurately",
      "Investigate product quality deviations and recommend corrective actions",
      "Participate in internal audits and regulatory inspections"
    ],
    requirements: [
      "M.Sc or Ph.D. in Chemistry, Microbiology, or related field",
      "3-6 years of experience in pharmaceutical quality control",
      "In-depth knowledge of analytical techniques and testing methods",
      "Familiarity with pharmacopoeial standards (IP, USP, BP, EP)",
      "Experience with HPLC, GC, UV-Vis, FTIR, and other analytical instruments",
      "Understanding of regulatory requirements (FDA, WHO, ICH)",
      "Strong analytical and problem-solving skills"
    ],
    benefits: [
      "Competitive salary and annual bonus",
      "Comprehensive health insurance",
      "Professional development and training programs",
      "Subsidized meals at company cafeteria",
      "Retirement benefits",
      "Employee wellness programs",
      "Paid time off and holidays"
    ]
  },
  {
    id: "production-supervisor",
    title: "Production Supervisor",
    location: "Bhiwandi, Maharashtra",
    type: "Full-time",
    salary: "₹6-8 LPA based on experience",
    department: "Manufacturing",
    experience: "5-8 years",
    education: "B.Pharm or M.Pharm degree",
    description: "We are seeking an experienced Production Supervisor to oversee our pharmaceutical manufacturing operations, ensuring efficient production processes while maintaining quality standards and regulatory compliance.",
    responsibilities: [
      "Supervise production staff and coordinate manufacturing activities",
      "Plan and schedule production to meet delivery deadlines",
      "Ensure compliance with GMP, safety regulations, and company policies",
      "Monitor production processes and make adjustments to improve efficiency",
      "Troubleshoot equipment issues and coordinate maintenance activities",
      "Review production documentation for accuracy and completeness",
      "Train production staff on procedures, safety protocols, and equipment operation",
      "Collaborate with quality control to address product quality issues"
    ],
    requirements: [
      "B.Pharm or M.Pharm degree",
      "5-8 years of experience in pharmaceutical manufacturing",
      "In-depth knowledge of GMP regulations and production processes",
      "Strong leadership and team management skills",
      "Experience with production planning and scheduling",
      "Excellent problem-solving abilities",
      "Good understanding of equipment validation and maintenance",
      "Proficiency in production management software"
    ],
    benefits: [
      "Competitive salary and performance bonuses",
      "Health and life insurance coverage",
      "Transportation allowance",
      "Professional development opportunities",
      "Retirement benefits",
      "Subsidized meals",
      "Paid time off and holidays",
      "Employee recognition programs"
    ]
  },
  {
    id: "research-scientist",
    title: "Research Scientist",
    location: "Mumbai, Maharashtra",
    type: "Full-time",
    salary: "₹7-9 LPA based on experience",
    department: "Research & Development",
    experience: "4-7 years",
    education: "Ph.D. in Pharmaceutical Sciences, Medicinal Chemistry, or related field",
    description: "We are looking for an innovative Research Scientist to join our R&D team and contribute to the development of new pharmaceutical formulations and improvement of existing products.",
    responsibilities: [
      "Design and conduct experiments to develop new drug formulations",
      "Optimize existing formulations to improve efficacy and stability",
      "Analyze experimental data and prepare detailed reports",
      "Develop analytical methods for product characterization",
      "Collaborate with cross-functional teams throughout product development",
      "Stay updated on scientific developments and regulatory requirements",
      "Prepare technical documentation for patent applications",
      "Contribute to scientific publications and presentations"
    ],
    requirements: [
      "Ph.D. in Pharmaceutical Sciences, Medicinal Chemistry, or related field",
      "4-7 years of experience in pharmaceutical research",
      "Strong background in drug formulation and analytical techniques",
      "Experience with various dosage forms (tablets, capsules, injectables, etc.)",
      "Knowledge of regulatory guidelines for pharmaceutical development",
      "Excellent analytical and problem-solving skills",
      "Good scientific writing and communication abilities",
      "Experience with lab equipment and analytical software"
    ],
    benefits: [
      "Competitive salary and research incentives",
      "Comprehensive health insurance",
      "Opportunities for publishing research and attending conferences",
      "Professional development programs",
      "Access to state-of-the-art research facilities",
      "Retirement benefits",
      "Flexible work schedule",
      "Paid time off and holidays"
    ]
  },
  {
    id: "medical-rep",
    title: "Medical Representative",
    location: "Multiple Locations",
    type: "Full-time",
    salary: "₹3.5-5 LPA plus incentives",
    department: "Marketing",
    experience: "1-3 years",
    education: "Bachelor's degree in Life Sciences or Pharmacy",
    description: "We are seeking dynamic Medical Representatives to promote our pharmaceutical products to healthcare professionals, build and maintain customer relationships, and achieve sales targets in assigned territories.",
    responsibilities: [
      "Visit doctors, pharmacists, and healthcare facilities to promote company products",
      "Conduct product demonstrations and provide scientific information",
      "Organize and participate in medical conferences and events",
      "Monitor competitor activities in the assigned territory",
      "Collect market intelligence and customer feedback",
      "Meet or exceed monthly and quarterly sales targets",
      "Maintain accurate records of all sales activities",
      "Develop and implement territory-specific sales strategies"
    ],
    requirements: [
      "Bachelor's degree in Life Sciences or Pharmacy",
      "1-3 years of experience in pharmaceutical sales (fresh graduates with strong communication skills may also apply)",
      "Knowledge of medical terminology and pharmaceutical products",
      "Excellent communication and interpersonal skills",
      "Valid driver's license and willingness to travel",
      "Goal-oriented and self-motivated attitude",
      "Basic computer skills",
      "Fluency in English and local languages"
    ],
    benefits: [
      "Competitive base salary plus performance incentives",
      "Health insurance coverage",
      "Travel allowance",
      "Mobile phone allowance",
      "Professional development opportunities",
      "Recognition programs for high performers",
      "Retirement benefits",
      "Paid time off and holidays"
    ]
  },
  {
    id: "business-dev",
    title: "Business Development Manager",
    location: "Mumbai, Maharashtra",
    type: "Full-time",
    salary: "₹10-15 LPA based on experience",
    department: "Business Development",
    experience: "7-10 years",
    education: "MBA with B.Pharm or M.Pharm background",
    description: "We are looking for an experienced Business Development Manager to identify and develop new business opportunities, negotiate partnerships and licensing agreements, and contribute to the company's growth strategy.",
    responsibilities: [
      "Identify and evaluate new business opportunities in the pharmaceutical sector",
      "Develop and implement business development strategies",
      "Negotiate licensing, partnership, and distribution agreements",
      "Build and maintain relationships with potential business partners",
      "Conduct market research and competitor analysis",
      "Prepare business cases and financial projections for new ventures",
      "Collaborate with cross-functional teams to implement new initiatives",
      "Represent the company at industry events and conferences"
    ],
    requirements: [
      "MBA with B.Pharm or M.Pharm background",
      "7-10 years of experience in pharmaceutical business development",
      "Strong understanding of the pharmaceutical industry and market dynamics",
      "Experience in negotiating and structuring business deals",
      "Excellent analytical and financial modeling skills",
      "Strong communication and presentation abilities",
      "Strategic thinking and business acumen",
      "Willingness to travel domestically and internationally"
    ],
    benefits: [
      "Competitive salary and performance bonuses",
      "Comprehensive health and life insurance",
      "Stock options",
      "International travel opportunities",
      "Executive development programs",
      "Retirement benefits",
      "Flexible work arrangements",
      "Paid time off and holidays"
    ]
  }
];

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

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [showApplication, setShowApplication] = useState(false);
  
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
    setShowApplication(false);
    setSelectedJob(null);
  }

  const selectedJobData = jobsData.find(job => job.id === selectedJob);

  return (
    <>
      <Helmet>
        <title>Careers at Ambica Pharma | Join Our Team</title>
        <meta name="description" content="Explore career opportunities at Ambica Pharma. Join our innovative team and make a difference in the pharmaceutical industry." />
        <meta name="keywords" content="pharmaceutical careers, Ambica Pharma jobs, pharma employment, Mumbai pharmaceutical jobs, medicine jobs" />
        <meta property="og:title" content="Careers at Ambica Pharma | Join Our Team" />
        <meta property="og:description" content="Explore career opportunities at Ambica Pharma. Join our innovative team and contribute to global healthcare excellence." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ambicapharma.com/careers" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Careers at Ambica Pharma | Join Our Team" />
        <meta name="twitter:description" content="Explore career opportunities at Ambica Pharma. Join our innovative team and make a difference in the pharmaceutical industry." />
        <link rel="canonical" href="https://www.ambicapharma.com/careers" />
      </Helmet>
      
      <section className="py-12 md:py-24 bg-gradient-to-b from-background to-secondary/5">
        <div className="container">
          {!selectedJob ? (
            <>
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
                  {jobsData.map((job) => (
                    <motion.div 
                      key={job.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      viewport={{ once: true }}
                      className="bg-card p-6 rounded-lg border border-border hover:shadow-md transition-shadow"
                    >
                      <h3 className="font-semibold text-lg mb-2">{job.title}</h3>
                      <div className="flex items-center text-sm text-muted-foreground mb-1">
                        <MapPin className="w-4 h-4 mr-2" /> {job.location}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground mb-4">
                        <Clock className="w-4 h-4 mr-2" /> {job.type}
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full"
                        onClick={() => setSelectedJob(job.id)}
                      >
                        View Details
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </>
          ) : showApplication ? (
            <div className="max-w-4xl mx-auto bg-primary-foreground dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-border">
              <div className="p-8 md:p-12">
                <div className="flex items-center mb-8">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => setShowApplication(false)} 
                    className="mr-4"
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" /> Back
                  </Button>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary font-display">
                    Apply for {selectedJobData?.title}
                  </h2>
                </div>
                
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
                            <Select onValueChange={field.onChange} defaultValue={selectedJobData?.title}>
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
                    
                    <div className="flex justify-end gap-4">
                      <Button type="button" variant="outline" onClick={() => setShowApplication(false)}>
                        Cancel
                      </Button>
                      <Button type="submit">Submit Application</Button>
                    </div>
                  </form>
                </Form>
              </div>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto bg-primary-foreground dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-border">
              <div className="p-8 md:p-12">
                <div className="flex items-center mb-8">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => setSelectedJob(null)} 
                    className="mr-4"
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" /> Back to Jobs
                  </Button>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary font-display">
                    {selectedJobData?.title}
                  </h2>
                </div>
                
                {selectedJobData && (
                  <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <Card>
                        <CardContent className="pt-6">
                          <div className="flex items-center gap-3">
                            <MapPin className="text-primary h-5 w-5" />
                            <div>
                              <p className="text-sm font-medium">Location</p>
                              <p className="text-sm text-muted-foreground">{selectedJobData.location}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardContent className="pt-6">
                          <div className="flex items-center gap-3">
                            <BriefcaseBusiness className="text-primary h-5 w-5" />
                            <div>
                              <p className="text-sm font-medium">Department</p>
                              <p className="text-sm text-muted-foreground">{selectedJobData.department}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardContent className="pt-6">
                          <div className="flex items-center gap-3">
                            <Clock className="text-primary h-5 w-5" />
                            <div>
                              <p className="text-sm font-medium">Type</p>
                              <p className="text-sm text-muted-foreground">{selectedJobData.type}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardContent className="pt-6">
                          <div className="flex items-center gap-3">
                            <Users className="text-primary h-5 w-5" />
                            <div>
                              <p className="text-sm font-medium">Experience</p>
                              <p className="text-sm text-muted-foreground">{selectedJobData.experience}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardContent className="pt-6">
                          <div className="flex items-center gap-3">
                            <GraduationCap className="text-primary h-5 w-5" />
                            <div>
                              <p className="text-sm font-medium">Education</p>
                              <p className="text-sm text-muted-foreground">{selectedJobData.education}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardContent className="pt-6">
                          <div className="flex items-center gap-3">
                            <CircleDollarSign className="text-primary h-5 w-5" />
                            <div>
                              <p className="text-sm font-medium">Salary</p>
                              <p className="text-sm text-muted-foreground">{selectedJobData.salary}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <Tabs defaultValue="description" className="w-full">
                      <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="description">Description</TabsTrigger>
                        <TabsTrigger value="responsibilities">Responsibilities</TabsTrigger>
                        <TabsTrigger value="requirements">Requirements</TabsTrigger>
                        <TabsTrigger value="benefits">Benefits</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="description" className="p-4 bg-card rounded-md mt-2">
                        <p className="text-foreground/90">{selectedJobData.description}</p>
                      </TabsContent>
                      
                      <TabsContent value="responsibilities" className="p-4 bg-card rounded-md mt-2">
                        <ul className="space-y-2">
                          {selectedJobData.responsibilities.map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                              <span className="text-foreground/90">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </TabsContent>
                      
                      <TabsContent value="requirements" className="p-4 bg-card rounded-md mt-2">
                        <ul className="space-y-2">
                          {selectedJobData.requirements.map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                              <span className="text-foreground/90">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </TabsContent>
                      
                      <TabsContent value="benefits" className="p-4 bg-card rounded-md mt-2">
                        <ul className="space-y-2">
                          {selectedJobData.benefits.map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                              <span className="text-foreground/90">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </TabsContent>
                    </Tabs>
                    
                    <div className="flex justify-center mt-8">
                      <Button onClick={() => setShowApplication(true)} className="px-8">
                        Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
          
          {!selectedJob && (
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
          )}
        </div>
      </section>
    </>
  );
};

export default Careers;
