import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';



export default class home extends Component {

  constructor(props) {
    super(props);

    this.state ={
      data: []
    }
  }

  loadUsers = () => {

      fetch('https://randomuser.me/api/?results=20')
        .then( res => res.json() )
        .then( res => {
          this.setState({
            data: res.results || []
          })
        })
  }

  componentDidMount(){
    this.loadUsers();
  }

  render() {
    return (
      <View style={{paddingTop: 40,justifyContent:'center',alignItems:'center'}}>
             <Text style={styles.txt}>
                  Eventos
             </Text>
        <FlatList 
        data={this.state.data}
        renderItem={({ item }) => (
          <TouchableOpacity 
          onPress={ () => this.props.navigation.navigate('Detail', 
          {
            img: item.picture.thumbnail,
            title: item.name.title, 
            name: item.name.first, 
            lastName: item.name.last,
            email: item.email,
            location: item.location.street.name,
            locationNumber: item.location.street.number,
            city: item.location.city,
            state: item.location.state,
            country: item.location.country,
            username: item.login.username
          }
            )}
          >
          
          <View style={styles.line}>
            <Image 
              style={styles.avatar}
              source={{ uri: item.picture.thumbnail}}
            />

            <View style={styles.info}>
              <Text style={styles.email}> {item.email} </Text>
              <Text style={styles.name}> {item.name.first} {item.name.last}</Text>
            </View>
          </View>
        </TouchableOpacity>
        )}
        keyExtractor={ item => item.email}
        
        />
      
      </View>
    )
  }
}


const styles = StyleSheet.create({

  txt: {
    fontSize:30,
    fontWeight:'bold',
    margin:15
  },
  
  line: {
    height: 60,
    flexDirection:'row',
    borderBottomColor: '#ccc',
    borderBottomWidth:1,
  },

  avatar: {
    width:60,
    height:60,
    borderRadius:50,
    marginRight:5,
    alignSelf:'center'
  },
  
  info: {
    width: 300,
    flexDirection:'column',
    justifyContent:'center',
  },

  name: {
    fontSize:12
  },

  email: {
    fontSize:14,
    fontWeight: "bold"
  }

})