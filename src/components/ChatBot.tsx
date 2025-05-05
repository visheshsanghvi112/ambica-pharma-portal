
import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{text: string, isUser: boolean}[]>([
    { text: "👋 Hello! I'm Ambica Pharma's virtual assistant. How can I help you with your pharmaceutical needs today?", isUser: false }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const toggleChat = () => {
    setIsOpen(prev => !prev);
  };

  const handleSend = () => {
    if (input.trim() === '') return;
    
    // Add user message
    setMessages(prev => [...prev, { text: input, isUser: true }]);
    setInput('');
    
    // Show typing indicator
    setIsTyping(true);
    
    // Enhanced bot responses based on keywords
    setTimeout(() => {
      setIsTyping(false);
      let botResponse = "";
      const userInput = input.toLowerCase();
      
      if (userInput.includes("price") || userInput.includes("cost") || userInput.includes("rate")) {
        botResponse = "💊 Our pharmaceutical products are competitively priced with excellent quality standards. Please contact our sales team directly for specific product pricing information and bulk order discounts.";
      } 
      else if (userInput.includes("order") || userInput.includes("purchase")) {
        botResponse = "📦 We provide secure and efficient ordering processes! You can place orders through our official channels or by directly contacting our sales representatives. Would you like us to have a sales representative contact you?";
      }
      else if (userInput.includes("product") || userInput.includes("medicine") || userInput.includes("drug")) {
        botResponse = "🔬 Ambica Pharma specializes in high-quality generic medications, APIs, and healthcare products that meet WHO-GMP standards. Our portfolio covers cardiovascular, anti-diabetic, anti-infective, and many other therapeutic categories. Which specific product line are you interested in?";
      }
      else if (userInput.includes("location") || userInput.includes("address") || userInput.includes("office")) {
        botResponse = "📍 Our headquarters is in Mumbai, India, and we export to over 25 countries worldwide. We have strategic partnerships with distributors across Asia, Africa, and Latin America. Would you like our detailed contact information?";
      }
      else if (userInput.includes("certification") || userInput.includes("quality") || userInput.includes("standard")) {
        botResponse = "✅ Ambica Pharma is WHO-GMP certified and adheres to international quality standards. Our manufacturing facilities and processes are regularly audited to ensure compliance with global pharmaceutical regulations.";
      }
      else if (userInput.includes("hello") || userInput.includes("hi") || userInput.includes("hey")) {
        botResponse = "👋 Hello! Welcome to Ambica Pharma's virtual assistant. I can help you with product information, ordering processes, quality certifications, or connect you with our team. How may I assist you today?";
      }
      else if (userInput.includes("thank")) {
        botResponse = "😊 You're welcome! At Ambica Pharma, we're committed to providing exceptional service. If you have any more questions, feel free to ask. Have a great day!";
      }
      else {
        botResponse = "I'd be happy to assist you with information about Ambica Pharma's pharmaceutical products and services. You can ask about our product range, certifications, ordering process, or global distribution network. How can I help you today? 🌟";
      }
      
      setMessages(prev => [...prev, { text: botResponse, isUser: false }]);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-4 right-6 z-40">
      <Button
        onClick={toggleChat}
        className={cn(
          "w-14 h-14 rounded-full shadow-lg flex items-center justify-center",
          "bg-gradient-to-br from-primary to-secondary transition-all duration-300", 
          !isOpen && "animate-pulse-slow"
        )}
        aria-label="Chat with us"
      >
        {isOpen ? <X size={24} className="text-white" /> : <MessageCircle size={24} className="text-white" />}
      </Button>

      <div 
        className={cn(
          "absolute bottom-20 right-0 w-80 bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-300 transform",
          "flex flex-col border border-border dark-card",
          isOpen ? "scale-100 opacity-100" : "scale-90 opacity-0 pointer-events-none"
        )}
        style={{ height: isOpen ? '400px' : '0' }}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-primary-light p-4 text-white">
          <h3 className="font-bold">Ambica Pharma Support</h3>
          <p className="text-xs opacity-80">How can we help you today?</p>
        </div>
        
        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto flex flex-col space-y-3">
          {messages.map((message, index) => (
            <div 
              key={index} 
              className={cn(
                "max-w-[80%] p-3 rounded-lg animate-fade-in",
                message.isUser 
                  ? "bg-primary text-white self-end rounded-br-none"
                  : "bg-gray-100 dark:bg-gray-800 self-start rounded-bl-none"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {message.text}
            </div>
          ))}
          {isTyping && (
            <div className="flex space-x-2 p-3 bg-gray-100 dark:bg-gray-800 self-start rounded-lg max-w-[80%]">
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
            </div>
          )}
        </div>
        
        {/* Input */}
        <div className="p-3 border-t border-border flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            className="flex-1 px-3 py-2 border rounded-l-md focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <Button 
            onClick={handleSend}
            className="rounded-l-none bg-primary hover:bg-primary/90"
            disabled={input.trim() === ''}
          >
            <Send size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
