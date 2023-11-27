import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SubHeader from '../components/SubHeader'
import { TouchableOpacity } from 'react-native'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'

const ConfirmTransfer = (props) => {
  const data = props.route.params.data
  const userData = props.route.params.userData

  const navigation = useNavigation();
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
    const res = await axios.post('http://192.168.56.1:8080/api/transfer/transferMoney', null, { params: { money: data.money, accountSource: data.stkNguon, stk: data.stkNhan, content: data.content } })
    userData.balance = parseFloat(userData.balance) - parseFloat(data.money)
    if (res.data) {
      navigation.navigate('TransferSuccess', { data: data, userData: userData })
    }
    else if (res.response.status == 500) {
      alert('Fail')
    }
  }

  const handleCancel = () => { }
  return (
    <View style={styles.container}>
      <SubHeader title={"Xác nhận giao dịch"} />
      <Text style={styles.title}>Thông tin giao dịch</Text>
      <View style={styles.wrapper}>
        <View style={{ flexDirection: 'row', width: '100%', padding: 10, alignItems: 'flex-start', borderColor: 'gray', borderBottomWidth: 1, height: 60, alignItems: 'center' }}>
          <Text style={styles.text}>Tài khoản nguồn: </Text>
          <Text style={styles.data}>{data.stkNguon}</Text>
        </View>
        <View style={{ width: '100%', padding: 10, alignItems: 'flex-start', borderColor: 'gray', borderBottomWidth: 1 }}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.text}>Số tiền: </Text>
            <Text style={styles.data}>{formatCurrencyVND(data.money)}</Text>
          </View>
          <Text style={[styles.data, {textTransform: 'uppercase', width: '100%'}]}>{data.vietnamese}</Text>
        </View>
        <View style={{ flexDirection: 'row', width: '100%', padding: 10, alignItems: 'flex-start', borderColor: 'gray', borderBottomWidth: 1, height: 60, alignItems: 'center' }}>
          <Text style={styles.text}>Tài khoản nhận: </Text>
          <Text style={styles.data}>{data.stkNhan}</Text>
        </View>
        <View style={{ flexDirection: 'row', width: '100%', padding: 10, alignItems: 'flex-start' }}>
          <Text style={styles.text}>Nội dung chuyển khoản: {'\n'} </Text>
          <Text style={styles.data}>{data.content}</Text>
        </View>

      </View>
      <TouchableOpacity style={styles.btnXN} onPress={handleTransfer}>
        <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>Xác nhận</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnCancel} onPress={handleCancel}>
        <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>Hủy</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ConfirmTransfer

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  wrapper: {
    width: '90%',
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 1,
    borderRadius: 10,
    margin: 10,
    borderWidth: 1,
    padding: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    width: '40%'
  },
  data: {
    fontSize: 18,
    color: 'gray',
    fontStyle: 'italic',
    textAlign: 'left',
    width: '60%',
  },
  btnXN: {
    width: '90%',
    height: 50,
    backgroundColor: '#1D00D4',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 10,
  },
  btnCancel: {
    width: '90%',
    height: 50,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 10,
  }
})