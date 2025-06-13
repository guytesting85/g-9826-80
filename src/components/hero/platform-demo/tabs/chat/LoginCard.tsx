
import React from 'react';
import { User } from 'lucide-react';

interface LoginCardProps {
  userType: 'user1' | 'user2';
  title: string;
  loginForm: { userId: string; password: string };
  setLoginForm: React.Dispatch<React.SetStateAction<{ userId: string; password: string }>>;
  onLogin: (userType: 'user1' | 'user2') => void;
}

const LoginCard = ({ userType, title, loginForm, setLoginForm, onLogin }: LoginCardProps) => (
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
        onClick={() => onLogin(userType)}
        className="w-full bg-convrt-purple text-white py-2 px-4 rounded-lg hover:bg-convrt-purple-hover transition-colors"
      >
        Sign In as {title}
      </button>
    </div>
  </div>
);

export default LoginCard;
