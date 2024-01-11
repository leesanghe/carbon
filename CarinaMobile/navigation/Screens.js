import { Animated, Dimensions, Easing } from "react-native";
  // header for screens
  import { Header, Icon } from "../components";
  import { argonTheme, tabs } from "../constants";
  import Articles from "../screens/Articles";
  import { Block } from "galio-framework";
  // drawer
  import CustomDrawerContent from "./Menu";
  import Elements from "../screens/지역별 탄소 배출량";
  // screens
  import Home from "../screens/Home";
  import Onboarding from "../screens/Onboarding";
  import Pro from "../screens/Pro";
  import Profile from "../screens/EMP";
  import React from "react";
  import Register from "../screens/Register";
  import Login from "../screens/Login"
  import MyPage from "../screens/MyPage"
  import News from "../screens/News";
  import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
  import { createDrawerNavigator } from "@react-navigation/drawer";
  import { createStackNavigator } from "@react-navigation/stack";
import { element } from "prop-types";
import { elements } from "chart.js";
  const { width } = Dimensions.get("screen");
  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();
  const Tab = createBottomTabNavigator();
  function ElementsStack(props) {
    return (
      <Stack.Navigator
        initialRouteName="Elements"
        screenOptions={{
          mode: "card",
          headerShown:"screen",
        }}
      >
        <Stack.Screen
          name="지역별 탄소 배출량"
          component={Elements}  // Elements 스크린으로 변경
          options={{
            header: ({ navigation, scene }) => (
              <Header
              transparent
              white
              title="지역별 탄소 배출량"
              navigation={navigation}
              scene={scene}
            />
            ),
            cardStyle: { backgroundColor: "#FFFFFF" },
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="Pro"
          component={Pro}
          options={{
            header: ({ navigation, scene }) => (
              <Header
                title=""
                back
                white
                transparent
                navigation={navigation}
                scene={scene}
              />
            ),
            headerTransparent: true,
          }}
        />
      </Stack.Navigator>
    );
  }
  function ArticlesStack(props) {
    return (
      <Stack.Navigator
        screenOptions={{
          mode: "card",
          headerShown: "screen",
        }}
      >
        <Stack.Screen
          name="Articles"
          component={Articles}
          options={{
            header: ({ navigation, scene }) => (
              <Header title="Articles" navigation={navigation} scene={scene} />
            ),
            cardStyle: { backgroundColor: "#F8F9FE" },
          }}
        />
        <Stack.Screen
          name="Pro"
          component={Pro}
          options={{
            header: ({ navigation, scene }) => (
              <Header
                title=""
                back
                white
                transparent
                navigation={navigation}
                scene={scene}
              />
            ),
            headerTransparent: true,
          }}
        />
      </Stack.Navigator>
    );
  }
  function ProfileStack(props) {
    return (
      <Stack.Navigator
        initialRouteName="EMP"
        screenOptions={{
          mode: "card",
          headerShown: "screen",
        }}
      >
        <Stack.Screen
          name="EMP"
          component={Profile}
          options={{
            header: ({ navigation, scene }) => (
              <Header
                transparent
                white
                title="전력 예측 모델"
                navigation={navigation}
                scene={scene}
              />
            ),
            cardStyle: { backgroundColor: "#FFFFFF" },
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="Pro"
          component={Pro}
          options={{
            header: ({ navigation, scene }) => (
              <Header
                title="Pro"
                back
                white
                transparent
                navigation={navigation}
                scene={scene}
              />
            ),
            headerTransparent: true,
          }}
        />
      </Stack.Navigator>
    );
  }
  function HomeStack(props) {
    return (
      <Stack.Navigator
        screenOptions={{
          mode: "card",
          headerShown: "screen",
        }}
      >
        <Stack.Screen
          name="실천 일지"
          component={Home}
          options={{
            header: ({ navigation, scene }) => (
              <Header
                title="실천 일지"
                search
                options
                navigation={navigation}
                scene={scene}
              />
            ),
            cardStyle: { backgroundColor: "#F8F9FE" },
          }}
        />
        <Stack.Screen
          name="Pro"
          component={Pro}
          options={{
            header: ({ navigation, scene }) => (
              <Header
                title=""
                back
                white
                transparent
                navigation={navigation}
                scene={scene}
              />
            ),
            headerTransparent: true,
          }}
        />
      </Stack.Navigator>
    );
  }
  function NewsStack(props) {
    return (
      <Stack.Navigator
        screenOptions={{
          mode: "card",
          headerShown: "screen",
        }}
      >
        <Stack.Screen
          name="환경 뉴스"
          component={News}
          options={{
            header: ({ navigation, scene }) => (
              <Header
                title="환경 뉴스"
                search
                options
                navigation={navigation}
                scene={scene}
              />
            ),
            cardStyle: { backgroundColor: "#F8F9FE" },
          }}
        />
        <Stack.Screen
          name="Pro"
          component={Pro}
          options={{
            header: ({ navigation, scene }) => (
              <Header
                title=""
                back
                white
                transparent
                navigation={navigation}
                scene={scene}
              />
            ),
            headerTransparent: true,
          }}
        />
      </Stack.Navigator>
    );
  }
  export default function OnboardingStack(props) {
    return (
      <Stack.Navigator
        screenOptions={{
          mode: "card",
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          option={{
            headerTransparent: true,
          }}
        />
        <Stack.Screen name="App" component={AppStack} />
      </Stack.Navigator>
    );
  }

  function ActivityStack(props) {
    return (
      <Stack.Navigator
        screenOptions={{
          mode: "card",
          headerShown: "screen",
        }}
      >
        <Stack.Screen
          name="Activity"
          component={Activity}
          options={{
            header: ({ navigation, scene }) => (
              <Header
                title="Activity"
                search
                options
                navigation={navigation}
                scene={scene}
              />
            ),
            cardStyle: { backgroundColor: "#F8F9FE" },
          }}
        />
        <Stack.Screen
          name="Pro"
          component={Pro}
          options={{
            header: ({ navigation, scene }) => (
              <Header
                title=""
                back
                white
                transparent
                navigation={navigation}
                scene={scene}
              />
            ),
            headerTransparent: true,
          }}
        />
      </Stack.Navigator>
    );
  }
  function AppStack(props) {
    return (
      <Drawer.Navigator
        style={{ flex: 1 }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        drawerStyle={{
          backgroundColor: "white",
          width: width * 0.8,
        }}
        drawerContentOptions={{
          activeTintcolor: "white",
          inactiveTintColor: "#000",
          activeBackgroundColor: "transparent",
          itemStyle: {
            width: width * 0.75,
            backgroundColor: "transparent",
            paddingVertical: 16,
            paddingHorizonal: 12,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            overflow: "hidden",
          },
          labelStyle: {
            fontSize: 18,
            marginLeft: 12,
            fontWeight: "normal",
          },
        }}
        initialRouteName="Home"
      >
        <Drawer.Screen
          name="실천 일지"
          component={HomeStack}
          options={{
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="전력 예측 모델"
          component={ProfileStack}
          options={{
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="회원가입"
          component={Register}
          options={{
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="지역별 탄소 배출량"
          component={ElementsStack}
          options={{
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="환경 뉴스"
          component={NewsStack}
          options={{
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="로그인"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="마이 페이지"
          component={MyPage}
          options={{
            headerShown: false,
          }}
        />
        {/* <Drawer.Screen
          name="로그아웃"
          component={Login}
          options={{
            headerShown: false,
          }}
        /> */}
      </Drawer.Navigator>
    );
  }