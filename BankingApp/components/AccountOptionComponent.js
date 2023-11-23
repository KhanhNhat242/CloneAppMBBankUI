import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'


export default function AccountOptionComponent(props) {
    const {option, onPress} = props
    return (
        <TouchableOpacity style={styles.container}>
            <Image
                source={option.img}
                style={styles.img}
            />
            <Text style={styles.title}>{option.title}</Text>
            {option.arrow ? <Image
                source={require('../assets/mainIcon/arrow.png')}
                style={styles.arrow} /> : null}
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        
        height: 85,
        width: '100%',
        flexDirection: 'row',
        borderRadius: 5,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderBottomColor: '#E5E5E5',
        borderBottomWidth: 2,

    },
    img: {
        width: 35,
        height: 35,
        resizeMode: 'contain',
        margin: 20,
    },
    title: {
        fontSize: 16,
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    arrow: {
        width: 20,
        height: 20,
        resizeMode: 'center',
        position: 'absolute',
        right: 10,
    },
})