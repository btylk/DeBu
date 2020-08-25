import React from "react";
// import FirebaseKeys from "./config";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";
import LoadingScreen from "./screens/LoadingScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import ReportScreen from "./screens/ReportScreen";
import VocabScreen from "./screens/VocabScreen";
import SettingScreen from "./screens/SettingScreen";
import Easing from "react-native";


import * as firebase from "firebase";


var firebaseConfig = {
  apiKey: "AIzaSyCpfSyHsVNug3HZHwPZkdMRjWfo_Nc15JI",
  authDomain: "phase-auth.firebaseapp.com",
  databaseURL: "https://phase-auth.firebaseio.com",
  projectId: "phase-auth",
  storageBucket: "phase-auth.appspot.com",
  messagingSenderId: "501380340215",
  appId: "1:501380340215:web:cf3c925a63f471303676f2",
  measurementId: "G-5DQBH5GX5T"
};

firebase.initializeApp(firebaseConfig);
const AppTabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => <Ionicons name="ios-home" size={24} color={tintColor} />
            }
        },
        Report: {
            screen: ReportScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => <Ionicons name="ios-stats" size={24} color={tintColor} />
            }
        },
        Vocab: {
            screen: VocabScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => <Ionicons name="ios-paper" size={24} color={tintColor} />
            }
        },
        Setting: {
            screen: SettingScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => <Ionicons name="ios-settings" size={24} color={tintColor} />
            }
        }
    },
    {
        tabBarOptions: {
            activeTintColor: "#161F3D",
            inactiveTintColor: "#B8BBC4",
            showLabel: false
        }
    }
);
// const AppStack = createStackNavigator({
//     Home: HomeScreen
// });

const AuthStack = createStackNavigator({
    Sign_In: LoginScreen,
    Sign_Up: RegisterScreen
});

export default createAppContainer(
    createSwitchNavigator(
        {
            Loading: LoadingScreen,
            App: AppTabNavigator,
            Auth: AuthStack
        },
        {
            initialRouteName: "Loading"
        }
    )
);
