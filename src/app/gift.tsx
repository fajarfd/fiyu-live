import { router } from 'expo-router';
import GiftScreen from '../screens/GiftScreen';

// Rute /gift = halaman modal kirim gift
export default function GiftRoute() {
  return (
    <GiftScreen
      onBack={() => router.back()}
      onSendGiftSuccess={(gift) => {
        console.log('Gift berhasil dikirim:', gift.name);
      }}
    />
  );
}
