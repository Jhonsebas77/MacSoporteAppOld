'use stric'
import React, { Component } from 'react';
import {
  StyleSheet,Text,FlatList,
  View,ImageBackground,ScrollView,TouchableOpacity,
} from 'react-native';
import { Card } from 'react-native-elements';
import ImageOverlay from '../components/ImageOverlay';
import Footer from '../components/Footer';

export default class Agencias extends React.Component{
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
      <ScrollView style={styles.container}>
        <ImageBackground source= {require('../img/bn_Soporte.jpg')} style={styles.banner} >
          <ImageOverlay header='Podemos Ayudarte!' paragraph= 'Cuentanos que sucedio' />
        </ImageBackground>
          <Card title="Contáctenos" style={styles.cardListContainer}>
            <View style={styles.doubleListContainer}>
              <View style={{padding:5}} >
                <FlatList
                  data={[
                   {key: '• Direccion'},
                   {key: '• Ciudad'},
                   {key: '• Telefono'},
                   {key: '• Celular'},
                   {key: '• Correo'},
                  ]}
                  renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                />
              </View>
              <View style={{padding:5}}>
                <FlatList
                  data={[
                   {key: 'Calle 28N #5N - 14 Barrio San Vicente'},
                   {key: 'Cali - Colombia'},
                   {key: '(032) 668-5003'},
                   {key: '(310) 494-2518'},
                   {key: 'servicioalcliente@macsoporte.com'},
                  ]}
                  renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                />
              </View>
            </View>
          </Card>
          <Card style={styles.cardListContainer}>
            <Text> Podemos ayudarte los dias Lunes a los dias Sábado de 9am a 2pm jornada continua.
               No aplica Festivos. Si necesitas otro horario por favor haz click en "Solicitar una cita".
            </Text>
              <View style={styles.cardListContainer}>
                <TouchableOpacity
                  style={styles.buttonService}
                  onPress={() => this.props.navigation.navigate('Garantia', { user: 'Garantia Dispositivo' })}>
                    <Text>Solicitar una cita</Text>
                </TouchableOpacity>
              </View>
            <Text>
              Tambien puedes verificar si el dispotivo cuenta todavia con garantia
            </Text>
            <View style={styles.cardListContainer}>
              <TouchableOpacity
                style={styles.buttonService}
                onPress={() => this.props.navigation.navigate('Garantia', { user: 'Garantia Dispositivo' })}>
                  <Text>Verificar Garantia</Text>
              </TouchableOpacity>
            </View>
          </Card>
          <Card title="Informacion Importante">
            <FlatList
              data={[
               {key: '• Todo diagnostico tiene un costo de $30.000'},
               {key: '• No se asume responsabilidad por Software o perdida de informacion del equipo '},
               {key: '• Todo Backup tiene costo'},
               {key: '• No se responde por el estado de equipos y/o dispositivos despues de 90 dias contados apartir de la notificacion de retiro'},
               {key: '• Los equipos no deben ingresar con accesorios, asi que no se responde por la perdida de accesorios que no aparezcan en la orden de servicio'},
               {key: '• Los equipos y/o dispositivos que ingresen por problemas de humedsad se les realizara inicialemnte una revision para verificar que enciendan. Si se ha deteriorado alguna pieza por la humedad, se da garantia sobre la pieza que se cambio siempre y cuando no este afectado nuevamente por la humedad; de resto no se da garantia alguna ya que la humedad afecta la parte electronica'},
               {key: '• Las reparaciones y/o mantenimientos tienen garantia de tres (3) meses apartir de la notificacion de retiro aplicando terminos y condiciones'},
               {key: '• Las memorias y discos duros tienen garantia de seis (6) meses a un (1) año a partir de la notificacion de retiro aplicando terminos y condiciones'},
              ]}
              renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
            />
          </Card>
          <Footer/>
      </ScrollView>

    )
  }
}

const styles = StyleSheet.create({
  containerImage: {
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap:'wrap',
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  doubleListContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardListContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  listContainer: {
    width:'100%',
    flex: 2,
  },
    container: {
    flex: 1,
  },
    header: {
    fontSize:28,
    textAlign:'left',
    padding:10,
    color:'#FF0000',
    backgroundColor:'#fff'
  },
  banner: {
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    height:120,
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

module.exports = Agencias;
