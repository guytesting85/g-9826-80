
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DemoHeader from './platform-demo/DemoHeader';
import TabContent from './platform-demo/TabContent';
import NotificationPanel from './platform-demo/NotificationPanel';
import AvatarMenu from './platform-demo/AvatarMenu';
import AvatarUploadModal from './platform-demo/AvatarUploadModal';
import { usePlatformDemo } from '../../hooks/usePlatformDemo';
import { useAvatar } from '../../hooks/useAvatar';

interface PlatformDemoProps {
  onClose: () => void;
  onCloseBadge: () => void;
  showBadge: boolean;
}

const PlatformDemo = ({ onClose }: PlatformDemoProps) => {
  const platformDemo = usePlatformDemo();
  const avatar = useAvatar();

  const handleAvatarUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    avatar.handleAvatarUpload(event);
    platformDemo.closeAvatarMenu();
  };

  return (
    <div className={`relative ${platformDemo.isFullscreen ? 'fixed inset-0 z-50 bg-white' : 'max-w-7xl mx-auto'}`}>
      {!platformDemo.isFullscreen && (
        <div className="absolute inset-0 -m-10 bg-gradient-to-br from-convrt-purple/20 via-convrt-purple/20 to-convrt-purple/20 rounded-3xl blur-3xl opacity-40"></div>
      )}
      
      <div className={`relative ${platformDemo.isFullscreen ? 'h-full' : 'rounded-2xl'} overflow-hidden shadow-2xl border border-white/20 backdrop-blur-sm`}>
        <DemoHeader
          activeTab={platformDemo.activeTab}
          setActiveTab={platformDemo.setActiveTab}
          isFullscreen={platformDemo.isFullscreen}
          onClose={onClose}
          onToggleFullscreen={platformDemo.toggleFullscreen}
          showNotificationPanel={platformDemo.showNotificationPanel}
          showAvatarPanel={platformDemo.showAvatarPanel}
          onNotificationClick={platformDemo.toggleNotifications}
          onAvatarClick={platformDemo.toggleAvatarMenu}
          notificationsRead={platformDemo.notificationsRead}
          avatarImage={avatar.avatarImage}
        />
        
        <div className={`bg-gray-50 p-10 ${platformDemo.isFullscreen ? 'h-[calc(100vh-80px)] overflow-y-auto' : 'min-h-[700px]'} relative`}>
          <AnimatePresence mode="wait">
            <motion.div 
              key={platformDemo.activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <TabContent activeTab={platformDemo.activeTab} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      
      <AnimatePresence>
        <NotificationPanel 
          isOpen={platformDemo.showNotifications}
          onClose={platformDemo.closeNotificationPanel}
        />
      </AnimatePresence>

      <AnimatePresence>
        <AvatarMenu
          isOpen={platformDemo.showAvatarMenu}
          onClose={platformDemo.closeAvatarPanel}
          onUploadClick={() => avatar.setShowAvatarUpload(true)}
          avatarImage={avatar.avatarImage}
        />
      </AnimatePresence>
      
      <AvatarUploadModal
        isOpen={avatar.showAvatarUpload}
        onClose={() => avatar.setShowAvatarUpload(false)}
        onUpload={handleAvatarUpload}
        currentAvatar={avatar.avatarImage}
      />
      
      {(platformDemo.showAvatarMenu || platformDemo.showNotifications) && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => {
            platformDemo.closeAvatarMenu();
            platformDemo.closeNotifications();
          }}
        />
      )}
    </div>
  );
};

export default PlatformDemo;
