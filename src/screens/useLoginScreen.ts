import { useState } from 'react';
import { Alert } from 'react-native';

export type FormErrors = {
  username?: string;
  password?: string;
};

type Props = {
  onNavigateToRegister?: () => void;
  onNavigateToForgotPassword?: () => void;
  onNavigateToPhoneLogin?: () => void;
  onNavigateToGoogleLogin?: () => void;
  onNavigateToHome?: () => void;
};

export function useLoginScreen({
  onNavigateToRegister,
  onNavigateToForgotPassword,
  onNavigateToPhoneLogin,
  onNavigateToGoogleLogin,
  onNavigateToHome,
}: Props = {}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

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
    if (!validate()) return;
    if (onNavigateToHome) {
      onNavigateToHome();
    } else {
      Alert.alert('Berhasil', `Selamat datang, ${username.trim()}!`);
    }
  };

  const handleUsernameChange = (text: string) => {
    setUsername(text);
    if (errors.username) {
      setErrors((prev) => ({ ...prev, username: undefined }));
    }
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
    if (errors.password) {
      setErrors((prev) => ({ ...prev, password: undefined }));
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleForgotPassword = () => {
    if (onNavigateToForgotPassword) {
      onNavigateToForgotPassword();
    } else {
      Alert.alert('Lupa Kata Sandi', 'Fitur reset sandi akan segera hadir.');
    }
  };

  const handleGoogleLogin = () => {
    if (onNavigateToGoogleLogin) {
      onNavigateToGoogleLogin();
    } else {
      Alert.alert('Login Google', 'Masuk dengan akun Google...');
    }
  };

  const handlePhoneLogin = () => {
    if (onNavigateToPhoneLogin) {
      onNavigateToPhoneLogin();
    } else {
      Alert.alert('Login Nomor HP', 'Masuk dengan Nomor HP...');
    }
  };

  const handleRegister = () => {
    if (onNavigateToRegister) {
      onNavigateToRegister();
    } else {
      Alert.alert('Daftar', 'Navigasi ke formulir pendaftaran...');
    }
  };

  return {
    username,
    password,
    showPassword,
    errors,
    handleUsernameChange,
    handlePasswordChange,
    togglePasswordVisibility,
    handleLogin,
    handleForgotPassword,
    handleGoogleLogin,
    handlePhoneLogin,
    handleRegister,
  };
}
