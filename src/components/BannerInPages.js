import React, { Component } from 'react';
import {StyleSheet,ImageBackground,Text,View} from 'react-native';
import ImageOverlay from './ImageOverlay';

export default class BannerInPages extends React.Component<{}> {
  render() {
    let header = this.props.headerInPage ?
        <Text style={styles.overlayHeader}>
          {this.props.headerInPage}
        </Text>
    : null;

    let paragraph = this.props.paragraphInPage ?
        <Text style={styles.overlayParagraph}>
          {this.props.paragraphInPage}
        </Text>
    : null;
    return (
      <View>
        <ImageBackground source= {require('../img/main_img_1.jpg')} style={styles.banner}>
          {header}
          {paragraph}
        </ImageBackground>
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
  overlayHeader: {
    elevation:1,
    alignSelf:'center',
    fontSize:28,
    color:"#292929",
    textAlign:'center',
    padding:10,
    backgroundColor:'rgba(255,255,255,0.6)',
    fontWeight:'bold',
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
});

module.exports = BannerInPages;
