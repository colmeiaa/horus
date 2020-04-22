import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './style';


export default function Login({ navigation }){
    return(
        <View style={styles.container}>

            <Text style={styles.text}> Settings </Text>

            <TouchableOpacity 
            style={styles.buttom}
            onPress={ () => navigation.navigate('Settings') }
            >
            <Text style={styles.buttomLogin}> Settings </Text>
            </TouchableOpacity>

        </View>
    );
}
