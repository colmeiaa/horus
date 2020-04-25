import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import styles from '../stlyes';


export default function App({ navigation }) {{

  signIn = async () => {

  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}> 
        Hello world
      </Text>

      <TouchableOpacity 
      style={styles.buttom}
      onPress={() => navigation.navigate('Home')} >
        <Text style={styles.textButtom}> Entrar </Text>
      </TouchableOpacity>
      
    </View>
  );
  }
}