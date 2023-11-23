import React, { Component } from 'react'
import { Text, View, StyleSheet, Image,  TouchableOpacity } from 'react-native'

function MainOptionComponent (props){
    const {option, onPress} = props;
    return (
        option.checked ?
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image style={styles.img}
            source={option.img}
            ></Image>
            <Text style={styles.title}>{option.title}</Text>
        </TouchableOpacity>
        : <View style={{width: 100, height: 100, opacity: 0,margin: 10,}}>

        </View>
    )
}
export default MainOptionComponent;
const styles = StyleSheet.create({ 
    container: {
        borderRadius: 10,
        margin: 10,
        width: 105,
        height: 105,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 1,    
    },
    img: {  
        width: 30,
        height: 30,
        resizeMode: 'contain',
        margin: 10,
    },
    title: {
        fontSize: 14,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        marginHorizontal:10
        
    },
})