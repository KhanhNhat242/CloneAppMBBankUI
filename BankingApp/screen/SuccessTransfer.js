import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

function SuccessTransfer (props) {
    const data = props.route.params;
    
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
      <Text style={{fontSize: 30, fontWeight: 'bold', color: 'blue', marginTop: 50}}>Giao dịch thành công</Text>
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
})