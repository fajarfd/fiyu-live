import { Feather, FontAwesome } from '@expo/vector-icons';
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
import { DECORATIVE_BUBBLES, styles } from './LoginScreen.styles';
import { useLoginScreen } from './useLoginScreen';

type Props = {
  onNavigateToRegister?: () => void;
  onNavigateToForgotPassword?: () => void;
  onNavigateToPhoneLogin?: () => void;
  onNavigateToGoogleLogin?: () => void;
  onNavigateToHome?: () => void;
};

export default function LoginScreen({
  onNavigateToRegister,
  onNavigateToForgotPassword,
  onNavigateToPhoneLogin,
  onNavigateToGoogleLogin,
  onNavigateToHome,
}: Props = {}) {
  const {
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
  } = useLoginScreen({
    onNavigateToRegister,
    onNavigateToForgotPassword,
    onNavigateToPhoneLogin,
    onNavigateToGoogleLogin,
    onNavigateToHome,
  });

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
          {/* Header Brand */}
          <View style={styles.header}>
            <View style={styles.logoBadge}>
              <Feather name="radio" size={28} color={colors.background} />
            </View>

            <Text style={styles.brandTitle}>
              Fiyu <Text style={styles.brandHighlight}>Live</Text>
            </Text>
            <Text style={styles.subtitle}>
              Ngobrol, dengar, dan bagi cerita{'\n'}secara live bersama teman baru.
            </Text>
          </View>

          {/* Form Input */}
          <View style={styles.form}>
            <AppInput
              placeholder="Nama pengguna"
              value={username}
              onChangeText={handleUsernameChange}
              autoCapitalize="none"
              error={errors.username}
              leftIcon={<Feather name="user" size={18} color={colors.muted} />}
            />

            <AppInput
              placeholder="Kata sandi"
              value={password}
              onChangeText={handlePasswordChange}
              secureTextEntry={!showPassword}
              error={errors.password}
              leftIcon={<Feather name="lock" size={18} color={colors.muted} />}
              rightIcon={
                <TouchableOpacity
                  onPress={togglePasswordVisibility}
                  hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                >
                  <Feather
                    name={showPassword ? 'eye' : 'eye-off'}
                    size={18}
                    color={colors.muted}
                  />
                </TouchableOpacity>
              }
            />

            <TouchableOpacity
              onPress={handleForgotPassword}
              style={styles.forgotWrapper}
            >
              <Text style={styles.forgotText}>Lupa kata sandi?</Text>
            </TouchableOpacity>

            <AppButton title="Masuk" onPress={handleLogin} />
          </View>

          {/* Divider */}
          <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>atau masuk dengan</Text>
            <View style={styles.dividerLine} />
          </View>

          {/* Tombol Login Alternatif */}
          <View style={styles.socialRow}>
            <AppButton
              variant="social"
              title="Google"
              icon={<FontAwesome name="google" size={16} color={colors.text} />}
              onPress={handleGoogleLogin}
            />
            <AppButton
              variant="social"
              title="Nomor HP"
              icon={<Feather name="smartphone" size={17} color={colors.text} />}
              onPress={handlePhoneLogin}
            />
          </View>

          {/* Footer */}
          <View style={styles.footerContainer}>
            <Text style={styles.signupText}>
              Belum punya akun?{' '}
              <Text style={styles.signupLink} onPress={handleRegister}>
                Daftar
              </Text>
            </Text>
            <Text style={styles.termsText}>
              Dengan masuk, kamu menyetujui Ketentuan Layanan{'\n'}dan Kebijakan Privasi Fiyu Live.
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}
