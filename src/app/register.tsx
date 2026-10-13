import { router } from 'expo-router';
import RegisterScreen from '../screens/RegisterScreen';

// Rute /register = halaman Daftar Akun
export default function RegisterRoute() {
  return (
    <RegisterScreen
      onNavigateToLogin={() => router.replace('/')}
      onBack={() => router.back()}
    />
  );
}
