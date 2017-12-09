import React, { Component } from 'react';
import {
  StackNavigator,
} from 'react-navigation';
import HomeScreen from './src/pages/HomeScreen';
import Soporte from './src/pages/Soporte';
import Noticias from './src/pages/Noticias';
import Productos from './src/pages/Productos';
import Nosotros from './src/pages/Nosotros';
import Contacto from './src/pages/Contacto';
import Servicios from './src/pages/Servicios';
import Preprensa from './src/pages/Otros';
import Preguntas from './src/pages/Preguntas';
import Garantia from './src/pages/Garantia';

const HomeScreenMain = StackNavigator({
  Home: { screen: HomeScreen },
  Soporte: { screen: Soporte },
  Noticias: { screen: Noticias },
  Productos: { screen: Productos },
  Nosotros: { screen: Nosotros },
  Contacto: { screen: Contacto },
  Servicios: { screen: Servicios },
  Preprensa: { screen: Preprensa },
  Preguntas: { screen: Preguntas },
  Garantia: { screen: Garantia },
});
export default class App extends React.Component<{}> {
  constructor(props){
      super(props);
  }
  render() {
    return (
        <HomeScreenMain/>
    );
  }
}
