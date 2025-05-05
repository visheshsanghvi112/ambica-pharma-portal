
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "./components/ThemeProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";
import WhatsAppButton from "./components/WhatsAppButton";
import ChatBot from "./components/ChatBot";
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
import SEOHead from "./components/SEOHead";

// Create a new QueryClient instance
const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="ambica-theme">
        <HelmetProvider>
          <TooltipProvider>
            <BrowserRouter>
              <SEOHead
                title="Leading Pharmaceutical Wholesaler, Trader & Exporter in India"
                description="Ambica Pharma is a trusted wholesaler, trader, and exporter of high-quality pharmaceutical products with WHO-GMP certification, serving 25+ countries worldwide since 2005."
                keywords="Ambica Pharma, pharmaceutical distributor, drug distribution, pharma exporter, India pharma company, WHO-GMP certified, quality medicines, healthcare solutions, generic drugs, pharmaceutical products, medicine supplier, tablet wholesaler, capsule trader, injectable medicines, pharmaceutical wholesaler, drug distributor, Mumbai pharma, pharmaceutical industry, pharmaceutical formulations, healthcare company, Ambicapharma, Ammbica, Ambica"
              />
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
              <WhatsAppButton />
              <ChatBot />
              <CookieConsent />
              <Toaster />
              <Sonner />
            </BrowserRouter>
          </TooltipProvider>
        </HelmetProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
