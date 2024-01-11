import { Block, Text, theme } from "galio-framework";
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { DrawerItem as DrawerCustomItem } from "../components";
import Images from "../constants/Images";
import React, { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from '../components/AuthContext';
import { Feather } from '@expo/vector-icons';

// CustomDrawerContent 함수 컴포넌트는 외부에 정의되어야 합니다.
const CustomDrawerContent = ({ drawerPosition, navigation, profile, focused, state, EMP, ...rest }) => {
  const screens = ["실천 일지", "전력 예측 모델", "지역별 탄소 배출량", "환경 뉴스"];
  const [memId, setMemId] = useState(null);


  useEffect(() => {
    // asyncStorage에서 memId 값을 가져와 state에 저장
    getMemId();

    // 네비게이션 이벤트 리스너 추가
    const unsubscribe = navigation.addListener("focus", () => {
      // 메뉴가 열릴 때마다 상태를 업데이트하여 리렌더링
      getMemId();
    });

    // 컴포넌트가 언마운트될 때 리스너 해제
    return () => {
      unsubscribe();
    };
  }, []); // useEffect의 의존성 배열이 빈 배열이어야 한다.

  const getMemId = async () => {
    try {
      const value = await AsyncStorage.getItem('memId');
      console.log('AsyncStorage에서 memId 값:', value);
      setMemId(value);
    } catch (e) {
      // 에러 처리
      console.error('memId 값을 가져오는 중 오류:', e);
    }
  };

  const clearMemId = async () => {
    try {
      await AsyncStorage.clear();
      setMemId(null);
    } catch (e) {
      console.log(e); // err를 e로 변경
    }
  };

  return (
    <Block
      style={styles.container}
      forceInset={{ top: "always", horizontal: "never" }}
    >
      <Block flex={0.06} style={styles.header}>
        <Image style={{ width: 200, height: 40, marginBottom: 30 }} source={Images.Logo} />
      </Block>

      <Block flex style={{ paddingLeft: 8, paddingRight: 14 }}>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          {screens.map((item, index) => (
            <DrawerCustomItem
              title={item}
              key={index}
              navigation={navigation}
              focused={state.index === index ? true : false}
            />
          ))}

          <Block
            flex
            style={{ marginTop: 24, marginVertical: 8, paddingHorizontal: 8 }}
          >
            <Block
              style={{
                borderColor: "rgba(0,0,0,0.2)",
                width: "100%",
                borderWidth: StyleSheet.hairlineWidth,
              }}
            />
            <Text color="#8898AA" style={{ marginTop: 16, marginLeft: 8 }}>
              Carbon Reduce Now!
            </Text>
          </Block>

          {memId ? (
            <>
              <View>
                <Text style= {{marginLeft: 20 , opacity: 0.7, fontWeight: 'bold', fontSize: 20, marginBottom: 20, marginTop: 20, color: 'green'}}>
                   {memId}님 환영합니다 </Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, marginLeft: 17, opacity: 0.5, marginBottom: 30}}>
                <Feather name="check" style={{ fontSize: 20, marginRight: 8 }} />
                <TouchableOpacity onPress={clearMemId}>
                  <Text style={{  }}>로그아웃</Text>
                </TouchableOpacity>
              </View>
              <DrawerCustomItem title="마이 페이지" navigation={navigation} />
            </>
          ) : (
            <>
              <DrawerCustomItem title="로그인" navigation={navigation} />
              <DrawerCustomItem title="회원가입" navigation={navigation} />
            </>
          )}
        </ScrollView>
      </Block>
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 28,
    paddingBottom: theme.SIZES.BASE,
    paddingTop: theme.SIZES.BASE * 3,
    justifyContent: "center",
  },
});

export default CustomDrawerContent;
