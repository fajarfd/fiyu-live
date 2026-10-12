import React from 'react';
import {
  Pressable,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import { styles } from './AppButton.styles';

type Props = {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'social';
  icon?: React.ReactNode;
  style?: ViewStyle;
};

export default function AppButton({
  title,
  onPress,
  variant = 'primary',
  icon,
  style,
}: Props) {
  const isSocial = variant === 'social';

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.base,
        isSocial ? styles.socialButton : styles.primaryButton,
        pressed && styles.pressed,
        style,
      ]}
    >
      {icon ? <View style={styles.iconWrapper}>{icon}</View> : null}
      <Text style={isSocial ? styles.socialTitle : styles.primaryTitle}>
        {title}
      </Text>
    </Pressable>
  );
}
