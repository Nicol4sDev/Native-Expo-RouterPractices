import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';


const TabsLayout = () => {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: 'indigo',
      tabBarShowLabel: false,
    }} >
      <Tabs.Screen
        name="(stack)"
        options={{
          title: 'Stack',
          headerShown: false,
          tabBarIcon: ({ color }) => <Ionicons size={28} name="person-add-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="home/index"
        options={{
          title: 'Home Screen',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="home-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="favorites/index"
        options={{
          title: 'Favorites',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="star-outline" color={color} />,
        }}
      />
    </Tabs>
  )
}

export default TabsLayout