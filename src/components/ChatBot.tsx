
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { 
  MessageCircle, X, Send, Sparkles, Copy, ThumbsUp, Heart, Smile, 
  Search, Mic, MoreVertical, Reply, Trash2, Share, Star,
  Minimize2, Maximize2, Phone, ArrowDown, Volume2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';

type PredefinedQuestion = {
  id: string;
  text: string;
  category: string;
  emoji: string;
  priority?: number;
};

type MessageReaction = {
  emoji: string;
  count: number;
  userReacted: boolean;
};

type Message = {
  text: string;
  isUser: boolean;
  timestamp: Date;
  id: string;
  reactions?: MessageReaction[];
  type?: 'text' | 'system' | 'suggestion';
  avatar?: string;
  status?: 'sending' | 'sent' | 'delivered' | 'read';
  replyTo?: string;
};

const predefinedQuestions: PredefinedQuestion[] = [
  { id: 'partnership', text: 'How do I partner with Ambica Pharma?', category: 'Business', emoji: '🤝', priority: 1 },
  { id: 'contact', text: 'How can I contact your team?', category: 'Support', emoji: '📞', priority: 1 },
  { id: 'warehouse', text: 'Where are your warehouses located?', category: 'Business', emoji: '🏭', priority: 2 },
  { id: 'products', text: 'What products do you offer?', category: 'Products', emoji: '💊', priority: 1 },
  { id: 'certification', text: 'What certifications do you have?', category: 'Quality', emoji: '✅', priority: 2 },
  { id: 'shipping', text: 'What are your shipping policies?', category: 'Logistics', emoji: '🚚', priority: 2 },
  { id: 'pricing', text: 'How can I get product pricing?', category: 'Business', emoji: '💰', priority: 1 },
  { id: 'quality', text: 'What quality standards do you follow?', category: 'Quality', emoji: '🔬', priority: 2 },
];

const categories = ['All', 'Business', 'Products', 'Support', 'Quality', 'Logistics'];

const reactionEmojis = ['👍', '❤️', '😊', '👏', '🔥'];

const STORAGE_KEY = 'ambica-chat-history';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hasNewMessage, setHasNewMessage] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(false);
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [unreadCount, setUnreadCount] = useState(0);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const buttonAnimation = useAnimation();
  const { toast } = useToast();

  // Load chat history on mount
  useEffect(() => {
    const savedMessages = localStorage.getItem(STORAGE_KEY);
    if (savedMessages) {
      try {
        const parsed = JSON.parse(savedMessages);
        setMessages(parsed.map((msg: any) => ({
          ...msg,
          timestamp: new Date(msg.timestamp)
        })));
      } catch (error) {
        console.log('Failed to load chat history');
      }
    } else {
      // Set welcome message if no history
      setMessages([
        { 
          text: "👋 Hello! I'm Ambica Pharma's AI assistant. I'm here to help you with pharmaceutical inquiries, partnerships, and product information. How can I assist you today?", 
          isUser: false,
          timestamp: new Date(),
          id: 'welcome',
          type: 'system',
          avatar: '🤖',
          status: 'read'
        }
      ]);
    }
  }, []);

  // Save messages to localStorage whenever messages change
  useEffect(() => {
    if (messages.length > 1) { // Don't save just the welcome message
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    }
  }, [messages]);

  const toggleChat = useCallback(() => {
    setIsOpen(prev => !prev);
    if (!isOpen) {
      setHasNewMessage(false);
      setUnreadCount(0);
    }
    buttonAnimation.start({ scale: [1, 0.9, 1.1, 1] });
  }, [isOpen, buttonAnimation]);

  const toggleMinimize = () => setIsMinimized(prev => !prev);
  const toggleFullScreen = () => setIsFullScreen(prev => !prev);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping, isMinimized, scrollToBottom]);

  const getSmartSuggestions = (lastMessage: string): PredefinedQuestion[] => {
    const keywords = lastMessage.toLowerCase();
    return predefinedQuestions
      .filter(q => {
        if (keywords.includes('price') || keywords.includes('cost')) return q.category === 'Business';
        if (keywords.includes('quality') || keywords.includes('standard')) return q.category === 'Quality';
        if (keywords.includes('ship') || keywords.includes('deliver')) return q.category === 'Logistics';
        if (keywords.includes('product') || keywords.includes('medicine')) return q.category === 'Products';
        return q.priority === 1;
      })
      .slice(0, 3);
  };

  const addReaction = (messageId: string, emoji: string) => {
    setMessages(prev => prev.map(msg => {
      if (msg.id === messageId) {
        const reactions = msg.reactions || [];
        const existingReaction = reactions.find(r => r.emoji === emoji);
        
        if (existingReaction) {
          return {
            ...msg,
            reactions: reactions.map(r => 
              r.emoji === emoji 
                ? { ...r, count: r.userReacted ? r.count - 1 : r.count + 1, userReacted: !r.userReacted }
                : r
            ).filter(r => r.count > 0)
          };
        } else {
          return {
            ...msg,
            reactions: [...reactions, { emoji, count: 1, userReacted: true }]
          };
        }
      }
      return msg;
    }));
  };

  const copyMessage = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: "Message copied to clipboard",
      duration: 2000
    });
  };

  const deleteMessage = (messageId: string) => {
    setMessages(prev => prev.filter(msg => msg.id !== messageId));
    toast({
      title: "Message deleted",
      description: "The message has been removed from the conversation",
      duration: 2000
    });
  };

  const replyToMessage = (messageId: string) => {
    setReplyingTo(messageId);
    inputRef.current?.focus();
  };

  const handleSend = useCallback((text: string = input) => {
    if (text.trim() === '') return;
    
    const userMessage: Message = {
      text,
      isUser: true,
      timestamp: new Date(),
      id: Date.now().toString(),
      status: 'sending',
      replyTo: replyingTo || undefined
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setReplyingTo(null);
    setIsTyping(true);
    
    if (!isOpen) {
      setHasNewMessage(true);
      setUnreadCount(prev => prev + 1);
    }

    // Update message status to sent
    setTimeout(() => {
      setMessages(prev => prev.map(msg => 
        msg.id === userMessage.id ? { ...msg, status: 'sent' } : msg
      ));
    }, 500);
    
    // Simulate realistic typing delay
    const typingDelay = Math.min(text.length * 50 + 1000, 3000);
    
    setTimeout(() => {
      setIsTyping(false);
      let botResponse = "";
      const userInput = text.toLowerCase();
      
      // Enhanced response logic with more context awareness
      if (userInput.includes("partner") || userInput.includes("partnership") || userInput.includes("collaborate")) {
        botResponse = "🤝 **Partnership Opportunities**\n\nTo partner with Ambica Pharma, please email our partnership team at **partners@ambicapharma.com** with:\n\n• Your company profile\n• Partnership proposal\n• Business credentials\n\nWe collaborate with distributors, healthcare providers, and pharmaceutical manufacturers worldwide. Our team will review your application within 2-3 business days.";
      } 
      else if (userInput.includes("contact") || userInput.includes("reach") || userInput.includes("call")) {
        botResponse = "📱 **Contact Information**\n\n• **Phone**: +91-22-4123-5678\n• **Email**: info@ambicapharma.com\n• **24/7 Support**: +91-22-4123-5680\n• **Office Hours**: Monday-Friday, 9:00 AM - 6:00 PM IST\n\nFor urgent pharmaceutical inquiries, our emergency support team is available around the clock.";
      }
      else if (userInput.includes("warehouse") || userInput.includes("location") || userInput.includes("facility")) {
        botResponse = "🏢 **Our Facilities**\n\n**Main Headquarters**: Mumbai, India\n**Regional Centers**:\n• Delhi (North India)\n• Hyderabad (South India)\n• Ahmedabad (West India)\n\nAll facilities are **WHO-GMP certified** with temperature-controlled storage, advanced security systems, and real-time inventory tracking.";
      }
      else if (userInput.includes("price") || userInput.includes("cost") || userInput.includes("rate")) {
        botResponse = "💰 **Pricing Information**\n\nOur pharmaceutical products are competitively priced with excellent quality standards. Pricing varies based on:\n\n• Product category\n• Order quantity\n• Delivery location\n• Partnership level\n\n**Volume Discounts Available!** Contact our sales team for personalized quotes and bulk order benefits.";
      }
      else if (userInput.includes("product") || userInput.includes("medicine") || userInput.includes("drug")) {
        botResponse = "🔬 **Our Product Portfolio**\n\n**Therapeutic Categories**:\n• Cardiovascular medicines\n• Anti-diabetic formulations\n• Anti-infective drugs\n• Respiratory medications\n• Neurological treatments\n\n**Product Types**: Tablets, Capsules, Injectables, Syrups\n\nAll products meet **WHO-GMP standards** and international quality requirements. Which specific category interests you?";
      }
      else if (userInput.includes("certification") || userInput.includes("quality") || userInput.includes("standard")) {
        botResponse = "✅ **Quality Certifications**\n\n• **WHO-GMP Certified** manufacturing\n• **ISO 9001:2015** quality management\n• **ISO 14001** environmental standards\n• **OHSAS 18001** safety management\n• **FDA registered** facilities\n\nOur quality assurance includes rigorous testing at every stage, from raw materials to finished products. Regular audits ensure continuous compliance.";
      }
      else if (userInput.includes("shipping") || userInput.includes("delivery") || userInput.includes("transport")) {
        botResponse = "🚢 **Global Shipping Services**\n\n**Shipping Options**:\n• Express courier (2-5 days)\n• Air freight (5-10 days)\n• Sea freight (15-30 days)\n\n**Coverage**: 25+ countries worldwide\n**Insurance**: All shipments fully insured\n**Compliance**: GDP guidelines followed\n**Tracking**: Real-time shipment monitoring\n\nSpecial handling for temperature-sensitive products with cold chain logistics.";
      }
      else if (userInput.includes("hello") || userInput.includes("hi") || userInput.includes("hey")) {
        botResponse = "👋 **Welcome to Ambica Pharma!**\n\nI'm here to help you with:\n• Product information\n• Partnership opportunities\n• Quality certifications\n• Global shipping\n• Contact details\n\nWhat would you like to know about our pharmaceutical services?";
      }
      else if (userInput.includes("thank")) {
        botResponse = "😊 **You're Welcome!**\n\nAt Ambica Pharma, customer satisfaction is our priority. If you have any more questions about our pharmaceutical products or services, I'm here to help!\n\nFeel free to explore our partnership opportunities or contact our team directly.";
      }
      else {
        botResponse = "🌟 **How Can I Help You?**\n\nI can provide information about:\n• **Products**: Our pharmaceutical portfolio\n• **Quality**: Certifications and standards\n• **Partnership**: Collaboration opportunities\n• **Logistics**: Global shipping services\n• **Contact**: Get in touch with our team\n\nWhat specific information are you looking for?";
      }
      
      const botMessage: Message = {
        text: botResponse,
        isUser: false,
        timestamp: new Date(),
        id: (Date.now() + 1).toString(),
        type: 'text',
        avatar: '🤖',
        status: 'read'
      };
      
      setMessages(prev => [...prev, botMessage]);
      
      if (!isOpen) {
        setHasNewMessage(true);
        setUnreadCount(prev => prev + 1);
      }
    }, typingDelay);
  }, [input, replyingTo, isOpen, toast]);

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

  const filteredMessages = searchQuery 
    ? messages.filter(msg => msg.text.toLowerCase().includes(searchQuery.toLowerCase()))
    : messages;

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const formatMessageText = (text: string) => {
    // Simple markdown-like formatting
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/\n/g, '<br />');
  };

  const lastUserMessage = messages.filter(m => m.isUser).pop();
  const smartSuggestions = lastUserMessage ? getSmartSuggestions(lastUserMessage.text) : [];

  return (
    <div className="fixed bottom-4 right-6 z-50">
      {/* Enhanced Floating Action Button */}
      <AnimatePresence>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={buttonAnimation}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative"
        >
          <Button
            onClick={toggleChat}
            className={cn(
              "w-16 h-16 rounded-full shadow-2xl flex items-center justify-center relative overflow-hidden group",
              "bg-gradient-to-br from-primary via-primary to-secondary hover:from-primary/90 hover:to-secondary/90",
              "transform transition-all duration-300 hover:scale-110 active:scale-95",
              isOpen ? "rotate-0" : "animate-pulse-slow"
            )}
            aria-label="Chat with Ambica Pharma Assistant"
          >
            {/* Enhanced Notification Badge */}
            {(hasNewMessage || unreadCount > 0) && !isOpen && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full min-w-[24px] h-6 flex items-center justify-center font-bold shadow-lg"
              >
                {unreadCount > 0 ? unreadCount : '!'}
              </motion.div>
            )}
            
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X size={28} className="text-white" /> : <MessageCircle size={28} className="text-white" />}
            </motion.div>
            
            {/* Enhanced Ripple Effect */}
            <div className="absolute inset-0 rounded-full bg-white/20 animate-ping opacity-20 group-hover:opacity-30"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/30 to-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Button>
        </motion.div>
      </AnimatePresence>

      {/* Enhanced Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ y: 20, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className={cn(
              "absolute bottom-20 right-0 glass-effect rounded-3xl shadow-2xl overflow-hidden",
              "flex flex-col border border-white/20 dark:border-gray-700/30",
              isMinimized 
                ? "w-80 h-16" 
                : isFullScreen 
                  ? "w-[95vw] h-[85vh] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" 
                  : "w-96 max-w-[calc(100vw-2rem)] h-[600px]"
            )}
            ref={chatContainerRef}
          >
            {/* Premium Header */}
            <div className="bg-gradient-to-r from-primary via-primary to-secondary p-4 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse-slow"></div>
              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <motion.div 
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30"
                    >
                      <Sparkles className="h-6 w-6 text-white" />
                    </motion.div>
                    <motion.div 
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white shadow-lg"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Ambica AI Assistant</h3>
                    <div className="flex items-center gap-2 text-xs opacity-90">
                      <motion.div 
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-2 h-2 bg-green-300 rounded-full"
                      />
                      <span>Online • Always ready to help</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {showSearch && (
                    <motion.div
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: 'auto', opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      className="mr-2"
                    >
                      <input
                        type="text"
                        placeholder="Search messages..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="bg-white/20 text-white placeholder-white/70 px-3 py-1 rounded-lg text-sm w-32 focus:outline-none focus:ring-2 focus:ring-white/30"
                      />
                    </motion.div>
                  )}
                  <Button
                    onClick={() => setShowSearch(!showSearch)}
                    variant="ghost"
                    size="sm"
                    className="text-white hover:bg-white/20 p-2"
                  >
                    <Search size={16} />
                  </Button>
                  <Button
                    onClick={toggleFullScreen}
                    variant="ghost"
                    size="sm"
                    className="text-white hover:bg-white/20 p-2"
                  >
                    {isFullScreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
                  </Button>
                  <Button
                    onClick={toggleMinimize}
                    variant="ghost"
                    size="sm"
                    className="text-white hover:bg-white/20 p-2"
                  >
                    <Minimize2 size={16} />
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
                {/* Enhanced Messages Container */}
                <div className="flex-1 p-4 overflow-y-auto space-y-4 custom-scrollbar bg-gradient-to-b from-white/50 to-white/30 dark:from-gray-900/50 dark:to-gray-900/30">
                  <AnimatePresence mode="popLayout">
                    {filteredMessages.map((message, index) => (
                      <motion.div 
                        key={message.id}
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: index * 0.02,
                          type: "spring",
                          stiffness: 500,
                          damping: 30
                        }}
                        className={cn(
                          "flex gap-3 group relative",
                          message.isUser ? "justify-end" : "justify-start"
                        )}
                      >
                        {!message.isUser && (
                          <motion.div 
                            whileHover={{ scale: 1.1 }}
                            className="w-10 h-10 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg border border-white/20"
                          >
                            <span className="text-lg">{message.avatar || '🤖'}</span>
                          </motion.div>
                        )}
                        
                        <div className="flex flex-col space-y-1 max-w-[85%]">
                          {/* Reply indicator */}
                          {message.replyTo && (
                            <div className="text-xs text-gray-500 dark:text-gray-400 italic">
                              Replying to previous message
                            </div>
                          )}
                          
                          <motion.div 
                            whileHover={{ scale: 1.02 }}
                            className={cn(
                              "rounded-2xl px-4 py-3 relative shadow-lg backdrop-blur-sm border",
                              message.isUser 
                                ? "bg-gradient-to-br from-primary to-secondary text-white rounded-br-md border-primary/20 shadow-primary/20" 
                                : "bg-white/90 dark:bg-gray-800/90 text-gray-900 dark:text-gray-100 rounded-bl-md border-gray-200/50 dark:border-gray-700/50"
                            )}
                          >
                            <div 
                              className="text-sm leading-relaxed"
                              dangerouslySetInnerHTML={{ __html: formatMessageText(message.text) }}
                            />
                            
                            {/* Message status */}
                            {message.status && message.isUser && (
                              <div className="flex items-center gap-1 mt-2 text-xs opacity-70">
                                {message.status === 'sending' && <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" />}
                                {message.status === 'sent' && <div className="w-2 h-2 bg-white/60 rounded-full" />}
                                {message.status === 'delivered' && <div className="w-2 h-2 bg-green-300 rounded-full" />}
                                {message.status === 'read' && <div className="w-2 h-2 bg-blue-300 rounded-full" />}
                                <span>{message.status}</span>
                              </div>
                            )}
                            
                            <div className="flex items-center justify-between mt-2 gap-2">
                              <span className="text-xs opacity-60">
                                {formatTime(message.timestamp)}
                              </span>
                              
                              {/* Enhanced Message Actions */}
                              <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                {!message.isUser && (
                                  <>
                                    <Button
                                      onClick={() => copyMessage(message.text)}
                                      variant="ghost"
                                      size="sm"
                                      className="h-6 w-6 p-0 hover:bg-primary/10"
                                    >
                                      <Copy size={12} />
                                    </Button>
                                    <Button
                                      onClick={() => replyToMessage(message.id)}
                                      variant="ghost"
                                      size="sm"
                                      className="h-6 w-6 p-0 hover:bg-primary/10"
                                    >
                                      <Reply size={12} />
                                    </Button>
                                  </>
                                )}
                                {message.isUser && (
                                  <Button
                                    onClick={() => deleteMessage(message.id)}
                                    variant="ghost"
                                    size="sm"
                                    className="h-6 w-6 p-0 hover:bg-red-500/10 text-red-500"
                                  >
                                    <Trash2 size={12} />
                                  </Button>
                                )}
                              </div>
                            </div>
                          </motion.div>
                          
                          {/* Reactions */}
                          {message.reactions && message.reactions.length > 0 && (
                            <div className="flex flex-wrap gap-1 mt-1">
                              {message.reactions.map((reaction, idx) => (
                                <motion.button
                                  key={idx}
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  onClick={() => addReaction(message.id, reaction.emoji)}
                                  className={cn(
                                    "flex items-center gap-1 px-2 py-1 rounded-full text-xs transition-colors",
                                    reaction.userReacted 
                                      ? "bg-primary/20 text-primary border border-primary/30" 
                                      : "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                                  )}
                                >
                                  <span>{reaction.emoji}</span>
                                  <span>{reaction.count}</span>
                                </motion.button>
                              ))}
                            </div>
                          )}
                          
                          {/* Quick Reactions for bot messages */}
                          {!message.isUser && (
                            <div className="flex gap-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                              {reactionEmojis.slice(0, 3).map((emoji) => (
                                <motion.button
                                  key={emoji}
                                  whileHover={{ scale: 1.2 }}
                                  whileTap={{ scale: 0.8 }}
                                  onClick={() => addReaction(message.id, emoji)}
                                  className="w-6 h-6 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                                >
                                  {emoji}
                                </motion.button>
                              ))}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                    
                    {isTyping && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex gap-3 items-end"
                      >
                        <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg border border-white/20">
                          <span className="text-lg">🤖</span>
                        </div>
                        <div className="bg-white/90 dark:bg-gray-800/90 rounded-2xl rounded-bl-md px-4 py-3 max-w-[85%] shadow-lg backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
                          <div className="flex space-x-2">
                            <motion.div 
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 0.8, repeat: Infinity, delay: 0 }}
                              className="w-2 h-2 bg-primary/60 rounded-full"
                            />
                            <motion.div 
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }}
                              className="w-2 h-2 bg-primary/60 rounded-full"
                            />
                            <motion.div 
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }}
                              className="w-2 h-2 bg-primary/60 rounded-full"
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}
                    <div ref={messagesEndRef} />
                  </AnimatePresence>
                </div>

                {/* Smart Suggestions */}
                {smartSuggestions.length > 0 && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="px-4 py-2 border-t border-white/20 bg-gradient-to-r from-white/30 to-white/10 dark:from-gray-900/30 dark:to-gray-900/10"
                  >
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-2 font-medium">💡 Smart suggestions:</p>
                    <div className="flex gap-2 overflow-x-auto scrollbar-hide">
                      {smartSuggestions.map((suggestion) => (
                        <motion.button
                          key={suggestion.id}
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handlePredefinedQuestion(suggestion.text)}
                          className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 hover:from-primary/20 hover:to-secondary/20 rounded-xl border border-primary/20 text-sm font-medium text-primary transition-all duration-200 shadow-sm hover:shadow-md whitespace-nowrap"
                        >
                          <span>{suggestion.emoji}</span>
                          <span>{suggestion.text}</span>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Category Tabs */}
                <div className="px-4 py-2 border-t border-white/20 bg-gradient-to-r from-white/50 to-white/30 dark:from-gray-900/50 dark:to-gray-900/30">
                  <div className="flex gap-1 overflow-x-auto scrollbar-hide">
                    {categories.map((category) => (
                      <Button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        variant={selectedCategory === category ? "default" : "ghost"}
                        size="sm"
                        className={cn(
                          "text-xs whitespace-nowrap transition-all duration-200 backdrop-blur-sm",
                          selectedCategory === category 
                            ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg border-0" 
                            : "hover:bg-white/20 dark:hover:bg-gray-800/20 border border-white/20"
                        )}
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Enhanced Predefined Questions */}
                <div className="p-3 bg-gradient-to-br from-white/60 to-white/40 dark:from-gray-900/60 dark:to-gray-900/40 border-t border-white/20 backdrop-blur-sm">
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-3 font-medium flex items-center gap-2">
                    <Sparkles size={14} />
                    Quick questions:
                  </p>
                  <div className="grid grid-cols-1 gap-2 max-h-32 overflow-y-auto custom-scrollbar">
                    {filteredQuestions.map((question) => (
                      <motion.button
                        key={question.id}
                        whileHover={{ scale: 1.02, x: 4 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handlePredefinedQuestion(question.text)}
                        className="text-left p-3 bg-white/80 dark:bg-gray-800/80 rounded-xl border border-white/30 dark:border-gray-700/30 hover:border-primary/40 hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 transition-all duration-200 shadow-sm hover:shadow-md group backdrop-blur-sm"
                      >
                        <div className="flex items-center gap-3">
                          <motion.span 
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            className="text-lg"
                          >
                            {question.emoji}
                          </motion.span>
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors">
                            {question.text}
                          </span>
                          {question.priority === 1 && (
                            <Star size={12} className="text-yellow-500 ml-auto opacity-60" />
                          )}
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>
                
                {/* Reply indicator */}
                {replyingTo && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="px-4 py-2 bg-blue-50 dark:bg-blue-900/20 border-t border-blue-200 dark:border-blue-800 flex items-center gap-2 text-sm text-blue-700 dark:text-blue-300"
                  >
                    <Reply size={14} />
                    <span>Replying to message</span>
                    <Button
                      onClick={() => setReplyingTo(null)}
                      variant="ghost"
                      size="sm"
                      className="ml-auto h-6 w-6 p-0 text-blue-700 dark:text-blue-300"
                    >
                      <X size={12} />
                    </Button>
                  </motion.div>
                )}
                
                {/* Enhanced Input Section */}
                <div className="p-4 border-t border-white/20 bg-gradient-to-r from-white/70 to-white/50 dark:from-gray-800/70 dark:to-gray-800/50 backdrop-blur-sm">
                  <div className="flex items-end gap-3">
                    <div className="flex-1 relative">
                      <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Type your message..."
                        className="w-full px-4 py-3 pr-24 border border-white/30 dark:border-gray-700/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary dark:bg-gray-700/50 dark:text-white resize-none transition-all duration-200 bg-white/80 backdrop-blur-sm shadow-sm"
                        maxLength={500}
                        disabled={isTyping}
                      />
                      
                      {/* Input Actions */}
                      <div className="absolute right-3 bottom-3 flex items-center gap-1">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => setIsRecording(!isRecording)}
                          className={cn(
                            "p-1.5 rounded-full transition-colors",
                            isRecording ? "bg-red-500 text-white" : "hover:bg-gray-100 dark:hover:bg-gray-700"
                          )}
                        >
                          {isRecording ? <Volume2 size={14} /> : <Mic size={14} />}
                        </motion.button>
                        
                        <div className="text-xs text-gray-400 ml-1">
                          {input.length}/500
                        </div>
                      </div>
                    </div>
                    
                    <motion.div whileTap={{ scale: 0.95 }}>
                      <Button 
                        onClick={() => handleSend()}
                        disabled={input.trim() === '' || isTyping}
                        className={cn(
                          "w-12 h-12 rounded-2xl shadow-lg transition-all duration-200 relative overflow-hidden",
                          "bg-gradient-to-br from-primary to-secondary hover:from-primary/90 hover:to-secondary/90",
                          "disabled:opacity-50 disabled:cursor-not-allowed",
                          input.trim() !== '' && !isTyping && "animate-pulse shadow-primary/30"
                        )}
                      >
                        <motion.div
                          animate={input.trim() !== '' && !isTyping ? { rotate: [0, 10, -10, 0] } : {}}
                          transition={{ repeat: Infinity, duration: 1 }}
                        >
                          <Send size={18} className="text-white" />
                        </motion.div>
                        
                        {/* Send button glow effect */}
                        {input.trim() !== '' && !isTyping && (
                          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 animate-pulse rounded-2xl" />
                        )}
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
