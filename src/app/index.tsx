import { router } from 'expo-router';
import LoginScreen from '../screens/LoginScreen';

// Rute index = halaman Masuk (titik awal aplikasi)
export default function LoginRoute() {
  return (
    <LoginScreen
      onNavigateToRegister={() => router.push('/register')}
      onNavigateToForgotPassword={() => router.push('/forgot-password')}
      onNavigateToPhoneLogin={() => router.push('/phone-login')}
      onNavigateToGoogleLogin={() => router.push('/google-login')}
      onNavigateToHome={() => router.replace('/home')}
    />
  );
}
