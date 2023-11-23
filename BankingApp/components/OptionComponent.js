import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native';


function OptionComponent(props) {
  const { option, onPress } = props;
  return (
    <TouchableOpacity style={styles.container}>
        <Image
          source={option.img}
          style={styles.img}
        />
        <Text style={styles.title}>{option.title}</Text>
        <Image
          source={require('../assets/mainIcon/arrow.png')}
          style={styles.arrow}
        />
    </TouchableOpacity>
  )
}
export default OptionComponent;
const styles = StyleSheet.create({
  container: {
    height: 85,
    width: 370,
    flexDirection: 'row',
    borderRadius: 5,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
    marginVertical: 9,

  },
  img: {
    width: 35,
    height: 35,
    resizeMode: 'center',
    margin: 10,
  },
  title: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    
  },
  arrow: {
    position: 'absolute', 
    right: 10,
    height: 25,
    width: 25,
    resizeMode: 'center',

  },
})