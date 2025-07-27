
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Lightbulb, Target, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const MissionVision = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
            Our Mission & Vision
          </h2>
          <p className="text-foreground/80">
            At Ambica Pharma, we're driven by a profound commitment to advancing global healthcare 
            through excellence, innovation, and accessibility.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Mission Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow h-full bg-white dark:bg-gray-800 overflow-hidden">
              <CardHeader className="bg-gradient rounded-t-lg py-6">
                <CardTitle className="text-white flex items-center gap-2">
                  <Target className="h-6 w-6" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 pb-8">
                <p className="text-foreground/80 mb-4">
                  To revolutionize healthcare by delivering high-quality, affordable, and innovative 
                  pharmaceutical products that enrich lives and improve global well-being.
                </p>
                <p className="text-foreground/80">
                  We are driven by a passion for excellence, a commitment to sustainability, and a 
                  vision to create a healthier future for all communities we serve.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Vision Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow h-full bg-white dark:bg-gray-800 overflow-hidden">
              <CardHeader className="bg-gradient-secondary rounded-t-lg py-6">
                <CardTitle className="text-white flex items-center gap-2">
                  <Lightbulb className="h-6 w-6" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 pb-8">
                <p className="text-foreground/80 mb-4">
                  To become a global beacon of pharmaceutical innovation and quality, setting the gold 
                  standard for excellence in the industry.
                </p>
                <p className="text-foreground/80">
                  We aspire to make advanced healthcare accessible to every corner of the world, 
                  empowering communities and creating a lasting legacy of trust and impact.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Values Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow h-full bg-white dark:bg-gray-800 overflow-hidden">
              <CardHeader className="bg-primary rounded-t-lg py-6">
                <CardTitle className="text-white flex items-center gap-2">
                  <Sparkles className="h-6 w-6" />
                  Our Values
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 pb-8">
                <p className="text-foreground/80 mb-4">
                  Integrity, innovation, and excellence form the foundation of everything we do at Ambica 
                  Pharma.
                </p>
                <p className="text-foreground/80">
                  We believe in ethical business practices, environmental responsibility, and putting 
                  people first—whether they're our customers, partners, or team members.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
