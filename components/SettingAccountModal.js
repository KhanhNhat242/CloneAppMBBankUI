import { View, Text, Modal, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import AccountOptionComponent from './AccountOptionComponent'
import { Ionicons } from '@expo/vector-icons';

export default function SettingAccountComponent({ isVisible, onClose, userData }) {
    return (
        <Modal
            transparent={true}
            animationType="slide"
            visible={isVisible}
            onRequestClose={onClose}
           
        >  
         <View style={styles.background}>

             </View>
            <View style={styles.header}>
                <Text style={styles.title}>Cài đặt tài khoản</Text>
                <TouchableOpacity style={styles.close} onPress={onClose}>
                    <Ionicons name='close' size={40} style={{color:'white'}}></Ionicons>
                </TouchableOpacity>
            </View>
            <View style={styles.accountInfo}>
                <Image
                    source={require('../assets/mainIcon/accountBee.png')}
                    style={styles.img}
                />
                <View style={{ margin: 10 }}>
                    <Text style={styles.userName}>{userData.userName}</Text>
                    <Text style={styles.loginName}>Tên đăng nhập: {userData.phone}</Text>
                </View>
                <Image
                    source={require('../assets/mainIcon/shield.png')}
                    style={styles.shield}
                />
            </View>
            <View style={styles.body}>
                <View style={styles.options}>
                <FlatList style={styles.flatList}
                        data={optionList}
                        renderItem={({ item }) => <AccountOptionComponent option={item} />}
                        numColumns={1}
                        contentContainerStyle={{ justifyContent: 'space-between', paddingHorizontal: 20 }}
                        scrollEnabled={true} />
                </View>
            </View>
            <View style={{flexDirection:'row', backgroundColor: 'white', alignItems:'center', width: '100%'}}>
                <Image 
                source={require('../assets/mainIcon/info.png')}
                style={styles.icon}/>
                <Text style={{fontSize:16, fontWeight: 'bold', marginLeft: 15}}>Phiên bản app</Text>
                <Text style={{fontSize:16, fontWeight: 'bold', marginLeft: 15, color:'#1D00D4',  textDecorationLine: 'underline', position:'absolute', right: 15}}>Kiểm tra phiên bản</Text>
            </View>
            <View style={styles.footer}>
            <TouchableOpacity style={styles.btnLogout}>
                <Text style={styles.logout}>Đăng xuất</Text>
            </TouchableOpacity>
            </View>
        </Modal>
    )
}
var optionList = [
    {
        title: 'Quản lý thiết bị',
        img: require('../assets/mainIcon/phone.png'),
        arrow: true,
    },
    {
        title: 'Thay đổi mật khẩu',
        img: require('../assets/mainIcon/key.png'),
        arrow: true,
    },
    {
        title: 'Thông tin email',
        img: require('../assets/mainIcon/mail.png'),
        arrow: true,
    },
    {
        title: 'Gửi hỗ trợ',
        img: require('../assets/mainIcon/suportMail.png'),
        arrow: true,
    },
    {
        title: 'Phiên bản chợ 28.1.6',
        img: require('../assets/mainIcon/info.png'),
    },

]
const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: 80,
    },
    header: {
        height: 70,
        width: '100%',
        backgroundColor: '#24264E',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        flexDirection: 'row',
    },
    title: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        margin: 10,
       
    },
    accountInfo: {
        width: '100%',
        backgroundColor: 'white',
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center',
    }
    ,
    img: {
        width: 60,
        height: 60,
        margin: 10,
    },
    shield: {
        width: 60,
        height: 60,
        resizeMode: 'center',
        marginTop: -15
    },
    userName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1D00D4',
        textTransform: 'uppercase',
    },
    loginName: {
        fontSize: 14,
        color: 'black',
        
    },
    body: {
        width: '100%',
        backgroundColor: 'white',
    },
    options: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    flatList: {
        position: 'sticky',
        width: '110%',
    },
    close: {
        position: 'absolute',
        right: 10,
    },
    icon: {
        width: 35,
        height: 35,
        margin: 10,
        marginLeft: 20,
        resizeMode: 'contain',
    },
    footer: {
        width: '100%',
        height: 100,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnLogout: {
        width: 330,
        height: 45,
        backgroundColor: '#1D00D4',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logout: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    }
})