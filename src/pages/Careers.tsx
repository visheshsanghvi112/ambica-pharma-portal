
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ArrowRight, BriefcaseBusiness, CalendarDays, Users, MapPin, CircleDollarSign, Clock, GraduationCap, CheckCircle2, FileText, Globe, Building } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIsMobile } from "@/hooks/use-mobile";
import CareerApplicationForm from "@/components/CareerApplicationForm";

// Single job data for Export Billing Officer
const jobData = {
  id: "export-billing",
  title: "Export Billing Officer",
  location: "Mumbai, Maharashtra",
  type: "Full-time",
  salary: "₹5-7 LPA based on experience",
  department: "Export & Documentation",
  experience: "3-5 years",
  education: "Bachelor's degree in Commerce, International Business, or related field",
  description: "We are seeking a detail-oriented Export Billing Officer to join our team at Ambica Pharma. The ideal candidate will have strong knowledge of export documentation, shipping procedures, and compliance requirements to ensure smooth processing of our international shipments.",
  responsibilities: [
    "Prepare and process all export documentation including invoices, packing lists, and certificates of origin",
    "Coordinate with freight forwarders and shipping lines to ensure timely delivery of goods",
    "Verify shipping documents for accuracy and compliance with international trade regulations",
    "Process Letters of Credit and handle document presentations to banks",
    "Maintain accurate records of all export transactions and documentation",
    "Liaise with customs brokers to ensure smooth customs clearance",
    "Stay updated on international trade regulations and documentation requirements",
    "Coordinate with the finance department for billing and payment reconciliation",
    "Assist with troubleshooting shipping and documentation issues",
    "Generate regular reports on export activities and performance metrics"
  ],
  requirements: [
    "Bachelor's degree in Commerce, International Business, or related field",
    "3-5 years of experience in export documentation and billing",
    "Strong knowledge of international trade documentation and procedures",
    "Familiarity with export regulations, Incoterms, and customs requirements",
    "Experience with Letters of Credit and banking procedures",
    "Proficiency in MS Office and export documentation software",
    "Excellent attention to detail and organizational skills",
    "Strong communication skills and ability to work with international partners",
    "Knowledge of pharmaceutical export regulations is a plus",
    "Ability to work under pressure and meet tight deadlines"
  ],
  benefits: [
    "Competitive salary package based on experience",
    "Health insurance coverage for you and your family",
    "Professional development opportunities",
    "Performance-based incentives",
    "Work in a dynamic and growing international business",
    "Supportive work environment with experienced team members",
    "Opportunities for career advancement in international trade"
  ]
};

