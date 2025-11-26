import React from "react";
import HeroSection from "../components/HeroSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Building2,
  CalendarCheck,
  CheckCircle,
  Factory,
  Globe,
  Handshake,
  Layers,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Truck,
  UserCheck
} from "lucide-react";
import Statistics from "../components/Statistics";
import Testimonials from "../components/Testimonials";
import SEOHead from "../components/SEOHead";

const trustSignals = [
  { title: "WHO–GMP Units", description: "Audited multi-therapeutic lines" },
  { title: "ISO 9001:2015", description: "Documented QMS + GDP SOPs" },
  { title: "Cold-Chain Ready", description: "2–8°C monitored fulfillment" },
  { title: "Global Export Desk", description: "45+ regulated & semi-regulated markets" }
];

const highlightMetrics = [
  { title: "Countries Served", value: "45+", icon: <Globe className="h-5 w-5 text-primary" /> },
  { title: "Healthcare Partners", value: "300k+", icon: <UserCheck className="h-5 w-5 text-secondary" /> },
  { title: "Formulations", value: "5k+", icon: <TrendingUp className="h-5 w-5 text-primary" /> },
  { title: "Awards & Citations", value: "35+", icon: <Award className="h-5 w-5 text-secondary" /> }
];

const flagshipSegments = [
  {
    title: "Tablets & Capsules",
    description: "From common generics to specialty formulations — antibiotics, analgesics, vitamins, cardiac care, and more. Bulk or retail, we source it all.",
    image: "/lovable-uploads/Pain%20Management.png",
    tags: ["Generics", "Branded", "Bulk Supply"]
  },
  {
    title: "Injectables & Vials",
    description: "Hospital-grade injectables, ampoules, and lyophilized products. Cold-chain ready with complete documentation for tenders.",
    image: "/lovable-uploads/Immunity.png",
    tags: ["IV Solutions", "Ampoules", "Tender Ready"]
  },
  {
    title: "Syrups & Suspensions",
    description: "Pediatric formulations, cough syrups, antacids, and nutraceutical liquids. Available in multiple pack sizes for retail and wholesale.",
    image: "/lovable-uploads/Sleep%20Management.png",
    tags: ["Pediatric", "OTC Range", "Multi-Pack"]
  },
  {
    title: "Specialty & Nutraceuticals",
    description: "Derma care, wellness supplements, ayurvedic products, and cosmeceuticals. If you need it, we can arrange manufacturing or sourcing.",
    image: "/lovable-uploads/Anti%20Aging.png",
    tags: ["Derma", "Wellness", "Custom Sourcing"]
  }
];

const supplyPrograms = [
  {
    title: "Hospital & Institutional Supply",
    description: "Aggregator model for tertiary care hospitals, group purchasing organizations, and state tenders.",
    icon: <Building2 className="h-6 w-6 text-blue-600" />,
    bullets: ["Therapeutic bundling by specialty", "On-site pharmacovigilance kits", "Quarterly demand forecasting"]
  },
  {
    title: "International Private Label",
    description: "Concept-to-market support for distributors expanding their house brand portfolio.",
    icon: <Handshake className="h-6 w-6 text-indigo-600" />,
    bullets: ["Artwork + dossier support", "Flexible MOQ & blistering", "Regulatory document library"]
  },
  {
    title: "Digital & Retail Pharmacies",
    description: "Rapid replenishment for omnichannel pharmacies and telehealth platforms.",
    icon: <Truck className="h-6 w-6 text-emerald-600" />,
    bullets: ["Same-week dispatch for 200+ SKUs", "Smart lot traceability", "Cold-chain add-ons"]
  },
  {
    title: "Specialty Clinics & Wellness Chains",
    description: "Curated therapy bundles for aesthetic, fertility, and wellness group practices.",
    icon: <Sparkles className="h-6 w-6 text-pink-500" />,
    bullets: ["Cross-therapy starter kits", "White-glove shelf readiness", "Dedicated clinical educator desk"]
  }
];

