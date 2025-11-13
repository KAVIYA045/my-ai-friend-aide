import { ChatInterface } from "@/components/ChatInterface";
import { Button } from "@/components/ui/button";
import { Sparkles, Zap, MessageSquare } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-12 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-secondary/50 border border-border">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-foreground">Your Personal AI Assistant</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight">
          AI That Assists You
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Experience intelligent conversations powered by AI. Get help, insights, and answers instantly.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-16">
          <div className="flex items-center gap-2 text-foreground">
            <Zap className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">Instant Responses</span>
          </div>
          <div className="flex items-center gap-2 text-foreground">
            <MessageSquare className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium">Natural Conversations</span>
          </div>
          <div className="flex items-center gap-2 text-foreground">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">Smart Assistance</span>
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
          <p>Built with Lovable • Your AI Assistant Platform</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
