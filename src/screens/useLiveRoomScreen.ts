import { useState } from 'react';
import { Alert } from 'react-native';
import {
  ChatMessage,
  GiftItem,
  INITIAL_MESSAGES,
  INITIAL_SPEAKERS,
  Speaker,
} from './LiveRoomScreen.styles';

export interface UseLiveRoomScreenProps {
  onBack?: () => void;
  onNavigateToGift?: () => void;
  roomTitle?: string;
  listenerCount?: number | string;
  hostName?: string;
  hostInitials?: string;
}

export function useLiveRoomScreen({
  onBack,
  onNavigateToGift,
  roomTitle = 'Ngobrol santai malam',
  listenerCount = 128,
  hostName = 'Fitri',
  hostInitials = 'FR',
}: UseLiveRoomScreenProps = {}) {
  const [isMuted, setIsMuted] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [speakers, setSpeakers] = useState<Speaker[]>(INITIAL_SPEAKERS);
  const [inputText, setInputText] = useState('');
  const [isGiftModalVisible, setIsGiftModalVisible] = useState(false);

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  const handleSendMessage = () => {
    const trimmed = inputText.trim();
    if (!trimmed) return;

    const newMessage: ChatMessage = {
      id: `msg-${Date.now()}`,
      senderName: 'Kamu',
      senderColor: '#35D6C0',
      text: trimmed,
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputText('');
  };

  const handleSendGift = (gift: GiftItem) => {
    const giftMessage: ChatMessage = {
      id: `gift-${Date.now()}`,
      senderName: 'Kamu',
      senderColor: '#6C7BFF',
      text: `mengirim gift ${gift.name} ${gift.icon}`,
      isGift: true,
    };

    setMessages((prev) => [...prev, giftMessage]);
    setIsGiftModalVisible(false);
  };

  const openGiftModal = () => {
    if (onNavigateToGift) {
      onNavigateToGift();
    } else {
      setIsGiftModalVisible(true);
    }
  };

  const closeGiftModal = () => {
    setIsGiftModalVisible(false);
  };

  const handleTakeSeat = () => {
    Alert.alert(
      'Minta Naik Panggung',
      'Apakah kamu ingin mengajukan diri sebagai pembicara?',
      [
        { text: 'Batal', style: 'cancel' },
        {
          text: 'Ajukan',
          onPress: () => {
            Alert.alert('Terkirim', 'Permintaan naik panggung telah dikirim ke host.');
          },
        },
      ]
    );
  };

  const handleBack = () => {
    onBack?.();
  };

  return {
    roomTitle,
    listenerCount,
    hostName,
    hostInitials,
    isMuted,
    messages,
    speakers,
    inputText,
    setInputText,
    isGiftModalVisible,
    toggleMute,
    handleSendMessage,
    handleSendGift,
    openGiftModal,
    closeGiftModal,
    handleTakeSeat,
    handleBack,
  };
}
