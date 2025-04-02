
import React from "react";
import { Helmet } from "react-helmet-async";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Our Products | Ambica Pharma</title>
        <meta name="description" content="Explore Ambica Pharma's range of high-quality pharmaceutical products." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="py-16 bg-primary/10">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">Our Products</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Discover our extensive range of pharmaceutical products, manufactured with precision and care to meet global standards.
          </p>
        </div>
      </section>
      
      {/* Product Categories */}
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
                {/* Product 1 */}
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="bg-gray-100 rounded-lg p-4 mb-4 flex items-center justify-center h-48">
                    <img src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="Ambipress Tablet" className="max-h-full" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Ambipress Tablet</h3>
                  <p className="text-sm text-gray-500 mb-3">Antihypertensive</p>
                  <p className="text-gray-600 mb-4">
                    Used for the treatment of high blood pressure and certain types of heart failure.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-semibold">₹120.00 / strip</span>
                    <button className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-secondary-light transition-colors">
                      Details
                    </button>
                  </div>
                </div>
                
                {/* Product 2 */}
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="bg-gray-100 rounded-lg p-4 mb-4 flex items-center justify-center h-48">
                    <img src="https://images.unsplash.com/photo-1550572017-9a5dca9c6f6b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="Ambigesic Tablet" className="max-h-full" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Ambigesic Tablet</h3>
                  <p className="text-sm text-gray-500 mb-3">Analgesic</p>
                  <p className="text-gray-600 mb-4">
                    Provides relief from mild to moderate pain, including headache and muscular pain.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-semibold">₹85.00 / strip</span>
                    <button className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-secondary-light transition-colors">
                      Details
                    </button>
                  </div>
                </div>
                
                {/* Product 3 */}
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="bg-gray-100 rounded-lg p-4 mb-4 flex items-center justify-center h-48">
                    <img src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="Ambibiotic Tablet" className="max-h-full" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Ambibiotic Tablet</h3>
                  <p className="text-sm text-gray-500 mb-3">Antibiotic</p>
                  <p className="text-gray-600 mb-4">
                    Broad-spectrum antibiotic for the treatment of various bacterial infections.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-semibold">₹150.00 / strip</span>
                    <button className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-secondary-light transition-colors">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="capsules" className="space-y-8">
              <h2 className="text-2xl font-display font-semibold text-primary">Capsules</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Capsule Products */}
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="bg-gray-100 rounded-lg p-4 mb-4 flex items-center justify-center h-48">
                    <img src="https://images.unsplash.com/photo-1626716826766-a4288949ec78?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="Ambizyme Capsule" className="max-h-full" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Ambizyme Capsule</h3>
                  <p className="text-sm text-gray-500 mb-3">Digestive Enzyme</p>
                  <p className="text-gray-600 mb-4">
                    Helps in digestion and relieves symptoms of indigestion and bloating.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-semibold">₹130.00 / strip</span>
                    <button className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-secondary-light transition-colors">
                      Details
                    </button>
                  </div>
                </div>
                
                {/* Add more capsule products as needed */}
              </div>
            </TabsContent>
            
            <TabsContent value="syrups" className="space-y-8">
              <h2 className="text-2xl font-display font-semibold text-primary">Syrups</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Syrup Products */}
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="bg-gray-100 rounded-lg p-4 mb-4 flex items-center justify-center h-48">
                    <img src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="Ambicough Syrup" className="max-h-full" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Ambicough Syrup</h3>
                  <p className="text-sm text-gray-500 mb-3">Cough Suppressant</p>
                  <p className="text-gray-600 mb-4">
                    Provides relief from cough and cold symptoms with a soothing formula.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-semibold">₹110.00 / bottle</span>
                    <button className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-secondary-light transition-colors">
                      Details
                    </button>
                  </div>
                </div>
                
                {/* Add more syrup products as needed */}
              </div>
            </TabsContent>
            
            <TabsContent value="injections" className="space-y-8">
              <h2 className="text-2xl font-display font-semibold text-primary">Injections</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Injection Products */}
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="bg-gray-100 rounded-lg p-4 mb-4 flex items-center justify-center h-48">
                    <img src="https://images.unsplash.com/photo-1583912267550-d779fd2b7876?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="Ambiject" className="max-h-full" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Ambiject</h3>
                  <p className="text-sm text-gray-500 mb-3">Injectable Antibiotic</p>
                  <p className="text-gray-600 mb-4">
                    Fast-acting injectable antibiotic for severe bacterial infections.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-semibold">₹220.00 / vial</span>
                    <button className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-secondary-light transition-colors">
                      Details
                    </button>
                  </div>
                </div>
                
                {/* Add more injection products as needed */}
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
                At Ambica Pharma, we are committed to maintaining the highest standards of quality in all our products. Our state-of-the-art facilities are equipped with advanced machinery and operated by skilled professionals to ensure that every product meets stringent quality parameters.
              </p>
              <p className="text-gray-600 mb-4">
                Our quality control processes include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Rigorous raw material testing</li>
                <li>In-process quality checks at various stages</li>
                <li>Final product analysis before distribution</li>
                <li>Compliance with WHO-GMP standards</li>
                <li>ISO 9001:2015 certified manufacturing processes</li>
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
