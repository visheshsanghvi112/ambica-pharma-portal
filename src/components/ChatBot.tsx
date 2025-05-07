
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

type PredefinedQuestion = {
  id: string;
  text: string;
};

const predefinedQuestions: PredefinedQuestion[] = [
  { id: 'partnership', text: '💼 How do I partner with Ambica Pharma?' },
  { id: 'contact', text: '📞 How can I contact your team?' },
  { id: 'warehouse', text: '🏭 Where are your warehouses located?' },
  { id: 'products', text: '💊 What products do you offer?' },
  { id: 'certification', text: '✅ What certifications do you have?' },
  { id: 'shipping', text: '🚚 What are your shipping policies?' },
];

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{text: string, isUser: boolean}[]>([
    { text: "👋 Hello! I'm Ambica Pharma's virtual assistant. How can I help you with your pharmaceutical needs today?", isUser: false }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => {
    setIsOpen(prev => !prev);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleSend = (text: string = input) => {
    if (text.trim() === '') return;
    
    // Add user message
    setMessages(prev => [...prev, { text, isUser: true }]);
    setInput('');
    
    // Show typing indicator
    setIsTyping(true);
    
    // Enhanced bot responses based on keywords
    setTimeout(() => {
      setIsTyping(false);
      let botResponse = "";
      const userInput = text.toLowerCase();
      
      if (userInput.includes("partner") || userInput.includes("partnership") || userInput.includes("collaborate")) {
        botResponse = "🤝 To partner with Ambica Pharma, please email our partnership team at partners@ambicapharma.com with your company details and partnership proposal. We're always looking for strategic collaborations with distributors, healthcare providers, and pharmaceutical manufacturers that align with our quality standards and business values.";
      } 
      else if (userInput.includes("contact") || userInput.includes("reach") || userInput.includes("call")) {
        botResponse = "📱 You can reach our team at +91-22-4123-5678 or email us at info@ambicapharma.com. Our office hours are Monday to Friday, 9:00 AM to 6:00 PM IST. For urgent inquiries, please call our 24/7 customer service line at +91-22-4123-5680.";
      }
      else if (userInput.includes("warehouse") || userInput.includes("location") || userInput.includes("facility")) {
        botResponse = "🏢 Our main warehouse and headquarters are located in Mumbai, India. We also have regional distribution centers in Delhi, Hyderabad, and Ahmedabad. All our facilities are WHO-GMP certified and follow strict quality control protocols to ensure the integrity of our pharmaceutical products.";
      }
      else if (userInput.includes("price") || userInput.includes("cost") || userInput.includes("rate")) {
        botResponse = "💊 Our pharmaceutical products are competitively priced with excellent quality standards. Please contact our sales team directly for specific product pricing information and bulk order discounts.";
      } 
      else if (userInput.includes("order") || userInput.includes("purchase")) {
        botResponse = "📦 We provide secure and efficient ordering processes! You can place orders through our official channels or by directly contacting our sales representatives. Would you like us to have a sales representative contact you?";
      }
      else if (userInput.includes("product") || userInput.includes("medicine") || userInput.includes("drug")) {
        botResponse = "🔬 Ambica Pharma specializes in high-quality generic medications, APIs, and healthcare products that meet WHO-GMP standards. Our portfolio covers cardiovascular, anti-diabetic, anti-infective, and many other therapeutic categories. Which specific product line are you interested in?";
      }
      else if (userInput.includes("certification") || userInput.includes("quality") || userInput.includes("standard")) {
        botResponse = "✅ Ambica Pharma is WHO-GMP certified and adheres to international quality standards. Our manufacturing facilities and processes are regularly audited to ensure compliance with global pharmaceutical regulations.";
      }
      else if (userInput.includes("shipping") || userInput.includes("delivery") || userInput.includes("transport")) {
        botResponse = "🚢 We offer global shipping services with various options including air freight, sea freight, and express courier services. Delivery timeframes depend on destination and chosen shipping method. All our shipments are properly insured and compliant with international pharmaceutical transportation regulations.";
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

  const handlePredefinedQuestion = (question: string) => {
    handleSend(question);
  };

  return (
    <div className="fixed bottom-4 right-6 z-40">
      <AnimatePresence>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Button
            onClick={toggleChat}
            className={cn(
              "w-14 h-14 rounded-full shadow-lg flex items-center justify-center",
              "bg-gradient-to-br from-primary to-secondary transition-all duration-300", 
              isOpen ? "rotate-90" : "rotate-0"
            )}
            aria-label="Chat with us"
          >
            {isOpen ? <X size={24} className="text-white" /> : <MessageCircle size={24} className="text-white" />}
          </Button>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={cn(
              "absolute bottom-20 right-0 w-80 md:w-96 bg-white rounded-lg shadow-xl overflow-hidden",
              "flex flex-col border border-border dark-card",
              "max-h-[500px]"
            )}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-primary-light p-4 text-white">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-white/80" />
                <div>
                  <h3 className="font-bold">Ambica Pharma Support</h3>
                  <p className="text-xs opacity-80">Ask us anything about our products & services</p>
                </div>
              </div>
            </div>
            
            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto flex flex-col space-y-3 h-[300px]">
              <AnimatePresence>
                {messages.map((message, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={cn(
                      "max-w-[80%] p-3 rounded-lg",
                      message.isUser 
                        ? "bg-primary text-white self-end rounded-br-none"
                        : "bg-gray-100 dark:bg-gray-800 self-start rounded-bl-none"
                    )}
                  >
                    {message.text}
                  </motion.div>
                ))}
                {isTyping && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex space-x-2 p-3 bg-gray-100 dark:bg-gray-800 self-start rounded-lg max-w-[80%]"
                  >
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </AnimatePresence>
            </div>

            {/* Predefined Questions */}
            <div className="p-3 bg-gray-50 dark:bg-gray-900 border-t border-border">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Quick questions:</p>
              <div className="grid grid-cols-2 gap-2">
                {predefinedQuestions.map((question) => (
                  <motion.button
                    key={question.id}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handlePredefinedQuestion(question.text)}
                    className="text-xs p-2 bg-white dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 text-left transition-colors"
                  >
                    {question.text}
                  </motion.button>
                ))}
              </div>
            </div>
            
            {/* Input */}
            <div className="p-3 border-t border-border bg-white dark:bg-gray-800 flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border rounded-l-md focus:outline-none focus:ring-1 focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              <Button 
                onClick={() => handleSend()}
                className="rounded-l-none bg-primary hover:bg-primary/90"
                disabled={input.trim() === ''}
              >
                <Send size={18} />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatBot;
