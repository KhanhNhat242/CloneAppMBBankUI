import {
  StyleSheet
} from 'react-native';

import RootComponent from './screen/IndexScreen.js';

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

