import { StatusBar } from 'expo-status-bar';
import {
  ImageBackground, StyleSheet, Text, View, Image, TextInput, TouchableOpacity,
} from 'react-native';

import RootComponent from './screen/IndexScreen.js'
import MainOptionComponent from './components/MainOptionComponent.js';
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

