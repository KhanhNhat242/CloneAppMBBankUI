import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import SubHeader from '../components/SubHeader';

function PhoneRechargeScreen() {
    return ( 
        <View style={styles.container}>
            <SubHeader title={'Nạp tiền điện thoại'} />
            <View style={styles.body}>
                <TextInput style={styles.phoneInput} placeholder='Nhập số điện thoại' />
                <Image style={styles.phoneImg} source={require('../assets/mainIcon/image60.png')}/>
                <Text style={styles.pickTxt}>Chọn mệnh giá</Text>
                <View style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
                    <View style={styles.moneyWrapper}>
                        <Text style={styles.money}>500.000</Text>
                        <Text style={styles.vnd}>VND</Text>
                    </View>
                    <View style={[styles.moneyWrapper, {marginLeft: 10, marginRight: 20}]}>
                        <Text style={styles.money}>300.000</Text>
                        <Text style={styles.vnd}>VND</Text>
                    </View>
                    <View style={styles.moneyWrapper}>
                        <Text style={styles.money}>200.000</Text>
                        <Text style={styles.vnd}>VND</Text>
                    </View>
                </View>
                <View style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
                    <View style={styles.moneyWrapper}>
                        <Text style={styles.money}>100.000</Text>
                        <Text style={styles.vnd}>VND</Text>
                    </View>
                    <View style={[styles.moneyWrapper, {marginLeft: 10, marginRight: 20}]}>
                        <Text style={styles.money}>50.000</Text>
                        <Text style={styles.vnd}>VND</Text>
                    </View>
                    <View style={styles.moneyWrapper}>
                        <Text style={styles.money}>20.000</Text>
                        <Text style={styles.vnd}>VND</Text>
                    </View>
                </View>
                <View style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
                    <View style={styles.moneyWrapper}>
                        <Text style={styles.money}>30.000</Text>
                        <Text style={styles.vnd}>VND</Text>
                    </View>
                    <View style={[styles.moneyWrapper, {marginLeft: 10, marginRight: 20}]}>
                        <Text style={styles.money}>10.000</Text>
                        <Text style={styles.vnd}>VND</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.btnWrapper}>
                    <Text style={styles.btnTxt}>Tiếp tục</Text>
                </TouchableOpacity>
            </View>
        </View>
     );
}

export default PhoneRechargeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: '#F7F7F7',
        alignItems: 'center',
    },
    body: {
        width: '100%',
        padding: 10,
    },  
    phoneInput: {
        // width: '94%',
        height: 61,
        backgroundColor: '#fff',
        marginTop: 40,
        padding: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        position: 'relative',
    },
    phoneImg: {
        position: 'absolute',
        right: 20,
        top: 55,
        width: 50,
        height: 50,
    },
    pickTxt: {
        color: '#7a7a7a',
        fontSize: 16,
        marginTop: 20,
        marginBottom: 20,
    },
    moneyWrapper: {
        width: 110,
        height: 70,
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    money: {
        color: '#1D00D4',
        fontSize: 16,
        fontWeight: 'bold',
    },
    vnd: {
        fontSize: 12,
        marginLeft: 5,
    },
    btnWrapper: {
        backgroundColor: '#1D00D4',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 60,
        borderRadius: 10,
        marginTop: 100,
    },
    btnTxt: {
        color: '#fff',
    }
})