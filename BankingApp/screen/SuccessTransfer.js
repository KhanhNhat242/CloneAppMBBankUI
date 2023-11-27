import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import SubHeader from '../components/SubHeader';
import { useNavigation } from '@react-navigation/native';

function SuccessTransfer(props) {
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
  const handleNewTrans = () => {
    navigation.navigate('Transfer', { userData: userData })
  }
  const handleGoToHome = () => {
    navigation.navigate('Main', userData)
  }
  return (
    <View style={styles.container}>
      <SubHeader title={'Thành công'} />
      <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'blue', marginVertical: 20 }}>Giao dịch thành công</Text>
      <View style={styles.wrapper}>
        <View style={{ flexDirection: 'row', width: '100%', padding: 10, alignItems: 'flex-start', borderColor: 'gray', borderBottomWidth: 1, height: 60 }}>
          <Text style={styles.text}>Tài khoản nguồn: </Text>
          <Text style={styles.data}>{data.stkNguon}</Text>
        </View>
        <View style={{ flexDirection: 'row', width: '100%', padding: 10, alignItems: 'flex-start', borderColor: 'gray', borderBottomWidth: 1, height: 60 }}>
          <Text style={styles.text}>Số tiền: </Text>
          <Text style={styles.data}>{formatCurrencyVND(data.money)}</Text>
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
      <View style={{ flexDirection: 'row', width: '90%', justifyContent: 'center', padding: 10 }}>
        <TouchableOpacity style={styles.btnNewTrans} onPress={handleNewTrans}>
          <Text style={{ color: "white", fontSize: 18, fontWeight: 'bold' }}>Giao dịch mới</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnHome} onPress={handleGoToHome}>
          <Text style={{ color: "white", fontSize: 18, fontWeight: 'bold' }}>Về trang chủ</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SuccessTransfer

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
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
    borderWidth: 1,
    padding: 10,
    marginVertical: 20
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
  btnNewTrans: {
    width: '50%',
    height: 50,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 10,
  },
  btnHome: {
    width: '50%',
    height: 50,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 10,
  },
})