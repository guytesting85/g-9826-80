
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DemoHeader from './platform-demo/DemoHeader';
import TabContent from './platform-demo/TabContent';
import NotificationPanel from './platform-demo/NotificationPanel';
import AvatarMenu from './platform-demo/AvatarMenu';
import AvatarUploadModal from './platform-demo/AvatarUploadModal';

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
        <NotificationPanel 
          isOpen={showNotifications}
          onClose={handleCloseNotifications}
        />
      </AnimatePresence>

      {/* Avatar Menu */}
      <AnimatePresence>
        <AvatarMenu
          isOpen={showAvatarMenu}
          onClose={handleCloseAvatarMenu}
          onUploadClick={() => setShowAvatarUpload(true)}
          avatarImage={avatarImage}
        />
      </AnimatePresence>
      
      {/* Avatar Upload Modal */}
      <AvatarUploadModal
        isOpen={showAvatarUpload}
        onClose={() => setShowAvatarUpload(false)}
        onUpload={handleAvatarUpload}
        currentAvatar={avatarImage}
      />
      
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
