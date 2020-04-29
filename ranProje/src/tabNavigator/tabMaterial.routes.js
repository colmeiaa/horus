import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

import CadAluno from '../pages/cadastro/aluno';
import CadInst from '../pages/cadastro/instituiçao';
import CadProf from '../pages/cadastro/professor';

export default function MyTabs({ navigation: { goBack } }) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Aluno" component={CadAluno} />
      <Tab.Screen name="Professor" component={CadProf} />
      <Tab.Screen name="Instituição" component={CadInst} />
    </Tab.Navigator>
  );
}