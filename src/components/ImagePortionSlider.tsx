
import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Sparkles, Zap, Target, TrendingUp } from 'lucide-react';

const ImagePortionSlider = () => {
  const [isHovered, setIsHovered] = useState(false);
  const constraintsRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const clipPath = useTransform(springX, [-200, 200], ['inset(0 50% 0 0)', 'inset(0 0 0 50%)']);

  const features = [
    {
      icon: Sparkles,
      title: "AI-Powered Insights",
      description: "Discover hidden opportunities in your prospect's digital footprint"
    },
    {
      icon: Target,
      title: "Precision Targeting",
      description: "Connect with the right people at the perfect moment"
    },
    {
      icon: TrendingUp,
      title: "Higher Conversion",
      description: "Turn cold prospects into warm conversations effortlessly"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Automate your research and outreach in seconds, not hours"
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
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300 overflow-hidden">
      <div className="container-section max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Content Side */}
          <motion.div variants={containerVariants} className="space-y-8">
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-convrt-purple/10 text-convrt-purple mb-6">
                <Zap className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium tracking-wide">Why Choose Convrt.ai</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-convrt-dark-blue dark:text-white mb-6 tracking-tight transition-colors duration-300">
                The Future of <span className="text-convrt-purple">Intelligent</span> Outreach
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                Transform your sales process with AI that understands context, builds relationships, and drives results.
              </p>
            </motion.div>

            <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-convrt-purple/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-convrt-purple" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-convrt-dark-blue dark:text-white mb-1 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants}>
              <button className="button-primary">
                Start Your Free Trial
              </button>
            </motion.div>
          </motion.div>

          {/* Interactive Visual Side */}
          <motion.div 
            variants={itemVariants}
            className="relative"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <div 
              ref={constraintsRef}
              className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700"
            >
              {/* Before Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gray-300 dark:bg-gray-600 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">😴</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-300 mb-2">Before Convrt.ai</h3>
                  <p className="text-gray-500 dark:text-gray-400">Cold, generic outreach</p>
                </div>
              </div>

              {/* After Image */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-convrt-purple/20 to-convrt-purple-light/20 flex items-center justify-center"
                style={{ clipPath }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-convrt-purple mx-auto mb-4 flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-convrt-dark-blue dark:text-white mb-2">With Convrt.ai</h3>
                  <p className="text-convrt-purple font-medium">Personalized, intelligent outreach</p>
                </div>
              </motion.div>

              {/* Draggable Slider */}
              <motion.div
                drag="x"
                dragConstraints={constraintsRef}
                dragElastic={0.1}
                style={{ x: springX }}
                className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-grab active:cursor-grabbing"
                whileDrag={{ scale: 1.1 }}
              >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg border-2 border-convrt-purple flex items-center justify-center">
                  <div className="w-2 h-2 bg-convrt-purple rounded-full"></div>
                </div>
              </motion.div>

              {/* Instruction Text */}
              <motion.div 
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm text-gray-600 dark:text-gray-300 bg-white/90 dark:bg-gray-800/90 px-3 py-1 rounded-full backdrop-blur-sm"
                animate={{ opacity: isHovered ? 0 : 1 }}
                transition={{ duration: 0.3 }}
              >
                Drag to compare
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImagePortionSlider;
