/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Image, TouchableOpacity,Text} from 'react-native';


import styles from '../styles/index';

export default class App extends Component {
  render() {
    return (
      <View style={styles.containerCad}>
      <Image
         source={(require('../assets/logo.png'))}
         style={styles.logo}
         />

         <Text style={styles.paragrafo}> Texto pika</Text>

        <TouchableOpacity
        style={styles.botao}
        onPress={ () => {this.props.navigation.navigate('Login')}}
        >
          <Text style={styles.botaoText}> Cadastrar </Text>
        </TouchableOpacity>

     </View>
    );
  }
}
