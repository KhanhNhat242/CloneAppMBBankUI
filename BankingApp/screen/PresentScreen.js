import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground, Image, TextInput, TouchableOpacity, FlatList } from 'react-native'
import OptionComponent from '../components/OptionComponent'
export default function PresentScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Tích điểm đổi quà</Text>
      </View>
      <View style={styles.options}>
        <FlatList style={styles.flatList}
          data={optionList}
          renderItem={({ item }) => <OptionComponent option={item}/>}
          numColumns={1}
          contentContainerStyle={{ justifyContent: 'space-between', paddingHorizontal: 20 }}
          scrollEnabled={true}
           />
      </View>
    </View>
  )
  
}
var optionList = [
  {
    title: 'Tích điểm đổi thưởng',
    img: require('../assets/mainIcon/image94.png'),
  },
  {
    title: 'Đổi quà tặng',
    img: require('../assets/mainIcon/image96.png'),
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