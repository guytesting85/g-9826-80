
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Heart, MessageCircle, ThumbsUp, Send, Save, Clock, User, BarChart2, Sparkles, ArrowRight, ArrowLeft, X, Target, Zap, Users, Bot } from 'lucide-react';

const PlatformDemo = () => {
  const [activeTab, setActiveTab] = useState('cues');

  const tabContent = {
    cues: {
      title: "Cues Management",
      subtitle: "AI-Identified Engagement Opportunities",
      description: "Track and manage AI-discovered conversation starters and engagement opportunities with your prospects.",
      content: (
        <div className="space-y-4">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                  <img src="/lovable-uploads/0f228602-2449-495f-866b-df124fde272a.png" alt="Profile" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="flex items-center">
                    <h3 className="font-medium text-gray-900">Sarah Chen</h3>
                    <div className="ml-2 text-xs text-white bg-blue-600 px-1.5 py-0.5 rounded">LinkedIn</div>
                  </div>
                  <p className="text-xs text-gray-500">VP Marketing at TechStart • 3h ago</p>
                </div>
              </div>
              
              <div className="mb-4">
                <p className="text-sm text-gray-700">
                  Excited to share that our team just hit 200% of our Q4 targets! The new marketing automation tools have been game-changing. 🚀
                </p>
              </div>
              
              <div className="flex items-center justify-between p-3 border-t border-gray-200">
                <div className="flex items-center space-x-3 text-gray-500 text-sm">
                  <div className="flex items-center space-x-1">
                    <Heart className="w-4 h-4" />
                    <span>89</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MessageCircle className="w-4 h-4" />
                    <span>12</span>
                  </div>
                </div>
                <div className="flex items-center space-x-1 bg-convrt-purple/10 text-convrt-purple px-2 py-1 rounded-md">
                  <Target className="w-4 h-4" />
                  <span className="text-xs font-medium">High Priority Cue</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    heatbox: {
      title: "Heatbox Analytics", 
      subtitle: "Engagement Heat Mapping",
      description: "Visualize where your prospects are most active and engaged across different platforms and topics.",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">LinkedIn</span>
                <span className="text-convrt-purple font-bold">89%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-convrt-purple h-2 rounded-full" style={{width: '89%'}}></div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Twitter</span>
                <span className="text-blue-600 font-bold">67%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{width: '67%'}}></div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Facebook</span>
                <span className="text-green-600 font-bold">45%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{width: '45%'}}></div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Reddit</span>
                <span className="text-orange-600 font-bold">23%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-orange-600 h-2 rounded-full" style={{width: '23%'}}></div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    seeds: {
      title: "Seeds Database",
      subtitle: "Relationship Building Progress", 
      description: "Track your relationship-building journey with prospects from first contact to closed deals.",
      content: (
        <div className="space-y-3">
          {[
            { name: "Michael Anderson", company: "TechCorp", status: "Warm", interactions: 5, stage: "Qualified" },
            { name: "Sarah Chen", company: "TechStart", status: "Hot", interactions: 8, stage: "Proposal" },
            { name: "David Kim", company: "InnovateLab", status: "Cold", interactions: 2, stage: "Research" }
          ].map((seed, i) => (
            <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                    <User className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{seed.name}</h4>
                    <p className="text-xs text-gray-500">{seed.company}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-xs px-2 py-1 rounded-full ${
                    seed.status === 'Hot' ? 'bg-red-100 text-red-700' :
                    seed.status === 'Warm' ? 'bg-orange-100 text-orange-700' :
                    'bg-blue-100 text-blue-700'
                  }`}>
                    {seed.status}
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{seed.interactions} interactions</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )
    },
    agents: {
      title: "AI Agents",
      subtitle: "Autonomous Engagement Bots",
      description: "Deploy AI agents that automatically engage with prospects, comment on posts, and nurture relationships 24/7.",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-3">
            {[
              { name: "LinkedIn Engagement Bot", status: "Active", tasks: 12, efficiency: "94%" },
              { name: "Twitter Outreach Agent", status: "Active", tasks: 8, efficiency: "87%" },
              { name: "Content Interaction AI", status: "Paused", tasks: 0, efficiency: "91%" }
            ].map((agent, i) => (
              <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-convrt-purple/20 flex items-center justify-center">
                      <Bot className="w-5 h-5 text-convrt-purple" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{agent.name}</h4>
                      <p className="text-xs text-gray-500">{agent.tasks} active tasks</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-xs px-2 py-1 rounded-full ${
                      agent.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {agent.status}
                    </div>
                    <p className="text-xs text-convrt-purple font-medium mt-1">{agent.efficiency} efficiency</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    }
  };

  return (
    <div className="relative max-w-5xl mx-auto mb-20">
      {/* Gradient background */}
      <div className="absolute inset-0 -m-10 bg-gradient-to-br from-convrt-purple/20 via-convrt-purple/20 to-convrt-purple/20 rounded-3xl blur-3xl opacity-40"></div>
      
      <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-sm">
        {/* Platform UI Header - Tabs and Navigation */}
        <div className="bg-white border-b border-gray-200 flex items-center px-6 py-3">
          <div className="flex space-x-1 mr-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          
          <div className="flex space-x-1 overflow-x-auto scrollbar-hide">
            <button 
              onClick={() => setActiveTab('cues')}
              className={`px-4 py-2 rounded-t-lg font-medium text-sm border-b-2 transition-all ${
                activeTab === 'cues' 
                  ? 'text-convrt-purple bg-convrt-purple/10 border-convrt-purple' 
                  : 'text-gray-600 hover:bg-gray-100 border-transparent'
              }`}
            >
              Cues (24)
            </button>
            <button 
              onClick={() => setActiveTab('heatbox')}
              className={`px-4 py-2 rounded-t-lg font-medium text-sm border-b-2 transition-all ${
                activeTab === 'heatbox' 
                  ? 'text-convrt-purple bg-convrt-purple/10 border-convrt-purple' 
                  : 'text-gray-600 hover:bg-gray-100 border-transparent'
              }`}
            >
              Heatbox (12)
            </button>
            <button 
              onClick={() => setActiveTab('seeds')}
              className={`px-4 py-2 rounded-t-lg font-medium text-sm border-b-2 transition-all ${
                activeTab === 'seeds' 
                  ? 'text-convrt-purple bg-convrt-purple/10 border-convrt-purple' 
                  : 'text-gray-600 hover:bg-gray-100 border-transparent'
              }`}
            >
              Seeds (156)
            </button>
            <button 
              onClick={() => setActiveTab('agents')}
              className={`px-4 py-2 rounded-t-lg font-medium text-sm border-b-2 transition-all ${
                activeTab === 'agents' 
                  ? 'text-convrt-purple bg-convrt-purple/10 border-convrt-purple' 
                  : 'text-gray-600 hover:bg-gray-100 border-transparent'
              }`}
            >
              AI Agents
            </button>
          </div>
          
          <div className="ml-auto flex items-center space-x-4">
            <div className="flex items-center bg-green-50 px-3 py-1 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span className="text-xs font-medium text-green-700">248 Seeds</span>
            </div>
            <div className="flex items-center bg-orange-50 px-3 py-1 rounded-full">
              <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
              <span className="text-xs font-medium text-orange-700">12 Streak</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              <User className="w-4 h-4 text-gray-600" />
            </div>
          </div>
        </div>
        
        {/* Main Content Area */}
        <div className="bg-gray-50 p-6">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{tabContent[activeTab].title}</h3>
              <p className="text-sm text-convrt-purple font-medium mb-1">{tabContent[activeTab].subtitle}</p>
              <p className="text-sm text-gray-600">{tabContent[activeTab].description}</p>
            </div>
            {tabContent[activeTab].content}
          </motion.div>
        </div>
      </div>
      
      {/* Floating UI Element */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -left-8 top-1/3 z-10"
      >
        <div className="animate-float bg-white/70 backdrop-blur-md p-3 rounded-xl shadow-xl border border-white/20 flex items-center">
          <div className="bg-[#6936F5]/20 rounded-lg p-2 mr-3">
            <Heart className="w-4 h-4 text-[#6936F5]" />
          </div>
          <div>
            <div className="text-gray-800 text-xs font-medium">New interaction</div>
            <div className="text-gray-600 text-xs">Liked your comment</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PlatformDemo;
