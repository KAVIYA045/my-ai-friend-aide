import { useState } from "react";
import { ChatInterface } from "@/components/ChatInterface";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ProfileModal } from "@/components/ProfileModal";
import { ResumeUpdateModal } from "@/components/ResumeUpdateModal";
import { Sparkles, Zap, MessageSquare, UserPlus, FileEdit } from "lucide-react";

const Index = () => {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header with Theme Toggle and Profile Buttons */}
      <header className="container mx-auto px-4 pt-6 flex justify-end gap-3">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsProfileModalOpen(true)}
          className="gap-2"
        >
          <UserPlus className="w-4 h-4" />
          Build My Profile
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsResumeModalOpen(true)}
          className="gap-2"
        >
          <FileEdit className="w-4 h-4" />
          Update Doc
        </Button>
        <ThemeToggle />
      </header>

      <ProfileModal
        open={isProfileModalOpen}
        onOpenChange={setIsProfileModalOpen}
      />

      <ResumeUpdateModal
        open={isResumeModalOpen}
        onOpenChange={setIsResumeModalOpen}
      />

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-12 pb-12 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-secondary/50 border border-border">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-foreground">Your Personal AI Assistant</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight">
          Meet Kaviya's AI Assistant
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Learn about Kaviya R - Computer Science Engineering student specializing in Prompt Engineering and AI Development
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-16">
          <div className="flex items-center gap-2 text-foreground">
            <Zap className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">Prompt Engineering Expert</span>
          </div>
          <div className="flex items-center gap-2 text-foreground">
            <MessageSquare className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium">AI Development Focus</span>
          </div>
          <div className="flex items-center gap-2 text-foreground">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">Full Stack Skills</span>
          </div>
        </div>
      </section>

      {/* Chat Interface */}
      <section className="container mx-auto px-4 pb-20">
        <ChatInterface />
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>Kaviya R - Computer Science Engineering Student | Prompt Engineering & AI Development</p>
          <p className="mt-2">📧 22cs045@dmngpt.ac.in | 📞 +91 70949703960</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
