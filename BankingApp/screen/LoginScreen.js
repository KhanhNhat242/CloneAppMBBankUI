import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
export default function LoginScreen() {
  const [userName, setUserName] = useState('0348307336');
  const [password, setPassword] = useState('1234567');
  ;
  const loginData = {
    userName: userName,
    password: password
  }


  const [showPassword, setShowPassword] = useState(false)
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const navigation = useNavigation();
  const CheckLogin = () => {
    if (loginData.userName == '' || loginData.password == '') {
      alert('Vui lòng nhập đầy đủ thông tin');
      return;
    }
    else {
      const loginPayload = {
        phone: loginData.userName,
        password: loginData.password,
      };
      fetch('http://192.168.56.1:8080/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginPayload),
      })
        .then((response) => response.json())
        .then((data) => {
          navigation.navigate('Main',  {
            screen: 'Trang chủ',
            params: { userData: data }, });
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  }

  // const CheckLogin = () => {
  //   navigation.navigate('Main', {
  //     screen: 'Trang chủ',
  //     params: { userData: userData }
  //   })
  // }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/background.png')}
        style={styles.imageBackground}>
        <Image style={styles.logo} source={require('../assets/mainIcon/logoMB.png')} ></Image>
        <Text style={styles.title}>Đăng nhập</Text>
        <TextInput placeholder='Tên đăng nhập' placeholderTextColor="white"
          style={styles.userName} onChangeText={setUserName} value={userName}></TextInput>
        <View style={styles.formPassword}>
          <TextInput placeholder='Mật khẩu' placeholderTextColor="white"
            secureTextEntry={!showPassword} style={styles.inputPassword} onChangeText={setPassword} value={password} />
          <TouchableOpacity style={styles.eyeIcon} onPress={toggleShowPassword}>
            <Ionicons
              name={showPassword ? 'eye-off' : 'eye'}
              size={24}
              color="white"
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.btnLogin} onPress={CheckLogin}>
          <Text style={styles.textBtn}>Đăng nhập</Text>
        </TouchableOpacity>
        <View style={styles.optionLogin}>
          <TouchableOpacity>
            <Text style={styles.fogotPassword}>QUÊN MẬT KHẨU?</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.newAccount}>TẠO TÀI KHOẢN</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 140,
    height: 70,
    marginTop: 40,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 50,
  },
  userName: {
    width: 350,
    paddingLeft: 20,
    height: 50,
    color: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    fontSize: 16,
    marginVertical: 50,
  },
  formPassword: {
    width: 350,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  inputPassword: {
    width: 320,
    paddingLeft: 20,
    height: 50,
    color: 'white',

    fontSize: 16,
  },
  btnLogin: {
    marginTop: 50,
    width: 350,
    height: 40,
    backgroundColor: 'rgba(0,255,255, 0.5)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBtn: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  optionLogin: {
    flexDirection: 'row',
    marginTop: 30,
  },
  fogotPassword: {
    color: 'white',
    fontSize: 14,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  newAccount: {
    color: 'white',
    fontSize: 14,
    marginLeft: 130,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  eyeIcon: {
    opacity: 0.7,
  },

});
