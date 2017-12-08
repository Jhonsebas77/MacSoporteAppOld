'use stric'
import React, { Component } from 'react';
import {StyleSheet,Text,View,ScrollView,} from 'react-native';
import BannerInPages from '../components/BannerInPages';
import ImageOverlay from '../components/ImageOverlay';
import MenuItem from '../components/MenuItem';
import Footer from '../components/Footer';

export default class Frutas extends React.Component{
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
      <ScrollView
        contentContainerStyle={{
            minHeight: 100,
            flexDirection: "column",
            alignItems: "stretch",
        }}
        alwaysBounceVertical={false}
        showsVerticalScrollIndicator={false}>
          <View style={{flex: 0.5, backgroundColor: "#fff"}} >
            <Text style={styles.header}> Fruta Fresca </Text>
            <View style={styles.scrollContainer}>
              <View style={styles.menuContainer}>
                <MenuItem itemImage={require('../img/frutas1.jpg')} />
                <MenuItem itemImage={require('../img/frutas2.jpg')} />
                <MenuItem itemImage={require('../img/frutas3.jpg')} />
                <MenuItem itemImage={require('../img/frutas4.jpg')} />
                <MenuItem itemImage={require('../img/frutas5.jpg')} />
                <MenuItem itemImage={require('../img/frutas6.jpg')} />
                <MenuItem itemImage={require('../img/frutas7.jpg')} />
                <MenuItem itemImage={require('../img/frutas8.jpg')} />
              </View>
            </View>
            <Text style={styles.header}>Bandejas </Text>
              <View style={styles.scrollContainer}>
                <View style={styles.menuContainer}>
                  <MenuItem itemImage={require('../img/bandejas1.jpg')} />
                  <MenuItem itemImage={require('../img/bandejas2.jpg')} />
                  <MenuItem itemImage={require('../img/bandejas3.jpg')} />
                  <MenuItem itemImage={require('../img/bandejas4.jpg')} />
                  <MenuItem itemImage={require('../img/bandejas5.jpg')} />
                  <MenuItem itemImage={require('../img/bandejas6.jpg')} />
                  <MenuItem itemImage={require('../img/bandejas7.jpg')} />
                </View>
              </View>
            <Text style={styles.header}>Burbujas </Text>
              <View style={styles.scrollContainer}>
                <View style={styles.menuContainer}>
                  <MenuItem itemImage={require('../img/burbuja1.jpg')} />
                  <MenuItem itemImage={require('../img/burbuja2.jpg')} />
                  <MenuItem itemImage={require('../img/burbuja3.jpg')} />
                  <MenuItem itemImage={require('../img/burbuja4.jpg')} />
                </View>
              </View>
            <Text style={styles.header}>Anchetas </Text>
            <View style={styles.scrollContainer}>
              <MenuItem itemImage={require('../img/ancheta.jpg')} />
            </View>
           <Footer/>
          </View>
        </ScrollView>
    )
  }
}

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
  header: {
    fontSize:28,
    textAlign:'left',
    padding:10,
    color:'#FF0000'
  },
})

module.exports = Frutas;
