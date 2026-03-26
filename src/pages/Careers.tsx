import { useState, useRef } from "react";
import { Upload, FileText, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const Careers = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!allowedTypes.includes(file.type)) {
      toast.error("Please upload a PDF or DOC/DOCX file");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      toast.error("File size must be under 5MB");
      return;
    }
    setSelectedFile(file);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedFile) {
      toast.error("Please upload your resume");
      return;
    }

    setIsSubmitting(true);
    try {
      const form = e.currentTarget;
      const formData = new FormData();
      formData.append("name", (form.elements.namedItem("name") as HTMLInputElement).value.trim());
      formData.append("email", (form.elements.namedItem("email") as HTMLInputElement).value.trim());
      formData.append("phone", (form.elements.namedItem("phone") as HTMLInputElement).value.trim());
      formData.append("position", (form.elements.namedItem("position") as HTMLInputElement).value.trim());
      formData.append("message", (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim());
      formData.append("resume", selectedFile);

      const projectId = import.meta.env.VITE_SUPABASE_PROJECT_ID || 
        import.meta.env.VITE_SUPABASE_URL?.match(/https:\/\/([^.]+)/)?.[1];
      
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/send-resume`,
        {
          method: "POST",
          headers: {
            apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
          },
          body: formData,
        }
      );

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Submission failed");

      setSubmitted(true);
      toast.success("Application submitted successfully!");
    } catch (error: any) {
      console.error("Submit error:", error);
      toast.error(error.message || "Failed to submit application");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <Layout>
        <section className="py-24">
          <div className="container max-w-lg text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
            <h1 className="text-3xl font-heading font-bold mb-4">Application Submitted!</h1>
            <p className="text-muted-foreground mb-6">
              Thank you for your interest. We'll review your resume and get back to you soon.
            </p>
            <Button onClick={() => setSubmitted(false)} variant="outline">
              Submit Another Application
            </Button>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="gradient-hero text-primary-foreground py-16">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Careers</h1>
          <p className="text-lg opacity-90">Join our team and make an impact in education</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-2xl">
          <Card className="border-0 shadow-lg">
            <CardContent className="pt-6">
              <h2 className="font-heading font-bold text-2xl mb-2">Apply Now</h2>
              <p className="text-muted-foreground mb-6">
                Upload your resume and we'll reach out if there's a match.
              </p>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  name="name"
                  type="text"
                  placeholder="Full Name *"
                  required
                  maxLength={100}
                  className="w-full px-4 py-2.5 rounded-lg border bg-background"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email Address *"
                  required
                  maxLength={255}
                  className="w-full px-4 py-2.5 rounded-lg border bg-background"
                />
                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number *"
                  required
                  maxLength={20}
                  className="w-full px-4 py-2.5 rounded-lg border bg-background"
                />
                <input
                  name="position"
                  type="text"
                  placeholder="Position Applying For"
                  maxLength={100}
                  className="w-full px-4 py-2.5 rounded-lg border bg-background"
                />
                <textarea
                  name="message"
                  placeholder="Cover Letter / Message"
                  rows={4}
                  maxLength={1000}
                  className="w-full px-4 py-2.5 rounded-lg border bg-background resize-none"
                />

                {/* Resume Upload */}
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer hover:border-primary transition-colors"
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  {selectedFile ? (
                    <div className="flex items-center justify-center gap-2 text-primary">
                      <FileText className="h-5 w-5" />
                      <span className="font-medium">{selectedFile.name}</span>
                    </div>
                  ) : (
                    <div className="text-muted-foreground">
                      <Upload className="h-8 w-8 mx-auto mb-2" />
                      <p className="font-medium">Upload Resume *</p>
                      <p className="text-sm">PDF or DOC/DOCX, max 5MB</p>
                    </div>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full gradient-primary text-primary-foreground border-0 font-semibold"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" /> Submitting...
                    </span>
                  ) : (
                    "Submit Application"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
