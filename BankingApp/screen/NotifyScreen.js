import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

export default function ( props ) {
    const [transaction, setTransaction] = useState([])

    const navigation = useNavigation();

    const {userData} = props.route.params

    const goBack = () => {
        navigation.goBack();
    }
    const goHome = () => {
        navigation.navigate('Main');
    }

    const getData = async () => {
        const res = await axios.get('http://localhost:8080/api/transfer/getAllTransaction')

        let data = res.data
        let arr = []
        let obj = {}

        data.forEach((d) => {
            if(userData.phone === d.stkNguon){
                obj = {...d, change: '-'}
                arr.push(obj)
                setTransaction(arr)
            }
            else if(userData.phone === d.stkNhan){
                obj = {...d, change: '+'}
                arr.push(obj)
                setTransaction(arr)
            }
        })
    }

    useEffect(() => {
        getData()
    }, [])

    // console.log(transaction)

    if(transaction.length > 1){
        transaction?.sort((a, b) => {
            const d1 = parseInt(a.time.slice(9, 11))
            const d2 = parseInt(b.time.slice(9, 11))
            return d2 - d1
        })
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
                <Text style={styles.headerTitle}>Thông báo</Text>
                <TouchableOpacity onPress={goHome}>
                    <Image
                        source={require('../assets/mainIcon/home.png')}
                        style={{ width: 20, height: 20, margin: 10, resizeMode: 'contain' }}
                    />
                </TouchableOpacity>
            </View>
            <Text style={styles.title}>Biến động số dư</Text>
            {
                transaction.map((t) => {
                    return (
                        <View style={styles.itemWrapper} key={t.id}>
                            <View style={styles.leftWrapper}>
                                <Text style={styles.itemTitle}>Thông báo biến động số dư</Text>
                                <Text style={styles.itemTxt}>`${'TK ' + t.stkNguon + ' GD: ' + t.change + t.soTien + 'VND ' + t.time + ' ND: ' + t.noiDungCK}`</Text>
                            </View>
                            <Text style={styles.date}>{t.time.slice(0, 10)}</Text>
                        </View>
                    )         
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: '#F7F7F7',
        alignItems: 'center',
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
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10,
    },
    itemWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        padding: 20,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
    leftWrapper: {
        width: '70%',
    },
    itemTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    itemTxt: {
        fontSize: 18,
    },
    date: {
        fontSize: 18,
        color: '#818181',
    },
})