
import React, { useRef, useState } from 'react';
import { Check, X, Maximize2, Minimize2, TrendingUp, Users, BarChart3, Activity } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { floatingVariants } from '../utils/animations';

const ProductShowcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeTab, setActiveTab] = useState('insights');

  const tabs = [
    { key: 'insights', label: 'AI Insights', url: 'convrt.ai/insights' },
    { key: 'analytics', label: 'Analytics', url: 'convrt.ai/analytics' }
  ];

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

  const getCurrentUrl = () => {
    const currentTab = tabs.find(tab => tab.key === activeTab);
    return currentTab ? currentTab.url : 'convrt.ai/dashboard';
  };

  const renderTabContent = () => {
    if (activeTab === 'analytics') {
      return (
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700 p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <div className="h-8 w-8 rounded-lg bg-[#6936F5] flex items-center justify-center text-white mr-3">
                <TrendingUp className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-semibold text-convrt-dark-blue dark:text-white">Growth Metrics</h3>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-[#F9F6F3] dark:bg-gray-700 rounded-xl border-2 border-gray-100 dark:border-gray-600">
                <div className="text-2xl font-bold text-convrt-purple">94%</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Engagement Rate</div>
              </div>
              <div className="p-4 bg-[#F9F6F3] dark:bg-gray-700 rounded-xl border-2 border-gray-100 dark:border-gray-600">
                <div className="text-2xl font-bold text-green-600">3.2x</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Response Improvement</div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700 p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <div className="h-8 w-8 rounded-lg bg-[#6936F5] flex items-center justify-center text-white mr-3">
                <BarChart3 className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-semibold text-convrt-dark-blue dark:text-white">Activity Overview</h3>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-3">Recent Metrics:</h4>
              <ul className="space-y-3">
                <li className="flex items-start p-2 bg-[#F9F6F3] dark:bg-gray-700 rounded-lg border border-gray-100 dark:border-gray-600">
                  <span className="text-[#6936F5] mr-2">•</span>
                  <span className="text-sm text-gray-700 dark:text-gray-300">256 prospects engaged this week</span>
                </li>
                <li className="flex items-start p-2 bg-[#F9F6F3] dark:bg-gray-700 rounded-lg border border-gray-100 dark:border-gray-600">
                  <span className="text-[#6936F5] mr-2">•</span>
                  <span className="text-sm text-gray-700 dark:text-gray-300">87% positive sentiment score</span>
                </li>
                <li className="flex items-start p-2 bg-[#F9F6F3] dark:bg-gray-700 rounded-lg border border-gray-100 dark:border-gray-600">
                  <span className="text-[#6936F5] mr-2">•</span>
                  <span className="text-sm text-gray-700 dark:text-gray-300">42 qualified meetings scheduled</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    }

    // Default insights content
    return (
      <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-[20px] border border-white/60 dark:border-gray-600/60 shadow-lg p-6 transition-colors duration-300">
        <div className="flex items-center mb-4">
          <div className="h-8 w-8 rounded-full bg-[#6936F5] flex items-center justify-center text-white mr-3">
            <Activity className="w-4 h-4" />
          </div>
          <h3 className="text-lg font-semibold text-convrt-dark-blue dark:text-white">Insights Report</h3>
        </div>
        
        <div className="space-y-4">
          <div className="p-4 bg-[#F9F6F3] dark:bg-gray-700 rounded-lg border border-gray-100 dark:border-gray-600">
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              Based on social media activity, your prospect shows interest in sustainability initiatives and has recently shared content about AI implementation in their industry.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">Recommended Talking Points:</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-[#6936F5] mr-2">•</span>
                <span className="text-sm text-gray-700 dark:text-gray-300">Their recent post about renewable energy</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#6936F5] mr-2">•</span>
                <span className="text-sm text-gray-700 dark:text-gray-300">Shared connections at Techstars</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#6936F5] mr-2">•</span>
                <span className="text-sm text-gray-700 dark:text-gray-300">Recent company announcement about new market entry</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
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
                <div className="px-8 py-6 border-b border-gray-200/70 dark:border-gray-700/70 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm transition-colors duration-300">
                  <div className="flex items-center justify-between mb-4">
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
                    <div className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">{getCurrentUrl()}</div>
                  </div>
                  
                  {/* Tabs */}
                  <div className="flex space-x-1">
                    {tabs.map((tab) => (
                      <button
                        key={tab.key}
                        onClick={() => setActiveTab(tab.key)}
                        className={`px-4 py-2 rounded-t-lg font-medium text-sm border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                          activeTab === tab.key 
                            ? 'text-convrt-purple bg-convrt-purple/10 border-convrt-purple' 
                            : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 border-transparent'
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
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
                  {renderTabContent()}
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
