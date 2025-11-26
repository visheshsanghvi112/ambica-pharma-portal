
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, Tag, Clock, Eye, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

// Blog post type
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime?: string;
  views?: number;
  tags?: string[];
}

const Blog = () => {
  // Enhanced blog posts with more metadata for SEO
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Advancements in Pharmaceutical Research 2024",
      excerpt: "Explore the latest breakthroughs in pharmaceutical research and development that are shaping the future of healthcare and medication manufacturing.",
      author: "Dr. Ananya Das",
      date: "June 15, 2024",
      category: "Research",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      readTime: "5 min",
      views: 1250,
      tags: ["Pharmaceutical Research", "Drug Development", "Healthcare Innovation"]
    },
    {
      id: 2,
      title: "The Importance of Quality Control in Pharmaceutical Manufacturing",
      excerpt: "Understanding why stringent quality control measures are crucial for ensuring the safety and efficacy of pharmaceutical tablets, capsules, and other medicinal products.",
      author: "Rajesh Sharma",
      date: "May 28, 2024",
      category: "Manufacturing",
      image: "https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      readTime: "7 min",
      views: 980,
      tags: ["Quality Control", "GMP", "Pharmaceutical Testing", "Drug Safety"]
    },
    {
      id: 3,
      title: "Global Pharmaceutical Supply Chain Challenges",
      excerpt: "An analysis of the current challenges facing the global pharmaceutical supply chain for exporters and wholesalers, with strategies for overcoming distribution obstacles.",
      author: "Priya Patel",
      date: "April 12, 2024",
      category: "Industry",
      image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      readTime: "8 min",
      views: 1120,
      tags: ["Supply Chain", "Pharmaceutical Distribution", "Global Exports", "Logistics"]
    },
    {
      id: 4,
      title: "The Role of AI in Modern Pharmaceutical Development",
      excerpt: "How artificial intelligence is revolutionizing drug discovery, development, and personalized medicine for pharmaceutical manufacturers and traders.",
      author: "Dr. Ravi Kumar",
      date: "March 5, 2024",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1585435557343-3b92740e16fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      readTime: "6 min",
      views: 1560,
      tags: ["Artificial Intelligence", "Drug Discovery", "Pharmaceutical Technology", "Innovation"]
    },
    {
      id: 5,
      title: "Sustainable Practices in the Pharmaceutical Industry",
      excerpt: "Implementing eco-friendly processes and reducing environmental impact in pharmaceutical manufacturing, trading, and distribution networks.",
      author: "Neha Gupta",
      date: "February 20, 2024",
      category: "Sustainability",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      readTime: "5 min",
      views: 890,
      tags: ["Sustainability", "Eco-friendly", "Green Pharmacy", "Environmental Impact"]
    },
    {
      id: 6,
      title: "COVID-19: Lessons Learned for the Pharmaceutical Sector",
      excerpt: "Reflecting on how the pandemic has transformed pharmaceutical research, manufacturing, trading, and distribution of essential medicines globally.",
      author: "Dr. Ananya Das",
      date: "January 8, 2024",
      category: "Healthcare",
      image: "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      readTime: "9 min",
      views: 2310,
      tags: ["COVID-19", "Pandemic Response", "Healthcare Crisis", "Medical Supply"]
    }
  ];

  // Structured data for BlogPosting
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "headline": "Ambica Pharma Blog - Pharmaceutical Industry Insights",
    "description": "Expert articles on pharmaceutical manufacturing, trading, export trends, and healthcare innovations from Ambica Pharma.",
    "image": "https://images.unsplash.com/photo-1576671081837-49000212a370?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    "author": {
      "@type": "Organization",
      "name": "Ambica Pharma",
      "url": "https://ambicapharma.net"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Ambica Pharma",
      "logo": {
        "@type": "ImageObject",
        "url": "/lovable-uploads/e75f626d-a490-496b-8817-294d7128b441.png"
      }
    },
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "image": post.image,
      "author": {
        "@type": "Person",
        "name": post.author
      },
      "datePublished": post.date,
      "articleSection": post.category,
      "keywords": post.tags?.join(", "),
      "publisher": {
        "@type": "Organization",
        "name": "Ambica Pharma",
        "logo": {
          "@type": "ImageObject",
          "url": "/lovable-uploads/e75f626d-a490-496b-8817-294d7128b441.png"
        }
      }
    }))
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Pharmaceutical Industry Blog | Ambica Pharma - Expert Insights & Trends</title>
        <meta name="description" content="Stay updated with expert articles on pharmaceutical manufacturing, trading, exporting, healthcare innovations, and industry trends from Ambica Pharma's industry specialists." />
        <meta name="keywords" content="pharmaceutical blog, medicine industry news, healthcare trends, drug manufacturing insights, pharmaceutical export trends, pharmaceutical research, medication quality control, pharma industry updates, healthcare innovations, drug supply chain" />
        <link rel="canonical" href="https://ambicapharma.net/blog" />
        <script type="application/ld+json">
          {JSON.stringify(blogPostingSchema)}
        </script>
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
              <BookOpen className="h-4 w-4 inline mr-2" />
              Industry Insights
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary mb-6"
            >
              Pharmaceutical Industry Insights
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
              Expert articles, research highlights, and industry trends from Ambica Pharma's team of pharmaceutical specialists.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Featured Article */}
      <section className="py-16">
        <div className="container">
          <div className="relative rounded-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1576671081837-49000212a370?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
              alt="The Future of Personalized Medicine in Pharmaceutical Manufacturing" 
              className="w-full h-[500px] object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8 md:p-12">
              <span className="bg-secondary text-white px-4 py-1 rounded-full text-sm font-medium mb-4 inline-block w-fit">
                Featured
              </span>
              <h2 className="text-2xl md:text-4xl font-display font-bold text-white mb-4">
                The Future of Personalized Medicine: Tailoring Treatments for Individual Patients
              </h2>
              <p className="text-white/80 text-base md:text-lg mb-6 max-w-3xl">
                How advances in genomics, AI, and pharmaceutical manufacturing technology are enabling more personalized approaches to patient care, revolutionizing treatment outcomes for global healthcare providers.
              </p>
              <div className="flex flex-wrap items-center text-white/70 text-sm space-x-6">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  <span>Dr. Sunil Verma</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>July 2, 2024</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>10 min read</span>
                </div>
                <div className="flex items-center">
                  <Eye className="h-4 w-4 mr-2" />
                  <span>3,245 views</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-display font-bold text-primary mb-10">Latest Pharmaceutical Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map(post => (
              <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-md transition-transform hover:shadow-lg">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded">
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-xs">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-primary mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  {/* Enhanced metadata display */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags?.map((tag, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full flex items-center">
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center text-gray-500 text-sm">
                      <User className="h-4 w-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      {post.readTime && (
                        <div className="flex items-center text-gray-500 text-xs">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                      )}
                      
                      <Link to={`/blog/${post.id}`} className="text-secondary font-medium flex items-center hover:underline">
                        Read More <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button className="bg-white border border-primary text-primary px-6 py-3 rounded-lg inline-flex items-center hover:bg-primary/5 transition-colors">
              Load More Articles
              <ArrowRight className="h-4 w-4 ml-2" />
            </button>
          </div>
        </div>
      </section>
      
      {/* Newsletter Subscription */}
      <section className="py-16 bg-primary/10">
        <div className="container max-w-4xl">
          <div className="text-center space-y-4 mb-8">
            <h2 className="text-3xl font-display font-bold text-primary">Subscribe to Our Pharmaceutical Newsletter</h2>
            <p className="text-gray-600">
              Stay updated with our latest articles, pharmaceutical industry insights, manufacturing innovations, and company news directly in your inbox.
            </p>
          </div>
          
          <form className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <Input 
              type="email" 
              placeholder="Your Email Address" 
              className="w-full md:flex-1" 
              aria-label="Email for newsletter subscription"
            />
            <Button className="bg-primary hover:bg-primary/90">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Blog;
