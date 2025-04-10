
import React, { useState, useRef } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Label } from "@/components/ui/label";
import { submitCareerApplication, logAnalyticsEvent } from "@/lib/firebase";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const MAX_FILE_SIZE = 5000000; // 5MB
const ACCEPTED_FILE_TYPES = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];

const applicationFormSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits." })
    .refine((val) => /^[0-9+\- ]+$/.test(val), {
      message: "Phone number can only contain digits, spaces, and +/- symbols.",
    }),
  position: z.string().min(1, { message: "Please select a position." }),
  experience: z.string().min(1, { message: "Please select your experience level." }),
  education: z.string().min(2, { message: "Please provide your education details." }),
  coverLetter: z.string().min(50, { message: "Cover letter must be at least 50 characters." })
    .max(1000, { message: "Cover letter cannot exceed 1000 characters." }),
});

type ApplicationFormValues = z.infer<typeof applicationFormSchema>;

interface CareerApplicationFormProps {
  openPositions: { id: string; title: string }[];
}

const CareerApplicationForm = ({ openPositions }: CareerApplicationFormProps) => {
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileError, setFileError] = useState<string | null>(null);
  const [submissionStatus, setSubmissionStatus] = useState<{
    status: 'idle' | 'success' | 'error';
    message: string;
  }>({ status: 'idle', message: '' });

  const form = useForm<ApplicationFormValues>({
    resolver: zodResolver(applicationFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      position: "",
      experience: "",
      education: "",
      coverLetter: "",
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError(null);
    
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      
      if (file.size > MAX_FILE_SIZE) {
        setFileError("Resume file must be less than 5MB.");
        return;
      }
      
      if (!ACCEPTED_FILE_TYPES.includes(file.type)) {
        setFileError("Only PDF and Word documents are accepted.");
        return;
      }
      
      setResumeFile(file);
      console.log("Resume file selected:", file.name, file.type, `${(file.size / 1024 / 1024).toFixed(2)} MB`);
    }
  };

  const onSubmit = async (values: ApplicationFormValues) => {
    // Reset submission status
    setSubmissionStatus({ status: 'idle', message: '' });
    
    if (!resumeFile) {
      setFileError("Please upload your resume before submitting.");
      // Scroll to file input for better visibility of error
      if (fileInputRef.current) {
        fileInputRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setIsSubmitting(true);
    
    // Log the event to analytics
    logAnalyticsEvent('career_application_submit', {
      position: values.position,
      experience: values.experience
    });

    try {
      console.log("Preparing application data for submission");
      
      // In a real implementation, you would upload the file to Firebase Storage
      // and get the download URL to store in Firestore
      const applicationData = {
        ...values,
        resumeFileName: resumeFile.name,
        resumeFileSize: resumeFile.size,
        resumeFileType: resumeFile.type,
        submissionTimestamp: new Date().toISOString()
      };
      
      console.log("Submitting application data:", applicationData);
      
      const result = await submitCareerApplication(applicationData);
      console.log("Submission result:", result);
      
      if (result.success) {
        setSubmissionStatus({
          status: 'success',
          message: result.message || "Your application has been submitted successfully!"
        });
        
        toast({
          title: "Application Submitted!",
          description: "Thank you for your interest. We'll review your application and get back to you soon.",
        });
        
        form.reset();
        setResumeFile(null);
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      } else {
        setSubmissionStatus({
          status: 'error',
          message: result.message || "There was a problem submitting your application. Please try again."
        });
        
        toast({
          title: "Submission Error",
          description: result.message || "There was a problem submitting your application. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Unhandled error during form submission:", error);
      
      setSubmissionStatus({
        status: 'error',
        message: "An unexpected error occurred. Please try again later."
      });
      
      toast({
        title: "Submission Error",
        description: "An unexpected error occurred. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Show success message if submission was successful
  if (submissionStatus.status === 'success') {
    return (
      <div className="bg-background p-8 rounded-lg border shadow-sm">
        <Alert className="bg-green-50 border-green-200 mb-6">
          <CheckCircle2 className="h-5 w-5 text-green-600" />
          <AlertTitle className="text-green-800 text-lg font-semibold">Application Submitted Successfully!</AlertTitle>
          <AlertDescription className="text-green-700">
            Thank you for your interest in joining our team. We have received your application and will review it shortly.
            Our HR team will contact you if your profile matches our requirements.
          </AlertDescription>
        </Alert>
        
        <div className="text-center mt-6">
          <Button 
            onClick={() => {
              setSubmissionStatus({ status: 'idle', message: '' });
              form.reset();
              setResumeFile(null);
              if (fileInputRef.current) {
                fileInputRef.current.value = '';
              }
            }}
            className="bg-primary hover:bg-primary/90"
          >
            Submit Another Application
          </Button>
        </div>
      </div>
    );
  }

  return (
    <Form {...form}>
      {submissionStatus.status === 'error' && (
        <Alert className="bg-red-50 border-red-200 mb-6">
          <AlertCircle className="h-5 w-5 text-red-600" />
          <AlertTitle className="text-red-800">Submission Failed</AlertTitle>
          <AlertDescription className="text-red-700">
            {submissionStatus.message}
          </AlertDescription>
        </Alert>
      )}
      
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name <span className="text-red-500">*</span></FormLabel>
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
                <FormLabel>Email Address <span className="text-red-500">*</span></FormLabel>
                <FormControl>
                  <Input placeholder="john@example.com" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number <span className="text-red-500">*</span></FormLabel>
                <FormControl>
                  <Input placeholder="+91 9967006091" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="position"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Position <span className="text-red-500">*</span></FormLabel>
                <Select 
                  onValueChange={field.onChange} 
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a position" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {openPositions.map((position) => (
                      <SelectItem key={position.id} value={position.id}>
                        {position.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="experience"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Experience Level <span className="text-red-500">*</span></FormLabel>
              <Select 
                onValueChange={field.onChange} 
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your experience level" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="entry">Entry Level (0-2 years)</SelectItem>
                  <SelectItem value="mid">Mid Level (3-5 years)</SelectItem>
                  <SelectItem value="senior">Senior Level (6-9 years)</SelectItem>
                  <SelectItem value="expert">Expert (10+ years)</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="education"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Education <span className="text-red-500">*</span></FormLabel>
              <FormControl>
                <Input placeholder="Highest degree, University/College" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="coverLetter"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cover Letter <span className="text-red-500">*</span></FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Tell us why you're interested in this position and why you'd be a good fit..."
                  className="min-h-32 resize-y"
                  {...field}
                />
              </FormControl>
              <FormMessage />
              <p className="text-xs text-muted-foreground">
                {field.value.length}/1000 characters
              </p>
            </FormItem>
          )}
        />
        
        <div className="space-y-2">
          <Label htmlFor="resume">Resume/CV (PDF, DOCX, max 5MB) <span className="text-red-500">*</span></Label>
          <Input 
            id="resume" 
            ref={fileInputRef}
            type="file" 
            accept=".pdf,.doc,.docx" 
            onChange={handleFileChange}
            className="cursor-pointer"
          />
          {fileError && (
            <p className="text-sm text-red-500 mt-1">{fileError}</p>
          )}
          {resumeFile && !fileError && (
            <p className="text-sm text-green-600 mt-1">
              Selected file: {resumeFile.name} ({(resumeFile.size / 1024 / 1024).toFixed(2)} MB)
            </p>
          )}
        </div>
        
        <Button 
          type="submit" 
          className="bg-primary hover:bg-primary/90 w-full md:w-auto"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Submitting...
            </>
          ) : "Submit Application"}
        </Button>
      </form>
    </Form>
  );
};

export default CareerApplicationForm;
