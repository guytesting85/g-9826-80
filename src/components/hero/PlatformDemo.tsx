
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Heart, MessageCircle, ThumbsUp, Send, Save, Clock, User, BarChart2, Sparkles, ArrowRight, ArrowLeft, X, Target, Zap, Users, Bot, Mail, Calendar, Phone, Settings, Bell, Star, TrendingUp, Activity, FileText, Globe } from 'lucide-react';

const PlatformDemo = () => {
  const [activeTab, setActiveTab] = useState('cues');
  const [isHeartLiked, setIsHeartLiked] = useState(false);
  const [isFloatingHeartLiked, setIsFloatingHeartLiked] = useState(false);
  const [showAvatarMenu, setShowAvatarMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const tabContent = {
    cues: {
      title: "Cues Management",
      subtitle: "AI-Identified Engagement Opportunities",
      description: "Track and manage AI-discovered conversation starters and engagement opportunities with your prospects.",
      content: (
        <div className="space-y-4">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-gray-200 overflow-hidden">
                  <img src="/lovable-uploads/0f228602-2449-495f-866b-df124fde272a.png" alt="Profile" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="flex items-center">
                    <h3 className="font-medium text-gray-900 text-lg">Sarah Chen</h3>
                    <div className="ml-2 text-xs text-white bg-blue-600 px-2 py-1 rounded">LinkedIn</div>
                  </div>
                  <p className="text-sm text-gray-500">VP Marketing at TechStart • 3h ago</p>
                </div>
              </div>
              
              <div className="mb-6">
                <p className="text-gray-700 text-base leading-relaxed">
                  Excited to share that our team just hit 200% of our Q4 targets! The new marketing automation tools have been game-changing. 🚀
                </p>
              </div>
              
              <div className="flex items-center justify-between p-4 border-t border-gray-200">
                <div className="flex items-center space-x-4 text-gray-500">
                  <button 
                    className="flex items-center space-x-2 hover:text-red-500 transition-colors cursor-pointer"
                    onClick={() => setIsHeartLiked(!isHeartLiked)}
                  >
                    <Heart className={`w-5 h-5 transition-all duration-300 ${isHeartLiked ? 'fill-red-500 text-red-500 scale-110' : ''}`} />
                    <span className="text-sm font-medium">{isHeartLiked ? '90' : '89'}</span>
                  </button>
                  <button className="flex items-center space-x-2 hover:text-blue-500 transition-colors cursor-pointer">
                    <MessageCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">12</span>
                  </button>
                  <button className="flex items-center space-x-2 hover:text-green-500 transition-colors cursor-pointer">
                    <ThumbsUp className="w-5 h-5" />
                    <span className="text-sm font-medium">Share</span>
                  </button>
                </div>
                <div className="flex items-center space-x-2 bg-convrt-purple/10 text-convrt-purple px-3 py-2 rounded-lg">
                  <Target className="w-4 h-4" />
                  <span className="text-sm font-medium">High Priority Cue</span>
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
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <span className="font-medium text-gray-700">LinkedIn</span>
                <span className="text-convrt-purple font-bold text-lg">89%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-convrt-purple h-3 rounded-full transition-all duration-1000" style={{width: '89%'}}></div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <span className="font-medium text-gray-700">Twitter</span>
                <span className="text-blue-600 font-bold text-lg">67%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-blue-600 h-3 rounded-full transition-all duration-1000" style={{width: '67%'}}></div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <span className="font-medium text-gray-700">Facebook</span>
                <span className="text-green-600 font-bold text-lg">45%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-green-600 h-3 rounded-full transition-all duration-1000" style={{width: '45%'}}></div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <span className="font-medium text-gray-700">Reddit</span>
                <span className="text-orange-600 font-bold text-lg">23%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-orange-600 h-3 rounded-full transition-all duration-1000" style={{width: '23%'}}></div>
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
        <div className="space-y-4">
          {[
            { name: "Michael Anderson", company: "TechCorp", status: "Warm", interactions: 5, stage: "Qualified" },
            { name: "Sarah Chen", company: "TechStart", status: "Hot", interactions: 8, stage: "Proposal" },
            { name: "David Kim", company: "InnovateLab", status: "Cold", interactions: 2, stage: "Research" }
          ].map((seed, i) => (
            <div key={i} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                    <User className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 text-base">{seed.name}</h4>
                    <p className="text-sm text-gray-500">{seed.company}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-sm px-3 py-1 rounded-full font-medium ${
                    seed.status === 'Hot' ? 'bg-red-100 text-red-700' :
                    seed.status === 'Warm' ? 'bg-orange-100 text-orange-700' :
                    'bg-blue-100 text-blue-700'
                  }`}>
                    {seed.status}
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{seed.interactions} interactions</p>
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
          <div className="grid grid-cols-1 gap-4">
            {[
              { name: "LinkedIn Engagement Bot", status: "Active", tasks: 12, efficiency: "94%" },
              { name: "Twitter Outreach Agent", status: "Active", tasks: 8, efficiency: "87%" },
              { name: "Content Interaction AI", status: "Paused", tasks: 0, efficiency: "91%" }
            ].map((agent, i) => (
              <div key={i} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-convrt-purple/20 flex items-center justify-center">
                      <Bot className="w-6 h-6 text-convrt-purple" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 text-base">{agent.name}</h4>
                      <p className="text-sm text-gray-500">{agent.tasks} active tasks</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-sm px-3 py-1 rounded-full font-medium ${
                      agent.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {agent.status}
                    </div>
                    <p className="text-sm text-convrt-purple font-medium mt-1">{agent.efficiency} efficiency</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    campaigns: {
      title: "Smart Campaigns",
      subtitle: "Automated Outreach Sequences",
      description: "Launch personalized multi-touch campaigns that adapt based on prospect behavior and engagement.",
      content: (
        <div className="space-y-4">
          {[
            { name: "Q4 Enterprise Outreach", status: "Running", sent: 245, opened: 89, replied: 23 },
            { name: "Product Demo Follow-up", status: "Scheduled", sent: 0, opened: 0, replied: 0 },
            { name: "Re-engagement Campaign", status: "Completed", sent: 156, opened: 67, replied: 12 }
          ].map((campaign, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="font-medium text-gray-900 text-lg">{campaign.name}</h4>
                  <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                    campaign.status === 'Running' ? 'bg-green-100 text-green-700' :
                    campaign.status === 'Scheduled' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {campaign.status}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{campaign.sent}</div>
                  <div className="text-sm text-gray-500">Sent</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{campaign.opened}</div>
                  <div className="text-sm text-gray-500">Opened</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{campaign.replied}</div>
                  <div className="text-sm text-gray-500">Replied</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )
    },
    analytics: {
      title: "Performance Analytics",
      subtitle: "Data-Driven Insights",
      description: "Deep dive into your outreach performance with comprehensive analytics and actionable insights.",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium text-gray-700">Response Rate Trend</h4>
                <TrendingUp className="w-5 h-5 text-green-500" />
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">+23%</div>
              <p className="text-sm text-gray-500">vs last month</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium text-gray-700">Best Performing Time</h4>
                <Clock className="w-5 h-5 text-blue-500" />
              </div>
              <div className="text-2xl font-bold text-blue-600 mb-2">2-4 PM</div>
              <p className="text-sm text-gray-500">Tuesdays & Wednesdays</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h4 className="font-medium text-gray-700 mb-4">Top Performing Subject Lines</h4>
            <div className="space-y-3">
              {[
                { subject: "Quick question about [Company]", rate: "34%" },
                { subject: "Saw your recent LinkedIn post", rate: "28%" },
                { subject: "Mutual connection recommended I reach out", rate: "25%" }
              ].map((line, i) => (
                <div key={i} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-700">{line.subject}</span>
                  <span className="text-sm font-medium text-convrt-purple">{line.rate}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    integrations: {
      title: "Integrations Hub",
      subtitle: "Connect Your Sales Stack",
      description: "Seamlessly integrate with your existing CRM, email tools, and sales platforms for unified workflow.",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            {[
              { name: "Salesforce", status: "Connected", icon: "🏢" },
              { name: "HubSpot", status: "Connected", icon: "🟠" },
              { name: "Gmail", status: "Connected", icon: "📧" },
              { name: "Slack", status: "Available", icon: "💬" },
              { name: "Zoom", status: "Available", icon: "📹" },
              { name: "Calendly", status: "Connected", icon: "📅" }
            ].map((integration, i) => (
              <div key={i} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{integration.icon}</div>
                    <div>
                      <h4 className="font-medium text-gray-900">{integration.name}</h4>
                      <p className={`text-sm ${
                        integration.status === 'Connected' ? 'text-green-600' : 'text-gray-500'
                      }`}>
                        {integration.status}
                      </p>
                    </div>
                  </div>
                  {integration.status === 'Connected' ? (
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  ) : (
                    <button className="text-xs text-convrt-purple hover:text-convrt-purple-hover">
                      Connect
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    }
  };

  return (
    <div className="relative max-w-7xl mx-auto">
      {/* Gradient background */}
      <div className="absolute inset-0 -m-10 bg-gradient-to-br from-convrt-purple/20 via-convrt-purple/20 to-convrt-purple/20 rounded-3xl blur-3xl opacity-40"></div>
      
      <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-sm">
        {/* Platform UI Header - Enhanced with more tabs and interactive elements */}
        <div className="bg-white border-b border-gray-200 flex items-center px-6 py-4">
          <div className="flex space-x-1 mr-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          
          <div className="flex space-x-1 overflow-x-auto scrollbar-hide flex-1">
            {Object.entries(tabContent).map(([key, tab]) => (
              <button 
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-4 py-3 rounded-t-lg font-medium text-sm border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === key 
                    ? 'text-convrt-purple bg-convrt-purple/10 border-convrt-purple' 
                    : 'text-gray-600 hover:bg-gray-100 border-transparent'
                }`}
              >
                {key === 'cues' && 'Cues (24)'}
                {key === 'heatbox' && 'Heatbox (12)'}
                {key === 'seeds' && 'Seeds (156)'}
                {key === 'agents' && 'AI Agents'}
                {key === 'campaigns' && 'Campaigns'}
                {key === 'analytics' && 'Analytics'}
                {key === 'integrations' && 'Integrations'}
              </button>
            ))}
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
            
            {/* Notifications Bell */}
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors relative"
              >
                <Bell className="w-5 h-5 text-gray-600" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-xs text-white font-bold">3</span>
                </div>
              </button>
              
              <AnimatePresence>
                {showNotifications && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 top-12 w-80 bg-white rounded-xl shadow-lg border border-gray-200 z-50"
                  >
                    <div className="p-4 border-b border-gray-100">
                      <h3 className="font-medium text-gray-900">Notifications</h3>
                    </div>
                    <div className="max-h-64 overflow-y-auto">
                      {[
                        { text: "New high-priority cue from Sarah Chen", time: "2m ago", type: "cue" },
                        { text: "Campaign 'Q4 Enterprise' reached 90% completion", time: "15m ago", type: "campaign" },
                        { text: "AI Agent discovered 5 new engagement opportunities", time: "1h ago", type: "agent" }
                      ].map((notif, i) => (
                        <div key={i} className="p-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 cursor-pointer">
                          <p className="text-sm text-gray-700">{notif.text}</p>
                          <p className="text-xs text-gray-500 mt-1">{notif.time}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Interactive Avatar */}
            <div className="relative">
              <button
                onClick={() => setShowAvatarMenu(!showAvatarMenu)}
                className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:ring-2 hover:ring-convrt-purple/20 transition-all"
              >
                <User className="w-4 h-4 text-gray-600" />
              </button>
              
              <AnimatePresence>
                {showAvatarMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 top-12 w-64 bg-white rounded-xl shadow-lg border border-gray-200 z-50"
                  >
                    <div className="p-4 border-b border-gray-100">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-convrt-purple/20 flex items-center justify-center">
                          <User className="w-5 h-5 text-convrt-purple" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">John Doe</h3>
                          <p className="text-sm text-gray-500">Sales Manager</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-2">
                      {[
                        { icon: Settings, label: "Account Settings" },
                        { icon: BarChart2, label: "My Performance" },
                        { icon: Star, label: "Favorites" },
                        { icon: Bell, label: "Notifications" }
                      ].map((item, i) => (
                        <button
                          key={i}
                          className="w-full flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors text-left"
                        >
                          <item.icon className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-700">{item.label}</span>
                        </button>
                      ))}
                    </div>
                    <div className="p-2 border-t border-gray-100">
                      <button className="w-full flex items-center space-x-3 p-3 hover:bg-red-50 rounded-lg transition-colors text-left">
                        <ArrowRight className="w-4 h-4 text-red-500 rotate-180" />
                        <span className="text-sm text-red-500">Sign Out</span>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
        
        {/* Main Content Area - Bigger and enhanced */}
        <div className="bg-gray-50 p-10 min-h-[700px]">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold text-gray-900 mb-3">{tabContent[activeTab].title}</h3>
                <p className="text-lg text-convrt-purple font-medium mb-3">{tabContent[activeTab].subtitle}</p>
                <p className="text-gray-600 max-w-2xl mx-auto">{tabContent[activeTab].description}</p>
              </div>
              {tabContent[activeTab].content}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      
      {/* Floating UI Element - Smooth animation */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -left-8 top-1/3 z-10"
      >
        <motion.button
          onClick={() => setIsFloatingHeartLiked(!isFloatingHeartLiked)}
          animate={{ 
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-xl border border-white/20 flex items-center cursor-pointer hover:bg-white/90 transition-all duration-300 hover:scale-105"
        >
          <div className={`rounded-lg p-2 mr-3 transition-all duration-300 ${
            isFloatingHeartLiked ? 'bg-red-100' : 'bg-[#6936F5]/20'
          }`}>
            <Heart className={`w-4 h-4 transition-all duration-300 ${
              isFloatingHeartLiked ? 'text-red-500 fill-red-500 scale-110' : 'text-[#6936F5]'
            }`} />
          </div>
          <div>
            <div className="text-gray-800 text-sm font-medium">New interaction</div>
            <div className="text-gray-600 text-xs">Liked your comment</div>
          </div>
        </motion.button>
      </motion.div>
      
      {/* Click outside handlers */}
      {(showAvatarMenu || showNotifications) && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => {
            setShowAvatarMenu(false);
            setShowNotifications(false);
          }}
        />
      )}
    </div>
  );
};

export default PlatformDemo;
