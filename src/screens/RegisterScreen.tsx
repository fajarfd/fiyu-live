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
import AppCheckbox from '../components/AppCheckbox';
import AppInput from '../components/AppInput';
import { colors } from '../theme';
import { DECORATIVE_BUBBLES, styles } from './RegisterScreen.styles';
import { useRegisterScreen } from './useRegisterScreen';

type Props = {
  onNavigateToLogin?: () => void;
  onBack?: () => void;
};

export default function RegisterScreen({ onNavigateToLogin, onBack }: Props) {
  const {
    form,
    errors,
    formFields,
    handleFieldChange,
    toggleAgreement,
    handleRegister,
    handleBack,
    handleLogin,
  } = useRegisterScreen({ onNavigateToLogin, onBack });

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

            <Text style={styles.title}>Buat akun baru</Text>
            <Text style={styles.subtitle}>
              Gabung Fiyu Live dan mulai ngobrol.
            </Text>
          </View>

          {/* Form Input via Loop Ringkas */}
          <View style={styles.form}>
            {formFields.map((field) => (
              <AppInput
                key={field.key}
                placeholder={field.placeholder}
                value={form[field.key]}
                onChangeText={(text) => handleFieldChange(field.key, text)}
                error={errors[field.key]}
                secureTextEntry={field.isSecure && !field.showText}
                keyboardType={field.keyboardType}
                autoCapitalize={field.autoCapitalize}
                leftIcon={
                  <Feather name={field.icon} size={18} color={colors.muted} />
                }
                rightIcon={
                  field.isSecure ? (
                    <TouchableOpacity
                      onPress={field.toggleVisibility}
                      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                    >
                      <Feather
                        name={field.showText ? 'eye' : 'eye-off'}
                        size={18}
                        color={colors.muted}
                      />
                    </TouchableOpacity>
                  ) : null
                }
              />
            ))}

            {/* Checkbox Syarat & Ketentuan Usia 17+ */}
            <AppCheckbox
              checked={form.isAgreed}
              onToggle={toggleAgreement}
              error={errors.isAgreed}
              label={
                <Text style={styles.termsText}>
                  Saya berusia 17 tahun ke atas dan menyetujui{' '}
                  <Text style={styles.termsHighlight}>Ketentuan Layanan</Text>{' '}
                  serta{' '}
                  <Text style={styles.termsHighlight}>Kebijakan Privasi</Text>.
                </Text>
              }
            />

            {/* Tombol Aksi Daftar */}
            <AppButton
              title="Daftar"
              onPress={handleRegister}
              style={styles.submitButton}
            />
          </View>

          {/* Footer Navigasi Masuk */}
          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>
              Sudah punya akun?{' '}
              <Text style={styles.footerLink} onPress={handleLogin}>
                Masuk
              </Text>
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}
