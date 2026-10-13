import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import GiftScreen from './src/screens/GiftScreen';
import GoogleLoginScreen from './src/screens/GoogleLoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import LiveRoomScreen from './src/screens/LiveRoomScreen';
import LoginScreen from './src/screens/LoginScreen';
import PhoneLoginScreen from './src/screens/PhoneLoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';

type ScreenName =
  | 'home'
  | 'live_room'
  | 'gift'
  | 'login'
  | 'register'
  | 'forgot_password'
  | 'phone_login'
  | 'google_login';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenName>('gift');

  return (
    <>
      {currentScreen === 'gift' ? (
        <GiftScreen
          onBack={() => setCurrentScreen('live_room')}
        />
      ) : currentScreen === 'live_room' ? (
        <LiveRoomScreen
          onBack={() => setCurrentScreen('home')}
          onNavigateToGift={() => setCurrentScreen('gift')}
        />
      ) : currentScreen === 'home' ? (
        <HomeScreen
          onNavigateToLiveRoom={() => setCurrentScreen('live_room')}
          onStartLive={() => setCurrentScreen('live_room')}
          onNavigateToProfile={() => setCurrentScreen('login')}
        />
      ) : currentScreen === 'google_login' ? (
        <GoogleLoginScreen
          onNavigateToLogin={() => setCurrentScreen('login')}
          onBack={() => setCurrentScreen('login')}
        />
      ) : currentScreen === 'phone_login' ? (
        <PhoneLoginScreen
          onNavigateToLogin={() => setCurrentScreen('login')}
          onBack={() => setCurrentScreen('login')}
        />
      ) : currentScreen === 'forgot_password' ? (
        <ForgotPasswordScreen
          onNavigateToLogin={() => setCurrentScreen('login')}
          onBack={() => setCurrentScreen('login')}
        />
      ) : currentScreen === 'register' ? (
        <RegisterScreen
          onNavigateToLogin={() => setCurrentScreen('login')}
          onBack={() => setCurrentScreen('login')}
        />
      ) : (
        <LoginScreen
          onNavigateToRegister={() => setCurrentScreen('register')}
          onNavigateToForgotPassword={() => setCurrentScreen('forgot_password')}
          onNavigateToPhoneLogin={() => setCurrentScreen('phone_login')}
          onNavigateToGoogleLogin={() => setCurrentScreen('google_login')}
          onNavigateToHome={() => setCurrentScreen('home')}
        />
      )}
      <StatusBar style="light" />
    </>
  );
}



