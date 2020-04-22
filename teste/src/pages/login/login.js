import React from 'react';
import { View, Text, TouchableOpacity, Button} from 'react-native';


import styles from './style';


export default function Login({ navigation }){
    function navigateHome(){
        navigation.navigate('Home');
    }

    return(
        <View style={styles.container}>

        <Text style={styles.text}> Login </Text>

        <TouchableOpacity 
        style={styles.buttom}
        onPress={navigateHome}
        >
        <Text style={styles.buttomLogin}> login </Text>
        </TouchableOpacity>
        

    </View>
    );
}
