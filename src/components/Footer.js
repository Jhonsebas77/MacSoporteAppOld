'use stric'
import React, { Component } from 'react';
import { SocialIcon } from 'react-native-elements';
import {
  StyleSheet,Text,
  View,Image,TextInput,
  Button,Alert,ScrollView,
  StatusBar,FlatList,KeyboardAvoidingView,
  TouchableOpacity,Link
} from 'react-native';
import MenuItem from './MenuItem';

export default class Footer extends React.Component{
  constructor(props){
      super(props);
  }
  static navigationOptions = ({ navigation }) => ({
     title: ` ${navigation.state.params.user}`,
     headerTintColor: 'green',
   });

  render() {
    return(
      <View style={styles.footerContainer}>
        <View style={styles.info}>
          <FlatList
            data={[
             {key: '• Calle 28N #5N - 14 Barrio San Vicente'},
             {key: '• Cali - Colombia'},
             {key: '• Tel: (032) 668-5003 | Cel: (310) 494-2518'},
             {key: '• servicioalcliente@macsoporte.com'},
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
          />
        </View>
        <View style={styles.logo}>
          <Image source= {require('../img/Logo.png')} style={styles.cart} />
        </View>

      </View>
    )
  }
}

//Estilos
const styles = StyleSheet.create({
  footerContainer:{
    flex:1,
    justifyContent:'center',
    width:'100%',
    flexDirection:'row',
    flexWrap:'wrap',
    alignItems:'center',
    backgroundColor:'#fff',
  },
  logo:{
    width:'40%',
    alignItems:'center',
  },
  info:{
    alignItems:'center',
    width:'60%',
    padding:5,
  },
  cart: {
    width:265,
    height:125,
    padding:5,
  },
  btnContainer:{
    height:'50%',
    flexDirection:'row',
    flexWrap:'wrap',
  },
  addButtonFB: {
    backgroundColor: 'blue',
    width:30,
    height:30,
    borderRadius:50,
    borderColor:'#ccc',
    alignItems:'center',
    justifyContent: 'center',
    zIndex:10,
    paddingVertical:10,
  },
  addButtonIN: {
    backgroundColor: 'brown',
    width:30,
    height:30,
    borderRadius:50,
    borderColor:'#ccc',
    alignItems:'center',
    justifyContent: 'center',
    zIndex:10,
  },
  addButtonGP: {
    backgroundColor: 'orange',
    width:30,
    height:30,
    borderRadius:50,
    borderColor:'#ccc',
    alignItems:'center',
    justifyContent: 'center',
    zIndex:10,
  },
  addButtonText: {
    color:'#fff',
    fontSize:30,
  },
})

//Exportar el modulo
module.exports = Footer;
