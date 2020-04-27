import React from 'react';
import { View, Text } from 'react-native';
import { Avatar } from 'react-native-elements';

import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function login({ navigation }) {
  return (
    <View style={styles.container}>

        <Avatar style={styles.avatar}
          size='large'
          onPress={ () => ({}) }
          source={{
            uri:
              'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
          }}
          showEditButton
        />


        <Text style={styles.text}>
            Settings
        </Text>

        <TouchableOpacity 
        style={styles.botao}
        onPress={ () => navigation.navigate('Login')}
        >
        
          <Text style={styles.botaoText}>
            Logout
          </Text> 
        
        </TouchableOpacity>
    </View>
  );
}
