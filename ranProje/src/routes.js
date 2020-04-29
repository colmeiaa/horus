import React from 'react';
import { Button, Alert } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Login from './pages/login/login';

import tabNavi from './tabNavigator/tabNavigator.routes'
import tabNav from './tabNavigator/tabMaterial.routes'

export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerLeft: null ,gestureEnabled:false,}}>
                
                <Stack.Screen 
                name='Login' 
                component={Login} 
                options={
                    {
                        headerTransparent:true, 
                        title:null
                    }
                    }
                />
                
                <Stack.Screen 
                name='tabNavi' 
                component={tabNavi}  
                options={
                    {
                        headerTransparent:true, 
                        headerBackAllowFontScaling:true, 
                        title:null
                    }
                    } 
                />


                    <Stack.Screen 
                    name='tabNav' 
                    component={tabNav} 
                    options={
                        {
                            title:'Cadastro', 
                            // headerTransparent:true,
                            gestureEnabled:true,
                            headerLeft:() => (
                            <Button
                                onPress={() => Alert.alert('Atenção','Botão não funcional')}
                                title="Back"
                                color="black"
                            />
                            ),
                        }
                            }
                    />
            </Stack.Navigator>
        </NavigationContainer>
    );
}