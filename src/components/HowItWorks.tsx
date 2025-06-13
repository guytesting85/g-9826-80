
import React, { useState } from 'react';
import { Target, Users, LineChart, ChevronLeft, ChevronRight, Lightbulb, MessageCircle, TrendingUp, Zap, Bot, BarChart2 } from 'lucide-react';
import StepContent from './how-it-works/StepContent';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [currentStepSet, setCurrentStepSet] = useState(0);

  // Multiple step sets
  const stepSets = [
    {
      title: "How Convrt.ai Works in 3 Steps",
      subtitle: "From Ignored to Trusted",
      steps: [
        {
          id: 1,
          icon: <Target className="w-4 h-4" />,
          title: "AI Identifies Where Your Buyers Engage",
          description: "Our AI scans social media to find where your target audience is most active, identifying the exact channels, topics, and content they engage with.",
          highlightText: "AI identifies:",
          highlightDetails: "Relevant conversations, active communities, and engagement opportunities",
          gifUrl: "/lovable-uploads/50d7bc89-98fd-49a5-b67f-94230c5d3ca5.png"
        },
        {
          id: 2,
          icon: <Users className="w-4 h-4" />,
          title: "AI Auto-Warms & Builds Trust",
          description: "Convrt creates meaningful touchpoints that position you as a trusted advisor by engaging with prospects' content and contributing value.",
          highlightText: "AI automates:",
          highlightDetails: "Targeted comments, relevant reactions, and personalized interactions",
          gifUrl: "https://api.microlink.io?url=https%3A%2F%2Fgiphy.com%2Fgifs%2Frevolutioncomedy-handshake-revolutioncomedy-icommitcombustion-kFHbqSdogIS0qtX6Pf&embed=true&screenshot=true&meta=false"
        },
        {
          id: 3,
          icon: <LineChart className="w-4 h-4" />,
          title: "AI Converts Warm Leads Into Pipeline",
          description: "With pre-established trust, your outreach achieves 15x higher conversion rates, turning social connections into qualified leads and deals.",
          highlightText: "AI delivers:",
          highlightDetails: "Warmed leads, engagement analytics, and conversion opportunities",
          gifUrl: "https://api.microlink.io?url=https%3A%2F%2Fgiphy.com%2Fgifs%2Fchart-jtECu4TAPnhbGv2iwx&embed=true&screenshot=true&meta=false"
        }
      ]
    },
    {
      title: "Getting Started in 4 Simple Steps",
      subtitle: "Quick Setup Guide",
      steps: [
        {
          id: 1,
          icon: <Lightbulb className="w-4 h-4" />,
          title: "Define Your Ideal Customer Profile",
          description: "Set up your target audience parameters, including industry, company size, role, and key interests to help AI find the right prospects.",
          highlightText: "Configure:",
          highlightDetails: "Demographics, psychographics, and behavioral patterns",
          gifUrl: "/lovable-uploads/50d7bc89-98fd-49a5-b67f-94230c5d3ca5.png"
        },
        {
          id: 2,
          icon: <Bot className="w-4 h-4" />,
          title: "Deploy AI Agents",
          description: "Activate intelligent agents that will monitor social platforms, identify opportunities, and begin building relationships on your behalf.",
          highlightText: "AI agents handle:",
          highlightDetails: "Content discovery, engagement timing, and relationship mapping",
          gifUrl: "https://api.microlink.io?url=https%3A%2F%2Fgiphy.com%2Fgifs%2Frevolutioncomedy-handshake-revolutioncomedy-icommitcombustion-kFHbqSdogIS0qtX6Pf&embed=true&screenshot=true&meta=false"
        },
        {
          id: 3,
          icon: <MessageCircle className="w-4 h-4" />,
          title: "Review and Approve Engagements",
          description: "Monitor AI-generated comments and interactions before they're posted, ensuring brand consistency and message quality.",
          highlightText: "You control:",
          highlightDetails: "Content approval, timing, and engagement strategy",
          gifUrl: "https://api.microlink.io?url=https%3A%2F%2Fgiphy.com%2Fgifs%2Fchart-jtECu4TAPnhbGv2iwx&embed=true&screenshot=true&meta=false"
        },
        {
          id: 4,
          icon: <TrendingUp className="w-4 h-4" />,
          title: "Convert Warmed Prospects",
          description: "Leverage the trust and familiarity built through AI engagement to reach out with personalized messages that convert.",
          highlightText: "Results include:",
          highlightDetails: "Higher response rates, shorter sales cycles, and better deal quality",
          gifUrl: "/lovable-uploads/50d7bc89-98fd-49a5-b67f-94230c5d3ca5.png"
        }
      ]
    },
    {
      title: "Advanced Features & Capabilities",
      subtitle: "Power User Guide",
      steps: [
        {
          id: 1,
          icon: <Zap className="w-4 h-4" />,
          title: "Multi-Platform Intelligence",
          description: "Deploy across LinkedIn, Twitter, Reddit, and other platforms with platform-specific engagement strategies and compliance.",
          highlightText: "Platforms include:",
          highlightDetails: "LinkedIn, Twitter, Reddit, Facebook, and industry forums",
          gifUrl: "/lovable-uploads/50d7bc89-98fd-49a5-b67f-94230c5d3ca5.png"
        },
        {
          id: 2,
          icon: <BarChart2 className="w-4 h-4" />,
          title: "Advanced Analytics & Insights",
          description: "Deep dive into engagement metrics, relationship strength scores, and conversion attribution across your entire pipeline.",
          highlightText: "Track everything:",
          highlightDetails: "Engagement rates, relationship progression, and ROI metrics",
          gifUrl: "https://api.microlink.io?url=https%3A%2F%2Fgiphy.com%2Fgifs%2Frevolutioncomedy-handshake-revolutioncomedy-icommitcombustion-kFHbqSdogIS0qtX6Pf&embed=true&screenshot=true&meta=false"
        },
        {
          id: 3,
          icon: <Users className="w-4 h-4" />,
          title: "Team Collaboration & Workflows",
          description: "Scale your social selling across entire teams with role-based permissions, shared prospect databases, and collaborative workflows.",
          highlightText: "Team features:",
          highlightDetails: "Shared databases, approval workflows, and performance tracking",
          gifUrl: "https://api.microlink.io?url=https%3A%2F%2Fgiphy.com%2Fgifs%2Fchart-jtECu4TAPnhbGv2iwx&embed=true&screenshot=true&meta=false"
        }
      ]
    }
  ];

  const currentSteps = stepSets[currentStepSet];

  const handleStepClick = (stepId: number) => {
    setActiveStep(stepId);
  };

  const nextStepSet = () => {
    setCurrentStepSet((prev) => (prev + 1) % stepSets.length);
    setActiveStep(1);
  };

  const prevStepSet = () => {
    setCurrentStepSet((prev) => (prev - 1 + stepSets.length) % stepSets.length);
    setActiveStep(1);
  };

  return (
    <section className="relative py-4 pt-20 bg-white" id="how-it-works">
      <div className="container-section py-4">
        <div className="max-w-3xl mx-auto text-center mb-6">
          <div className="section-tag">
            {currentSteps.subtitle}
          </div>
          <motion.h2 
            key={currentStepSet}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="heading-lg text-convrt-dark-blue mb-4"
          >
            {currentSteps.title.split('Convrt.ai').map((part, index) => (
              index === 0 ? part : (
                <span key={index}>
                  <span className="gradient-text">Convrt.ai</span>
                  {part}
                </span>
              )
            ))}
          </motion.h2>
          <p className="text-convrt-dark-blue/80 text-lg max-w-2xl mx-auto mb-6">
            Our AI-driven platform automates social engagement for your sales and GTM teams, transforming cold outreach into warm connections.
          </p>
          
          {/* Navigation Controls */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <button 
              onClick={prevStepSet}
              className="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Previous Guide
            </button>
            
            <div className="flex space-x-2">
              {stepSets.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentStepSet(index);
                    setActiveStep(1);
                  }}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentStepSet ? 'bg-convrt-purple' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextStepSet}
              className="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              Next Guide
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
        
        <motion.div 
          key={currentStepSet}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto bg-gray-100 rounded-2xl overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row h-[700px]">
            {/* Steps Section */}
            <div className={`${
              currentSteps.steps.length === 4 ? 'lg:w-2/5' : 'lg:w-1/3'
            } flex flex-col gap-1 p-6 bg-gray-50 overflow-y-auto`}>
              {currentSteps.steps.map((step) => (
                <StepContent
                  key={step.id}
                  stepNumber={step.id}
                  title={step.title}
                  description={step.description}
                  highlightText={step.highlightText}
                  highlightDetails={step.highlightDetails}
                  icon={step.icon}
                  isActive={activeStep === step.id}
                  onClick={() => handleStepClick(step.id)}
                />
              ))}
            </div>
            
            {/* Image Display */}
            <div className={`${
              currentSteps.steps.length === 4 ? 'lg:w-3/5' : 'lg:w-2/3'
            } relative h-full`}>
              {currentSteps.steps.map((step) => (
                <motion.div 
                  key={step.id}
                  className="absolute inset-0 h-full w-full"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: activeStep === step.id ? 1 : 0,
                    zIndex: activeStep === step.id ? 10 : 1
                  }}
                  transition={{ 
                    duration: 0.5, 
                    ease: "easeInOut"
                  }}
                >
                  <img 
                    src={step.gifUrl} 
                    alt={`Step ${step.id}: ${step.title}`} 
                    className="w-full h-full object-cover object-center"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
