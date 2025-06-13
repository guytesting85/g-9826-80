
import React, { useState, useRef, useEffect } from 'react';
import { User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import LoginCard from './chat/LoginCard';
import ChatHeader from './chat/ChatHeader';
import MessageBubble from './chat/MessageBubble';
import MessageInput from './chat/MessageInput';

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

  if (!currentUser) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <LoginCard 
            userType="user1" 
            title="User 1" 
            loginForm={loginForm}
            setLoginForm={setLoginForm}
            onLogin={handleLogin}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <LoginCard 
            userType="user2" 
            title="User 2" 
            loginForm={loginForm}
            setLoginForm={setLoginForm}
            onLogin={handleLogin}
          />
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
      
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden h-[600px] flex flex-col">
        <ChatHeader users={users} />
        
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-900">
          <AnimatePresence>
            {messages.map((message) => (
              <MessageBubble 
                key={message.id}
                message={message}
                users={users}
                currentUser={currentUser}
              />
            ))}
          </AnimatePresence>
          <div ref={messagesEndRef} />
        </div>

        <MessageInput 
          newMessage={newMessage}
          setNewMessage={setNewMessage}
          onSend={handleSendMessage}
          onKeyPress={handleKeyPress}
        />
      </div>
    </motion.div>
  );
};

export default ChatTab;
