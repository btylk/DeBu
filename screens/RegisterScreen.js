import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import * as firebase from "firebase";

export default class RegisterScreen extends React.Component {
    state = {
        name: "",
        email: "",
        password: "",
        errorMessage: null
    };

    handleSignUp = () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(userCredentials => {
                return userCredentials.user.updateProfile({
                    displayName: this.state.name
                });
            })
            .catch(error => this.setState({ errorMessage: error.message }));
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.greeting}>{`ลงทะเบียน`}</Text>

                <View style={styles.errorMessage}>
                    {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                </View>

                <View style={styles.form}>
                    <View>
                        <Text style={styles.inputTitle}>ชื่อผู้ใช้</Text>
                        <TextInput
                            style={styles.input}
                            autoCapitalize="none"
                            onChangeText={name => this.setState({ name })}
                            value={this.state.name}
                        ></TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={styles.inputTitle}>อีเมลล์</Text>
                        <TextInput
                            style={styles.input}
                            autoCapitalize="none"
                            onChangeText={email => this.setState({ email })}
                            value={this.state.email}
                        ></TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={styles.inputTitle}>รหัสผ่าน</Text>
                        <TextInput
                            style={styles.input}
                            secureTextEntry
                            autoCapitalize="none"
                            onChangeText={password => this.setState({ password })}
                            value={this.state.password}
                        ></TextInput>
                    </View>
                </View>

                <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
                    <Text style={{ color: "#FFF", fontWeight: "500" }}>ลงชื่อเข้าใช้</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ alignSelf: "center", marginTop: 32 }}
                    onPress={() => this.props.navigation.navigate("Sign_In")}
                >
                    <Text style={{ color: "#414959", fontSize: 13 }}>
                        มีบัญชีอยู่แล้ว? <Text style={{ fontWeight: "500", color: "#E9446A" }}>เข้าสู่ระบบ</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    greeting: {
        marginTop: 32,
        fontSize: 18,
        fontWeight: "400",
        textAlign: "center",
        textTransform: "uppercase"
    },
    errorMessage: {
        height: 72,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 30
    },
    error: {
        color: "#E9446A",
        fontSize: 13,
        fontWeight: "600",
        textAlign: "center"
    },
    form: {
        marginBottom: 48,
        marginHorizontal: 30
    },
    inputTitle: {
        color: "#8A8F9E",
        fontSize: 10,
        textTransform: "uppercase"
    },
    input: {
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#161F3D"
    },
    button: {
        marginHorizontal: 30,
        backgroundColor: "#E9446A",
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: "center"
    }
});
