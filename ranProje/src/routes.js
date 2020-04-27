import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Login from './pages/login/login';

import tabNavi from './tabNavigator/tabNavigator.routes'
import tabNavCad from './tabNavigator/tabNavCad.routes'

export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{gestureEnabled:true, gestureDirection:"horizontal-inverted"}}>
                <Stack.Screen name='Login' component={Login} options={{headerTransparent:true, title:null}}/>
                <Stack.Screen name='tabNavi' component={tabNavi}  options={{headerTransparent:true, headerBackAllowFontScaling:true, title:null, headerLeft:false}} />
                <Stack.Screen name='tabNavCad' component={tabNavCad}  options={{headerTransparent:true, title:'Cadastro'}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}