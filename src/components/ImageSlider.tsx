
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Slider } from '@/components/ui/slider';

const ImageSlider = () => {
  const [sliderValue, setSliderValue] = useState([50]);

  const handleSliderChange = (value: number[]) => {
    setSliderValue(value);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container-section max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            See the Transformation
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Slide to see how our AI transforms your outreach from ignored to influential
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Image Container */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <div className="relative h-96 bg-gradient-to-r from-gray-200 to-gray-300">
              {/* Before Image (Left side) */}
              <div 
                className="absolute inset-0 bg-gradient-to-r from-red-100 to-red-200 flex items-center justify-center"
                style={{ 
                  clipPath: `polygon(0 0, ${sliderValue[0]}% 0, ${sliderValue[0]}% 100%, 0 100%)` 
                }}
              >
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">📧</div>
                  <h3 className="text-2xl font-bold text-red-700 mb-2">Before</h3>
                  <p className="text-red-600">Generic, Ignored Messages</p>
                  <div className="mt-4 space-y-2">
                    <div className="bg-red-300/50 p-3 rounded-lg text-sm">
                      "Hi, I hope this email finds you well..."
                    </div>
                    <div className="bg-red-300/50 p-3 rounded-lg text-sm">
                      "I wanted to reach out about our product..."
                    </div>
                  </div>
                </div>
              </div>

              {/* After Image (Right side) */}
              <div 
                className="absolute inset-0 bg-gradient-to-r from-green-100 to-green-200 flex items-center justify-center"
                style={{ 
                  clipPath: `polygon(${sliderValue[0]}% 0, 100% 0, 100% 100%, ${sliderValue[0]}% 100%)` 
                }}
              >
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🚀</div>
                  <h3 className="text-2xl font-bold text-green-700 mb-2">After</h3>
                  <p className="text-green-600">Personalized, Engaging Outreach</p>
                  <div className="mt-4 space-y-2">
                    <div className="bg-green-300/50 p-3 rounded-lg text-sm">
                      "Saw your recent post about automation..."
                    </div>
                    <div className="bg-green-300/50 p-3 rounded-lg text-sm">
                      "Your Q4 results are impressive! Here's how..."
                    </div>
                  </div>
                </div>
              </div>

              {/* Slider Handle */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10"
                style={{ left: `${sliderValue[0]}%`, transform: 'translateX(-50%)' }}
              >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-gray-300">
                  <div className="w-1 h-4 bg-gray-400 rounded"></div>
                </div>
              </div>
            </div>

            {/* Slider Control */}
            <div className="absolute bottom-4 left-4 right-4">
              <Slider
                value={sliderValue}
                onValueChange={handleSliderChange}
                max={100}
                min={0}
                step={1}
                className="w-full"
              />
            </div>
          </div>

          {/* Labels */}
          <div className="flex justify-between mt-4 text-sm font-medium">
            <span className="text-red-600">Traditional Outbound</span>
            <span className="text-green-600">AI-Powered Outreach</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
