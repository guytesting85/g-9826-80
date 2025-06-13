
import React from 'react';
import { Bot } from 'lucide-react';

const AgentsTab = () => {
  const agents = [
    { name: "LinkedIn Engagement Bot", status: "Active", tasks: 12, efficiency: "94%" },
    { name: "Twitter Outreach Agent", status: "Active", tasks: 8, efficiency: "87%" },
    { name: "Content Interaction AI", status: "Paused", tasks: 0, efficiency: "91%" }
  ];

  const getStatusStyle = (status: string) => {
    return status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4">
        {agents.map((agent, i) => (
          <div key={i} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-convrt-purple/20 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-convrt-purple" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 text-base">{agent.name}</h4>
                  <p className="text-sm text-gray-500">{agent.tasks} active tasks</p>
                </div>
              </div>
              <div className="text-right">
                <div className={`text-sm px-3 py-1 rounded-full font-medium ${getStatusStyle(agent.status)}`}>
                  {agent.status}
                </div>
                <p className="text-sm text-convrt-purple font-medium mt-1">{agent.efficiency} efficiency</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgentsTab;
