
import React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

interface ErrorAlertProps {
  message: string;
}

const ErrorAlert = ({ message }: ErrorAlertProps) => {
  return (
    <Alert className="bg-red-50 border-red-200 mb-6">
      <AlertCircle className="h-5 w-5 text-red-600" />
      <AlertTitle className="text-red-800">Submission Failed</AlertTitle>
      <AlertDescription className="text-red-700">
        {message}
      </AlertDescription>
    </Alert>
  );
};

export { ErrorAlert };
