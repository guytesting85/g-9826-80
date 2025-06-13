
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Shield, Zap, Users, BarChart3, Bot, Mail, Target, Brain, Globe, Lock } from 'lucide-react';

const SkillsShowcase = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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

  const skills = [
    {
      category: "AI & Machine Learning",
      skills: [
        { name: "Natural Language Processing", icon: <Bot className="w-6 h-6" />, level: 95 },
        { name: "Predictive Analytics", icon: <BarChart3 className="w-6 h-6" />, level: 90 },
        { name: "Behavioral Analysis", icon: <Users className="w-6 h-6" />, level: 88 },
        { name: "Deep Learning Models", icon: <Brain className="w-6 h-6" />, level: 92 }
      ]
    },
    {
      category: "Platform Integration",
      skills: [
        { name: "CRM Integration", icon: <Database className="w-6 h-6" />, level: 92 },
        { name: "Social Media APIs", icon: <Cloud className="w-6 h-6" />, level: 89 },
        { name: "Email Automation", icon: <Mail className="w-6 h-6" />, level: 94 },
        { name: "Real-time Processing", icon: <Zap className="w-6 h-6" />, level: 87 }
      ]
    },
    {
      category: "Sales Optimization",
      skills: [
        { name: "Lead Scoring", icon: <Target className="w-6 h-6" />, level: 91 },
        { name: "Conversion Tracking", icon: <Zap className="w-6 h-6" />, level: 87 },
        { name: "Performance Analytics", icon: <BarChart3 className="w-6 h-6" />, level: 93 },
        { name: "Market Intelligence", icon: <Globe className="w-6 h-6" />, level: 85 }
      ]
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-section">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-convrt-purple/10 text-convrt-purple mb-6">
              <Code className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium font-inter tracking-wide">Our Expertise</span>
            </div>
            <h2 className="font-inter font-bold text-4xl md:text-5xl text-convrt-dark-blue mb-6">
              Built with <span className="text-convrt-purple">Cutting-Edge</span> Technology
            </h2>
            <p className="text-xl text-convrt-dark-blue/70 max-w-3xl mx-auto leading-relaxed">
              Our platform combines advanced AI, seamless integrations, and proven sales methodologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="feature-card p-6"
              >
                <h3 className="font-inter font-semibold text-lg text-convrt-dark-blue mb-6">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="p-1.5 rounded-lg bg-convrt-purple/10 text-convrt-purple">
                            {skill.icon}
                          </div>
                          <span className="font-medium text-convrt-dark-blue text-sm">{skill.name}</span>
                        </div>
                        <span className="text-xs font-semibold text-convrt-purple">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <motion.div
                          className="bg-gradient-to-r from-convrt-purple to-convrt-purple-light h-1.5 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsShowcase;
