import React from "react";
import { Badge } from "@/components/ui/badge";
import SEOHead from "@/components/SEOHead";

const GlobalReach = () => {
  const regions = [
    { 
      name: "Asia", 
      countries: ["India", "Singapore", "Malaysia", "Thailand", "Vietnam", "Philippines", "Indonesia", "Japan", "South Korea", "China"],
      description: "Our strongest presence is in Asia, with manufacturing facilities in India and distribution networks across Southeast and East Asia.",
      image: "https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    { 
      name: "Africa", 
      countries: ["South Africa", "Kenya", "Nigeria", "Ethiopia", "Tanzania", "Egypt", "Morocco", "Ghana"],
      description: "We're rapidly expanding across Africa, providing essential medications and healthcare solutions to growing markets.",
      image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    { 
      name: "Middle East", 
      countries: ["UAE", "Saudi Arabia", "Qatar", "Oman", "Kuwait", "Bahrain"],
      description: "Our partnerships in the Middle East focus on delivering innovative healthcare solutions to this dynamic region.",
      image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    { 
      name: "Europe", 
      countries: ["UK", "Germany", "France", "Italy", "Spain", "Netherlands", "Belgium", "Poland"],
      description: "We comply with strict European regulations to provide high-quality pharmaceutical products to European markets.",
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    { 
      name: "Americas", 
      countries: ["USA", "Canada", "Mexico", "Brazil", "Argentina", "Colombia", "Peru", "Chile"],
      description: "Our growing presence in North and South America delivers essential medications with a focus on quality and affordability.",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const facilities = [
    {
      name: "Mumbai Headquarters",
      type: "Corporate Office & R&D",
      location: "Mumbai, India",
      description: "Our global headquarters houses corporate functions and a state-of-the-art R&D facility focused on innovation."
    },
    {
      name: "Ahmedabad Manufacturing",
      type: "Manufacturing Plant",
      location: "Ahmedabad, India",
      description: "Our largest manufacturing facility produces a wide range of pharmaceutical formulations with GMP compliance."
    },
    {
      name: "Pune Quality Control",
      type: "Quality Control Center",
      location: "Pune, India",
      description: "Dedicated to ensuring all products meet stringent quality standards before distribution."
    },
    {
      name: "Singapore Distribution",
      type: "Regional Distribution Center",
      location: "Singapore",
      description: "Serves as our primary hub for distribution throughout Southeast Asia."
    },
    {
      name: "Dubai Commercial Office",
      type: "Commercial Office",
      location: "Dubai, UAE",
      description: "Manages our operations and partnerships across the Middle East region."
    },
    {
      name: "Johannesburg Facility",
      type: "Distribution & Commercial",
      location: "Johannesburg, South Africa",
      description: "Our African headquarters coordinates distribution and marketing throughout the continent."
    }
  ];

  const globalReachSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ambica Pharma",
    "url": "https://ambicapharma.net/global-reach",
    "logo": "/lovable-uploads/e75f626d-a490-496b-8817-294d7128b441.png",
    "description": "Ambica Pharma has a global presence in over 50 countries across 5 continents, with major facilities in India, Singapore, Dubai, and South Africa.",
    "location": regions.map(region => ({
      "@type": "Place",
      "name": region.name,
      "description": region.description
    }))
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Global Reach"
        description="Explore Ambica Pharma's worldwide presence across 50+ countries. As a leading pharmaceutical wholesaler and exporter, we deliver high-quality medicines globally with excellence and reliability."
        keywords="pharmaceutical global presence, international medicine wholesaler, drug export, international pharmaceutical distribution, global pharmaceutical trading, medicine supplier worldwide, pharmaceutical exporter India, international drug wholesale, global medication supplier, worldwide drug distribution, international pharma partnerships, global healthcare solutions"
        canonicalUrl="https://ambicapharma.net/global-reach"
        structuredData={globalReachSchema}
      />
      
      {/* Hero Section */}
      <section className="py-16 bg-primary/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1589519160732-57fc6aa1df9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
            alt="World Map" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">Our Global Reach</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            From our roots in India to a growing international presence, Ambica Pharma delivers quality healthcare solutions worldwide.
          </p>
        </div>
      </section>
      
      {/* Global Presence Overview */}
      <section className="py-16">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-display font-bold text-primary mb-6">Expanding Global Footprint</h2>
            <p className="text-gray-600">
              With a presence in over 50 countries across 5 continents, Ambica Pharma is committed to making quality healthcare accessible worldwide. Our international network of manufacturing facilities, distribution centers, and commercial offices ensures we can effectively serve diverse healthcare needs globally.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-primary">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="font-medium">Countries</div>
              <p className="text-gray-600 text-sm mt-2">Our products reach patients in over 50 countries worldwide</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-secondary">
              <div className="text-3xl font-bold text-secondary mb-2">6</div>
              <div className="font-medium">Manufacturing & Distribution Facilities</div>
              <p className="text-gray-600 text-sm mt-2">Strategic locations ensuring efficient production and distribution</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-primary">
              <div className="text-3xl font-bold text-primary mb-2">12</div>
              <div className="font-medium">Commercial Offices</div>
              <p className="text-gray-600 text-sm mt-2">Local presence for better understanding of market needs</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Regions & Countries */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-display font-bold text-primary mb-10">Our Regional Presence</h2>
          
          <div className="space-y-12">
            {regions.map((region, index) => (
              <div key={region.name} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 bg-white rounded-xl shadow-md overflow-hidden`}>
                <div className="md:w-2/5">
                  <img 
                    src={region.image} 
                    alt={region.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 md:w-3/5 flex flex-col justify-center">
                  <h3 className="text-2xl font-display font-bold text-primary mb-4">{region.name}</h3>
                  <p className="text-gray-600 mb-6">{region.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {region.countries.map(country => (
                      <Badge key={country} variant="outline" className="bg-primary/5">{country}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Facilities */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-display font-bold text-primary mb-10">Key Facilities</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map(facility => (
              <div key={facility.name} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
                    {facility.type}
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">{facility.name}</h3>
                  <p className="text-gray-500 text-sm mb-4">{facility.location}</p>
                  <p className="text-gray-600">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Global Standards */}
      <section className="py-16 bg-primary/10">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold text-primary mb-6">Committed to Global Standards</h2>
              <p className="text-gray-600 mb-4">
                Across all our international operations, Ambica Pharma maintains consistent quality standards that meet or exceed local regulations.
              </p>
              <p className="text-gray-600 mb-4">
                Our products adhere to:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="text-gray-600">
                    <strong className="text-gray-900">WHO-GMP:</strong> World Health Organization Good Manufacturing Practices
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="text-gray-600">
                    <strong className="text-gray-900">ISO 9001:2015:</strong> Quality Management System certification
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="text-gray-600">
                    <strong className="text-gray-900">Regional compliance:</strong> FDA, EMA, MHRA, TGA and other regulatory requirements
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="text-gray-600">
                    <strong className="text-gray-900">Environmental standards:</strong> ISO 14001 for environmental management
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Global Standards" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GlobalReach;
