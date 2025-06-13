
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Target, TrendingUp, Users, MessageCircle, Calendar, BarChart3, Zap, Brain, Rocket } from 'lucide-react';

const ImagePortionSlider = () => {
  const [firstSliderPosition, setFirstSliderPosition] = useState(33);
  const [secondSliderPosition, setSecondSliderPosition] = useState(67);
  const firstSliderRef = useRef<HTMLDivElement>(null);
  const secondSliderRef = useRef<HTMLDivElement>(null);
  const [isDraggingFirst, setIsDraggingFirst] = useState(false);
  const [isDraggingSecond, setIsDraggingSecond] = useState(false);

  const handleMouseMove = (e: MouseEvent) => {
    if (isDraggingFirst && firstSliderRef.current) {
      const rect = firstSliderRef.current.getBoundingClientRect();
      const newPosition = ((e.clientX - rect.left) / rect.width) * 100;
      setFirstSliderPosition(Math.max(0, Math.min(secondSliderPosition - 5, newPosition)));
    }
    
    if (isDraggingSecond && secondSliderRef.current) {
      const rect = secondSliderRef.current.getBoundingClientRect();
      const newPosition = ((e.clientX - rect.left) / rect.width) * 100;
      setSecondSliderPosition(Math.max(firstSliderPosition + 5, Math.min(100, newPosition)));
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
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDraggingFirst, isDraggingSecond, firstSliderPosition, secondSliderPosition]);

  const beforeFeatures = [
    { icon: Target, text: "Random cold outreach", color: "text-red-500" },
    { icon: MessageCircle, text: "Generic messages", color: "text-red-500" },
    { icon: TrendingUp, text: "1% response rates", color: "text-red-500" },
  ];

  const duringFeatures = [
    { icon: Brain, text: "AI-powered analysis", color: "text-yellow-500" },
    { icon: Zap, text: "Smart automation", color: "text-yellow-500" },
    { icon: BarChart3, text: "Real-time optimization", color: "text-yellow-500" },
  ];

  const afterFeatures = [
    { icon: Users, text: "AI-warmed prospects", color: "text-green-500" },
    { icon: Calendar, text: "Personalized touchpoints", color: "text-green-500" },
    { icon: Rocket, text: "15x higher conversions", color: "text-green-500" },
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300" id="transformation">
      <div className="container-section max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="section-tag">See the Transformation</div>
          <h2 className="heading-lg text-convrt-dark-blue dark:text-white mb-6">
            Before vs During vs After <span className="gradient-text">Convrt.ai</span>
          </h2>
          <p className="text-convrt-dark-blue/80 dark:text-gray-300 text-lg max-w-2xl mx-auto select-none">
            Drag the sliders to see how our AI transforms your outreach journey from cold and ignored to warm and converting.
          </p>
        </div>

        <div className="relative select-none">
          <div 
            ref={firstSliderRef}
            className="relative h-[500px] rounded-2xl overflow-hidden border-4 border-convrt-purple/20 dark:border-gray-700 shadow-2xl bg-gradient-to-r from-red-50 via-yellow-50 to-green-50 dark:from-gray-800 dark:to-gray-800 transform rotate-1"
          >
            {/* Before Section */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900/30 dark:to-red-800/30 flex items-center justify-center"
              style={{ clipPath: `inset(0 ${100 - firstSliderPosition}% 0 0)` }}
            >
              <div className="text-center p-8">
                <h3 className="text-3xl font-bold text-red-700 dark:text-red-400 mb-8">BEFORE</h3>
                <div className="space-y-6">
                  {beforeFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-center space-x-3"
                    >
                      <feature.icon className={`w-6 h-6 ${feature.color}`} />
                      <span className="text-lg font-medium text-red-800 dark:text-red-300">{feature.text}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-8 p-4 bg-red-200 dark:bg-red-900/50 rounded-lg">
                  <p className="text-red-800 dark:text-red-300 font-semibold">Cold outreach feels spammy</p>
                </div>
              </div>
            </div>

            {/* During Section */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-yellow-100 to-yellow-200 dark:from-yellow-900/30 dark:to-yellow-800/30 flex items-center justify-center"
              style={{ 
                clipPath: `inset(0 ${100 - secondSliderPosition}% 0 ${firstSliderPosition}%)` 
              }}
            >
              <div className="text-center p-8">
                <h3 className="text-3xl font-bold text-yellow-700 dark:text-yellow-400 mb-8">DURING</h3>
                <div className="space-y-6">
                  {duringFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-center space-x-3"
                    >
                      <feature.icon className={`w-6 h-6 ${feature.color}`} />
                      <span className="text-lg font-medium text-yellow-800 dark:text-yellow-300">{feature.text}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-8 p-4 bg-yellow-200 dark:bg-yellow-900/50 rounded-lg">
                  <p className="text-yellow-800 dark:text-yellow-300 font-semibold">AI optimizes your approach</p>
                </div>
              </div>
            </div>

            {/* After Section */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30 flex items-center justify-center"
              style={{ clipPath: `inset(0 0 0 ${secondSliderPosition}%)` }}
            >
              <div className="text-center p-8">
                <h3 className="text-3xl font-bold text-green-700 dark:text-green-400 mb-8">AFTER</h3>
                <div className="space-y-6">
                  {afterFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-center space-x-3"
                    >
                      <feature.icon className={`w-6 h-6 ${feature.color}`} />
                      <span className="text-lg font-medium text-green-800 dark:text-green-300">{feature.text}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-8 p-4 bg-green-200 dark:bg-green-900/50 rounded-lg">
                  <p className="text-green-800 dark:text-green-300 font-semibold">Warm prospects welcome your outreach</p>
                </div>
              </div>
            </div>

            {/* First Slider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-convrt-purple cursor-col-resize z-10 transform -rotate-2"
              style={{ left: `${firstSliderPosition}%` }}
              onMouseDown={() => setIsDraggingFirst(true)}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-convrt-purple rounded-full shadow-lg flex items-center justify-center">
                <ChevronRight className="w-4 h-4 text-white" />
              </div>
            </div>

            {/* Second Slider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-convrt-purple cursor-col-resize z-10 transform rotate-2"
              style={{ left: `${secondSliderPosition}%` }}
              onMouseDown={() => setIsDraggingSecond(true)}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-convrt-purple rounded-full shadow-lg flex items-center justify-center">
                <ChevronRight className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

          {/* Labels */}
          <div className="flex justify-between mt-4 px-4 select-none">
            <span className="text-red-600 dark:text-red-400 font-semibold">Traditional Outbound</span>
            <span className="text-yellow-600 dark:text-yellow-400 font-semibold">AI Processing</span>
            <span className="text-green-600 dark:text-green-400 font-semibold">AI Organic Outbound</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImagePortionSlider;
