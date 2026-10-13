import { useState } from 'react';
import { Alert } from 'react-native';
import { GIFTS, Gift } from './GiftScreen.styles';

export interface UseGiftScreenProps {
  onBack?: () => void;
  onSendGiftSuccess?: (gift: Gift) => void;
  initialCoinBalance?: number;
  roomTitle?: string;
  hostName?: string;
  hostInitials?: string;
}

export function useGiftScreen({
  onBack,
  onSendGiftSuccess,
  initialCoinBalance = 500,
  roomTitle = 'Ngobrol santai malam',
  hostName = 'Fitri',
  hostInitials = 'FR',
}: UseGiftScreenProps = {}) {
  // Default memilih 'gift-star' (Bintang) persis seperti desain screenshot
  const [selectedGiftId, setSelectedGiftId] = useState<string>('gift-star');
  const [coinBalance, setCoinBalance] = useState<number>(initialCoinBalance);

  const selectedGift: Gift =
    GIFTS.find((g) => g.id === selectedGiftId) || GIFTS[1];

  const handleSelectGift = (giftId: string) => {
    setSelectedGiftId(giftId);
  };

  const handleSendGift = () => {
    if (coinBalance < selectedGift.price) {
      Alert.alert(
        'Koin Tidak Cukup',
        `Koin Anda (${coinBalance}) tidak cukup untuk mengirim ${selectedGift.name} (${selectedGift.price} koin).`
      );
      return;
    }

    const remainingCoins = coinBalance - selectedGift.price;
    setCoinBalance(remainingCoins);

    Alert.alert(
      'Gift Terkirim!',
      `Berhasil mengirim ${selectedGift.name} ke ${hostName}! Sisa koin: ${remainingCoins}`,
      [
        {
          text: 'OK',
          onPress: () => {
            onSendGiftSuccess?.(selectedGift);
            onBack?.();
          },
        },
      ]
    );
  };

  const handleClose = () => {
    onBack?.();
  };

  return {
    roomTitle,
    hostName,
    hostInitials,
    coinBalance,
    selectedGift,
    selectedGiftId,
    gifts: GIFTS,
    handleSelectGift,
    handleSendGift,
    handleClose,
  };
}
