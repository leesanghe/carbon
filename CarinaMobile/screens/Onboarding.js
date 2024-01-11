import React from "react";
import {
  ImageBackground,
  Image,
  StyleSheet,
  StatusBar,
  Dimensions
} from "react-native";
import { Block, Button, Text, theme } from "galio-framework";

// Dimensions를 사용하여 스크린의 높이와 너비를 가져옵니다.
const { height, width } = Dimensions.get("screen");

// 테마 및 이미지 등의 상수를 가져옵니다.
import argonTheme from "../constants/Theme";
import Images from "../constants/Images";

class Onboarding extends React.Component {
  render() {
    // navigation prop을 가져옵니다.
    const { navigation } = this.props;

    return (
      // 전체 컨테이너를 감싸는 Block 컴포넌트입니다.
      <Block flex style={styles.container}>
        {/* 상태 표시줄을 숨깁니다. */}
        <StatusBar hidden />
        
        {/* 화면의 가운데에 배경 이미지를 표시합니다. */}
        <Block flex center>
          <ImageBackground
            source={Images.Onboarding}
            style={{ height, width, zIndex: 1 }}
          />
        </Block>
        
        {/* 로고 이미지를 표시합니다. */}
        <Block center>
          <Image source={Images.LogoOnboarding} style={styles.logo} />
        </Block>
        
        {/* 타이틀 및 서브타이틀을 포함하는 Block입니다. */}
        <Block flex space="between" style={styles.padded}>
          <Block flex space="around" style={{ zIndex: 2 }}>
            {/* 타이틀과 서브타이틀을 표시합니다. */}
            <Block style={styles.title}>
              <Block>
                <Text color="green" size={60}>
                  Carbon
                </Text>
              </Block>
              <Block>
                <Text color="yellowgreen" size={60}>
                  Reduce
                </Text>
              </Block>
              <Block>
                <Text color="green" size={60}>
                  NOW
                </Text>
              </Block>
              <Block style={styles.subTitle}>
                <Text color="gray" size={16}>
                  탄소 배출량 계산 및 시각화 시스템
                </Text>
              </Block>
            </Block>

            {/* "시작하기" 버튼을 표시하고, 클릭 시 'App' 스크린으로 이동합니다. */}
            <Block center>
              <Button
                style={styles.button}
                color={argonTheme.COLORS.SECONDARY}
                onPress={() => navigation.navigate("App")}
                textStyle={{ color: argonTheme.COLORS.BLACK }}
              >
                시작하기
              </Button>
            </Block>
          </Block>
        </Block>
      </Block>
    );
  }
}

// 스타일시트를 생성합니다.
const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.BLACK
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    position: "relative",
    bottom: theme.SIZES.BASE,
    zIndex: 2,
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0
  },
  logo: {
    width: 150,
    height: 150,
    zIndex: 2,
    position: 'relative',
    marginTop: '-70%'
  },
  logo2: {
    width: 100,
    height: 60,
    zIndex: 2,
    position: 'relative',
    marginTop: '-50%'
  },
  title: {
    marginTop: '-30%'
  },
  subTitle: {
    marginTop: 20
  }
});

// Onboarding 컴포넌트를 내보냅니다.
export default Onboarding;
