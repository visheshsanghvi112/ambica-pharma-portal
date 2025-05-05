
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter
} from "@/components/ui/card";

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
    name: "Sandeep Gautam",
    role: "Export Billing",
    bio: "Sandeep has over 5 years of experience in the pharmaceutical industry.",
    image: "/lovable-uploads/dd6e336c-a7e1-45fc-9078-da61d4735faa.png",
    social: {
      email: "rajesh.kumar@ambicapharma.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
    department: "purchase"
  },
  {
    id: 2,
    name: "Sara Gawade",
    role: "Sales Executive",
    bio: "Sara leads our sales with her expertise in marketing.",
    image: "/lovable-uploads/06d0b989-c8d1-4611-b622-ea299eaf0817.png",
    social: {
      email: "priya.sharma@ambicapharma.com",
      linkedin: "https://linkedin.com",
    },
    department: "sales"
  },
  {
    id: 3,
    name: "Sanket Mishra",
    role: "Sales Executive",
    bio: "Sanket oversees all sales operations and ensures our facilities meet international standards.",
    image: "/lovable-uploads/0d8ebdef-722b-44c0-bfc3-8f644b9bb51a.png",
    social: {
      email: "vikram.singh@ambicapharma.com",
      linkedin: "https://linkedin.com",
    },
    department: "sales"
  },
  {
    id: 17,
    name: "Vikram Darji",
    role: "Purchase Manager",
    bio: "Manages procurement processes and vendor relationships to ensure quality and cost-efficiency in our supply chain.",
    image: "/lovable-uploads/22ad766d-7479-4975-84f8-d414d8c4410d.png",
    social: {
      email: "vikram.darji@ambicapharma.com",
      linkedin: "https://linkedin.com",
    },
    department: "purchase"
  },
  {
    id: 5,
    name: "Anjali Vedhwal",
    role: "Export Coordinator",
    bio: "Anjali has expanded our market presence to 25+ countries with strategic partnerships and distribution networks.",
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
    name: "Hitesh Kumar",
    role: "Account Manager",
    bio: "Ensures all our accounting is done proper.",
    image: "/lovable-uploads/1ace0070-8637-4045-b4a0-3c3ce09fbede.png",
    social: {
      email: "neha.gupta@ambicapharma.com",
      linkedin: "https://linkedin.com",
    },
    department: "operations"
  },
  {
    id: 7,
    name: "Vishesh Sanghvi",
    role: "Software Development Engineer",
    bio: "Handles backend architecture—software, data, servers, and automation.",
    image: "/lovable-uploads/36b133b6-f6f2-41fb-9193-b22e199635dc.png",
    social: {
      email: "amit.joshi@ambicapharma.com",
      linkedin: "https://linkedin.com",
    },
    department: "it"
  },
  {
    id: 8,
    name: "Arfad",
    role: "Supply Chain Manager",
    bio: "Manages our softwares and databases ervers to scrapers, I build, break, migrate, and scale—end to end.",
    image: "/lovable-uploads/252ae4ad-9151-48a8-9618-a9bb2176b30b.png",
    social: {
      email: "suresh.patel@ambicapharma.com",
      linkedin: "https://linkedin.com",
    },
    department: "purchase"
  },
  {
    id: 9,
    name: "Samiksha Hate",
    role: "Export Coordinator",
    bio: "Coordinates clinical trials and ensures all research protocols meet industry standards and regulatory requirements.",
    image: "/lovable-uploads/54bfce67-fd49-4c5f-90df-30c1b9d4d8b1.png",
    social: {
      email: "anjali.singh@ambicapharma.com",
      linkedin: "https://linkedin.com",
    },
    department: "sales"
  },
  {
    id: 10,
    name: "Smita Amin",
    role: "Billing and Coordinator",
    bio: "Manages billing processes and ensures smooth coordination across teams and clients.",
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
    name: "Sneha Gurav",
    role: "Sales Executive",
    bio: "Leads research on new pharmaceutical formulations and improvements to existing product lines.",
    image: "/lovable-uploads/483f15ca-c98f-4038-973a-aaedabcd00d0.png",
    social: {
      email: "ramesh.jain@ambicapharma.com",
      linkedin: "https://linkedin.com",
    },
    department: "sales"
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
    name: "Naitik Singh",
    role: "Sales Executive",
    bio: "Works on growing sales and building relationships with customers.",
    image: "/lovable-uploads/bc4c361f-8223-47af-8792-52900375891b.png",
    social: {
      email: "deepika.patel@ambicapharma.com",
      linkedin: "https://linkedin.com",
    },
    department: "sales"
  },
  {
    id: 15,
    name: "Mukesh Dabhi",
    role: "Sales Executive",
    bio: "Works on growing sales and building relationships with customers.",
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

// Enhanced team member card component
const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part.charAt(0))
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 dark:border-primary/10">
        <div className="relative overflow-hidden group h-64">
          <img 
            src={member.image} 
            alt={`${member.name} - ${member.role}`} 
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        <CardHeader className="pb-2">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10 border-2 border-primary/20">
              <AvatarImage src={member.image} alt={member.name} />
              <AvatarFallback className="bg-primary text-white">{getInitials(member.name)}</AvatarFallback>
            </Avatar>
            <div className="text-left">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">{member.name}</h3>
              <p className="text-primary font-medium text-sm">{member.role}</p>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="text-left">
          <p className="text-gray-600 dark:text-gray-300 text-sm">{member.bio}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

