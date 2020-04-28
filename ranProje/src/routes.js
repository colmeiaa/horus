import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Login from './pages/login/login';

import tabNavi from './tabNavigator/tabNavigator.routes'
import { Header } from 'react-native/Libraries/NewAppScreen';

export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerLeft:null, gestureEnabled:false,}}>
                <Stack.Screen name='Login' component={Login} options={{headerTransparent:true, title:null}}/>
                <Stack.Screen name='tabNavi' component={tabNavi}  options={{headerTransparent:true, headerBackAllowFontScaling:true, title:null}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}