const supplyStats = [
  { label: "Hospital partners", value: "600+", helper: "Aggregator & tender-ready" },
  { label: "Private label launches", value: "120+", helper: "Concept-to-commercialization" },
  { label: "SKUs with cold chain", value: "80+", helper: "Validated insulated shipping" }
];

const qualityStack = [
  {
    title: "Regulatory Confidence",
    description: "WHO–GMP, ISO 9001, and GDP aligned operations audited every 6 months.",
    icon: <ShieldCheck className="h-6 w-6 text-sky-600" />
  },
  {
    title: "Manufacturing Depth",
    description: "Dedicated beta-lactam, hormonal, and general formulation blocks with HEPA controls.",
    icon: <Factory className="h-6 w-6 text-amber-600" />
  },
  {
    title: "Secure Logistics",
    description: "Validated 2–8°C boxes, GPS-enabled fleet, and serialized cartons for exports.",
    icon: <Layers className="h-6 w-6 text-purple-600" />
  },
  {
    title: "Documentation Desk",
    description: "Dossier compilation, COA sharing, and CTD-ready paperwork for quick filings.",
    icon: <CalendarCheck className="h-6 w-6 text-emerald-600" />
  }
];

const Index = () => {


  // Enhanced SEO structured data for the homepage
  const homePageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://ambicapharma.net/#webpage",
    "url": "https://ambicapharma.net/",
    "name": "Ambica Pharma - Leading Pharmaceutical Wholesaler, Trader & Exporter in India",
    "isPartOf": {
      "@id": "https://ambicapharma.net/#website"
    },
    "primaryImageOfPage": {
      "@id": "https://ambicapharma.net/lovable-uploads/e75f626d-a490-496b-8817-294d7128b441.png"
    },
    "datePublished": "2005-01-01T00:00:00+00:00",
    "dateModified": "2025-11-25T00:00:00+00:00",
    "description": "Ambica Pharma is a top pharmaceutical wholesaler, trader and exporter offering high-quality medicines, tablets, capsules, injectables, and drops with WHO-GMP and ISO 9001 certification. Serving global markets in 45+ countries since 2005.",
    "breadcrumb": {
      "@id": "https://ambicapharma.net/#breadcrumb"
    },
    "inLanguage": "en-US",
    "potentialAction": [
      {
        "@type": "ReadAction",
        "target": ["https://ambicapharma.net/"]
      },
      {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://ambicapharma.net/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    ],
    "mainEntity": {
      "@type": "Organization",
      "name": "Ambica Pharma",
      "url": "https://ambicapharma.net",
      "logo": "https://ambicapharma.net/lovable-uploads/e75f626d-a490-496b-8817-294d7128b441.png",
      "description": "Leading pharmaceutical wholesaler, trader, and exporter of tablets, capsules, and injectables with WHO-GMP certification, serving global markets since 2005.",
      "founders": [
        {
          "@type": "Person",
          "name": "Dilip Shah",
          "jobTitle": "Founder & Managing Director"
        }
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "22 to 25, 2nd Floor, Chapsey Building, 72/78, Shamaldas Gandhi Marg, Kalbadevi",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "postalCode": "400 002",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9004049076",
        "contactType": "customer service",
        "availableLanguage": ["English", "Hindi"]
      },
      "sameAs": [
        "https://www.facebook.com/ambicapharma",
        "https://twitter.com/ambicapharma",
        "https://www.linkedin.com/company/ambica-pharma"
      ]
    }
  };

  const handleAccordImageError = React.useCallback(() => {
    console.error("Failed to load accord map image at /lovable-uploads/accord-healthier-worlds_0.png")
  }, [])

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Ambica Pharma - Leading Pharmaceutical Wholesaler, Trader & Exporter in India"
        description="Ambica Pharma is a top pharmaceutical wholesaler, trader and exporter offering high-quality medicines, tablets, capsules, injectables, and drops with WHO-GMP and ISO 9001 certification. Serving global markets in 45+ countries since 2005."
        keywords="pharmaceutical wholesaler, pharmaceutical trader, medicine exporter, Ambica Pharma, AmbicaPharma, Ambica, Ambicapharma, Mumbai pharmaceutical company, pharmaceutical tablets, pharmaceutical capsules, pharmaceutical injectables, medicine manufacturer, drug distributor, pharmaceutical drops, WHO-GMP certified, ISO 9001 pharma, healthcare products, generic medicine exporter, pharmaceutical suppliers India, bulk medicine distributor, pharmaceutical business, pharma franchise, pharmaceutical company Mumbai, affordable medicines, quality medicines, global pharma exporter"
        structuredData={homePageStructuredData}
        publishedDate="2005-01-01"
        modifiedDate="2025-11-25"
      />

      <HeroSection />

      {/* Immediate trust strip - gradient aligned with Global Access */}
      <section className="relative hidden md:block py-8 bg-gradient-to-r from-primary via-primary/90 to-secondary text-white overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.6),_transparent_60%)]" />
        <div className="container relative z-10">
          <div className="grid grid-cols-4 gap-5">
            {trustSignals.map((signal, index) => (
              <motion.div
                key={signal.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center px-5 py-6 rounded-[24px] bg-white/10 border border-white/20 backdrop-blur-md shadow-[0_15px_35px_rgba(15,23,42,0.2)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_48px_rgba(30,64,175,0.18)] hover:border-white/40"
              >
                <div className="h-11 w-11 rounded-xl flex items-center justify-center mb-4 bg-white/20 border border-white/30">
                  <BadgeCheck className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-semibold text-white text-lg mb-1">{signal.title}</h3>
                <p className="text-sm text-white/85 font-medium">{signal.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ambica snapshot - Redesigned with Official Gradient & Micro-details */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-white to-secondary/5 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-hidden relative">
        {/* Decorative Blobs - Refined */}
        <div className="absolute top-0 left-0 w-full h-full opacity-40 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 blur-[80px] animate-blob"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gradient-to-r from-secondary/10 to-primary/10 blur-[80px] animate-blob" style={{ animationDelay: "2s" }}></div>
        </div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-slate-800/80 text-primary dark:text-primary-light text-sm font-medium border border-primary/10 dark:border-primary/20 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 ring-1 ring-white/60"
              >
                <Sparkles className="h-4 w-4 animate-pulse" />
                <span>19+ years of excellence</span>
              </motion.div>

              <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight text-slate-900 dark:text-white tracking-tight">
                Global Pharma <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Supply Chain</span>
              </h2>

              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl text-balance">
                We bridge the gap between premium Indian manufacturing and global healthcare demands. Your trusted partner for hospital tenders, distribution networks, and private label expansion.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-[0_10px_40px_-10px_rgba(37,99,235,0.5)] hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.6)] rounded-full px-8 border-0 hover:scale-105 transition-all duration-300 ring-1 ring-white/20">
                  <Link to="/contact" className="flex items-center gap-2">
                    Start Partnership
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-slate-200/60 hover:bg-slate-50/50 dark:border-slate-700 dark:hover:bg-slate-800/50 backdrop-blur-sm shadow-lg shadow-slate-200/20 hover:shadow-xl transition-all duration-300">
                  <Link to="/about">Our Story</Link>
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-8 border-t border-slate-200/60 dark:border-slate-800">
                <div className="flex items-start gap-3 group">
                  <div className="p-2 rounded-lg bg-primary/5 dark:bg-primary/20 text-primary dark:text-primary-light group-hover:bg-primary/10 transition-colors duration-300 shadow-sm">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white tracking-tight">Regulatory Ready</h4>
                    <p className="text-sm text-slate-500 mt-1">WHO-GMP & ISO certified operations</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group">
                  <div className="p-2 rounded-lg bg-secondary/5 dark:bg-secondary/20 text-secondary dark:text-secondary-light group-hover:bg-secondary/10 transition-colors duration-300 shadow-sm">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white tracking-tight">Global Reach</h4>
                    <p className="text-sm text-slate-500 mt-1">Exporting to 45+ countries</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {highlightMetrics.map((metric, index) => (
                <motion.div
                  key={metric.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`group p-6 rounded-3xl bg-white/30 dark:bg-slate-900/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] dark:shadow-none border border-white/50 dark:border-slate-800 flex flex-col gap-4 backdrop-blur-md hover:-translate-y-2 transition-all duration-500 ${index === 1 || index === 2 ? 'md:translate-y-12' : ''} ${index === 0
                      ? 'hover:bg-primary/10 hover:shadow-[0_20px_60px_-10px_rgba(37,99,235,0.5)] hover:border-primary/30'
                      : index === 1
                        ? 'hover:bg-emerald-50/50 dark:hover:bg-emerald-500/10 hover:shadow-[0_20px_60px_-10px_rgba(16,185,129,0.5)] hover:border-emerald-500/30'
                        : index === 2
                          ? 'hover:bg-sky-50/50 dark:hover:bg-sky-500/10 hover:shadow-[0_20px_60px_-10px_rgba(56,189,248,0.5)] hover:border-sky-500/30'
                          : 'hover:bg-amber-50/50 dark:hover:bg-amber-500/10 hover:shadow-[0_20px_60px_-10px_rgba(251,191,36,0.5)] hover:border-amber-500/30'
                    }`}
                >
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-inner shadow-white/50 ring-1 ring-white/50">
                    {metric.icon}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">{metric.value}</h3>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">{metric.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Therapeutic focus - Modern Cards with Gradient Background */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 text-primary text-xs font-bold tracking-wider uppercase mb-4 border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              Wholesale • Retail • Export
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white tracking-tight mb-4">
              Any Medicine. <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Any Quantity.</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              From a single strip to container loads — we source, supply, and deliver. <br className="hidden md:block" />
              <span className="font-semibold text-slate-700 dark:text-slate-300">5,000+ formulations</span> across every therapeutic category, ready when you need them.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {flagshipSegments.map((segment, index) => (
              <motion.div
                key={segment.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative h-[300px] rounded-[1.5rem] overflow-hidden cursor-pointer shadow-lg shadow-slate-200/50 dark:shadow-none ring-1 ring-slate-200 dark:ring-slate-800"
              >
                {/* Image Background */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={segment.image}
                    alt={`${segment.title} - Ambica Pharma therapeutic category`}
                    loading="lazy"
                    width={600}
                    height={300}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-slate-900/40 to-transparent opacity-80 transition-opacity duration-500" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="transform transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 -translate-y-2 group-hover:translate-y-0">
                      {segment.tags.map((tag) => (
                        <span key={tag} className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white text-slate-900 shadow-sm">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title & Desc */}
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1.5 tracking-tight leading-tight">
                      {segment.title}
                    </h3>
                    <p className="text-slate-300 text-sm line-clamp-2 group-hover:line-clamp-none group-hover:text-white transition-colors duration-300 mb-3">
                      {segment.description}
                    </p>

                    {/* Action */}
                    <div className="flex items-center gap-2 text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 translate-y-2 group-hover:translate-y-0">
                      <span className="border-b border-white/60 pb-px">Request Quote</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Supply programs - split layout with detailed stats */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-white to-secondary/5 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="container">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-8 rounded-[32px] bg-gradient-to-br from-primary/90 via-primary/80 to-secondary/80 text-white relative overflow-hidden shadow-[0_35px_70px_rgba(2,6,23,0.45)] border border-white/10"
            >
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.8),_transparent_60%)] pointer-events-none" />
              <div className="relative z-10">
                <span className="text-white/80 tracking-[0.2em] uppercase text-xs font-semibold">Supply Chain</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold mt-4 mb-4 leading-tight">
                  Tailored Supply Solutions
                </h2>
                <p className="text-white/70 text-lg leading-relaxed mb-8">
                  Whether you're a hospital network, a global distributor, or a digital pharmacy, our supply chain is optimized for your specific needs.
                </p>

                <div className="space-y-5 mb-8">
                  {supplyStats.map((stat) => (
                    <div key={stat.label} className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-2xl bg-white/10 text-white flex items-center justify-center font-bold text-xl shadow-inner shadow-black/40 border border-white/10">
                        {stat.value}
                      </div>
                      <div>
                        <p className="text-base font-semibold">{stat.label}</p>
                        <p className="text-sm text-white/60">{stat.helper}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Button
                  asChild
                  size="lg"
                  className="bg-white text-slate-900 hover:bg-white/90 hover:scale-105 transition-all duration-300 px-8 rounded-full"
                >
                  <Link to="/contact" className="flex items-center gap-2">
                    Design Your Supply Plan
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2">
              {supplyPrograms.map((program, index) => (
                <motion.div
                  key={program.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`group relative p-8 rounded-[28px] bg-white/85 dark:bg-slate-800/70 border border-slate-100 dark:border-slate-700 backdrop-blur-md shadow-[0_18px_45px_rgba(15,23,42,0.08)] hover:-translate-y-2 transition-all duration-500 ring-1 ring-transparent ${
                    index === 0
                      ? 'hover:bg-blue-50/50 dark:hover:bg-blue-500/10 hover:shadow-[0_20px_60px_-10px_rgba(59,130,246,0.5)] hover:border-blue-500/30 hover:ring-blue-500/20'
                      : index === 1
                        ? 'hover:bg-indigo-50/50 dark:hover:bg-indigo-500/10 hover:shadow-[0_20px_60px_-10px_rgba(99,102,241,0.5)] hover:border-indigo-500/30 hover:ring-indigo-500/20'
                        : index === 2
                          ? 'hover:bg-emerald-50/50 dark:hover:bg-emerald-500/10 hover:shadow-[0_20px_60px_-10px_rgba(16,185,129,0.5)] hover:border-emerald-500/30 hover:ring-emerald-500/20'
                          : 'hover:bg-pink-50/50 dark:hover:bg-pink-500/10 hover:shadow-[0_20px_60px_-10px_rgba(236,72,153,0.5)] hover:border-pink-500/30 hover:ring-pink-500/20'
                  }`}
                >
                  <div className={`h-14 w-14 rounded-2xl shadow-inner shadow-white/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-white/60 dark:border-white/10 ${
                    index === 0
                      ? 'bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-800/20'
                      : index === 1
                        ? 'bg-gradient-to-br from-indigo-100 to-indigo-50 dark:from-indigo-900/30 dark:to-indigo-800/20'
                        : index === 2
                          ? 'bg-gradient-to-br from-emerald-100 to-emerald-50 dark:from-emerald-900/30 dark:to-emerald-800/20'
                          : 'bg-gradient-to-br from-pink-100 to-pink-50 dark:from-pink-900/30 dark:to-pink-800/20'
                  }`}>
                    {program.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">{program.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">{program.description}</p>
                  <ul className="space-y-3">
                    {program.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <CheckCircle className="h-5 w-5 text-secondary shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality and compliance - Feature Grid with Micro-details */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-white to-secondary/5 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-hidden relative">
        {/* Background pattern - Refined */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:20px_20px]" />

        <div className="container relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 mb-16">
            <div className="max-w-2xl">
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">Quality Assurance</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 mb-6 text-slate-900 dark:text-white tracking-tight">Uncompromising Quality Standards</h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg text-balance">
                Our commitment to quality is validated by international certifications and rigorous internal audits. We ensure every product meets global safety standards.
              </p>
            </div>
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] rounded-full px-8 border-0 hover:scale-105 transition-all duration-300 ring-1 ring-white/20">
              <Link to="/about">View Certifications</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityStack.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group p-6 rounded-2xl bg-white/40 dark:bg-slate-800/40 border border-white/60 dark:border-slate-700 backdrop-blur-sm ring-1 ring-white/40 dark:ring-slate-800/40 hover:-translate-y-2 transition-all duration-500 ${
                  index === 0
                    ? 'hover:bg-sky-50/50 dark:hover:bg-sky-500/10 hover:shadow-[0_20px_60px_-10px_rgba(56,189,248,0.5)] hover:border-sky-500/30 hover:ring-sky-500/20'
                    : index === 1
                      ? 'hover:bg-amber-50/50 dark:hover:bg-amber-500/10 hover:shadow-[0_20px_60px_-10px_rgba(251,191,36,0.5)] hover:border-amber-500/30 hover:ring-amber-500/20'
                      : index === 2
                        ? 'hover:bg-purple-50/50 dark:hover:bg-purple-500/10 hover:shadow-[0_20px_60px_-10px_rgba(168,85,247,0.5)] hover:border-purple-500/30 hover:ring-purple-500/20'
                        : 'hover:bg-emerald-50/50 dark:hover:bg-emerald-500/10 hover:shadow-[0_20px_60px_-10px_rgba(16,185,129,0.5)] hover:border-emerald-500/30 hover:ring-emerald-500/20'
                }`}
              >
                <div className={`h-12 w-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 shadow-inner shadow-white/50 ${
                  index === 0
                    ? 'bg-gradient-to-br from-sky-100 to-sky-50 dark:from-sky-900/30 dark:to-sky-800/20'
                    : index === 1
                      ? 'bg-gradient-to-br from-amber-100 to-amber-50 dark:from-amber-900/30 dark:to-amber-800/20'
                      : index === 2
                        ? 'bg-gradient-to-br from-purple-100 to-purple-50 dark:from-purple-900/30 dark:to-purple-800/20'
                        : 'bg-gradient-to-br from-emerald-100 to-emerald-50 dark:from-emerald-900/30 dark:to-emerald-800/20'
                }`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white tracking-tight">{item.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global health accord style CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-secondary text-white py-10 md:py-16">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.45),_transparent_50%)]" />
        <div className="container relative z-10 grid gap-8 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-sm font-semibold tracking-widest uppercase">
              <span className="h-2 w-2 rounded-full bg-white animate-ping" />
              Global Access
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold leading-tight">
              An Accord for a Healthier World
            </h2>
            <p className="text-lg text-white/90 leading-relaxed max-w-xl">
              Where people live shouldn’t impact the quality of their healthcare and income shouldn’t determine health outcomes. We partner with governments, NGOs, and distributors to expand equitable access everywhere.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-[#251cb5] hover:bg-white/90 px-8 rounded-full shadow-lg shadow-blue-900/30"
            >
              <Link to="/contact" className="font-semibold">
                Learn More About The Accord
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-lg aspect-square">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/50 to-white/10 blur-3xl opacity-70" />
              <div className="absolute inset-6 rounded-full bg-white/10 border border-white/40 backdrop-blur-[2px]" />
              <div className="absolute inset-10 rounded-full bg-gradient-to-br from-white/40 via-transparent to-primary/30 opacity-70 mix-blend-soft-light pointer-events-none" />
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 h-20 w-48 bg-primary/30 blur-3xl opacity-60" />
              <img
                src="/lovable-uploads/accord-healthier-worlds_0.png.webp"
                alt="Ambica Pharma global healthcare access map - exporting to 45+ countries"
                loading="lazy"
                width={500}
                height={500}
                onError={handleAccordImageError}
                className="relative z-10 w-full h-full object-contain drop-shadow-[0_25px_60px_rgba(15,23,42,0.35)] md:scale-110 scale-100 origin-center saturate-[1.05] contrast-[1.05]"
              />
              <div className="absolute inset-6 rounded-full border border-white/30 opacity-60 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </section>

      <Statistics />

      <Testimonials />
    </div>
  );
};

export default Index;
