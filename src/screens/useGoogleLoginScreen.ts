import { useState } from 'react';
import { Alert } from 'react-native';

export interface GoogleAccount {
  id: string;
  name: string;
  email: string;
  initial: string;
  bgColor: string;
}

// Data akun Google bawaan sesuai desain Claude (Avatar A: #6C7BFF, Avatar B: #FFB86B)
export const DEFAULT_GOOGLE_ACCOUNTS: GoogleAccount[] = [
  {
    id: 'acc-1',
    name: 'Fadhillah Fajar',
    email: 'fajar.saputra@gmail.com',
    initial: 'A',
    bgColor: '#6C7BFF',
  },
  {
    id: 'acc-2',
    name: 'Fiyu Gaming Indonesia',
    email: 'fiyulive.official@gmail.com',
    initial: 'B',
    bgColor: '#FFB86B',
  },
];

type Props = {
  onNavigateToLogin?: () => void;
  onBack?: () => void;
};

export function useGoogleLoginScreen({ onNavigateToLogin, onBack }: Props = {}) {
  const [accounts] = useState<GoogleAccount[]>(DEFAULT_GOOGLE_ACCOUNTS);

  const handleSelectAccount = (account: GoogleAccount) => {
    Alert.alert(
      'Masuk dengan Google',
      `Berhasil masuk sebagai ${account.name} (${account.email})`,
      [
        {
          text: 'Lanjut',
          onPress: () => onNavigateToLogin?.(),
        },
      ]
    );
  };

  const handleUseOtherAccount = () => {
    Alert.alert(
      'Gunakan Akun Lain',
      'Membuka jendela login akun Google baru...',
      [{ text: 'Tutup' }]
    );
  };

  const handleClose = () => {
    if (onBack) {
      onBack();
    } else if (onNavigateToLogin) {
      onNavigateToLogin();
    } else {
      Alert.alert('Batal', 'Kembali ke halaman masuk');
    }
  };

  return {
    accounts,
    handleSelectAccount,
    handleUseOtherAccount,
    handleClose,
  };
}
