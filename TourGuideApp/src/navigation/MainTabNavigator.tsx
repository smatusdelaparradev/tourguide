import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/Home/HomeScreen';
import Itinerary from '../screens/Itinerary/ItineraryScreen';
import GuideMenuScreen from '../screens/TourGuide/TourGuideScreen';
import CommunityScreen from '../screens/Community/CommunityScreen';

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
            iconName = 'home';
          } else if (route.name === 'Itinerary') {
            iconName = 'airplane';
          }else if (route.name === 'Guide') {
            iconName = 'information-circle';
          } else if (route.name === 'Community') {
            iconName = 'people';
          }
          return <Ionicons name={iconName as any} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Itinerary" component={Itinerary} />
      <Tab.Screen name="Guide" component={GuideMenuScreen} />
      <Tab.Screen name="Community" component={CommunityScreen} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
