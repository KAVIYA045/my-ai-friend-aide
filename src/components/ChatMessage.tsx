import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { Bot, User } from "lucide-react";

interface ChatMessageProps {
  message: string;
  isUser: boolean;
  timestamp?: Date;
}

export const ChatMessage = ({ message, isUser, timestamp }: ChatMessageProps) => {
  return (
    <div
      className={cn(
        "flex gap-3 animate-fadeIn",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      {!isUser && (
        <Avatar className="h-8 w-8 border border-primary/20">
          <AvatarFallback className="bg-gradient-primary">
            <Bot className="h-4 w-4 text-primary-foreground" />
          </AvatarFallback>
        </Avatar>
      )}
      <div
        className={cn(
          "max-w-[80%] rounded-2xl px-4 py-3 shadow-sm",
          isUser
            ? "bg-gradient-primary text-primary-foreground"
            : "bg-card border border-border"
        )}
      >
        <p className="text-sm leading-relaxed whitespace-pre-wrap">{message}</p>
        {timestamp && (
          <span className={cn(
            "text-xs mt-1 block opacity-70",
            isUser ? "text-primary-foreground" : "text-muted-foreground"
          )}>
            {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        )}
      </div>
      {isUser && (
        <Avatar className="h-8 w-8 border border-primary/20">
          <AvatarFallback className="bg-secondary">
            <User className="h-4 w-4 text-secondary-foreground" />
          </AvatarFallback>
        </Avatar>
      )}
    </div>
  );
};
