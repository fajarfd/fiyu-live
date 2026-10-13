import { Feather } from '@expo/vector-icons';
import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AppButton from '../components/AppButton';
import AppInput from '../components/AppInput';
import { colors } from '../theme';
import { DECORATIVE_BUBBLES, styles } from './PhoneLoginScreen.styles';
import { OTP_BOXES, usePhoneLoginScreen } from './usePhoneLoginScreen';

type Props = {
  onNavigateToLogin?: () => void;
  onBack?: () => void;
};

export default function PhoneLoginScreen({
  onNavigateToLogin,
  onBack,
}: Props) {
  const {
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
  } = usePhoneLoginScreen({ onNavigateToLogin, onBack });

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

            <Text style={styles.title}>Masuk dengan nomor HP</Text>
            <Text style={styles.subtitle}>
              Kami akan mengirim kode verifikasi 6 digit lewat SMS.
            </Text>
          </View>

          {/* Form Input Nomor HP */}
          <View style={styles.form}>
            <View style={styles.phoneRow}>
              <View style={styles.countryCodeBadge}>
                <Text style={styles.countryCodeText}>+62</Text>
              </View>

              <View style={styles.phoneInputWrapper}>
                <AppInput
                  placeholder="812 3456 7890"
                  value={phoneNumber}
                  onChangeText={handlePhoneChange}
                  error={phoneError}
                  keyboardType="phone-pad"
                  autoCapitalize="none"
                  leftIcon={
                    <Feather name="smartphone" size={18} color={colors.muted} />
                  }
                />
              </View>
            </View>

            <AppButton
              title={isCodeSent ? 'Verifikasi & Masuk' : 'Kirim kode'}
              onPress={isCodeSent ? handleVerifyButton : handleSendCode}
              style={styles.submitButton}
            />

            <Text style={styles.disclaimerText}>
              Tarif SMS dari operator mungkin berlaku.
            </Text>
          </View>

          {/* Bagian Masukkan Kode OTP (6 Digit Box Loop) */}
          <Pressable
            onPress={focusOtpInput}
            style={[
              styles.otpSection,
              !isCodeSent && styles.otpSectionInactive,
            ]}
          >
            <Text style={styles.otpStepLabel}>
              Langkah berikutnya: masukkan kode
            </Text>

            {/* Hidden Input untuk memicu keyboard angka secara native */}
            <TextInput
              ref={otpInputRef}
              value={otpCode}
              onChangeText={handleOtpChange}
              keyboardType="number-pad"
              maxLength={6}
              style={styles.otpHiddenInput}
            />

            {/* Loop 6 Kotak Digit OTP */}
            <View style={styles.otpRow}>
              {OTP_BOXES.map((index) => {
                const digit = otpCode[index] || '';
                const isCurrent = isCodeSent && index === otpCode.length;

                return (
                  <View
                    key={index}
                    style={[
                      styles.otpBox,
                      Boolean(digit) && styles.otpBoxFilled,
                      isCurrent && styles.otpBoxActive,
                    ]}
                  >
                    <Text style={styles.otpDigit}>{digit}</Text>
                  </View>
                );
              })}
            </View>

            {/* Status Timer & Kirim Ulang */}
            <View style={styles.otpResendRow}>
              {cooldown > 0 ? (
                <Text style={styles.otpTimerText}>
                  Kirim ulang kode dalam {formatTimer(cooldown)}
                </Text>
              ) : isCodeSent ? (
                <TouchableOpacity onPress={handleResendCode} activeOpacity={0.7}>
                  <Text style={styles.otpResendLink}>Kirim ulang kode sekarang</Text>
                </TouchableOpacity>
              ) : (
                <Text style={styles.otpTimerText}>Kirim ulang kode dalam 00:45</Text>
              )}
            </View>

            {otpError ? (
              <Text style={{ color: colors.error, fontSize: 12 }}>{otpError}</Text>
            ) : null}
          </Pressable>

          {/* Footer Navigasi ke Login Username */}
          <View style={styles.footerContainer}>
            <TouchableOpacity onPress={handleBackToLogin} activeOpacity={0.7}>
              <Text style={styles.footerLink}>Masuk dengan nama pengguna</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}
