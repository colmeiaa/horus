/* eslint-disable no-trailing-spaces */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../components/Login';
import Home from '../components/Home';
import Cadastro from '../components/Cadastro';
  
  const Stack = createStackNavigator();
  
  function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
            
          <Stack.Screen name="Login" component={Login} 
          options={
              { title:"",
                  headerStyle:{
                      backgroundColor:'#2c3e50'
                  }
              }
          }/>

          <Stack.Screen name="Cadastro" component={Cadastro} />

          <Stack.Screen name ="Home" component={Home}/>

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default App;