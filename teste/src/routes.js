import React from 'react';
import { createAppContainer } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import { StatusBar } from 'react-native';

const Stack = createStackNavigator();

import Login from './pages/login/login';
import Home from './pages/home/home';
import Settings from './pages/settings/settings';


export default function Routes(){
  return(
    <NavigationContainer>
      <StatusBar barStyle="default" />
      <Stack.Navigator screenOptions={{headerTransparent: true, headerTitle: null}}>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Settings' component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}