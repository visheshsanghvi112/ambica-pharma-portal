
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, Copy, ThumbsUp, Phone, Mail, Clock, Minimize2, Maximize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

type PredefinedQuestion = {
  id: string;
  text: string;
  category: string;
  emoji: string;
};

type Message = {
  text: string;
  isUser: boolean;
  timestamp: Date;
  id: string;
};

const predefinedQuestions: PredefinedQuestion[] = [
  { id: 'partnership', text: 'How do I partner with Ambica Pharma?', category: 'Business', emoji: '🤝' },
  { id: 'contact', text: 'How can I contact your team?', category: 'Support', emoji: '📞' },
  { id: 'warehouse', text: 'Where are your warehouses located?', category: 'Business', emoji: '🏭' },
  { id: 'products', text: 'What products do you offer?', category: 'Products', emoji: '💊' },
  { id: 'certification', text: 'What certifications do you have?', category: 'Quality', emoji: '✅' },
  { id: 'shipping', text: 'What are your shipping policies?', category: 'Logistics', emoji: '🚚' },
];

const categories = ['All', 'Business', 'Products', 'Support', 'Quality', 'Logistics'];

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      text: "👋 Hello! I'm Ambica Pharma's virtual assistant. How can I help you with your pharmaceutical needs today?", 
      isUser: false,
      timestamp: new Date(),
      id: 'welcome'
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hasNewMessage, setHasNewMessage] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => {
    setIsOpen(prev => !prev);
    if (!isOpen) {
      setHasNewMessage(false);
    }
  };

  const toggleMinimize = () => {
    setIsMinimized(prev => !prev);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen && !isMinimized) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping, isMinimized]);

  const copyMessage = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const handleSend = (text: string = input) => {
    if (text.trim() === '') return;
    
    const userMessage: Message = {
      text,
      isUser: true,
      timestamp: new Date(),
      id: Date.now().toString()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);
    
    if (!isOpen) {
      setHasNewMessage(true);
    }
    
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
        botResponse = "🌟 I'd be happy to assist you with information about Ambica Pharma's pharmaceutical products and services. You can ask about our product range, certifications, ordering process, or global distribution network. How can I help you today?";
      }
      
      const botMessage: Message = {
        text: botResponse,
        isUser: false,
        timestamp: new Date(),
        id: (Date.now() + 1).toString()
      };
      
      setMessages(prev => [...prev, botMessage]);
      
      if (!isOpen) {
        setHasNewMessage(true);
      }
    }, 1500);
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

  const filteredQuestions = selectedCategory === 'All' 
    ? predefinedQuestions 
    : predefinedQuestions.filter(q => q.category === selectedCategory);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="fixed bottom-4 right-6 z-50">
      {/* Floating Action Button */}
      <AnimatePresence>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative"
        >
          <Button
            onClick={toggleChat}
            className={cn(
              "w-16 h-16 rounded-full shadow-2xl flex items-center justify-center relative overflow-hidden",
              "bg-gradient-to-br from-primary via-primary to-secondary hover:from-primary/90 hover:to-secondary/90",
              "transform transition-all duration-300 hover:scale-110",
              isOpen ? "rotate-0" : "animate-pulse"
            )}
            aria-label="Chat with us"
          >
            {/* Notification Badge */}
            {hasNewMessage && !isOpen && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold"
              >
                1
              </motion.div>
            )}
            
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X size={28} className="text-white" /> : <MessageCircle size={28} className="text-white" />}
            </motion.div>
            
            {/* Ripple Effect */}
            <div className="absolute inset-0 rounded-full bg-white/20 animate-ping opacity-20"></div>
          </Button>
        </motion.div>
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ y: 20, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className={cn(
              "absolute bottom-20 right-0 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden",
              "flex flex-col border border-border/20 dark:bg-gray-900/95 dark:border-gray-700/50",
              isMinimized ? "w-80 h-16" : "w-96 max-w-[calc(100vw-2rem)] max-h-[600px]"
            )}
          >
            {/* Enhanced Header */}
            <div className="bg-gradient-to-r from-primary via-primary to-secondary p-4 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Sparkles className="h-5 w-5 text-white" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Ambica Assistant</h3>
                    <p className="text-xs opacity-90 flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                      Online • Ready to help
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    onClick={toggleMinimize}
                    variant="ghost"
                    size="sm"
                    className="text-white hover:bg-white/20 p-2"
                  >
                    {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
                  </Button>
                  <Button
                    onClick={toggleChat}
                    variant="ghost"
                    size="sm"
                    className="text-white hover:bg-white/20 p-2"
                  >
                    <X size={16} />
                  </Button>
                </div>
              </div>
            </div>
            
            {!isMinimized && (
              <>
                {/* Messages Container */}
                <div className="flex-1 p-4 overflow-y-auto space-y-4 max-h-80 custom-scrollbar">
                  <AnimatePresence mode="popLayout">
                    {messages.map((message, index) => (
                      <motion.div 
                        key={message.id}
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: index * 0.05,
                          type: "spring",
                          stiffness: 500,
                          damping: 30
                        }}
                        className={cn(
                          "flex gap-2 group",
                          message.isUser ? "justify-end" : "justify-start"
                        )}
                      >
                        {!message.isUser && (
                          <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <Sparkles size={14} className="text-primary" />
                          </div>
                        )}
                        
                        <div className={cn(
                          "max-w-[85%] rounded-2xl px-4 py-3 relative shadow-sm",
                          message.isUser 
                            ? "bg-gradient-to-br from-primary to-secondary text-white rounded-br-md" 
                            : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-bl-md"
                        )}>
                          <p className="text-sm leading-relaxed">{message.text}</p>
                          <div className="flex items-center justify-between mt-2 gap-2">
                            <span className="text-xs opacity-70">
                              {formatTime(message.timestamp)}
                            </span>
                            {!message.isUser && (
                              <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                <Button
                                  onClick={() => copyMessage(message.text)}
                                  variant="ghost"
                                  size="sm"
                                  className="h-6 w-6 p-0 hover:bg-primary/10"
                                >
                                  <Copy size={12} />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-6 w-6 p-0 hover:bg-primary/10"
                                >
                                  <ThumbsUp size={12} />
                                </Button>
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                    
                    {isTyping && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex gap-2 items-end"
                      >
                        <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <Sparkles size={14} className="text-primary" />
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl rounded-bl-md px-4 py-3 max-w-[85%]">
                          <div className="flex space-x-2">
                            <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                            <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                    <div ref={messagesEndRef} />
                  </AnimatePresence>
                </div>

                {/* Category Tabs */}
                <div className="px-4 py-2 border-t border-border/80 bg-gray-50/50 dark:bg-gray-900/50">
                  <div className="flex gap-1 overflow-x-auto scrollbar-hide">
                    {categories.map((category) => (
                      <Button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        variant={selectedCategory === category ? "default" : "ghost"}
                        size="sm"
                        className={cn(
                          "text-xs whitespace-nowrap transition-all duration-200",
                          selectedCategory === category 
                            ? "bg-primary text-white shadow-sm" 
                            : "hover:bg-primary/10"
                        )}
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Enhanced Predefined Questions */}
                <div className="p-3 bg-gray-50/80 dark:bg-gray-900/80 border-t border-border/80 backdrop-blur-sm">
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-3 font-medium">Quick questions:</p>
                  <div className="grid grid-cols-1 gap-2 max-h-32 overflow-y-auto custom-scrollbar">
                    {filteredQuestions.map((question) => (
                      <motion.button
                        key={question.id}
                        whileHover={{ scale: 1.02, x: 4 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handlePredefinedQuestion(question.text)}
                        className="text-left p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary/30 hover:bg-gradient-to-r hover:from-primary/5 hover:to-secondary/5 transition-all duration-200 shadow-sm hover:shadow-md group"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-lg group-hover:scale-110 transition-transform">
                            {question.emoji}
                          </span>
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors">
                            {question.text}
                          </span>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>
                
                {/* Enhanced Input Section */}
                <div className="p-4 border-t border-border/80 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                  <div className="flex items-end gap-3">
                    <div className="flex-1 relative">
                      <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Type your message..."
                        className="w-full px-4 py-3 pr-12 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary dark:bg-gray-700 dark:text-white resize-none transition-all duration-200 bg-white/80 backdrop-blur-sm"
                        maxLength={500}
                      />
                      <div className="absolute right-3 bottom-3 text-xs text-gray-400">
                        {input.length}/500
                      </div>
                    </div>
                    
                    <motion.div whileTap={{ scale: 0.95 }}>
                      <Button 
                        onClick={() => handleSend()}
                        disabled={input.trim() === '' || isTyping}
                        className={cn(
                          "w-12 h-12 rounded-2xl shadow-lg transition-all duration-200",
                          "bg-gradient-to-br from-primary to-secondary hover:from-primary/90 hover:to-secondary/90",
                          "disabled:opacity-50 disabled:cursor-not-allowed",
                          input.trim() !== '' && !isTyping && "animate-pulse"
                        )}
                      >
                        <Send size={18} className="text-white" />
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatBot;
