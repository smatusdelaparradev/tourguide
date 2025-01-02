import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from './theme/styled';
import { theme } from './theme/theme';
import AppNavigator from './navigation/AppNavigator';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <SafeAreaView style={styles.container}>
          <AppNavigator />
        </SafeAreaView>
      </NavigationContainer>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});