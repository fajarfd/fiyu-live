import { Feather } from '@expo/vector-icons';
import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AppButton from '../components/AppButton';
import AppInput from '../components/AppInput';
import { colors } from '../theme';
import { DECORATIVE_BUBBLES, styles } from './ForgotPasswordScreen.styles';
import { useForgotPasswordScreen } from './useForgotPasswordScreen';

type Props = {
  onNavigateToLogin?: () => void;
  onBack?: () => void;
};

export default function ForgotPasswordScreen({
  onNavigateToLogin,
  onBack,
}: Props) {
  const {
    email,
    error,
    isSubmitted,
    cooldown,
    handleEmailChange,
    handleSendLink,
    handleBack,
    handleBackToLogin,
  } = useForgotPasswordScreen({ onNavigateToLogin, onBack });

  return (
    <View style={styles.screen}>
      {/* Gelembung Dekoratif via Loop Ringkas */}
      {DECORATIVE_BUBBLES.map((bubble) => (
        <View key={bubble.key} style={[styles.bubbleBase, bubble]} />
      ))}

      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Header & Navigasi */}
          <View style={styles.header}>
            <TouchableOpacity
              onPress={handleBack}
              style={styles.backButton}
              hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
              accessibilityRole="button"
              accessibilityLabel="Kembali"
            >
              <Feather name="chevron-left" size={24} color={colors.text} />
            </TouchableOpacity>

            {/* Badge Ikon Gembok */}
            <View style={styles.iconBadge}>
              <Feather name="lock" size={32} color={colors.accent} />
            </View>

            <Text style={styles.title}>Lupa kata sandi?</Text>
            <Text style={styles.subtitle}>
              Masukkan email akunmu. Kami akan mengirim tautan untuk membuat kata sandi baru.
            </Text>
          </View>

          {/* Form Input Email & Kirim Tautan */}
          <View style={styles.form}>
            {isSubmitted ? (
              <View style={styles.successBanner}>
                <Text style={styles.successTitle}>Tautan Terkirim!</Text>
                <Text style={styles.successDesc}>
                  Cek email kamu ({email}) untuk melanjutkan reset kata sandi.
                </Text>
              </View>
            ) : null}

            <AppInput
              placeholder="Email akun"
              value={email}
              onChangeText={handleEmailChange}
              error={error}
              keyboardType="email-address"
              autoCapitalize="none"
              leftIcon={<Feather name="mail" size={18} color={colors.muted} />}
            />

            <AppButton
              title={cooldown > 0 ? `Kirim ulang (${cooldown}s)` : 'Kirim tautan'}
              onPress={handleSendLink}
              style={styles.submitButton}
            />

            <Text style={styles.helperText}>
              Tidak menerima email? Cek folder spam atau coba lagi setelah 1 menit.
            </Text>
          </View>

          {/* Footer Kembali ke Masuk */}
          <View style={styles.footerContainer}>
            <TouchableOpacity onPress={handleBackToLogin} activeOpacity={0.7}>
              <Text style={styles.footerLink}>Kembali ke Masuk</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}
