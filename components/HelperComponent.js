import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function HelperComponent(props) {
    const {option, onPress} = props
  return (
    <TouchableOpacity style={styles.wrapper}>
        <Image source={option.img} style={styles.img}/>
        <Text style={styles.txt}>{option.title}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    wrapper: {
        width: 185,
        height: 100,
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        shadowColor: 'black',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 1,   
        flexDirection: 'row',
        borderLeftColor:'#1D00D4',
        borderLeftWidth: 5,
        padding:10
    },
    img: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
        margin: 10,
    
    },
    txt: {
        fontSize: 16,
        width: '70%',
        color: 'black',
        fontWeight: '500',
        textAlign: 'left',
        marginHorizontal:10
    },

})