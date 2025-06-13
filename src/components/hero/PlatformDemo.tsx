
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Settings, BarChart2, Star, Bell, ArrowRight, Camera, Upload } from 'lucide-react';
import DemoHeader from './platform-demo/DemoHeader';
import TabContent from './platform-demo/TabContent';

interface PlatformDemoProps {
  onClose: () => void;
  onCloseBadge: () => void;
  showBadge: boolean;
}

const PlatformDemo = ({ onClose, onCloseBadge, showBadge }: PlatformDemoProps) => {
  const [activeTab, setActiveTab] = useState('cues');
  const [showAvatarMenu, setShowAvatarMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showAvatarUpload, setShowAvatarUpload] = useState(false);
  const [avatarImage, setAvatarImage] = useState<string | null>(null);
  const [notificationsRead, setNotificationsRead] = useState(false);
  const [showNotificationPanel, setShowNotificationPanel] = useState(true);
  const [showAvatarPanel, setShowAvatarPanel] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleAvatarUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setAvatarImage(e.target?.result as string);
        setShowAvatarUpload(false);
        setShowAvatarMenu(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNotificationClick = () => {
    setShowNotifications(!showNotifications);
    if (!showNotifications) {
      setNotificationsRead(true);
    }
  };

  const handleCloseNotifications = () => {
    setShowNotificationPanel(false);
    setShowNotifications(false);
  };

  const handleCloseAvatarMenu = () => {
    setShowAvatarPanel(false);
    setShowAvatarMenu(false);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className={`relative ${isFullscreen ? 'fixed inset-0 z-50 bg-white' : 'max-w-7xl mx-auto'}`}>
      {/* Gradient background */}
      {!isFullscreen && (
        <div className="absolute inset-0 -m-10 bg-gradient-to-br from-convrt-purple/20 via-convrt-purple/20 to-convrt-purple/20 rounded-3xl blur-3xl opacity-40"></div>
      )}
      
      <div className={`relative ${isFullscreen ? 'h-full' : 'rounded-2xl'} overflow-hidden shadow-2xl border border-white/20 backdrop-blur-sm`}>
        {/* Platform UI Header */}
        <DemoHeader
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          isFullscreen={isFullscreen}
          onClose={onClose}
          onToggleFullscreen={toggleFullscreen}
          showNotificationPanel={showNotificationPanel}
          showAvatarPanel={showAvatarPanel}
          onNotificationClick={handleNotificationClick}
          onAvatarClick={() => setShowAvatarMenu(!showAvatarMenu)}
          notificationsRead={notificationsRead}
          avatarImage={avatarImage}
        />
        
        {/* Main Content Area */}
        <div className={`bg-gray-50 p-10 ${isFullscreen ? 'h-[calc(100vh-80px)] overflow-y-auto' : 'min-h-[700px]'} relative`}>
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <TabContent activeTab={activeTab} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      
      {/* Notifications Panel */}
      <AnimatePresence>
        {showNotifications && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute right-6 top-20 w-80 bg-white rounded-xl shadow-lg border border-gray-200 z-50"
          >
            <div className="p-4 border-b border-gray-100 flex items-center justify-between">
              <h3 className="font-medium text-gray-900">Notifications</h3>
              <button
                onClick={handleCloseNotifications}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="max-h-64 overflow-y-auto">
              {[
                { text: "New high-priority cue from Sarah Chen", time: "2m ago", type: "cue" },
                { text: "Campaign 'Q4 Enterprise' reached 90% completion", time: "15m ago", type: "campaign" },
                { text: "AI Agent discovered 5 new engagement opportunities", time: "1h ago", type: "agent" }
              ].map((notif, i) => (
                <div key={i} className="p-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 cursor-pointer">
                  <p className="text-sm text-gray-700">{notif.text}</p>
                  <p className="text-xs text-gray-500 mt-1">{notif.time}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Avatar Menu */}
      <AnimatePresence>
        {showAvatarMenu && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute right-6 top-20 w-64 bg-white rounded-xl shadow-lg border border-gray-200 z-50"
          >
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-convrt-purple/20 flex items-center justify-center overflow-hidden">
                    {avatarImage ? (
                      <img src={avatarImage} alt="Avatar" className="w-full h-full object-cover" />
                    ) : (
                      <User className="w-5 h-5 text-convrt-purple" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">John Doe</h3>
                    <p className="text-sm text-gray-500">Sales Manager</p>
                  </div>
                </div>
                <button
                  onClick={handleCloseAvatarMenu}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="p-2">
              <button
                onClick={() => setShowAvatarUpload(true)}
                className="w-full flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors text-left"
              >
                <Camera className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-700">Change Avatar</span>
              </button>
              {[
                { icon: Settings, label: "Account Settings" },
                { icon: BarChart2, label: "My Performance" },
                { icon: Star, label: "Favorites" },
                { icon: Bell, label: "Notifications" }
              ].map((item, i) => (
                <button
                  key={i}
                  className="w-full flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors text-left"
                >
                  <item.icon className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-700">{item.label}</span>
                </button>
              ))}
            </div>
            <div className="p-2 border-t border-gray-100">
              <button className="w-full flex items-center space-x-3 p-3 hover:bg-red-50 rounded-lg transition-colors text-left">
                <ArrowRight className="w-4 h-4 text-red-500 rotate-180" />
                <span className="text-sm text-red-500">Sign Out</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Avatar Upload Modal */}
      <AnimatePresence>
        {showAvatarUpload && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            onClick={() => setShowAvatarUpload(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-xl p-6 w-80 mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-gray-900">Upload Avatar</h3>
                <button
                  onClick={() => setShowAvatarUpload(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gray-100 mx-auto mb-4 flex items-center justify-center overflow-hidden">
                  {avatarImage ? (
                    <img src={avatarImage} alt="Avatar" className="w-full h-full object-cover" />
                  ) : (
                    <Camera className="w-8 h-8 text-gray-400" />
                  )}
                </div>
                <label className="button-primary cursor-pointer inline-flex items-center">
                  <Upload className="w-4 h-4 mr-2" />
                  Choose Image
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarUpload}
                    className="hidden"
                  />
                </label>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Click outside handlers */}
      {(showAvatarMenu || showNotifications) && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => {
            setShowAvatarMenu(false);
            setShowNotifications(false);
          }}
        />
      )}
    </div>
  );
};

export default PlatformDemo;
