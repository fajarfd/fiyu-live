import { useState } from 'react';
import { LIVE_ROOMS, LiveRoom, NavTabId } from './HomeScreen.styles';

export interface UseHomeScreenProps {
  onNavigateToLiveRoom?: (roomId: string) => void;
  onNavigateToSearch?: () => void;
  onNavigateToNotifications?: () => void;
  onNavigateToProfile?: () => void;
  onNavigateToMessages?: () => void;
  onNavigateToExplore?: () => void;
  onStartLive?: () => void;
}

export function useHomeScreen({
  onNavigateToLiveRoom,
  onNavigateToSearch,
  onNavigateToNotifications,
  onNavigateToProfile,
  onNavigateToMessages,
  onNavigateToExplore,
  onStartLive,
}: UseHomeScreenProps = {}) {
  const [selectedCategory, setSelectedCategory] = useState<string>('for_you');
  const [activeTab, setActiveTab] = useState<NavTabId>('beranda');

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  const handleTabSelect = (tabId: NavTabId) => {
    setActiveTab(tabId);
    if (tabId === 'jelajah') {
      onNavigateToExplore?.();
    } else if (tabId === 'pesan') {
      onNavigateToMessages?.();
    } else if (tabId === 'profil') {
      onNavigateToProfile?.();
    }
  };

  const handleSearch = () => {
    onNavigateToSearch?.();
  };

  const handleNotification = () => {
    onNavigateToNotifications?.();
  };

  const handleRoomPress = (room: LiveRoom) => {
    onNavigateToLiveRoom?.(room.id);
  };

  const handleStartLive = () => {
    onStartLive?.();
  };

  return {
    selectedCategory,
    activeTab,
    liveRooms: LIVE_ROOMS,
    handleCategorySelect,
    handleTabSelect,
    handleSearch,
    handleNotification,
    handleRoomPress,
    handleStartLive,
  };
}
