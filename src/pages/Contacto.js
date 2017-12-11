'use stric'
import React, { Component } from 'react';
import {
  StyleSheet,Text,ScrollView,
  View,FlatList,Image,TextInput,TouchableOpacity,Alert,KeyboardAvoidingView,
} from 'react-native';
import { Card,FormLabel,FormInput } from 'react-native-elements';
import Footer from '../components/Footer';
import Mapa from './Mapa';

export default class Contacto extends React.Component{
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
      <Card>
        <Text style={styles.header}>Formulario de contacto</Text>
        <Text> Preguntas, comentarios o inquietudes? por favor
              llenar el siguiente formulario. Nos pondremos en
              contacto con usted tan pronto como nos sea posible.
        </Text>
          <View>
              <Text style={styles.textDiv}>Nombre</Text>
              <TextInput
                style={styles.textInput}
                returnKeyType="next"
                placeholder='Nombre Completo'
                placeholderTextColor='blue'>
               </TextInput>
               <Text style={styles.textDiv}>Telefono</Text>
               <TextInput
                 style={styles.textInput}
                 returnKeyType="next"
                 keyboardType="phone-pad"
                 placeholder='Numero de Contacto'
                 placeholderTextColor='blue'>
                </TextInput>
                <Text style={styles.textDiv}>Email</Text>
                <TextInput
                  style={styles.textInput}
                  returnKeyType="next"
                  keyboardType="email-address"
                  placeholder='Correo Electronico'
                  placeholderTextColor='blue'>
                 </TextInput>
                 <Text style={styles.textDiv}>Dispositivo</Text>
                 <TextInput
                 style={styles.textInput}
                 returnKeyType="next"
                 keyboardType="phone-pad"
                 placeholder='Dispositivo'
                 placeholderTextColor='blue'>
                </TextInput>
                    <Text style={styles.textDiv}>Daño</Text>
                    <TextInput
                      style={styles.textInput}
                      returnKeyType="next"
                      keyboardType="email-address"
                      placeholder='Tipo de Daño'
                      placeholderTextColor='blue'>
                     </TextInput>
                   <Text style={styles.textDiv}>Mensaje</Text>
                   <TextInput
                     style={styles.textInput}
                     multiline = {true}
                     numberOfLines = {4}
                     returnKeyType="go"
                     placeholder='Dejanos tu mensaje'
                     placeholderTextColor='blue'>
                    </TextInput>

            </View>
            <View style={styles.container}>
            <TouchableOpacity
              style={styles.buttonContainer}
               onPress={()=> alert( "Mensaje Enviado")}>
                <Text style={{color:'#fff'}}>Enviar Mensaje</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonContainer}
                 onPress={() => this.props.navigation.navigate('Mapa', { user: 'Donde Estamos?' })}>
                <Text style={{color:'#fff'}}>Donde Estamos?</Text>
            </TouchableOpacity>
            </View>
          </Card>
          <Footer/>
        </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding:30,
    flex: 1, flexDirection: 'row',
  },
  formcontainer: {
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding:30,
    marginLeft:5,
  },
  button:{
    width: 300,
    height: 30,
    backgroundColor: 'red',
    alignItems:'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    borderRadius:8,
    borderWidth:1,
    padding:5,
  },
  divform: {
    flexDirection:'row',
    flexWrap:'wrap',
    backgroundColor:'#343434',
  },
textDiv:{
textAlign:'left',
paddingLeft:20,
fontWeight:'bold',
},

  textInput: {
    alignSelf:'stretch',
    padding:20,
    paddingTop:20,
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  textInputDiv: {
    width:'100%',
    alignSelf:'stretch',
    padding:10,
    backgroundColor: 'rgba(11,7,16,0.2)',
  },
  buttonContainer: {
    backgroundColor: '#3898EC',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: 240,
    height: 40,
    paddingTop:5,
    paddingLeft:5,
    paddingVertical:5,
  },
  header: {
    fontSize:28,
    textAlign:'left',
    padding:10,
    color:'#3898EC'
  },
})

//Exportar el modulo
module.exports = Contacto;
