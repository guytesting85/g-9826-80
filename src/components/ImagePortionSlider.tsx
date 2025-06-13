
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Book, Code, Github, Trophy, Star, Award, School, ExternalLink, Calendar, Target, Zap, Users, Rocket } from 'lucide-react';

const ImagePortionSlider = () => {
  const [firstSliderPosition, setFirstSliderPosition] = useState(33.33);
  const [secondSliderPosition, setSecondSliderPosition] = useState(66.66);
  const sliderContainerRef = useRef<HTMLDivElement>(null);
  const [isDraggingFirst, setIsDraggingFirst] = useState(false);
  const [isDraggingSecond, setIsDraggingSecond] = useState(false);

  const handleMouseMove = (e: MouseEvent) => {
    if (!sliderContainerRef.current) return;
    
    const rect = sliderContainerRef.current.getBoundingClientRect();
    const newPosition = ((e.clientX - rect.left) / rect.width) * 100;
    
    if (isDraggingFirst) {
      const maxPosition = secondSliderPosition - 10;
      setFirstSliderPosition(Math.max(5, Math.min(maxPosition, newPosition)));
    }
    
    if (isDraggingSecond) {
      const minPosition = firstSliderPosition + 10;
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

  const educationFeatures = [
    { 
      icon: GraduationCap, 
      text: "Bachelor's in Computer Science", 
      color: "text-blue-600", 
      link: "https://university.edu/cs", 
      description: "GPA: 3.8/4.0"
    },
    { 
      icon: School, 
      text: "High School - Science Stream", 
      color: "text-blue-600", 
      link: "https://school.edu", 
      description: "95% aggregate"
    },
    { 
      icon: Book, 
      text: "Continuous Learning", 
      color: "text-blue-600", 
      link: "https://coursera.org/learner/pranav", 
      description: "50+ Certificates"
    },
  ];

  const codingFeatures = [
    { 
      icon: Code, 
      text: "LeetCode: 500+ Problems", 
      color: "text-purple-600", 
      link: "https://leetcode.com/u/lifeispranav/", 
      description: "Knight Badge"
    },
    { 
      icon: Github, 
      text: "GitHub: 50+ Repositories", 
      color: "text-purple-600", 
      link: "https://github.com/lifeispranav", 
      description: "100+ commits"
    },
    { 
      icon: Star, 
      text: "Open Source Contributor", 
      color: "text-purple-600", 
      link: "https://github.com/lifeispranav", 
      description: "Multiple PRs"
    },
  ];

  const achievementFeatures = [
    { 
      icon: Trophy, 
      text: "Hackathon Winner 2024", 
      color: "text-yellow-600", 
      link: "https://devpost.com/pranav", 
      description: "1st Place"
    },
    { 
      icon: Award, 
      text: "Dean's List Scholar", 
      color: "text-yellow-600", 
      link: "https://university.edu/honors", 
      description: "3 Semesters"
    },
    { 
      icon: Rocket, 
      text: "Top 5% Developer", 
      color: "text-yellow-600", 
      link: "https://stackoverflow.com/users/pranav", 
      description: "High Rank"
    },
  ];

  const handleFeatureClick = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-8 md:py-16 bg-white dark:bg-gray-900 transition-colors duration-300" id="profile">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-convrt-purple/10 dark:bg-convrt-purple/20 text-convrt-purple mb-6">
            <span className="text-sm font-medium font-inter tracking-wide">My Journey</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-convrt-dark-blue dark:text-white mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-convrt-dark-blue/80 dark:text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
            Drag the sliders to explore my educational background, coding experience, and professional achievements.
          </p>
        </div>

        <div className="relative select-none">
          <div 
            ref={sliderContainerRef}
            className="relative h-[450px] md:h-[550px] rounded-3xl overflow-hidden border-4 border-gradient-to-r from-blue-300 via-purple-300 to-yellow-300 dark:border-gray-700 shadow-2xl bg-gradient-to-br from-slate-50 via-purple-50 to-amber-50 dark:from-gray-800 dark:to-gray-800"
            style={{ userSelect: 'none' }}
          >
            {/* Education Section */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 dark:from-blue-900/40 dark:via-blue-800/40 dark:to-blue-700/40 flex flex-col justify-center"
              style={{ 
                clipPath: `inset(0 ${100 - firstSliderPosition}% 0 0)`,
                userSelect: 'none'
              }}
            >
              <div className="text-center p-4 md:p-8" style={{ userSelect: 'none' }}>
                <div className="flex items-center justify-center mb-6">
                  <Calendar className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-2xl md:text-3xl font-bold text-blue-700 dark:text-blue-400">EDUCATION</h3>
                </div>
                <div className="space-y-4 md:space-y-6">
                  {educationFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group cursor-pointer p-3 rounded-lg bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-800/40 transition-all duration-300"
                      style={{ userSelect: 'none' }}
                      onClick={() => handleFeatureClick(feature.link)}
                    >
                      <div className="flex items-center justify-center space-x-3 mb-2">
                        <feature.icon className={`w-5 h-5 md:w-6 md:h-6 ${feature.color} group-hover:scale-110 transition-transform`} />
                        <span className="text-sm md:text-lg font-semibold text-blue-800 dark:text-blue-300">{feature.text}</span>
                        <ExternalLink className="w-4 h-4 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-xs md:text-sm text-blue-700 dark:text-blue-400">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Coding Experience Section */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-purple-100 via-purple-200 to-purple-300 dark:from-purple-900/40 dark:via-purple-800/40 dark:to-purple-700/40 flex flex-col justify-center"
              style={{ 
                clipPath: `inset(0 ${100 - secondSliderPosition}% 0 ${firstSliderPosition}%)`,
                userSelect: 'none'
              }}
            >
              <div className="text-center p-4 md:p-8" style={{ userSelect: 'none' }}>
                <div className="flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-purple-600 mr-3" />
                  <h3 className="text-2xl md:text-3xl font-bold text-purple-700 dark:text-purple-400">CODING EXPERIENCE</h3>
                </div>
                <div className="space-y-4 md:space-y-6">
                  {codingFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group cursor-pointer p-3 rounded-lg bg-purple-50 dark:bg-purple-900/30 hover:bg-purple-100 dark:hover:bg-purple-800/40 transition-all duration-300"
                      style={{ userSelect: 'none' }}
                      onClick={() => handleFeatureClick(feature.link)}
                    >
                      <div className="flex items-center justify-center space-x-3 mb-2">
                        <feature.icon className={`w-5 h-5 md:w-6 md:h-6 ${feature.color} group-hover:scale-110 transition-transform`} />
                        <span className="text-sm md:text-lg font-semibold text-purple-800 dark:text-purple-300">{feature.text}</span>
                        <ExternalLink className="w-4 h-4 text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-xs md:text-sm text-purple-700 dark:text-purple-400">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Achievements Section */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-yellow-100 via-yellow-200 to-yellow-300 dark:from-yellow-900/40 dark:via-yellow-800/40 dark:to-yellow-700/40 flex flex-col justify-center"
              style={{ 
                clipPath: `inset(0 0 0 ${secondSliderPosition}%)`,
                userSelect: 'none'
              }}
            >
              <div className="text-center p-4 md:p-8" style={{ userSelect: 'none' }}>
                <div className="flex items-center justify-center mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-yellow-700 dark:text-yellow-400">ACHIEVEMENTS</h3>
                  <Users className="w-8 h-8 text-yellow-600 ml-3" />
                </div>
                <div className="space-y-4 md:space-y-6">
                  {achievementFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group cursor-pointer p-3 rounded-lg bg-yellow-50 dark:bg-yellow-900/30 hover:bg-yellow-100 dark:hover:bg-yellow-800/40 transition-all duration-300"
                      style={{ userSelect: 'none' }}
                      onClick={() => handleFeatureClick(feature.link)}
                    >
                      <div className="flex items-center justify-center space-x-3 mb-2">
                        <ExternalLink className="w-4 h-4 text-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <feature.icon className={`w-5 h-5 md:w-6 md:h-6 ${feature.color} group-hover:scale-110 transition-transform`} />
                        <span className="text-sm md:text-lg font-semibold text-yellow-800 dark:text-yellow-300">{feature.text}</span>
                      </div>
                      <p className="text-xs md:text-sm text-yellow-700 dark:text-yellow-400">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* First Slider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-2 bg-gradient-to-b from-blue-500 to-purple-500 cursor-col-resize z-10 shadow-lg"
              style={{ left: `${firstSliderPosition}%`, userSelect: 'none' }}
              onMouseDown={(e) => {
                e.preventDefault();
                setIsDraggingFirst(true);
              }}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-xl flex items-center justify-center border-2 border-white group hover:scale-110 transition-transform">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Second Slider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-2 bg-gradient-to-b from-purple-500 to-yellow-500 cursor-col-resize z-10 shadow-lg"
              style={{ left: `${secondSliderPosition}%`, userSelect: 'none' }}
              onMouseDown={(e) => {
                e.preventDefault();
                setIsDraggingSecond(true);
              }}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-purple-500 to-yellow-600 rounded-full shadow-xl flex items-center justify-center border-2 border-white group hover:scale-110 transition-transform">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Enhanced Labels */}
          <div className="flex justify-between mt-6 px-2 md:px-4" style={{ userSelect: 'none' }}>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
              <span className="text-blue-600 dark:text-blue-400 font-bold text-sm md:text-base">Education</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full"></div>
              <span className="text-purple-600 dark:text-purple-400 font-bold text-sm md:text-base">Experience</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></div>
              <span className="text-yellow-600 dark:text-yellow-400 font-bold text-sm md:text-base">Achievements</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImagePortionSlider;
