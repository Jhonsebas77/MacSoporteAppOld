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

export default class Title extends React.Component{
  constructor(props){
      super(props);
  }
  static navigationOptions = ({ navigation }) => ({
     title: ` ${navigation.state.params.user}`,
     headerTintColor: 'green',
   });

  render() {
    return(
      <View style={styles.titleContainer}>
        <View style={styles.logo}>
          <Image source= {require('../img/Imagotipo.png')} style={styles.cart} />
        </View>
      </View>
    )
  }
}

//Estilos
const styles = StyleSheet.create({
  titleContainer:{
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
module.exports = Title;
