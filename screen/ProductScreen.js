import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native'

export default Product = () => {
    return (
        <View style={styles.container}>
        <ImageBackground
          source={require('../assets/background.png')}
          style={styles.imageBackground}>

  

          </ImageBackground>
        </View>
    ) 
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBackground: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
})