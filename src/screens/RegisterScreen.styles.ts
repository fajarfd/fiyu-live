import { Platform, StyleSheet, ViewStyle } from 'react-native';
import { colors } from '../theme';

export interface BubbleConfig extends ViewStyle {
  key: string;
}

// Konfigurasi gelembung dekoratif latar belakang layar Daftar sesuai desain Claude
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
    marginBottom: 16,
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
  termsText: {
    fontSize: 12,
    color: colors.muted,
    lineHeight: 18,
  },
  termsHighlight: {
    color: colors.accent,
    fontWeight: '600',
  },
  submitButton: {
    marginTop: 4,
  },

  /* Footer */
  footerContainer: {
    alignItems: 'center',
    marginTop: 'auto',
    paddingTop: 24,
  },
  footerText: {
    color: colors.muted,
    fontSize: 14,
  },
  footerLink: {
    color: colors.accent,
    fontWeight: '700',
  },
});
