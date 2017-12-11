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
     headerTintColor: '#3898EC',
   });
  render() {
     const { params } = this.props.navigation.state;
    return(
      <ScrollView style={styles.container}>
        <ImageBackground source= {require('../img/bn_Soporte.jpg')} style={styles.banner} >
          <ImageOverlay header='Otros Servicios'/>
        </ImageBackground>
          <Card title="No todo es Apple">
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
  container: {
    flex: 1,
  },
  banner: {
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    height:120,
  },
  infocontainer:{
    height:'20%',
    width:'100%',
  },
  mapcontainer: {
    height:'80%',
    width:'100%',
  },
})

module.exports = Agencias;
