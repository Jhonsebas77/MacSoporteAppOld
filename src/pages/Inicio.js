'use stric'
import React, { Component } from 'react';
import MapView from 'react-native-maps';
import {StyleSheet,View,} from 'react-native';
import Footer from '../components/Footer';

export default class Inicio extends React.Component{
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
      <View style={styles.container}>
        <View style={styles.mapcontainer}>
            <MapView style={styles.map}
                initialRegion={{latitude: 37.78825,
                  longitude: -122.4324,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421
                }}
            />
        </View>
        <View style={styles.infocontainer}>
          <Footer/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  infocontainer:{
    height:'20%',
    width:'100%',
  },
  mapcontainer: {
    height:'80%',
    width:'100%',
  },
  map: {
    flex: 1,
  },
  header: {
    fontSize:28,
    textAlign:'center',
    padding:10,
    color:'#FF0000'
  },
  item:{
    fontSize:18,
    textAlign:'left',
    padding:20,
    color:'#000',
  },
})

//Exportar el modulo
module.exports = Inicio;
