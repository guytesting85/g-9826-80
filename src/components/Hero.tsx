
import React, { useRef, useState } from 'react';
import AnimatedBackground from './AnimatedBackground';
import { ArrowRight, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import PlatformDemo from './hero/PlatformDemo';

const Hero = () => {
  const demoRef = useRef<HTMLDivElement>(null);
  const [showBadge, setShowBadge] = useState(true);
  const [showDemo, setShowDemo] = useState(true);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="relative min-h-screen pt-20 pb-32 overflow-hidden bg-[#F9F6F3]">
      <AnimatedBackground />
      
      <div className="container-section relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-6xl mx-auto text-center"
        >
          {showBadge && (
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center px-4 py-2 rounded-full bg-convrt-purple/10 text-convrt-purple mb-6 relative"
            >
              <Zap className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium font-inter tracking-wide">The First AI Organic Outbound Platform</span>
              <button
                onClick={() => setShowBadge(false)}
                className="ml-3 w-4 h-4 rounded-full bg-red-500 hover:bg-red-600 transition-colors flex items-center justify-center text-white text-xs"
              >
                ×
              </button>
            </motion.div>
          )}
          
          <motion.h1 
            variants={itemVariants}
            className="font-inter font-bold text-4xl md:text-5xl lg:text-7xl tracking-tight max-w-4xl mx-auto mb-6 text-convrt-dark-blue leading-[1.1]"
          >
            From <span className="text-[#EA384C] font-extrabold">Ignored</span> to <span className="text-[#6936F5] font-extrabold">Influential</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="font-inter text-xl text-convrt-dark-blue/80 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            AI that makes buyers trust you, so you win more deals
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-20"
          >
            <a href="#cta" className="button-primary flex items-center group font-inter font-medium">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#how-it-works" className="button-outline font-inter">
              See How It Works
            </a>
          </motion.div>
          
          {/* Modern Platform Showcase - Only render if showDemo is true */}
          {showDemo && (
            <motion.div 
              ref={demoRef}
              variants={itemVariants}
              className="mb-8 transform scale-105"
            >
              <PlatformDemo onClose={() => setShowDemo(false)} />
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
