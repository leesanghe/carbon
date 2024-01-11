import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImagePickerComponent from "../components/Photo";

const MyPage = ({ route, navigation }) => {
  const [memId, setMemId] = useState('');
  const [memNm, setMemNm] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [photo, setPhoto] = useState(undefined);
  

  useEffect(() => {
    // AsyncStorage에서 memId, memNm, profileImage 가져오기
    getProfileInfo();
  }, []);

  const getProfileInfo = async () => {
    try {
      const storedMemId = await AsyncStorage.getItem('memId');
      const storedMemNm = await AsyncStorage.getItem('memNm');
      const storedProfileImage = await AsyncStorage.getItem('profileimg');
      const storedAddress = await AsyncStorage.getItem('address');
      const storedEmail = await AsyncStorage.getItem('email');

      console.log('storedMemId:', storedMemId);
      console.log('storedMemNm:', storedMemNm);
      console.log('Stored profileImage:', storedProfileImage);
      console.log('storedAddress:', storedAddress);
      console.log('storedEmail:', storedEmail);

      if (storedMemId && storedMemNm) {
        // AsyncStorage에서 가져온 값으로 상태 업데이트
        setMemId(storedMemId);
        setMemNm(storedMemNm);
        setProfileImage(storedProfileImage);
        setAddress(storedAddress); // storedAddress 설정 추가
        setEmail(storedEmail); // storedEmail 설정 추가
      }
    } catch (error) {
      console.error('프로필 정보를 가져오는 중 오류:', error.message);
    }
  };

  // profileImage가 1인 경우 기본 이미지 경로 설정
  const defaultImageSource = profileImage === "1" ? require('../assets/imgs/basicprofile.jpg') : { uri: profileImage };

  return (
    <SafeAreaView
      style={{
        width: '100%',
        backgroundColor: 'white',
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 10,
          marginTop: 80,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text>취소</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}> 프로필 수정</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text style={{ color: '#3493D9' }}>완료</Text>
        </TouchableOpacity>
      </View>
      <View style={{ padding: 20, alignItems: 'center' }}>
        <Image
          source={defaultImageSource}
          style={{ width: 80, height: 80, borderRadius: 100, marginBottom: 20}}
        />
        <ImagePickerComponent url={photo} onChangePhoto={setPhoto} style={{zIndex:3}} />
      </View>
      <View
        style={{ padding: 10 }}
      >
        <View style={{ paddingVertical: 10 }}>
          <Text style={{
            opacity: 0.5,
          }}>사용자 이름</Text>
          <TextInput
            placeholder='사용자 이름'
            defaultValue={memNm}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
            }}
          />
        </View>
        <View style={{ paddingVertical: 10 }}>
          <Text style={{
            opacity: 0.5,
          }}>주소</Text>
          <TextInput
            placeholder='주소'
            defaultValue={address}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
            }}
          />
        </View>
        <View style={{ paddingVertical: 10 }}>
          <Text style={{
            opacity: 0.5,
          }}>이메일</Text>
          <TextInput
            placeholder='이메일'
            defaultValue={email}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
            }}
          />
        </View>
        {/* 나머지 부분은 마찬가지로 memId, memNm으로 대체 */}
      </View>
      <View>
        <Text
          style={{
            marginVertical: 5,
            padding: 10,
            color: '#3493D9',
          }}>
          개인정보 설정
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default MyPage;
