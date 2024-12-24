import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home/HomeScreen';
import GuideMenuScreen from '../screens/TourGuide/TourGuideScreen';
import CommunityScreen from '../screens/Community/CommunityScreen';
import { Ionicons } from '@expo/vector-icons'; // Ejemplo de iconos

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#FFD100',
        tabBarInactiveTintColor: '#333',
        tabBarIcon: ({ color, size }) => {
          let iconName: string = 'home';
          if (route.name === 'Home') {
            iconName = 'airplane';
          } else if (route.name === 'Guide') {
            iconName = 'information-circle';
          } else if (route.name === 'Community') {
            iconName = 'people';
          }
          return <Ionicons name={iconName as any} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Guide" component={GuideMenuScreen} />
      <Tab.Screen name="Community" component={CommunityScreen} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
