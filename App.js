import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { creatStackNavigator, createStackNavigator } from "react-navigation-stack";
import LoadingScreen from "./components/LoadingScreen";
import LoginScreen from "./components/LoginScreen";
import RegisterScreen from "./components/RegisterScreen";
import HomeScreen from "./components/HomeScreen";

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

const AppStack = createStackNavigator({
    Home: HomeScreen
});

const AuthStack = createStackNavigator({
    Sign_In: LoginScreen,
    Sign_Up: RegisterScreen
});

export default createAppContainer(
    createSwitchNavigator(
        {
            Loading: LoadingScreen,
            App: AppStack,
            Auth: AuthStack
        },
        {
            initialRouteName: "Loading"
        }
    )
);
