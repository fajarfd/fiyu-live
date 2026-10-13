import { Platform, StyleSheet } from 'react-native';
import { colors } from '../theme';

export interface Gift {
  id: string;
  name: string;
  price: number;
  iconName: 'heart-outline' | 'star' | 'diamond-outline' | 'crown-outline';
  activeColor?: string;
}

// Daftar opsi gift untuk perulangan loop yang ringkas
export const GIFTS: Gift[] = [
  { id: 'gift-heart', name: 'Hati', price: 10, iconName: 'heart-outline' },
  { id: 'gift-star', name: 'Bintang', price: 50, iconName: 'star', activeColor: '#FFB86B' },
  { id: 'gift-diamond', name: 'Berlian', price: 100, iconName: 'diamond-outline' },
  { id: 'gift-crown', name: 'Mahkota', price: 500, iconName: 'crown-outline' },
];

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'space-between',
  },

  /* Latar Belakang Redup Room Live */
  dimmedBackdrop: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'ios' ? 48 : 28,
    alignItems: 'center',
    opacity: 0.5,
  },
  roomTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
  },
  hostAvatar: {
    width: 112,
    height: 112,
    borderRadius: 56,
    backgroundColor: colors.lavender,
    borderWidth: 4,
    borderColor: colors.accent,
    marginTop: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hostAvatarText: {
    fontSize: 34,
    fontWeight: '700',
    color: colors.background,
  },
  hostName: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
    marginTop: 8,
  },

  /* Panel Bottom Sheet Kirim Gift */
  sheetContainer: {
    backgroundColor: colors.surface,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: Platform.OS === 'ios' ? 36 : 24,
    gap: 16,
  },
  sheetHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sheetTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
  },
  coinBadge: {
    backgroundColor: colors.bannerBackground,
    borderRadius: 999,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  coinBadgeText: {
    fontSize: 13,
    color: colors.accent,
    fontWeight: '700',
  },

  /* Grid Gift - 4 Kolom */
  giftGrid: {
    flexDirection: 'row',
    gap: 10,
  },
  giftCard: {
    flex: 1,
    backgroundColor: colors.bannerBackground,
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 4,
    alignItems: 'center',
    gap: 6,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  giftCardSelected: {
    backgroundColor: colors.selectedSurface,
    borderColor: colors.lavender,
  },
  giftName: {
    fontSize: 12,
    color: colors.muted,
    fontWeight: '500',
  },
  giftNameSelected: {
    color: colors.text,
    fontWeight: '700',
  },
  giftPrice: {
    fontSize: 13,
    color: colors.muted,
    fontWeight: '700',
  },
  giftPriceSelected: {
    color: colors.text,
  },

  /* Tombol Kirim Gift */
  sendButton: {
    backgroundColor: colors.lavender,
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
});
