import React from 'react';
import { View,  TouchableOpacity } from 'react-native';
import { Avatar, Text } from 'react-native-elements';

import styles from './styles';

export default function settings({ navigation }) {
  return (
    <View style={styles.container}>

        <Avatar 
        size={150}
        rounded
        icon={{name: 'user', type: 'font-awesome'}}
        containerStyle={{backgroundColor:'grey', margin:10}}
        showAccessory
        onPress={() => ({})}
        />

        <Text style={{ fontSize: 35, margin:10}}>
          Settings
        </Text>

        <Text h1> nome </Text>
        <Text h2> idade </Text>
        <Text h2> endereço </Text>


        

        <TouchableOpacity 
        style={styles.botao}
        onPress={ () => navigation.navigate('Login')}
        > 
        <Text style={{color:'#fff', fontSize:20}}> Login Out </Text>
        </TouchableOpacity>

    </View>
  );
}
