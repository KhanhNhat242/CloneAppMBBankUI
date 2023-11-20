import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import src from "react-native-swiper/src";

function SendMoney() {
    const navigation = useNavigation();
    const goBack = () => {
        navigation.goBack();
    }
    const goHome = () => {
        navigation.navigate('Main');
    }

    return ( 
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={goBack}>
                    <Image
                        source={require('../assets/mainIcon/back.png')}
                        style={{ width: 15, height: 15, margin: 10, resizeMode: 'contain' }}
                    />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Tiền gửi & Đầu tư</Text>
                <TouchableOpacity onPress={goHome}>
                    <Image
                        source={require('../assets/mainIcon/home.png')}
                        style={{ width: 20, height: 20, margin: 10, resizeMode: 'contain' }}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                <View style={styles.itemWrapper}>
                    <View style={styles.leftWrapper}>
                        <Image style={styles.itemImg} source={require('../assets/mainIcon/Image62.png')} />
                        <View style={styles.txtWrapper}>
                            <Text style={styles.itemTxt}>Đầu tư tài chính</Text>
                            <Text style={{marginLeft: 20}}>Wealth Management</Text>
                        </View>
                    </View>
                    <Image style={styles.continueImg} source={require('../assets/mainIcon/Image63.png')} />
                </View>
                <View style={styles.itemWrapper}>
                    <View style={styles.leftWrapper}>
                        <Image style={styles.itemImg} source={require('../assets/mainIcon/Image66.png')} />
                        <Text style={styles.itemTxt}>Mở tiền gửi số</Text>
                    </View>
                    <Image style={styles.continueImg} source={require('../assets/mainIcon/Image63.png')} />
                </View>
                <View style={styles.itemWrapper}>
                    <View style={styles.leftWrapper}>
                        <Image style={styles.itemImg} source={require('../assets/mainIcon/Image70.png')} />
                        <Text style={styles.itemTxt}>Chứng chỉ tiền gửi MB</Text>
                    </View>
                    <Image style={styles.continueImg} source={require('../assets/mainIcon/Image63.png')} />
                </View>
                <View style={styles.itemWrapper}>
                    <View style={styles.leftWrapper}>
                        <Image style={styles.itemImg} source={require('../assets/mainIcon/Image71.png')} />
                        <Text style={styles.itemTxt}>Đầu tư quỹ mở MBCapital</Text>
                    </View>
                    <Image style={styles.continueImg} source={require('../assets/mainIcon/Image63.png')} />
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