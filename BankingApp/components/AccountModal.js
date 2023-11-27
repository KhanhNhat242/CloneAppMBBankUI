import { View, Text, Modal, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import AccountOptionComponent from './AccountOptionComponent'
import { Ionicons } from '@expo/vector-icons';

export default function AccountModal({ isVisible, onClose, userData, flagg }) {
    const [flag, setFlag] = useState()

    useEffect(() => {
        if(flagg == 1)
            setFlag(2)
    }, [])

    return (
        // <Modal
        //     transparent={true}
        //     animationType="fade"
        //     visible={isVisible}
        //     onRequestClose={onClose}
        //     propagateSwipe={true}
        // >
            <View style={styles.background}>

                <View style={[styles.option1, {marginTop: 25}]}>
                    <Image source={require('../assets/avtAccountModal.png')}
                        style={{ height: 50, width: 50, margin: 10}} />
                    <View style={{margin: 10}}>
                        <Text style={{color:'#1D00D4', fontSize: 24, fontWeight: 'bold'}}>Bee Rich</Text>
                        <Text style={{fontSize: 18}}>Trợ thủ tài chính cá nhân</Text>
                    </View>
                </View>

                <View style={styles.option1}>
                    <View style={{justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', width: '100%'}}>
                    <View>
                        <View style={{flexDirection:"row", marginLeft: 10}}>
                            <Text style={{color:'black', fontSize: 18, fontWeight: 'bold'}}>Tài khoản nguồn</Text>
                            <Text style={{color:'cyan', fontSize: 18, marginLeft: 10}}>{userData.phone}</Text>
                        </View>
                        <View style={{flexDirection:"row", marginLeft: 10, alignItems: 'flex-end'}}>
                            <Text style={{color:'#1D00D4', fontSize: 24, fontWeight: 'bold'}}>{userData.balance}</Text>
                            <Text style={{fontSize: 12, marginBottom:5}}> VNĐ</Text>
                        </View>
                    </View>
                    <Image source={require('../assets/mainIcon/arrowGray.png')}
                        style={{ height: 15, width: 15, margin: 10,}} />
                    </View>
                </View>
                <View style={styles.option2}>
                    <Text style={styles.txt}>Thẻ</Text>
                    <Image source={require('../assets/mainIcon/arrowGray.png')}
                        style={{ height: 15, width: 15, margin: 10,}} />
                </View>
                <View style={styles.option2}>
                    <Text style={styles.txt}>Tài khoản tiền gửi số</Text>
                    <Image source={require('../assets/mainIcon/arrowGray.png')}
                        style={{ height: 15, width: 15, margin: 10,}} />
                </View>
                <View style={styles.option2}>
                    <Text style={styles.txt}>Khoản vay</Text>
                    <Image source={require('../assets/mainIcon/arrowGray.png')}
                        style={{ height: 15, width: 15, margin: 10,}} />
                </View>
            </View>
        // {/* </Modal> */}
    )
}
const styles = StyleSheet.create({
    background: {
        height: 540,
        width: '100%',
        backgroundColor: '#C4CEE9',
        alignItems: 'center',
    },
    circle: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2,
        position: 'absolute',
        bottom: -25,
    },
    option1: {
        width: '90%',
        height: 80,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#E5E5E5',
        borderBottomWidth: 2,
        marginVertical: 10,
        borderRadius: 10
    },
    option2: {
        width: '90%',
        height: 60,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        marginVertical: 10,
        justifyContent: 'space-between'
    },
    txt: {
        color: 'black',
        fontSize: 18,
        marginLeft: 10,
        fontWeight: 'bold'
    },
})