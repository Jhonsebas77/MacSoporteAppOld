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
     headerTintColor: '#a8cf45',
   });
  render() {
     const { params } = this.props.navigation.state;
    return(
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Actualidad en el mundo de Apple</Text>
        <Card  style={styles.cardContainer}>
          <Text style={styles.title}>Noticia1</Text>
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
        <Card  style={styles.cardContainer}>
          <Text style={styles.title}>Noticia2</Text>
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
  cardContainer: {
    padding:5,
  },
  title: {
    fontSize:24,
    textAlign:'center',
    padding:10,
    color:'#FF0000',
    backgroundColor:'#fff'
  },
  body: {
    fontSize:16,
    textAlign:'left',
    padding:5,
    color:'#FF0000',
    backgroundColor:'#fff'
  },
  header: {
    fontSize:28,
    textAlign:'left',
    padding:10,
    color:'#FF0000',
    backgroundColor:'#fff'
  },

})

module.exports = Noticias;
