import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import  MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

import Home from '../pages/home/home'
import Settings from '../pages/settings/settings'
import Turmas from '../pages/turmas/turmas'

export default function tabNav() {
  return (
    <Tab.Navigator
    initialRouteName="Home"
    activeColor="#00ace6"
    inactiveColor="#bfbfbf"
    barStyle={{ backgroundColor: 'white' }}

      >
      <Tab.Screen name="Home" component={Home} 
      options={{tabBarIcon: ({ color }) => ( <MaterialCommunityIcons name="home" color={color} size={26} /> )} } />

      <Tab.Screen name="Turmas" component={Turmas} 
      options={{tabBarIcon: ({ color }) => ( <MaterialCommunityIcons name="book" color={color} size={26} /> )} } />

      <Tab.Screen name="Settings" component={Settings} 
      options={{tabBarIcon: ({ color }) => ( <MaterialCommunityIcons name="settings" color={color} size={26} /> )} } />

    </Tab.Navigator>
  );
}