import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function login({ navigation }) {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>
            Settings
        </Text>

        <TouchableOpacity 
        style={styles.botao}
        onPress={ () => navigation.navigate('Login') }
        >
        
          <Text style={styles.botaoText}>
            Logout
          </Text> 
        
        </TouchableOpacity>
    </View>
  );
}
