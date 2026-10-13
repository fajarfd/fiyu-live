import { Platform, StyleSheet, ViewStyle } from 'react-native';
import { colors } from '../theme';

export interface BubbleConfig extends ViewStyle {
  key: string;
}

// Konfigurasi gelembung dekoratif latar belakang layar Masuk Google sesuai desain
export const DECORATIVE_BUBBLES: BubbleConfig[] = [
  { key: 'b1', width: 240, height: 240, borderRadius: 120, backgroundColor: '#1A1D38', top: -90, right: -80 },
  { key: 'b2', width: 36, height: 36, borderRadius: 18, backgroundColor: '#35D6C0', top: 120, right: 48 },
];

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
    position: 'relative',
    overflow: 'hidden',
    justifyContent: 'space-between',
  },
  bubbleBase: {
    position: 'absolute',
  },

  /* Tombol Tutup / Kembali */
  closeButton: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 56 : 44,
    left: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(26, 29, 56, 0.7)',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },

  /* Latar Atas (Brand Backdrop) */
  topBackdrop: {
    paddingTop: Platform.OS === 'ios' ? 140 : 110,
    paddingHorizontal: 24,
    alignItems: 'center',
    opacity: 0.45,
  },
  brandTitle: {
    fontSize: 34,
    fontWeight: '700',
    color: colors.text,
  },
  brandHighlight: {
    color: colors.accent,
  },
  brandSubtitle: {
    fontSize: 13,
    color: colors.muted,
    marginTop: 8,
  },

  /* Bottom Sheet Card */
  bottomSheet: {
    backgroundColor: colors.surface,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: Platform.OS === 'ios' ? 40 : 28,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 12,
  },
  sheetTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
  },
  sheetSubtitle: {
    fontSize: 13,
    color: colors.muted,
    marginTop: 4,
    marginBottom: 8,
  },

  /* List Akun */
  accountRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    paddingVertical: 12,
  },
  accountRowBorder: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontWeight: '700',
    color: colors.background,
    fontSize: 16,
  },
  avatarOther: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  accountInfo: {
    flex: 1,
  },
  accountName: {
    fontSize: 15,
    fontWeight: '500',
    color: colors.text,
  },
  accountEmail: {
    fontSize: 13,
    color: colors.muted,
    marginTop: 2,
  },
  otherAccountText: {
    fontSize: 15,
    fontWeight: '500',
    color: colors.text,
  },

  /* Disclaimer */
  disclaimer: {
    fontSize: 11,
    color: colors.muted,
    lineHeight: 16,
    marginTop: 14,
  },
});
