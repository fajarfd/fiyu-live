import { StyleSheet } from 'react-native';
import { colors } from '../theme';

export const styles = StyleSheet.create({
  base: {
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  primaryButton: {
    backgroundColor: colors.primary,
    height: 54,
    marginTop: 4,
  },
  socialButton: {
    flex: 1,
    backgroundColor: colors.surface,
    height: 50,
  },
  pressed: {
    opacity: 0.85,
    transform: [{ scale: 0.99 }],
  },
  primaryTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  socialTitle: {
    color: colors.text,
    fontSize: 14,
    fontWeight: '500',
  },
  iconWrapper: {
    marginRight: 8,
  },
});
