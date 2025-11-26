
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
        <meta property="og:url" content="https://ambicapharma.net/careers" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Careers at Ambica Pharma | Join Our Team" />
        <meta name="twitter:description" content="Explore career opportunities at Ambica Pharma. Join our innovative team in pharmaceutical distribution and global exports." />
        <link rel="canonical" href="https://ambicapharma.net/careers" />
      </Helmet>

      {/* Hero Section - Enhanced with gradient */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/5 dark:from-primary/20 dark:via-secondary/10 dark:to-primary/10 relative overflow-hidden">
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4"
            >
              <BriefcaseBusiness className="h-4 w-4 inline mr-2" />
              Join Our Team
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary mb-6"
            >
              Careers at Ambica Pharma
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full"
            ></motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg md:text-xl text-foreground/80"
            >
              Join our team of dedicated professionals in pharmaceutical distribution and global exports. Build your career with us.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          {!selectedJob && !showApplication ? (
            <>

              {/* Culture Section */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center mb-20"
              >
                <motion.div
                  variants={itemVariants}
                  className="relative rounded-2xl overflow-hidden shadow-2xl border border-border group h-full min-h-[400px]"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                    alt="Ambica Pharma Team Collaboration"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white">
                    <h3 className="text-2xl font-bold mb-2 font-display">Our Culture</h3>
                    <p className="text-white/90 text-lg">Building the future of pharmaceutical distribution together.</p>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-6">
                  <div className="bg-card p-8 rounded-2xl shadow-lg border border-border">
                    <h2 className="text-3xl font-semibold mb-6 font-display text-primary">Our Company</h2>
                    <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                      <p>
                        Ambica Pharma is a leading distributor, trader, and exporter of pharmaceutical products with ISO-9001:2008 certification. We maintain the highest quality standards in all our operations.
                      </p>
                      <p>
                        Our success stems from our commitment to client priorities: quality products, on-time delivery, competitive rates, and exceptional responsiveness.
                      </p>
                      <p>
                        We distribute over 400 pharmaceutical formulation products including Tablets, Capsules, Dry syrup, Liquid Orals, and Sustained Release Preparations to markets around the world.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Benefits Section */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mb-20"
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold font-display mb-4">Why Join Ambica Pharma?</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    We offer more than just a job. We offer a career with purpose, growth, and a supportive community.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <motion.div variants={itemVariants} className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-all hover:-translate-y-1">
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <Globe className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-xl mb-2">Global Reach</h3>
                    <p className="text-muted-foreground">Be part of a company that distributes quality pharmaceuticals worldwide.</p>
                  </motion.div>

                  <motion.div variants={itemVariants} className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-all hover:-translate-y-1">
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <Building className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-xl mb-2">Established Network</h3>
                    <p className="text-muted-foreground">Work with a company that has strong partnerships with leading manufacturers.</p>
                  </motion.div>

                  <motion.div variants={itemVariants} className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-all hover:-translate-y-1">
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-xl mb-2">Collaborative Team</h3>
                    <p className="text-muted-foreground">Join a supportive team that values your contributions and ideas.</p>
                  </motion.div>

                  <motion.div variants={itemVariants} className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-all hover:-translate-y-1">
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-xl mb-2">Growth & Learning</h3>
                    <p className="text-muted-foreground">Develop your skills and advance your career in international trade.</p>
                  </motion.div>
                </div>
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
      </section >
    </>
  );
};

export default Careers;
