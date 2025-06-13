
import { TabInfo } from '../types';

export const tabContent = {
  cues: 'Cues (24)',
  heatbox: 'Heatbox (12)',
  seeds: 'Seeds (156)',
  agents: 'AI Agents',
  campaigns: 'Campaigns'
};

export const tabInfo: Record<string, TabInfo> = {
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
