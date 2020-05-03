import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';


export default class home extends Component {

  constructor(props) {
    super(props);

    this.state ={
      data: []
    }
  }

  loadUsers = () => {

      fetch('https://randomuser.me/api/?results=15')
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
      <View style={{paddingTop:50, justifyContent:'center',alignItems:'center'}}>
        <Text style={styles.txt}>
          Hello aluno
        </Text>

        <FlatList 
        data={this.state.data}
        renderItem={({ item }) => (

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
    marginRight:10,
    alignSelf:'center'
  },
  
  info: {
    width:300,
    flexDirection:'column',
    justifyContent:'center',
  },

  name: {
    fontSize:12
  },

  eemail: {
    fontSize:14,
    fontWeight: "bold"
  }

})