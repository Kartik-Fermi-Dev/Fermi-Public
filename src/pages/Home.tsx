import { Button } from '../components/ui/button';
import { Brain, ArrowRight, CheckCircle2, Sparkles, Terminal, Database, Zap, Shield, Users, TrendingUp, Workflow, Lock, Activity, Code } from 'lucide-react';
import { useState, useEffect } from 'react';
import { SEO } from '../components/SEO';
import AIChatDemo from '../components/AIChatDemo';
import NeuralNetwork from '../components/NeuralNetwork';
import BackedByAntler from '../components/BackedByAntler';
import { motion } from 'motion/react';
import { initSectionAnimations } from '../utils/smoothScroll';
import { usePageTracking } from '../hooks/usePageTracking';

type Page = 'home' | 'product' | 'brain' | 'blog' | 'about' | 'contact';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  usePageTracking('home', 'Fermi Dev - AI Operational Brain for Modern Enterprises');
  
  const [hoveredPillar, setHoveredPillar] = useState<number | null>(null);
  
  // Typewriter animation state
  const phrases = [
    "understands your business",
    "runs your operations",
    "works with your team"
  ];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Initialize section animations on mount
  useEffect(() => {
    const observer = initSectionAnimations();
    return () => observer.disconnect();
  }, []);

  // Typewriter effect
  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseDuration = 2000; // Pause at end of phrase

    if (!isDeleting && currentText === currentPhrase) {
      // Pause at the end before deleting
      const timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && currentText === "") {
      // Move to next phrase
      setIsDeleting(false);
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      return;
    }

    const timeout = setTimeout(() => {
      setCurrentText(
        isDeleting
          ? currentPhrase.substring(0, currentText.length - 1)
          : currentPhrase.substring(0, currentText.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentPhraseIndex]);

  return (
    <div className="bg-white">
      <SEO 
        title="AI Operational Brain for Modern Enterprises"
        description="Fermi Dev is the AI Operational Brain for Modern Enterprises. Connect your systems, build dynamic models, and automate business processes and operations with intelligent agents."
        keywords={["AI operational brain", "enterprise automation", "business process automation", "operational intelligence", "AI agents"]}
      />
      {/* Hero Section */}
      <section className="container-custom md:pt-12 w-full min-h-[500px] md:min-h-[600px] p-[30px] mt-[0px] mr-[0px] mb-[90px] ml-[0px]" data-scroll-section>
        <div className="max-w-5xl">
          {/* Backed by Antler Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <BackedByAntler />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-6xl md:text-8xl mb-6 leading-[1.1] tracking-tight text-[#1A1A1A] min-h-[180px] md:min-h-[240px]"
          >
            AI that <span className="text-[#FF9500]">{currentText}<span className="animate-pulse">|</span></span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-[#6B6D71] mb-10 max-w-3xl leading-relaxed"
          >
            Fermi acts as the AI Operational Brain for your enterprise. We connect your scattered tools, build a unified business model, and automate complex operations.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border border-[#6B6D71]/30 hover:border-[#0A2F51] hover:bg-gray-100 text-[#1A1A1A] rounded-md group text-[16px]"
            >
              <a href="https://demo.fermi.dev/" target="_blank" rel="noopener noreferrer">
                Explore platform
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* The Brain Section */}
      <section className="container-custom pt-0 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-[#D4C7E8]/40 text-[#0A2F51] px-3 py-1 rounded-full text-lg mb-5 uppercase tracking-wider">
              The Brain
            </div>
            <h2 className="text-4xl md:text-6xl mb-5 text-[#1A1A1A] leading-tight">
              Your unified<br />
              operational brain
            </h2>
            <p className="text-lg text-[#6B6D71] mb-6 leading-relaxed">
              A living neural network that maps your entire business, entities, relationships, roles, and workflows, into one intelligent system.
            </p>
            <div className="space-y-3">
              {[
                { title: 'Deep context understanding', desc: 'Connects data across all systems and departments', color: '#87CEEB' },
                { title: 'Real-time learning', desc: 'Adapts to changes and discovers new patterns', color: '#FFB800' },
                { title: 'Intelligent predictions', desc: 'Anticipates needs and suggests optimizations', color: '#4CD964' }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-3"
                >
                  <motion.div 
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm"
                    style={{ backgroundColor: item.color }}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Brain className="w-4 h-4 text-white" />
                  </motion.div>
                  <div>
                    <p className="text-[#1A1A1A]">{item.title}</p>
                    <p className="text-lg text-[#6B6D71]">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div 
              className="mt-6"
              whileHover={{ x: 4 }}
            >
              <Button
                onClick={() => onNavigate('brain')}
                variant="link"
                className="text-[#0A2F51] hover:text-[#0A2F51]/80 px-0 group text-[16px]"
              >
                Explore The Brain 
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <NeuralNetwork />
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-200"></div>

      {/* AI Chat Interactive Demo */}
      <section className="container-custom py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-[#87CEEB]/10 border border-[#87CEEB] text-[#0A2F51] px-3 py-1 rounded-full text-lg mb-5 uppercase tracking-wider">
              Live AI Assistant
            </div>
            <h2 className="font-display text-4xl md:text-6xl mb-5 text-[#1A1A1A] leading-tight">
              Ask anything.
            </h2>
            <p className="text-lg text-[#6B6D71] mb-4 leading-relaxed">
              Instant, clear answers drawn from your real systems.
            </p>
            <p className="text-lg text-[#1A1A1A] leading-relaxed mb-6">
              No setup. No chaos. Just clarity.
            </p>
            <div className="space-y-3">
              {[
                { title: 'Natural language queries', desc: 'Ask questions like you would to a colleague', color: '#A78BFA' },
                { title: 'Real-time data analysis', desc: 'Instant insights from all connected sources', color: '#FF9500' },
                { title: 'Contextual understanding', desc: 'Remembers previous conversations and context', color: '#4CD964' }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-3"
                >
                  <motion.div 
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm"
                    style={{ backgroundColor: item.color }}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </motion.div>
                  <div>
                    <p className="text-[#1A1A1A]">{item.title}</p>
                    <p className="text-lg text-[#6B6D71]">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <AIChatDemo />
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-200"></div>

      {/* Problem vs Solution Comparison */}
      <section className="bg-[#F5F2ED] py-20 border-y border-gray-200">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {/* Problem Side */}
            <motion.div 
              className="space-y-5 p-7 bg-white/40 border border-gray-300 rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="inline-block bg-gray-200 text-[#6B6D71] px-3 py-1 rounded-full text-lg uppercase tracking-wider">
                The Problem
              </div>
              <h3 className="text-3xl md:text-4xl text-[#1A1A1A] leading-tight opacity-70">
                Disconnected tools.<br />
                Scattered data.<br />
                Endless coordination.
              </h3>
              <p className="text-[#6B6D71] leading-relaxed">
                Most teams struggle with fragmented systems, manual workflows, and slow change processes that hold them back.
              </p>
            </motion.div>

            {/* Solution Side */}
            <motion.div 
              className="space-y-5 p-7 bg-[#87CEEB]/10 border-2 border-[#0A2F51] rounded-lg relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02, borderColor: '#D4C7E8' }}
            >
              <motion.div 
                className="absolute -right-10 -top-10 w-40 h-40 bg-[#D4C7E8] rounded-full opacity-20 blur-3xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <div className="inline-block bg-[#0A2F51] text-white px-3 py-1 rounded-full text-lg uppercase tracking-wider relative z-10">
                The Solution
              </div>
              <h3 className="text-3xl md:text-4xl text-[#0A2F51] leading-tight relative z-10">
                One digital brain.<br />
                Workflows that design themselves.<br />
                Agents that do the work.
              </h3>
              <p className="text-[#1A1A1A] leading-relaxed relative z-10">
                Fermi unifies your operations into one intelligent system that learns, coordinates, and executes, safely and at speed.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="container-custom py-20">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl mb-5 text-[#1A1A1A] leading-tight">
            Three pillars of intelligent operations
          </h2>
          <p className="text-lg text-[#6B6D71] max-w-2xl mx-auto text-[20px]">
            The complete system for understanding, coordinating, and executing work across your business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Brain,
              title: 'The Brain',
              desc: 'Your company\'s unified operational model. Understands entities, relationships, policies, and goals.',
              iconColor: '#87CEEB',
              features: ['Natural language queries', 'Unified business context', 'Intelligent recommendations'],
              page: 'brain' as Page
            },
            {
              icon: Workflow,
              title: 'The Conductor',
              desc: 'Safe change management through Simulate > Approve > Apply workflow. Test before deploying.',
              iconColor: '#A78BFA',
              features: ['Intelligent, adaptive simulation', 'AI-driven rules & decisions', 'Pre-configured workflow templates'],
              page: 'product' as Page
            },
            {
              icon: Users,
              title: 'The Agents',
              desc: 'AI agents that execute work 24/7. Pre-built library plus custom builder for your unique needs.',
              iconColor: '#4CD964',
              features: ['Pay only for usage', 'Shared context across agents', 'Build custom agents easily'],
              page: 'product' as Page
            }
          ].map((pillar, i) => (
            <motion.div 
              key={i}
              className="bg-white border border-gray-200 rounded-lg p-7 hover:border-[#0A2F51] transition-all cursor-pointer group relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
              onHoverStart={() => setHoveredPillar(i)}
              onHoverEnd={() => setHoveredPillar(null)}
            >
              <div className="relative z-10">
                <motion.div 
                  className="w-14 h-14 rounded-lg flex items-center justify-center mb-5 shadow-sm"
                  style={{ backgroundColor: pillar.iconColor }}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <pillar.icon className="w-7 h-7 text-white" />
                </motion.div>
                <h3 className="text-2xl text-[#1A1A1A] mb-3">{pillar.title}</h3>
                <p className="text-[#6B6D71] mb-5 leading-relaxed text-[16px]">
                  {pillar.desc}
                </p>
                <ul className="space-y-2 text-sm text-[#6B6D71]">
                  {pillar.features.map((feature, j) => (
                    <motion.li 
                      key={j}
                      className="flex items-start gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={hoveredPillar === i ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
                      transition={{ delay: j * 0.1 }}
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#0A2F51] flex-shrink-0 mt-0.5" />
                      <span className="text-[16px]">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                <Button
                  onClick={() => onNavigate(pillar.page)}
                  variant="link"
                  className="text-[#0A2F51] hover:text-[#0A2F51]/80 px-0 mt-5 group/btn"
                >
                  Learn more 
                  <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Your Operations Reimagined */}
      <section className="bg-[#F5F2ED] py-20 border-y border-gray-200">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl mb-5 text-[#1A1A1A] leading-tight">
              Your operations. Reimagined.
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { label: 'Processes become intelligent.', color: '#FFB800' },
              { label: 'Decisions become automatic.', color: '#FF9500' },
              { label: 'Teams become faster.', color: '#4CD964' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                className="flex flex-col items-center gap-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -4 }}
              >
                <motion.div 
                  className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                  style={{ backgroundColor: item.color }}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </motion.div>
                <div className="text-xl text-[#1A1A1A] text-center">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Onboard in Hours */}
      <section className="bg-[#F5F2ED] py-20 border-y border-gray-200">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block bg-[#C7E0F4]/40 text-[#0A2F51] px-3 py-1 rounded-full text-lg mb-5 uppercase tracking-wider">
                Self-Onboarding
              </div>
              <h2 className="md:text-6xl mb-5 text-[#1A1A1A] leading-tight text-[48px]">
                Onboard your business<br />
                in hours, not months
              </h2>
              <p className="text-[#6B6D71] mb-6 leading-relaxed text-[18px]">
                Traditional enterprise systems take months to implement. Fermi's self-onboarding gets you operational in hours.
              </p>
            </motion.div>
            <motion.div 
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -4, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="space-y-5">
                <div className="pb-3 border-b border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg text-[#6B6D71]">Setup Progress</span>
                    <span className="text-lg text-[#0A2F51]">3 of 4 complete</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div 
                      className="bg-[#0A2F51] h-2 rounded-full" 
                      initial={{ width: '0%' }}
                      whileInView={{ width: '75%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { text: 'Business goals mapped', complete: true },
                    { text: 'Systems connected', complete: true },
                    { text: 'Policies configured', complete: true },
                    { text: 'Agents deploying...', complete: false }
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      className={`flex items-center gap-3 p-3 ${item.complete ? 'bg-[#C7E0F4]/20' : 'bg-gray-100'} rounded-lg`}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      whileHover={{ scale: 1.02, x: 4 }}
                    >
                      {item.complete ? (
                        <CheckCircle2 className="w-5 h-5 text-[#0A2F51]" />
                      ) : (
                        <div className="w-5 h-5 rounded-full border-2 border-gray-300"></div>
                      )}
                      <span className={item.complete ? 'text-[#1A1A1A]' : 'text-[#6B6D71]'}>{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Digital Workforce */}
      <section className="bg-[#F5F2ED] py-[42px] border-y border-gray-200 px-[0px]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl text-[#1A1A1A] mb-5">Active Agents</h3>
              <div className="space-y-2">
                {[
                  { name: 'Order Processing', icon: Zap, status: 'Active', tasks: 234, color: '#5FD068' },
                  { name: 'Customer Support', icon: Users, status: 'Active', tasks: 156, color: '#FFA500' },
                  { name: 'Invoice Management', icon: Database, status: 'Active', tasks: 89, color: '#FFD700' },
                  { name: 'Approval Routing', icon: Workflow, status: 'Active', tasks: 45, color: '#A78BFA' },
                ].map((agent, i) => (
                  <motion.div 
                    key={agent.name} 
                    className="flex items-center justify-between p-4 bg-[#F5F2ED]/50 rounded-lg hover:bg-white transition-all cursor-pointer group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    whileHover={{ x: 4, scale: 1.02 }}
                  >
                    <div className="flex items-center gap-3 bg-[rgba(43,31,95,0)]">
                      <motion.div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: agent.color }}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <agent.icon className="w-5 h-5 text-white" />
                      </motion.div>
                      <div>
                        <div className="text-sm text-[#1A1A1A] group-hover:text-[#0A2F51] transition-colors text-[14px]">{agent.name}</div>
                        <div className="text-xs text-[#6B6D71] flex items-center gap-1 mt-1">
                          <motion.div 
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: agent.color }}
                            animate={{ scale: [1, 1.2, 1], opacity: [1, 0.6, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                          {agent.status}
                        </div>
                      </div>
                    </div>
                    <div className="text-sm text-[#6B6D71]">{agent.tasks} tasks</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block bg-[#D4C7E8]/40 text-[#0A2F51] px-3 py-1 rounded-full text-lg mb-5 uppercase tracking-wider">
                AI Agents
              </div>
              <h2 className="text-4xl md:text-6xl mb-5 text-[#1A1A1A] leading-tight">
                One digital workforce.
              </h2>
              <p className="text-lg text-[#6B6D71] mb-2 leading-relaxed">
                Agents that execute real work inside your systems.
              </p>
              <p className="text-lg text-[#1A1A1A] mb-6">
                Stable. Auditable. Reliable.
              </p>
              <ul className="space-y-3">
                {[
                  { title: 'Pre-configured for common tasks', desc: 'Deploy instantly for standard workflows' },
                  { title: 'Custom agent builder', desc: 'Create agents tailored to your business' }
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    whileHover={{ x: 4 }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#0A2F51] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[#1A1A1A] text-[16px]">{item.title}</div>
                      <div className="text-sm text-[#6B6D71] mt-1 text-[16px]">{item.desc}</div>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#0A2F51] py-20 relative overflow-hidden">
        <motion.div 
          className="absolute top-0 right-0 w-96 h-96 bg-[#D4C7E8] rounded-full opacity-10 blur-3xl"
          animate={{ scale: [1, 1.3, 1], x: [0, 50, 0], y: [0, -50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-96 h-96 bg-[#C7E0F4] rounded-full opacity-10 blur-3xl"
          animate={{ scale: [1, 1.3, 1], x: [0, -50, 0], y: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        />
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-3 gap-10 text-center text-white">
            {[
              { stat: '60%', label: 'Reduction in operational costs' },
              { stat: '35%', label: 'Increase in overall throughput' },
              { stat: '100%', label: 'Visibility into operations' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="text-6xl md:text-7xl mb-3"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                >
                  {item.stat}
                </motion.div>
                <div className="text-[#C7E0F4] text-lg text-[20px]">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}