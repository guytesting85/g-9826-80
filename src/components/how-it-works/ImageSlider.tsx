
import React, { useState, useRef, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

interface ImageSliderProps {
  beforeImage: string;
  afterImage: string;
  altText: string;
  className?: string;
}

const ImageSlider = ({ beforeImage, afterImage, altText, className = "" }: ImageSliderProps) => {
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

  return (
    <div 
      ref={sliderRef}
      className={`relative rounded-2xl overflow-hidden border-2 border-gray-200 dark:border-gray-700 shadow-lg bg-white dark:bg-gray-800 ${className}`}
    >
      {/* Before Image */}
      <div 
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img 
          src={beforeImage} 
          alt={`Before: ${altText}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* After Image */}
      <div 
        className="absolute inset-0"
        style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
      >
        <img 
          src={afterImage} 
          alt={`After: ${altText}`}
          className="w-full h-full object-cover"
        />
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
  );
};

export default ImageSlider;
