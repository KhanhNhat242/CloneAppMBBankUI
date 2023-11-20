import { StatusBar } from 'expo-status-bar';
import {
  ImageBackground, StyleSheet, Text, View, Image, TextInput, TouchableOpacity,
} from 'react-native';

import RootComponent from './screen/IndexScreen.js';
import MainOptionComponent from './components/MainOptionComponent.js';
import MarketOptionComponent from './components/MarketOptionComponent.js';
import OptionComponent from './components/OptionComponent.js';
import ProductScreen from './screen/ProductScreen.js';
import HomeScreen from './screen/HomeScreen.js';
import MBPlusScreen from './screen/MbPlusScreen.js';
import PresentScreen from './screen/PresentScreen.js';
import UseFulnessScreen from './screen/UseFulnessScreen.js';
import SettingAccountComponent from './components/SettingAccountModal.js';
import AccountOptionComponent from './components/AccountOptionComponent.js';
export default function App() {

  return (
     <RootComponent/>
      
  );
};
const styles = StyleSheet.create({
  container: {    
      flex: 1,
  }
})

