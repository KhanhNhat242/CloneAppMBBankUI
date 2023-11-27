import React, { Component } from 'react'
import {Image, View} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Login from './LoginScreen.js'
import Home from './HomeScreen.js'
import Product from './ProductScreen.js'
import MbPlus from './MbPlusScreen.js'
import PresentScreen from './PresentScreen.js';
import UseFulnessScreen from './UseFulnessScreen.js';
import SearchScreen from './SearchScreen.js';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HelperScreen from './HelperScreen.js';
import TransferMoneyScreen from './TransferMoneyScreen.js';
import PhoneRechargeScreen from './PhoneRechargeScreen.js';
import SendMoney from './SendMoneyScreen.js';
import Pay from './Pay.js';
import TransferScreen from './TransferScreen.js';
import SuccessTransfer from './SuccessTransfer.js';
import NotifyScreen from './NotifyScreen.js';
import ConfirmTransfer from './ConfirmTransfer.js';

const Tab = createBottomTabNavigator();

function MyTabs() {
    if (!global.setImmediate) {
        global.setImmediate = function (callback) {
            return setTimeout(callback, 0);
        };
    }
    return (
        <Tab.Navigator screenOptions={{headerShown:false}}         >
            <Tab.Screen name="Trang chủ" component={Home} options={{
                tabBarIcon: ({focused}) => (
                    <View style={focused ? {borderTopWidth: 2, justifyContent: 'center',alignItems: 'center',width: 70,borderTopColor: 'blue', padding: 2}:{borderTopWidth: 0, borderTopColor: 'blue', padding: 2} }>
                        <Image source={focused
                        ? require('../assets/mainIcon/homeBlueTab.png')
                        : require('../assets/mainIcon/homeGrayTab.png')} style= {{width: 24, height: 24}}/>
                    </View>
                ),
                tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' } 
            }
        }  />
            <Tab.Screen name="Sản phẩm" component={Product} options={{
                tabBarIcon: ({focused}) => (
                    <View style={focused ? {borderTopWidth: 2, justifyContent: 'center',alignItems: 'center',width: 70,borderTopColor: 'blue', padding: 2}:{borderTopWidth: 0, borderTopColor: 'blue', padding: 2} }>
                    <Image source={focused
                        ? require('../assets/mainIcon/productBlueTab.png')
                        : require('../assets/mainIcon/productGrayTab.png')} style= {{width: 26, height: 24}}/>
                        </View>
                ),
                tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' } 
            }}/>
            <Tab.Screen name="MB++" component={MbPlus} options={{
                tabBarIcon: ({focused}) => (
                    <View style={focused ? {borderTopWidth: 2, justifyContent: 'center',alignItems: 'center',width: 70,borderTopColor: 'blue', padding: 2}:{borderTopWidth: 0, borderTopColor: 'blue', padding: 2} }>
                    <Image source={focused
                        ? require('../assets/mainIcon/MBPlusTabBlue.png')
                        : require('../assets/mainIcon/MbPlusTab.png')} style= {{width: 33, height: 26}}/>
                        </View>
                ),
                tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' } 
            }}/>
            <Tab.Screen name="Quà tặng" component={PresentScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={focused ? {borderTopWidth: 2, justifyContent: 'center',alignItems: 'center',width: 70,borderTopColor: 'blue', padding: 2}:{borderTopWidth: 0, borderTopColor: 'blue', padding: 2} }>
                    <Image source={focused
                        ? require('../assets/mainIcon/presentBlue.png')
                        : require('../assets/mainIcon/present.png')} style= {{width: 33, height: 24}}/>
                        </View>
                ),
                tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' } 
            }}/>
            <Tab.Screen name="Tiện ích" component={UseFulnessScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={focused ? {borderTopWidth: 2, justifyContent: 'center',alignItems: 'center',width: 70,borderTopColor: 'blue', padding: 2}:{borderTopWidth: 0, borderTopColor: 'blue', padding: 2} }>
                    <Image source={focused
                        ? require('../assets/mainIcon/useFulnessBlue.png')
                        : require('../assets/mainIcon/useFulness.png')} style= {{width: 26, height: 26}}/>
                        </View>
                ),
                tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' } 
            }}/>
        </Tab.Navigator>
    );
}
const Stack = createNativeStackNavigator();

export default function RootComponent() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown:false}}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Main" component={MyTabs}/>
                <Stack.Screen name="Search" component={SearchScreen}/>
                <Stack.Screen name="Helper" component={HelperScreen}/>
                <Stack.Screen name="TransferMoney" component={TransferMoneyScreen}/>
                <Stack.Screen name="PhoneRecharge" component={PhoneRechargeScreen} />
                <Stack.Screen name="SendMoney" component={SendMoney} />
                <Stack.Screen name='Pay' component={Pay} />
                <Stack.Screen name='Transfer' component={TransferScreen} />
                <Stack.Screen name='TransferSuccess' component={SuccessTransfer} />    
                <Stack.Screen name='Notify' component={NotifyScreen} />
                <Stack.Screen name='ConfirmTransfer' component={ConfirmTransfer} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
