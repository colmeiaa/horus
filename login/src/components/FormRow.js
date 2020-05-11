import React from 'react';

import { View, StyleSheet } from 'react-native';


const FormRow = props => {
    const { children } = props;
    return (
            <View style={styles.container}>
                { children }
            </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor:'white',
        marginTop:10,
        elevation:1,
        justifyContent:'center',
        alignItems:'center',
        width:300,
        // alignSelf:'stretch',
    }
})

export default FormRow;