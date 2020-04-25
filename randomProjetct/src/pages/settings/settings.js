import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles'

// import { Container } from './styles';

export default function login({ navigation }) {
  return (
    <View style={styles.container}> 
        <Text style={styles.text}>
            Screen Settings
        </Text>


        {/* <TouchableOpacity 
      style={styles.buttom}
      onPress={ () => navigation.navigate('Home') }
      >
        <Text style={styles.textButtom}> Proxima pagina </Text>
        
      </TouchableOpacity> */}
      
    </View>
  );
}
