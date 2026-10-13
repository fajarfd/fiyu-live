import { Stack } from 'expo-router';

// Root layout: mendefinisikan navigator Stack untuk semua rute autentikasi
export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="home" />
      <Stack.Screen name="live-room" />
      <Stack.Screen name="gift" options={{ presentation: 'transparentModal' }} />
      <Stack.Screen name="register" />
      <Stack.Screen name="forgot-password" />
      <Stack.Screen name="phone-login" />
      <Stack.Screen name="google-login" />
    </Stack>
  );
}
