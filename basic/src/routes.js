import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Login from './pages/login/login'
import tabNav from '../src/tabNav/tabNav.routes'


export default function Routes() {
  return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{headerLeft:false, title:null, headerTransparent:true}}/>
            <Stack.Screen name="tabNav" component={tabNav} options={{headerLeft:false, title:null, headerTransparent:true}}/>
        </Stack.Navigator>
  );
}