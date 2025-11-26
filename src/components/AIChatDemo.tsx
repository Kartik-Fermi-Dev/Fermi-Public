import { useState, useEffect, useRef } from 'react';
import { useInView } from 'motion/react';

// Inline SVG icons to avoid lucide-react runtime errors
const SparklesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
    <path d="M5 3v4"/>
    <path d="M19 17v4"/>
    <path d="M3 5h4"/>
    <path d="M17 19h4"/>
  </svg>
);

const SendIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m22 2-7 20-4-9-9-4Z"/>
    <path d="M22 2 11 13"/>
  </svg>
);

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  timestamp: string;
}

export default function AIChatDemo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [animationKey, setAnimationKey] = useState(0);

  // Initial message to always show
  const initialMessages: Message[] = [
    {
      id: 1,
      text: "Can you analyze our Q4 sales performance?",
      sender: 'user',
      timestamp: '2:34 PM'
    },
    {
      id: 2,
      text: "I've analyzed your Q4 sales data. Revenue increased 23% YoY, with strongest growth in the enterprise segment (+34%). APAC region outperformed at +41%. Key driver: new product line launched in October.",
      sender: 'ai',
      timestamp: '2:34 PM'
    },
    {
      id: 3,
      text: "What's our customer churn rate?",
      sender: 'user',
      timestamp: '2:35 PM'
    }
  ];

  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [isTyping, setIsTyping] = useState(false);
  const [activeMessage, setActiveMessage] = useState<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Reset animation when component comes into view
  useEffect(() => {
    if (isInView) {
      // Reset everything
      setMessages(initialMessages);
      setIsTyping(false);
      setActiveMessage(null);
      setAnimationKey(prev => prev + 1);

      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Start the animation sequence
      // Wait 1.5 seconds, then show typing indicator
      timeoutRef.current = setTimeout(() => {
        setIsTyping(true);
        
        // After 3 seconds of typing, show the response
        timeoutRef.current = setTimeout(() => {
          setIsTyping(false);
          setMessages(prev => [...prev, {
            id: 4,
            text: "Current churn rate is 3.2%, down from 4.1% last quarter. Retention improved significantly after implementing the new onboarding flow.",
            sender: 'ai',
            timestamp: '2:35 PM'
          }]);
          setActiveMessage(2);
        }, 3000);
      }, 1500);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isInView]);

  return (
    <div 
      ref={ref}
      className="bg-white rounded-lg border border-gray-200 shadow-lg overflow-hidden h-full flex flex-col animate-fade-in hover:shadow-xl transition-all duration-500"
      style={{ animationDelay: '0.5s' }}
    >
      {/* Header */}
      <div 
        className="bg-[#0A2F51] text-white px-4 py-3 flex items-center gap-2 animate-slide-down"
        style={{ animationDelay: '0.2s' }}
      >
        <SparklesIcon />
        <span className="text-sm">Fermi AI Assistant</span>
        <span 
          className="ml-auto w-2 h-2 bg-[#87CEEB] rounded-full animate-pulse"
          style={{ animationDuration: '2s' }}
        />
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white min-h-[400px]">
        {messages.map((message, index) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in-up`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div
              className={`max-w-[80%] rounded-lg px-4 py-2.5 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 ${
                message.sender === 'user'
                  ? 'bg-[#1A1A1A] text-white'
                  : 'bg-white border border-gray-200 text-gray-900'
              } ${index === activeMessage ? 'ring-2 ring-[#D4C7E8] shadow-lg' : ''}`}
            >
              <p className="text-sm leading-relaxed">{message.text}</p>
              <span className={`text-xs mt-1 block ${
                message.sender === 'user' ? 'text-gray-300' : 'text-gray-500'
              }`}>
                {message.timestamp}
              </span>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div 
            className="flex justify-start animate-fade-in"
          >
            <div className="bg-white border border-gray-200 rounded-lg px-4 py-2.5 shadow-sm">
              <div className="flex gap-1">
                {[0, 150, 300].map((delay, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 bg-[#0A2F51] rounded-full animate-bounce"
                    style={{ 
                      animationDelay: `${delay}ms`,
                      animationDuration: '0.6s'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div 
        className="border-t border-gray-200 p-3 bg-white animate-slide-up"
        style={{ animationDelay: '0.4s' }}
      >
        <div 
          className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2 border border-gray-200 transition-all duration-200 hover:border-[#C7E0F4]"
        >
          <input
            type="text"
            placeholder="Ask anything about your business..."
            className="flex-1 bg-transparent border-0 focus:outline-none text-sm"
            disabled
          />
          <div className="transition-all duration-200 hover:scale-125 hover:-rotate-[15deg] active:scale-90 cursor-pointer">
            <SendIcon />
          </div>
        </div>
      </div>
    </div>
  );
}