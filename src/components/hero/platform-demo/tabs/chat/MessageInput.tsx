
import React from 'react';
import { Send } from 'lucide-react';

interface MessageInputProps {
  newMessage: string;
  setNewMessage: (message: string) => void;
  onSend: () => void;
  onKeyPress: (e: React.KeyboardEvent) => void;
}

const MessageInput = ({ newMessage, setNewMessage, onSend, onKeyPress }: MessageInputProps) => (
  <div className="border-t border-gray-200 dark:border-gray-600 p-4 bg-white dark:bg-gray-800">
    <div className="flex items-center space-x-2">
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        onKeyPress={onKeyPress}
        placeholder="Type a message..."
        className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-convrt-purple bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
      />
      <button
        onClick={onSend}
        disabled={!newMessage.trim()}
        className="bg-convrt-purple text-white p-2 rounded-full hover:bg-convrt-purple-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Send className="w-5 h-5" />
      </button>
    </div>
  </div>
);

export default MessageInput;
