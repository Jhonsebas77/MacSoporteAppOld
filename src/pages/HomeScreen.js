import React, { Component } from 'react';
import {ScrollView,StyleSheet,View,ImageBackground,TouchableOpacity} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Banner from '../components/Banner';
import CustomImage from '../components/CustomImage';
import Footer from '../components/Footer';
import Inicio from './Inicio';
import Frutas from './Frutas';
import Recetas from './Recetas';
import Fruticola from './Fruticola';
import Agencias from './Agencias';
import Contacto from './Contacto';

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
              onPress={() => this.props.navigation.navigate('Frutas', { user: 'Frutas' })}>
                <CustomImage imageSource={require('../img/F3.jpg')}  header='Frutas'/>
            </TouchableOpacity>
            </View>
            <View style={styles.col1}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Agencias', { user: 'Agencias' })}>
              <CustomImage imageSource={require('../img/F5.jpg')} header='Agencias'/>
            </TouchableOpacity>
            </View>
            <View style={styles.contentBanner}>
            </View>
            <View style={styles.col1}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Recetas', { user: 'Recetas' })}>
                <CustomImage imageSource={require('../img/smootie.jpg')} header='Recetas'/>
            </TouchableOpacity>
            </View>
            <View style={styles.col2}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Fruticola', { user: 'Nosotros' })}>
                <CustomImage imageSource={require('../img/F2.jpg')} header='Nosotros' />
              </TouchableOpacity>
            </View>
            <View style={styles.contentBanner}>
            </View>
            <View style={styles.col2}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Contacto', { user: 'Escribenos' })}>
              <CustomImage imageSource={require('../img/F1.jpg')} header='Escribenos'/>
            </TouchableOpacity>
            </View>
            <View style={styles.col1}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Inicio', { user: 'Contacto' })}>
              <CustomImage imageSource={require('../img/F6.jpg')} header='Contacto'/>
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
