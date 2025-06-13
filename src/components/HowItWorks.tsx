
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Search, Target, Zap } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "AI Discovery",
      description: "Our AI analyzes your prospect's digital footprint across platforms to identify key interests, recent activities, and engagement patterns.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Target,
      title: "Smart Targeting",
      description: "We identify the best touchpoints and conversation starters based on shared connections, interests, and recent activities.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Zap,
      title: "Personalized Outreach",
      description: "Execute warm, personalized outreach that feels natural and builds genuine relationships with your prospects.",
      color: "from-green-500 to-green-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-purple-50/30 to-blue-50/30 dark:from-gray-900 dark:via-gray-800/30 dark:to-gray-900/30 transition-colors duration-300" id="how-it-works">
      <div className="container-section max-w-6xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 rounded-full bg-convrt-purple/10 text-convrt-purple mb-6"
          >
            <Zap className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium tracking-wide">How It Works</span>
          </motion.div>
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-convrt-dark-blue dark:text-white mb-6 tracking-tight transition-colors duration-300"
          >
            Transform Cold Outreach into <span className="text-convrt-purple">Warm Conversations</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed transition-colors duration-300"
          >
            Our AI-powered platform analyzes, identifies, and personalizes your outreach to build genuine relationships before you even reach out.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/60 dark:border-gray-700/60 h-full">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-convrt-dark-blue dark:text-white mb-4 transition-colors duration-300">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 transition-colors duration-300">
                  {step.description}
                </p>
                
                <div className="flex items-center text-convrt-purple font-medium group-hover:translate-x-2 transition-transform duration-300">
                  <span className="mr-2">Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-convrt-purple/40" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
