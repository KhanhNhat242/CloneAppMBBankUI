import { Image, StyleSheet, Text, View } from "react-native";
import SubHeader from "../components/SubHeader";

function SendMoney() {
    return ( 
        <View style={styles.container}>
            <SubHeader title={'Tiền gửi & Đầu tư'} />
            <View style={styles.body}>
                <View style={styles.itemWrapper}>
                    <View style={styles.leftWrapper}>
                        <Image style={styles.itemImg} source={require('../assets/mainIcon/image62.png')} />
                        <View style={styles.txtWrapper}>
                            <Text style={styles.itemTxt}>Đầu tư tài chính</Text>
                            <Text style={{marginLeft: 20}}>Wealth Management</Text>
                        </View>
                    </View>
                    <Image style={styles.continueImg} source={require('../assets/mainIcon/image63.png')} />
                </View>
                <View style={styles.itemWrapper}>
                    <View style={styles.leftWrapper}>
                        <Image style={styles.itemImg} source={require('../assets/mainIcon/image66.png')} />
                        <Text style={styles.itemTxt}>Mở tiền gửi số</Text>
                    </View>
                    <Image style={styles.continueImg} source={require('../assets/mainIcon/image63.png')} />
                </View>
                <View style={styles.itemWrapper}>
                    <View style={styles.leftWrapper}>
                        <Image style={styles.itemImg} source={require('../assets/mainIcon/image70.png')} />
                        <Text style={styles.itemTxt}>Chứng chỉ tiền gửi MB</Text>
                    </View>
                    <Image style={styles.continueImg} source={require('../assets/mainIcon/image63.png')} />
                </View>
                <View style={styles.itemWrapper}>
                    <View style={styles.leftWrapper}>
                        <Image style={styles.itemImg} source={require('../assets/mainIcon/image71.png')} />
                        <Text style={styles.itemTxt}>Đầu tư quỹ mở MBCapital</Text>
                    </View>
                    <Image style={styles.continueImg} source={require('../assets/mainIcon/image63.png')} />
                </View>
            </View>
        </View>
     );
}

export default SendMoney;

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
    itemWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: '#fff',
        marginTop: 10,
        padding: 10,
    },
    leftWrapper: {
      display: 'flex',
      flexDirection: 'row',  
      alignItems: 'center',
    },
    itemImg: {
        width: 50,
        height: 50,
    },
    itemTxt: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 20,
    },
    continueImg: {
        width: 26, 
        height: 46,
    }
})