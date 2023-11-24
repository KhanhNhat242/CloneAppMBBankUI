import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground, Image, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import OptionComponent from '../components/OptionComponent.js';

export default function ProductScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Sản phẩm</Text>
      </View>
      <View style={styles.options}>
        <FlatList style={styles.flatList}
          data={optionList}
          renderItem={({ item }) => <OptionComponent option={item}/>}
          numColumns={1}
          contentContainerStyle={{ justifyContent: 'space-between', paddingHorizontal: 20 }}
          scrollEnabled={true} />
      </View>
    </View>
  )
  
}
var optionList = [
  {
    title: 'Chuyển tiền',
    img: require('../assets/mainIcon/send.png'),
  },
  {
    title: 'Giao dịch ngoại tệ',
    img: require('../assets/mainIcon/GdNgoaiTe.png'),
  },
  {
    title: 'Chuyển tiền đến Viettel Money',
    img: require('../assets/mainIcon/ChuyenTien.png'),
  },
  {
    title: 'Nạp tiền điện thoại',
    img: require('../assets/mainIcon/pushCard.png'),
  },
  {
    title: 'Nạp tiền từ thẻ ATM',
    img: require('../assets/mainIcon/napTienATM.png'),
  },
  {
    title: 'Thanh toán',
    img: require('../assets/mainIcon/pay.png'),
  },
  {
    title: 'Rút tiền ATM',
    img: require('../assets/mainIcon/rutTienATM.png'),
  },
  {
    title: 'Dịch vụ trả góp thẻ tín dụng',
    img: require('../assets/mainIcon/image89.png'),
  },
  {
    title: 'Quà tặng',
    img: require('../assets/mainIcon/image90.png'),
  },
  {
    title: 'Dịch vụ thẻ',
    img: require('../assets/mainIcon/image91.png'),
  },
  {
    title: 'Tiền gửi và đầu tư',
    img: require('../assets/mainIcon/money.png'),
  },
  {
    title: 'Vay trực tuyến',
    img: require('../assets/mainIcon/image92.png'),
  },
  {
    title: 'Bảo hiểm chứng khoán và vay tiêu dùng',
    img: require('../assets/mainIcon/image93.png'),
  },
  {
    title: 'Ví điện tử',
    img: require('../assets/mainIcon/serviceCard.png'),
  },
]
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: '#F7F7F7',

  },
  options: {
    marginTop: 10,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // flatList: {
  //   position: 'sticky',
  // },
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