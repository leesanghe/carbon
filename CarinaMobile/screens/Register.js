import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
  Image,
  Alert,
} from "react-native";
import { Block, Text, theme } from "galio-framework";
import { Button, Icon, Input } from "../components";
import { Images, argonTheme } from "../constants";
import axios from 'axios';

const { width, height } = Dimensions.get("screen");

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      memNm: "",
      memId: "",
      memPw: "",
      memEmail: "",
    };
  }

  handleCreateAccount = async () => {
    const { memNm, memId, memPw, memEmail} = this.state;
    const { navigation } = this.props;

     // 각 state 값 출력
     console.log('memId:', memId);
     console.log('memPw:', memPw);
     console.log('memNm:', memNm);
     console.log('memEmail:', memEmail);

    try {
      const response = await axios.post('http://192.168.0.29:8080/cbs/app/members/register', {
        memId: memId,
        memPw : memPw,
        memNm: memNm,
        email : memEmail,
        // address : memAddr
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (response.status === 200) {
        Alert.alert('계정 생성 완료', `${memNm}님, 계정이 성공적으로 생성되었습니다.`);
        navigation.navigate('실천 일지');
      } else {
        Alert.alert('계정 생성 실패', '서버 오류로 계정 생성에 실패했습니다.');
      }
    } catch (error) {
      Alert.alert('계정 생성 실패', '서버와의 통신 중 오류가 발생했습니다.');
      console.error('Error:', error.message);
    }
  };

  render() {
    return (
      <Block flex middle>
        <StatusBar hidden />
        <ImageBackground
          source={Images.RegisterBackground}
          style={{ width, height, zIndex: 1 }}
        >
          <Block safe flex middle>
            <Block style={styles.registerContainer}>
              <Block flex>
                <Block flex={0.17} middle>
                  <Image
                    source={Images.LogoOnboarding}
                    style={{
                      width: 150,
                      height: 150,
                      zIndex: 2,
                      position: "relative",
                      marginTop: "60%",
                      marginBottom: 130,
                    }}
                  />
                </Block>
                <Block flex center>
                  <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior="padding"
                    enabled
                  >
                    <Block width={width * 0.8} style={{ marginBottom: 15, marginTop: 100 }}>
                      <Input
                        borderless
                        placeholder="ID"
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="hat-3"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                        onChangeText={(text) => this.setState({ memId: text })}
                      />
                    </Block>
                 
                    <Block width={width * 0.8 }>
                      <Input
                        password
                        borderless
                        placeholder="비밀번호"
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="padlock-unlocked"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                        onChangeText={(text) => this.setState({ memPw: text })}
                      />
                    </Block>
                    <Block width={width * 0.8} style={{ marginTop: 15 }}>
                      <Input
                        borderless
                        placeholder="이름"
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="hat-3"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                        onChangeText={(text) => this.setState({ memNm: text })}
                      />
                    </Block>
                    <Block width={width * 0.8} style={{ marginBottom: 15, marginTop: 20}}>
                      <Input
                        borderless
                        placeholder="이메일"
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="ic_mail_24px"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                        onChangeText={(text) => this.setState({ memEmail: text })}
                      />
                    </Block>
                    
                    <Block middle>
                      <Button color="primary" style={styles.createButton} onPress={this.handleCreateAccount}>
                        <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                          계정 생성
                        </Text>
                      </Button>
                    </Block>
                  </KeyboardAvoidingView>
                </Block>
              </Block>
            </Block>
          </Block>
        </ImageBackground>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  registerContainer: {
    width: width * 0.9,
    height: height * 0.875,
    backgroundColor: "#F4F5F7",
    borderRadius: 4,
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: "hidden",
  },
  inputIcons: {
    marginRight: 12,
  },
  createButton: {
    width: width * 0.5,
    marginTop: 25,
  },
});

export default Register;
