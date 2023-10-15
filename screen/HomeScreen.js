import React, { Component, useEffect, useState } from 'react'
import { Text, View, StyleSheet, ImageBackground, Image, TextInput, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import Swiper from 'react-native-swiper/src';
import MainOptionComponent from '../components/MainOptionComponent.js';
import MarketOptionComponent from '../components/MarketOptionComponent.js';
import SettingAccountComponent from '../components/SettingAccountModal.js';
import { useNavigation } from '@react-navigation/native';



export default function HomeScreen() {
    const navigation = useNavigation();
    const adData = [
        { id: 1, imageUrl: require('../assets/banner/banner1.png') },
        { id: 2, imageUrl: require('../assets/banner/banner2.png') },
        { id: 3, imageUrl: require('../assets/banner/banner3.png') },
        { id: 4, imageUrl: require('../assets/banner/banner4.png') },
        { id: 5, imageUrl: require('../assets/banner/banner5.png') },
        { id: 6, imageUrl: require('../assets/banner/banner6.png') },
        { id: 7, imageUrl: require('../assets/banner/banner7.png') },
        { id: 8, imageUrl: require('../assets/banner/banner8.png') },
        { id: 9, imageUrl: require('../assets/banner/banner9.png') },
        { id: 10, imageUrl: require('../assets/banner/banner10.png') }
    ];
    const [isPopupVisible, setPopupVisible] = useState(false);

    const togglePopup = () => {
      setPopupVisible(!isPopupVisible);
    };
    const goToSearch = () => {
        navigation.navigate('Search');
    }
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scroll} bounces={false}>
                <ImageBackground
                    source={require('../assets/background.png')}
                    style={styles.imageBackground}>

                    <View style={styles.header}>
                        <View style={styles.menuHeader}>
                            <TouchableOpacity style={{ height: 24, width: 24, margin: 10 }} onPress={togglePopup}>
                                <Image
                                    source={require('../assets/mainIcon/person.png')}
                                    style={{ height: 24, width: 24, resizeMode: 'contain' }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ height: 24, width: 24, margin: 10 }}>
                                <Image
                                    source={require('../assets/mainIcon/chat.png')}
                                    style={{ height: 24, width: 24, resizeMode: 'contain' }}
                                />
                            </TouchableOpacity>

                            <Image style={styles.logo} source={require('../assets/mainIcon/logoMB.png')} ></Image>
                            <TouchableOpacity style={{ height: 24, width: 24, margin: 10, paddingLeft:20}} onPress={goToSearch}>
                                <Image
                                    source={require('../assets/mainIcon/search.png')}
                                    style={{ height: 24, width: 24, resizeMode: 'contain' }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ height: 24, width: 24, margin: 10 }}>
                                <Image
                                    source={require('../assets/mainIcon/bell.png')}
                                    style={{ height: 24, width: 24, resizeMode: 'contain' }}
                                />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.title}>Xin chào,</Text>
                        <Text style={styles.owner_name}>HUYNH HUU PHUOC</Text>
                        <Text style={{ fontSize: 16, color: 'white', marginTop: 20 }}>Xem tài khoản</Text>

                    </View>
                    <View style={styles.circle}>
                        <Image source={require('../assets/mainIcon/arrow.png')}
                            style={{ height: 15, width: 15, resizeMode: 'contain', transform: [{ rotate: '90deg' }] }}
                        />
                    </View>
                    <View style={styles.body}>
                        <Text style={styles.mainOption}>Tính năng chính</Text>
                        <View style={styles.options}>
                            <FlatList style={styles.flatList}
                                data={optionList}
                                renderItem={({ item }) => <MainOptionComponent option={item} />}
                                numColumns={3}
                                contentContainerStyle={{ justifyContent: 'space-between', paddingHorizontal: 20 }}
                                scrollEnabled={false} />
                        </View>
                        <Text style={styles.mainOption}>Chợ Ứng dụng</Text>
                        <View style={styles.MarketApp} >
                            <Image
                                source={require('../assets/mainIcon/MarketAppBackground.png')}
                                style={styles.MarketAppBackground}
                            />
                            <View style={styles.optionsMarket}>
                                <FlatList style={styles.marketFlatList}
                                    data={marketList}
                                    renderItem={({ item }) => <MarketOptionComponent option={item} />}
                                    numColumns={4}
                                    contentContainerStyle={{ justifyContent: 'space-between', paddingHorizontal: 20 }}
                                    scrollEnabled={false} />
                            </View>
                        </View>
                        <View style={styles.sales}>
                            <Text style={styles.mainOption}>Khuyến mãi cho bạn</Text>
                            <TouchableOpacity style={styles.touchSale}>
                                <Text style={styles.moreSale}>XEM THÊM</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.banner}>
                            <Swiper
                                dotColor="#BBBBBB"
                                dotStyle={{ width: 10, height: 10, borderRadius: 5 }}
                                activeDotColor="white"
                                activeDotStyle={{ width: 11, height: 11, borderRadius: 5, borderWidth: 1, borderColor: 'blue' }}
                                showsPagination={true}
                                autoplay={true}
                                autoplayTimeout={5}
                                loop={true}
                                style={{ marginHorizontal: 20 }}
                            >
                                {adData?.map((image) => (
                                    <View key={image?.id} style={styles.slide}>
                                        <Image source={image.imageUrl} style={styles.image} />
                                    </View>
                                ))}
                            </Swiper>
                        </View>
                    </View>
                </ImageBackground>
            </ScrollView>
            <SettingAccountComponent isVisible={isPopupVisible} onClose={togglePopup}/>
        </View>
    )
}
var optionList = [
    {
        title: 'Chuyển tiền',
        img: require('../assets/mainIcon/send.png'),
    },
    {
        title: 'Nạp điện thoại',
        img: require('../assets/mainIcon/pushCard.png'),
    },
    {
        title: 'Tiền gửi & đầu tư',
        img: require('../assets/mainIcon/money.png'),
    },
    {
        title: 'Thanh toán',
        img: require('../assets/mainIcon/pay.png'),
    },
    {
        title: 'Vay Online',
        img: require('../assets/mainIcon/loan.png'),
    },
    {
        title: 'Dịch vụ thẻ',
        img: require('../assets/mainIcon/serviceCard.png'),
    },
]
var marketList = [
    {
        title: 'Bất động sản',
        img: require('../assets/market/marketIcon1.png'),
    },
    {
        title: 'Flash Sale',
        img: require('../assets/market/marketIcon2.png'),
    },
    {
        title: 'Data 3G/4G',
        img: require('../assets/market/marketIcon3.png'),
    },
    {
        title: 'Megatek - Thẻ game 247',
        img: require('../assets/market/marketIcon4.png'),
    },
    {
        title: 'Thẻ điện thoại - IRIS',
        img: require('../assets/market/marketIcon5.png'),
    },
    {
        title: 'IRIS - Nạp điện thoại',
        img: require('../assets/market/marketIcon6.png'),
    },
    {
        title: 'IRIS - Thẻ Game 365',
        img: require('../assets/market/marketIcon7.png'),
    },
    {
        title: 'Xem thêm',
        img: require('../assets/market/marketIcon8.png'),
    },
]
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scroll: {
        backgroundColor: '#F7F7F7',
    },
    imageBackground: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    menuHeader: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 20,
    }
    ,
    logo: {
        width: 130,
        height: 40,
        marginTop: 0,
    },
    header: {
        width: '100%',
        height: 250,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        marginVertical: 13,
        fontSize: 20,
        color: 'white',
    },
    owner_name: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
    },
    body: {
        width: '100%',
        height: '100%',
        backgroundColor: '#F7F7F7',
    },
    mainOption: {
        margin: 20,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    options: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    flatList: {
        position: 'sticky'
    },
    MarketApp: {
        width: '100%',
        height: 255,
        position: 'relative',
    }
    ,
    MarketAppBackground: {
        position: 'absolute',
        objectFit: 'contain',
        height: '100%',
        width: '100%'
    },
    optionsMarket: {
        marginTop: 35,
        width: '100%',
        height: 210,
        justifyContent: 'center',
        alignItems: 'center',
    },
    marketFlatList: {
        position: 'sticky'
    },
    sales: {
        width: '100%',
        flexDirection: 'row',
    },
    touchSale: {
        position: 'absolute',
        right: 20,
        top: 20,
    }
    ,
    moreSale: {
        color: '#2324B9',
        fontSize: 14,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    banner: {
        width: '100%',
        height: 220,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide: {
        width: 'auto',
        height: 150,
    },
    image: {
        height: '100%',
        width: '90%',
        objectFit: 'contain',
    },
    circle: {
        width: 50,
        height: 50,
        borderRadius: 500 / 2,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 225,
    }
})