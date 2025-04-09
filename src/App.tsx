
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "./components/ThemeProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import GlobalReach from "./pages/GlobalReach";
import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CSR from "./pages/CSR";
import Careers from "./pages/Careers";
import Team from "./pages/Team";
import NotFound from "./pages/NotFound";
import Achievements from "./pages/Achievements";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="ambica-theme">
      <HelmetProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Helmet>
              <title>Ambica Pharma - Leading Pharmaceutical Manufacturer in India</title>
              <meta
                name="description"
                content="Ambica Pharma is a trusted manufacturer and distributor of high-quality pharmaceutical products with WHO-GMP certification, serving 25+ countries worldwide since 2005."
              />
              <meta name="keywords" content="Ambica Pharma, pharmaceutical manufacturer, drug manufacturing, pharma exporter, India pharma company, WHO-GMP certified, quality medicines, healthcare solutions, generic drugs, pharmaceutical products, medicine supplier, tablet manufacturer, capsule manufacturer, injectable medicines, pharmaceutical wholesaler, drug distributor, Mumbai pharma, pharmaceutical industry, pharmaceutical formulations, healthcare company" />
              <meta name="author" content="Ambica Pharma" />
              <meta name="robots" content="index, follow" />
              <meta name="google-site-verification" content="aeyZni3K0snO5KuyIGrofZih24QiU4K4TsbGBieI6Lk" />
              <meta property="og:title" content="Ambica Pharma - Leading Pharmaceutical Manufacturer in India" />
              <meta property="og:description" content="Ambica Pharma is a trusted manufacturer and distributor of high-quality pharmaceutical products with WHO-GMP certification, serving 25+ countries worldwide since 2005." />
              <meta property="og:type" content="website" />
              <meta property="og:url" content="https://ambicapharma.com" />
              <meta property="og:image" content="/lovable-uploads/a5979ffb-180b-4225-a1e8-15425f28d262.png" />
              <meta property="og:site_name" content="Ambica Pharma" />
              <meta property="og:locale" content="en_US" />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content="Ambica Pharma - Leading Pharmaceutical Manufacturer in India" />
              <meta name="twitter:description" content="Ambica Pharma is a trusted manufacturer and distributor of high-quality pharmaceutical products with WHO-GMP certification, serving 25+ countries worldwide since 2005." />
              <meta name="twitter:image" content="/lovable-uploads/a5979ffb-180b-4225-a1e8-15425f28d262.png" />
              <link rel="canonical" href="https://ambicapharma.com" />
              
              {/* Structured data for organization */}
              <script type="application/ld+json">
                {`
                  {
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "Ambica Pharma",
                    "alternateName": "Ambica Pharmaceutical",
                    "url": "https://ambicapharma.com",
                    "logo": "https://ambicapharma.com/lovable-uploads/a5979ffb-180b-4225-a1e8-15425f28d262.png",
                    "sameAs": [
                      "https://www.facebook.com/ambicapharma",
                      "https://twitter.com/ambicapharma",
                      "https://www.linkedin.com/company/ambica-pharma",
                      "https://www.instagram.com/ambicapharma"
                    ],
                    "contactPoint": {
                      "@type": "ContactPoint",
                      "telephone": "+91-9004049076",
                      "contactType": "customer service",
                      "areaServed": "Worldwide",
                      "availableLanguage": ["English", "Hindi"]
                    },
                    "address": {
                      "@type": "PostalAddress",
                      "streetAddress": "22 to 25, 2nd Floor, Chapsey Building, 72/78, Shamaldas Gandhi Marg, Kalbadevi",
                      "addressLocality": "Mumbai",
                      "addressRegion": "Maharashtra",
                      "postalCode": "400002",
                      "addressCountry": "IN"
                    },
                    "foundingDate": "2005",
                    "foundingLocation": "Mumbai, India",
                    "description": "Ambica Pharma is a leading pharmaceutical manufacturer with WHO-GMP certification, producing high-quality medicines and exporting to over 25 countries worldwide since 2005.",
                    "slogan": "Quality Healthcare Solutions",
                    "numberOfEmployees": {
                      "@type": "QuantitativeValue",
                      "value": "100+"
                    },
                    "award": [
                      "ISO 9001 Certification",
                      "WHO-GMP Certification",
                      "Best Pharmaceutical Exporter Award"
                    ]
                  }
                `}
              </script>
              
              {/* Structured data for local business */}
              <script type="application/ld+json">
                {`
                  {
                    "@context": "https://schema.org",
                    "@type": "Pharmacy",
                    "name": "Ambica Pharma",
                    "image": "https://ambicapharma.com/lovable-uploads/a5979ffb-180b-4225-a1e8-15425f28d262.png",
                    "telephone": "+91-9004049076",
                    "email": "info@ambicapharma.com",
                    "address": {
                      "@type": "PostalAddress",
                      "streetAddress": "22 to 25, 2nd Floor, Chapsey Building, 72/78, Shamaldas Gandhi Marg, Kalbadevi",
                      "addressLocality": "Mumbai",
                      "addressRegion": "Maharashtra",
                      "postalCode": "400002",
                      "addressCountry": "IN"
                    },
                    "geo": {
                      "@type": "GeoCoordinates",
                      "latitude": "18.9538011",
                      "longitude": "72.8304729"
                    },
                    "openingHoursSpecification": [
                      {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": [
                          "Monday",
                          "Tuesday",
                          "Wednesday",
                          "Thursday",
                          "Friday"
                        ],
                        "opens": "09:00",
                        "closes": "18:00"
                      },
                      {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": "Saturday",
                        "opens": "09:00",
                        "closes": "15:00"
                      }
                    ],
                    "priceRange": "$$"
                  }
                `}
              </script>
            </Helmet>
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/global-reach" element={<GlobalReach />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/csr" element={<CSR />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/achievements" element={<Achievements />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
            <CookieConsent />
          </BrowserRouter>
        </TooltipProvider>
      </HelmetProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
