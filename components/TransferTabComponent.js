import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'


export default function TransferTabComponent(props) {
    const { option, onPress } = props;
    const {checked, setChecked} = useState(true);

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Text style={[checked ? styles.checkedTitle : styles.title]}>{option.title}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        margin: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'gray'
    },
    checkedTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'blue'
    },
})