// Filter button component
const FilterButton: React.FC<{ 
  active: boolean; 
  onClick: () => void; 
  children: React.ReactNode 
}> = ({ active, onClick, children }) => (
  <Button
    variant={active ? "default" : "outline"}
    onClick={onClick}
    className={`min-w-[120px] ${active ? 'bg-primary hover:bg-primary/90' : ''} transition-all duration-300`}
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  // Structured data for TeamPage
  const teamPageSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ambica Pharma",
    "url": "https://ambicapharma.net",
    "logo": "/lovable-uploads/e75f626d-a490-496b-8817-294d7128b441.png",
    "employee": teamMembers.map(member => ({
      "@type": "Person",
      "name": member.name,
      "jobTitle": member.role,
      "description": member.bio,
      "image": member.image,
    }))
  };

  return (
    <>
      <Helmet>
        <title>Our Team | Ambica Pharma - Leading Pharmaceutical Wholesaler & Exporter</title>
        <meta name="description" content="Meet Ambica Pharma's expert team of pharmaceutical professionals dedicated to quality healthcare solutions. Our experienced staff drives our success in manufacturing, trading and exporting high-quality medicines globally." />
        <meta name="keywords" content="Ambica Pharma team, pharmaceutical experts, medicine quality control team, pharmaceutical wholesaler staff, drug export professionals, pharmaceutical industry leaders, medication manufacturing experts, healthcare professionals Mumbai, Indian pharma company leadership, medicine distribution team, Ambica leadership" />
        <link rel="canonical" href="https://ambicapharma.net/team" />
        <script type="application/ld+json">
          {JSON.stringify(teamPageSchema)}
        </script>
      </Helmet>
      
      <div className="container py-12 md:py-20 px-4 md:px-6">
        {/* Hero section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Our Team</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-2 mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Meet the talented professionals behind Ambica Pharma's success. Our diverse team of experts brings together
            extensive experience and innovation to deliver exceptional pharmaceutical solutions to global markets.
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
            Sales
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
            Admin
          </FilterButton>
        </motion.div>
        
        {/* Team grid with animations */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
        >
          {filteredMembers.map(member => (
            <motion.div key={member.id} variants={itemVariants}>
              <TeamMemberCard member={member} />
            </motion.div>
          ))}
        </motion.div>
        
        {/* Join our team section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 md:mt-24 rounded-xl text-center overflow-hidden"
        >
          <div className="glass-effect p-6 md:p-12 bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur-sm border border-white/20 dark:border-white/10 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Join Our Team</h2>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our innovative pharmaceutical team. Explore current opportunities and become part of our mission to deliver quality healthcare solutions worldwide.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 hover:shadow-lg transition-all">
              <Link to="/careers">View Open Positions</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Team;
