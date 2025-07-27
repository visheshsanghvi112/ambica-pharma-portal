
import React from "react";
import { Helmet } from "react-helmet-async";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Our Products | Ambica Pharma</title>
        <meta name="description" content="Explore Ambica Pharma's range of high-quality pharmaceutical products distributed worldwide." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="py-16 bg-primary/10">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">Our Products</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Discover our extensive range of pharmaceutical products, sourced from quality-certified suppliers and distributed with precision and care to meet global standards.
          </p>
        </div>
      </section>
      
      {/* Product Categories - Informational Only */}
      <section className="py-16">
        <div className="container">
          <Tabs defaultValue="tablets" className="w-full">
            <TabsList className="grid w-full md:w-fit grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="tablets">Tablets</TabsTrigger>
              <TabsTrigger value="capsules">Capsules</TabsTrigger>
              <TabsTrigger value="syrups">Syrups</TabsTrigger>
              <TabsTrigger value="injections">Injections</TabsTrigger>
            </TabsList>
            
            <TabsContent value="tablets" className="space-y-8">
              <h2 className="text-2xl font-display font-semibold text-primary">Tablets</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Product Information Card */}
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="bg-gray-100 rounded-lg p-4 mb-4 flex items-center justify-center h-48">
                    <img src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="Antihypertensive Tablet" className="max-h-full" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Antihypertensive Tablets</h3>
                  <p className="text-sm text-gray-500 mb-3">Category: Cardiovascular</p>
                  <p className="text-gray-600 mb-4">
                    Used for the treatment of high blood pressure and certain types of heart failure.
                  </p>
                  <div className="flex justify-end items-center">
                    <button className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-secondary-light transition-colors">
                      Information
                    </button>
                  </div>
                </div>
                
                {/* Product Information Card */}
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="bg-gray-100 rounded-lg p-4 mb-4 flex items-center justify-center h-48">
                    <img src="https://images.unsplash.com/photo-1550572017-9a5dca9c6f6b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="Analgesic Tablet" className="max-h-full" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Analgesic Tablets</h3>
                  <p className="text-sm text-gray-500 mb-3">Category: Pain Management</p>
                  <p className="text-gray-600 mb-4">
                    Provides relief from mild to moderate pain, including headache and muscular pain.
                  </p>
                  <div className="flex justify-end items-center">
                    <button className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-secondary-light transition-colors">
                      Information
                    </button>
                  </div>
                </div>
                
                {/* Product Information Card */}
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="bg-gray-100 rounded-lg p-4 mb-4 flex items-center justify-center h-48">
                    <img src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="Antibiotic Tablet" className="max-h-full" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Antibiotic Tablets</h3>
                  <p className="text-sm text-gray-500 mb-3">Category: Anti-infection</p>
                  <p className="text-gray-600 mb-4">
                    Broad-spectrum antibiotics for the treatment of various bacterial infections.
                  </p>
                  <div className="flex justify-end items-center">
                    <button className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-secondary-light transition-colors">
                      Information
                    </button>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="capsules" className="space-y-8">
              <h2 className="text-2xl font-display font-semibold text-primary">Capsules</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Capsule Information Card */}
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="bg-gray-100 rounded-lg p-4 mb-4 flex items-center justify-center h-48">
                    <img src="https://images.unsplash.com/photo-1626716826766-a4288949ec78?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="Digestive Enzyme Capsule" className="max-h-full" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Digestive Enzyme Capsules</h3>
                  <p className="text-sm text-gray-500 mb-3">Category: Digestive Health</p>
                  <p className="text-gray-600 mb-4">
                    Helps in digestion and relieves symptoms of indigestion and bloating.
                  </p>
                  <div className="flex justify-end items-center">
                    <button className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-secondary-light transition-colors">
                      Information
                    </button>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="syrups" className="space-y-8">
              <h2 className="text-2xl font-display font-semibold text-primary">Syrups</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Syrup Information Card */}
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="bg-gray-100 rounded-lg p-4 mb-4 flex items-center justify-center h-48">
                    <img src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="Cough Syrup" className="max-h-full" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Cough Suppressant Syrup</h3>
                  <p className="text-sm text-gray-500 mb-3">Category: Respiratory</p>
                  <p className="text-gray-600 mb-4">
                    Provides relief from cough and cold symptoms with a soothing formula.
                  </p>
                  <div className="flex justify-end items-center">
                    <button className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-secondary-light transition-colors">
                      Information
                    </button>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="injections" className="space-y-8">
              <h2 className="text-2xl font-display font-semibold text-primary">Injections</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Injection Information Card */}
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="bg-gray-100 rounded-lg p-4 mb-4 flex items-center justify-center h-48">
                    <img src="https://images.unsplash.com/photo-1583912267550-d779fd2b7876?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="Injectable Antibiotic" className="max-h-full" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Injectable Antibiotics</h3>
                  <p className="text-sm text-gray-500 mb-3">Category: Anti-infection</p>
                  <p className="text-gray-600 mb-4">
                    Fast-acting injectable antibiotics for severe bacterial infections.
                  </p>
                  <div className="flex justify-end items-center">
                    <button className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-secondary-light transition-colors">
                      Information
                    </button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Quality Assurance */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold text-primary mb-6">Quality Assurance</h2>
              <p className="text-gray-600 mb-4">
                At Ambica Pharma, we are committed to maintaining the highest standards of quality in all our products. Our quality control processes ensure that every product we distribute meets stringent quality parameters.
              </p>
              <p className="text-gray-600 mb-4">
                Our quality assurance processes include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Rigorous supplier qualification</li>
                <li>Certificate of analysis verification for each batch</li>
                <li>Product quality checks before distribution</li>
                <li>Compliance with WHO-GMP standards</li>
                <li>ISO 9001:2015 certified processes</li>
              </ul>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Quality Assurance Lab" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
