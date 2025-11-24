import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { ArrowRight, MapPin, Briefcase, Clock } from 'lucide-react';
import { useEffect } from 'react';

type Page = 'home' | 'product' | 'brain' | 'blog' | 'about' | 'contact' | 'privacy' | 'terms' | 'careers';

interface CareersPageProps {
  onNavigate: (page: Page) => void;
}

const positions = [
  {
    title: 'Senior Full-Stack Engineer',
    department: 'Engineering',
    location: 'Remote (US)',
    type: 'Full-time',
    description: 'Build and scale our AI call analytics platform. Work with React, Node.js, and cutting-edge AI technologies.'
  },
  {
    title: 'Machine Learning Engineer',
    department: 'AI Research',
    location: 'San Francisco, CA / Remote',
    type: 'Full-time',
    description: 'Develop and optimize our AI models for call transcription, sentiment analysis, and operational intelligence.'
  },
  {
    title: 'Product Designer',
    department: 'Design',
    location: 'Remote (US)',
    type: 'Full-time',
    description: 'Shape the future of our product experience. Create intuitive interfaces for complex data visualization and analytics.'
  },
  {
    title: 'Customer Success Manager',
    department: 'Customer Success',
    location: 'New York, NY / Remote',
    type: 'Full-time',
    description: 'Help our customers succeed with Fermi Dev. Build relationships and drive adoption of our AI analytics platform.'
  },
  {
    title: 'Developer Advocate',
    department: 'Developer Relations',
    location: 'Remote (Global)',
    type: 'Full-time',
    description: 'Be the bridge between our engineering team and developer community. Create content, demos, and technical resources.'
  },
  {
    title: 'Sales Development Representative',
    department: 'Sales',
    location: 'Remote (US)',
    type: 'Full-time',
    description: 'Drive growth by identifying and engaging potential customers. Be part of a fast-growing sales team.'
  }
];

const values = [
  {
    title: 'Innovation First',
    description: 'We push boundaries and embrace cutting-edge technology to solve hard problems.',
    color: '#FFB800'
  },
  {
    title: 'Customer Obsessed',
    description: 'Our customers\' success drives everything we do. We listen, learn, and iterate.',
    color: '#FF9500'
  },
  {
    title: 'Radical Transparency',
    description: 'We communicate openly, share context freely, and build trust through honesty.',
    color: '#87CEEB'
  },
  {
    title: 'Ownership Mindset',
    description: 'We take responsibility for our work and empower each other to make decisions.',
    color: '#A78BFA'
  }
];

const benefits = [
  'Competitive salary and equity',
  'Comprehensive health, dental, and vision insurance',
  'Flexible remote work policy',
  'Unlimited PTO',
  'Learning and development budget',
  'Home office stipend',
  'Company retreats and team events',
  '401(k) matching'
];

export default function CareersPage({ onNavigate }: CareersPageProps) {
  return (
    <>
      <Helmet>
        <title>Careers | Fermi Dev - Join Our Team</title>
        <meta name="description" content="Join Fermi Development, Inc. and help build the future of AI call analytics. Explore open positions and learn about our culture." />
      </Helmet>

      <div className="bg-white">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-[#FAFAFA]">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-block mb-6 px-4 py-2 bg-[#FFB800]/10 rounded-full"
              >
                <span className="text-[#FFB800] font-medium">We're Hiring</span>
              </motion.div>
              <h1 className="mb-6">Build the Future of AI Analytics</h1>
              <p className="text-[#6B6D71] mb-8">
                Join a team of passionate builders creating the next generation of operational intelligence. We're looking for talented individuals who want to make an impact.
              </p>
              <motion.button
                onClick={() => {
                  document.getElementById('open-positions')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#1A1A1A] text-white rounded-lg hover:bg-[#FFB800] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Open Positions
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="mb-4">Our Values</h2>
              <p className="text-[#6B6D71] max-w-2xl mx-auto">
                These principles guide how we work, make decisions, and build our company culture.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-white border border-gray-200 rounded-2xl hover:shadow-lg transition-shadow"
                >
                  <div
                    className="w-12 h-12 rounded-full mb-4 flex items-center justify-center"
                    style={{ backgroundColor: `${value.color}20` }}
                  >
                    <div
                      className="w-6 h-6 rounded-full"
                      style={{ backgroundColor: value.color }}
                    />
                  </div>
                  <h3 className="mb-3">{value.title}</h3>
                  <p className="text-[#6B6D71]">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-[#FAFAFA]">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="mb-4">Benefits & Perks</h2>
              <p className="text-[#6B6D71] max-w-2xl mx-auto">
                We invest in our team's success and well-being with comprehensive benefits and perks.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#4CD964] flex-shrink-0" />
                    <span className="text-[#1A1A1A]">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section id="open-positions" className="py-20">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="mb-4">Open Positions</h2>
              <p className="text-[#6B6D71] max-w-2xl mx-auto">
                Explore opportunities to join our team. Can't find the right role? Send us your resume anyway.
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto space-y-6">
              {positions.map((position, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-white border border-gray-200 rounded-2xl hover:shadow-lg transition-all group"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="mb-2 group-hover:text-[#FFB800] transition-colors">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 mb-3">
                        <div className="flex items-center gap-2 text-[#6B6D71]">
                          <Briefcase className="w-4 h-4" />
                          <span className="text-sm">{position.department}</span>
                        </div>
                        <div className="flex items-center gap-2 text-[#6B6D71]">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{position.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-[#6B6D71]">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm">{position.type}</span>
                        </div>
                      </div>
                      <p className="text-[#6B6D71]">
                        {position.description}
                      </p>
                    </div>
                    <motion.button
                      onClick={() => onNavigate('contact')}
                      className="px-6 py-3 bg-[#1A1A1A] text-white rounded-lg hover:bg-[#FFB800] transition-colors inline-flex items-center gap-2 whitespace-nowrap"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* General Application */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 p-8 bg-[#FFB800]/5 border border-[#FFB800]/20 rounded-2xl text-center"
            >
              <h3 className="mb-3">Don't see the right role?</h3>
              <p className="text-[#6B6D71] mb-6 max-w-2xl mx-auto">
                We're always looking for exceptional talent. Send us your resume and tell us what you're passionate about.
              </p>
              <motion.button
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 bg-[#1A1A1A] text-white rounded-lg hover:bg-[#FFB800] transition-colors inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send General Application
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#1A1A1A] text-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="mb-4 text-white">Ready to Make an Impact?</h2>
              <p className="text-gray-300 mb-8">
                Join us in building the future of AI-powered operational intelligence. Your work will directly impact how businesses understand and optimize their operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  onClick={() => {
                    document.getElementById('open-positions')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-8 py-4 bg-[#FFB800] text-[#1A1A1A] rounded-lg hover:bg-[#FF9500] transition-colors inline-flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Open Roles
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  onClick={() => onNavigate('about')}
                  className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-[#1A1A1A] transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn About Us
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}