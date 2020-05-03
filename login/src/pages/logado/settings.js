import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import firebase from 'firebase';


export default class settings extends Component {


  componentDidMount(){

    var firebaseConfig = {
        apiKey: "AIzaSyA8_2nds6T3AZuuhNKdmTdE0zDim5JsQo8",
        authDomain: "appteste-d6f8f.firebaseapp.com",
        databaseURL: "https://appteste-d6f8f.firebaseio.com",
        projectId: "appteste-d6f8f",
        storageBucket: "appteste-d6f8f.appspot.com",
        messagingSenderId: "528755303869",
        appId: "1:528755303869:web:11955e0e9f50c75b061ed4"
      };
      // Initialize Firebase
      if ( ! firebase . apps . length ) {
        firebase . initializeApp (firebaseConfig);
   }
}

      tryLoginOut(){
        const loginOutSucess = user => {
            console.log('Deu certo DESLOGAR')
            this.props.navigation.navigate('Login');
        }

        firebase.auth().signOut()
          .then(loginOutSucess);
      }

      renderButtom(){
        return(
            <TouchableOpacity 
            style={styles.button}
            onPress={ () => this.tryLoginOut() }
            > 
            <Text style={styles.txtButton}>
                LoginOut
            </Text>
            </TouchableOpacity>
        );
      };


  render() {
    return (
      <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>

        <Text>
          Aqui são suas config's
        </Text>

        { this.renderButtom() }

      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'gray',
    paddingHorizontal: 25,
    height:45,
    marginTop:15,
    borderRadius:20,
    },
    
    txtButton: {
      color:'#fFF'
    }
})