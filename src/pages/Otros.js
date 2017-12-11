'use stric'
import React, { Component } from 'react';
import {
  StyleSheet,Text,ImageBackground,
  View,Image,ScrollView,
} from 'react-native';
import { Card } from 'react-native-elements';
import BannerInPages from '../components/BannerInPages';
import ImageOverlay from '../components/ImageOverlay';
import Footer from '../components/Footer';
export default class Agencias extends React.Component{
  constructor(props){
      super(props);
  }
  static navigationOptions = ({ navigation }) => ({
     title: ` ${navigation.state.params.user}`,
     headerTintColor: '#a8cf45',
   });
  render() {
     const { params } = this.props.navigation.state;
    return(
      <ScrollView style={styles.container}>
      <ImageBackground source= {require('../img/bn_Soporte.jpg')} style={styles.banner} >
        <ImageOverlay header='Otros Servicios'/>
      </ImageBackground>

<Card title="No todo es MAC">
        <Text>En Mac Soporte tambien contamos con el apoyo del Ingeniero Julian Otalora, especializado en mantenimiento de
          equipos de prepensa como CTPs, Dolev y Filmadoras, si deseas solicitar su servico, escribenos o contactate con nosotros!
        </Text>
        </Card>
        <Footer/>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  containerImage: {
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap:'wrap',
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
    container: {
    flex: 1,
  },
    header: {
    fontSize:28,
    textAlign:'left',
    padding:10,
    color:'#FF0000',
    backgroundColor:'#fff'
  },
  banner: {
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    height:120,
  },

})

module.exports = Agencias;
