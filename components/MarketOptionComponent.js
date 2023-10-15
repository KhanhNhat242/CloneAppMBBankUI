import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native'

function MarketOptionComponent(props) {
    const {option, onPress} = props;
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image style={styles.img}
            source={option.img}
            ></Image>
            <Text style={styles.title}>{option.title}</Text>
        </TouchableOpacity>
    )
}
export default MarketOptionComponent;
const styles = StyleSheet.create({ 
    container: {
        borderRadius: 10,
        margin: 8,
        marginVertical: 20,
        width: 75,
        height: 65,
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {  
        width: 55,
        height: 55,
        resizeMode: 'center',
        margin: 10,
    },
    title: {
        fontSize: 10,
        color: 'black',
        textAlign: 'center',        
    },
})