import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground, Image, TextInput, TouchableOpacity, FlatList } from 'react-native'

import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { SelectList } from 'react-native-dropdown-select-list'
import CustomAlert from '../components/CustomeAlertModal';
import moment from 'moment';

export default function TransferScreen(props) {
    const userData = props.route.params;
    const [checkMoney, setCheckMoney] = useState(true);
    const [mess, setMess] = useState('');
    const [selected, setSelected] = React.useState("");
    const [stk, setStk] = useState('');
    const [money, setMoney] = useState(0);
    const [content, setContent] = useState(`${userData.userData.userData.userName}` + ' chuyen tien');
    const navigation = useNavigation();
    const goBack = () => {
        navigation.goBack();
    }
    const goHome = () => {
        navigation.navigate('Main');
    }
    const data = [
        { key: '1', value: 'MB Bank' },

    ]
    const [showAlert, setShowAlert] = useState(false);

    const handleShowAlert = () => {
      setShowAlert(true);
    };
  
    const handleCloseAlert = () => {
      setShowAlert(false);
    };
    const CheckEnoughMoney = () => {
        if (parseFloat(money) > parseFloat(userData.userData.userData.balance)) {
            setCheckMoney(false);
            return false;
        }
        else {
            setCheckMoney(true);
            return true;
        }
    }

    const handleTransfer = () => {
        if (CheckEnoughMoney()) {
            const transferPayload = {
                noiDungCK: content,
                soTien: money,
                stkNhan: stk,
                stkNguon: userData.userData.userData.phone,
            };
            fetch('http://192.168.56.1:8080/api/transfer/transfer_money', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(transferPayload),
            }).then((response) => {
                if (!response.ok) {
                    // Xử lý lỗi dựa trên mã trạng thái
                    if (response.status === 400) {
                        handleShowAlert();
                        return response.text();

                        
                        // hoặc .json() tùy thuộc vào định dạng phản hồi
                    }
                }
                else{
                    userData.userData.userData.balance = parseFloat(userData.userData.userData.balance) - parseFloat(money);
                    const currentTime = moment();
                    const formattedTime = currentTime.format('DD/MM/YYYY HH:mm:ss');

                    navigation.navigate('TransferSuccess', {
                        params: { userData: userData.userData.userData, transferPayload, formattedTime },
                    });
                }
                return response.json();
            })
                .catch((error) => {
                });
        }

    }
    const moneyText = (val) => {
        setMoney(val);
        CheckEnoughMoney();
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
                <View style={{ justifyContent: 'center', alignItems: 'flex-start', width: '100%' }}>
                    <Text style={{ margin: 10, fontSize: 16 }}>Từ tài khoản nguồn</Text>
                </View>

                <View style={styles.sourceWrapper}>
                    <Image source={require('../assets/mainIcon/logo.png')} style={{ height: 20, width: 50, margin: 10 }} />
                    <View>
                        <View>
                            <Text style={{ fontSize: 16, marginLeft: 10, textTransform: 'uppercase' }}>{userData.userData.userData.phone} - {userData.userData.userData.userName}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                            <Text style={{ fontSize: 26, marginLeft: 10, fontWeight: 'bold' }}>{userData.userData.userData.balance} </Text>
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
                    <TextInput placeholder="Số tài khoản" style={styles.stk} onChangeText={setStk} />
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'flex-start', width: '100%' }}>
                    <Text style={{ margin: 10, fontSize: 16 }}>Số tiền chuyển:</Text>
                </View>
                <View style={{ width: "100%", alignItems: 'center' }}>
                    <TextInput placeholder="Nhập số tiền" style={styles.stk} keyboardType="numeric" onChangeText={moneyText} />
                </View>
                {checkMoney ? null : <View style={{ justifyContent: 'center', alignItems: 'flex-start', width: '100%', marginLeft: 35 }}>
                    <Text style={{ margin: 5, fontSize: 16, color: 'red' }}>Số tiền trong tài khoản không đủ</Text>
                </View>}
                <View style={{ justifyContent: 'center', alignItems: 'flex-start', width: '100%' }}>
                    <Text style={{ margin: 10, fontSize: 16 }}>Nội dung chuyển tiền</Text>
                </View>
                <View style={{ width: "100%", alignItems: 'center' }}>
                    <TextInput style={styles.stk} onChangeText={setContent} value={content} />
                </View>
            </View>
            <CustomAlert
                visible={showAlert}
                title="Chuyển tiền thất bại"
                message="Không tìm thấy tài khoản đối ứng"
                onClose={handleCloseAlert}
            />
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