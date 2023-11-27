import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function SubHeader(props) {
    const {title} = props

    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
    }

    const goHome = () => {
        navigation.navigate('Main');
    }

    return (
            <View style={styles.header}>
                <TouchableOpacity onPress={goBack}>
                    <Image
                        source={require('../assets/mainIcon/back.png')}
                        style={{ width: 15, height: 15, margin: 10, resizeMode: 'contain' }}
                    />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>{title}</Text>
                <TouchableOpacity onPress={goHome}>
                    <Image
                        source={require('../assets/mainIcon/home.png')}
                        style={{ width: 20, height: 20, margin: 10, resizeMode: 'contain' }}
                    />
                </TouchableOpacity>
            </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: '10%',
        width: '100%',
        backgroundColor: '#1D00D4',
        alignItems: 'flex-end',
        paddingBottom: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',

    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 5,
    },
})