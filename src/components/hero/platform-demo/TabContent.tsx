
import React from 'react';
import { User, Bot } from 'lucide-react';
import CuesTab from './CuesTab';

interface TabContentProps {
  activeTab: string;
}

const TabContent = ({ activeTab }: TabContentProps) => {
  const renderTabContent = () => {
    switch (activeTab) {
      case 'cues':
        return <CuesTab />;
      
      case 'heatbox':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              {[
                { platform: 'LinkedIn', percentage: 89, color: 'convrt-purple' },
                { platform: 'Twitter', percentage: 67, color: 'blue-600' },
                { platform: 'Facebook', percentage: 45, color: 'green-600' },
                { platform: 'Reddit', percentage: 23, color: 'orange-600' }
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-medium text-gray-700">{item.platform}</span>
                    <span className={`text-${item.color} font-bold text-lg`}>{item.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className={`bg-${item.color} h-3 rounded-full transition-all duration-1000`} style={{width: `${item.percentage}%`}}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'seeds':
        return (
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
        );
      
      case 'agents':
        return (
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
        );
      
      case 'campaigns':
        return (
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
        );
      
      default:
        return <CuesTab />;
    }
  };

  const getTabInfo = () => {
    const tabInfo = {
      cues: {
        title: "Cues Management",
        subtitle: "AI-Identified Engagement Opportunities",
        description: "Track and manage AI-discovered conversation starters and engagement opportunities with your prospects."
      },
      heatbox: {
        title: "Heatbox Analytics", 
        subtitle: "Engagement Heat Mapping",
        description: "Visualize where your prospects are most active and engaged across different platforms and topics."
      },
      seeds: {
        title: "Seeds Database",
        subtitle: "Relationship Building Progress", 
        description: "Track your relationship-building journey with prospects from first contact to closed deals."
      },
      agents: {
        title: "AI Agents",
        subtitle: "Autonomous Engagement Bots",
        description: "Deploy AI agents that automatically engage with prospects, comment on posts, and nurture relationships 24/7."
      },
      campaigns: {
        title: "Smart Campaigns",
        subtitle: "Automated Outreach Sequences",
        description: "Launch personalized multi-touch campaigns that adapt based on prospect behavior and engagement."
      }
    };
    
    return tabInfo[activeTab] || tabInfo.cues;
  };

  const tabInfo = getTabInfo();

  return (
    <div className="space-y-8">
      <div className="text-center mb-10">
        <h3 className="text-3xl font-bold text-gray-900 mb-3">{tabInfo.title}</h3>
        <p className="text-lg text-convrt-purple font-medium mb-3">{tabInfo.subtitle}</p>
        <p className="text-gray-600 max-w-2xl mx-auto">{tabInfo.description}</p>
      </div>
      {renderTabContent()}
    </div>
  );
};

export default TabContent;
