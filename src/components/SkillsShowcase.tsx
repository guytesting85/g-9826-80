
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Globe, Smartphone, Cloud, Zap } from 'lucide-react';

const SkillsShowcase = () => {
  const skills = [
    {
      category: "AI & Machine Learning",
      icon: Zap,
      technologies: ["Natural Language Processing", "Predictive Analytics", "Deep Learning", "Computer Vision"],
      color: "from-purple-500 to-purple-600"
    },
    {
      category: "Web Development",
      icon: Code2,
      technologies: ["React", "Node.js", "TypeScript", "Next.js"],
      color: "from-blue-500 to-blue-600"
    },
    {
      category: "Database & Backend",
      icon: Database,
      technologies: ["PostgreSQL", "MongoDB", "Redis", "GraphQL"],
      color: "from-green-500 to-green-600"
    },
    {
      category: "Cloud & DevOps",
      icon: Cloud,
      technologies: ["AWS", "Docker", "Kubernetes", "CI/CD"],
      color: "from-orange-500 to-orange-600"
    },
    {
      category: "Mobile Development",
      icon: Smartphone,
      technologies: ["React Native", "Flutter", "iOS", "Android"],
      color: "from-pink-500 to-pink-600"
    },
    {
      category: "API & Integration",
      icon: Globe,
      technologies: ["REST APIs", "Webhooks", "Third-party APIs", "Microservices"],
      color: "from-indigo-500 to-indigo-600"
    }
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
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-purple-50/30 to-blue-50/30 dark:from-gray-900 dark:via-gray-800/30 dark:to-gray-900/30 transition-colors duration-300" id="skills">
      <div className="container-section max-w-6xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 rounded-full bg-convrt-purple/10 text-convrt-purple mb-6"
          >
            <Code2 className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium tracking-wide">Technologies</span>
          </motion.div>
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-convrt-dark-blue dark:text-white mb-6 tracking-tight transition-colors duration-300"
          >
            Powered by <span className="text-convrt-purple">Cutting-Edge</span> Technology
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed transition-colors duration-300"
          >
            Our platform leverages the latest technologies to deliver intelligent, scalable, and reliable AI-powered outreach solutions.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/60 dark:border-gray-700/60 h-full hover:-translate-y-2">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${skill.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-convrt-dark-blue dark:text-white mb-4 transition-colors duration-300">
                  {skill.category}
                </h3>
                
                <div className="space-y-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <div 
                      key={techIndex}
                      className="flex items-center text-gray-600 dark:text-gray-300 transition-colors duration-300"
                    >
                      <div className="w-2 h-2 rounded-full bg-convrt-purple mr-3"></div>
                      <span className="text-sm">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsShowcase;
