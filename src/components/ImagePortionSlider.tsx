
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Slider } from '@/components/ui/slider';

const ImagePortionSlider = () => {
  const [sliderValue, setSliderValue] = useState([50]);

  return (
    <section className="py-16 bg-white">
      <div className="container-section max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-convrt-dark-blue">See the Transformation</h2>
          <p className="text-xl text-convrt-dark-blue/80 mb-8">
            Slide to see how our AI transforms your outreach results
          </p>
        </motion.div>

        <div className="relative">
          <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
            {/* Before Image */}
            <div 
              className="absolute inset-0 bg-gradient-to-r from-red-100 to-red-200 flex items-center justify-center"
              style={{
                clipPath: `polygon(0 0, ${sliderValue[0]}% 0, ${sliderValue[0]}% 100%, 0 100%)`
              }}
            >
              <div className="text-center p-8">
                <div className="text-6xl mb-4">📉</div>
                <h3 className="text-2xl font-bold text-red-800 mb-2">Before AI</h3>
                <p className="text-red-700">2% Response Rate</p>
                <p className="text-red-700">Generic Messages</p>
                <p className="text-red-700">No Personalization</p>
              </div>
            </div>

            {/* After Image */}
            <div 
              className="absolute inset-0 bg-gradient-to-r from-green-100 to-green-200 flex items-center justify-center"
              style={{
                clipPath: `polygon(${sliderValue[0]}% 0, 100% 0, 100% 100%, ${sliderValue[0]}% 100%)`
              }}
            >
              <div className="text-center p-8">
                <div className="text-6xl mb-4">📈</div>
                <h3 className="text-2xl font-bold text-green-800 mb-2">After AI</h3>
                <p className="text-green-700">47% Response Rate</p>
                <p className="text-green-700">Personalized Messages</p>
                <p className="text-green-700">Perfect Timing</p>
              </div>
            </div>

            {/* Slider Line */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10"
              style={{ left: `${sliderValue[0]}%`, transform: 'translateX(-50%)' }}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                <div className="w-2 h-2 bg-convrt-purple rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Slider Control */}
          <div className="mt-8 px-4">
            <Slider 
              value={sliderValue}
              onValueChange={setSliderValue}
              max={100}
              min={0}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between mt-2 text-sm text-gray-600">
              <span>Before</span>
              <span>After</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImagePortionSlider;
