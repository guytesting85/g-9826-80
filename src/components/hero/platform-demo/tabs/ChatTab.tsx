
import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Users, Phone, Video, MoreVertical } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  text: string;
  sender: 'user1' | 'user2';
  timestamp: Date;
}

interface User {
  id: string;
  name: string;
  avatar?: string;
  isOnline: boolean;
}

const ChatTab = () => {
  const [currentUser, setCurrentUser] = useState<'user1' | 'user2' | null>(null);
  const [loginForm, setLoginForm] = useState({ userId: '', password: '' });
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hey! How are you doing?',
      sender: 'user1',
      timestamp: new Date(Date.now() - 30000)
    },
    {
      id: '2',
      text: 'I\'m doing great! Just working on some new features.',
      sender: 'user2',
      timestamp: new Date(Date.now() - 25000)
    },
    {
      id: '3',
      text: 'That sounds exciting! What kind of features?',
      sender: 'user1',
      timestamp: new Date(Date.now() - 20000)
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const users: Record<string, User> = {
    user1: { id: 'user1', name: 'Alex Johnson', isOnline: true },
    user2: { id: 'user2', name: 'Sarah Wilson', isOnline: true }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleLogin = (userType: 'user1' | 'user2') => {
    // Simple mock authentication - in real app, this would be proper authentication
    if (loginForm.userId && loginForm.password) {
      setCurrentUser(userType);
      setLoginForm({ userId: '', password: '' });
    }
  };

  const handleSendMessage = () => {
    if (newMessage.trim() && currentUser) {
      const message: Message = {
        id: Date.now().toString(),
        text: newMessage.trim(),
        sender: currentUser,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, message]);
      setNewMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const LoginCard = ({ userType, title }: { userType: 'user1' | 'user2', title: string }) => (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-convrt-purple rounded-full flex items-center justify-center mx-auto mb-4">
          <User className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">Sign in to start chatting</p>
      </div>
      
      <div className="space-y-4">
        <input
          type="text"
          placeholder="User ID"
          value={loginForm.userId}
          onChange={(e) => setLoginForm(prev => ({ ...prev, userId: e.target.value }))}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-convrt-purple bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
        />
        <input
          type="password"
          placeholder="Password"
          value={loginForm.password}
          onChange={(e) => setLoginForm(prev => ({ ...prev, password: e.target.value }))}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-convrt-purple bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
        />
        <button
          onClick={() => handleLogin(userType)}
          className="w-full bg-convrt-purple text-white py-2 px-4 rounded-lg hover:bg-convrt-purple-hover transition-colors"
        >
          Sign In as {title}
        </button>
      </div>
    </div>
  );

  const ChatInterface = () => (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden h-[600px] flex flex-col">
      {/* Chat Header */}
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

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-900">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
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
          ))}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <div className="border-t border-gray-200 dark:border-gray-600 p-4 bg-white dark:bg-gray-800">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-convrt-purple bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
          />
          <button
            onClick={handleSendMessage}
            disabled={!newMessage.trim()}
            className="bg-convrt-purple text-white p-2 rounded-full hover:bg-convrt-purple-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );

  if (!currentUser) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <LoginCard userType="user1" title="User 1" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <LoginCard userType="user2" title="User 2" />
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-convrt-purple rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Signed in as {users[currentUser]?.name}
          </span>
        </div>
        <button
          onClick={() => setCurrentUser(null)}
          className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          Sign Out
        </button>
      </div>
      <ChatInterface />
    </motion.div>
  );
};

export default ChatTab;
