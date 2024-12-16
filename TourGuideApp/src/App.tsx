import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from './theme/styled';
import { theme } from './theme/theme';
import AppNavigator from './navigation/AppNavigator';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
          <AppNavigator />
        </SafeAreaView>
      </NavigationContainer>
    </ThemeProvider>
  );
}
