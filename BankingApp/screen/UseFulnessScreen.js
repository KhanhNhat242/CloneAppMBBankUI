import React from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import UseFulnessOptionComponent from '../components/UseFulnessOptionComponent'
export default function UseFulnessScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Tích điểm đổi quà</Text>
      </View>
      <View style={styles.options}>
        <FlatList style={styles.flatList}
          data={optionList}
          renderItem={({ item }) => <UseFulnessOptionComponent option={item}/>}
          numColumns={1}
          contentContainerStyle={{ justifyContent: 'space-between', paddingHorizontal: 20 }}
          scrollEnabled={true} />
      </View>
    </View>
  )
  
}
var optionList = [
  {
    title: 'Đăng nhập bằng khuôn mặt',
    img: require('../assets/mainIcon/faceID.png'),
    toggleSwitch: true,
  },
  {
    title: 'Nhận tiền từ số điện thoại',
    img: require('../assets/mainIcon/image84.png'),
    toggleSwitch: true,
  },
  {
    title: 'Hiện thị số thẻ',
    img: require('../assets/mainIcon/image85.png'),
    toggleSwitch: true,
  },
  {
    title: 'Thiết lập Digital OTP',
    img: require('../assets/mainIcon/otp.png'),
  },
  {
    title: 'Chọn giao diện',
    img: require('../assets/mainIcon/image86.png'),
  },
  {
    title: 'Thông tin nhân viên hỗ trợ',
    img: require('../assets/mainIcon/image87.png'),
  },
  {
    title: 'Đăng kí biến động số dư',
    img: require('../assets/mainIcon/image88.png'),
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
    marginTop: 10,
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
    backgroundColor: '#0C2BC9',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderBottomColor: '#BBBBBB',
    borderBottomWidth: 0.5,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },

})