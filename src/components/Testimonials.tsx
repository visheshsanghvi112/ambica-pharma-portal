
import React from "react";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Ambica Pharma has been a trusted partner for years. Their products are top-notch, and their commitment to quality is unmatched.",
    author: "John Doe",
    position: "CEO, Health Corp"
  },
  {
    quote: "We've been using Ambica Pharma's products for our projects, and the results are always impressive. They truly set the standard in the industry.",
    author: "Jane Smith",
    position: "Marketing Director, MedSolutions"
  },
  {
    quote: "Working with Ambica Pharma has been a pleasure. They consistently deliver excellent products and services, and we can always rely on them.",
    author: "Michael Johnson",
    position: "Operations Manager, PharmaWorld"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-accent dark:bg-accent/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Hear from our valued clients about their experience working with Ambica Pharma.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow dark-card hover-lift animate-fade-up" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-secondary mb-4" />
                <p className="text-gray-600 dark:text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <h4 className="font-semibold text-primary">{testimonial.author}</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{testimonial.position}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 max-w-2xl mx-auto bg-white dark:bg-card p-8 rounded-lg shadow-lg dark-card animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <h3 className="text-2xl font-display font-bold text-primary mb-6 text-center">
            Share Your Testimonial
          </h3>
          
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="company">Your Company</Label>
                <Input id="company" placeholder="Enter your company name" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="testimonial">Your Testimonial</Label>
              <Textarea id="testimonial" placeholder="Write your testimonial here..." className="min-h-[120px]" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="photo">Your Photo (Optional)</Label>
              <Input id="photo" type="file" />
            </div>
            
            <Button className="w-full bg-gradient hover:opacity-90 transition-opacity">
              Submit Testimonial
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
