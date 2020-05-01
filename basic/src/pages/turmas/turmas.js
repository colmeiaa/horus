import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default function turmas() {
  return (
    <View style={styles.container}>
        <Text style={{ fontSize: 35}}>
            Turmas
        </Text>
    </View>
  );
}
