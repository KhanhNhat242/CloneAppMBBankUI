import { View, Text, StyleSheet, TouchableOpacity, Image, Switch } from 'react-native'
import React, {useState} from 'react'

function UseFulnessOptionComponent(props) {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const { option, onPress } = props;
    return (
        <TouchableOpacity style={styles.container}>
            <Image
                source={option.img}
                style={styles.img}
            />
            <Text style={styles.title}>{option.title}</Text>
            <View style={styles.toggleSwitch}>
                {option.toggleSwitch ?
                <Switch
                trackColor={{ false: '#767577', true: '#0C2BC9' }}
                thumbColor={isEnabled ? 'white' : 'white'}
                onValueChange={toggleSwitch}
                value={isEnabled}
                
            />
            :null
                }
            </View>
        </TouchableOpacity>
    )
}
export default UseFulnessOptionComponent;
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
        fontSize: 30,
        color: 'blue',
        textAlign: 'center',
        fontWeight: 'bold',
        position: 'absolute',
        right: 10,
    },
    toggleSwitch: {
        position: 'absolute',
        right: 10,
    }
})