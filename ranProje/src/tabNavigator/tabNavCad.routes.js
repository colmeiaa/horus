import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import Aluno from '../pages/cadatro/aluno';
import Professor from '../pages/cadatro/professor';
import Instituição from '../pages/cadatro/instituicao';


export default function tabNavi() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Aluno" component={Aluno}/>
      <Tab.Screen name="Professor" component={Professor} />
      <Tab.Screen name="Instituição" component={Instituição} />
    </Tab.Navigator>
  );
}