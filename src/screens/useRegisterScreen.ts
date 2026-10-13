import { useState } from 'react';
import { Alert } from 'react-native';

export type RegisterFormData = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  isAgreed: boolean;
};

export type RegisterFormErrors = {
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  isAgreed?: string;
};

export type RegisterFieldKey = 'username' | 'email' | 'password' | 'confirmPassword';

export interface RegisterFieldConfig {
  key: RegisterFieldKey;
  placeholder: string;
  icon: 'user' | 'mail' | 'lock';
  keyboardType?: 'default' | 'email-address';
  autoCapitalize?: 'none' | 'sentences';
  isSecure?: boolean;
  showText?: boolean;
  toggleVisibility?: () => void;
}

type Props = {
  onNavigateToLogin?: () => void;
  onBack?: () => void;
};

export function useRegisterScreen({ onNavigateToLogin, onBack }: Props = {}) {
  const [form, setForm] = useState<RegisterFormData>({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    isAgreed: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<RegisterFormErrors>({});

  const validate = (): boolean => {
    const newErrors: RegisterFormErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (form.username.trim().length === 0) {
      newErrors.username = 'Nama pengguna wajib diisi';
    } else if (form.username.trim().length < 3) {
      newErrors.username = 'Nama pengguna minimal 3 karakter';
    }

    if (form.email.trim().length === 0) {
      newErrors.email = 'Email wajib diisi';
    } else if (!emailRegex.test(form.email.trim())) {
      newErrors.email = 'Format email tidak valid';
    }

    if (form.password.length < 6) {
      newErrors.password = 'Kata sandi minimal 6 karakter';
    }

    if (form.confirmPassword.length === 0) {
      newErrors.confirmPassword = 'Ulangi kata sandi wajib diisi';
    } else if (form.confirmPassword !== form.password) {
      newErrors.confirmPassword = 'Kata sandi tidak cocok';
    }

    if (!form.isAgreed) {
      newErrors.isAgreed = 'Kamu harus menyetujui syarat & ketentuan';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFieldChange = (key: RegisterFieldKey, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
  };

  const toggleAgreement = () => {
    setForm((prev) => ({ ...prev, isAgreed: !prev.isAgreed }));
    if (errors.isAgreed) {
      setErrors((prev) => ({ ...prev, isAgreed: undefined }));
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const handleRegister = () => {
    if (!validate()) return;
    Alert.alert(
      'Pendaftaran Berhasil',
      `Selamat bergabung di Fiyu Live, ${form.username.trim()}! Silakan masuk ke akunmu.`,
      [
        {
          text: 'Masuk Sekarang',
          onPress: () => onNavigateToLogin?.(),
        },
      ]
    );
  };

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      Alert.alert('Kembali', 'Kembali ke layar sebelumnya');
    }
  };

  const handleLogin = () => {
    if (onNavigateToLogin) {
      onNavigateToLogin();
    } else {
      Alert.alert('Masuk', 'Navigasi ke formulir masuk...');
    }
  };

  // Konfigurasi ringkas untuk perulangan loop input form
  const formFields: RegisterFieldConfig[] = [
    {
      key: 'username',
      placeholder: 'Nama pengguna',
      icon: 'user',
      autoCapitalize: 'none',
    },
    {
      key: 'email',
      placeholder: 'Email',
      icon: 'mail',
      keyboardType: 'email-address',
      autoCapitalize: 'none',
    },
    {
      key: 'password',
      placeholder: 'Kata sandi',
      icon: 'lock',
      isSecure: true,
      showText: showPassword,
      toggleVisibility: togglePasswordVisibility,
      autoCapitalize: 'none',
    },
    {
      key: 'confirmPassword',
      placeholder: 'Ulangi kata sandi',
      icon: 'lock',
      isSecure: true,
      showText: showConfirmPassword,
      toggleVisibility: toggleConfirmPasswordVisibility,
      autoCapitalize: 'none',
    },
  ];

  return {
    form,
    errors,
    formFields,
    handleFieldChange,
    toggleAgreement,
    handleRegister,
    handleBack,
    handleLogin,
  };
}
