
import React from 'react';

const HeatboxTab = () => {
  const platforms = [
    { platform: 'LinkedIn', percentage: 89, color: 'convrt-purple' },
    { platform: 'Twitter', percentage: 67, color: 'blue-600' },
    { platform: 'Facebook', percentage: 45, color: 'green-600' },
    { platform: 'Reddit', percentage: 23, color: 'orange-600' }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-6">
        {platforms.map((item, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <span className="font-medium text-gray-700">{item.platform}</span>
              <span className={`text-${item.color} font-bold text-lg`}>{item.percentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className={`bg-${item.color} h-3 rounded-full transition-all duration-1000`} 
                style={{width: `${item.percentage}%`}}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeatboxTab;
