import React from 'react';
import { View, StyleSheet, TextInput,TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth';

import FormRow from '../components/FormRow'

export default class Login extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            email:'',
            password:'',
            isLoading: false,
            message:''
        }
    }

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


    onChangeHandler( field , value){        // Cuida dos inputs
        this.setState({
            [field] : value
        });
    }

  render(){
    return (
        <View style={styles.container}>

            <Text style={{fontSize:40, fontWeight:'bold', margin:20}}>
                Login
            </Text>
           
            <FormRow>
            <TextInput  
            style={styles.txtInput}
            placeholder='email@email.com'
            value={this.state.email}
            onChangeText={ value => this.onChangeHandler( 'email', value)}
            keyboardType='email-address'
            />
            </FormRow>

            <FormRow>
            <TextInput  
            style={styles.txtInput}
            placeholder='******'
            value={this.state.password}
            onChangeText={ value => this.onChangeHandler( 'password', value)}
            secureTextEntry={true}
            />
            </FormRow>

        </View>
      );
  }
}

const styles = StyleSheet.create({
    container: {
        flex:1, 
        justifyContent:'center', 
        alignItems:'center'
    },

    texto: {
        fontSize:25
    },

    txtInput: {
        alignSelf:'stretch',
        paddingLeft:5,
        paddingRight:5,
        alignItems:'center',
        justifyContent:'center',

    },
    
    txtButton: {
        fontSize:25,
        color:'#fff'
    },

    button: {
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'gray',
        paddingHorizontal: 25,
        height:45,
        marginTop:15,
        borderRadius:20,
    }

})
