import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Login from './LoginScreen.js'
import Home from './HomeScreen.js'
import Product from './ProductScreen.js'
import MbPlus from './MbPlusScreen.js'
import PresentScreen from './PresentScreen.js';
import UseFulnessScreen from './UseFulnessScreen.js';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator screenOptions={{headerShown:false}} >
            <Tab.Screen name="Trang chủ" component={Home} options={{
                tabBarIcon: ({focused}) => (
                    <Image source={focused
                        ? require('../assets/mainIcon/homeBlueTab.png')
                        : require('../assets/mainIcon/homeGrayTab.png')} style= {{width: 24, height: 24}}/>
                ),
                tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' } 
            }
        }  />
            <Tab.Screen name="Sản phẩm" component={Product} options={{
                tabBarIcon: ({focused}) => (
                    <Image source={focused
                        ? require('../assets/mainIcon/productBlueTab.png')
                        : require('../assets/mainIcon/productGrayTab.png')} style= {{width: 30, height: 24}}/>
                ),
                tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' } 
            }}/>
            <Tab.Screen name="MB++" component={MbPlus} options={{
                tabBarIcon: ({focused}) => (
                    <Image source={focused
                        ? require('../assets/mainIcon/MbPlusTab.png')
                        : require('../assets/mainIcon/MbPlusTab.png')} style= {{width: 30, height: 24}}/>
                ),
                tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' } 
            }}/>
            <Tab.Screen name="Quà tặng" component={PresentScreen} options={{
                tabBarIcon: ({focused}) => (
                    <Image source={focused
                        ? require('../assets/mainIcon/present.png')
                        : require('../assets/mainIcon/present.png')} style= {{width: 30, height: 24}}/>
                ),
                tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' } 
            }}/>
            <Tab.Screen name="Tiện ích" component={UseFulnessScreen} options={{
                tabBarIcon: ({focused}) => (
                    <Image source={focused
                        ? require('../assets/mainIcon/useFulness.png')
                        : require('../assets/mainIcon/useFulness.png')} style= {{width: 30, height: 24}}/>
                ),
                tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' } 
            }}/>
        </Tab.Navigator>
    );
}
const Stack = createNativeStackNavigator();

export default RootComponent = () => {
    return (
        <NavigationContainer>

            <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown:false}}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Main" component={MyTabs}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
