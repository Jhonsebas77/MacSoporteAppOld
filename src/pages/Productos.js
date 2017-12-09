'use stric'
import React, { Component } from 'react';
import {
  StyleSheet,Text,
  View,Image,TextInput,
  Button,Alert,TouchableHighlight,
  StatusBar,KeyboardAvoidingView,ScrollView,
} from 'react-native';
import { Card,Badge } from 'react-native-elements';
import BannerInPages from '../components/BannerInPages';
import ImageOverlay from '../components/ImageOverlay';
import MenuItem from '../components/MenuItem';
import Footer from '../components/Footer';
import Itemtosell from '../components/Itemtosell';

export default class Productos extends React.Component{
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
      <ScrollView
        contentContainerStyle={{
          minHeight: 100,
          flexDirection: "column",
          alignItems: "stretch",
        }}
        alwaysBounceVertical={false}
        showsVerticalScrollIndicator={false}>

          <View style={{flex: 0.5, backgroundColor: "#fff"}} >

            <Text style={styles.header}> Accesorios a la venta! </Text>
            <Text style={{padding:5, }}> Si te interesa alguno de estos accesorios, comunicate con nosotros para efectuar la compra! </Text>
            <View style={styles.scrollContainer}>
              <View style={styles.menuContainer}>
                <View style={styles.priceContainer}>
                  <Itemtosell sellImage={require('../img/noticias.jpg')} descripcion='Cable USB - Ligthing' disponible='Disponible: 4' precio='$60.000'/>
                </View>
                <View style={styles.priceContainer}>
                  <Itemtosell sellImage={require('../img/noticias.jpg')} descripcion='Cargador 5w' disponible='Disponible: 3' precio='$30.000'/>
                </View>
                <View style={styles.priceContainer}>
                  <Itemtosell sellImage={require('../img/noticias.jpg')} descripcion='Cargador 60w MagSafe 1' extra='(Usado)' disponible='Disponible: 1' precio='$200.000'/>
                </View>
              </View>
              <View style={styles.menuContainer}>
                <View style={styles.priceContainer}>
                  <Itemtosell sellImage={require('../img/noticias.jpg')} descripcion='Protector de Teclado' extra='Ingles Mid 2012' disponible='Disponible: 4' precio='$50.000'/>
                </View>
                <View style={styles.priceContainer}>
                  <Itemtosell sellImage={require('../img/noticias.jpg')} descripcion='iMac 24 Mid 2009' disponible='Disponible: 1' extra='4GB Ram - 512GB HDD' precio='$800.000'/>
                </View>
                <View style={styles.priceContainer}>
                  <Itemtosell sellImage={require('../img/noticias.jpg')} descripcion='Memoria RAM' extra='4GB DRR3 1600' disponible='Disponible: 4' precio='$320.000'/>
                </View>
              </View>


            </View>
              <Footer/>
          </View>

        </ScrollView>
    )
  }
}

//Estilos
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#451445',
    paddingVertical: 20,
  },
  scrollContainer: {
    backgroundColor: '#fff',
    alignItems:'center',
    width: '100%',
    justifyContent:'center',

  },

  menuContainer: {
    flexDirection:'row',
    flexWrap:'wrap',
  },
  priceContainer: {
    alignItems:'center',
    flexDirection:'column',
    flexWrap:'wrap',
    padding:3,
  },
  header: {
    fontSize:28,
    textAlign:'left',
    padding:10,
    color:'#3898EC'
  },
})

//Exportar el modulo
module.exports = Productos;
