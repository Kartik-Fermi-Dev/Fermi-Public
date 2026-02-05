import { useState, useRef, useEffect } from 'react';
import { Send, Mic, ChevronRight, ChevronLeft } from 'lucide-react';
import OverviewSection from '../components/OverviewSection';
import DataConnectorsSection, { DataConnectorsSubNav, DataConnectorsContent } from '../components/DataConnectorsSection';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

const DUMMY_QUESTIONS = [
  "How are quality systems performing?",
  "Show production schedule status",
  "Check compliance and audit status"
];

const DUMMY_RESPONSES: Record<string, string> = {
  "how are quality systems performing": "Quality systems are operating optimally. Current batch testing shows 98.5% first-pass yield. The Deviation Analysis module identified 2 minor non-conformances this week, both resolved through CAPA. Lab results indicate all critical quality attributes are within specification.",
  "show production schedule status": "Production planning is optimized for this quarter. Batch scheduling shows 94% capacity utilization with 12 batches scheduled this week. Resource allocation is balanced across 3 production lines. Demand forecast predicts 15% increase next month.",
  "check compliance and audit status": "All regulatory compliance systems are current. GMP monitoring shows 100% adherence across manufacturing areas. Audit trail is complete with 847 documented activities this month. All SOPs are up-to-date with electronic signatures captured. Environmental controls maintain cleanroom classification.",
};

