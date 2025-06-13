
import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors" />
      ) : (
        <Sun className="w-5 h-5 text-yellow-500 group-hover:text-yellow-400 transition-colors" />
      )}
    </button>
  );
};

export default ThemeToggle;
