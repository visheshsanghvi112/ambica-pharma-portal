
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
    <ThemeProvider storageKey="ambica-theme">
      <HelmetProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Helmet>
              <title>Ambica Pharma - Quality Pharmaceutical Solutions</title>
              <meta
                name="description"
                content="Ambica Pharma is a leading manufacturer and distributor of pharmaceutical products with a global presence and commitment to quality healthcare solutions."
              />
              <meta name="keywords" content="pharmaceuticals, pharmaceutical manufacturer, drug distribution, Ambica Pharma, healthcare, medicine, Mumbai, India, global pharma" />
              <meta name="author" content="Ambica Pharma" />
              <meta property="og:title" content="Ambica Pharma - Quality Pharmaceutical Solutions" />
              <meta property="og:description" content="Ambica Pharma is a leading manufacturer and distributor of pharmaceutical products with a global presence and commitment to quality healthcare solutions." />
              <meta property="og:type" content="website" />
              <meta property="og:url" content="https://ambicapharma.com" />
              <meta property="og:image" content="/lovable-uploads/a5979ffb-180b-4225-a1e8-15425f28d262.png" />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content="Ambica Pharma - Quality Pharmaceutical Solutions" />
              <meta name="twitter:description" content="Ambica Pharma is a leading manufacturer and distributor of pharmaceutical products with a global presence and commitment to quality healthcare solutions." />
              <meta name="twitter:image" content="/lovable-uploads/a5979ffb-180b-4225-a1e8-15425f28d262.png" />
              <link rel="canonical" href="https://ambicapharma.com" />
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
