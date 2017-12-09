'use stric'
import React, { Component } from 'react';
import {
  StyleSheet,Text,ScrollView,
  View,FlatList,Image,TextInput,Button,Alert,KeyboardAvoidingView,
} from 'react-native';
import Footer from '../components/Footer';

export default class Contacto extends React.Component{
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
      // <KeyboardAvoidingView behavior="position">
      <ScrollView>
        <Text style={styles.header}>Formulario de contacto</Text>
        <Text> Preguntas, comentarios o inquietudes? por favor
              llenar el siguiente formulario. Nos pondremos en
              contacto con usted tan pronto como nos sea posible.
        </Text>
        <View style={styles.container}>
          <View>
              <Text>Nombre Completo</Text>
              <TextInput
              placeholder="Nombre Completo"
              returnKeyType="next"
              onSubmitEditing={()=>this.passwordInput.focus()}
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.input}/>
              <View>
                <Text>Email</Text>
                <TextInput
                  placeholder="Ingrese su correo electronico"
                  keyboardType="email-address"
                  returnKeyType="next"
                  ref= {(input) => this.passwordInput=input}
                  style={styles.input}/>
                <Text>Teléfono</Text>
                <TextInput
                  placeholder="Teléfono"
                  secureTextEntry
                  returnKeyType="next"
                  keyboardType="phone-pad"
                  ref= {(input) => this.passwordInput=input}
                  style={styles.input}/>
              </View>
              <View>
                <Text>Dispositivo</Text>
                <TextInput
                  placeholder="Dispositivo"
                  keyboardType="email-address"
                  returnKeyType="next"
                  ref= {(input) => this.passwordInput=input}
                  style={styles.input}/>
                <Text>Daño</Text>
                <TextInput
                  placeholder="Tipo de daño"
                  secureTextEntry
                  returnKeyType="next"
                  keyboardType="phone-pad"
                  ref= {(input) => this.passwordInput=input}
                  style={styles.input}/>
              </View>
              <Text>Dejanos tu Mensaje</Text>
            <TextInput
              placeholder="Dejanos tu mensaje"
              returnKeyType="go"
              multiline = {true}
              numberOfLines = {4}
              ref= {(input) => this.passwordInput=input}
              style={styles.input}/>
            <Button
              style={styles.buttonContainer}
              title="Enviar Mensaje"
              onPress={()=> alert( "Mensaje Enviado!")}
             />
             <Button
               style={styles.buttonContainer}
               title="Donde estamos?"
               onPress={()=> alert( "Abre Google Maps")}
              />
        </View>
        </View>
          <Footer/>
        </ScrollView>
      // </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding:30
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
    borderWidth:1
  },
  container: {
    alignItems: 'center',
    padding:20
  },
  input: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    width: 500,
    marginBottom:20,
    marginTop:10,
    paddingHorizontal:10
  },
  buttonContainer: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    width: 500,
    paddingVertical:15
  },
  header: {
    fontSize:28,
    textAlign:'left',
    padding:10,
    color:'#FF0000'
  },
})

//Exportar el modulo
module.exports = Contacto;
