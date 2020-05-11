import React from 'react';
import { View, Text, StyleSheet, Image }  from 'react-native';
import { Title } from 'react-native-paper';

export default function detail( { route } ){

  const { username } = route.params;
  const { title } = route.params;
  const { name } = route.params;
  const { img } = route.params;
  const { lastName } = route.params;
  const { email } = route.params;
  const { location } = route.params;
  const { locationNumber } = route.params;
  const { city } = route.params;
  const { country } = route.params;
  const { state } = route.params;
  
  return (
      <View style={{justifyContent:'center',alignItems:'center'}}>
              <Image 
              style={styles.avatar}
              source={ { uri: img} }
            />
              <Text style={styles.txt}>Olá {username}</Text>

              <Text>
                <Text style={{fontWeight: 'bold', fontSize:20}}>Nome Completo: </Text>
                <Text style={styles.txtInfo}>{title} {name} {lastName}</Text>
              </Text>

              <Text>
                <Text style={{fontWeight: 'bold', fontSize:20}}>Email: </Text>
                <Text style={styles.txtInfo}>{email}</Text>
              </Text> 

              <Text>
                <Text style={{fontWeight: 'bold', fontSize:20}}>Endereço: </Text>
                <Text style={styles.txtInfo}>{location}, N°{locationNumber}</Text>
              </Text>

              <Text>
                <Text style={{fontWeight: 'bold', fontSize:20}}>Cidade: </Text>
                <Text style={styles.txtInfo}>{city}</Text>
              </Text>

              <Text>
                <Text style={{fontWeight: 'bold', fontSize:20}}>Estado: </Text>
                <Text style={styles.txtInfo}>{state}</Text>
              </Text>

              <Text>
                <Text style={{fontWeight: 'bold', fontSize:20}}>País: </Text>
                <Text style={styles.txtInfo}>{country}</Text>
              </Text>
        
        </View>
       )
}

const styles = StyleSheet.create({
  
  avatar: {
    width:200,
    height:200,
    borderRadius:50,
    marginRight:5,
    alignSelf:'center'
  },

  txt: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  txtInfo: {
    fontSize: 18,
    flexDirection:'row'
  }
})