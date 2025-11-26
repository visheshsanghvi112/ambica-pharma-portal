import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Heart, Leaf, GraduationCap, Target, Users, BarChart, Handshake, ShieldCheck } from "lucide-react";

const CSR = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Helmet>
        <title>Corporate Social Responsibility | Ambica Pharma - Making a Difference</title>
        <meta name="description" content="Discover Ambica Pharma's Corporate Social Responsibility initiatives. Our commitment to healthcare access, environmental sustainability, education, and community welfare." />
        <meta name="keywords" content="CSR, corporate social responsibility, Ambica Pharma CSR, pharmaceutical CSR, healthcare initiatives, community welfare, sustainability, environmental responsibility, social impact" />
        <link rel="canonical" href="https://ambicapharma.net/csr" />
        <meta property="og:title" content="Corporate Social Responsibility | Ambica Pharma" />
        <meta property="og:description" content="Discover Ambica Pharma's Corporate Social Responsibility initiatives and our commitment to making a positive impact." />
        <meta property="og:url" content="https://ambicapharma.net/csr" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Corporate Social Responsibility | Ambica Pharma" />
        <meta name="twitter:description" content="Discover Ambica Pharma's CSR initiatives and commitment to social welfare." />
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
              <Heart className="h-4 w-4 inline mr-2" />
              Making a Difference
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary mb-6"
            >
              Corporate Social Responsibility
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
              We are committed to improving the quality of human life by enabling people to do more, feel better, and live longer through our social initiatives.
            </motion.p>
          </div>
        </div>
      </section>

      {/* CSR Philosophy - NEW */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-8"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Our CSR Philosophy</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  We believe that through our business we make a valuable contribution to society by developing and marketing medicines which improve people's lives. Our philosophy is to target support to selected programs that are innovative, sustainable and which produce tangible results.
                </p>
                <p>
                  As a globally trusted corporate citizen, Ambica Pharma is determined to complement its accessible and efficacious products with progressive endeavors for societal and ecological welfare. Through various path-breaking initiatives revolving around enriching health, infrastructure, education and environment, Ambica Pharma is committed to not just change, but revolutionize society in its quest to build a better tomorrow.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-70" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                <img
                  src="https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="CSR Vision"
                  className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <p className="font-display font-bold text-2xl mb-2">Building a Better Tomorrow</p>
                  <p className="text-white/80">Sustainable initiatives for global impact</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CSR Initiatives - NEW */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Our CSR Initiatives</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Focusing on key areas where we can make the most significant impact.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="h-8 w-8" />,
                title: "Healthcare Access",
                desc: "We work to improve access to quality healthcare in underserved communities through free medical camps, medicine donations, and health education programs.",
                list: ["Free medical check-up camps", "Medicine donation drives", "Health awareness programs"],
                color: "text-rose-500",
                bg: "bg-rose-500/10",
                glow: "bg-rose-50/50 dark:bg-rose-500/10 shadow-[0_20px_60px_-10px_rgba(244,63,94,0.5)] border-rose-500/30 ring-rose-500/20"
              },
              {
                icon: <Leaf className="h-8 w-8" />,
                title: "Environmental Sustainability",
                desc: "We are committed to reducing our environmental footprint through sustainable manufacturing practices, waste reduction, and conservation efforts.",
                list: ["Green manufacturing initiatives", "Tree plantation drives", "Waste management programs"],
                color: "text-emerald-500",
                bg: "bg-emerald-500/10",
                glow: "bg-emerald-50/50 dark:bg-emerald-500/10 shadow-[0_20px_60px_-10px_rgba(16,185,129,0.5)] border-emerald-500/30 ring-emerald-500/20"
              },
              {
                icon: <GraduationCap className="h-8 w-8" />,
                title: "Education & Skill Development",
                desc: "We support education and skill development initiatives to help create a more skilled and empowered workforce for the future.",
                list: ["Scholarships for deserving students", "School infrastructure development", "Vocational training programs"],
                color: "text-blue-500",
                bg: "bg-blue-500/10",
                glow: "bg-blue-50/50 dark:bg-blue-500/10 shadow-[0_20px_60px_-10px_rgba(59,130,246,0.5)] border-blue-500/30 ring-blue-500/20"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className={`group rounded-2xl p-8 transition-all duration-500 relative overflow-hidden ring-1 ${item.glow}`}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 ${item.bg} rounded-bl-full opacity-50 transition-transform group-hover:scale-110`} />

                <div className={`${item.bg} ${item.color} p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {item.desc}
                </p>

                <ul className="space-y-3">
                  {item.list.map((li, i) => (
                    <li key={i} className="flex items-center text-sm text-muted-foreground">
                      <span className={`w-2 h-2 rounded-full ${item.bg.replace('/10', '')} mr-3`} />
                      {li}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach - NEW */}
      <section className="py-24 bg-secondary/5">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">Our Approach to CSR</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Ambica Pharma, corporate social responsibility is not just a policy but a core part of our business strategy.
              We believe in creating shared value that benefits both society and our business.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {[
              {
                icon: <Target className="h-6 w-6" />,
                title: "Strategic Integration",
                desc: "We integrate CSR into our core business strategy, aligning social initiatives with our business objectives and expertise."
              },
              {
                icon: <Users className="h-6 w-6" />,
                title: "Stakeholder Engagement",
                desc: "We actively engage with stakeholders to understand their needs and expectations, and to ensure our CSR initiatives address real issues."
              },
              {
                icon: <BarChart className="h-6 w-6" />,
                title: "Impact Measurement",
                desc: "We measure the impact of our CSR initiatives to ensure they are making a real difference and to identify areas for improvement."
              },
              {
                icon: <Handshake className="h-6 w-6" />,
                title: "Partnerships & Collaboration",
                desc: "We collaborate with NGOs, governments, and other organizations to maximize the impact of our CSR initiatives."
              },
              {
                icon: <Leaf className="h-6 w-6" />,
                title: "Long-term Commitment",
                desc: "We make long-term commitments to our CSR initiatives, ensuring sustained positive impact on communities and the environment."
              },
              {
                icon: <ShieldCheck className="h-6 w-6" />,
                title: "Transparency & Accountability",
                desc: "We maintain transparency in our CSR activities and hold ourselves accountable for the impact of our initiatives."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-5 group p-4 rounded-xl hover:bg-background hover:shadow-md transition-all duration-300"
              >
                <div className="bg-primary/10 p-4 rounded-xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 shadow-sm">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Report - NEW */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 z-0" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary mb-4">
              Our Impact
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Measuring our commitment through meaningful outcomes. Every number represents lives touched, communities strengthened, and a future made brighter.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { number: "10,000+", label: "People benefited from medical camps", glow: "hover:bg-rose-50/50 dark:hover:bg-rose-500/10 hover:shadow-[0_20px_60px_-10px_rgba(244,63,94,0.5)] hover:border-rose-500/30 hover:ring-rose-500/20" },
              { number: "15,000+", label: "Trees planted in reforestation efforts", glow: "hover:bg-emerald-50/50 dark:hover:bg-emerald-500/10 hover:shadow-[0_20px_60px_-10px_rgba(16,185,129,0.5)] hover:border-emerald-500/30 hover:ring-emerald-500/20" },
              { number: "500+", label: "Students supported with scholarships", glow: "hover:bg-blue-50/50 dark:hover:bg-blue-500/10 hover:shadow-[0_20px_60px_-10px_rgba(59,130,246,0.5)] hover:border-blue-500/30 hover:ring-blue-500/20" },
              { number: "30%", label: "Reduction in carbon footprint", glow: "hover:bg-amber-50/50 dark:hover:bg-amber-500/10 hover:shadow-[0_20px_60px_-10px_rgba(251,191,36,0.5)] hover:border-amber-500/30 hover:ring-amber-500/20" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`bg-white/80 dark:bg-slate-900/50 backdrop-blur-sm border border-border/50 p-4 md:p-8 rounded-2xl text-center shadow-lg transition-all duration-500 group ring-1 ring-transparent ${stat.glow}`}
              >
                <h3 className="text-2xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-2 md:mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {stat.number}
                </h3>
                <p className="text-muted-foreground font-medium text-xs md:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved - NEW */}
      <section className="py-24 bg-gradient-to-r from-primary to-secondary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="container text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Get Involved with Our CSR Initiatives
            </h2>
            <p className="max-w-2xl mx-auto mb-10 text-lg text-primary-foreground/90 leading-relaxed">
              Join us in our mission to create positive change. Whether you're an individual, organization, or potential partner, there are many ways to contribute to our CSR efforts.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Button
                asChild
                size="lg"
                className="bg-background text-foreground hover:bg-background/90 hover:scale-105 transition-all duration-300 shadow-lg font-semibold text-lg px-8"
              >
                <Link to="/contact?type=partnership">Become a Partner</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-foreground text-foreground bg-transparent hover:bg-primary-foreground/10 hover:text-foreground hover:scale-105 transition-all duration-300 font-semibold text-lg px-8"
              >
                <Link to="/contact?type=volunteer">Volunteer with Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CSR;
