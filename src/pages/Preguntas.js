'use stric'
import React, { Component } from 'react';
import { Card } from 'react-native-elements';
import {StyleSheet,WebView,Text,View,ScrollView,ImageBackground} from 'react-native';
import Footer from '../components/Footer';
import ImageOverlay from '../components/ImageOverlay';


export default class Preguntas extends React.Component{
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
    <ImageOverlay header='Preguntas Frecuentes'/>
  </ImageBackground>

  <Card title="Mantenimiento Preventivo y Correctivo">
    <Text>

    <Text style={{fontWeight:'bold'}}>{"\n"}El equipo se encuentra muy lento</Text>
    {"\n"}Si tu equipo va más lento de lo normal puede deberse a muchas causas, entre ellas que el sistema operativo tenga fallos o que el procesador sufra algún daño

    <Text style={{fontWeight:'bold'}}> {"\n"}Puedo Ampliar la memoria a mi equipo MAC</Text>
    {"\n"}Dependiendo de el modelo del equipo se puede ampliar la memoria RAM.  para que así tenga un mejor desempeño en la actividades que se realiza

    <Text style={{fontWeight:'bold'}}>{"\n"}Mi equipo se calienta demasiado</Text>
    {"\n"}Al generar un calentamiento anormal puede ser de diversos factores, que el disipador se encuentre dañado o que la cream discipadora esté seca y la mejor solución es un mantenimiento correctivo

    <Text style={{fontWeight:'bold'}}>{"\n"}Mi equipo presenta problemas de humedad</Text>
    {"\n"}Cuando un producto apple tiene contacto con líquido la solución ideal es realizar un mantenimiento preventivo y descartar que piezas fueran afectadas por el líquido,

    </Text>
  </Card>

  <Card title="Asesoramiento & Entrenamientos">
    <Text>
    <Text style={{fontWeight:'bold'}}>{"\n"}¿Porque mi teléfono no me carga bien?</Text>
    {"\n"}Si tú teléfono no te carga bien puede ser causa del cable que estás usando , tienes que comprar un cable certificado de apple , hay varias marcas y con garantía de 1 año

    <Text style={{fontWeight:'bold'}}>{"\n"}¿Como puedo descargar aplicaciones?</Text>
    {"\n"}Claro para descargar aplicaciones tendríamos que crear una cuenta apple ID que sería una cuenta personal llamado iCloud y así descargamos aplicaciones sin ningún costo la que desees o  puedes comprarla con tu tarjeta de crédito y es 100% confiable

    <Text style={{fontWeight:'bold'}}>{"\n"}Que me recomiendas para que mi celular no se me quiebre?</Text>
    {"\n"}Con gusto te tenemos los protectores vidrios que son recomendados para los golpes y te sugerimos que el teléfono tenga un buen estuche que cubra las esquinas así evitarás un golpe sobre la pantalla, sé que no nos gusta pero es mejor cubrirlo

    <Text style={{fontWeight:'bold'}}>{"\n"}Como puedo duplicar mis dispositivos apple a un TV</Text>
    {"\n"}Claro hay varias opciones tenemos una se llama Apple TV  que contiene varias opciones como visualizar fotos ver películas  y juegos solo es conectar un cable HDM1 al TV y tener una buena conectividad de internet A partir de 5Mb la otra sería un adaptador

    <Text style={{fontWeight:'bold'}}>{"\n"}Como puedo hacer una copia de mi teléfonos para que no se me pierda nada</Text>
    {"\n"}Hay dos opciones una es si tienes computador apple puedes hacer la copia a través de una aplicación llamado iTunes y te realiza toda tu información y la otra es a través de iCloud que te regala 5gb libres para q puedes solo transferir fotos ,contactos ,notas , recordatorios si deseas más te tocarías comprar más espacio y la música que compras te la guarda pero no la que bajas gratis

    </Text>
  </Card>

  <Card title="Actualización del Sistema">
    <Text>

    <Text style={{fontWeight:'bold'}}>{"\n"}Mi equipo es apto para la última actualización OSX</Text>
    {"\n"}Dependiendo del modelo del equipo a veces es recomendable realizar la actualización.

    <Text style={{fontWeight:'bold'}}>{"\n"}Al actualizar el sistema operativo es necesario de realizar una copia de seguridad</Text>
    {"\n"}Lo recomendable es hacer un Backup de la información, ya que en ocasiones el internet puede presentar fallas y esto hace que la actualización presente fallas.

    <Text style={{fontWeight:'bold'}}>{"\n"}Es necesario estar conectado a internet para actualizar OSX</Text>
    {"\n"}Si, ya que el sistema es descargado desde los servidores apple.

    <Text style={{fontWeight:'bold'}}>{"\n"}Al actualizar mi equipo este tendrá algún cambio</Text>
    {"\n"}Siempre que hay una nueva actualización OSX es para tener mejor desempeño del equipo.

     </Text>
  </Card>

  <Card title="Servicio & Diagnóstico Inmediato">
    <Text>

    <Text style={{fontWeight:'bold'}}>{"\n"}Cuanto tiempo tarda el diagnóstico de mi equipo</Text>
    {"\n"}Puede tardar 2 días realizando el diagnóstico.

    <Text style={{fontWeight:'bold'}}>{"\n"}Tendré alguna respuesta al momento de que realicen el diagnóstico</Text>
    {"\n"}En el momento en que se tiene el diagnóstico del equipo MacFix se encargará de enviar un correo al cliente informando el estado de su equipo.

    <Text style={{fontWeight:'bold'}}>{"\n"}En el momento en que lleve mi equipo ustedes lo pueden diagnosticar inmediatamente</Text>
    {"\n"}Si, en el momento en que nos entregue el equipo hacemos un diagnostico de inmediato para tener idea de que puede estar afectando como tal y así poder ingresarlo para hacer una valoración mas profunda.

    <Text style={{fontWeight:'bold'}}>{"\n"}Qué servicios manejan ustedes</Text>
    {"\n"}Manejamos una amplio servicio técnico, tales como, mantenimiento cambio de repuesto instalación de Software y Asesorías.

     </Text>
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
module.exports = Preguntas;
