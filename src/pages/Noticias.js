'use stric'
import React, { Component } from 'react';
import {
  StyleSheet,Text,
  View,Image,ScrollView,
} from 'react-native';
import { Card } from 'react-native-elements';
import BannerInPages from '../components/BannerInPages';
import ImageOverlay from '../components/ImageOverlay';
import Footer from '../components/Footer';

export default class Noticias extends React.Component{
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
        <Text style={styles.header}>Actualidad en el mundo de Apple</Text>
        <Card title="Noticia 1" style={styles.cardContainer}>
          <Text style={styles.body}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
            et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
            ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis
            enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In
            enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis
            eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper
            nisi. Aenean vulputate eleifend
          </Text>
        </Card>
        <Card  title="Noticia 2" style={styles.cardContainer}>
          <Text style={styles.body}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
            et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
            ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis
            enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In
            enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis
            eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper
            nisi. Aenean vulputate eleifend
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
  cardContainer: {
    padding:5,
  },
  body: {
    fontSize:16,
    textAlign:'left',
    padding:5,
    backgroundColor:'#fff'
  },
  header: {
    fontSize:28,
    textAlign:'center',
    padding:10,
    color:'#3898EC',
    backgroundColor:'#fff'
  },

})

module.exports = Noticias;
