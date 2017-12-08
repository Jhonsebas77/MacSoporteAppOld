import React, { Component } from 'react';
import {StyleSheet,ImageBackground,} from 'react-native';
import ImageOverlay from './ImageOverlay';

export default class Banner extends React.Component<{}> {
  render() {
    return (
        <ImageBackground source= {require('../img/main_img_1.jpg')}
                style={styles.banner} >
          <ImageOverlay header='- Fruticola de Colombia - ' paragraph= 'Representantes #1 de Dole Chile' />
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  banner: {
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    height:200,
  },

});

module.exports = Banner;
