import { Platform, StyleSheet, ViewStyle } from 'react-native';
import { colors } from '../theme';

export interface BubbleConfig extends ViewStyle {
  key: string;
}

// Konfigurasi gelembung dekoratif latar belakang layar Lupa Kata Sandi sesuai desain Claude
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
  },
  bubbleBase: {
    position: 'absolute',
  },
  keyboardView: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: Platform.OS === 'ios' ? 64 : 52,
    paddingBottom: 32,
    justifyContent: 'space-between',
  },

  /* Header & Navigation */
  header: {
    marginBottom: 24,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -8,
    marginBottom: 8,
  },
  iconBadge: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    marginBottom: 20,
    shadowColor: colors.accent,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: colors.text,
    lineHeight: 32,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: colors.muted,
    lineHeight: 21,
  },

  /* Form Container */
  form: {
    gap: 12,
  },
  submitButton: {
    marginTop: 4,
  },
  helperText: {
    fontSize: 12,
    color: colors.muted,
    textAlign: 'center',
    lineHeight: 18,
    marginTop: 4,
  },

  /* Status Sukses */
  successBanner: {
    backgroundColor: 'rgba(53, 214, 192, 0.12)',
    borderColor: colors.accent,
    borderWidth: 1,
    borderRadius: 14,
    padding: 16,
    alignItems: 'center',
    marginBottom: 8,
  },
  successTitle: {
    color: colors.accent,
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 4,
  },
  successDesc: {
    color: colors.text,
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 19,
  },

  /* Footer */
  footerContainer: {
    alignItems: 'center',
    marginTop: 'auto',
    paddingTop: 24,
  },
  footerLink: {
    color: colors.accent,
    fontSize: 14,
    fontWeight: '700',
  },
});
