import React, { Component, useEffect, useState } from 'react'
import { Text, View, StyleSheet, ImageBackground, Image, TextInput, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import Swiper from 'react-native-swiper';


export default Home = () => {
    const adData = [
        { id: 1, imageUrl: require('../assets/banner/banner1.png') },
        { id: 2, imageUrl: require('../assets/banner/banner2.png') },
        { id: 3, imageUrl: require('../assets/banner/banner3.png') },
        { id: 4, imageUrl: require('../assets/banner/banner4.png')},
        { id: 5, imageUrl: require('../assets/banner/banner5.png')},
        { id: 6, imageUrl: require('../assets/banner/banner6.png')},
        { id: 7, imageUrl: require('../assets/banner/banner7.png')},
        { id: 8, imageUrl: require('../assets/banner/banner8.png')},
        { id: 9, imageUrl: require('../assets/banner/banner9.png')},
        { id: 10, imageUrl: require('../assets/banner/banner10.png')}
    ];

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scroll} bounces={false}>
                <ImageBackground
                    source={require('../assets/background.png')}
                    style={styles.imageBackground}>

                    <View style={styles.header}>
                        <Image style={styles.logo} source={require('../assets/mainIcon/logoMB.png')} ></Image>
                        <Text style={styles.title}>Xin chào,</Text>
                        <Text style={styles.owner_name}>HUYNH HUU PHUOC</Text>
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
    logo: {
        width: 130,
        height: 40,
        marginTop: 20,
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
        flex: 1,
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
        justifyContent: 'center',
        alignItems: "center",
        width: '100%',
        height: 240,
    }
    ,
    MarketAppBackground: {
        objectFit: 'contain',
        height: '100%',
        width: '100%'
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
    }
})