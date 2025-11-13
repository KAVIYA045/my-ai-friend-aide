import { useState, useRef, useEffect } from "react";
import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { generateAIResponse } from "@/utils/aiResponses";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm Kaviya's AI assistant. I can tell you about her background, skills, projects, and experience in Prompt Engineering and AI development. What would you like to know?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = (text: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    // Generate AI response based on user message
    setTimeout(() => {
      const responseText = generateAIResponse(text);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto h-[600px] flex flex-col shadow-elevated border-border/50">
      <div className="p-6 border-b border-border bg-gradient-subtle">
        <h2 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          AI Assistant
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          Your personal AI helper
        </p>
      </div>

      <ScrollArea className="flex-1 p-6" ref={scrollRef}>
        <div className="space-y-4">
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message.text}
              isUser={message.isUser}
              timestamp={message.timestamp}
            />
          ))}
          {isTyping && (
            <div className="flex gap-1 items-center text-muted-foreground animate-fadeIn">
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]" />
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]" />
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
            </div>
          )}
        </div>
      </ScrollArea>

      <div className="p-6 border-t border-border bg-card">
        <ChatInput onSend={handleSendMessage} disabled={isTyping} />
      </div>
    </Card>
  );
};
