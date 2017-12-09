import React, { Component } from 'react';
import {StyleSheet,ImageBackground,Text,View, Image} from 'react-native';
import ImageOverlay from './ImageOverlay';
import { Card,Badge } from 'react-native-elements';

export default class Itemtosell extends React.Component<{}> {
  render() {
    let descripcion = this.props.descripcion ?
        <Text style={{textAlign:'center'}}>
          {this.props.descripcion}
        </Text>
    : null;
    let extra = this.props.extra ?
        <Text style={{textAlign:'center'}}>
          {this.props.extra}
        </Text>
    : null;
    let disponible = this.props.disponible ?
        <Text style={styles.badgeText}>
          {this.props.disponible}
        </Text>
    : null;
    let precio = this.props.precio ?
        <Text style={styles.badgeText}>
          {this.props.precio}
        </Text>
    : null;
    return (
      <View style={{alignItems:'center'}}>
        <View style={styles.menuItem}>
          <Image style={styles.image} source={this.props.sellImage}/>
        </View>
        {descripcion}
        {extra}
        <Badge containerStyle={{ backgroundColor: '#3898EC', padding:5}}>
          {disponible}
          {precio}
        </Badge>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  banner: {
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    height:100,
  },

  overlayParagraph: {
    elevation:1,
    alignSelf:'center',
    fontSize:16,
    fontStyle:'italic',
    color:"#292929",
    textAlign:'center',
    padding:8,
    marginTop:8,
    backgroundColor:'rgba(255,255,255,0.6)',
    fontWeight:'bold',
  },
  badgeText:{
     color:'white',
     padding:5,
  },
  menuItem:{
    width:150,
    height: 150,
    padding:5,
  },
    image:{
    width:'100%',
    height:'100%',
  }
});

module.exports = Itemtosell;
