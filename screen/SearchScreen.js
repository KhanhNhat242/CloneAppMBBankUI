import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground, Image, TextInput, TouchableOpacity, FlatList } from 'react-native'
import OptionComponent from '../components/OptionComponent'
import UseFulnessOptionComponent from '../components/UseFulnessOptionComponent'
export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
            <Image
                source={require('../assets/mainIcon/back.png')}
                style={{width: 15, height: 15, margin:10, resizeMode:'contain'}}
            />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Tìm kiếm</Text>
        <TouchableOpacity>
            <Image
                source={require('../assets/mainIcon/home.png')}
                style={{width: 20, height: 20, margin: 10, resizeMode:'contain'}}
            />
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
            <View style={styles.searchWrapper}>
                <Image source={require('../assets/mainIcon/searchBlue.png')}
                    style={styles.imgSearch}/>
                <TextInput placeholder='Tìm kiếm' style={styles.txtInput}/>
            </View>
            <Text style={styles.recommend}>Đề xuất</Text>
      </View>
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
        shadowOffset: {width: 0, height: 2},
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
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        position: 'absolute',
        top: 100,
        left: 30,
    },

})