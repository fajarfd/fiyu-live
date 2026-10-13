import { StyleSheet } from 'react-native';
import { colors } from '../theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    marginTop: 4,
  },
  box: {
    width: 20,
    height: 20,
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: colors.muted,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 1,
    backgroundColor: 'transparent',
  },
  boxChecked: {
    backgroundColor: colors.accent,
    borderColor: colors.accent,
  },
  boxError: {
    borderColor: colors.error,
  },
  labelWrapper: {
    flex: 1,
  },
  labelText: {
    fontSize: 12,
    color: colors.muted,
    lineHeight: 18,
  },
  errorText: {
    fontSize: 12,
    color: colors.error,
    marginTop: 4,
    marginLeft: 30,
  },
});
