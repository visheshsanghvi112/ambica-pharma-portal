import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Advancements in Pharmaceutical Research 2024",
      excerpt: "Explore the latest breakthroughs in pharmaceutical research and development that are shaping the future of healthcare.",
      author: "Dr. Ananya Das",
      date: "June 15, 2024",
      category: "Research",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "The Importance of Quality Control in Pharmaceutical Manufacturing",
      excerpt: "Understanding why stringent quality control measures are crucial for ensuring the safety and efficacy of pharmaceutical products.",
      author: "Rajesh Sharma",
      date: "May 28, 2024",
      category: "Manufacturing",
      image: "https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Global Pharmaceutical Supply Chain Challenges",
      excerpt: "An analysis of the current challenges facing the global pharmaceutical supply chain and strategies for overcoming them.",
      author: "Priya Patel",
      date: "April 12, 2024",
      category: "Industry",
      image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "The Role of AI in Modern Pharmaceutical Development",
      excerpt: "How artificial intelligence is revolutionizing drug discovery, development, and personalized medicine.",
      author: "Dr. Ravi Kumar",
      date: "March 5, 2024",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1585435557343-3b92740e16fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Sustainable Practices in the Pharmaceutical Industry",
      excerpt: "Implementing eco-friendly processes and reducing environmental impact in pharmaceutical manufacturing.",
      author: "Neha Gupta",
      date: "February 20, 2024",
      category: "Sustainability",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "COVID-19: Lessons Learned for the Pharmaceutical Sector",
      excerpt: "Reflecting on how the pandemic has transformed pharmaceutical research, manufacturing, and distribution.",
      author: "Dr. Ananya Das",
      date: "January 8, 2024",
      category: "Healthcare",
      image: "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Blog | Ambica Pharma</title>
        <meta name="description" content="Stay updated with the latest pharmaceutical news, research, and insights from Ambica Pharma." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="py-16 bg-primary/10">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">Our Blog</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Insights, updates, and expert opinions on the pharmaceutical industry from our team of professionals.
          </p>
        </div>
      </section>
      
      {/* Featured Article */}
      <section className="py-16">
        <div className="container">
          <div className="relative rounded-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1576671081837-49000212a370?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
              alt="Featured Article" 
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8 md:p-12">
              <span className="bg-secondary text-white px-4 py-1 rounded-full text-sm font-medium mb-4 inline-block w-fit">
                Featured
              </span>
              <h2 className="text-2xl md:text-4xl font-display font-bold text-white mb-4">
                The Future of Personalized Medicine: Tailoring Treatments for Individual Patients
              </h2>
              <p className="text-white/80 text-base md:text-lg mb-6 max-w-3xl">
                How advances in genomics, AI, and pharmaceutical technology are enabling more personalized approaches to patient care, revolutionizing treatment outcomes.
              </p>
              <div className="flex items-center text-white/70 text-sm space-x-6">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  <span>Dr. Sunil Verma</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>July 2, 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-display font-bold text-primary mb-10">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map(post => (
              <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-md transition-transform hover:shadow-lg">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105"
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
                  
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center text-gray-500 text-sm">
                      <User className="h-4 w-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    
                    <Link to={`/blog/${post.id}`} className="text-secondary font-medium flex items-center hover:underline">
                      Read More <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
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
            <h2 className="text-3xl font-display font-bold text-primary">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600">
              Stay updated with our latest articles, industry insights, and company news.
            </p>
          </div>
          
          <form className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <Input 
              type="email" 
              placeholder="Your Email Address" 
              className="w-full md:flex-1" 
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
