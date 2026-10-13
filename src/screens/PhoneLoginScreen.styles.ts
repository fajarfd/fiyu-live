import { Platform, StyleSheet, ViewStyle } from 'react-native';
import { colors } from '../theme';

export interface BubbleConfig extends ViewStyle {
  key: string;
}

// Konfigurasi gelembung dekoratif latar belakang layar Masuk Nomor HP
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
  phoneRow: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'flex-start',
  },
  countryCodeBadge: {
    width: 84,
    height: 54,
    backgroundColor: colors.surface,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  countryCodeText: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '700',
  },
  phoneInputWrapper: {
    flex: 1,
  },
  disclaimerText: {
    fontSize: 12,
    color: colors.muted,
    textAlign: 'center',
    marginTop: 2,
  },
  submitButton: {
    marginTop: 4,
  },

  /* OTP Section */
  otpSection: {
    marginTop: 32,
    gap: 12,
  },
  otpSectionInactive: {
    opacity: 0.55,
  },
  otpStepLabel: {
    fontSize: 12,
    color: colors.muted,
  },
  otpRow: {
    flexDirection: 'row',
    gap: 8,
  },
  otpBox: {
    flex: 1,
    height: 52,
    backgroundColor: colors.surface,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: 'transparent',
  },
  otpBoxFilled: {
    borderColor: 'rgba(53, 214, 192, 0.4)',
  },
  otpBoxActive: {
    borderColor: colors.accent,
  },
  otpDigit: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
  },
  otpHiddenInput: {
    position: 'absolute',
    width: 1,
    height: 1,
    opacity: 0,
  },
  otpResendRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  otpTimerText: {
    fontSize: 12,
    color: colors.muted,
  },
  otpResendLink: {
    fontSize: 12,
    color: colors.accent,
    fontWeight: '700',
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
