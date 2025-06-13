
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Database, Cloud, Brain, Globe, Shield, Zap, Users, BarChart3, Smartphone, Palette, Settings, Monitor, Server, Cpu, HardDrive, Terminal, FileCode, Layers, GitBranch, Package, Key } from "lucide-react";

interface Technology {
  id: string;
  name: string;
  icon: React.ElementType;
  category: string;
  description: string;
  color: string;
}

interface Category {
  id: string;
  name: string;
  icon: React.ElementType;
  color: string;
  description: string;
}

const SkillsShowcase = () => {
  const [activeCategory, setActiveCategory] = useState("web-development");

  const categories: Category[] = [
    {
      id: "web-development",
      name: "Web Development",
      icon: Monitor,
      color: "#6936F5",
      description: "Modern web technologies and frameworks"
    },
    {
      id: "database",
      name: "Database",
      icon: Database,
      color: "#4F46E5",
      description: "Database systems and data management"
    },
    {
      id: "languages",
      name: "Languages",
      icon: Code,
      color: "#7C3AED",
      description: "Programming languages and syntax"
    },
    {
      id: "tools",
      name: "Tools",
      icon: Settings,
      color: "#2563EB",
      description: "Development tools and utilities"
    }
  ];

  const technologies: Technology[] = [
    // Web Development
    { id: "react", name: "React", icon: Code, category: "web-development", description: "Frontend", color: "#61DAFB" },
    { id: "nodejs", name: "Node.js", icon: Server, category: "web-development", description: "Backend", color: "#68A063" },
    { id: "typescript", name: "TypeScript", icon: FileCode, category: "web-development", description: "Frontend", color: "#3178C6" },
    { id: "express", name: "Express.js", icon: Layers, category: "web-development", description: "Backend", color: "#000000" },
    { id: "tailwind", name: "Tailwind CSS", icon: Palette, category: "web-development", description: "Frontend", color: "#06B6D4" },
    { id: "nextjs", name: "Next.js", icon: Globe, category: "web-development", description: "Frontend", color: "#000000" },
    { id: "redux", name: "Redux", icon: Package, category: "web-development", description: "Frontend", color: "#764ABC" },
    { id: "vite", name: "Vite", icon: Zap, category: "web-development", description: "Frontend", color: "#646CFF" },

    // Database
    { id: "mongodb", name: "MongoDB", icon: Database, category: "database", description: "Database", color: "#47A248" },
    { id: "sql", name: "SQL", icon: HardDrive, category: "database", description: "Database", color: "#336791" },
    { id: "redis", name: "Redis", icon: Cpu, category: "database", description: "Database", color: "#DC382D" },

    // Languages
    { id: "javascript", name: "JavaScript", icon: Code, category: "languages", description: "Languages", color: "#F7DF1E" },
    { id: "python", name: "Python", icon: Terminal, category: "languages", description: "Languages", color: "#3776AB" },
    { id: "java", name: "Java", icon: Code, category: "languages", description: "Languages", color: "#ED8B00" },
    { id: "cpp", name: "C++", icon: Code, category: "languages", description: "Languages", color: "#00599C" },

    // Tools
    { id: "git", name: "Git", icon: GitBranch, category: "tools", description: "Tools", color: "#F05032" },
    { id: "github", name: "GitHub", icon: Cloud, category: "tools", description: "Tools", color: "#181717" }
  ];

  const filteredTechnologies = technologies.filter(tech => tech.category === activeCategory);
  const activeCategoryData = categories.find(cat => cat.id === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
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
            Explore the cutting-edge technologies that power modern applications
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
              }`}
              style={activeCategory === category.id ? { backgroundColor: category.color } : {}}
            >
              <category.icon className="w-5 h-5" />
              {category.name}
            </button>
          ))}
        </div>

        {/* Category Description */}
        <AnimatePresence mode="wait">
          {activeCategoryData && (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center mb-12"
            >
              <p className="text-lg text-gray-600 dark:text-gray-400">
                {activeCategoryData.description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Technologies Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredTechnologies.map((tech) => (
              <motion.div
                key={tech.id}
                className="relative p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:shadow-convrt-purple/5 dark:hover:shadow-convrt-purple/10 group"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm"
                    style={{ backgroundColor: `${tech.color}20` }}
                  >
                    <tech.icon className="w-6 h-6" style={{ color: tech.color }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-convrt-dark-blue dark:text-white transition-colors duration-300">
                      {tech.name}
                    </h3>
                    <span 
                      className="text-sm font-medium px-2 py-1 rounded-full"
                      style={{ 
                        backgroundColor: `${tech.color}15`,
                        color: tech.color
                      }}
                    >
                      {tech.description}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SkillsShowcase;

