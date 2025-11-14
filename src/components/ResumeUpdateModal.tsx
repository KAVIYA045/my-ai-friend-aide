import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface ResumeUpdateModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ResumeUpdateModal({ open, onOpenChange }: ResumeUpdateModalProps) {
  const { toast } = useToast();
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === "application/pdf") {
      setResumeFile(file);
    } else {
      toast({
        title: "Invalid File",
        description: "Please upload a PDF file.",
        variant: "destructive",
      });
    }
  };

  const handleUpload = () => {
    if (!resumeFile) {
      toast({
        title: "No File Selected",
        description: "Please select a PDF file to upload.",
        variant: "destructive",
      });
      return;
    }

    console.log("Uploading resume:", resumeFile);
    
    toast({
      title: "Resume Updated!",
      description: "Your resume has been successfully updated.",
    });
    
    setResumeFile(null);
    onOpenChange(false);
  };

  const handleCancel = () => {
    setResumeFile(null);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Update Your Resume</DialogTitle>
          <DialogDescription>
            Upload a new PDF to replace your current resume.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="resume">Upload Your Resume (PDF)</Label>
            <Input
              id="resume"
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
              className="cursor-pointer"
            />
            {resumeFile && (
              <p className="text-sm text-muted-foreground">Selected: {resumeFile.name}</p>
            )}
          </div>
        </div>

        <DialogFooter className="gap-2">
          <Button type="button" variant="outline" onClick={handleCancel}>
            Cancel
          </Button>
          <Button type="button" onClick={handleUpload}>
            Upload Resume
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
