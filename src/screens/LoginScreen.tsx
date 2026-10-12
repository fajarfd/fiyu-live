import { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AppButton from '../components/AppButton';
import AppInput from '../components/AppInput';
import { colors, spacing } from '../theme';

type Errors = {
  username?: string;
  password?: string;
};

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<Errors>({});

  const validate = (): boolean => {
    const newErrors: Errors = {};

    if (username.trim().length === 0) {
      newErrors.username = 'Nama pengguna wajib diisi';
    }
    if (password.length < 6) {
      newErrors.password = 'Kata sandi minimal 6 karakter';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = () => {
    if (!validate()) {
      return;
    }
    // Simulasi dulu. Nanti diganti pemanggilan API ke backend.
    Alert.alert('Berhasil', `Selamat datang, ${username.trim()}!`);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.header}>
          <Text style={styles.logo}>Fiyu Live</Text>
          <Text style={styles.subtitle}>Masuk untuk mulai ngobrol</Text>
        </View>

        <AppInput
          label="Nama pengguna"
          placeholder="contoh: fajar"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
          error={errors.username}
        />
        <AppInput
          label="Kata sandi"
          placeholder="Minimal 6 karakter"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          error={errors.password}
        />

        <View style={styles.buttonWrapper}>
          <AppButton title="Masuk" onPress={handleLogin} />
        </View>

        <Text style={styles.footer}>Belum punya akun? Daftar</Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: spacing.lg,
  },
  header: {
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  logo: {
    fontSize: 36,
    fontWeight: '700',
    color: colors.primary,
  },
  subtitle: {
    fontSize: 14,
    color: colors.muted,
    marginTop: spacing.sm,
  },
  buttonWrapper: {
    marginTop: spacing.sm,
  },
  footer: {
    textAlign: 'center',
    color: colors.muted,
    marginTop: spacing.lg,
  },
});
