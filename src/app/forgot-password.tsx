import { router } from 'expo-router';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';

// Rute /forgot-password = halaman Lupa Kata Sandi
export default function ForgotPasswordRoute() {
  return (
    <ForgotPasswordScreen
      onNavigateToLogin={() => router.replace('/')}
      onBack={() => router.back()}
    />
  );
}
