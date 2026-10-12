import React from 'react';
import {
  Text,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';
import { colors } from '../theme';
import { styles } from './AppInput.styles';

type Props = TextInputProps & {
  label?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

export default function AppInput({
  label,
  error,
  leftIcon,
  rightIcon,
  style,
  ...rest
}: Props) {
  return (
    <View style={styles.wrapper}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <View style={[styles.fieldContainer, error ? styles.fieldError : null]}>
        {leftIcon ? <View style={styles.iconLeft}>{leftIcon}</View> : null}
        <TextInput
          placeholderTextColor={colors.muted}
          style={[styles.input, style]}
          selectionColor={colors.accent}
          {...rest}
        />
        {rightIcon ? <View style={styles.iconRight}>{rightIcon}</View> : null}
      </View>
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
}
