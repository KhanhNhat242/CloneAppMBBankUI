import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground, Image, TextInput, TouchableOpacity, FlatList } from 'react-native'
import OptionComponent from '../components/OptionComponent'
import UseFulnessOptionComponent from '../components/UseFulnessOptionComponent'
import MainOptionComponent from '../components/MainOptionComponent'
import { useNavigation } from '@react-navigation/native';
import TransferOptionComponent_Short from '../components/TransferOptionComponent_Short'
import TransferTabComponent from '../components/TransferTabComponent'
import { useState } from 'react';
export default function TransferMoneyScreen(props) {
    const userData = props.route.params;   
    const [data, setData] = useState(optionList);
    const [selectedItem, setSelectedItem] = useState(null);
    const navigation = useNavigation();
    const goBack = () => {
        navigation.goBack();
    }
    const goHome = () => {
        navigation.navigate('Main');
    }
    const handleOptionPress = (itemId) => {
        setSelectedItem(itemId);
      };
    const goToTransfer = () => {
        navigation.navigate('Transfer', { userData })}
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={goBack}>
                    <Image
                        source={require('../assets/mainIcon/back.png')}
                        style={{ width: 15, height: 15, margin: 10, resizeMode: 'contain' }}
                    />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Chuyển tiền</Text>
                <TouchableOpacity onPress={goHome}>
                    <Image
                        source={require('../assets/mainIcon/home.png')}
                        style={{ width: 20, height: 20, margin: 10, resizeMode: 'contain' }}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                <View style={styles.optionShort}>
                    <TransferOptionComponent_Short option={{ img: require('../assets/mainIcon/scanQR.png'), title: "Quét QR" }} />
                    <TransferOptionComponent_Short option={{ img: require('../assets/mainIcon/image82.png'), title: "Giao dịch tách lệnh" }} />
                </View>
                <TouchableOpacity style={styles.optionLong} onPress={goToTransfer}>
                    <View style={styles.wrapperLong}>
                        <Image source={require('../assets/mainIcon/image83.png')} style={styles.img} />
                        <Text style={styles.title}>Người thụ hưởng mới</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.option}>
                    <FlatList style={styles.flatList}
                        keyExtractor={(item) => item.id}
                        data={data}
                        renderItem={({ item }) => <TransferTabComponent option={item}  selectedItem={selectedItem} onPress={() => handleOptionPress(item.id)} />}
                        numColumns={3}
                        contentContainerStyle={{ justifyContent: 'space-between', paddingHorizontal: 20 }}
                        scrollEnabled={false}
                        extraData={selectedItem} />
                </View>
            </View>
        </View>
    )
}
const optionList = [
    {
        id:'1',
        title: "STK đã lưu"
    },
    {
        id:'2',
        title: "Gần đây"
    },
    {
        id:'3',
        title: "Mẫu giao dịch"
    },
]
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: '#F7F7F7',
        alignItems: 'center',
    },
    options: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    flatList: {
        position: 'sticky',
    },
    header: {
        height: '10%',
        width: '100%',
        backgroundColor: '#1D00D4',
        alignItems: 'flex-end',
        paddingBottom: 10,
        justifyContent: 'space-between',
        flexDirection: 'row'

    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 5
    },
    body: {
        width: '100%',
        backgroundColor: '#F7F7F7',
        flex: 1,
        alignItems: 'center',
    },
    optionShort: {
        flexDirection: 'row',
        marginTop: 15
    },
    wrapperLong: {
        width: 365,
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
    },
    option: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: 'white',
        marginTop: 20
    },


})