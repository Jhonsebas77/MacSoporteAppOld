'use stric'
import React, { Component } from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import {StyleSheet,WebView,Text,View} from 'react-native';

export default class Servicios extends React.Component{
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
<View>
  <Text> Mantenimiento Preventivo y Correctivo </Text>
  <Text> Contamos con personal calificado y con experiencia para la detección posibles fallas en el equipo,
  de tal forma que podamos aumentar la vida útil del mismo y
  disminuir el riesgo de reparaciones innecesarias. </Text>

  <Text> Actualización del Sistema </Text>
  <Text> Con cada nueva actualización de OS X surgen preguntas y dudas sobre
  si nuestro Mac podrá correr la nueva versión, cómo instalarla y si las aplicaciones
  que usamos serán compatibles. En MAc Soporte te ayudamos a resolver inquietudes que
  tengas sobre cada actualización. </Text>

  <Text> Servicio & Diagnóstico Inmediato </Text>
  <Text> Disponemos del diagnóstico y uso en iOS y MAC, para brindar al cliente una respuesta
  lo mas pronta para poder resolver el problema que se genera en los producto y así brindar la mejor  solución. </Text>

  <Text> Asesorias & Entrenamientos </Text>
  <Text> Nuevo en el mundo de Apple? con nosotros descubriras que es mas sencillo de lo que parece, agenda una cita para tener el placer de ayudarte </Text>

</View>

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
})

//Exportar el modulo
module.exports = Servicios;
