
import React from "react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle2 } from "lucide-react";

interface SuccessMessageProps {
  onReset: () => void;
}

const SuccessMessage = ({ onReset }: SuccessMessageProps) => {
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
          onClick={onReset}
          className="bg-primary hover:bg-primary/90"
        >
          Submit Another Application
        </Button>
      </div>
    </div>
  );
};

export { SuccessMessage };
