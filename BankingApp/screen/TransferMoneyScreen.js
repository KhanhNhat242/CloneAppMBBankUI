import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import TransferOptionComponent_Short from '../components/TransferOptionComponent_Short'
import TransferTabComponent from '../components/TransferTabComponent'
import { useState } from 'react';
import SubHeader from '../components/SubHeader'

export default function TransferMoneyScreen(props) {
    const userData = props.route.params.userData;   
    const [data, setData] = useState(optionList);
    const [selectedItem, setSelectedItem] = useState(null);

    const navigation = useNavigation();

    const handleOptionPress = (itemId) => {
        setSelectedItem(itemId);
    }

    const goToTransfer = () => {
        navigation.navigate('Transfer', { userData: userData })
    }

    return (
        <View style={styles.container}>
            <SubHeader title={'Chuyển tiền'} />
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