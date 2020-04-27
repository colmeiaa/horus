import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

import styles from './styles';

export default function login({ navigation }) {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>
            Login
        </Text>

          <Input  style={styles.textInput}
            placeholder='Digite seu email'
            keyboardType='email-address'
            autoCorrect={false}
            leftIcon={
          <Icon
            name='user'
            size={26}
            color='gray'
            />
            }
          />

          <Input  style={styles.textInput}
            placeholder='Digite sua senha'
            secureTextEntry={true}
            autoCorrect={false}
            leftIcon={
          <Icon
            name='key'
            size={26}
            color='gray'
            />
            }
          />

          
        

        <TouchableOpacity 
        style={styles.botaoLogin}
        onPress={ () => navigation.navigate('tabNavi')}
        >
          <Text style={styles.botaoText}>
            Login
          </Text> 
        
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.botaoCad}
        onPress={ () => navigation.navigate('tabNavCad')}
        >
          <Text style={styles.botaoText}>
            Cadastrar
          </Text> 
        
        </TouchableOpacity>


    </View>
  );
}
