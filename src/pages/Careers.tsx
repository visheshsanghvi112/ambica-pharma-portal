import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import { Helmet } from "react-helmet-async";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  message: z.string().min(10, {
    message: "Cover letter must be at least 10 characters.",
  }),
  resume: z.any()
    .refine((file) => file?.length === 1, "Resume is required.")
    .refine(
      (file) => file?.[0]?.size <= 5000000,
      "Max file size is 5MB."
    )
    .refine(
      (file) =>
        ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(file?.[0]?.type),
      "Only PDF and Word documents are accepted."
    ),
});

const Careers = () => {
  const [showApplication, setShowApplication] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest in joining our team. We'll be in touch soon.",
    });
    form.reset();
    setShowApplication(false);
  }

  return (
    <>
      <Helmet>
        <title>Careers at Our Company | Join Our Team</title>
        <meta name="description" content="Explore career opportunities and join our innovative team." />
        <link rel="canonical" href="https://www.ourcompany.com/careers" />
      </Helmet>

      <section className="py-12 md:py-20 bg-gradient-to-b from-background to-secondary/5">
        <div className="container px-4 md:px-6">
          {!showApplication ? (
            <>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto text-center mb-12"
              >
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                  Export Billing Job Opening
                </h1>
                <p className="text-muted-foreground text-lg">
                  Join our team and play a critical role in managing export billing operations.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-card p-6 rounded-lg border border-border shadow-lg"
              >
                <h3 className="font-semibold text-lg mb-2">Export Billing Specialist</h3>
                <p className="mb-4 text-muted-foreground">
                  Location: Mumbai, Maharashtra | Type: Full-time
                </p>
                <p>
                  As an Export Billing Specialist, you will be responsible for managing international billing processes, ensuring compliance with regulations, and collaborating with cross-functional teams to facilitate smooth export operations.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-6 hover:bg-primary hover:text-white transition-colors"
                  onClick={() => setShowApplication(true)}
                >
                  Apply Now
                </Button>
              </motion.div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto bg-primary-foreground dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-border"
            >
              <div className="p-6 md:p-12">
                <div className="flex items-center mb-8">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowApplication(false)}
                    className="mr-4"
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" /> Back
                  </Button>
                  <h2 className="text-xl md:text-3xl font-bold text-primary">
                    Apply for Export Billing Specialist
                  </h2>
                </div>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input placeholder="john@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="+91 9999999999" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="resume"
                        render={({ field: { onChange, ...rest } }) => (
                          <FormItem className="md:col-span-2">
                            <FormLabel>Resume/CV</FormLabel>
                            <FormControl>
                              <Input
                                type="file"
                                className="cursor-pointer"
                                onChange={(e) => onChange(e.target.files)}
                                accept=".pdf,.doc,.docx"
                                {...rest}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Cover Letter</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us why you're a good fit for this role..."
                              className="min-h-32"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex justify-end gap-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setShowApplication(false)}
                      >
                        Cancel
                      </Button>
                      <Button type="submit">Submit Application</Button>
                    </div>
                  </form>
                </Form>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
};

export default Careers;