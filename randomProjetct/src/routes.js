import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator,  } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'; 
import { createSwitchNavigator } from 'react-navigation';

// import Login from './pages/login/login';
// import Home from './pages/home/home';
// import Settings from './pages/settings/settings';
import Welcome from './pages/App';


const Stack = createStackNavigator();


import DashboardRoutes from './routes/dashboard.routes';


export default function Routes(){
  return(

    <NavigationContainer>

      <Stack.Navigator screenOptions={{headerTransparent:true, headerTitle:null}}>
        <Stack.Screen name='Welcome' component={Welcome} />
        <Stack.Screen name='Home' component={DashboardRoutes} />
      </Stack.Navigator>

    </NavigationContainer> 
  );
}