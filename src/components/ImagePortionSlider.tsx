
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Target, TrendingUp, Users, MessageCircle, Calendar, BarChart3 } from 'lucide-react';

const ImagePortionSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    
    const rect = sliderRef.current.getBoundingClientRect();
    const newPosition = ((e.clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, newPosition)));
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  const beforeFeatures = [
    { icon: Target, text: "Random cold outreach", color: "text-red-500" },
    { icon: MessageCircle, text: "Generic messages", color: "text-red-500" },
    { icon: TrendingUp, text: "1% response rates", color: "text-red-500" },
  ];

  const afterFeatures = [
    { icon: Users, text: "AI-warmed prospects", color: "text-green-500" },
    { icon: Calendar, text: "Personalized touchpoints", color: "text-green-500" },
    { icon: BarChart3, text: "15x higher conversions", color: "text-green-500" },
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300" id="transformation">
      <div className="container-section max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="section-tag">See the Transformation</div>
          <h2 className="heading-lg text-convrt-dark-blue dark:text-white mb-6">
            Before vs After <span className="gradient-text">Convrt.ai</span>
          </h2>
          <p className="text-convrt-dark-blue/80 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Drag the slider to see how our AI transforms your outreach from cold and ignored to warm and converting.
          </p>
        </div>

        <div className="relative">
          <div 
            ref={sliderRef}
            className="relative h-[500px] rounded-2xl overflow-hidden border-4 border-convrt-purple/20 dark:border-gray-700 shadow-2xl bg-gradient-to-r from-red-50 to-green-50 dark:from-gray-800 dark:to-gray-800"
          >
            {/* Before Image */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900/30 dark:to-red-800/30 flex items-center justify-center"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
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

            {/* After Image */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30 flex items-center justify-center"
              style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
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

            {/* Slider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-convrt-purple cursor-col-resize z-10"
              style={{ left: `${sliderPosition}%` }}
              onMouseDown={() => setIsDragging(true)}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-convrt-purple rounded-full shadow-lg flex items-center justify-center">
                <ChevronRight className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

          {/* Labels */}
          <div className="flex justify-between mt-4 px-4">
            <span className="text-red-600 dark:text-red-400 font-semibold">Traditional Outbound</span>
            <span className="text-green-600 dark:text-green-400 font-semibold">AI Organic Outbound</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImagePortionSlider;
