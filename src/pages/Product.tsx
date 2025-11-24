import { useState, useEffect, useRef } from 'react';
import { SEO } from '../components/SEO';
import { Button } from '../components/ui/button';
import { Brain, Workflow, Users, Lock, Activity, Code, ArrowRight, CheckCircle2, Database, Zap, Terminal, Shield, Eye, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import NeuralNetwork from '../components/NeuralNetwork';

type Page = 'home' | 'product' | 'brain' | 'blog' | 'about' | 'contact';

interface ProductPageProps {
  onNavigate: (page: Page) => void;
}

export default function ProductPage({ onNavigate }: ProductPageProps) {
  const [activeTab, setActiveTab] = useState('onboarding');
  const [isTabsSticky, setIsTabsSticky] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 300);
      
      requestAnimationFrame(() => {
        const startPosition = window.pageYOffset;
        const duration = 900;
        const startTime = performance.now();

        document.body.style.overflow = 'hidden';

        const cubicBezier = (t: number): number => {
          const p0 = 0;
          const p1 = 0.22;
          const p2 = 0.36;
          const p3 = 1;
          
          const oneMinusT = 1 - t;
          const oneMinusTSquared = oneMinusT * oneMinusT;
          const oneMinusTCubed = oneMinusTSquared * oneMinusT;
          const tSquared = t * t;
          const tCubed = tSquared * t;
          
          return (
            oneMinusTCubed * p0 +
            3 * oneMinusTSquared * t * p1 +
            3 * oneMinusT * tSquared * p2 +
            tCubed * p3
          );
        };

        const animateScroll = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easing = cubicBezier(progress);

          window.scrollTo(0, startPosition * (1 - easing));

          if (progress < 1) {
            requestAnimationFrame(animateScroll);
          } else {
            setTimeout(() => {
              document.body.style.overflow = '';
            }, 300);
          }
        };

        requestAnimationFrame(animateScroll);
      });
    };

    scrollToTop();
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // Don't update activeTab if we're programmatically scrolling
      if (isScrollingRef.current) {
        console.log('⏸️ Observer paused - manual scroll in progress');
        return;
      }
      
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log('👁️ Observer detected section:', entry.target.id);
          setActiveTab(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    const sections = ['onboarding', 'brain', 'conductor', 'agents', 'workspace'];
    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) {
        // Make all sections visible by default
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  // Sticky tabs observer
  useEffect(() => {
    const heroObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsTabsSticky(!entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      heroObserver.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        heroObserver.unobserve(heroRef.current);
      }
    };
  }, []);

  const scrollToSection = (id: string) => {
    console.log('🔵 CLICKED TAB:', id);
    
    // Immediately set active tab
    setActiveTab(id);
    
    // Pause the observer
    isScrollingRef.current = true;
    
    // Ensure body can scroll
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
    
    // Find the element
    const element = document.getElementById(id);
    
    if (!element) {
      console.error('❌ ELEMENT NOT FOUND FOR ID:', id);
      isScrollingRef.current = false;
      return;
    }
    
    console.log('✅ FOUND ELEMENT:', element);
    console.log('📍 Element offset from top:', element.getBoundingClientRect().top);
    
    // Use scrollIntoView with block: 'start' to scroll element to top
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
    
    console.log('🚀 SCROLL INITIATED');
    
    // Re-enable observer after scroll completes
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    scrollTimeoutRef.current = setTimeout(() => {
      isScrollingRef.current = false;
      console.log('▶️ Observer re-enabled');
    }, 1500);
  };

  const tabs = [
    { id: 'onboarding', label: 'Self-Onboarding' },
    { id: 'brain', label: 'The Brain' },
    { id: 'conductor', label: 'The Conductor' },
    { id: 'agents', label: 'AI Agents' },
    { id: 'workspace', label: 'Workspace' },
  ];

  return (
    <div className="bg-white">
      <SEO 
        title="Product - Fermi Dev"
        description="Fermi learns how your business operates, builds your operational brain, and powers AI agents that execute with clarity and precision."
        keywords={["AI platform", "operational intelligence", "AI agents", "business automation", "workflow orchestration"]}
      />

      {/* SECTION 1 — HERO */}
      <section className="container-custom pt-[10px] pb-[75px] pr-[30px] pl-[30px] p-[30px]" ref={heroRef}>
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[640px]">
          {/* Left Column - Text */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-[64px] leading-tight text-[#1A1A1A]">
              Understand.<br />
              Coordinate.<br />
              Execute.
            </h1>
            <p className="text-[22px] text-[#6B6D71] leading-relaxed">
              Fermi learns how your business operates, builds your operational brain, and powers AI agents that execute with clarity and precision.
            </p>
          </motion.div>

          {/* Right Column - Visual Placeholder */}
          <motion.div 
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-full max-w-[500px] h-[400px] bg-[#F5F2ED] border border-gray-200 rounded-3xl flex items-center justify-center p-8 relative overflow-hidden">
              {/* Workflow Visualization */}
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Animated gradient background */}
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="absolute left-[45%] top-[45%] w-48 h-48 bg-gradient-to-br from-[#A78BFA]/20 to-[#87CEEB]/20 rounded-full blur-3xl"></div>
                  <div className="absolute right-[30%] top-[40%] w-32 h-32 bg-gradient-to-br from-[#FFB800]/15 to-[#FF9500]/15 rounded-full blur-2xl"></div>
                </motion.div>

                {/* SVG for curved connections */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 480 340" preserveAspectRatio="xMidYMid meet">
                  {/* Left inputs to Brain */}
                  <motion.path
                    d="M 60 40 L 85 40 Q 100 40 100 55 L 100 120 Q 100 135 115 135 L 160 135"
                    fill="none"
                    stroke="#87CEEB"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  />
                  <motion.path
                    d="M 60 85 L 85 85 Q 100 85 100 100 L 100 125 Q 100 135 115 135 L 160 135"
                    fill="none"
                    stroke="#87CEEB"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  />
                  <motion.path
                    d="M 60 170 L 115 170 Q 130 170 130 155 L 130 140 Q 130 135 145 135 L 160 135"
                    fill="none"
                    stroke="#87CEEB"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  />
                  <motion.path
                    d="M 60 215 L 85 215 Q 100 215 100 200 L 100 145 Q 100 135 115 135 L 160 135"
                    fill="none"
                    stroke="#87CEEB"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  />

                  {/* Brain to Coordinate */}
                  <motion.path
                    d="M 215 135 L 240 135 Q 255 135 255 150 L 255 180 Q 255 195 270 195 L 310 195"
                    fill="none"
                    stroke="#A78BFA"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                  />

                  {/* Brain to Execute */}
                  <motion.path
                    d="M 215 135 L 240 135 Q 255 135 255 120 L 255 90 Q 255 75 270 75 L 310 75"
                    fill="none"
                    stroke="#FFB800"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                  />

                  {/* Coordinate to outputs */}
                  <motion.path
                    d="M 360 195 L 380 195 Q 390 195 390 205 L 390 230"
                    fill="none"
                    stroke="#A78BFA"
                    strokeWidth="2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                  />
                  <motion.path
                    d="M 360 195 L 420 195"
                    fill="none"
                    stroke="#A78BFA"
                    strokeWidth="2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                  />

                  {/* Execute to outputs */}
                  <motion.path
                    d="M 360 75 L 380 75 Q 390 75 390 65 L 390 40"
                    fill="none"
                    stroke="#FFB800"
                    strokeWidth="2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                  />
                  <motion.path
                    d="M 360 75 L 420 75"
                    fill="none"
                    stroke="#FFB800"
                    strokeWidth="2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                  />

                  {/* Connection dots */}
                  <motion.circle cx="60" cy="40" r="3" fill="#87CEEB" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }} />
                  <motion.circle cx="60" cy="85" r="3" fill="#87CEEB" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3 }} />
                  <motion.circle cx="60" cy="170" r="3" fill="#87CEEB" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.4 }} />
                  <motion.circle cx="60" cy="215" r="3" fill="#87CEEB" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 }} />
                  <motion.circle cx="310" cy="195" r="3" fill="#A78BFA" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.9 }} />
                  <motion.circle cx="310" cy="75" r="3" fill="#FFB800" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.9 }} />
                  <motion.circle cx="390" cy="230" r="3" fill="#A78BFA" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.2 }} />
                  <motion.circle cx="420" cy="195" r="3" fill="#A78BFA" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.2 }} />
                  <motion.circle cx="390" cy="40" r="3" fill="#FFB800" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.2 }} />
                  <motion.circle cx="420" cy="75" r="3" fill="#FFB800" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.2 }} />
                  
                  {/* Animated particles flowing through paths */}
                  {/* Particle 1: Input to Brain */}
                  <motion.circle
                    cx="60"
                    cy="170"
                    r="3"
                    fill="#87CEEB"
                    initial={{ opacity: 0 }}
                    animate={{
                      cx: [60, 115, 130, 160],
                      cy: [170, 170, 155, 135],
                      opacity: [0, 1, 1, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 0.5,
                      delay: 1.5,
                      ease: "easeInOut"
                    }}
                  />

                  {/* Particle 2: Brain to Coordinate */}
                  <motion.circle
                    cx="215"
                    cy="135"
                    r="3"
                    fill="#A78BFA"
                    initial={{ opacity: 0 }}
                    animate={{
                      cx: [215, 240, 255, 270, 310],
                      cy: [135, 135, 150, 180, 195],
                      opacity: [0, 1, 1, 1, 0]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 0.5,
                      delay: 2.5,
                      ease: "easeInOut"
                    }}
                  />

                  {/* Particle 3: Brain to Execute */}
                  <motion.circle
                    cx="215"
                    cy="135"
                    r="3"
                    fill="#FFB800"
                    initial={{ opacity: 0 }}
                    animate={{
                      cx: [215, 240, 255, 270, 310],
                      cy: [135, 135, 120, 90, 75],
                      opacity: [0, 1, 1, 1, 0]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 0.5,
                      delay: 2.7,
                      ease: "easeInOut"
                    }}
                  />

                  {/* Particle 4: Coordinate to outputs */}
                  <motion.circle
                    cx="360"
                    cy="195"
                    r="2.5"
                    fill="#A78BFA"
                    initial={{ opacity: 0 }}
                    animate={{
                      cx: [360, 420],
                      cy: [195, 195],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      repeatDelay: 1,
                      delay: 3.5,
                      ease: "easeInOut"
                    }}
                  />

                  {/* Particle 5: Execute to outputs */}
                  <motion.circle
                    cx="360"
                    cy="75"
                    r="2.5"
                    fill="#FFB800"
                    initial={{ opacity: 0 }}
                    animate={{
                      cx: [360, 420],
                      cy: [75, 75],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      repeatDelay: 1,
                      delay: 3.7,
                      ease: "easeInOut"
                    }}
                  />
                </svg>

                {/* Left Input Icons */}
                <motion.div 
                  className="absolute left-2 top-6 cursor-pointer group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ scale: 1.1, x: 5 }}
                >
                  <div className="flex flex-col items-center gap-0.5">
                    <div className="w-7 h-7 rounded-lg bg-[#87CEEB]/20 flex items-center justify-center group-hover:bg-[#87CEEB]/40 transition-colors">
                      <Database className="w-4 h-4 text-[#1A1A1A]" />
                    </div>
                    <span className="text-[9px] text-[#6B6D71] font-medium">Data</span>
                  </div>
                </motion.div>

                <motion.div 
                  className="absolute left-2 top-[72px] cursor-pointer group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ scale: 1.1, x: 5 }}
                >
                  <div className="flex flex-col items-center gap-0.5">
                    <div className="w-7 h-7 rounded-lg bg-[#87CEEB]/20 flex items-center justify-center group-hover:bg-[#87CEEB]/40 transition-colors">
                      <Users className="w-4 h-4 text-[#1A1A1A]" />
                    </div>
                    <span className="text-[9px] text-[#6B6D71] font-medium">People</span>
                  </div>
                </motion.div>

                <motion.div 
                  className="absolute left-2 top-[152px] cursor-pointer group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ scale: 1.1, x: 5 }}
                >
                  <div className="flex flex-col items-center gap-0.5">
                    <div className="w-7 h-7 rounded-lg bg-[#87CEEB]/20 flex items-center justify-center group-hover:bg-[#87CEEB]/40 transition-colors">
                      <Code className="w-4 h-4 text-[#1A1A1A]" />
                    </div>
                    <span className="text-[9px] text-[#6B6D71] font-medium">Systems</span>
                  </div>
                </motion.div>

                <motion.div 
                  className="absolute left-2 top-[198px] cursor-pointer group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.1, x: 5 }}
                >
                  <div className="flex flex-col items-center gap-0.5">
                    <div className="w-7 h-7 rounded-lg bg-[#87CEEB]/20 flex items-center justify-center group-hover:bg-[#87CEEB]/40 transition-colors">
                      <Terminal className="w-4 h-4 text-[#1A1A1A]" />
                    </div>
                    <span className="text-[9px] text-[#6B6D71] font-medium">Process</span>
                  </div>
                </motion.div>

                {/* Center Brain Node */}
                <motion.div 
                  className="absolute left-[32%] top-[32%] cursor-pointer group"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                  }}
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <motion.div 
                    className="w-14 h-14 bg-[#A78BFA] rounded-2xl flex items-center justify-center border-2 border-[#A78BFA] relative z-10"
                    animate={{
                      boxShadow: [
                        '0 0 0 0 rgba(167, 139, 250, 0)',
                        '0 0 0 8px rgba(167, 139, 250, 0.2)',
                        '0 0 0 0 rgba(167, 139, 250, 0)',
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut"
                    }}
                  >
                    <Brain className="w-7 h-7 text-white" />
                  </motion.div>
                </motion.div>
                <motion.div 
                  className="absolute left-[46%] top-[37%] text-[11px] text-[#1A1A1A] whitespace-nowrap font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  Brain
                </motion.div>

                {/* Right Middle - Coordinate */}
                <motion.div 
                  className="absolute left-[63%] top-[52%] cursor-pointer group"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-[#A78BFA] rounded-xl flex items-center justify-center border-2 border-[#A78BFA] relative z-10"
                    animate={{
                      boxShadow: [
                        '0 0 0 0 rgba(167, 139, 250, 0)',
                        '0 0 0 6px rgba(167, 139, 250, 0.2)',
                        '0 0 0 0 rgba(167, 139, 250, 0)',
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut",
                      delay: 0.5
                    }}
                  >
                    <Workflow className="w-6 h-6 text-white" />
                  </motion.div>
                </motion.div>

                {/* Right Top - Execute */}
                <motion.div 
                  className="absolute left-[63%] top-[16%] cursor-pointer group"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-[#FFB800] rounded-xl flex items-center justify-center border-2 border-[#FFB800] relative z-10"
                    animate={{
                      boxShadow: [
                        '0 0 0 0 rgba(255, 184, 0, 0)',
                        '0 0 0 6px rgba(255, 184, 0, 0.2)',
                        '0 0 0 0 rgba(255, 184, 0, 0)',
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut",
                      delay: 1
                    }}
                  >
                    <Zap className="w-6 h-6 text-white" />
                  </motion.div>
                </motion.div>

                {/* Output nodes on the right */}
                <motion.div 
                  className="absolute right-6 top-[6%] cursor-pointer group"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.1, x: -5 }}
                  transition={{ delay: 1.2 }}
                >
                  <div className="flex flex-col items-center gap-0.5">
                    <div className="w-7 h-7 rounded-lg bg-[#FFB800]/20 flex items-center justify-center group-hover:bg-[#FFB800]/40 transition-colors">
                      <TrendingUp className="w-4 h-4 text-[#1A1A1A]" />
                    </div>
                    <span className="text-[9px] text-[#6B6D71] font-medium">Actions</span>
                  </div>
                </motion.div>

                <motion.div 
                  className="absolute right-6 top-[18%] cursor-pointer group"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.1, x: -5 }}
                  transition={{ delay: 1.3 }}
                >
                  <div className="flex flex-col items-center gap-0.5">
                    <div className="w-7 h-7 rounded-lg bg-[#FFB800]/20 flex items-center justify-center group-hover:bg-[#FFB800]/40 transition-colors">
                      <Shield className="w-4 h-4 text-[#1A1A1A]" />
                    </div>
                    <span className="text-[9px] text-[#6B6D71] font-medium">Tasks</span>
                  </div>
                </motion.div>

                <motion.div 
                  className="absolute right-6 top-[52%] cursor-pointer group"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.1, x: -5 }}
                  transition={{ delay: 1.4 }}
                >
                  <div className="flex flex-col items-center gap-0.5">
                    <div className="w-7 h-7 rounded-lg bg-[#A78BFA]/20 flex items-center justify-center group-hover:bg-[#A78BFA]/40 transition-colors">
                      <Eye className="w-4 h-4 text-[#1A1A1A]" />
                    </div>
                    <span className="text-[9px] text-[#6B6D71] font-medium">Insights</span>
                  </div>
                </motion.div>

                <motion.div 
                  className="absolute right-6 top-[64%] cursor-pointer group"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.1, x: -5 }}
                  transition={{ delay: 1.5 }}
                >
                  <div className="flex flex-col items-center gap-0.5">
                    <div className="w-7 h-7 rounded-lg bg-[#A78BFA]/20 flex items-center justify-center group-hover:bg-[#A78BFA]/40 transition-colors">
                      <Activity className="w-4 h-4 text-[#1A1A1A]" />
                    </div>
                    <span className="text-[9px] text-[#6B6D71] font-medium">Reports</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="bg-[#F5F2ED] py-24" data-scroll-section>
        <div className="container-custom p-[0px]">
          <motion.div 
            className="max-w-5xl mx-auto space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Optional Title/Description */}
            <div className="text-center space-y-4">
              <h2 className="text-[48px] text-[#1A1A1A]">See Fermi in Action</h2>
              <p className="text-[20px] text-[#6B6D71] leading-relaxed max-w-3xl mx-auto">
                Watch how Fermi transforms operational intelligence for modern businesses.
              </p>
            </div>

            {/* Video Container */}
            <div className="relative w-full bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-200" style={{ paddingBottom: '56.25%' }}>
              {/* 16:9 Aspect Ratio Container */}
              <div className="absolute inset-0 flex items-center justify-center bg-[#1A1A1A]">
                <video
                  className="w-full h-full object-contain"
                  controls
                  preload="metadata"
                  playsInline
                  onError={(e) => {
                    const target = e.target as HTMLVideoElement;
                    const error = target.error;
                    if (error) {
                      console.error('Video error code:', error.code);
                      console.error('Video error message:', error.message);
                      
                      // Error codes: 1=ABORTED, 2=NETWORK, 3=DECODE, 4=SRC_NOT_SUPPORTED
                      switch (error.code) {
                        case 1:
                          console.error('Video loading was aborted');
                          break;
                        case 2:
                          console.error('Network error - video file may not exist');
                          break;
                        case 3:
                          console.error('Video decoding failed - check format');
                          break;
                        case 4:
                          console.error('Video format not supported or file not found');
                          break;
                      }
                    }
                  }}
                  onLoadStart={() => console.log('Video loading started')}
                  onLoadedData={() => console.log('Video data loaded successfully')}
                >
                  <source src="/fermi-demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Tabs - Sticky Navigation */}
      <div 
        className={`sticky top-16 md:top-20 z-40 bg-white border-b border-gray-200 transition-shadow duration-300 ${isTabsSticky ? 'shadow-md' : ''}`} 
        ref={tabsRef}
      >
        <div className="container-custom">
          <nav className="flex gap-8 overflow-x-auto py-4 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  console.log('🟢 TAB BUTTON CLICKED:', tab.id);
                  scrollToSection(tab.id);
                }}
                className={`text-[20px] whitespace-nowrap transition-all duration-300 pb-2 relative px-6 cursor-pointer border-none bg-transparent outline-none ${ 
                  activeTab === tab.id
                    ? 'text-[#0A2F51]'
                    : 'text-[#6B6D71] hover:text-[#1A1A1A]'
                }`}
              >
                {tab.label}
                {/* Animated underline */}
                <div
                  className="absolute bottom-0 left-6 right-6 h-0.5 bg-[#0A2F51]"
                  style={{
                    transform: activeTab === tab.id ? 'scaleX(1)' : 'scaleX(0)',
                    opacity: activeTab === tab.id ? 1 : 0,
                    transition: 'transform 0.3s ease-out, opacity 0.3s ease-out'
                  }}
                />
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* SECTION 2 — SELF-ONBOARDING */}
      <section id="onboarding" className="container-custom py-24 scroll-mt-32 md:scroll-mt-40" data-scroll-section>
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[500px]">
          {/* Left Column */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[48px] text-[#1A1A1A] leading-tight">Self-Onboarding</h2>
            <p className="text-[18px] text-[#6B6D71] leading-relaxed">
              Fermi discovers your processes, systems, and people, automatically.
            </p>
            <ul className="space-y-4 pt-4">
              <li className="flex items-center gap-3 text-[18px] text-[#1A1A1A]">
                <CheckCircle2 className="w-5 h-5 text-[#4CD964] flex-shrink-0" />
                Fast AI onboarding for your entire business
              </li>
              <li className="flex items-center gap-3 text-[18px] text-[#1A1A1A]">
                <CheckCircle2 className="w-5 h-5 text-[#4CD964] flex-shrink-0" />
                No configuration, no consultancy, fully automated
              </li>
              <li className="flex items-center gap-3 text-[18px] text-[#1A1A1A]">
                <CheckCircle2 className="w-5 h-5 text-[#4CD964] flex-shrink-0" />
                Builds your intelligent business model in hours
              </li>
            </ul>
          </motion.div>

          {/* Right Column - Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-lg max-w-[440px] mx-auto h-[360px] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#87CEEB] rounded-xl flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-[18px] text-[#1A1A1A]">Onboarding Assistant</div>
                    <div className="text-[18px] text-[#6B6D71]">Step 2 of 4</div>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="bg-[#F5F2ED] rounded-xl p-4">
                    <p className="text-[18px] text-[#1A1A1A]">Scanning documentation...</p>
                  </div>
                  <div className="bg-[#F5F2ED] rounded-xl p-4">
                    <p className="text-[18px] text-[#1A1A1A]">Mapping workflows...</p>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between text-[18px] text-[#6B6D71] mb-2">
                  <span>Progress</span>
                  <span>50%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#4CD964] h-2 rounded-full" style={{ width: '50%' }}></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 — THE BRAIN */}
      <section id="brain" className="container-custom py-24 scroll-mt-32 md:scroll-mt-40" data-scroll-section>
        <div className="max-w-6xl mx-auto min-h-[650px] flex flex-col">
          {/* Header */}
          <motion.div 
            className="text-center mb-16 space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[48px] text-[#1A1A1A]">The Brain</h2>
            <p className="text-[20px] text-[#6B6D71] max-w-3xl mx-auto leading-relaxed">
              A real-time model of your business. Every system, workflow, and rule — understood as one.
            </p>
          </motion.div>

          {/* Visual Diagram */}
          <motion.div 
            className="mb-16 flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <NeuralNetwork />
          </motion.div>

          {/* 3 Feature Cards */}
          <motion.div 
            className="grid md:grid-cols-3 gap-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-white border border-gray-200 rounded-[20px] p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-[20px] text-[#1A1A1A] mb-3">Context</h3>
              <p className="text-[18px] text-[#6B6D71] leading-relaxed">
                A clear view of how work and people moves.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-[20px] p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-[20px] text-[#1A1A1A] mb-3">Predictability</h3>
              <p className="text-[18px] text-[#6B6D71] leading-relaxed">
                Know the impact before changes happen.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-[20px] p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-[20px] text-[#1A1A1A] mb-3">Policies</h3>
              <p className="text-[18px] text-[#6B6D71] leading-relaxed">
                Rules captured and applied intelligently.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 — THE CONDUCTOR */}
      <section id="conductor" className="bg-[#0D0D0D] text-white py-24 min-h-[600px] scroll-mt-32 md:scroll-mt-40" data-scroll-section>
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[48px] leading-tight">The Conductor</h2>
              <p className="text-[20px] text-white/80 leading-relaxed">
                Design change. Simulate safely. Deploy with confidence.
              </p>
              <ul className="space-y-4 pt-4">
                <li className="flex items-center gap-3 text-[18px]">
                  <CheckCircle2 className="w-5 h-5 text-[#FFB800] flex-shrink-0" />
                  Understanding the company's processes
                </li>
                <li className="flex items-center gap-3 text-[18px]">
                  <CheckCircle2 className="w-5 h-5 text-[#FFB800] flex-shrink-0" />
                  Human-in-the-loop approvals
                </li>
                <li className="flex items-center gap-3 text-[18px]">
                  <CheckCircle2 className="w-5 h-5 text-[#FFB800] flex-shrink-0" />
                  Secure + controlled change management
                </li>
                <li className="flex items-center gap-3 text-[18px]">
                  <CheckCircle2 className="w-5 h-5 text-[#FFB800] flex-shrink-0" />
                  Workflow-driven orchestration
                </li>
              </ul>
            </motion.div>

            {/* Right Side - UI Panel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-[#1A1A1A] border border-white/10 rounded-3xl p-10 max-w-[480px] mx-auto h-[360px] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-[18px] text-white">Workflow Approval</div>
                    <div className="px-3 py-1 bg-[#FFB800]/20 text-[#FFB800] rounded-full text-[18px]">
                      Pending
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <p className="text-[18px] text-white mb-2">Update CRM Integration</p>
                      <p className="text-[18px] text-white/60">Impact: 3 workflows</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3 pt-4 border-t border-white/10">
                  <button className="flex-1 bg-white/10 hover:bg-white/20 text-white rounded-lg py-3 text-[18px] transition-colors">
                    Simulate
                  </button>
                  <button className="flex-1 bg-[#FFB800] hover:bg-[#FFB800]/90 text-[#0D0D0D] rounded-lg py-3 text-[18px] transition-colors">
                    Approve
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — AI AGENTS */}
      <section id="agents" className="container-custom py-24 min-h-[600px] scroll-mt-32 md:scroll-mt-40" data-scroll-section>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Mini Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-lg max-w-[360px] h-[340px]">
              <div className="text-[18px] text-[#1A1A1A] mb-6">Active Agents</div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-[#F5F2ED] rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-[#4CD964]"></div>
                    <span className="text-[18px] text-[#1A1A1A]">Data Processing</span>
                  </div>
                  <span className="text-[18px] text-[#6B6D71]">Active</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-[#F5F2ED] rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-[#4CD964]"></div>
                    <span className="text-[18px] text-[#1A1A1A]">Workflow Sync</span>
                  </div>
                  <span className="text-[18px] text-[#6B6D71]">Active</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-[#F5F2ED] rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-[#FFB800]"></div>
                    <span className="text-[18px] text-[#1A1A1A]">Customer Support</span>
                  </div>
                  <span className="text-[18px] text-[#6B6D71]">Idle</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Text */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[48px] text-[#1A1A1A] leading-tight">AI Agents</h2>
            <p className="text-[20px] text-[#6B6D71] leading-relaxed">
              AI that works inside your systems. Reliable. Transparent. Controlled.
            </p>
            <ul className="space-y-4 pt-4">
              <li className="flex items-center gap-3 text-[18px] text-[#1A1A1A]">
                <CheckCircle2 className="w-5 h-5 text-[#FF9500] flex-shrink-0" />
                Human-in-the-loop
              </li>
              <li className="flex items-center gap-3 text-[18px] text-[#1A1A1A]">
                <CheckCircle2 className="w-5 h-5 text-[#FF9500] flex-shrink-0" />
                Clear reasoning
              </li>
              <li className="flex items-center gap-3 text-[18px] text-[#1A1A1A]">
                <CheckCircle2 className="w-5 h-5 text-[#FF9500] flex-shrink-0" />
                Full audit trail
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6 — UNIFIED WORKSPACE */}
      <section id="workspace" className="bg-[#F5F2ED] py-24 border-y border-gray-200 min-h-[500px] scroll-mt-32 md:scroll-mt-40" data-scroll-section>
        <div className="container-custom">
          <motion.div 
            className="max-w-4xl mx-auto text-center space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[48px] text-[#1A1A1A]">Unified Workspace</h2>
            <p className="text-[20px] text-[#6B6D71] leading-relaxed">
              A single place for your business. Connected. Organized. Effortless.
            </p>
            
            {/* 3-Column Feature Grid */}
            <div className="grid md:grid-cols-3 gap-10 pt-8">
              <div className="bg-white border border-gray-200 rounded-[20px] p-8 text-center">
                <div className="w-12 h-12 bg-[#87CEEB] rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-[20px] text-[#1A1A1A]">Systems aligned</h3>
              </div>

              <div className="bg-white border border-gray-200 rounded-[20px] p-8 text-center">
                <div className="w-12 h-12 bg-[#A78BFA] rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <Workflow className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-[20px] text-[#1A1A1A]">Processes unified</h3>
              </div>

              <div className="bg-white border border-gray-200 rounded-[20px] p-8 text-center">
                <div className="w-12 h-12 bg-[#4CD964] rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-[20px] text-[#1A1A1A]">Teams in sync</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 7 — ENTERPRISE READY */}
      <section className="container-custom py-24 min-h-[600px]" data-scroll-section>
        <motion.div 
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-[48px] text-[#1A1A1A] mb-4">Enterprise-Ready Platform</h2>
          </div>

          {/* 3-Column Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Column 1 - Security */}
            <div className="bg-white border border-gray-200 rounded-[20px] p-8">
              <div className="w-14 h-14 bg-[#FF9500] rounded-xl flex items-center justify-center mb-6">
                <Lock className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-[22px] text-[#1A1A1A] mb-6">Security</h3>
              <ul className="space-y-3">
                <li className="text-[18px] text-[#6B6D71]">Encryption end to end</li>
                <li className="text-[18px] text-[#6B6D71]">Role-based isolation</li>
                <li className="text-[18px] text-[#6B6D71]">SOC 2 compliant</li>
              </ul>
            </div>

            {/* Column 2 - Observability */}
            <div className="bg-white border border-gray-200 rounded-[20px] p-8">
              <div className="w-14 h-14 bg-[#A78BFA] rounded-xl flex items-center justify-center mb-6">
                <Activity className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-[22px] text-[#1A1A1A] mb-6">Observability</h3>
              <ul className="space-y-3">
                <li className="text-[18px] text-[#6B6D71]">Real-time logs</li>
                <li className="text-[18px] text-[#6B6D71]">System visibility</li>
                <li className="text-[18px] text-[#6B6D71]">Full traceability</li>
              </ul>
            </div>

            {/* Column 3 - Scalability */}
            <div className="bg-white border border-gray-200 rounded-[20px] p-8">
              <div className="w-14 h-14 bg-[#4CD964] rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-[22px] text-[#1A1A1A] mb-6">Scalability</h3>
              <ul className="space-y-3">
                <li className="text-[18px] text-[#6B6D71]">Built for growth</li>
                <li className="text-[18px] text-[#6B6D71]">Stable under load</li>
                <li className="text-[18px] text-[#6B6D71]">Designed for complex orgs</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}