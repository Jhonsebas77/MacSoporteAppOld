'use stric'
import React, { Component } from 'react';
import {StyleSheet,Text,View,TouchableOpacity,ScrollView,} from 'react-native';
import BannerInPages from '../components/BannerInPages';
import ImageOverlay from '../components/ImageOverlay';
import Footer from '../components/Footer';

export default class Fruticola extends React.Component{
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
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.titulo}>Bienvenidos a Bienvenidos a Frutícola de Colombia </Text>

          <Text style={styles.parrafo}>
          Somos una empresa colombiana que inició su historia en el campo de la importación de frutas premium
          en el Valle del Cauca para el año de 1978.
          </Text>

          <Text style={styles.parrafo}>
          Con una amplia trayectoria, nuestra compañía ha establecido los estándares de calidad de producto y
          servicio  mediante la constante evolución técnica, el mejoramiento y la capacitación constante de nuestro
          recurso humano, formando un equipo especializado que nos permite ofrecer las mejores frutas importadas a
          través de una logística óptima, para llevar a nuestros clientes calidad y confianza en todos los aspectos.
          </Text>

          <Text style={styles.parrafo}>
          Nuestros productos son importados directamente de los mejores países productores para ofrecer siempre lo mejor.
          </Text>

          <Text style={styles.parrafo}>
          Con un portafolio que ofrece ocho frutas premium (manzanas, peras, duraznos, nectarinas, kiwis, uvas, cerezas
          y ciruelas) con sus respectivas variedades, su compañía puede encontrar en nosotros un proveedor honesto y
          dedicado que selecciona las frutas con estrictos estándares de calidad.
          </Text>

          <View style={styles.containerService}>
            <Text style={styles.titulointerno}>
              Nuestros Servicios
            </Text>
            <Text style={styles.parrafointerno}>
              Importamos y distribuimos las frutas más frescas a través de almacenes de cadena en todo el
              País fortaleciendo nuestros vínculos comerciales a través de los años son motivo de orgullo
              para nuestra compañía. Estamos en todas las centrales mayoristas, supermercados de cadena y
              supermercados independientes en todo el territorio nacional.
            </Text>
            <Text style={styles.parrafointerno}>
              Descarga nuestro portafolio de servicios en formato PDF.
            </Text>
            <View style={styles.btncontainer}>
              <TouchableOpacity
                style={styles.buttonService}
                onPress={() => this.props.navigation.navigate('Portafolio', { user: 'Portafolio 2017' })}>
                  <Text>Portafolio</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.parrafointerno}>
              Descarga nuestros certificados de retención en la fuente, IVA e ICA.
            </Text>
            <View style={styles.btncontainer}>
              <TouchableOpacity
                style={styles.buttonService}
                  onPress={() => this.props.navigation.navigate('Certificados', { user: ' Certificados de retención en la fuente, IVA e ICA.' })}>
                  <Text>Certificados</Text>
              </TouchableOpacity>
            </View>
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
          </View>
        </View>
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
    color:'#fff'
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
    color:'#fff',
  },
  buttonService:{
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: 240,
    height: 40,
  },

})

//Exportar el modulo
module.exports = Fruticola;
