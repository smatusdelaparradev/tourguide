import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/Home/HomeScreen';
import GuideMenuScreen from '../screens/TourGuide/TourGuideScreen';
import ItineraryScreen from '../screens/Itinerary/ItineraryScreen';

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
          } else if (route.name === 'Itinerario') {
            iconName = 'airplane';
          } else if (route.name === 'Guía') {
            iconName = 'information-circle';
          }
          return <Ionicons name={iconName as any} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Itinerario" component={ItineraryScreen} />
      <Tab.Screen name="Guía" component={GuideMenuScreen} />
      <Tab.Screen
        name="Comunidad"
        component={() => null}
        listeners={{
          tabPress: (e: any) => {
            e.preventDefault();
          },
        }}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people" size={size} color="#D3D3D3" />
          ),
          tabBarLabelStyle: {
            color: '#D3D3D3',
          },
          tabBarStyle: {
            opacity: 0.5,
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
