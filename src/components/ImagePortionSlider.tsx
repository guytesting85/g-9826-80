
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Book, Code, Github, Trophy, Star, Award, School, ExternalLink, Calendar, MapPin, Users, Target, Briefcase, Medal } from 'lucide-react';

const ImagePortionSlider = () => {
  const [firstSliderPosition, setFirstSliderPosition] = useState(30);
  const [secondSliderPosition, setSecondSliderPosition] = useState(70);
  const sliderContainerRef = useRef<HTMLDivElement>(null);
  const [isDraggingFirst, setIsDraggingFirst] = useState(false);
  const [isDraggingSecond, setIsDraggingSecond] = useState(false);

  const handleMouseMove = (e: MouseEvent) => {
    if (!sliderContainerRef.current) return;
    
    const rect = sliderContainerRef.current.getBoundingClientRect();
    const newPosition = ((e.clientX - rect.left) / rect.width) * 100;
    
    if (isDraggingFirst) {
      const maxPosition = secondSliderPosition - 15;
      setFirstSliderPosition(Math.max(5, Math.min(maxPosition, newPosition)));
    }
    
    if (isDraggingSecond) {
      const minPosition = firstSliderPosition + 15;
      setSecondSliderPosition(Math.max(minPosition, Math.min(95, newPosition)));
    }
  };

  const handleMouseUp = () => {
    setIsDraggingFirst(false);
    setIsDraggingSecond(false);
  };

  useEffect(() => {
    if (isDraggingFirst || isDraggingSecond) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.body.style.userSelect = 'none';
    } else {
      document.body.style.userSelect = '';
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.userSelect = '';
    };
  }, [isDraggingFirst, isDraggingSecond, firstSliderPosition, secondSliderPosition]);

  const educationItems = [
    { 
      icon: GraduationCap, 
      title: "Bachelor's in Computer Science", 
      subtitle: "University of Technology",
      year: "2020-2024",
      link: "https://example.edu",
      color: "text-blue-600" 
    },
    { 
      icon: School, 
      title: "High School - Science Stream", 
      subtitle: "Excellence Academy",
      year: "2018-2020",
      link: "https://school.edu",
      color: "text-blue-600" 
    },
    { 
      icon: Book, 
      title: "Continuous Learning", 
      subtitle: "Online Courses & Certifications",
      year: "Ongoing",
      link: "https://coursera.org",
      color: "text-blue-600" 
    },
  ];

  const codingItems = [
    { 
      icon: Code, 
      title: "LeetCode: 500+ Problems", 
      subtitle: "Data Structures & Algorithms",
      link: "https://leetcode.com/lifeispranav",
      color: "text-purple-600" 
    },
    { 
      icon: Github, 
      title: "GitHub: 50+ Repositories", 
      subtitle: "Open Source Projects",
      link: "https://github.com/lifeispranav",
      color: "text-purple-600" 
    },
    { 
      icon: Star, 
      title: "Open Source Contributor", 
      subtitle: "Community Projects",
      link: "https://github.com/lifeispranav",
      color: "text-purple-600" 
    },
  ];

  const achievementItems = [
    { 
      icon: Trophy, 
      title: "Hackathon Winner 2024", 
      subtitle: "TechFest Innovation Challenge",
      link: "https://techfest2024.com",
      color: "text-yellow-600" 
    },
    { 
      icon: Award, 
      title: "Dean's List Scholar", 
      subtitle: "Academic Excellence Award",
      link: "#",
      color: "text-yellow-600" 
    },
    { 
      icon: Medal, 
      title: "Top 5% Developer", 
      subtitle: "HackerRank Global Ranking",
      link: "https://hackerrank.com/lifeispranav",
      color: "text-yellow-600" 
    },
  ];

  return (
    <section className="py-8 md:py-16 bg-white dark:bg-gray-900 transition-colors duration-300" id="profile">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-convrt-purple/10 dark:bg-convrt-purple/20 text-convrt-purple mb-6">
            <Users className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium font-inter tracking-wide">My Journey</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-convrt-dark-blue dark:text-white mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-convrt-dark-blue/80 dark:text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
            Drag the sliders to explore my educational background, coding experience, and professional achievements.
          </p>
        </div>

        <div className="relative select-none">
          <div 
            ref={sliderContainerRef}
            className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden border-2 border-gray-200 dark:border-gray-700 shadow-2xl bg-gradient-to-r from-blue-50 via-purple-50 to-yellow-50 dark:from-gray-800 dark:to-gray-800"
            style={{ userSelect: 'none' }}
          >
            {/* Education Section - LEFT ALIGNED */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 flex items-center"
              style={{ 
                clipPath: `inset(0 ${100 - firstSliderPosition}% 0 0)`,
                userSelect: 'none'
              }}
            >
              <div className="w-full p-4 md:p-8 text-left" style={{ userSelect: 'none' }}>
                <div className="flex items-center justify-start mb-6">
                  <Target className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
                  <h3 className="text-2xl md:text-3xl font-bold text-blue-700 dark:text-blue-400">EDUCATION</h3>
                </div>
                <div className="space-y-4 md:space-y-6">
                  {educationItems.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500"
                      style={{ userSelect: 'none' }}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-3 flex-1">
                          <item.icon className={`w-5 h-5 md:w-6 md:h-6 ${item.color} mt-1`} />
                          <div>
                            <h4 className="text-sm md:text-base font-semibold text-blue-800 dark:text-blue-300">{item.title}</h4>
                            <p className="text-xs md:text-sm text-blue-600 dark:text-blue-400">{item.subtitle}</p>
                            {item.year && (
                              <div className="flex items-center mt-1">
                                <Calendar className="w-3 h-3 mr-1 text-blue-500" />
                                <span className="text-xs text-blue-500">{item.year}</span>
                              </div>
                            )}
                          </div>
                        </div>
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:text-blue-700 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Coding Experience Section - CENTER ALIGNED */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 flex items-center justify-center"
              style={{ 
                clipPath: `inset(0 ${100 - secondSliderPosition}% 0 ${firstSliderPosition}%)`,
                userSelect: 'none'
              }}
            >
              <div className="text-center p-4 md:p-8" style={{ userSelect: 'none' }}>
                <div className="flex items-center justify-center mb-6">
                  <Code className="w-8 h-8 text-purple-600 dark:text-purple-400 mr-3" />
                  <h3 className="text-2xl md:text-3xl font-bold text-purple-700 dark:text-purple-400">EXPERIENCE</h3>
                </div>
                <div className="space-y-4 md:space-y-6">
                  {codingItems.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-700"
                      style={{ userSelect: 'none' }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <item.icon className={`w-5 h-5 md:w-6 md:h-6 ${item.color}`} />
                          <div className="text-left">
                            <h4 className="text-sm md:text-base font-semibold text-purple-800 dark:text-purple-300">{item.title}</h4>
                            <p className="text-xs md:text-sm text-purple-600 dark:text-purple-400">{item.subtitle}</p>
                          </div>
                        </div>
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-purple-500 hover:text-purple-700 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Achievements Section - RIGHT ALIGNED */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-yellow-100 to-yellow-200 dark:from-yellow-900/30 dark:to-yellow-800/30 flex items-center"
              style={{ 
                clipPath: `inset(0 0 0 ${secondSliderPosition}%)`,
                userSelect: 'none'
              }}
            >
              <div className="w-full p-4 md:p-8 flex justify-end" style={{ userSelect: 'none' }}>
                <div className="text-right max-w-md">
                  <div className="flex items-center justify-end mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-yellow-700 dark:text-yellow-400 mr-3">ACHIEVEMENTS</h3>
                    <Briefcase className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div className="space-y-4 md:space-y-6">
                    {achievementItems.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border-r-4 border-yellow-500"
                        style={{ userSelect: 'none' }}
                      >
                        <div className="flex items-start justify-between">
                          <a 
                            href={item.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-yellow-500 hover:text-yellow-700 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                          <div className="flex items-start space-x-3 flex-1 text-right">
                            <div>
                              <h4 className="text-sm md:text-base font-semibold text-yellow-800 dark:text-yellow-300">{item.title}</h4>
                              <p className="text-xs md:text-sm text-yellow-600 dark:text-yellow-400">{item.subtitle}</p>
                            </div>
                            <item.icon className={`w-5 h-5 md:w-6 md:h-6 ${item.color} mt-1`} />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* First Slider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-convrt-purple cursor-col-resize z-10"
              style={{ left: `${firstSliderPosition}%`, userSelect: 'none' }}
              onMouseDown={(e) => {
                e.preventDefault();
                setIsDraggingFirst(true);
              }}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-7 h-7 md:w-8 md:h-8 bg-convrt-purple rounded-full shadow-lg flex items-center justify-center border-2 border-white">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>

            {/* Second Slider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-convrt-purple cursor-col-resize z-10"
              style={{ left: `${secondSliderPosition}%`, userSelect: 'none' }}
              onMouseDown={(e) => {
                e.preventDefault();
                setIsDraggingSecond(true);
              }}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-7 h-7 md:w-8 md:h-8 bg-convrt-purple rounded-full shadow-lg flex items-center justify-center border-2 border-white">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Labels */}
          <div className="flex justify-between mt-4 px-2 md:px-4" style={{ userSelect: 'none' }}>
            <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm md:text-base flex items-center">
              <GraduationCap className="w-4 h-4 mr-1" />
              Education
            </span>
            <span className="text-purple-600 dark:text-purple-400 font-semibold text-sm md:text-base flex items-center">
              <Code className="w-4 h-4 mr-1" />
              Experience
            </span>
            <span className="text-yellow-600 dark:text-yellow-400 font-semibold text-sm md:text-base flex items-center">
              <Trophy className="w-4 h-4 mr-1" />
              Achievements
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImagePortionSlider;
