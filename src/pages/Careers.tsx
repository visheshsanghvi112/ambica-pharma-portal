
import React from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Careers = () => {
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
    },
    {
      id: 2,
      title: "Quality Control Analyst",
      department: "Quality Assurance",
      location: "Pune, India",
      type: "Full-time",
      postedDate: "March 28, 2025",
    },
    {
      id: 3,
      title: "Production Supervisor",
      department: "Manufacturing",
      location: "Mumbai, India",
      type: "Full-time",
      postedDate: "March 30, 2025",
    },
    {
      id: 4,
      title: "Marketing Manager",
      department: "Marketing & Sales",
      location: "Delhi, India",
      type: "Full-time",
      postedDate: "April 1, 2025",
    },
    {
      id: 5,
      title: "HR Executive",
      department: "Human Resources",
      location: "Mumbai, India",
      type: "Full-time",
      postedDate: "April 2, 2025",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Careers | Ambica Pharma</title>
        <meta name="description" content="Join the Ambica Pharma team. Explore our current job openings and career opportunities." />
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
            />
            <Button className="rounded-full bg-white text-primary hover:bg-white/90">
              <Search className="h-4 w-4" />
            </Button>
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
          
          <div className="grid md:grid-cols-4 gap-8">
            {/* Job Categories */}
            <div className="md:col-span-1">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-md animate-fade-in" style={{ animationDelay: "100ms" }}>
                <h3 className="text-lg font-semibold text-primary dark:text-primary-light mb-4">Job Categories</h3>
                <ul className="space-y-3">
                  {jobCategories.map((category) => (
                    <li key={category.name} className="flex justify-between items-center text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light cursor-pointer transition-colors">
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
                {jobListings.map((job) => (
                  <div key={job.id} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex flex-wrap justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold text-primary dark:text-primary-light">{job.title}</h3>
                      <span className="bg-secondary/10 text-secondary text-xs px-3 py-1 rounded-full">{job.type}</span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                      <div>
                        <span className="text-sm text-gray-500 dark:text-gray-400 block">Department</span>
                        <span className="text-gray-700 dark:text-gray-300">{job.department}</span>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500 dark:text-gray-400 block">Location</span>
                        <span className="text-gray-700 dark:text-gray-300">{job.location}</span>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500 dark:text-gray-400 block">Posted</span>
                        <span className="text-gray-700 dark:text-gray-300">{job.postedDate}</span>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <Button className="bg-primary hover:bg-primary-light transition-colors">View Details</Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Employee Testimonials */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-display font-bold text-primary dark:text-primary-light mb-10 text-center animate-fade-in">What Our Employees Say</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md relative animate-fade-in" style={{ animationDelay: "100ms" }}>
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="rounded-full w-12 h-12 overflow-hidden border-4 border-white dark:border-gray-800">
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Employee" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-gray-600 dark:text-gray-400 italic mb-4">
                  "Working at Ambica Pharma has been a rewarding experience. The company truly values innovation and provides a supportive environment for professional growth."
                </p>
                <h4 className="font-semibold text-primary dark:text-primary-light">Priya Sharma</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">Senior Research Scientist</p>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md relative animate-fade-in" style={{ animationDelay: "200ms" }}>
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="rounded-full w-12 h-12 overflow-hidden border-4 border-white dark:border-gray-800">
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Employee" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-gray-600 dark:text-gray-400 italic mb-4">
                  "The collaborative culture at Ambica Pharma makes it a great place to work. I've had the opportunity to work on challenging projects with talented professionals."
                </p>
                <h4 className="font-semibold text-primary dark:text-primary-light">Rahul Patel</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">Production Manager</p>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md relative animate-fade-in" style={{ animationDelay: "300ms" }}>
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="rounded-full w-12 h-12 overflow-hidden border-4 border-white dark:border-gray-800">
                  <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Employee" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-gray-600 dark:text-gray-400 italic mb-4">
                  "Ambica Pharma offers excellent work-life balance and professional development opportunities. I've grown so much in my career since joining the company."
                </p>
                <h4 className="font-semibold text-primary dark:text-primary-light">Anita Desai</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">Marketing Executive</p>
              </div>
            </div>
          </div>
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
