import { useEffect, useRef, useState } from 'react';
import { Alert, TextInput } from 'react-native';

export const OTP_LENGTH = 6;
export const OTP_BOXES = Array.from({ length: OTP_LENGTH }, (_, i) => i);

type Props = {
  onNavigateToLogin?: () => void;
  onBack?: () => void;
};

export function usePhoneLoginScreen({ onNavigateToLogin, onBack }: Props = {}) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneError, setPhoneError] = useState<string | undefined>();
  const [otpCode, setOtpCode] = useState('');
  const [otpError, setOtpError] = useState<string | undefined>();
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  const otpInputRef = useRef<TextInput>(null);

  // Countdown timer 45 detik sesuai desain HTML Claude (00:45)
  useEffect(() => {
    if (cooldown <= 0) return;

    const timer = setInterval(() => {
      setCooldown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [cooldown]);

  const formatTimer = (seconds: number): string => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const cleanPhone = (val: string): string => {
    return val.replace(/[^0-9]/g, '');
  };

  const handlePhoneChange = (text: string) => {
    const cleaned = cleanPhone(text);
    setPhoneNumber(cleaned);
    if (phoneError) {
      setPhoneError(undefined);
    }
  };

  const handleOtpChange = (text: string) => {
    const cleaned = cleanPhone(text).slice(0, OTP_LENGTH);
    setOtpCode(cleaned);
    if (otpError) {
      setOtpError(undefined);
    }

    // Otomatis verifikasi jika sudah 6 digit
    if (cleaned.length === OTP_LENGTH) {
      verifyCode(cleaned);
    }
  };

  const validatePhone = (): boolean => {
    if (phoneNumber.trim().length === 0) {
      setPhoneError('Nomor HP wajib diisi');
      return false;
    }
    if (phoneNumber.trim().length < 9) {
      setPhoneError('Nomor HP minimal 9 digit');
      return false;
    }
    setPhoneError(undefined);
    return true;
  };

  const handleSendCode = () => {
    if (!validatePhone()) return;

    setIsCodeSent(true);
    setCooldown(45);
    setOtpCode('');

    Alert.alert(
      'Kode Terkirim',
      `Kode verifikasi 6-digit dikirim via SMS ke +62 ${phoneNumber}. (Kode demo: 123456)`,
      [{ text: 'OK', onPress: () => otpInputRef.current?.focus() }]
    );
  };

  const verifyCode = (codeToVerify: string) => {
    if (codeToVerify.length < OTP_LENGTH) {
      setOtpError('Masukkan 6 digit kode verifikasi');
      return;
    }

    Alert.alert(
      'Masuk Berhasil',
      `Selamat datang kembali! Nomor +62 ${phoneNumber} berhasil diverifikasi.`,
      [{ text: 'Lanjut', onPress: () => onNavigateToLogin?.() }]
    );
  };

  const handleVerifyButton = () => {
    verifyCode(otpCode);
  };

  const handleResendCode = () => {
    if (cooldown > 0) return;
    handleSendCode();
  };

  const focusOtpInput = () => {
    otpInputRef.current?.focus();
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
      Alert.alert('Masuk', 'Navigasi ke formulir login...');
    }
  };

  return {
    phoneNumber,
    phoneError,
    otpCode,
    otpError,
    isCodeSent,
    cooldown,
    otpInputRef,
    formatTimer,
    handlePhoneChange,
    handleOtpChange,
    handleSendCode,
    handleVerifyButton,
    handleResendCode,
    focusOtpInput,
    handleBack,
    handleBackToLogin,
  };
}
