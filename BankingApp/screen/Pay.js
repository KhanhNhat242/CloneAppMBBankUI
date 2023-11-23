import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function Pay() {
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
                <Text style={styles.headerTitle}>Thanh toán</Text>
                <TouchableOpacity onPress={goHome}>
                    <Image
                        source={require('../assets/mainIcon/home.png')}
                        style={{ width: 20, height: 20, margin: 10, resizeMode: 'contain' }}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                <Text style={styles.title}>Thanh toán QR</Text>
                <View style={styles.itemContainer}>
                    <View style={styles.itemWrapper}>
                        <Image style={styles.itemImg} source={require('../assets/mainIcon/image73.png')} />
                        <Text style={styles.itemTxt}>Quét QR</Text>
                    </View>
                    <View style={styles.itemWrapper}>
                        <Image style={styles.itemImg} source={require('../assets/mainIcon/image74.png')} />
                        <Text style={styles.itemTxt}>Quản lý VietQR</Text>
                    </View>
                </View>
                <View style={styles.itemContainer}>
                    <View style={styles.itemWrapper}>
                        <Image style={styles.itemImg} source={require('../assets/mainIcon/image75.png')} />
                        <View style={styles.txtWrapper}>
                        <Text style={styles.itemTxt}>Chia sẻ biến động số dư</Text>
                        </View>
                    </View>
                </View>
                <Text style={styles.title}>Hóa đơn gia đình</Text>
                <View style={styles.itemContainer}>
                    <View style={styles.itemWrapper}>
                        <Image style={styles.itemImg} source={require('../assets/mainIcon/image76.png')} />
                        <Text style={styles.itemTxt}>Điện</Text>
                    </View>
                    <View style={styles.itemWrapper}>
                        <Image style={styles.itemImg} source={require('../assets/mainIcon/image77.png')} />
                        <Text style={styles.itemTxt}>Nước</Text>
                    </View>
                </View>
                <View style={styles.itemContainer}>
                    <View style={styles.itemWrapper}>
                        <Image style={styles.itemImg} source={require('../assets/mainIcon/image78.png')} />
                        <Text style={styles.itemTxt}>Internet</Text>
                    </View>
                    <View style={styles.itemWrapper}>
                        <Image style={styles.itemImg} source={require('../assets/mainIcon/image79.png')} />
                        <Text style={styles.itemTxt}>Truyền hình</Text>
                    </View>
                </View>
                <View style={styles.itemContainer}>
                    <View style={styles.itemWrapper}>
                        <Image style={styles.itemImg} source={require('../assets/mainIcon/image80.png')} />
                        <Text style={styles.itemTxt}>Di động trả sau</Text>
                    </View>
                    <View style={styles.itemWrapper}>
                        <Image style={styles.itemImg} source={require('../assets/mainIcon/image81.png')} />
                        <View style={styles.txtWrapper}> 
                            <Text style={styles.itemTxt}>Điện thoại cố định</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
     );
}

export default Pay;

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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    body: {
        width: '100%', 
        marginTop: 20,
        marginBottom: 20,
    },
    itemContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10,
    },
    itemWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        margin: 10,
        backgroundColor: '#fff',
        width: 180,
    },
    itemImg: {
        width: 50,
        height: 50,
    },
    itemTxt: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    txtWrapper: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        width: 120,
    }
})