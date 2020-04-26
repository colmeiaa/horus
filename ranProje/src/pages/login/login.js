import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

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


    </View>
  );
}
