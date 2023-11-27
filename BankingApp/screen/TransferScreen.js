import React from 'react'
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { SelectList } from 'react-native-dropdown-select-list'
import CustomAlert from '../components/CustomeAlertModal';
import axios from 'axios';
import SubHeader from '../components/SubHeader';
import to_vietnamese from '../convertNumber';

export default function TransferScreen(props) {
 
    const userData = props.route.params.userData

    const [checkMoney, setCheckMoney] = useState(true);
    const [mess, setMess] = useState('');
    const [selected, setSelected] = useState("");
    const [stk, setStk] = useState('');
    const [money, setMoney] = useState();
    var name = removeAccents(userData.userName);
    const [content, setContent] = useState(name + ' chuyen tien');
    
    const navigation = useNavigation();
    
    const data = [
        { key: '1', value: 'MB Bank' },

    ]
    const CheckEnoughMoney = (newMoney) => {

        if (parseFloat(newMoney) > parseFloat(userData.balance)) {
            setCheckMoney(false);
            return false;
        } else {
            setCheckMoney(true);
            return true;
        }
    }
    
    const moneyText = (val) => {
        const filteredText = val.replace(/[^0-9]/g, '');
        setMoney(filteredText);
    }
    
    useEffect(() => {
        CheckEnoughMoney(money);
    }, [money, userData.balance]);
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

    const handleTransfer = async () => {
        const accountSource = userData.phone
            const res = await axios.get('http://192.168.56.1:8080/api/transfer/getUserGet', {params: {stk: stk}})   
            if(res.data.username!==undefined){
                const data = {
                    stkNguon: accountSource,
                    stkNhan: stk,
                    money: money,
                    content: content,
                    vietnamese: to_vietnamese(money)
                }
               navigation.navigate('ConfirmTransfer', {data: data, userData: userData})
            }
            else{
                alert('Không tìm thấy tài khoản đối ứng')
            }
        
    }  
    function removeAccents(str) {
        return str.normalize('NFD')
                  .replace(/[\u0300-\u036f]/g, '')
                  .replace(/đ/g, 'd').replace(/Đ/g, 'D');
      }

    return (
        <View style={styles.container}>
            <SubHeader title={'Chuyển tiền'} />
            <View style={styles.body}>
                <View style={{ justifyContent: 'center', alignItems: 'flex-start', width: '100%' }}>
                    <Text style={{ margin: 10, fontSize: 16 }}>Từ tài khoản nguồn</Text>
                </View>

                <View style={styles.sourceWrapper}>
                    <Image source={require('../assets/mainIcon/logo.png')} style={{ height: 20, width: 50, margin: 10 }} />
                    <View>
                        <View>
                            <Text style={{ fontSize: 16, marginLeft: 10, textTransform: 'uppercase' }}>{userData.phone} - {userData.userName}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                            <Text style={{ fontSize: 26, marginLeft: 10, fontWeight: 'bold' }}>{userData.balance} </Text>
                            <Text style={{ fontSize: 16 }}>VND</Text>
                        </View>
                    </View>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'flex-start', width: '100%' }}>
                    <Text style={{ margin: 10, fontSize: 16 }}>Đến</Text>
                </View>
                <View style={{ width: "90%" }}>
                    <SelectList
                        setSelected={(val) => setSelected(val)}
                        data={data}
                        save="key"
                        placeholder='Chọn ngân hàng'
                    />
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'flex-start', width: '100%' }}>
                    <Text style={{ margin: 10, fontSize: 16 }}>Số tài khoản:</Text>
                </View>
                <View style={{ width: "100%", alignItems: 'center' }}>
                    <TextInput placeholder="Số tài khoản" style={styles.stk} value={stk} onChangeText={setStk} />
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'flex-start', width: '100%' }}>
                    <Text style={{ margin: 10, fontSize: 16 }}>Số tiền chuyển:</Text>
                </View>
                <View style={{ width: "100%", alignItems: 'center' }}>
                    <TextInput placeholder="Nhập số tiền" style={styles.stk} keyboardType="numeric" onChangeText={moneyText} value={money}/>
                </View>
                {checkMoney ? null : <View style={{ justifyContent: 'center', alignItems: 'flex-start', width: '100%', marginLeft: 35 }}>
                    <Text style={{ margin: 5, fontSize: 16, color: 'red' }}>Số tiền trong tài khoản không đủ</Text>
                </View>}
                {money.length<1 ? null : <View style={{ justifyContent: 'center', alignItems: 'flex-start', width: '100%', marginLeft: 35 }}>
                    <Text style={{ margin: 5, fontSize: 16, color: 'gray',textTransform: 'uppercase'  }}>{to_vietnamese(money)} đồng</Text>
                </View>}
                <View style={{ justifyContent: 'center', alignItems: 'flex-start', width: '100%' }}>
                    <Text style={{ margin: 10, fontSize: 16 }}>Nội dung chuyển tiền</Text>
                </View>
                <View style={{ width: "100%", alignItems: 'center' }}>
                    <TextInput style={styles.stk} onChangeText={setContent} value={content} />
                </View>
            </View>
    
            <TouchableOpacity style={styles.btn} onPress={handleTransfer}>
                <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>Tiếp tục</Text>
            </TouchableOpacity>
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
    body: {
        width: '100%',
        backgroundColor: '#F7F7F7',
        flex: 1,
        alignItems: 'center',
    },
    sourceWrapper: {
        width: '90%',
        height: 80,
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
    stk: {
        width: '90%',
        height: 50,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 1,
        borderRadius: 10,
        margin: 10,
        flexDirection: 'row',
        padding: 10
    },
    btn: {
        width: '90%',
        height: 50,
        backgroundColor: '#1D00D4',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 1,
        borderRadius: 10,
        margin: 10,
    }
})
