import React, { Component } from 'react';
import {StyleSheet,ImageBackground,} from 'react-native';
import ImageOverlay from './ImageOverlay';

export default class Banner extends React.Component<{}> {
  render() {
    return (
        <ImageBackground source= {require('../img/Header.jpg')}
                style={styles.banner} >
          <ImageOverlay header='- Mac Soporte - ' paragraph= 'Servicio Tecnico Especializado' />
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  banner: {
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    height:150,
  },

});

module.exports = Banner;