// Array of open positions
const openPositions = [
  { id: "export-billing", title: "Export Billing Officer" }
];

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [showApplication, setShowApplication] = useState(false);
  const isMobile = useIsMobile();
  const { toast } = useToast();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100 
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Careers at Ambica Pharma | Join Our Team</title>
        <meta name="description" content="Explore career opportunities at Ambica Pharma. Join our innovative team in pharmaceutical distribution, trading, and export." />
        <meta name="keywords" content="pharmaceutical careers, Ambica Pharma jobs, pharma distribution jobs, export billing jobs, international trade jobs" />
        <meta property="og:title" content="Careers at Ambica Pharma | Join Our Team" />
        <meta property="og:description" content="Explore career opportunities at Ambica Pharma. Join our innovative team in pharmaceutical distribution and exports." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ambicapharma.com/careers" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Careers at Ambica Pharma | Join Our Team" />
        <meta name="twitter:description" content="Explore career opportunities at Ambica Pharma. Join our innovative team in pharmaceutical distribution and global exports." />
        <link rel="canonical" href="https://www.ambicapharma.com/careers" />
      </Helmet>
      
      <section className="py-12 md:py-20 bg-gradient-to-b from-background to-secondary/5">
        <div className="container px-4 md:px-6">
          {!selectedJob && !showApplication ? (
            <>
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto text-center mb-12"
              >
                <h1 className="text-3xl md:text-5xl font-bold mb-4 font-display bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">Careers at Ambica Pharma</h1>
                <p className="text-muted-foreground text-lg">Join our team of dedicated professionals in pharmaceutical distribution and global exports.</p>
              </motion.div>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center mb-16"
              >
                <motion.div variants={itemVariants}>
                  <h2 className="text-2xl md:text-3xl font-semibold mb-6 font-display">Why Work With Us?</h2>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-full mt-1">
                        <Globe className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">Global Reach</h3>
                        <p className="text-muted-foreground">Be part of a company that distributes quality pharmaceuticals worldwide.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-full mt-1">
                        <Building className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">Established Network</h3>
                        <p className="text-muted-foreground">Work with a company that has strong partnerships with leading manufacturers.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-full mt-1">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">Collaborative Environment</h3>
                        <p className="text-muted-foreground">Join a supportive team that values your contributions and ideas.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-full mt-1">
                        <GraduationCap className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">Growth Opportunities</h3>
                        <p className="text-muted-foreground">Develop your skills and advance your career in international trade and distribution.</p>
                      </div>
                    </li>
                  </ul>
                </motion.div>
                
                <motion.div 
                  variants={itemVariants}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-border"
                >
                  <h2 className="text-2xl font-semibold mb-4 font-display">Our Company</h2>
                  <p className="mb-4">
                    Ambica Pharma is a leading distributor, trader, and exporter of pharmaceutical products with ISO-9001:2008 certification. We maintain the highest quality standards in all our operations.
                  </p>
                  <p className="mb-4">
                    Our success stems from our commitment to client priorities: quality products, on-time delivery, competitive rates, and exceptional responsiveness.
                  </p>
                  <p className="mb-4">
                    We distribute over 400 pharmaceutical formulation products including Tablets, Capsules, Dry syrup, Liquid Orals, and Sustained Release Preparations to markets around the world.
                  </p>
                  <p>
                    We continue to expand our focus into high-growth potential segments, strengthening our global position in pharmaceutical distribution.
                  </p>
                </motion.div>
              </motion.div>
              
              <div className="max-w-5xl mx-auto mb-16">
                <motion.h2 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl md:text-3xl font-semibold mb-8 text-center font-display"
                >
                  Current Opening
                </motion.h2>
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="max-w-xl mx-auto"
                >
                  <motion.div 
                    variants={itemVariants}
                    className="bg-card p-6 rounded-lg border border-border hover:shadow-md transition-all hover:translate-y-[-5px]"
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="p-2 bg-primary/10 rounded-full">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-semibold text-xl">{jobData.title}</h3>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-2" /> {jobData.location}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Clock className="w-4 h-4 mr-2" /> {jobData.type}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <CircleDollarSign className="w-4 h-4 mr-2" /> {jobData.salary}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <BriefcaseBusiness className="w-4 h-4 mr-2" /> {jobData.department}
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-5 text-sm">
                      {jobData.description}
                    </p>
                    
                    <Button 
                      variant="default" 
                      size="default" 
                      className="w-full bg-primary hover:bg-primary/90 transition-colors"
                      onClick={() => setSelectedJob(jobData.id)}
                    >
                      View Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </>
          ) : showApplication ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto bg-primary-foreground dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-border"
            >
              <div className="p-6 md:p-12">
                <div className="flex items-center mb-8">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => setShowApplication(false)} 
                    className="mr-4"
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" /> Back
                  </Button>
                  <h2 className="text-xl md:text-3xl font-bold text-primary font-display">
                    Apply for {jobData.title}
                  </h2>
                </div>
                
                <CareerApplicationForm openPositions={openPositions} />
                
              </div>
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="max-w-4xl mx-auto bg-primary-foreground dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-border"
            >
              <div className="p-6 md:p-12">
                <div className="flex items-center mb-8">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => setSelectedJob(null)} 
                    className="mr-4"
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" /> Back to Careers
                  </Button>
                  <h2 className="text-xl md:text-3xl font-bold text-primary font-display truncate">
                    {jobData.title}
                  </h2>
                </div>
                
                <div className="space-y-8">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex items-center gap-3">
                          <MapPin className="text-primary h-5 w-5" />
                          <div>
                            <p className="text-sm font-medium">Location</p>
                            <p className="text-sm text-muted-foreground">{jobData.location}</p>
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
                            <p className="text-sm text-muted-foreground">{jobData.department}</p>
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
                            <p className="text-sm text-muted-foreground">{jobData.type}</p>
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
                            <p className="text-sm text-muted-foreground">{jobData.experience}</p>
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
                            <p className="text-sm text-muted-foreground">{jobData.education}</p>
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
                            <p className="text-sm text-muted-foreground">{jobData.salary}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <Tabs defaultValue="description" className="w-full">
                    <TabsList className={`grid w-full ${isMobile ? 'grid-cols-2 gap-1' : 'grid-cols-4'}`}>
                      <TabsTrigger value="description">Description</TabsTrigger>
                      <TabsTrigger value="responsibilities">Responsibilities</TabsTrigger>
                      <TabsTrigger value="requirements">Requirements</TabsTrigger>
                      <TabsTrigger value="benefits">Benefits</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="description" className="p-4 bg-card rounded-md mt-2">
                      <p className="text-foreground/90">{jobData.description}</p>
                    </TabsContent>
                    
                    <TabsContent value="responsibilities" className="p-4 bg-card rounded-md mt-2">
                      <ul className="space-y-2">
                        {jobData.responsibilities.map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <span className="text-foreground/90">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </TabsContent>
                    
                    <TabsContent value="requirements" className="p-4 bg-card rounded-md mt-2">
                      <ul className="space-y-2">
                        {jobData.requirements.map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <span className="text-foreground/90">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </TabsContent>
                    
                    <TabsContent value="benefits" className="p-4 bg-card rounded-md mt-2">
                      <ul className="space-y-2">
                        {jobData.benefits.map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <span className="text-foreground/90">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </TabsContent>
                  </Tabs>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex justify-center mt-8"
                  >
                    <Button 
                      onClick={() => setShowApplication(true)} 
                      className="px-8 bg-primary hover:bg-primary/90 transition-colors"
                    >
                      Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
          
          {!selectedJob && !showApplication && (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="max-w-4xl mx-auto mt-12"
            >
              <div className="bg-card p-8 rounded-xl shadow-md border border-border">
                <div className="flex items-center justify-center mb-6">
                  <div className="p-3 bg-primary/10 rounded-full mr-4">
                    <FileText className="h-7 w-7 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-center font-display">Submit Your Application</h2>
                </div>
                
                <p className="text-center mb-8 text-muted-foreground">
                  Interested in joining our team but don't see a position that matches your skills? 
                  Send us your resume and we'll keep it on file for future opportunities.
                </p>
                
                <div className="flex justify-center">
                  <Button 
                    onClick={() => setShowApplication(true)} 
                    className="px-8 py-6 bg-primary hover:bg-primary/90 transition-colors text-lg"
                  >
                    Apply for Export Billing Officer <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
};

export default Careers;
