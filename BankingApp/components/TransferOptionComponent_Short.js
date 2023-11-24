import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { onPress } from 'deprecated-react-native-prop-types/DeprecatedTextPropTypes';

export default function TransferOptionComponent_Short(props) {
    const { option } = props;


    return (
        <TouchableOpacity >
            <View style={styles.container}>
                <Image source={option.img} style={styles.img} />
                <Text style={styles.title}>{option.title}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        width: 170,
        height: 70,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 1,
        borderRadius: 10,
        margin: 10,
        flexDirection: 'row'
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
        width: 80
    },
})