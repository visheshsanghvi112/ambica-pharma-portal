import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

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
  department: "leadership" | "purchase" | "sales" | "operations" | "it" | "hr" | "administration";
}

// Sample team data
const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Dr. Rajesh Kumar",
    role: "CEO & Founder",
    bio: "Dr. Kumar has over 25 years of experience in the pharmaceutical industry with a PhD in Pharmacology from IIT Bombay.",
    image: "/lovable-uploads/dd6e336c-a7e1-45fc-9078-da61d4735faa.png",
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
    image: "/lovable-uploads/06d0b989-c8d1-4611-b622-ea299eaf0817.png",
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
    image: "/lovable-uploads/0d8ebdef-722b-44c0-bfc3-8f644b9bb51a.png",
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
    image: "/lovable-uploads/7c83a2dc-635a-40cc-a26a-24fefa0fe6fe.png",
    social: {
      email: "ananya.patel@ambicapharma.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
    department: "administration"
  },
  {
    id: 5,
    name: "Rahul Verma",
    role: "Global Sales Director",
    bio: "Rahul has expanded our market presence to 45+ countries with strategic partnerships and distribution networks.",
    image: "/lovable-uploads/b9310eb6-c2d2-4e00-acdd-dbca91490105.png",
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
    image: "/lovable-uploads/1ace0070-8637-4045-b4a0-3c3ce09fbede.png",
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
    image: "/lovable-uploads/36b133b6-f6f2-41fb-9193-b22e199635dc.png",
    social: {
      email: "amit.joshi@ambicapharma.com",
      linkedin: "https://linkedin.com",
    },
    department: "administration"
  },
  {
    id: 8,
    name: "Suresh Patel",
    role: "Supply Chain Manager",
    bio: "Manages our global supply chain to ensure timely delivery of products to distributors and end customers.",
    image: "/lovable-uploads/252ae4ad-9151-48a8-9618-a9bb2176b30b.png",
    social: {
      email: "suresh.patel@ambicapharma.com",
      linkedin: "https://linkedin.com",
    },
    department: "purchase"
  },
  {
    id: 9,
    name: "Anjali Singh",
    role: "Clinical Research Associate",
    bio: "Coordinates clinical trials and ensures all research protocols meet industry standards and regulatory requirements.",
    image: "/lovable-uploads/54bfce67-fd49-4c5f-90df-30c1b9d4d8b1.png",
    social: {
      email: "anjali.singh@ambicapharma.com",
      linkedin: "https://linkedin.com",
    },
    department: "hr"
  },
  {
    id: 10,
    name: "Vishal Kumar",
    role: "International Business Development",
    bio: "Identifies new market opportunities and develops strategic partnerships to expand our global footprint.",
    image: "/lovable-uploads/5cb5aba3-94fe-4193-bcb1-5f85b6466eed.png",
    social: {
      email: "vishal.kumar@ambicapharma.com",
      linkedin: "https://linkedin.com",
    },
    department: "sales"
  },
  {
    id: 11,
    name: "Sunita Devi",
    role: "Regulatory Affairs Specialist",
    bio: "Ensures all products comply with regulatory requirements across global markets to facilitate smooth product launches.",
    image: "/lovable-uploads/254d5e1d-61af-4cae-a2f9-199554a480d3.png",
    social: {
      email: "sunita.devi@ambicapharma.com",
      linkedin: "https://linkedin.com",
    },
    department: "operations"
  },
  {
    id: 12,
    name: "Dr. Ramesh Jain",
    role: "Product Development Scientist",
    bio: "Leads research on new pharmaceutical formulations and improvements to existing product lines.",
    image: "/lovable-uploads/483f15ca-c98f-4038-973a-aaedabcd00d0.png",
    social: {
      email: "ramesh.jain@ambicapharma.com",
      linkedin: "https://linkedin.com",
    },
    department: "it"
  },
  {
    id: 13,
    name: "Rakesh Sharma",
    role: "Strategic Partnerships Manager",
    bio: "Develops and maintains relationships with key distributors and partners to strengthen our market position.",
    image: "/lovable-uploads/d6548c05-6cdf-4321-aafd-5afa4723a827.png",
    social: {
      email: "rakesh.sharma@ambicapharma.com",
      linkedin: "https://linkedin.com",
    },
    department: "sales"
  },
  {
    id: 14,
    name: "Deepika Patel",
    role: "Production Manager",
    bio: "Oversees all pharmaceutical manufacturing processes to ensure optimum quality and efficiency.",
    image: "/lovable-uploads/bc4c361f-8223-47af-8792-52900375891b.png",
    social: {
      email: "deepika.patel@ambicapharma.com",
      linkedin: "https://linkedin.com",
    },
    department: "operations"
  },
  {
    id: 15,
    name: "Sunil Kumar",
    role: "IT Systems Administrator",
    bio: "Manages our IT infrastructure and ensures all systems are running smoothly to support our operations.",
    image: "/lovable-uploads/93092566-4a97-4281-9733-909843f42279.png",
    social: {
      email: "sunil.kumar@ambicapharma.com",
      linkedin: "https://linkedin.com",
    },
    department: "it"
  },
  {
    id: 16,
    name: "Rahul Singh",
    role: "HR Manager",
    bio: "Oversees recruitment, employee welfare, and HR policies to ensure a positive workplace environment.",
    image: "/lovable-uploads/2d00527b-e10a-4b35-b6b0-02c80ea39939.png",
    social: {
      email: "rahul.singh@ambicapharma.com",
      linkedin: "https://linkedin.com",
    },
    department: "hr"
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
          className="w-full h-64 object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
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
    className={`min-w-[120px] ${active ? 'bg-primary hover:bg-primary/90' : ''}`}
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
      
      <div className="container py-12 md:py-20 px-4 md:px-6">
        {/* Hero section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-primary">Our Team</h1>
          <div className="w-24 h-1 bg-secondary mx-auto mt-2 mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Meet the talented professionals behind Ambica Pharma's success. Our diverse team brings together
            experience and innovation to deliver exceptional pharmaceutical solutions.
          </p>
        </motion.div>
        
        {/* Filter buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-10 md:mb-12"
        >
          <FilterButton active={filter === "all"} onClick={() => setFilter("all")}>
            All
          </FilterButton>
          <FilterButton active={filter === "leadership"} onClick={() => setFilter("leadership")}>
            Leadership
          </FilterButton>
          <FilterButton active={filter === "purchase"} onClick={() => setFilter("purchase")}>
            Purchase
          </FilterButton>
          <FilterButton active={filter === "sales"} onClick={() => setFilter("sales")}>
            Sales & Marketing
          </FilterButton>
          <FilterButton active={filter === "operations"} onClick={() => setFilter("operations")}>
            Operations
          </FilterButton>
          <FilterButton active={filter === "it"} onClick={() => setFilter("it")}>
            IT
          </FilterButton>
          <FilterButton active={filter === "hr"} onClick={() => setFilter("hr")}>
            HR
          </FilterButton>
          <FilterButton active={filter === "administration"} onClick={() => setFilter("administration")}>
            Administration
          </FilterButton>
        </motion.div>
        
        {/* Team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
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
          className="mt-20 md:mt-24 bg-gradient-to-r from-primary/10 to-secondary/10 p-6 md:p-12 rounded-xl text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">Join Our Team</h2>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
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
