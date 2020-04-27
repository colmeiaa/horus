import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'
import { View } from 'react-native';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

import Home from '../pages/home/home';
import Settings from '../pages/settings/setttings';


export default function tabNavi() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
      name="Home" 
      component={Home}  
      options={ { 
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon  style={[{color:tintColor}]} size={30} name='ios-home'/>
          </View>
        )
      }}

      />
      <Tab.Screen  
      name="Settings" 
      component={Settings}
      options={ { 
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon  style={[{color:tintColor}]} size={30} name='ios-settings'/>
          </View>
        ),
      }}
      
      />

    </Tab.Navigator>
    
  );
}