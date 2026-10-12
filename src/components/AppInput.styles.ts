import { StyleSheet } from 'react-native';
import { colors, spacing } from '../theme';

export const styles = StyleSheet.create({
  wrapper: {
    marginBottom: spacing.xs,
  },
  label: {
    fontSize: 13,
    fontWeight: '500',
    color: colors.text,
    marginBottom: 6,
  },
  fieldContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: 14,
    height: 54,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  fieldError: {
    borderColor: colors.error,
  },
  iconLeft: {
    marginRight: 12,
  },
  iconRight: {
    marginLeft: 8,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: colors.text,
    paddingVertical: 0,
  },
  error: {
    fontSize: 12,
    color: colors.error,
    marginTop: 4,
    marginLeft: 4,
  },
});
