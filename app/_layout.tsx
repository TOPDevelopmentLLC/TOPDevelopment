import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { Toaster } from 'components/feedback/sonner';
import { AuthProvider } from 'lib/context/AuthContext';
import 'react-native-reanimated';

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Audiowide: require("../assets/fonts/Audiowide-Regular.ttf"),
    NotoSans: require("../assets/fonts/NotoSans.ttf"),
  });

  useEffect(() => {
    if (loaded || error) SplashScreen.hideAsync();
  }, [loaded, error]);

  if (!loaded && !error) return null;

  return (
    <AuthProvider>
      <ThemeProvider value={DefaultTheme}>
        <Stack screenOptions={{
            headerShown: false
          }}/>
        <Toaster position="top-center" theme="dark" />
      </ThemeProvider>
    </AuthProvider>
  );
}

