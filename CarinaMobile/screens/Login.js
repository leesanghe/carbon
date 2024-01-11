import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Image, Alert, DevSettings  } from 'react-native';
import { Block, Text } from 'galio-framework';
import axios from 'axios';
import Images from '../constants/Images';
import AsyncStorage from '@react-native-async-storage/async-storage';

const YourLoginComponent = ({ navigation }) => {
  const [memId, setmemId] = useState('');
  const [memPw, setmemPw] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태를 나타내는 새로운 상태


  useEffect(() => {
    // 앱 시작 시 저장된 로그인 정보가 있는지 확인하고 있으면 자동 로그인 처리 등을 수행할 수 있습니다.
    checkLoggedIn();
  }, []);

  // Async로 선언
  const checkLoggedIn = async () => {
    try {
      const storedMemId = await AsyncStorage.getItem('memId');
      const storedMemPw = await AsyncStorage.getItem('memPw');

      if (storedMemId && storedMemPw) {
        // 저장된 로그인 정보가 있으면 자동 로그인 처리 등을 수행할 수 있습니다.
        console.log('자동 로그인:', storedMemId);
      }
    } catch (error) {
      console.error('자동 로그인 확인 중 오류:', error.message);
    }
  };

  // Async로 선언
  const handleLogin = async () => {
    try {
      const apiUrl = 'http://192.168.0.40:8080/app/members/login';
      const response = await axios.post(apiUrl, {
        memId: memId,
        memPw: memPw,
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (response.status >= 200 && response.status < 300) {
        const result = response.data;
        console.log('로그인 성공:', result, 'Id:', memId);

        // 로그인 성공 시에만 화면 전환
        
        console.log('저장되어야할 값:', memId);
        
        // AsyncStorage에 저장
        await AsyncStorage.setItem('memId', memId);
        await AsyncStorage.setItem('memNm', result.memNm);

        await AsyncStorage.setItem('profileimg', '1');
        await AsyncStorage.setItem('email', result.email);
        console.log('AsyncStorage에 설정된 memId 값:', memId);
        

        // 상태 업데이트
        setmemId(memId);
        Alert.alert('환영합니다', `${result.memNm}님 환영합니다!`);
        navigation.navigate('실천 일지');
        DevSettings.reload();

      } else {
        console.error('로그인 실패:', response.status, response.statusText);
        // 로그인 실패 시에 원하는 처리를 수행
        // 예: 에러 메시지를 표시하거나 다른 화면으로 이동
      }
    } catch (error) {
      console.error('오류:', error.message);
    }
  };

  const handleSignUp = () => {
    navigation.navigate('회원가입');
  };

  return (
    <View style={styles.container}>
      <Block center>
        <Image source={Images.LogoOnboarding} style={styles.logo} />
      </Block>

      <TextInput
        style={styles.input}
        placeholder="Id"
        onChangeText={(text) => {
          setmemId(text);
          console.log('입력된 memId:', text);
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setmemPw(text)}
      />

      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleSignUp} style={[styles.button, styles.signupButton]}>
        <Text>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: 'beige',
  },
  logo: {
    width: 150,
    height: 150,
    zIndex: 2,
    position: 'relative',
    marginTop: '-10%',
    marginBottom: 130,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    borderRadius: 5,
  },
  signupButton: {
    backgroundColor: 'lightgreen',
  },
});

export default YourLoginComponent;
