import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground, Image, TextInput, TouchableOpacity, FlatList } from 'react-native'
import OptionComponent from '../components/OptionComponent'
import UseFulnessOptionComponent from '../components/UseFulnessOptionComponent'
import MainOptionComponent from '../components/MainOptionComponent'
import { useNavigation } from '@react-navigation/native';
import HelperComponent from '../components/HelperComponent'
import SubHeader from '../components/SubHeader'

export default function HelperScreen() {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <SubHeader title={'eMBee Helper'} />
      <View style={styles.body}>
        <Text style={styles.title}>Hãy để eMBee hỗ trợ bạn</Text>
        <View style={styles.options}>
          <FlatList style={styles.flatList}
            data={optionList}
            renderItem={({ item }) => <HelperComponent option={item} />}
            numColumns={2}
            contentContainerStyle={{ justifyContent: 'space-between', paddingHorizontal: 20 }}
            scrollEnabled={false} />
        </View>
        <Text style={styles.title}>Yêu cầu của bạn</Text>
        <Image source={require('../assets/mainIcon/noRequest.png')}
            style={{width: 200, height: 200, resizeMode: 'contain'}}
            />
      </View>
    </View>
  )
}
  var optionList = [
    {
        title: 'Hỗ trợ khách hàng',
        img: require('../assets/mainIcon/support.png'),
        checked: true
    },
    {
        title: 'Tư vấn sản phẩm',
        img: require('../assets/mainIcon/advise.png'),
        checked: true
    },
    {
        title: 'Tra soát giao dịch',
        img: require('../assets/mainIcon/trans.png'),
        checked: true
    },
    {
        title: 'Tra cứu và Hướng dẫn',
        img: require('../assets/mainIcon/guide.png'),
        checked: true
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
    marginLeft: -20
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
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginVertical: 20
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