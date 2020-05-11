import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import  MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Eventos from './pages/logado/home';
import Turmas from './pages/logado/turmas';
import Settings from './pages/logado/settings';

const Tab = createMaterialBottomTabNavigator();

export default function Routes(){
    return(
            <Tab.Navigator
            initialRouteName="Home"
            activeColor="#00ace6"
            inactiveColor="#bfbfbf"
            barStyle={{ backgroundColor: '#FFF' }}
            >
                <Tab.Screen name='Home' component={Eventos}
                options={{tabBarIcon: ({ color }) => ( <MaterialCommunityIcons name="home" color={color} size={26} /> )}  } />
                <Tab.Screen name='Turmas' component={Turmas}
                options={{tabBarIcon: ({ color }) => ( <MaterialCommunityIcons name="account-multiple" color={color} size={26} /> )} } />
                <Tab.Screen name='Settings' component={Settings}
                options={{tabBarIcon: ({ color }) => ( <MaterialCommunityIcons name="settings" color={color} size={26} /> )} } />
            </Tab.Navigator>
    );
}