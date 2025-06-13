
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, GraduationCap, Book, Code, Github, Trophy, Star, Award, School } from 'lucide-react';

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
    { icon: GraduationCap, text: "Bachelor's in Computer Science", color: "text-blue-600" },
    { icon: School, text: "High School - Science Stream", color: "text-blue-600" },
    { icon: Book, text: "Continuous Learning", color: "text-blue-600" },
  ];

  const codingFeatures = [
    { icon: Code, text: "LeetCode: 500+ Problems", color: "text-purple-600" },
    { icon: Github, text: "GitHub: 50+ Repositories", color: "text-purple-600" },
    { icon: Star, text: "Open Source Contributor", color: "text-purple-600" },
  ];

  const achievementFeatures = [
    { icon: Trophy, text: "Hackathon Winner 2024", color: "text-yellow-600" },
    { icon: Award, text: "Dean's List Scholar", color: "text-yellow-600" },
    { icon: Star, text: "Top 5% Developer", color: "text-yellow-600" },
  ];

  return (
    <section className="py-8 md:py-16 bg-white dark:bg-gray-900 transition-colors duration-300" id="profile">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-convrt-purple/10 dark:bg-convrt-purple/20 text-convrt-purple mb-6">
            <span className="text-sm font-medium font-inter tracking-wide">My Journey</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-convrt-dark-blue dark:text-white mb-6">
            Education vs Experience vs <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-convrt-dark-blue/80 dark:text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
            Drag the sliders to explore my educational background, coding experience, and professional achievements.
          </p>
        </div>

        <div className="relative select-none" style={{ userSelect: 'none' }}>
          <div 
            ref={sliderContainerRef}
            className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden border-4 border-convrt-purple/20 dark:border-gray-700 shadow-2xl bg-gradient-to-r from-blue-50 via-purple-50 to-yellow-50 dark:from-gray-800 dark:to-gray-800 transform rotate-1"
            style={{ userSelect: 'none' }}
          >
            {/* Education Section */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 flex items-center justify-center"
              style={{ 
                clipPath: `inset(0 ${100 - firstSliderPosition}% 0 0)`,
                userSelect: 'none'
              }}
            >
              <div className="text-center p-4 md:p-8" style={{ userSelect: 'none' }}>
                <h3 className="text-2xl md:text-3xl font-bold text-blue-700 dark:text-blue-400 mb-6 md:mb-8">EDUCATION</h3>
                <div className="space-y-4 md:space-y-6">
                  {educationFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-center space-x-3"
                      style={{ userSelect: 'none' }}
                    >
                      <feature.icon className={`w-5 h-5 md:w-6 md:h-6 ${feature.color}`} />
                      <span className="text-sm md:text-lg font-medium text-blue-800 dark:text-blue-300">{feature.text}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-6 md:mt-8 p-3 md:p-4 bg-blue-200 dark:bg-blue-900/50 rounded-lg">
                  <p className="text-blue-800 dark:text-blue-300 font-semibold text-sm md:text-base">Strong academic foundation</p>
                </div>
              </div>
            </div>

            {/* Coding Experience Section */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 flex items-center justify-center"
              style={{ 
                clipPath: `inset(0 ${100 - secondSliderPosition}% 0 ${firstSliderPosition}%)`,
                userSelect: 'none'
              }}
            >
              <div className="text-center p-4 md:p-8" style={{ userSelect: 'none' }}>
                <h3 className="text-2xl md:text-3xl font-bold text-purple-700 dark:text-purple-400 mb-6 md:mb-8">CODING EXPERIENCE</h3>
                <div className="space-y-4 md:space-y-6">
                  {codingFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-center space-x-3"
                      style={{ userSelect: 'none' }}
                    >
                      <feature.icon className={`w-5 h-5 md:w-6 md:h-6 ${feature.color}`} />
                      <span className="text-sm md:text-lg font-medium text-purple-800 dark:text-purple-300">{feature.text}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-6 md:mt-8 p-3 md:p-4 bg-purple-200 dark:bg-purple-900/50 rounded-lg">
                  <p className="text-purple-800 dark:text-purple-300 font-semibold text-sm md:text-base">Hands-on development skills</p>
                </div>
              </div>
            </div>

            {/* Achievements Section */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-yellow-100 to-yellow-200 dark:from-yellow-900/30 dark:to-yellow-800/30 flex items-center justify-center"
              style={{ 
                clipPath: `inset(0 0 0 ${secondSliderPosition}%)`,
                userSelect: 'none'
              }}
            >
              <div className="text-center p-4 md:p-8" style={{ userSelect: 'none' }}>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-700 dark:text-yellow-400 mb-6 md:mb-8">ACHIEVEMENTS</h3>
                <div className="space-y-4 md:space-y-6">
                  {achievementFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-center space-x-3"
                      style={{ userSelect: 'none' }}
                    >
                      <feature.icon className={`w-5 h-5 md:w-6 md:h-6 ${feature.color}`} />
                      <span className="text-sm md:text-lg font-medium text-yellow-800 dark:text-yellow-300">{feature.text}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-6 md:mt-8 p-3 md:p-4 bg-yellow-200 dark:bg-yellow-900/50 rounded-lg">
                  <p className="text-yellow-800 dark:text-yellow-300 font-semibold text-sm md:text-base">Recognition and excellence</p>
                </div>
              </div>
            </div>

            {/* First Slider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-convrt-purple cursor-col-resize z-10 transform -rotate-3"
              style={{ left: `${firstSliderPosition}%`, userSelect: 'none' }}
              onMouseDown={(e) => {
                e.preventDefault();
                setIsDraggingFirst(true);
              }}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-7 h-7 md:w-8 md:h-8 bg-convrt-purple rounded-full shadow-lg flex items-center justify-center">
                <ChevronRight className="w-3 h-3 md:w-4 md:h-4 text-white" />
              </div>
            </div>

            {/* Second Slider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-convrt-purple cursor-col-resize z-10 transform rotate-3"
              style={{ left: `${secondSliderPosition}%`, userSelect: 'none' }}
              onMouseDown={(e) => {
                e.preventDefault();
                setIsDraggingSecond(true);
              }}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-7 h-7 md:w-8 md:h-8 bg-convrt-purple rounded-full shadow-lg flex items-center justify-center">
                <ChevronRight className="w-3 h-3 md:w-4 md:h-4 text-white" />
              </div>
            </div>
          </div>

          {/* Labels */}
          <div className="flex justify-between mt-4 px-2 md:px-4" style={{ userSelect: 'none' }}>
            <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm md:text-base">Education</span>
            <span className="text-purple-600 dark:text-purple-400 font-semibold text-sm md:text-base">Experience</span>
            <span className="text-yellow-600 dark:text-yellow-400 font-semibold text-sm md:text-base">Achievements</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImagePortionSlider;
