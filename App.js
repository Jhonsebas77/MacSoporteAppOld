import React, { Component } from 'react';
import {
  StackNavigator,
} from 'react-navigation';
import Frutas from './src/pages/Frutas';
import Inicio from './src/pages/Inicio';
import Recetas from './src/pages/Recetas';
import Fruticola from './src/pages/Fruticola';
import Agencias from './src/pages/Agencias';
import Contacto from './src/pages/Contacto';
import HomeScreen from './src/pages/HomeScreen';
import Certificados from './src/pages/Certificados';
import Portafolio from './src/pages/Portafolio';
import Politica from './src/pages/Politica';

const HomeScreenMain = StackNavigator({
  Home: { screen: HomeScreen },
  Inicio: { screen: Inicio },
  Frutas: { screen: Frutas },
  Recetas: { screen: Recetas },
  Fruticola: { screen: Fruticola },
  Agencias: { screen: Agencias },
  Contacto: { screen: Contacto },
  Certificados: { screen: Certificados },
  Politica: { screen: Politica },
  Portafolio: { screen: Portafolio },
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
