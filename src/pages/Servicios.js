'use stric'
import React, { Component } from 'react';
import { Card } from 'react-native-elements';
import {StyleSheet,WebView,Text,View,ScrollView,ImageBackground} from 'react-native';
import Footer from '../components/Footer';
import ImageOverlay from '../components/ImageOverlay';


export default class Servicios extends React.Component{
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
<ScrollView>
  <ImageBackground source= {require('../img/bn_Soporte.jpg')} style={styles.banner} >
    <ImageOverlay header='Diferentes formas de ayudarte!'/>
  </ImageBackground>

  <Card title="Mantenimiento Preventivo y Correctivo">
    <Text> Contamos con personal calificado y con experiencia para la detección posibles fallas en el equipo,
    de tal forma que podamos aumentar la vida útil del mismo y
    disminuir el riesgo de reparaciones innecesarias. </Text>
  </Card>

  <Card title="Actualización del Sistema">
    <Text> Con cada nueva actualización de OS X surgen preguntas y dudas sobre
    si nuestro Mac podrá correr la nueva versión, cómo instalarla y si las aplicaciones
    que usamos serán compatibles. En Mac Soporte te ayudamos a resolver inquietudes que
    tengas sobre cada actualización. </Text>
  </Card>

  <Card title="Servicio y Diagnóstico Inmediato">
    <Text> Disponemos del diagnóstico y uso en iOS y OSX (Mac), para brindar al cliente una respuesta
    lo mas pronta para poder resolver el problema que se genera en los producto y así brindar la mejor  solución. </Text>
  </Card>

  <Card title="Asesorias y Entrenamientos">
    <Text> Nuevo en el mundo de Apple? con nosotros descubriras que es mas sencillo de lo que parece,
    agenda una cita para tener el placer de ayudarte </Text>
  </Card>

  <Footer/>
</ScrollView>

    )
  }
}

//Estilos
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    padding:10,
    backgroundColor:"#000"
  },
  banner: {
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    height:120,
  },
})

//Exportar el modulo
module.exports = Servicios;