export default function ExploreProductPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'data-connectors' | 'brain'>('brain');
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isChatCollapsed, setIsChatCollapsed] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = (text?: string) => {
    const messageText = text || inputValue.trim();
    if (!messageText) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');

    // Simulate typing
    setIsTyping(true);

    // Generate response after a delay
    setTimeout(() => {
      const lowerText = messageText.toLowerCase();
      let response = "I've analyzed your query across multiple pharma manufacturing systems including Quality Control, Production Planning, Regulatory Compliance, and Supply Chain. The AI core processed real-time data from all connected modules to provide you with actionable insights. What specific area would you like to explore further?";

      // Check for matching responses
      for (const [key, value] of Object.entries(DUMMY_RESPONSES)) {
        if (lowerText.includes(key)) {
          response = value;
          break;
        }
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: 'assistant',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuestionClick = (question: string) => {
    handleSendMessage(question);
  };

  return (
    <div className="w-full h-screen bg-[#FAFAFA] flex flex-col">
      {/* Top Header Bar */}
      <div className="w-full bg-white border-b border-gray-200">
        <div className="flex items-center justify-start gap-16 px-8 py-15">
          {/* Left Side - Company Name */}
          <div className="flex flex-col py-4">
            <h1 className="text-[#0a2f51] text-xl font-bold leading-tight">
              Fermi Pharmaceuticals
            </h1>
            <p className="text-gray-400 text-sm mt-1">
              Demo organisation
            </p>
          </div>

          {/* Right Side - Navigation Tabs */}
          <div className="flex items-center gap-8">
            <button
              onClick={() => setActiveTab('overview')}
              className={`rounded-lg text-base font-medium transition-all ${
                activeTab === 'overview'
                  ? 'bg-[#f5f2ed] text-[#0a2f51] font-bold px-6 py-3'
                  : 'text-[#0a2f51] hover:text-[#0a2f51]/80 px-5 py-2.5'
              }`}
              style={activeTab === 'overview' ? { backgroundColor: '#f5f2ed' } : {}}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('data-connectors')}
              className={`rounded-lg text-base font-medium transition-all ${
                activeTab === 'data-connectors'
                  ? 'bg-[#f5f2ed] text-[#0a2f51] font-bold px-6 py-3'
                  : 'text-[#0a2f51] hover:text-[#0a2f51]/80 px-5 py-2.5'
              }`}
              style={activeTab === 'data-connectors' ? { backgroundColor: '#f5f2ed' } : {}}
            >
              Data Connectors
            </button>
            <button
              onClick={() => setActiveTab('brain')}
              className={`rounded-lg text-base font-medium transition-all ${
                activeTab === 'brain'
                  ? 'bg-[#f5f2ed] text-[#0a2f51] font-bold px-6 py-3'
                  : 'text-[#0a2f51] hover:text-[#0a2f51]/80 px-5 py-2.5'
              }`}
              style={activeTab === 'brain' ? { backgroundColor: '#f5f2ed' } : {}}
            >
              The Brain
            </button>
          </div>
        </div>
      </div>

      <DataConnectorsSection>
        {/* Sub-navigation Bar for Data Connectors */}
        {activeTab === 'data-connectors' && (
          <div className="w-full bg-white border-b border-gray-200">
            <div className="flex items-center justify-start gap-8 px-8 py-4">
              <DataConnectorsSubNav />
            </div>
          </div>
        )}

        {/* Main Content Area */}
        <div className="flex overflow-hidden" style={{ height: activeTab === 'data-connectors' ? 'calc(100vh - 160px)' : 'calc(100vh - 80px)', width: '100%' }}>
          {/* Left Side - Brain Visualization Area */}
          <div className="flex-1 min-w-0 relative bg-[#FAFAFA] flex items-center justify-center h-full overflow-hidden">
            {activeTab === 'brain' && (
              <>
                <div className="text-center p-8">
                  <h1 className="font-semibold text-[24px] text-[#0a2f51] mb-4">
                    Have a Pharma Manufacturing Question?
                  </h1>
                  <p className="text-gray-600 text-lg">
                    Brain visualization will be implemented here
                  </p>
                </div>
                {/* Expand Chat Button - appears when chat is collapsed */}
                {isChatCollapsed && (
                  <button
                    onClick={() => setIsChatCollapsed(false)}
                    className="absolute right-4 top-4 p-2 bg-white border border-gray-200 hover:bg-gray-50 rounded-lg shadow-sm transition-colors"
                    title="Expand chat"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                  </button>
                )}
              </>
            )}
            {activeTab === 'overview' && (
              <OverviewSection />
            )}
            {activeTab === 'data-connectors' && (
              <DataConnectorsContent />
            )}
        </div>

        {/* Right Side - Chat Sidebar */}
        {activeTab === 'brain' && !isChatCollapsed && (
          <div className="bg-white border-l border-gray-200 flex flex-col h-full flex-shrink-0 overflow-hidden" style={{ width: '30%', maxWidth: '30%', minWidth: '30%', flexBasis: '30%' }}>
            {/* Chat Header */}
            <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-[#0a2f51] text-xl mb-1">Chat</h3>
                <p className="text-sm text-gray-600">Ask about any aspect of your operations</p>
              </div>
              <button
                onClick={() => setIsChatCollapsed(true)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                title="Collapse chat"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Chat Messages Area */}
            <div
              ref={chatContainerRef}
              className="flex-1 overflow-y-auto p-6 space-y-4 min-w-0"
            >
              {messages.length === 0 && (
                <div className="flex flex-col items-center justify-center h-full py-8">
                  <p className="text-large mb-6 font-light text-center" style={{ color: 'rgba(10, 47, 81, 0.6)' }}>
                    Start a conversation to explore your pharmaceutical operations.
                  </p>
                  
                  {/* Suggested Questions */}
                  <div className="space-y-2 w-full max-w-md">
                    {DUMMY_QUESTIONS.map((question, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuestionClick(question)}
                        className="w-full text-left px-4 py-3 hover:bg-[#f5f2ed] rounded-lg text-base font-medium text-[#0a2f51] transition-all duration-200 cursor-pointer hover:shadow-sm"
                        style={{ backgroundColor: '#fcfbf9' }}
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Messages */}
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 break-words overflow-hidden ${
                      message.sender === 'user'
                        ? 'text-white'
                        : 'text-[#0a2f51]'
                    }`}
                    style={{ 
                      wordBreak: 'break-word', 
                      overflowWrap: 'break-word',
                      backgroundColor: message.sender === 'user' ? '#0a2f51' : '#f5f2ed'
                    }}
                  >
                    <p className="text-base font-normal leading-relaxed break-words whitespace-pre-wrap" style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}>{message.text}</p>
                    <span
                      className={`text-xs mt-1 block ${
                        message.sender === 'user' ? 'text-gray-300' : 'text-[#0a2f51]/70'
                      }`}
                    >
                      {/* {message.timestamp.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })} */}
                    </span>
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start animate-fade-in">
                  <div 
                    className="rounded-2xl px-4 py-3 flex items-center"
                    style={{ backgroundColor: '#f5f2ed' }}
                  >
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-2.5 h-2.5 bg-[#0a2f51] rounded-full"
                        style={{
                          animation: 'shimmer 1.2s ease-in-out infinite',
                          animationDelay: '0ms'
                        }}
                      ></div>
                      <div 
                        className="w-2.5 h-2.5 bg-[#0a2f51] rounded-full"
                        style={{
                          animation: 'shimmer 1.2s ease-in-out infinite',
                          animationDelay: '0.4s'
                        }}
                      ></div>
                      <div 
                        className="w-2.5 h-2.5 bg-[#0a2f51] rounded-full"
                        style={{
                          animation: 'shimmer 1.2s ease-in-out infinite',
                          animationDelay: '0.8s'
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input */}
            <div className="px-6 py-4 border-t border-gray-200">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                  placeholder="Ask about your operations..."
                  className="flex-1 px-4 py-4 border-0 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#0a2f51] text-sm"
                  style={{ backgroundColor: '#fafafa' }}
                />
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <Mic className="w-5 h-5 text-gray-600" />
                  </button>
                  <button
                    onClick={() => handleSendMessage()}
                    disabled={!inputValue.trim() || isTyping}
                    className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <Send className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      </DataConnectorsSection>
    </div>
  );
}
