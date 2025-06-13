
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import UserSwitcher from './UserSwitcher';
import QRPanel from './QRPanel';
import ChatArea from './ChatArea';
import { useTheme } from '../../../../ThemeProvider';

export interface User {
  id: string;
  name: string;
  avatar?: string;
  isOnline: boolean;
  unreadCount?: number;
}

export interface Message {
  id: string;
  text: string;
  senderId: string;
  timestamp: Date;
}

const ChatPlayground = () => {
  const { theme } = useTheme();
  const [activeUserId, setActiveUserId] = useState('user-a');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hey there! How are you doing?',
      senderId: 'user-b',
      timestamp: new Date(Date.now() - 300000)
    },
    {
      id: '2',
      text: 'I\'m doing great! Just working on some cool projects.',
      senderId: 'user-a',
      timestamp: new Date(Date.now() - 240000)
    },
    {
      id: '3',
      text: 'That sounds awesome! What kind of projects?',
      senderId: 'user-b',
      timestamp: new Date(Date.now() - 180000)
    },
    {
      id: '4',
      text: 'Building a real-time chat application with WebSockets!',
      senderId: 'user-a',
      timestamp: new Date(Date.now() - 120000)
    }
  ]);

  const [users, setUsers] = useState<User[]>([
    { id: 'user-a', name: 'User A', isOnline: true, unreadCount: 0 },
    { id: 'user-b', name: 'User B', isOnline: true, unreadCount: 2 },
    { id: 'user-c', name: 'User C', isOnline: false, unreadCount: 1 }
  ]);

  const handleSendMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      senderId: activeUserId,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);

    // Update unread count for other users
    setUsers(prevUsers => 
      prevUsers.map(user => {
        if (user.id !== activeUserId && user.isOnline) {
          return { ...user, unreadCount: (user.unreadCount || 0) + 1 };
        }
        return user;
      })
    );
  };

  const handleUserSwitch = (userId: string) => {
    setActiveUserId(userId);
    // Clear unread count for switched user
    setUsers(prevUsers => 
      prevUsers.map(user => {
        if (user.id === userId) {
          return { ...user, unreadCount: 0 };
        }
        return user;
      })
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
    >
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Chat Playground
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          Multi-user chat simulation with QR pairing
        </p>
      </div>

      <div className={`rounded-2xl overflow-hidden shadow-2xl border ${
        theme === 'dark' 
          ? 'bg-gray-800 border-gray-700' 
          : 'bg-white border-gray-200'
      }`}>
        <div className="flex h-[600px]">
          {/* Left Sidebar */}
          <div className={`w-1/5 min-w-[200px] border-r flex flex-col ${
            theme === 'dark' 
              ? 'bg-gray-900 border-gray-700' 
              : 'bg-gray-50 border-gray-200'
          }`}>
            <UserSwitcher
              users={users}
              activeUserId={activeUserId}
              onUserSwitch={handleUserSwitch}
            />
            <QRPanel />
          </div>

          {/* Main Chat Area */}
          <div className="flex-1 flex flex-col">
            <ChatArea
              messages={messages}
              activeUserId={activeUserId}
              users={users}
              onSendMessage={handleSendMessage}
            />
          </div>
        </div>
      </div>

      {/* Mobile Responsive Note */}
      <div className="md:hidden text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Best viewed on desktop for full experience
        </p>
      </div>
    </motion.div>
  );
};

export default ChatPlayground;
