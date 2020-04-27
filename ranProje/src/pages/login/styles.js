import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },

  text: {
    fontSize:35,
    padding:20
  },

  textInput: {
    width:200,
    height:45,
  },

  botaoLogin: {
    alignSelf:'stretch',
    alignItems:'center',
    justifyContent:'center',
    paddingHorizontal:20,
    borderRadius:15,
    marginTop:40,
    margin:5,
    height:40,
    backgroundColor:'#33adff',
  },

  botaoCad: {
    alignSelf:'stretch',
    alignItems:'center',
    justifyContent:'center',
    paddingHorizontal:20,
    borderRadius:15,
    margin:5,
    height:40,
    backgroundColor:'#33adff',
  },

  botaoText: {
    fontSize:20,
    color:'#FFF'
  }

})

export default styles;