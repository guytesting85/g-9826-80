
import React from 'react';
import { motion } from 'framer-motion';
import { User } from '../../../../../types';

interface Message {
  id: string;
  text: string;
  sender: 'user1' | 'user2';
  timestamp: Date;
}

interface MessageBubbleProps {
  message: Message;
  users: Record<string, User>;
  currentUser: 'user1' | 'user2';
}

const MessageBubble = ({ message, users, currentUser }: MessageBubbleProps) => {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`flex ${message.sender === currentUser ? 'justify-end' : 'justify-start'}`}
    >
      <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
        message.sender === currentUser
          ? 'bg-convrt-purple text-white'
          : 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600'
      }`}>
        <div className="text-sm font-medium mb-1">
          {users[message.sender]?.name}
        </div>
        <div className="text-sm">{message.text}</div>
        <div className={`text-xs mt-1 ${
          message.sender === currentUser ? 'text-white/70' : 'text-gray-500 dark:text-gray-400'
        }`}>
          {formatTime(message.timestamp)}
        </div>
      </div>
    </motion.div>
  );
};

export default MessageBubble;
