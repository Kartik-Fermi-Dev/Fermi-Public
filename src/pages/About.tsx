import { Target, Heart, Zap, Users, Linkedin } from 'lucide-react';
import { Button } from '../components/ui/button';
import { SEO } from '../components/SEO';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Brain, Workflow } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { initSectionAnimations } from '../utils/smoothScroll';

type Page = 'home' | 'product' | 'brain' | 'blog' | 'about' | 'contact' | 'privacy' | 'terms' | 'careers';

interface AboutPageProps {
  onNavigate: (page: Page) => void;
}

const values = [
  {
    icon: Target,
    title: 'Clarity over complexity',
    description: 'We make things simple: not simpler than they should be, but as simple as they can be.',
    color: '#87CEEB',
  },
  {
    icon: Shield,
    title: 'Reliability above all',
    description: 'Operations demand trust. Everything we build is designed to be stable, auditable, and safe.',
    color: '#FFB800',
  },
  {
    icon: Users,
    title: 'Human-first engineering',
    description: 'AI should augment people, not replace their judgment or creativity.',
    color: '#A78BFA',
  },
  {
    icon: Target,
    title: 'Truth in every layer',
    description: 'Accurate data, transparent execution, visible workflows. Truth is the foundation of intelligent operations.',
    color: '#4CD964',
  },
  {
    icon: Zap,
    title: 'Bias for building',
    description: 'We ship, test, refine, and improve continuously.',
    color: '#FF9500',
  },
];

