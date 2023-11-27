import React from 'react'
import { Text, View, StyleSheet, Image, TextInput, FlatList } from 'react-native'
import MainOptionComponent from '../components/MainOptionComponent'
import SubHeader from '../components/SubHeader'

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <SubHeader title={'Tìm kiếm'} />
      <View style={styles.body}>
        <View style={styles.searchWrapper}>
          <Image source={require('../assets/mainIcon/searchBlue.png')}
            style={styles.imgSearch} />
          <TextInput placeholder='Tìm kiếm' style={styles.txtInput} />
        </View>
        <Text style={styles.recommend}>Đề xuất</Text>
        <View style={styles.options}>
          <FlatList style={styles.flatList}
            data={optionList}
            renderItem={({ item }) => <MainOptionComponent option={item} />}
            numColumns={3}
            contentContainerStyle={{ justifyContent: 'space-between', paddingHorizontal: 20 }}
            scrollEnabled={false} />
        </View>
      </View>
    </View>
  )
}
  var optionList = [
    {
        title: 'Thanh toán',
        img: require('../assets/mainIcon/pay.png'),
        checked: true
    },
    {
        title: 'Rút tiền ATM',
        img: require('../assets/mainIcon/rutTienATM.png'),
        checked: true
    },
    {
        title: 'Mã QR của tôi',
        img: require('../assets/mainIcon/myQR.png'),
        checked: true
    },
    {
        title: 'Quà tặng',
        img: require('../assets/mainIcon/cover.png'),
        checked: true
    },
    {
        title: 'Khách hàng thân thiết',
        img: require('../assets/mainIcon/loyalCustomer.png'),
        checked: true
    },
    {
        title: 'Thiết lập Digital OTP',
        img: require('../assets/mainIcon/otp.png'),
        checked: true
    },
    {
      
  },
  {
      title: 'Mua vé máy bay Vietnam Airlines',
      img: require('../assets/mainIcon/VnAir.png'),
      checked: true
  },
  {
      
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
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatList: {
    position: 'sticky',
  },
  body: {
    width: '100%',
    backgroundColor: '#F7F7F7',
    flex: 1,
    alignItems: 'center',
  },
  searchWrapper: {
    width: '90%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 5,
    backgroundColor: 'white',
  },
  imgSearch: {
    width: 20,
    height: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  txtInput: {
    width: '90%',
    height: 40,
    marginLeft: 20,
  },
  recommend: {
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
    alignSelf: 'flex-start',
    margin: 20
  },

})