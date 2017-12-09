import React, { Component } from 'react';
import {ScrollView,StyleSheet,View,ImageBackground,TouchableOpacity} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Banner from '../components/Banner';
import CustomImage from '../components/CustomImage';
import Footer from '../components/Footer';
import Soporte from './Soporte';
import Noticias from './Noticias';
import Productos from './Productos';
import Nosotros from './Nosotros';
import Contacto from './Contacto';
import Servicios from './Servicios';
import Preprensa from './Otros';
import Preguntas from './Preguntas';

export default class HomeScreen extends React.Component<{}> {
  static navigationOptions = {
    header:false,
};
  constructor(props){
    super(props);
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <Banner/>
          <View style={styles.contentContainer}>
            <View style={styles.col2}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Soporte', { user: 'Soporte Tecnico' })}>
                <CustomImage imageSource={require('../img/soporte.jpg')}  header='Soporte Tecnico'/>
            </TouchableOpacity>
            </View>
            <View style={styles.col1}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Noticias', { user: 'Noticias' })}>
              <CustomImage imageSource={require('../img/noticias.jpg')} header='Noticias'/>
            </TouchableOpacity>
            </View>
            <View style={styles.contentBanner}>
            </View>
            <View style={styles.col1}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Productos', { user: 'Productos' })}>
                <CustomImage imageSource={require('../img/productos.jpg')} header='Productos'/>
            </TouchableOpacity>
            </View>
            <View style={styles.col2}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Nosotros', { user: 'Nosotros' })}>
                <CustomImage imageSource={require('../img/nosotros.png')} header='Nosotros' />
              </TouchableOpacity>
            </View>
            <View style={styles.contentBanner}>
            </View>
            <View style={styles.col2}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Contacto', { user: 'Contactanos' })}>
              <CustomImage imageSource={require('../img/contactanos.jpg')} header='Contactanos'/>
            </TouchableOpacity>
            </View>
            <View style={styles.col1}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Servicios', { user: 'Servicios' })}>
              <CustomImage imageSource={require('../img/servicios.jpg')} header='Servicios'/>
            </TouchableOpacity>
            </View>
            <View style={styles.contentBanner}>
            </View>
            <View style={styles.col1}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Preprensa', { user: 'Pre-Prensa' })}>
              <CustomImage imageSource={require('../img/preprensa.jpg')} header='Pre-Prensa'/>
            </TouchableOpacity>
            </View>
            <View style={styles.col2}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Preguntas', { user: 'Preguntas Frecuentes' })}>
              <CustomImage imageSource={require('../img/preguntas.jpg')} header='Preguntas Frecuentes'/>
            </TouchableOpacity>
            </View>
            <View style={styles.contentBanner}>
              <Footer/>
            </View>
          </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flexDirection:'row',
    flexWrap:'wrap',
    padding:5,
  },
  col2: {
    flex:2,
    padding:5,
  },
  col1: {
    flex:1,
    padding:5,
  },
  contentBanner: {
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
  },
});

module.exports = HomeScreen;
