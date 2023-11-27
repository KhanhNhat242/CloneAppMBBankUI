import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import SubHeader from '../components/SubHeader';
import { ScrollView } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'
import moment from 'moment';

export default function (props) {
    const [transaction, setTransaction] = useState([])

    const navigation = useNavigation();

    const { userData } = props.route.params
    const data = [
        { key: '3', value: 'Tiền vào' },
        { key: '4', value: 'Tiền ra' },
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
    const [sortOption, setSortOption] = useState('3')

    useEffect(() => {
        getData();
    }, [sortOption]);

    if (transaction.length > 1) {
        transaction?.sort((a, b) => {
            let valueA, valueB;

            switch (sortOption) {
                case '1': // Mới nhất
                    valueA = moment(a.time);
                    valueB = moment(b.time);
                    break;
                case '2': // Cũ nhất
                    valueA = moment(b.time);
                    valueB = moment(a.time);
                    break;
                case '3': // Tiền vào
                    valueA = a.change === '+' ? parseFloat(a.soTien) : 0;
                    valueB = b.change === '+' ? parseFloat(b.soTien) : 0;
                    break;
                case '4': // Tiền ra
                    valueA = a.change === '-' ? parseFloat(a.soTien) : 0;
                    valueB = b.change === '-' ? parseFloat(b.soTien) : 0;
                    break;
                default:
                    break;
            }

            return valueB - valueA;
        });
    }
    const handleSortChange = (value) => {
        setSortOption(value);
    };
    function formatCurrencyVND(value) {
        // Chuyển đổi giá trị thành số và kiểm tra tính hợp lệ
        const parsedValue = parseFloat(value);
        if (isNaN(parsedValue)) {
            return "Giá trị không hợp lệ";
        }

        // Sử dụng hàm toLocaleString để định dạng tiền tệ
        const formattedValue = parsedValue.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });

        return formattedValue;
    }
    return (
        <View style={styles.container}>
            <SubHeader title={'Thông báo'} />
            <Text style={styles.title}>Biến động số dư</Text>
            <View style={{ width: '100%', marginTop: -45, alignItems: 'flex-end' }}>
                <View style={{ width: "30%" }}>
                    <SelectList
                        setSelected={handleSortChange}
                        data={data}
                        save="key"
                        placeholder='Sắp xếp'
                    />
                </View>
            </View>
            <ScrollView >

                {
                    transaction.map((t) => {
                        // Kiểm tra loại giao dịch
                        let shouldRender = true;

                        if (sortOption === '3' && t.change !== '+') {
                            shouldRender = false; // Chỉ hiển thị giao dịch tiền vào
                        } else if (sortOption === '4' && t.change !== '-') {
                            shouldRender = false; // Chỉ hiển thị giao dịch tiền ra
                        }

                        // Nếu shouldRender là false, không hiển thị giao dịch này
                        if (!shouldRender) {
                            return null;
                        }
                        return (
                            <View style={styles.itemWrapper} key={t.id}>
                                <View style={styles.leftWrapper}>
                                    <Text style={styles.itemTitle}>Thông báo biến động số dư</Text>
                                    <Text style={styles.itemTxt}>Tài khoản nguồn: {t.stkNguon}      </Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={[styles.itemTxt]}>GD: </Text>
                                        <Text style={[styles.itemTxt, { color: t.change === '+' ? 'green' : 'red' }]}>{t.change}{formatCurrencyVND(parseFloat(t.soTien))}</Text>
                                    </View>
                                    <Text style={styles.itemTxt}>Tài khoản nhận: {t.stkNhan}</Text>
                                    <Text style={styles.itemTxt}>Lúc: {moment(t.time).format('DD/MM/YYYY HH:mm:ss')}</Text>
                                    <Text style={styles.itemTxt}>Nội dung: {t.noiDungCK}</Text>
                                </View>
                                <Text style={styles.date}>{moment(t.time).format('DD/MM/YYYY')}</Text>
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
        alignItems: 'flex-start',
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