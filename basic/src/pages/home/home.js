import React from 'react';
import { View, Text } from 'react-native';
import { SearchBar } from 'react-native-elements';


import styles from './styles';

export default function home() {

  state = {
    search: null
  };

  updateSearch = search => {
    this.setState({ search });
  };

  const { search } = this.state;

  return (
    <View style={styles.container}>

      <SearchBar
        placeholder="Type Here..."
        // onChangeText={this.updateSearch}
        value={search}
        containerStyle={{width:350,height:70, margin:10}}
      />

        <Text style={{ fontSize: 35}}>
            Home
        </Text>
    </View>
  );
}
