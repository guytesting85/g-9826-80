
import React from 'react';
import CuesTab from './CuesTab';
import HeatboxTab from './tabs/HeatboxTab';
import SeedsTab from './tabs/SeedsTab';
import AgentsTab from './tabs/AgentsTab';
import CampaignsTab from './tabs/CampaignsTab';

interface TabContentProps {
  activeTab: string;
}

const TabContent = ({ activeTab }: TabContentProps) => {
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

  const renderTabContent = () => {
    switch (activeTab) {
      case 'cues': return <CuesTab />;
      case 'heatbox': return <HeatboxTab />;
      case 'seeds': return <SeedsTab />;
      case 'agents': return <AgentsTab />;
      case 'campaigns': return <CampaignsTab />;
      default: return <CuesTab />;
    }
  };

  const currentTabInfo = tabInfo[activeTab] || tabInfo.cues;

  return (
    <div className="space-y-8">
      <div className="text-center mb-10">
        <h3 className="text-3xl font-bold text-gray-900 mb-3">{currentTabInfo.title}</h3>
        <p className="text-lg text-convrt-purple font-medium mb-3">{currentTabInfo.subtitle}</p>
        <p className="text-gray-600 max-w-2xl mx-auto">{currentTabInfo.description}</p>
      </div>
      {renderTabContent()}
    </div>
  );
};

export default TabContent;
