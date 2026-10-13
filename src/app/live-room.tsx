import { router } from 'expo-router';
import LiveRoomScreen from '../screens/LiveRoomScreen';

// Rute /live-room = halaman Room Live Suara & Gift
export default function LiveRoomRoute() {
  return (
    <LiveRoomScreen
      onBack={() => router.back()}
      onNavigateToGift={() => router.push('/gift')}
      roomTitle="Ngobrol santai malam"
      listenerCount={128}
      hostName="Fitri"
      hostInitials="FR"
    />
  );
}
