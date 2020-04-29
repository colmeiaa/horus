import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function login({ navigation }) {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>
            Hello
        </Text>

        <TouchableOpacity 
        style={styles.botao}
        onPress={ () => navigation.navigate('tabNavi')}
        >
        
          <Text style={styles.botaoText}>
            Login
          </Text> 
        
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.botao}
        onPress={ () => navigation.navigate('tabNav')}
        >
        
          <Text style={styles.botaoText}>
            Cadastro
          </Text> 
        
        </TouchableOpacity>


    </View>
  );
}
