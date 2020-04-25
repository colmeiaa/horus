import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles'

// import { Container } from './styles';

export default function login() {
  return (
    <View style={styles.container}> 
        <Text style={styles.text}>
            Screen Login
        </Text>
    </View>
  );
}
