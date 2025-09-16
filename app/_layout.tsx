import { MaterialCommunityIcons } from '@expo/vector-icons';
import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { PaperProvider } from 'react-native-paper';
import 'react-native-reanimated';

export default function RootLayout() {

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
