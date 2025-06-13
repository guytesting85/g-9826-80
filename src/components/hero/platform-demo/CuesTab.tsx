
import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, Target, User, Send, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';

const CuesTab = () => {
  const [isHeartLiked, setIsHeartLiked] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState([
    { id: 1, user: 'Mike Johnson', text: 'Great achievement! Congratulations on hitting your targets.', time: '2h ago' },
    { id: 2, user: 'Lisa Wang', text: 'Would love to learn more about the automation tools you mentioned.', time: '1h ago' }
  ]);

  const handleLikeClick = () => {
    setIsHeartLiked(!isHeartLiked);
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment = {
        id: comments.length + 1,
        user: 'You',
        text: newComment,
        time: 'now'
      };
      setComments([...comments, comment]);
      setNewComment('');
    }
  };

  const handleDeleteComment = (commentId: number) => {
    setComments(comments.filter(comment => comment.id !== commentId));
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-14 h-14 rounded-full bg-gray-200 overflow-hidden">
              <img src="/lovable-uploads/0f228602-2449-495f-866b-df124fde272a.png" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="flex items-center">
                <h3 className="font-medium text-gray-900 text-lg">Sarah Chen</h3>
                <div className="ml-2 text-xs text-white bg-blue-600 px-2 py-1 rounded">LinkedIn</div>
              </div>
              <p className="text-sm text-gray-500">VP Marketing at TechStart • 3h ago</p>
            </div>
          </div>
          
          <div className="mb-6">
            <p className="text-gray-700 text-base leading-relaxed">
              Excited to share that our team just hit 200% of our Q4 targets! The new marketing automation tools have been game-changing. 🚀
            </p>
          </div>
          
          <div className="flex items-center justify-between p-4 border-t border-gray-200">
            <div className="flex items-center space-x-4 text-gray-500">
              <motion.button 
                className="flex items-center space-x-2 hover:text-red-500 transition-colors cursor-pointer"
                onClick={handleLikeClick}
                whileTap={{ scale: 1.2 }}
                animate={isHeartLiked ? { scale: [1, 1.3, 1] } : {}}
                transition={{ duration: 0.3 }}
              >
                <Heart className={`w-5 h-5 transition-all duration-300 ${isHeartLiked ? 'fill-red-500 text-red-500' : ''}`} />
                <span className="text-sm font-medium">{isHeartLiked ? '90' : '89'}</span>
              </motion.button>
              <button className="flex items-center space-x-2 hover:text-blue-500 transition-colors cursor-pointer">
                <MessageCircle className="w-5 h-5" />
                <span className="text-sm font-medium">{comments.length}</span>
              </button>
              <button 
                onClick={handleShare}
                className="flex items-center space-x-2 hover:text-green-500 transition-colors cursor-pointer"
              >
                <Share2 className="w-5 h-5" />
                <span className="text-sm font-medium">Share</span>
              </button>
            </div>
            <div className="flex items-center space-x-2 bg-convrt-purple/10 text-convrt-purple px-3 py-2 rounded-lg">
              <Target className="w-4 h-4" />
              <span className="text-sm font-medium">High Priority Cue</span>
            </div>
          </div>
        </div>
        
        {/* Comments Section */}
        <div className="border-t border-gray-200 p-4">
          <div className="space-y-3 mb-4">
            {comments.map((comment) => (
              <div key={comment.id} className="flex space-x-3">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                  <User className="w-4 h-4 text-gray-600" />
                </div>
                <div className="flex-1">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium text-gray-900">{comment.user}</span>
                        <span className="text-xs text-gray-500">{comment.time}</span>
                      </div>
                      <button
                        onClick={() => handleDeleteComment(comment.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                    <p className="text-sm text-gray-700 text-left">{comment.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Add Comment Input */}
          <div className="flex space-x-3">
            <div className="w-8 h-8 rounded-full bg-convrt-purple/20 flex items-center justify-center">
              <User className="w-4 h-4 text-convrt-purple" />
            </div>
            <div className="flex-1 flex space-x-2">
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Write a comment..."
                className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-convrt-purple/20"
                onKeyPress={(e) => e.key === 'Enter' && handleAddComment()}
              />
              <button
                onClick={handleAddComment}
                className="px-4 py-2 bg-convrt-purple text-white rounded-lg text-sm hover:bg-convrt-purple-hover transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CuesTab;
