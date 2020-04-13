/* eslint-disable semi */
/* eslint-disable jsx-quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, TextInput, Image, TouchableOpacity,Text} from 'react-native';
import styles from '../styles/index';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Image
         source={(require('../assets/logo.png'))}
         style={styles.logo}
         />

         <TextInput 
         style={styles.input}
         keyboardType='email-address'
         placeholder="Digite seu Email"
         />
         <TextInput 
         style={styles.input}
         secureTextEntry= {true}
         placeholder="Digite sua Senha"
         />

        <TouchableOpacity
        style={styles.botao}
        onPress={ () => {this.props.navigation.navigate('Home')}}
        >
          <Text style={styles.botaoText}> Login </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
        style={styles.botao}
        onPress={ () => {this,this.props.navigation.navigate('Cadastro')}}
          >
          <Text style={styles.botaoText}> Registrar </Text>
        </TouchableOpacity>

     </View>
    );
  }
}
