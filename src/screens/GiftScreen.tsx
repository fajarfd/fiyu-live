import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { colors } from '../theme';
import { styles } from './GiftScreen.styles';
import { UseGiftScreenProps, useGiftScreen } from './useGiftScreen';

export type GiftScreenProps = UseGiftScreenProps;

export default function GiftScreen(props: GiftScreenProps = {}) {
  const {
    roomTitle,
    hostName,
    hostInitials,
    coinBalance,
    selectedGift,
    selectedGiftId,
    gifts,
    handleSelectGift,
    handleSendGift,
    handleClose,
  } = useGiftScreen(props);

  return (
    <View style={styles.screen}>
      {/* Area Latar Belakang Redup Room Live (Dapat disentuh untuk menutup) */}
      <TouchableWithoutFeedback onPress={handleClose}>
        <View style={styles.dimmedBackdrop}>
          <Text style={styles.roomTitle}>{roomTitle}</Text>
          <View style={styles.hostAvatar}>
            <Text style={styles.hostAvatarText}>{hostInitials}</Text>
          </View>
          <Text style={styles.hostName}>{hostName}</Text>
        </View>
      </TouchableWithoutFeedback>

      {/* Panel Bottom Sheet Kirim Gift */}
      <View style={styles.sheetContainer}>
        {/* Header Sheet */}
        <View style={styles.sheetHeader}>
          <Text style={styles.sheetTitle}>Kirim gift</Text>
          <View style={styles.coinBadge}>
            <Text style={styles.coinBadgeText}>{coinBalance} koin</Text>
          </View>
        </View>

        {/* Grid Pilihan Gift - Loop Ringkas */}
        <View style={styles.giftGrid}>
          {gifts.map((gift) => {
            const isSelected = selectedGiftId === gift.id;
            const iconColor = isSelected
              ? gift.activeColor || colors.text
              : colors.muted;

            return (
              <TouchableOpacity
                key={gift.id}
                style={[
                  styles.giftCard,
                  isSelected && styles.giftCardSelected,
                ]}
                onPress={() => handleSelectGift(gift.id)}
                activeOpacity={0.8}
              >
                <MaterialCommunityIcons
                  name={gift.iconName}
                  size={28}
                  color={iconColor}
                />
                <Text
                  style={[
                    styles.giftName,
                    isSelected && styles.giftNameSelected,
                  ]}
                >
                  {gift.name}
                </Text>
                <Text
                  style={[
                    styles.giftPrice,
                    isSelected && styles.giftPriceSelected,
                  ]}
                >
                  {gift.price}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Tombol Kirim Gift Dinamis */}
        <TouchableOpacity
          style={styles.sendButton}
          onPress={handleSendGift}
          activeOpacity={0.85}
        >
          <Text style={styles.sendButtonText}>
            Kirim {selectedGift.name}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
