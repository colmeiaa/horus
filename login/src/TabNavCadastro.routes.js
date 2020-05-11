import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import  MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Aluno from './pages/cadastros/aluno';
import Professor from './pages/cadastros/professor';
import Inst from './pages/cadastros/instituição';

const Tab = createMaterialBottomTabNavigator();

export default function Routes(){
    return(
            <Tab.Navigator
            initialRouteName="Aluno"
            activeColor="#00ace6"
            inactiveColor="#bfbfbf"
            barStyle={{ backgroundColor: '#FFF' }}
            >
                <Tab.Screen name='Aluno' component={Aluno}
                options={{tabBarIcon: ({ color }) => ( <MaterialCommunityIcons name="account" color={color} size={26} /> )}  } />
                <Tab.Screen name='Professor' component={Professor}
                options={{tabBarIcon: ({ color }) => ( <MaterialCommunityIcons name="account-tie" color={color} size={26} /> )} } />
                <Tab.Screen name='Instituição' component={Inst}
                options={{tabBarIcon: ({ color }) => ( <MaterialCommunityIcons name="bank" color={color} size={26} /> )} } />
            </Tab.Navigator>
    );
}