
import React, { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImagePortionSlider = () => {
  const [sliderValue, setSliderValue] = useState(50);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const slides = [
    {
      title: "Response Rate Transformation",
      before: {
        icon: "📉",
        title: "Before AI",
        stats: ["2% Response Rate", "Generic Messages", "No Personalization"]
      },
      after: {
        icon: "📈",
        title: "After AI",
        stats: ["47% Response Rate", "Personalized Messages", "Perfect Timing"]
      }
    },
    {
      title: "Lead Quality Enhancement",
      before: {
        icon: "🎯",
        title: "Before AI",
        stats: ["20% Qualified Leads", "Random Targeting", "High Bounce Rate"]
      },
      after: {
        icon: "🏆",
        title: "After AI",
        stats: ["85% Qualified Leads", "Smart Targeting", "High Engagement"]
      }
    },
    {
      title: "Time Efficiency Boost",
      before: {
        icon: "⏰",
        title: "Before AI",
        stats: ["8 Hours/Day Manual", "Repetitive Tasks", "Slow Follow-ups"]
      },
      after: {
        icon: "⚡",
        title: "After AI",
        stats: ["2 Hours/Day Oversight", "Automated Tasks", "Instant Follow-ups"]
      }
    }
  ];

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true);
    updateSliderValue(e);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (isDragging) {
      updateSliderValue(e);
    }
  }, [isDragging]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setIsDragging(true);
    updateSliderValueTouch(e);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (isDragging) {
      updateSliderValueTouch(e);
    }
  }, [isDragging]);

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  const updateSliderValue = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderValue(percentage);
    }
  };

  const updateSliderValueTouch = (e: React.TouchEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.touches[0].clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderValue(percentage);
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setSliderValue(50); // Reset slider position
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setSliderValue(50); // Reset slider position
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section className="py-16 bg-white">
      <div className="container-section max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-convrt-dark-blue">See the Transformation</h2>
          <p className="text-xl text-convrt-dark-blue/80 mb-8">
            Drag the slider to see how our AI transforms your outreach results
          </p>
        </motion.div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-convrt-dark-blue" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-convrt-dark-blue" />
          </button>

          {/* Slide Container */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl cursor-ew-resize"
              ref={containerRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Before Image */}
              <div 
                className="absolute inset-0 bg-gradient-to-r from-red-100 to-red-200 flex items-center justify-center"
                style={{
                  clipPath: `polygon(0 0, ${sliderValue}% 0, ${sliderValue}% 100%, 0 100%)`
                }}
              >
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">{currentSlideData.before.icon}</div>
                  <h3 className="text-2xl font-bold text-red-800 mb-2">{currentSlideData.before.title}</h3>
                  {currentSlideData.before.stats.map((stat, index) => (
                    <p key={index} className="text-red-700">{stat}</p>
                  ))}
                </div>
              </div>

              {/* After Image */}
              <div 
                className="absolute inset-0 bg-gradient-to-r from-green-100 to-green-200 flex items-center justify-center"
                style={{
                  clipPath: `polygon(${sliderValue}% 0, 100% 0, 100% 100%, ${sliderValue}% 100%)`
                }}
              >
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">{currentSlideData.after.icon}</div>
                  <h3 className="text-2xl font-bold text-green-800 mb-2">{currentSlideData.after.title}</h3>
                  {currentSlideData.after.stats.map((stat, index) => (
                    <p key={index} className="text-green-700">{stat}</p>
                  ))}
                </div>
              </div>

              {/* Slider Line */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10 pointer-events-none"
                style={{ left: `${sliderValue}%`, transform: 'translateX(-50%)' }}
              >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <div className="w-2 h-2 bg-convrt-purple rounded-full"></div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                  setSliderValue(50);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-convrt-purple' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          {/* Slide Title */}
          <div className="text-center mt-4">
            <h3 className="text-lg font-semibold text-convrt-dark-blue">
              {currentSlideData.title}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImagePortionSlider;
