
import React, { useRef, useState } from 'react';
import AnimatedBackground from './AnimatedBackground';
import { ArrowRight, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import PlatformDemo from './hero/PlatformDemo';
import RotatingText from './hero/RotatingText';
import { containerVariants, itemVariants } from '../utils/animations';

const Hero = () => {
  const demoRef = useRef<HTMLDivElement>(null);
  const [showDemo, setShowDemo] = useState(true);

  const jobTitles = [
    'Software Engineer',
    'Backend Developer', 
    'Tech Enthusiast',
    'Full-Stack Developer',
    'Problem Solver'
  ];

  return (
    <section className="relative min-h-0 pt-20 pb-10 overflow-hidden bg-gradient-to-br from-slate-50 via-purple-50/40 to-blue-50/40 dark:from-gray-900 dark:via-gray-800/40 dark:to-gray-900/40">
      <AnimatedBackground />
      
      <div className="container-section relative z-10">
        <motion.div initial="hidden" animate="visible" variants={containerVariants} className="max-w-6xl mx-auto text-center">
          <motion.div variants={itemVariants} className="inline-flex items-center px-4 py-2 rounded-full bg-convrt-purple/10 dark:bg-convrt-purple/20 text-convrt-purple mb-6">
            <Zap className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium font-inter tracking-wide">Where my code comes to life</span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="font-inter font-bold text-4xl md:text-5xl lg:text-7xl tracking-tight max-w-4xl mx-auto mb-6 text-convrt-dark-blue dark:text-white leading-[1.1]">
            From <span className="text-[#EA384C] font-extrabold">@lifeispranav</span> to <span className="text-[#6936F5] font-extrabold">.me</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="font-inter text-xl text-convrt-dark-blue/80 dark:text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            <span className="inline-block min-w-[200px] text-right">
              <RotatingText texts={jobTitles} interval={2500} className="text-convrt-purple font-semibold" />
            </span>
            <span className="whitespace-nowrap"> | Async mind. Strategic build.</span>
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
            <a href="#cta" className="button-primary flex items-center group font-inter font-medium">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#how-it-works" className="button-outline font-inter">
              See My Works
            </a>
          </motion.div>
          
          <AnimatePresence mode="wait">
            {showDemo && (
              <motion.div 
                ref={demoRef} 
                variants={itemVariants} 
                initial={{ opacity: 1, scale: 1, height: "auto" }} 
                exit={{ opacity: 0, scale: 0.95, height: 0, marginTop: 0, transition: { duration: 0.4, ease: "easeInOut" } }} 
                className="mt-12" 
                layout
              >
                <PlatformDemo onClose={() => setShowDemo(false)} onCloseBadge={() => {}} showBadge={true} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
