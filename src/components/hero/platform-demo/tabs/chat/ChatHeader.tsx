
import React from 'react';
import { Users, Phone, Video, MoreVertical } from 'lucide-react';
import { User } from '../../../../../types';

interface ChatHeaderProps {
  users: Record<string, User>;
}

const ChatHeader = ({ users }: ChatHeaderProps) => (
  <div className="bg-convrt-purple text-white px-6 py-4 flex items-center justify-between">
    <div className="flex items-center space-x-3">
      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
        <Users className="w-5 h-5" />
      </div>
      <div>
        <h3 className="font-semibold">Group Chat</h3>
        <p className="text-sm text-white/80">
          {Object.values(users).filter(u => u.isOnline).length} online
        </p>
      </div>
    </div>
    <div className="flex items-center space-x-2">
      <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
        <Phone className="w-5 h-5" />
      </button>
      <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
        <Video className="w-5 h-5" />
      </button>
      <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
        <MoreVertical className="w-5 h-5" />
      </button>
    </div>
  </div>
);

export default ChatHeader;
