import React from "react";
import { Clock, Users, Award, Activity, Sparkles, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const statistics = [
  {
    title: "Years of Marketing & Distribution",
    value: "19",
    icon: Clock,
    gradient: "from-secondary/70 via-primary/80 to-primary/90"
  },
  {
    title: "Happy Customers",
    value: "9242+",
    icon: Users,
    gradient: "from-secondary/70 via-primary/80 to-primary/90"
  },
  {
    title: "Years of Experience",
    value: "22",
    icon: Award,
    gradient: "from-secondary/70 via-primary/80 to-primary/90"
  },
  {
    title: "Quality Products",
    value: "1000+",
    icon: Activity,
    gradient: "from-secondary/70 via-primary/80 to-primary/90"
  }
];

const proofPoints = [
  {
    title: "WHO-GMP governed supply",
    description: "Every lot mapped to validated SOPs, stability data, and audit trails."
  },
  {
    title: "Pan-India + export dispatch",
    description: "Dedicated fulfillment windows for hospitals, tenders, and global partners."
  },
  {
    title: "Clinical-grade responsiveness",
    description: "Account leads mirror enterprise SLAs so stakeholder queries never stall."
  }
];

const Statistics = () => {
  // HowTo schema for implementing pharmaceutical quality control
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How Ambica Pharma Ensures Pharmaceutical Quality",
    "description": "Learn how Ambica Pharma implements rigorous quality control measures for pharmaceutical products.",
    "totalTime": "PT2H",
    "tool": [
      {
        "@type": "HowToTool",
        "name": "Quality Testing Equipment"
      },
      {
        "@type": "HowToTool",
        "name": "WHO-GMP Standards Documentation"
      }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "name": "Sourcing Quality Raw Materials",
        "text": "We source pharmaceutical ingredients from WHO-GMP certified suppliers.",
        "image": "https://ambicapharma.net/lovable-uploads/b9310eb6-c2d2-4e00-acdd-dbca91490105.png",
        "url": "https://ambicapharma.net/quality-control"
      },
      {
        "@type": "HowToStep",
        "name": "Manufacturing Excellence",
        "text": "Our manufacturing partners follow strict quality protocols and international standards.",
        "image": "https://ambicapharma.net/lovable-uploads/1ba95355-1c30-42b5-bfbd-fc0bb85e1a41.png",
        "url": "https://ambicapharma.net/who-gmp-certification"
      },
      {
        "@type": "HowToStep",
        "name": "Quality Testing",
        "text": "All products undergo rigorous testing to ensure efficacy and safety.",
        "image": "https://ambicapharma.net/lovable-uploads/93092566-4a97-4281-9733-909843f42279.png",
        "url": "https://ambicapharma.net/quality-control"
      }
    ]
  };

  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-br from-primary/5 via-white to-secondary/5 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent" />
      <div className="absolute -left-20 top-40 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="container relative z-10 space-y-20">
        <div className="grid gap-16 lg:grid-cols-[1fr,1.2fr] items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 dark:bg-blue-900/20 px-4 py-2 text-sm font-medium text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-800">
              <Sparkles className="h-4 w-4" />
              Proven Track Record
            </span>

            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight text-slate-900 dark:text-white">
              Numbers that define our <span className="text-blue-600">excellence</span>
            </h2>

            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              The scorecard buyers ask for - operational tenure, partner depth, experience, and SKU strength - presented with transparency and pride.
            </p>

            <div className="space-y-6">
              {proofPoints.map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4 p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors duration-300"
                >
                  <div className="mt-1 h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 shrink-0">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                      {point.title}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 mt-1">{point.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {statistics.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`group relative overflow-hidden rounded-[2rem] bg-white/40 dark:bg-slate-900/40 p-8 shadow-[0_10px_32px_rgba(15,23,42,0.10)] dark:shadow-none border border-white/60 dark:border-slate-800 backdrop-blur-sm ring-1 ring-white/40 dark:ring-slate-800/40 hover:-translate-y-2 transition-all duration-500 ${index === 1 || index === 3 ? 'lg:translate-y-12' : ''} ${
                    index === 0
                      ? 'hover:bg-violet-50/50 dark:hover:bg-violet-500/10 hover:shadow-[0_20px_60px_-10px_rgba(139,92,246,0.5)] hover:border-violet-500/30 hover:ring-violet-500/20'
                      : index === 1
                        ? 'hover:bg-rose-50/50 dark:hover:bg-rose-500/10 hover:shadow-[0_20px_60px_-10px_rgba(244,63,94,0.5)] hover:border-rose-500/30 hover:ring-rose-500/20'
                        : index === 2
                          ? 'hover:bg-amber-50/50 dark:hover:bg-amber-500/10 hover:shadow-[0_20px_60px_-10px_rgba(251,191,36,0.5)] hover:border-amber-500/30 hover:ring-amber-500/20'
                          : 'hover:bg-teal-50/50 dark:hover:bg-teal-500/10 hover:shadow-[0_20px_60px_-10px_rgba(20,184,166,0.5)] hover:border-teal-500/30 hover:ring-teal-500/20'
                  }`}
                >
                  <div className={`absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-15 transition-opacity duration-500 ${
                    index === 0 ? 'text-violet-500' : index === 1 ? 'text-rose-500' : index === 2 ? 'text-amber-500' : 'text-teal-500'
                  }`}>
                    <Icon className="h-24 w-24" />
                  </div>

                  <div className="relative z-10 flex flex-col gap-4">
                    <div className={`h-12 w-12 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-inner shadow-white/50 ${
                      index === 0
                        ? 'bg-gradient-to-br from-violet-100 to-violet-50 dark:from-violet-900/30 dark:to-violet-800/20 text-violet-600 dark:text-violet-400'
                        : index === 1
                          ? 'bg-gradient-to-br from-rose-100 to-rose-50 dark:from-rose-900/30 dark:to-rose-800/20 text-rose-600 dark:text-rose-400'
                          : index === 2
                            ? 'bg-gradient-to-br from-amber-100 to-amber-50 dark:from-amber-900/30 dark:to-amber-800/20 text-amber-600 dark:text-amber-400'
                            : 'bg-gradient-to-br from-teal-100 to-teal-50 dark:from-teal-900/30 dark:to-teal-800/20 text-teal-600 dark:text-teal-400'
                    }`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-4xl font-bold text-slate-900 dark:text-white tracking-tight">{stat.value}</p>
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-2">{stat.title}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="grid items-center gap-12 md:grid-cols-2 rounded-[2.5rem] p-8 md:p-12 border border-white/30 dark:border-slate-800 bg-gradient-to-br from-primary via-primary/90 to-secondary text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.6),_transparent_50%)] pointer-events-none" />
          <div className="absolute -right-16 -bottom-16 w-72 h-72 rounded-full bg-white/10 blur-3xl opacity-30 pointer-events-none" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white">Built for healthcare operators</h3>
            <p className="text-white/80 text-lg leading-relaxed">
              From rapid fulfillment to multi-format formulations, every workflow is tuned for clinicians, pharmacists, procurement leads, and global distributors who demand consistency without the visual noise.
            </p>
            <div className="space-y-4 pt-4">
              {["Fast-tracked dispatch across India & exports", "GMP-documented QC snapshots on demand", "Extensive SKU mix across therapies"].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 text-white/90"
                >
                  <div className="h-2 w-2 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.6)]" />
                  <p className="font-medium">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl shadow-2xl shadow-blue-900/20 ring-1 ring-white/30"
          >
            <img
              src="https://images.unsplash.com/photo-1576602976047-174e57a47881?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80"
              alt="Ambica Pharma quality operations"
              className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <div className="inline-block px-3 py-1 rounded-lg bg-white/20 backdrop-blur-md border border-white/10 text-xs font-medium mb-3">
                QUALITY DESK
              </div>
              <p className="text-xl font-bold">Live oversight on packaging, serialization, and cold-chain prep.</p>
            </div>
          </motion.div>
        </div>

        {/* Add HowTo Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      </div>
    </section>
  );
};

export default Statistics;
