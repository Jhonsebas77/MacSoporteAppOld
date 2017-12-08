'use stric'
import React, { Component } from 'react';
import {
  StyleSheet,Text,
  View,Image,TextInput,Button,Alert,KeyboardAvoidingView,
} from 'react-native';
import BannerInPages from '../components/BannerInPages';
import ImageOverlay from '../components/ImageOverlay';
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
      <KeyboardAvoidingView behavior="padding">
        <Text style={styles.header}>Déjanos un mensaje</Text>
        <View style={styles.container}>
            <View>
              <TextInput
                placeholder="Nombre"
                returnKeyType="next"
                onSubmitEditing={()=>this.passwordInput.focus()}
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input}/>
              <TextInput
                placeholder="E-Mail"
                keyboardType="email-address"
                returnKeyType="next"
                ref= {(input) => this.passwordInput=input}
                style={styles.input}/>
              <TextInput
                placeholder="Telefono"
                secureTextEntry
                returnKeyType="next"
                keyboardType="phone-pad"
                ref= {(input) => this.passwordInput=input}
                style={styles.input}/>
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
          </View>
        </View>
      </KeyboardAvoidingView>
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
