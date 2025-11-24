import { Button } from '../components/ui/button';
import { Brain, Network, Lightbulb, TrendingUp, ArrowRight, Sparkles } from 'lucide-react';
import { SEO } from '../components/SEO';
import NeuralNetwork from '../components/NeuralNetwork';
import { motion } from 'motion/react';
import { useEffect } from 'react';
import { initSectionAnimations } from '../utils/smoothScroll';

type Page = 'home' | 'product' | 'brain' | 'about' | 'contact';

interface BrainPageProps {
  onNavigate: (page: Page) => void;
}

export default function BrainPage({ onNavigate }: BrainPageProps) {
  // Initialize section animations on mount
  useEffect(() => {
    const observer = initSectionAnimations();
    return () => observer.disconnect();
  }, []);

  const exampleQueries = [
    {
      query: "What slowed approvals last quarter?",
      response: "Policy change requiring dual approval for orders over $10K affected 47% of transactions. Average cycle time increased by 2.1 days.",
    },
    {
      query: "Simulate halving lead time",
      response: "Analysis shows automated order routing + pre-approval rules could reduce lead time from 6.2 to 3.1 days. Estimated impact: 32% more throughput.",
    },
    {
      query: "What are the risks if Finance agents reassign to Ops?",
      response: "Warning: 3 approval workflows depend on Finance team roles. Recommend updating delegation rules before reassignment to prevent delays.",
    },
  ];

  return (
    <div className="bg-white">
      <SEO 
        title="The Brain - Unified Business Intelligence"
        description="Your company's digital brain. One shared model of your data, processes, and goals. Simulate changes safely and get intelligent recommendations."
        keywords={["business intelligence", "digital brain", "AI simulation", "enterprise data model", "decision intelligence"]}
      />
      {/* Hero */}
      <section className="container-custom pt-12 md:pt-20 pb-16">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-[#A78BFA]/10 border border-[#A78BFA] rounded-full px-4 py-2 text-xs mb-8 uppercase tracking-wider">
            <Brain className="w-4 h-4 text-[#A78BFA]" />
            <span className="text-[#1A1A1A]">Unified Intelligence</span>
          </div>
          <h1 className="font-display md:text-7xl mb-8 tracking-tight text-[#1A1A1A] leading-tight text-[64px] text-center">
            Your company's<br />
            digital brain
          </h1>
          <p className="text-xl md:text-2xl text-[#6B6D71] leading-relaxed">
            One shared model of your data, processes, and goals. Understand what's happening, execute automation safely, and get intelligent recommendations.
          </p>
        </motion.div>
      </section>

      {/* Digital Brain Visualization */}
      <section className="container-custom pb-32">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <NeuralNetwork />
          </motion.div>
        </div>
      </section>

      {/* How It Learns */}
      <section className="bg-[#F5F2ED] py-32 border-y border-gray-200">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div 
              className="space-y-6 lg:sticky lg:top-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-[#FFB800]/10 border border-[#FFB800] px-3 py-1 rounded-full text-xs uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-[#FFB800]" />
                <span className="text-[#1A1A1A]">Learning Process</span>
              </div>
              <h2 className="text-4xl md:text-6xl tracking-tight text-[#1A1A1A] text-[48px]">
                How the Brain understands your business
              </h2>
              <p className="text-lg text-[#6B6D71] leading-relaxed">
                Through conversations, live system data, and ongoing feedback, the Brain builds a rich, living model of how your operations actually work, not just how they look on paper.
              </p>
              <div className="space-y-4 pt-4">
                <motion.div 
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:border-[#FFB800] transition-colors"
                  whileHover={{ x: 4 }}
                >
                  <div className="text-[#1A1A1A] mb-2 text-[18px]">1. Deep-Dive Discovery</div>
                  <p className="text-sm text-[#6B6D71] text-[16px]">
                    AI onboarding unpacks your processes, edge cases, team structure, and goals, the "how things really get done" inside your business.
                  </p>
                </motion.div>
                <motion.div 
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:border-[#FF9500] transition-colors"
                  whileHover={{ x: 4 }}
                >
                  <div className="text-[#1A1A1A] mb-2 text-[18px]">2. Live System Mapping</div>
                  <p className="text-sm text-[#6B6D71] text-[16px]">
                    The Brain connects to your CRMs, ERPs, databases, and tools to map data flows, handoffs, and dependencies across teams and systems in real time.
                  </p>
                </motion.div>
                <motion.div 
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:border-[#4CD964] transition-colors"
                  whileHover={{ x: 4 }}
                >
                  <div className="text-[#1A1A1A] mb-2 text-[18px]">3. Always-On Adaptation</div>
                  <p className="text-sm text-[#6B6D71] text-[16px]">
                    As your business evolves, the Brain keeps learning, updating workflows from new outcomes, policies, and feedback so it never goes stale.
                  </p>
                </motion.div>
              </div>
            </motion.div>
            <motion.div 
              className="bg-white border border-gray-200 rounded-lg p-8 min-h-[700px] flex items-center justify-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative w-full h-full flex items-center justify-center min-h-[650px]">
                <div className="absolute inset-0">
                  {/* Three-Stage Learning Process Visualization */}
                  <svg viewBox="0 0 400 600" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
                    {/* Stage 1: Deep-Dive Discovery (Top) */}
                    <text x="200" y="35" textAnchor="middle" fill="#1A1A1A" fontSize="16" fontWeight="700" letterSpacing="0.5">
                      STAGE 1: DEEP-DIVE DISCOVERY
                    </text>
                    
                    {/* Chat bubbles with labels */}
                    <motion.g
                      animate={{ y: [0, -5, 0], opacity: [0.8, 1, 0.8] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                    >
                      <rect x="50" y="55" width="80" height="40" rx="8" fill="#87CEEB" opacity="0.9" />
                      <text x="90" y="78" textAnchor="middle" fill="white" fontSize="10" fontWeight="600">Onboarding</text>
                    </motion.g>
                    
                    <motion.g
                      animate={{ y: [0, -5, 0], opacity: [0.8, 1, 0.8] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                    >
                      <rect x="150" y="65" width="100" height="40" rx="8" fill="#FFB800" opacity="0.9" />
                      <text x="200" y="88" textAnchor="middle" fill="white" fontSize="10" fontWeight="600">Conversations</text>
                    </motion.g>
                    
                    <motion.g
                      animate={{ y: [0, -5, 0], opacity: [0.8, 1, 0.8] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                    >
                      <rect x="270" y="60" width="90" height="40" rx="8" fill="#A78BFA" opacity="0.9" />
                      <text x="315" y="83" textAnchor="middle" fill="white" fontSize="10" fontWeight="600">Questions</text>
                    </motion.g>
                    
                    {/* Arrows flowing down */}
                    <motion.path
                      d="M 90 100 L 90 130 M 85 125 L 90 130 L 95 125"
                      stroke="#87CEEB" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                    />
                    <motion.path
                      d="M 200 110 L 200 130 M 195 125 L 200 130 L 205 125"
                      stroke="#FFB800" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0.8 }}
                    />
                    <motion.path
                      d="M 315 105 L 315 130 M 310 125 L 315 130 L 320 125"
                      stroke="#A78BFA" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 1.1 }}
                    />
                    
                    {/* Funnel with label */}
                    <motion.path
                      d="M 100 135 L 140 165 L 260 165 L 300 135 Z"
                      fill="#FFB800" fillOpacity="0.2" stroke="#FFB800" strokeWidth="2.5"
                      animate={{ opacity: [0.5, 0.9, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <text x="200" y="153" textAnchor="middle" fill="#1A1A1A" fontSize="9" fontWeight="600">
                      COLLECTING DATA
                    </text>
                    
                    {/* Divider */}
                    <line x1="40" y1="195" x2="360" y2="195" stroke="#E5E7EB" strokeWidth="1.5" strokeDasharray="6 4" />
                    
                    {/* Stage 2: Live System Mapping */}
                    <text x="200" y="225" textAnchor="middle" fill="#1A1A1A" fontSize="16" fontWeight="700" letterSpacing="0.5">
                      STAGE 2: LIVE SYSTEM MAPPING
                    </text>
                    
                    {/* System boxes with better labels */}
                    <motion.g
                      animate={{ opacity: [0.4, 0.9, 0.4] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                    >
                      <rect x="30" y="245" width="75" height="55" rx="8" fill="#87CEEB" fillOpacity="0.25" stroke="#87CEEB" strokeWidth="2" />
                      <text x="67.5" y="268" textAnchor="middle" fill="#1A1A1A" fontSize="13" fontWeight="700">CRM</text>
                      <text x="67.5" y="283" textAnchor="middle" fill="#1A1A1A" fontSize="8">Customer Data</text>
                    </motion.g>
                    
                    <motion.g
                      animate={{ opacity: [0.4, 0.9, 0.4] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                    >
                      <rect x="120" y="245" width="75" height="55" rx="8" fill="#FFB800" fillOpacity="0.25" stroke="#FFB800" strokeWidth="2" />
                      <text x="157.5" y="268" textAnchor="middle" fill="#1A1A1A" fontSize="13" fontWeight="700">ERP</text>
                      <text x="157.5" y="283" textAnchor="middle" fill="#1A1A1A" fontSize="8">Operations</text>
                    </motion.g>
                    
                    <motion.g
                      animate={{ opacity: [0.4, 0.9, 0.4] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                    >
                      <rect x="210" y="245" width="75" height="55" rx="8" fill="#A78BFA" fillOpacity="0.25" stroke="#A78BFA" strokeWidth="2" />
                      <text x="247.5" y="268" textAnchor="middle" fill="#1A1A1A" fontSize="13" fontWeight="700">DB</text>
                      <text x="247.5" y="283" textAnchor="middle" fill="#1A1A1A" fontSize="8">Analytics</text>
                    </motion.g>
                    
                    <motion.g
                      animate={{ opacity: [0.4, 0.9, 0.4] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.9 }}
                    >
                      <rect x="300" y="245" width="75" height="55" rx="8" fill="#4CD964" fillOpacity="0.25" stroke="#4CD964" strokeWidth="2" />
                      <text x="337.5" y="268" textAnchor="middle" fill="#1A1A1A" fontSize="13" fontWeight="700">Tools</text>
                      <text x="337.5" y="283" textAnchor="middle" fill="#1A1A1A" fontSize="8">Workflows</text>
                    </motion.g>
                    
                    {/* Connection lines */}
                    <motion.line
                      x1="67.5" y1="300" x2="157.5" y2="300"
                      stroke="#87CEEB" strokeWidth="2.5"
                      animate={{ opacity: [0, 0.8, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    />
                    <motion.line
                      x1="157.5" y1="300" x2="247.5" y2="300"
                      stroke="#FFB800" strokeWidth="2.5"
                      animate={{ opacity: [0, 0.8, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1.3 }}
                    />
                    <motion.line
                      x1="247.5" y1="300" x2="337.5" y2="300"
                      stroke="#A78BFA" strokeWidth="2.5"
                      animate={{ opacity: [0, 0.8, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1.6 }}
                    />
                    
                    {/* Central Brain with label */}
                    <motion.circle
                      cx="200" cy="350" r="45" fill="none" stroke="#A78BFA" strokeWidth="3.5"
                      animate={{ scale: [0.85, 1, 0.85], opacity: [0.5, 0.9, 0.5] }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                    />
                    <motion.circle
                      cx="200" cy="350" r="12" fill="#FFB800"
                      animate={{ scale: [1, 1.4, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <text x="200" y="395" textAnchor="middle" fill="#1A1A1A" fontSize="10" fontWeight="700">
                      UNIFIED MODEL
                    </text>
                    
                    {/* Lines to brain */}
                    {[
                      { x: 67.5, color: '#87CEEB', delay: 0 },
                      { x: 157.5, color: '#FFB800', delay: 0.2 },
                      { x: 247.5, color: '#A78BFA', delay: 0.4 },
                      { x: 337.5, color: '#4CD964', delay: 0.6 }
                    ].map((item, i) => (
                      <motion.line
                        key={`brain-connect-${i}`}
                        x1={item.x} y1="300" x2="200" y2="350"
                        stroke={item.color} strokeWidth="2.5"
                        animate={{ opacity: [0, 0.7, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: item.delay + 2.5 }}
                      />
                    ))}
                    
                    {/* Divider */}
                    <line x1="40" y1="415" x2="360" y2="415" stroke="#E5E7EB" strokeWidth="1.5" strokeDasharray="6 4" />
                    
                    {/* Stage 3: Always-On Adaptation */}
                    <text x="200" y="445" textAnchor="middle" fill="#1A1A1A" fontSize="16" fontWeight="700" letterSpacing="0.5">
                      STAGE 3: ALWAYS-ON ADAPTATION
                    </text>
                    
                    {/* Network nodes with improved layout */}
                    {[
                      { cx: 70, cy: 475, color: '#87CEEB', delay: 0, label: 'Learn' },
                      { cx: 155, cy: 475, color: '#FFB800', delay: 0.2, label: 'Adapt' },
                      { cx: 245, cy: 475, color: '#A78BFA', delay: 0.4, label: 'Evolve' },
                      { cx: 330, cy: 475, color: '#4CD964', delay: 0.6, label: 'Refine' },
                      { cx: 112, cy: 525, color: '#FF9500', delay: 0.8 },
                      { cx: 200, cy: 525, color: '#87CEEB', delay: 1.0 },
                      { cx: 288, cy: 525, color: '#FFB800', delay: 1.2 },
                      { cx: 155, cy: 570, color: '#A78BFA', delay: 1.4 },
                      { cx: 245, cy: 570, color: '#4CD964', delay: 1.6 }
                    ].map((node, i) => (
                      <motion.g key={`adapt-node-${i}`}>
                        <motion.circle
                          cx={node.cx} cy={node.cy} r="10" fill={node.color}
                          animate={{ 
                            scale: [1, 1.5, 1],
                            opacity: [0.6, 1, 0.6]
                          }}
                          transition={{ 
                            duration: 2.5, 
                            repeat: Infinity, 
                            delay: node.delay,
                            ease: "easeInOut"
                          }}
                        />
                        {node.label && (
                          <text x={node.cx} y={node.cy - 20} textAnchor="middle" fill="#1A1A1A" fontSize="8" fontWeight="600">
                            {node.label}
                          </text>
                        )}
                      </motion.g>
                    ))}
                    
                    {/* Connection lines */}
                    <motion.path
                      d="M 70 475 L 155 475 L 245 475 L 330 475"
                      stroke="#87CEEB" strokeWidth="2.5" fill="none"
                      animate={{ opacity: [0.2, 0.8, 0.2] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 0 }}
                    />
                    <motion.path
                      d="M 112 525 L 200 525 L 288 525"
                      stroke="#FFB800" strokeWidth="2.5" fill="none"
                      animate={{ opacity: [0.2, 0.8, 0.2] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                    />
                    <motion.path
                      d="M 155 570 L 245 570"
                      stroke="#A78BFA" strokeWidth="2.5" fill="none"
                      animate={{ opacity: [0.2, 0.8, 0.2] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                    />
                    
                    {/* Vertical connections */}
                    <motion.line
                      x1="155" y1="475" x2="155" y2="570"
                      stroke="#4CD964" strokeWidth="2.5"
                      animate={{ opacity: [0.2, 0.8, 0.2] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: 1.5 }}
                    />
                    <motion.line
                      x1="245" y1="475" x2="245" y2="570"
                      stroke="#FF9500" strokeWidth="2.5"
                      animate={{ opacity: [0.2, 0.8, 0.2] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: 2 }}
                    />
                    
                    {/* Feedback loops */}
                    <motion.path
                      d="M 330 480 Q 360 500 330 520"
                      stroke="#4CD964" strokeWidth="2.5" fill="none"
                      animate={{ opacity: [0, 0.7, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 2.5 }}
                    />
                    <motion.path
                      d="M 70 520 Q 40 540 70 560"
                      stroke="#87CEEB" strokeWidth="2.5" fill="none"
                      animate={{ opacity: [0, 0.7, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 3 }}
                    />
                    
                    {/* Continuous learning indicator */}
                    {[0, 1, 2, 3].map((i) => (
                      <motion.circle
                        key={`pulse-${i}`}
                        cx={200} cy={525} r="25" fill="none" stroke="#FFB800" strokeWidth="2.5"
                        animate={{ 
                          scale: [0.5, 2.8, 0.5],
                          opacity: [0.8, 0, 0]
                        }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity, 
                          delay: i * 0.75,
                          ease: "easeOut"
                        }}
                      />
                    ))}
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What It Knows */}
      <section className="container-custom py-32">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-6xl mb-6 tracking-tight text-[#1A1A1A]">
            What the Brain knows
          </h2>
          <p className="text-[#6B6D71] leading-relaxed text-[20px]">
            A comprehensive operational model covering every aspect of your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div 
            className="bg-white border border-gray-200 rounded-lg p-8 space-y-4 hover:border-[#87CEEB] transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            whileHover={{ y: -4 }}
          >
            <div className="w-12 h-12 bg-[#87CEEB] rounded-lg flex items-center justify-center">
              <Network className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-[#1A1A1A] text-[18px]">Entities</h3>
            <p className="text-sm text-[#6B6D71] text-[16px]">
              Customers, orders, products, inventory, teams, resources, and all business objects.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white border border-gray-200 rounded-lg p-8 space-y-4 hover:border-[#FFB800] transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            whileHover={{ y: -4 }}
          >
            <div className="w-12 h-12 bg-[#FFB800] rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-[#1A1A1A] text-[18px]">Relationships</h3>
            <p className="text-sm text-[#6B6D71] text-[16px]">
              Dependencies between systems, workflow connections, and reporting hierarchies.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white border border-gray-200 rounded-lg p-8 space-y-4 hover:border-[#A78BFA] transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            whileHover={{ y: -4 }}
          >
            <div className="w-12 h-12 bg-[#A78BFA] rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-[#1A1A1A] text-[18px]">Policies</h3>
            <p className="text-sm text-[#6B6D71] text-[16px]">
              Business rules, approval chains, compliance requirements, and governance controls.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white border border-gray-200 rounded-lg p-8 space-y-4 hover:border-[#4CD964] transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            whileHover={{ y: -4 }}
          >
            <div className="w-12 h-12 bg-[#4CD964] rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-[#1A1A1A] text-[18px]">KPIs & Goals</h3>
            <p className="text-sm text-[#6B6D71] text-[16px]">
              Key metrics, business objectives, and performance targets across all departments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What It Does */}
      <section className="bg-[#F5F2ED] py-32 border-y border-gray-200">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-6 tracking-tight text-[#1A1A1A]">
              What the Brain does
            </h2>
            <p className="text-[#6B6D71] leading-relaxed text-[20px]">
              Ask questions, get insights, simulate changes, and receive intelligent recommendations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white border border-gray-200 rounded-lg p-8 space-y-4 hover:border-[#FFB800] transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -4 }}
            >
              <div className="w-12 h-12 bg-[#FFB800] rounded-lg flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-[#1A1A1A] text-[18px]">Answers Questions</h3>
              <p className="text-sm text-[#6B6D71] text-[16px]">
                Natural language queries about operations, performance, bottlenecks, and trends.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white border border-gray-200 rounded-lg p-8 space-y-4 hover:border-[#A78BFA] transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="w-12 h-12 bg-[#A78BFA] rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-[#1A1A1A] text-[18px]">Execute Automations</h3>
              <p className="text-sm text-[#6B6D71] text-[16px]">
                Activate automation templates, optimized workflows, and context-aware actions safely and reliably.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white border border-gray-200 rounded-lg p-8 space-y-4 hover:border-[#4CD964] transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              whileHover={{ y: -4 }}
            >
              <div className="w-12 h-12 bg-[#4CD964] rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-[#1A1A1A] text-[18px]">Recommends Actions</h3>
              <p className="text-sm text-[#6B6D71] text-[16px]">
                Intelligent suggestions for optimization, risk mitigation, and efficiency improvements.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Example Queries */}
      <section className="container-custom py-32">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-6xl mb-6 tracking-tight text-[#1A1A1A]">
            Ask anything
          </h2>
          <p className="text-lg text-[#6B6D71]">
            Natural language queries get intelligent, context-aware responses.
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {exampleQueries.map((item, index) => {
            const colors = ['#87CEEB', '#FFB800', '#A78BFA'];
            const color = colors[index % colors.length];
            
            return (
              <motion.div 
                key={index} 
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-[#A78BFA] transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="p-6 bg-[#F5F2ED] border-b border-gray-200">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: color }}>
                      <span className="text-white text-sm">Q</span>
                    </div>
                    <p className="text-lg text-[#1A1A1A] pt-1">{item.query}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0 mt-1 border-2" style={{ borderColor: color }}>
                      <Brain className="w-4 h-4" style={{ color: color }} />
                    </div>
                    <p className="text-[#6B6D71] pt-1 leading-relaxed">{item.response}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="container-custom py-[30px] px-[0px]">
        <motion.div 
          className="bg-[#1A1A1A] rounded-lg p-16 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl mb-6 tracking-tight text-white">
            Explore the Brain in a demo
          </h2>
          <p className="text-lg text-[#87CEEB] mb-10 max-w-2xl mx-auto">
            See how the Brain understands your operations and helps you make better decisions.
          </p>
          <Button
            onClick={() => onNavigate('contact')}
            size="lg"
            className="bg-[#FFB800] hover:bg-[#FF9500] text-[#1A1A1A] px-10 rounded-md"
          >
            Request demo <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </section>
    </div>
  );
}