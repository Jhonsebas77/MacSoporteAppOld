'use stric'
import React, { Component } from 'react';
import {StyleSheet,Text,View,TouchableOpacity,ScrollView,} from 'react-native';
import { Card } from 'react-native-elements';
import BannerInPages from '../components/BannerInPages';
import ImageOverlay from '../components/ImageOverlay';
import Footer from '../components/Footer';

export default class Nosotros extends React.Component{
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
          <Card title="Bienvenidos Mac Soporte" style={styles.container}>
            <Text style={styles.parrafo}>
            Somos una empresa familiar que inició su historia en el mantenimiento de equipos de Apple con una trayectoria
            de mas de 12 años.
            </Text>

            <Text style={styles.parrafo}>
            Con una amplia trayectoria, nuestra compañía ha establecido los estándares de calidad de producto y
            servicio  mediante la constante evolución técnica, el mejoramiento y la capacitación constante de nuestro
            recurso humano, formando un equipo especializado que nos permite ofrecer el mejor servicio posible.
            </Text>

            <Text style={styles.parrafo}>
            En Mac Soporte tambien ofrecemos ademas del mantenimiento preventivo y correctivo de los equipos de Apple, un amplio servicio
            de asesoramiento para que seas uno con tu equipo, tambien ofrecemos servicio Tecnico y Especializado en Mantenimiento de equipos
            de Prepensa como Dolev, CTPs y Filmadoras.
            </Text>
          </Card>
          <Card title="Informacion sobre Nosotros">
            <Text style={styles.parrafointerno}>
              Aqui puedes encontrar informacion legal relacionada a Mac Soporte (NIT: 79.539.253-9).
            </Text>
            <Text style={styles.parrafointerno}>
              Conoce nuestra Política de Privacidad.
            </Text>
            <View style={styles.btncontainer}>
              <TouchableOpacity
                style={styles.buttonService}
                onPress={() => this.props.navigation.navigate('Politica', { user: 'Política de Privacidad' })}>
                  <Text>Politica de Privacidad</Text>
              </TouchableOpacity>
            </View>
              <Text style={styles.parrafointerno}></Text>
          </Card>
        <Footer/>
      </ScrollView>
    )
  }
}

//Estilos
const styles = StyleSheet.create({
  container:{
    justifyContent:'center',
    padding:10,
    backgroundColor:'#fff'
  },
  btncontainer:{
    justifyContent:'center',
    alignItems: 'center',
  },
  containerService:{
    backgroundColor:'#a8cf45',
    justifyContent:'center',
  },
  titulo:{
    fontSize:28,
    textAlign:'left',
    padding:10,
    color:'#FF0000'
  },
  titulointerno:{
    fontSize:28,
    textAlign:'left',
    padding:10,
  },
  parrafo:{
    fontSize:18,
    textAlign:'left',
    padding:15,
    color:'#000',
  },
  parrafointerno:{
    fontSize:18,
    textAlign:'left',
    padding:20,
  },
  buttonService:{
    backgroundColor: '#3898EC',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: 240,
    height: 40,
  },

})

//Exportar el modulo
module.exports = Nosotros;
