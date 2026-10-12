import { Platform, StyleSheet, ViewStyle } from 'react-native';
import { colors } from '../theme';

export interface BubbleConfig extends ViewStyle {
  key: string;
}

// Konfigurasi gelembung dekoratif latar belakang agar ringkas melalui loop
export const DECORATIVE_BUBBLES: BubbleConfig[] = [
  { key: 'b1', width: 280, height: 280, borderRadius: 140, backgroundColor: '#1A1D38', top: -90, right: -70 },
  { key: 'b2', width: 120, height: 120, borderRadius: 60, backgroundColor: '#6C7BFF', opacity: 0.25, top: 70, left: -40 },
  { key: 'b3', width: 44, height: 44, borderRadius: 22, backgroundColor: '#35D6C0', top: 150, right: 56 },
  { key: 'b4', width: 22, height: 22, borderRadius: 11, backgroundColor: '#FF5C7A', top: 112, left: 96 },
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
    paddingTop: Platform.OS === 'ios' ? 70 : 60,
    paddingBottom: 32,
    justifyContent: 'space-between',
  },

  /* Header */
  header: {
    marginBottom: 32,
  },
  logoBadge: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    shadowColor: colors.accent,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 8,
  },
  brandTitle: {
    fontSize: 34,
    fontWeight: '700',
    color: colors.text,
    letterSpacing: -0.5,
    marginBottom: 8,
  },
  brandHighlight: {
    color: colors.accent,
  },
  subtitle: {
    fontSize: 14,
    color: colors.muted,
    lineHeight: 21,
  },

  /* Form */
  form: {
    gap: 12,
  },
  forgotWrapper: {
    alignSelf: 'flex-end',
    paddingVertical: 4,
    marginBottom: 4,
  },
  forgotText: {
    color: colors.accent,
    fontSize: 13,
    fontWeight: '500',
  },

  /* Divider */
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
    gap: 12,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: colors.border,
  },
  dividerText: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: '500',
  },

  /* Social Row */
  socialRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 32,
  },

  /* Footer */
  footerContainer: {
    alignItems: 'center',
    marginTop: 'auto',
    paddingTop: 16,
  },
  signupText: {
    color: colors.muted,
    fontSize: 14,
    marginBottom: 12,
  },
  signupLink: {
    color: colors.accent,
    fontWeight: '700',
  },
  termsText: {
    color: colors.muted,
    fontSize: 11,
    textAlign: 'center',
    lineHeight: 16,
    opacity: 0.7,
  },
});
