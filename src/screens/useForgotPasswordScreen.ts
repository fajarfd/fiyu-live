import { useEffect, useState } from 'react';
import { Alert } from 'react-native';

type Props = {
  onNavigateToLogin?: () => void;
  onBack?: () => void;
};

export function useForgotPasswordScreen({ onNavigateToLogin, onBack }: Props = {}) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | undefined>();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  // Efek hitung mundur 60 detik sebelum bisa kirim ulang
  useEffect(() => {
    if (cooldown <= 0) return;

    const timer = setInterval(() => {
      setCooldown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [cooldown]);

  const validate = (): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.trim().length === 0) {
      setError('Email wajib diisi');
      return false;
    }

    if (!emailRegex.test(email.trim())) {
      setError('Format email tidak valid');
      return false;
    }

    setError(undefined);
    return true;
  };

  const handleEmailChange = (text: string) => {
    setEmail(text);
    if (error) {
      setError(undefined);
    }
  };

  const handleSendLink = () => {
    if (!validate()) return;
    if (cooldown > 0) {
      Alert.alert('Mohon Tunggu', `Kamu bisa mengirim ulang tautan dalam ${cooldown} detik.`);
      return;
    }

    setIsSubmitted(true);
    setCooldown(60);

    Alert.alert(
      'Tautan Terkirim',
      `Tautan pemulihan kata sandi telah dikirim ke ${email.trim()}. Silakan periksa inbox atau folder spam kamu.`,
      [{ text: 'OK' }]
    );
  };

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      Alert.alert('Kembali', 'Kembali ke layar sebelumnya');
    }
  };

  const handleBackToLogin = () => {
    if (onNavigateToLogin) {
      onNavigateToLogin();
    } else {
      Alert.alert('Masuk', 'Kembali ke formulir masuk...');
    }
  };

  return {
    email,
    error,
    isSubmitted,
    cooldown,
    handleEmailChange,
    handleSendLink,
    handleBack,
    handleBackToLogin,
  };
}
