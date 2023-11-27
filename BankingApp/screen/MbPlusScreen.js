import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground, Image, TextInput, TouchableOpacity, FlatList } from 'react-native'
import OptionComponent from '../components/OptionComponent'

export default function MBPlusScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>MB++</Text>
      </View>
      <View style={styles.options}>
        <FlatList style={styles.flatList}
          data={optionList}
          renderItem={({ item }) => <OptionComponent option={item}/>}
          numColumns={1}
          contentContainerStyle={{ justifyContent: 'space-between', paddingHorizontal: 20 }}
          scrollEnabled={true} />
      </View>
      <Image 
        source={require('../assets/banner/banner11.png')}
        style={styles.banner}
/>
    </View>
  )
  
}
var optionList = [
  {
    title: 'Ưu đãi',
    img: require('../assets/mainIcon/image94.png'),
  },
  {
    title: 'Mua sắm hoàn tiền',
    img: require('../assets/mainIcon/image95.png'),
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
  banner: {
    marginTop: 20,
    width: '90%',
    height: 130,
  },
})