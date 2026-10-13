import { Feather } from '@expo/vector-icons';
import React from 'react';
import {
  Pressable,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import { colors } from '../theme';
import { styles } from './AppCheckbox.styles';

type Props = {
  checked: boolean;
  onToggle: () => void;
  label?: React.ReactNode;
  error?: string;
  style?: ViewStyle;
};

export default function AppCheckbox({
  checked,
  onToggle,
  label,
  error,
  style,
}: Props) {
  return (
    <View style={style}>
      <Pressable
        onPress={onToggle}
        style={styles.container}
        hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
      >
        <View
          style={[
            styles.box,
            checked && styles.boxChecked,
            Boolean(error) && !checked && styles.boxError,
          ]}
        >
          {checked ? (
            <Feather name="check" size={13} color={colors.background} />
          ) : null}
        </View>

        {label ? (
          <View style={styles.labelWrapper}>
            {typeof label === 'string' ? (
              <Text style={styles.labelText}>{label}</Text>
            ) : (
              label
            )}
          </View>
        ) : null}
      </Pressable>

      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
}
