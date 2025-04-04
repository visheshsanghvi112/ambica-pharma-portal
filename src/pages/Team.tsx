
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Linkedin, Twitter, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

// Team member type
interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    email?: string;
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
  department: "leadership" | "research" | "sales" | "operations";
}

// Sample team data
const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Dr. Rajesh Kumar",
    role: "CEO & Founder",
    bio: "Dr. Kumar has over 25 years of experience in the pharmaceutical industry with a PhD in Pharmacology from IIT Bombay.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    social: {
      email: "rajesh.kumar@ambicapharma.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
    department: "leadership"
  },
  {
    id: 2,
    name: "Dr. Priya Sharma",
    role: "Chief Scientific Officer",
    bio: "Dr. Sharma leads our research initiatives with her expertise in drug development and clinical research. Former research lead at AstraZeneca.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    social: {
      email: "priya.sharma@ambicapharma.com",
      linkedin: "https://linkedin.com",
    },
    department: "leadership"
  },
  {
    id: 3,
    name: "Vikram Singh",
    role: "Head of Operations",
    bio: "Vikram oversees all manufacturing operations and ensures our facilities meet international standards. MBA from IIM Ahmedabad.",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    social: {
      email: "vikram.singh@ambicapharma.com",
      linkedin: "https://linkedin.com",
    },
    department: "operations"
  },
  {
    id: 4,
    name: "Dr. Ananya Patel",
    role: "Research Director",
    bio: "Leading our development of innovative pharmaceutical solutions with a focus on sustainable manufacturing processes.",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    social: {
      email: "ananya.patel@ambicapharma.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
    department: "research"
  },
  {
    id: 5,
    name: "Rahul Verma",
    role: "Global Sales Director",
    bio: "Rahul has expanded our market presence to 45+ countries with strategic partnerships and distribution networks.",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
    social: {
      email: "rahul.verma@ambicapharma.com",
      linkedin: "https://linkedin.com",
      website: "https://rahulverma.com",
    },
    department: "sales"
  },
  {
    id: 6,
    name: "Neha Gupta",
    role: "Quality Assurance Manager",
    bio: "Ensures all our products meet the highest international quality standards and compliance requirements.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    social: {
      email: "neha.gupta@ambicapharma.com",
      linkedin: "https://linkedin.com",
    },
    department: "operations"
  },
  {
    id: 7,
    name: "Dr. Amit Joshi",
    role: "Senior Researcher",
    bio: "Specializes in formulation development with a particular focus on controlled-release medications.",
    image: "https://randomuser.me/api/portraits/men/42.jpg",
    social: {
      email: "amit.joshi@ambicapharma.com",
      linkedin: "https://linkedin.com",
    },
    department: "research"
  },
  {
    id: 8,
    name: "Meera Reddy",
    role: "Marketing Director",
    bio: "Developed our brand strategy and manages our global marketing initiatives across digital and traditional channels.",
    image: "https://randomuser.me/api/portraits/women/75.jpg",
    social: {
      email: "meera.reddy@ambicapharma.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
    department: "sales"
  }
];

// Team member card component
const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative overflow-hidden group">
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
          <div className="flex space-x-3">
            {member.social.email && (
              <a href={`mailto:${member.social.email}`} className="bg-white/90 p-2 rounded-full hover:bg-primary hover:text-white transition-colors duration-300">
                <Mail className="h-4 w-4" />
              </a>
            )}
            {member.social.linkedin && (
              <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="bg-white/90 p-2 rounded-full hover:bg-primary hover:text-white transition-colors duration-300">
                <Linkedin className="h-4 w-4" />
              </a>
            )}
            {member.social.twitter && (
              <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="bg-white/90 p-2 rounded-full hover:bg-primary hover:text-white transition-colors duration-300">
                <Twitter className="h-4 w-4" />
              </a>
            )}
            {member.social.website && (
              <a href={member.social.website} target="_blank" rel="noopener noreferrer" className="bg-white/90 p-2 rounded-full hover:bg-primary hover:text-white transition-colors duration-300">
                <Globe className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{member.name}</h3>
        <p className="text-primary font-medium mb-3">{member.role}</p>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{member.bio}</p>
      </div>
    </motion.div>
  );
};

// Filter buttons for team categories
const FilterButton: React.FC<{ 
  active: boolean; 
  onClick: () => void; 
  children: React.ReactNode 
}> = ({ active, onClick, children }) => (
  <Button
    variant={active ? "default" : "outline"}
    onClick={onClick}
    className="min-w-[120px]"
  >
    {children}
  </Button>
);

// Main Team component
const Team = () => {
  const [filter, setFilter] = React.useState<string>("all");
  
  const filteredMembers = React.useMemo(() => {
    if (filter === "all") return teamMembers;
    return teamMembers.filter(member => member.department === filter);
  }, [filter]);

  return (
    <>
      <Helmet>
        <title>Our Team | Ambica Pharma</title>
        <meta name="description" content="Meet the talented team behind Ambica Pharma's success" />
      </Helmet>
      
      <div className="container py-16 md:py-24">
        {/* Hero section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Meet the talented professionals behind Ambica Pharma's success. Our diverse team brings together
            experience and innovation to deliver exceptional pharmaceutical solutions.
          </p>
        </motion.div>
        
        {/* Filter buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <FilterButton active={filter === "all"} onClick={() => setFilter("all")}>
            All
          </FilterButton>
          <FilterButton active={filter === "leadership"} onClick={() => setFilter("leadership")}>
            Leadership
          </FilterButton>
          <FilterButton active={filter === "research"} onClick={() => setFilter("research")}>
            Research
          </FilterButton>
          <FilterButton active={filter === "sales"} onClick={() => setFilter("sales")}>
            Sales & Marketing
          </FilterButton>
          <FilterButton active={filter === "operations"} onClick={() => setFilter("operations")}>
            Operations
          </FilterButton>
        </motion.div>
        
        {/* Team grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredMembers.map(member => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
        
        {/* Join our team section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-24 bg-gradient-to-r from-primary/10 to-secondary/10 p-8 md:p-12 rounded-xl text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our innovative team. Explore current opportunities and become part of our mission.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90">
            <Link to="/careers">View Open Positions</Link>
          </Button>
        </motion.div>
      </div>
    </>
  );
};

export default Team;
