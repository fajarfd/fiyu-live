import { router } from 'expo-router';
import HomeScreen from '../screens/HomeScreen';

// Rute /home = halaman Beranda Fiyu Live
export default function HomeRoute() {
  return (
    <HomeScreen
      onNavigateToLiveRoom={() => {
        router.push('/live-room');
      }}
      onNavigateToSearch={() => {
        console.log('Buka pencarian');
      }}
      onNavigateToNotifications={() => {
        console.log('Buka notifikasi');
      }}
      onNavigateToProfile={() => {
        console.log('Buka profil');
      }}
      onStartLive={() => {
        router.push('/live-room');
      }}
    />
  );
}
