import { router } from 'expo-router';
import GoogleLoginScreen from '../screens/GoogleLoginScreen';

// Rute /google-login = halaman Masuk dengan Google
export default function GoogleLoginRoute() {
  return (
    <GoogleLoginScreen
      onNavigateToLogin={() => router.replace('/')}
      onBack={() => router.back()}
    />
  );
}
