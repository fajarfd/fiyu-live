import { router } from 'expo-router';
import PhoneLoginScreen from '../screens/PhoneLoginScreen';

// Rute /phone-login = halaman Masuk dengan Nomor HP
export default function PhoneLoginRoute() {
  return (
    <PhoneLoginScreen
      onNavigateToLogin={() => router.replace('/')}
      onBack={() => router.back()}
    />
  );
}
