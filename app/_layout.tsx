import { MaterialCommunityIcons } from '@expo/vector-icons';
import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { PaperProvider } from 'react-native-paper';
import 'react-native-reanimated';

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Audiowide: require("../assets/fonts/Audiowide-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded || error) SplashScreen.hideAsync();
  }, [loaded, error]);

  if (!loaded && !error) return null;

  return (
    <ThemeProvider value={DefaultTheme}>
      <PaperProvider
        settings={{
          icon: (props) => <MaterialCommunityIcons {...props} />,
        }}
      >
        <Stack screenOptions={{
            headerShown: false
          }}/>
      </PaperProvider>
    </ThemeProvider>
  );
}

