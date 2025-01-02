import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingScreen from '../screens/Onboarding/OnboardingScreen';
import MainTabNavigator from './MainTabNavigator';
import { RootStackParamList } from '../types/navigation';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={MainTabNavigator} />
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
