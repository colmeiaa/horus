import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/login';
import Home from './TabNavCadastro.routes';
import tabNav from './TabNavCadastro.routes';

const Stack = createStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Login' component={Login} options={{title:null, headerTransparent: true}}/>
                <Stack.Screen name='Home' component={Home} options={{title:null, headerTransparent: true,gestureEnabled:false, headerLeft:null}}/>
                <Stack.Screen name='Cadastro' component={tabNav} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}