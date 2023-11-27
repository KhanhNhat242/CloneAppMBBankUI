import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SubHeader from '../components/SubHeader';

function SuccessTransfer (props) {
    const data = props.route.params;
    
  return (
    <View style={styles.container}>
        <SubHeader title={'Chuyển tiền'} />
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
})