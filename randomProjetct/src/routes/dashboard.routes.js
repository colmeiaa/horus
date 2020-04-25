import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

import Home from '../pages/home/home';
import Settings from '../pages/settings/settings';

function Wildcard({ title }){
    return <Text> Wildcard { title } </Text>
    
}

export default function DashboardRouts() {
    return(
            <Tab.Navigator>
                <Tab.Screen name='Cards' component={Home} />
                <Tab.Screen name='Settings' component={Settings} />
            </Tab.Navigator>
    )
}