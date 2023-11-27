import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import SubHeader from '../components/SubHeader';

export default function ( props ) {
    const [transaction, setTransaction] = useState([])

    const navigation = useNavigation();

    const {userData} = props.route.params

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

    
    if(transaction.length > 1){
        transaction?.sort((a, b) => {
            let year1 = parseInt(a.time.slice(0, 5))
            let year2 = parseInt(b.time.slice(0, 5))
            let month1 = parseInt(a.time.slice(5, 7))
            let month2 = parseInt(b.time.slice(5, 7))
            let day1 = parseInt(a.time.slice(8, 10))
            let day2 = parseInt(b.time.slice(8, 10))

            if(year1 != year2)
                return  year2 - year1
            else if(month1 != month2)
                return month2 - month1
            else if(day1 != day2)
                return day2 - day1
        })
    }

    return (
        <View style={styles.container}>
            <SubHeader title={'Thông báo'} />
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