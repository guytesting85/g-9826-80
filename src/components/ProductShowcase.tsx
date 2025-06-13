import React, { useRef, useState } from 'react';
import { Check, X, Maximize2, Minimize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { floatingVariants } from '../utils/animations';

const ProductShowcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.section 
          initial={{ opacity: 1, scale: 1 }}
          exit={{ 
            opacity: 0,
            scale: 0.95,
            transition: { 
              duration: 0.3,
              ease: "easeInOut"
            }
          }}
          className="relative py-16 overflow-hidden bg-gradient-to-br from-slate-50 via-purple-50/30 to-blue-50/30 dark:from-gray-900 dark:via-gray-800/30 dark:to-gray-900/30 transition-colors duration-300" 
          id="product"
          layout
        >
          <div className="container-section max-w-6xl mx-auto">
            <motion.div 
              ref={sectionRef}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <motion.h2 
                variants={itemVariants}
                className="text-4xl md:text-5xl font-semibold text-convrt-dark-blue dark:text-white mb-6 tracking-tight transition-colors duration-300"
              >
                The First AI Organic Outbound Platform
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className="text-xl text-gray-600 dark:text-gray-300 mb-0 max-w-2xl mx-auto leading-relaxed transition-colors duration-300"
              >
                Our AI platform tracks key touchpoints, discussions, and content across the buyer's journey, letting you engage, warm up, and build trust—before you reach out.
              </motion.p>
            </motion.div>
            
            {/* Clean Product UI Showcase */}
            <motion.div 
              ref={contentRef}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.div 
                variants={{...itemVariants, ...floatingVariants}}
                className={`relative bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-[20px] overflow-hidden border border-white/50 dark:border-gray-700/50 shadow-2xl shadow-purple-500/20 dark:shadow-purple-500/10 transition-colors duration-300 ${
                  isFullscreen ? 'fixed inset-4 z-50' : ''
                }`}
              >
                <div className="px-8 py-6 border-b border-gray-200/70 dark:border-gray-700/70 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm flex items-center justify-between transition-colors duration-300">
                  <div className="flex items-center space-x-2">
                    <button 
                      onClick={handleClose}
                      className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors cursor-pointer"
                    ></button>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <button 
                      onClick={toggleFullscreen}
                      className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors cursor-pointer flex items-center justify-center"
                    >
                      {isFullscreen ? (
                        <Minimize2 className="w-2 h-2 text-white" />
                      ) : (
                        <Maximize2 className="w-2 h-2 text-white" />
                      )}
                    </button>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">convrt.ai/dashboard</div>
                </div>
                
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 p-8 bg-gradient-to-br from-gray-50/50 to-purple-50/50 dark:from-gray-800/50 dark:to-gray-700/50 transition-colors duration-300 ${
                  isFullscreen ? 'h-[calc(100vh-200px)] overflow-y-auto' : ''
                }`}>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-2xl font-semibold text-convrt-dark-blue dark:text-white mb-4 transition-colors duration-300">
                      Intelligent AI Analysis
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-300">
                      Our AI analyzes your prospect's digital footprint, uncovering opportunities for meaningful connection. Build trust with personalized touchpoints that resonate with your buyers.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Automated social listening",
                        "Personalized touchpoint tracking",
                        "Engagement analytics",
                        "Conversation starters based on shared interests"
                      ].map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="w-5 h-5 text-[#6936F5] mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 dark:text-gray-300 transition-colors duration-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-[20px] border border-white/60 dark:border-gray-600/60 shadow-lg p-6 transition-colors duration-300">
                    <div className="flex items-center mb-4">
                      <div className="h-8 w-8 rounded-full bg-[#6936F5] flex items-center justify-center text-white mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9.5 2a4.61 4.61 0 0 1 2.44 6.47A4.25 4.25 0 0 1 15.45 12h.05c2.5.1 4.25 1 4.5 2.73V15a3 3 0 0 1-2.3 2.92l-2.53.42a3.52 3.52 0 0 0-3.77-1.65L10.5 15.5"></path>
                          <path d="M15 9.5a4.61 4.61 0 0 0-2.44-6.47A4.25 4.25 0 0 0 9.55 0H9.5c-2.5.1-4.25 1-4.5 2.73V3a3 3 0 0 0 2.3 2.92l2.53.42a3.52 3.52 0 0 0 3.77-1.65L14.5 3.5"></path>
                          <path d="M4 8h2.5a1.5 1.5 0 0 1 1.5 1.5V12"></path>
                          <path d="M4 16h2.5a1.5 1.5 0 0 0 1.5-1.5V12"></path>
                          <path d="M13 16a3 3 0 1 0 0-6"></path>
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-convrt-dark-blue">Insights Report</h3>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="p-4 bg-[#F9F6F3] rounded-lg border border-gray-100">
                        <p className="text-gray-700 text-sm leading-relaxed">
                          Based on social media activity, your prospect shows interest in sustainability initiatives and has recently shared content about AI implementation in their industry.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-gray-800 mb-2">Recommended Talking Points:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-[#6936F5] mr-2">•</span>
                            <span className="text-sm text-gray-700">Their recent post about renewable energy</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#6936F5] mr-2">•</span>
                            <span className="text-sm text-gray-700">Shared connections at Techstars</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#6936F5] mr-2">•</span>
                            <span className="text-sm text-gray-700">Recent company announcement about new market entry</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default ProductShowcase;
