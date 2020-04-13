/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    
    containerCad: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        marginTop:50,
        padding:20,
    },

    paragrafo:{
        margin:24,
        fontSize:18,
        fontWeight:'bold',
        textAlign:'center',
        color: '#34495e'
    },
    
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50'
    },

    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        width:200,
        height:200,
        borderRadius:150,
    },

    input: {
        marginTop:10,
        padding:10,
        width:300,
        fontSize:18,
        fontWeight: 'bold',
        backgroundColor: '#fff',
        borderRadius:3,
    },

    botao: {
        width:300,
        height:42,
        backgroundColor: '#3498db',
        marginTop: 10,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent:'center',
    },

    botaoText:{
        fontSize:16,
        fontWeight: 'bold',
        color: '#fff'
    }
});

export default styles;