
import React, { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const MAX_FILE_SIZE = 5000000; // 5MB
const ACCEPTED_FILE_TYPES = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];

interface ResumeUploaderProps {
  onFileChange: (file: File | null) => void;
  fileError: string | null;
  setFileError: (error: string | null) => void;
}

const ResumeUploader = ({ onFileChange, fileError, setFileError }: ResumeUploaderProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [resumeFile, setResumeFile] = useState<File | null>(null);

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
      onFileChange(file);
      console.log("Resume file selected:", file.name, file.type, `${(file.size / 1024 / 1024).toFixed(2)} MB`);
    }
  };

  return (
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
  );
};

export { ResumeUploader, fileInputRef };
export type { ResumeUploaderProps };
