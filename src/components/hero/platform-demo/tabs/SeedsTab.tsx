
import React from 'react';
import { User } from 'lucide-react';

const SeedsTab = () => {
  const seeds = [
    { name: "Michael Anderson", company: "TechCorp", status: "Warm", interactions: 5, stage: "Qualified" },
    { name: "Sarah Chen", company: "TechStart", status: "Hot", interactions: 8, stage: "Proposal" },
    { name: "David Kim", company: "InnovateLab", status: "Cold", interactions: 2, stage: "Research" }
  ];

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Hot': return 'bg-red-100 text-red-700';
      case 'Warm': return 'bg-orange-100 text-orange-700';
      default: return 'bg-blue-100 text-blue-700';
    }
  };

  return (
    <div className="space-y-4">
      {seeds.map((seed, i) => (
        <div key={i} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                <User className="w-6 h-6 text-gray-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900 text-base">{seed.name}</h4>
                <p className="text-sm text-gray-500">{seed.company}</p>
              </div>
            </div>
            <div className="text-right">
              <div className={`text-sm px-3 py-1 rounded-full font-medium ${getStatusStyle(seed.status)}`}>
                {seed.status}
              </div>
              <p className="text-sm text-gray-500 mt-1">{seed.interactions} interactions</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SeedsTab;
