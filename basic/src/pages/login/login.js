import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

import styles from './styles';

export default function login({ navigation }) {
  return (
    <View style={styles.container}>

        <Text style={{ fontSize: 35, padding:50}}>
                Login
        </Text>
            
        <Input
          placeholder='Email'
          leftIcon={
            <Icon
              name='user'
              size={24}
              color='black'
              style={{margin:10}}
            />
          }
          style={{paddingHorizontal:10, justifyContent:'center',alignItems:'center'}}
        />

        <Input
          style={{margin:10,justifyContent:'center',alignItems:'center'}}
          placeholder='Password'
          leftIcon={
            <Icon
              name='key'
              size={24}
              color='black'
              style={{margin:10}}
            />
          }
          errorStyle={{ color: 'red' }}
          // errorMessage='error message'
          secureTextEntry
        />


        <TouchableOpacity 
        style={styles.botao}
        onPress={ () => navigation.navigate('tabNav')}
        > 
        <Text style={{color:'#fff', fontSize:20}}> Logar </Text>
        </TouchableOpacity>


    </View>
  );
}
