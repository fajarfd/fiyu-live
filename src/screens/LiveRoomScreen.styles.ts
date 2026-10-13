import { Platform, StyleSheet } from 'react-native';
import { colors } from '../theme';

export interface Speaker {
  id: string;
  initials: string;
  name: string;
  bgColor: string;
  isSpeaking?: boolean;
}

export interface ChatMessage {
  id: string;
  senderName: string;
  senderColor: string;
  text: string;
  isGift?: boolean;
}

export interface GiftItem {
  id: string;
  name: string;
  icon: string;
  coin: number;
}

// Data speaker co-host di room live
export const INITIAL_SPEAKERS: Speaker[] = [
  { id: 'sp-1', initials: 'RN', name: 'Rani', bgColor: colors.accent },
  { id: 'sp-2', initials: 'DM', name: 'Dimas', bgColor: colors.avatarOrange },
  { id: 'sp-3', initials: 'FJ', name: 'Fajar', bgColor: colors.avatarPurple },
];

// Data riwayat obrolan pesan & gift
export const INITIAL_MESSAGES: ChatMessage[] = [
  { id: 'm-1', senderName: 'Rani', senderColor: colors.accent, text: 'halo semuanya' },
  { id: 'm-2', senderName: 'Dimas', senderColor: colors.avatarOrange, text: 'suaranya jernih banget' },
  { id: 'm-3', senderName: 'Fajar', senderColor: colors.lavender, text: 'mengirim gift Bintang', isGift: true },
];

// Pilihan gift yang ringkas untuk perulangan
export const GIFT_ITEMS: GiftItem[] = [
  { id: 'g-1', name: 'Bintang', icon: '⭐', coin: 10 },
  { id: 'g-2', name: 'Mawar', icon: '🌹', coin: 25 },
  { id: 'g-3', name: 'Berlian', icon: '💎', coin: 100 },
  { id: 'g-4', name: 'Roket', icon: '🚀', coin: 500 },
];

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 44 : 24,
    paddingHorizontal: 20,
  },

  /* Header */
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  backButton: {
    padding: 6,
    marginLeft: -6,
  },
  headerCenter: {
    alignItems: 'center',
  },
  roomTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
  },
  listenerCount: {
    fontSize: 12,
    color: colors.muted,
    marginTop: 2,
  },
  liveBadge: {
    backgroundColor: colors.liveBadge,
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 999,
  },
  liveBadgeText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '700',
  },

  /* Host Section */
  hostSection: {
    alignItems: 'center',
    paddingVertical: 16,
    gap: 6,
  },
  hostAvatar: {
    width: 112,
    height: 112,
    borderRadius: 56,
    backgroundColor: colors.lavender,
    borderWidth: 4,
    borderColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.accent,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 8,
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
  },
  hostStatus: {
    fontSize: 12,
    color: colors.muted,
  },

  /* Co-host / Speakers Row */
  speakersRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
    paddingVertical: 12,
  },
  speakerAvatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  speakerText: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.background,
  },
  emptySeat: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.bannerBackground,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: colors.muted,
  },

  /* Chat Messages */
  chatContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    gap: 8,
    paddingBottom: 8,
  },
  messageBubble: {
    backgroundColor: colors.surface,
    borderRadius: 14,
    paddingVertical: 8,
    paddingHorizontal: 12,
    alignSelf: 'flex-start',
    maxWidth: 280,
  },
  giftMessageBubble: {
    backgroundColor: colors.bannerBackground,
    borderLeftWidth: 3,
    borderLeftColor: colors.lavender,
  },
  messageText: {
    fontSize: 13,
    color: colors.text,
  },
  senderText: {
    fontWeight: '700',
  },

  /* Bottom Actions Bar */
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 12,
  },
  inputContainer: {
    flex: 1,
    backgroundColor: colors.surface,
    borderRadius: 999,
    paddingHorizontal: 16,
    paddingVertical: Platform.OS === 'ios' ? 12 : 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputField: {
    flex: 1,
    color: colors.text,
    fontSize: 14,
    padding: 0,
  },
  sendButton: {
    marginLeft: 8,
  },
  actionButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.bannerBackground,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButtonActive: {
    backgroundColor: colors.error,
  },
  giftButton: {
    backgroundColor: colors.lavender,
  },

  /* Modal Gift */
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: colors.surface,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 20,
    paddingBottom: Platform.OS === 'ios' ? 36 : 24,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
  },
  giftGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  giftCard: {
    flex: 1,
    backgroundColor: colors.bannerBackground,
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 8,
    alignItems: 'center',
    gap: 6,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  giftIcon: {
    fontSize: 28,
  },
  giftName: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.text,
  },
  giftCoin: {
    fontSize: 11,
    color: colors.muted,
  },
});
