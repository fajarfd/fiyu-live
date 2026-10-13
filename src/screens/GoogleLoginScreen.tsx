import { Feather } from '@expo/vector-icons';
import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { colors } from '../theme';
import { DECORATIVE_BUBBLES, styles } from './GoogleLoginScreen.styles';
import { useGoogleLoginScreen } from './useGoogleLoginScreen';

type Props = {
  onNavigateToLogin?: () => void;
  onBack?: () => void;
};

export default function GoogleLoginScreen({
  onNavigateToLogin,
  onBack,
}: Props) {
  const {
    accounts,
    handleSelectAccount,
    handleUseOtherAccount,
    handleClose,
  } = useGoogleLoginScreen({ onNavigateToLogin, onBack });

  return (
    <View style={styles.screen}>
      {/* Gelembung Dekoratif via Loop Ringkas */}
      {DECORATIVE_BUBBLES.map((bubble) => (
        <View key={bubble.key} style={[styles.bubbleBase, bubble]} />
      ))}

      {/* Tombol Tutup / Kembali */}
      <TouchableOpacity
        style={styles.closeButton}
        onPress={handleClose}
        hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
        accessibilityRole="button"
        accessibilityLabel="Tutup"
      >
        <Feather name="x" size={20} color={colors.text} />
      </TouchableOpacity>

      {/* Latar Belakang Brand (Backdrop) */}
      <View style={styles.topBackdrop}>
        <Text style={styles.brandTitle}>
          Fiyu <Text style={styles.brandHighlight}>Live</Text>
        </Text>
        <Text style={styles.brandSubtitle}>Masuk dengan Google</Text>
      </View>

      {/* Bottom Sheet Pemilihan Akun Google */}
      <View style={styles.bottomSheet}>
        <Text style={styles.sheetTitle}>Pilih akun</Text>
        <Text style={styles.sheetSubtitle}>untuk melanjutkan ke Fiyu Live</Text>

        {/* Perulangan Daftar Akun via Loop Ringkas */}
        {accounts.map((account, index) => (
          <TouchableOpacity
            key={account.id}
            style={[
              styles.accountRow,
              index < accounts.length && styles.accountRowBorder,
            ]}
            onPress={() => handleSelectAccount(account)}
            activeOpacity={0.7}
          >
            <View style={[styles.avatar, { backgroundColor: account.bgColor }]}>
              <Text style={styles.avatarText}>{account.initial}</Text>
            </View>

            <View style={styles.accountInfo}>
              <Text style={styles.accountName}>{account.name}</Text>
              <Text style={styles.accountEmail}>{account.email}</Text>
            </View>
          </TouchableOpacity>
        ))}

        {/* Opsi Gunakan Akun Lain */}
        <TouchableOpacity
          style={styles.accountRow}
          onPress={handleUseOtherAccount}
          activeOpacity={0.7}
        >
          <View style={styles.avatarOther}>
            <Feather name="user" size={18} color={colors.text} />
          </View>

          <View style={styles.accountInfo}>
            <Text style={styles.otherAccountText}>Gunakan akun lain</Text>
          </View>
        </TouchableOpacity>

        {/* Kebijakan Privasi Google */}
        <Text style={styles.disclaimer}>
          Fiyu Live hanya menerima nama, email, dan foto profil dari akun Google kamu.
        </Text>
      </View>
    </View>
  );
}
