'use stric'
import React, { Component } from 'react';
import {
  StyleSheet,Text,
  View,Image,ScrollView,
} from 'react-native';
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
        <Text style={styles.header}>Nuestras Agencias en Colombia</Text>
          <View style={styles.containerImage}>
            <Image source= {require('../img/Mapa.jpg') } resizeMode='center'/>
          </View>
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

})

module.exports = Agencias;
