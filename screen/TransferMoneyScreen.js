import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground, Image, TextInput, TouchableOpacity, FlatList } from 'react-native'
import OptionComponent from '../components/OptionComponent'
import UseFulnessOptionComponent from '../components/UseFulnessOptionComponent'
import MainOptionComponent from '../components/MainOptionComponent'
import { useNavigation } from '@react-navigation/native';
import TransferOptionComponent_Short from '../components/TransferOptionComponent_Short'
import TransferTabComponent from '../components/TransferTabComponent'
export default function TransferMoneyScreen() {
    const navigation = useNavigation();
    const goBack = () => {
        navigation.goBack();
    }
    const goHome = () => {
        navigation.navigate('Main');
    }
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
                    <TransferOptionComponent_Short option={{img: require('../assets/mainIcon/money.png'), title: "Quét QR"}}/>
                    <TransferOptionComponent_Short option={{img: require('../assets/mainIcon/money.png'), title: "Giao dịch tách lệnh"}}/>
                </View>
                <View style={styles.optionLong}>
                    <View style={styles.wrapperLong}>
                        <Image source={require('../assets/mainIcon/pay.png')} style={styles.img} />
                        <Text style={styles.title}>Người thụ hưởng mới</Text>
                    </View>
                </View>
                <View style={styles.option}>
                <FlatList style={styles.flatList}
                                data={optionList}
                                renderItem={({ item }) => <TransferTabComponent option={item} />}
                                numColumns={3}
                                contentContainerStyle={{ justifyContent: 'space-between', paddingHorizontal: 20 }}
                                scrollEnabled={false} />
                </View>
            </View>
        </View>
    )
}
const optionList = [
    {
        title: "STK đã lưu"
    },
    {
        title: "Gần đây"
    },
    {
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
    option:{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height:'100%',
        backgroundColor: 'white',
        marginTop: 20
    },
    

})