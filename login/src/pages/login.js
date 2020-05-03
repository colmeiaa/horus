import React from 'react';
import { View, StyleSheet, TextInput,TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth';

import FormRow from '../components/FormRow';


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

    tryLogin(){
        this.setState({isLoading:true});
        const { email, password } = this.state;

        const loginUserSucess = user => {
            this.setState({ message: 'Logado com sucesso!'});
            this.props.navigation.navigate('Home');
        }

        const loginUserFailed = error => {
            this.setState({
                message: this.getMessageByErrorCode(error.code)
            });
        }

        firebase.auth().signInWithEmailAndPassword( email, password )
          .then(loginUserSucess)
          .catch(loginUserFailed)
          .then(
              () => this.setState({ isLoading: false })
          );
    }
    
    getMessageByErrorCode( errorCode ){
        switch( errorCode ){
            case 'auth/wrong-password': return 'Senha incorreta';
            case 'auth/user-not-found': return 'Usúario não encontrado';
            case 'auth/invalid-email':  return 'Email invalido';
            default:    return 'Erro desconhecido';
        }
    }

    renderMessage(){
        const { message } = this.state;
        if (! message )
        return null;
            return(
                <View>
                    <Text> {message} </Text>
                </View>
            )
    }

    renderButtom(){
        if ( this.state.isLoading)
            return<ActivityIndicator />;

        return(

            <TouchableOpacity 
            style={styles.button}
            onPress={ () => this.tryLogin() }
            > 
            <Text style={styles.txtButton}>
                Login
            </Text>
            </TouchableOpacity>
        );
    };

    renderButtomCad(){
        return(
            <TouchableOpacity 
        style={styles.buttonCad}
        onPress={ () => this.props.navigation.navigate('Cadastro')}
        > 
        <Text style={styles.txtButtonCad}>
            Cadastrar-se
        </Text>
        </TouchableOpacity>
        )
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

            { this.renderMessage()}

            { this.renderButtom()}

            { this.renderButtomCad()}

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

    txtButtonCad: {
        fontSize:20,
        color:'lightblue'
    },

    button: {
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'gray',
        paddingHorizontal: 25,
        height:45,
        marginTop:15,
        borderRadius:20,
    },

    buttonCad: {
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'gray',
        paddingHorizontal: 15,
        height:45,
        marginTop:5,
        borderRadius:20,
    }

})
