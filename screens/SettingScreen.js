import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as firebase from "firebase";

export default class SettingScreen extends React.Component {
    state = {
        email: "",
        displayName: ""
    };
    componentDidMount() {
        const { email, displayName } = firebase.auth().currentUser;

        this.setState({ email, displayName });
    }

    signOutUser = () => {
        firebase.auth().signOut();
    };
    render() {
        return (
            <View style={styles.container}>

                <TouchableOpacity style={styles.buttonAC}>
                    <Text style={{ color: "#FFF", fontWeight: "500" }}>บัญชีผู้ใช้</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonWord}>
                    <Text style={{ color: "#FFF", fontWeight: "500" }}>ล้างคำศัพท์</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonConfig}>
                    <Text style={{ color: "#FFF", fontWeight: "500" }}>ปรับแต่ง</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.ButtonOut} onPress={this.signOutUser}>
                    <Text style={{ color: "#FFF", fontWeight: "500" }}>ออกจากระบบ</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonAC: {
        marginTop: 5,
        marginHorizontal: 30,
        backgroundColor: "#4267B2",
        borderRadius: 4,
        height: 50,
        width: 180,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonWord: {
        marginTop: 10,
        marginHorizontal: 30,
        backgroundColor: "#4267B2",
        borderRadius: 4,
        height: 50,
        width: 180,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonConfig: {
        marginTop: 10,
        marginHorizontal: 30,
        backgroundColor: "#4267B2",
        borderRadius: 4,
        height: 50,
        width: 180,
        alignItems: "center",
        justifyContent: "center"
    },
    ButtonOut: {
        marginTop: 230,
        marginHorizontal: 30,
        backgroundColor: "#F1C40F",
        borderRadius: 4,
        height: 50,
        width: 180,
        alignItems: "center",
        justifyContent: "center"
    }
    
});
