
import React, { useState, useRef } from "react";
import { useToast } from "@/components/ui/use-toast";
import { submitCareerApplication, logAnalyticsEvent } from "@/lib/firebase";
import { ApplicationFormFields, ApplicationFormValues } from "./careers/ApplicationFormFields";
import { SuccessMessage } from "./careers/SuccessMessage";
import { ErrorAlert } from "./careers/ErrorAlert";

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
        
        resetForm();
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

  const resetForm = () => {
    setSubmissionStatus({ status: 'idle', message: '' });
    setResumeFile(null);
    setFileError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Show success message if submission was successful
  if (submissionStatus.status === 'success') {
    return <SuccessMessage onReset={resetForm} />;
  }

  return (
    <>
      {submissionStatus.status === 'error' && (
        <ErrorAlert message={submissionStatus.message} />
      )}
      
      <ApplicationFormFields 
        openPositions={openPositions}
        onSubmit={onSubmit}
        isSubmitting={isSubmitting}
        fileError={fileError}
        setFileError={setFileError}
        setResumeFile={setResumeFile}
        submissionError={submissionStatus.status === 'error' ? submissionStatus.message : null}
      />
    </>
  );
};

export default CareerApplicationForm;