function Shield(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

const team = [
  {
    name: "Vaibhav Gupta",
    role: "Founder & CEO",
    bio: "AI research, MBA, Ex-Amazon, Ex-CTO. 0→1 builder across product, technology, and research.",
    image: "https://images.unsplash.com/photo-1652471943570-f3590a4e52ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMGhlYWRzaG90JTIwbWFufGVufDF8fHx8MTc2Mzk2NzIyOHww&ixlib=rb-4.1.0&q=80&w=1080",
    linkedin: "https://www.linkedin.com/in/vaibgupta/",
    color: '#87CEEB',
  },
  {
    name: "Saket Anand",
    role: "Head of Technology",
    bio: "Scaling systems and startups.",
    image: "https://images.unsplash.com/photo-1737574821698-862e77f044c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdCUyMG9mZmljZXxlbnwxfHx8fDE3NjM5NjcyMjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    linkedin: "https://www.linkedin.com/in/saketanand/",
    color: '#FFB800',
  },
  {
    name: "Prerna Bajaj",
    role: "Head of Marketing and Growth",
    bio: "Marketing Leader, MBA, Ex-Sprinklr. Experience in Outreach & Global marketing.",
    image: "https://images.unsplash.com/photo-1758518729459-235dcaadc611?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc3dvbWFuJTIwaGVhZHNob3R8ZW58MXx8fHwxNzYzOTY3MjI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    linkedin: "https://www.linkedin.com/in/prernabajaj08/",
    color: '#A78BFA',
  },
  {
    name: "Sanskriti Parashar",
    role: "Product Designer",
    bio: "Turning ideas into intuitive products for enterprises.",
    image: "https://images.unsplash.com/photo-1762522921456-cdfe882d36c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0JTIwb2ZmaWNlfGVufDF8fHx8MTc2Mzk2NzIyOXww&ixlib=rb-4.1.0&q=80&w=1080",
    linkedin: "https://www.linkedin.com/in/sansparashar/",
    color: '#4CD964',
  },
  {
    name: "Piyush Lavaniya",
    role: "AI & Data Engineer",
    bio: "Hands-on AI model builder.",
    image: "https://images.unsplash.com/photo-1758639842445-b58f639119d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc2MzkxODY1MXww&ixlib=rb-4.1.0&q=80&w=1080",
    linkedin: "https://www.linkedin.com/in/piyushlavaniya/",
    color: '#FF9500',
  },
  {
    name: "Prabal Pathak",
    role: "Software Developer",
    bio: "Multi-year backend/SRE; building reliable backend & event pipelines.",
    image: "https://images.unsplash.com/photo-1543132220-7bc04a0e790a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGV4ZWN1dGl2ZSUyMHBvcnRyYWl0fGVufDF8fHx8MTc2Mzg4NTAxNXww&ixlib=rb-4.1.0&q=80&w=1080",
    linkedin: "https://www.linkedin.com/in/prabal01pathak/",
    color: '#87CEEB',
  },
  {
    name: "Abhishek Sharma",
    role: "Software Developer",
    bio: "Builder across full-stack and data-driven systems; bridging product, technology, and intelligent automation.",
    image: "https://images.unsplash.com/photo-1618593706014-06782cd3bb3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwcHJvZmVzc2lvbmFsJTIwaGVhZHNob3R8ZW58MXx8fHwxNzYzODkyODU5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    linkedin: "https://www.linkedin.com/in/abhishek-sharma-31b04a213/",
    color: '#FFB800',
  },
  {
    name: "Sagar Patel",
    role: "Software Developer",
    bio: "Seasoned frontend; deploying adaptable & aspiration UI.",
    image: "https://images.unsplash.com/photo-1573497620166-aef748c8c792?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BlciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2Mzk2NzIzMHww&ixlib=rb-4.1.0&q=80&w=1080",
    linkedin: "https://www.linkedin.com/in/sagar-patel-60739a203/",
    color: '#A78BFA',
  },
  {
    name: "Kartik Bhatnagar",
    role: "Software Developer",
    bio: "Youngest member and full-stack developer.",
    image: "https://images.unsplash.com/photo-1610458069051-90942d9a4c69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGVuZ2luZWVyJTIwaGVhZHNob3R8ZW58MXx8fHwxNzYzOTY3MjMxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    linkedin: "https://www.linkedin.com/in/kartika-bhatnagar/",
    color: '#4CD964',
  },
];

export default function AboutPage({ onNavigate }: AboutPageProps) {
  const isScrolling = useRef(false);

  useEffect(() => {
    // Smooth scroll to top on page load with Apple-style animation
    const scrollToTop = () => {
      // First, ensure we have a scroll position to animate from
      // Scroll down slightly to create the animation effect
      window.scrollTo(0, 300);
      
      // Use a short delay to ensure the scroll position is set
      requestAnimationFrame(() => {
        const startPosition = window.pageYOffset;
        const duration = 900; // 900ms for premium, guided animation
        const startTime = performance.now();

        // Lock scroll during animation
        isScrolling.current = true;
        document.body.style.overflow = 'hidden';

        // Premium cubic-bezier easing (0.22, 1, 0.36, 1)
        const cubicBezier = (t: number): number => {
          const p0 = 0;
          const p1 = 0.22;
          const p2 = 0.36;
          const p3 = 1;
          
          // Cubic bezier calculation
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
            // Animation complete - hold position for 300ms before allowing manual scroll
            setTimeout(() => {
              isScrolling.current = false;
              document.body.style.overflow = '';
            }, 300);
          }
        };

        requestAnimationFrame(animateScroll);
      });
    };

    // Trigger scroll animation
    scrollToTop();
  }, []);

  useEffect(() => {
    // Initialize section animations
    initSectionAnimations();
  }, []);

  return (
    <div className="bg-white">
      <SEO 
        title="About Us - The Fermi Dev Team"
        description="We are building the OS for enterprise AI. Meet the team behind the unified operational brain."
        keywords={["about fermi", "AI team", "enterprise software", "company values"]}
      />
      {/* Hero */}
      <section className="container-custom pt-12 md:pt-20 pb-16">
        <motion.div 
          className="max-w-5xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block bg-[#FFB800]/10 border border-[#FFB800] px-4 py-2 rounded-full text-xs mb-8 uppercase tracking-wider">
            <span className="text-[#1A1A1A]">About Fermi</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl mb-8 tracking-tight text-[#1A1A1A] leading-tight">
            The new foundation for<br />
            intelligent operations
          </h1>
          <p className="text-xl md:text-2xl text-[#6B6D71] leading-relaxed max-w-3xl">
            Every company runs on a complex rhythm: tools talking to each other, people coordinating decisions, and workflows moving across teams.<br/>
            As organizations grow, that rhythm becomes harder to see and even harder to maintain.
          </p>
        </motion.div>
      </section>

      {/* Introduction */}
      <section className="container-custom py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-2xl md:text-3xl text-[#1A1A1A] mb-8 leading-relaxed">
              Fermi is here to bring clarity back.
            </p>
            <p className="text-lg text-[#6B6D71] leading-relaxed mb-6">
              We're building an operational brain: a system that understands how your business works, orchestrates workflows end-to-end, and enables AI agents to execute tasks with accuracy, context, and control.
            </p>
            <p className="text-lg text-[#1A1A1A] leading-relaxed">
              Operations shouldn't slow a company down.<br/>
              They should power it forward.
            </p>
          </motion.div>
          
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-[#C7E0F4]/20 to-[#D4C7E8]/20 rounded-lg p-10 border border-gray-200">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Unified Model', color: '#87CEEB', icon: Brain },
                  { label: 'Safe Orchestration', color: '#A78BFA', icon: Workflow },
                  { label: 'AI Agents', color: '#4CD964', icon: Users },
                  { label: 'Real-time Intelligence', color: '#FFB800', icon: Zap }
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    className="bg-white rounded-lg p-6 text-center shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    whileHover={{ y: -4 }}
                  >
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3"
                      style={{ backgroundColor: item.color }}
                    >
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-sm text-[#1A1A1A]">{item.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-200"></div>

      {/* Mission */}
      <section className="bg-[#F5F2ED] py-20 border-y border-gray-200">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-4xl mb-12">
              <h2 className="text-4xl md:text-6xl mb-8 tracking-tight text-[#1A1A1A]">
                Our mission
              </h2>
              <p className="text-xl text-[#1A1A1A]">
                To give every business a unified understanding of how it operates and the ability to execute work intelligently, safely, and automatically.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div className="space-y-6 text-lg text-[#6B6D71] leading-relaxed">
                <div className="bg-white border border-gray-200 rounded-lg p-8">
                  <p className="text-[#1A1A1A] mb-6">We believe:</p>
                  <div className="space-y-4 pl-6 border-l-4 border-[#FFB800]">
                    <p className="text-[#1A1A1A]">Clarity creates speed</p>
                    <p className="text-[#1A1A1A]">Consistency creates reliability</p>
                    <p className="text-[#1A1A1A]">Intelligence creates leverage</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-8 flex items-center justify-center">
                <p className="text-2xl text-[#1A1A1A] text-center">
                  Our goal is simple:<br/>
                  <span className="text-[#FFB800]">Make operations effortless and intelligent.</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-200"></div>

      {/* Why Fermi */}
      <section className="container-custom py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl mb-8 tracking-tight text-[#1A1A1A]">
              Why Fermi?
            </h2>
            <p className="text-xl text-[#1A1A1A] mb-8">
              Modern companies don't suffer from lack of tools. They suffer from lack of connection.
            </p>
            
            <div className="grid grid-cols-1 gap-4">
              {[
                'Work happens across 20+ systems',
                'Processes change constantly',
                'Teams rely on tribal knowledge',
                'Decisions slow down due to complexity'
              ].map((item, index) => (
                <motion.div 
                  key={item}
                  className="bg-[#F5F2ED] border border-gray-200 rounded-lg p-5 flex items-start gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ x: 4 }}
                >
                  <div className="w-2 h-2 rounded-full bg-[#FF9500] mt-2 flex-shrink-0" />
                  <p className="text-[#6B6D71]">{item}</p>
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
            <div className="space-y-6 sticky top-24">
              <p className="text-xl text-[#1A1A1A] mb-6">Fermi solves this by creating:</p>
              
              <div className="bg-white border border-gray-200 rounded-lg p-8">
                <h3 className="text-xl text-[#1A1A1A] mb-3">A shared operational truth</h3>
                <p className="text-[#6B6D71] text-[16px]">One model that represents systems, processes, rules, and data in real time.</p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-8">
                <h3 className="text-xl text-[#1A1A1A] mb-3">Safe orchestration</h3>
                <p className="text-[#6B6D71] text-[16px]">Workflows that simulate before launching, so nothing breaks.</p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-8">
                <h3 className="text-xl text-[#1A1A1A] mb-3">Intelligent execution</h3>
                <p className="text-[#6B6D71] text-[16px]">AI agents that can act inside your systems: with oversight, reliability, and full context.</p>
              </div>

              <p className="text-lg text-[#1A1A1A] pt-4">
                Fermi doesn't replace humans. It removes the friction around their work.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-200"></div>

      {/* Our Story */}
      <section className="bg-[#F5F2ED] py-20 border-y border-gray-200">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-4xl mb-12">
              <h2 className="text-4xl md:text-6xl mb-8 tracking-tight text-[#1A1A1A]">
                Our story
              </h2>
              <p className="text-xl text-[#1A1A1A]">
                Fermi began with a simple observation: Companies aren't failing because they lack automation — they're failing because they lack understanding.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6 text-lg text-[#6B6D71] leading-relaxed">
                <p>
                  Our founders had spent years building and scaling complex systems across engineering, infrastructure, research, and product. They saw the same pattern everywhere:
                </p>

                <div className="grid gap-4">
                  {[
                    'Teams drowning in coordination',
                    'Decisions stuck in communication loops',
                    'Work reliant on a few people who "know the system"',
                    'Tools multiplying but clarity disappearing'
                  ].map((item, index) => (
                    <div key={item} className="flex items-start gap-3 bg-white border border-gray-200 rounded-lg p-4">
                      <div className="w-2 h-2 rounded-full bg-[#FFB800] mt-2 flex-shrink-0" />
                      <p className="text-[#6B6D71]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-center space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-8">
                  <p className="text-xl text-[#1A1A1A]">
                    They realized the real challenge wasn't task automation. It was operational intelligence.
                  </p>
                </div>

                <div className="bg-[#FFB800]/10 border-2 border-[#FFB800] rounded-lg p-8 text-center">
                  <p className="text-2xl text-[#1A1A1A]">
                    Fermi was born to solve that.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="container-custom py-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-4xl mb-12">
            <h2 className="text-4xl md:text-6xl mb-6 tracking-tight text-[#1A1A1A]">
              Our values
            </h2>
            <p className="text-lg text-[#6B6D71]">
              The principles that guide everything we build.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div 
                key={value.title} 
                className="bg-white border border-gray-200 rounded-lg p-8 transition-colors"
                style={{ '--hover-color': value.color } as any}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ borderColor: value.color, y: -4 }}
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6" style={{ backgroundColor: value.color }}>
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl text-[#1A1A1A] mb-3">{value.title}</h3>
                <p className="text-[#6B6D71] leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-200"></div>

      {/* The future we're building */}
      <section className="container-custom py-[40px] px-[30px]">
        <motion.div 
          className="max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl mb-6 tracking-tight text-[#1A1A1A]">
            The future we're building
          </h2>
          <p className="text-xl text-[#1A1A1A] mb-4 font-bold font-[Test_The_Future] text-[24px]">
            An intelligent operating system for enterprise.
          </p>
          <p className="text-xl text-[#1A1A1A] mb-6">
            A world where companies:
          </p>
          
          <div className="space-y-2 mb-8">
            {[
              'See their operations clearly',
              'Automate with confidence',
              'Scale without chaos',
              'Move faster, safer',
              'Let people do meaningful work'
            ].map((item, index) => (
              <motion.div 
                key={item}
                className="bg-white border border-gray-200 rounded-lg p-4 flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="w-6 h-6 rounded-full bg-[#4CD964] flex items-center justify-center flex-shrink-0 text-white text-sm">
                  {index + 1}
                </div>
                <p className="text-[#1A1A1A]">{item}</p>
              </motion.div>
            ))}
          </div>

          <div className="space-y-3">
            <p className="text-xl text-[#1A1A1A]">
              Fermi is the first layer of that future: a foundation that grows and adapts with every business.
            </p>
            <p className="text-2xl text-[#1A1A1A]">
              We're just getting started.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-200"></div>

      {/* Team */}
      <section className="bg-[#F5F2ED] py-20 border-y border-gray-200">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-4xl mb-12">
              <h2 className="text-4xl md:text-6xl mb-8 tracking-tight text-[#1A1A1A]">
                The team behind Fermi
              </h2>
              <p className="text-lg text-[#6B6D71] leading-relaxed mb-8">
                We're a group of engineers, designers, operators, and builders who've scaled systems, built enterprise products, and lived the pain of operational complexity firsthand.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <motion.div 
                  key={member.name} 
                  className="bg-white border border-gray-200 rounded-lg p-6 space-y-4 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ borderColor: member.color, y: -4 }}
                >
                  <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ backgroundColor: member.color }}>
                    <span className="text-white text-xl">
                      {member.name.split(' ').map((n) => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg text-[#1A1A1A]">{member.name}</h3>
                    <p className="text-sm" style={{ color: member.color }}>{member.role}</p>
                  </div>
                  <p className="text-sm text-[#6B6D71] leading-relaxed">{member.bio}</p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-[#6B6D71] hover:text-[#1A1A1A] transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>Connect on LinkedIn</span>
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-200"></div>

      {/* Careers CTA */}
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
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl mb-6 tracking-tight text-white">
              Join us
            </h2>
            <p className="text-lg text-[#C7E0F4] mb-10 max-w-4xl mx-auto">
              We're looking for exceptional people who want to help shape the future of enterprise operations.<br/>
              If you're passionate about AI, systems thinking, and solving hard problems, we'd love to hear from you.
            </p>
            <Button
              className="bg-[#FFB800] hover:bg-[#FF9500] text-[#1A1A1A] px-10 rounded-md"
              size="lg"
              onClick={() => onNavigate('careers')}
            >
              View open positions
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}