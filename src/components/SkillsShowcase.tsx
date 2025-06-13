
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Database, Cloud, Brain, Globe, Shield, Zap, Users, BarChart3, Smartphone, Palette, Settings } from "lucide-react";

const SkillsShowcase = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const skillsData = [
    {
      id: 1,
      title: "AI-Driven Automation",
      description: "Automate repetitive tasks and streamline workflows with intelligent AI agents.",
      icon: Brain,
      color: "#6936F5",
    },
    {
      id: 2,
      title: "Cloud Infrastructure",
      description: "Scalable and secure cloud infrastructure ensures high availability and performance.",
      icon: Cloud,
      color: "#00A3FF",
    },
    {
      id: 3,
      title: "Data Analytics",
      description: "Gain actionable insights from your data with advanced analytics and visualization tools.",
      icon: BarChart3,
      color: "#FF6B6B",
    },
    {
      id: 4,
      title: "Error Handling | Logging",
      description: "Protect your data and systems with robust cybersecurity measures and threat detection.",
      icon: Shield,
      color: "#32CD32",
    },
    {
      id: 5,
      title: "Backend | Microservices",
      description: "Ensure a seamless user experience across all devices with mobile-first design principles.",
      icon: Smartphone,
      color: "#FFD700",
    },
    {
      id: 6,
      title: "Redis",
      description: "Expand your reach with multi-language support and localized content delivery.",
      icon: Globe,
      color: "#E9967A",
    },
    {
      id: 7,
      title: "API Integrations",
      description: "Seamlessly integrate with other platforms and services through robust API integrations.",
      icon: Zap,
      color: "#9400D3",
    },
    {
      id: 8,
      title: "Containers",
      description: "Manage user access and permissions with a centralized user management system.",
      icon: Users,
      color: "#4682B4",
    },
    {
      id: 9,
      title: "Customization",
      description: "Tailor the platform to your specific needs with customizable features and settings.",
      icon: Settings,
      color: "#808080",
    },
    {
      id: 10,
      title: "Databases",
      description: "Efficiently store and manage your data with scalable database solutions.",
      icon: Database,
      color: "#D2691E",
    },
    {
      id: 11,
      title: "UI/UX Design",
      description: "Intuitive and visually appealing user interface and user experience design.",
      icon: Palette,
      color: "#8FBC8F",
    },
    {
      id: 12,
      title: "Code Quality",
      description: "High-quality code ensures reliability, maintainability, and scalability.",
      icon: Code,
      color: "#A9A9A9",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.1,
        ease: "easeInOut",
      },
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        duration: 0.05,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden transition-colors duration-300" id="skills">
      <div className="container-section-1">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-convrt-dark-blue dark:text-white mb-6 transition-colors duration-300">
            Advanced Technologies
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed transition-colors duration-300">
            Explore the cutting-edge technologies that power our AI platform and drive exceptional results.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillsData.map((skill) => (
            <motion.div
              key={skill.id}
              className="relative p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:shadow-convrt-purple/5 dark:hover:shadow-convrt-purple/10"
              variants={cardVariants}
              whileHover="hover"
              onMouseEnter={() => setHoveredCard(skill.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute top-4 right-4">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${skill.color}20` }}
                >
                  <skill.icon className="w-5 h-5" style={{ color: skill.color }} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-convrt-dark-blue dark:text-white mb-3 transition-colors duration-300">
                {skill.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsShowcase;
