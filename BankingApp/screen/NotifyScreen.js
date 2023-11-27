import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import SubHeader from '../components/SubHeader';
import { ScrollView } from 'react-native';

export default function ( props ) {
    const [transaction, setTransaction] = useState([])

    const navigation = useNavigation();

    const {userData} = props.route.params
    const data = [
        { key: '1', value: 'Mới nhất' },
        { key: '2', value: 'Cũ nhất' },
    ]

    const getData = async () => {
        const res = await axios.get('http://192.168.56.1:8080/api/transfer/getAllTransaction')

  
        let data = res.data;
        let arr = [];

        data.forEach((d) => {
            let obj = {};

            if (userData.phone === d.stkNguon) {
                obj = { ...d, change: '-' };
            } else if (userData.phone === d.stkNhan) {
                obj = { ...d, change: '+' };
            }

            arr.push(obj);
        });
        setTransaction(arr);
    }
    const [sortOption, setSortOption] = useState('1')

      useEffect(() => {
        getData();
      }, [sortOption]);
    
      if (transaction.length > 1) {
        transaction?.sort((a, b) => {
          let year1 = parseInt(a.time.slice(0, 5));
          let year2 = parseInt(b.time.slice(0, 5));
          let month1 = parseInt(a.time.slice(5, 7));
          let month2 = parseInt(b.time.slice(5, 7));
          let day1 = parseInt(a.time.slice(8, 10));
          let day2 = parseInt(b.time.slice(8, 10));
    
          if (sortOption === '1') {
            // Sắp xếp mới nhất
            if (year1 !== year2) return year2 - year1;
            else if (month1 !== month2) return month2 - month1;
            else if (day1 !== day2) return day2 - day1;
          } else {
            // Sắp xếp cũ nhất
            if (year1 !== year2) return year1 - year2;
            else if (month1 !== month2) return month1 - month2;
            else if (day1 !== day2) return day1 - day2;
          }
        });
      }
      const handleSortChange = (value) => {
        console.log(value);
        setSortOption(value);
      };
    return (
        <View style={styles.container}>
            <SubHeader title={'Thông báo'} />
            <View style={{ width: "90%" }}>
                    <SelectList
                        setSelected={handleSortChange}
                        data={data}
                        save="value"
                        placeholder='Chọn ngân hàng'
                    />
                </View>
            <Text style={styles.title}>Biến động số dư</Text>
            <ScrollView>
            {
                transaction.map((t) => {

                    return (
                        <View style={styles.itemWrapper}>
                            <View style={styles.leftWrapper}>
                                <Text style={styles.itemTitle}>Thông báo biến động số dư</Text>
                                <Text style={styles.itemTxt}>Tài khoản nguồn: {t.stkNguon}      </Text>
                                <Text style={styles.itemTxt}>GD: {t.change} {t.soTien} VND </Text>
                                <Text style={styles.itemTxt}>Tài khoản nhận: {t.stkNhan}</Text>
                                <Text style={styles.itemTxt}>Lúc: {t.time}</Text>
                                <Text style={styles.itemTxt}>Nội dung: {t.noiDungCK}</Text>
                            </View>
                            <Text style={styles.date}>{t.time.slice(0, 10)}</Text>
                        </View>
                    )     
                    
                })
            }
            </ScrollView>
            
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        padding: 20,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
    leftWrapper: {
        width: '80%',
    },
    itemTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    itemTxt: {
        fontSize: 18,
    },
    date: {
        width: '20%',
        fontSize: 14,
        color: '#818181',
    },
})