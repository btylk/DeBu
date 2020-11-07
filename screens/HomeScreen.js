import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import * as firebase from "firebase";

export default class HomeScreen extends React.Component {
    state = {
        url: ""
    };
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>หน้าหลัก</Text>
                <View style={styles.center}>
                    <Text style={styles.inputTitle}>URL</Text>
                        <TextInput
                            style={styles.input}
                            autoCapitalize="none"
                            onChangeText={url => this.setState({ url })}
                            value={this.state.url}
                    ></TextInput>
                
                <TouchableOpacity style={{...styles.button, marginTop: 32}}>
                    <Text style={{ color: "#FFF", fontWeight: "500" }}>บันทึก</Text>
                </TouchableOpacity>
                </View>
            </View>   
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
    },
    header: {
        marginBottom: 5,
        fontSize: 20,
        paddingLeft: 5,
        fontWeight: "bold",
        textAlign: "center"
    },
    button: {
        marginHorizontal: 30,
        backgroundColor: "#E9446A",
        borderRadius: 4,
        height: 52,
        width: 200,
        alignItems: "center",
        justifyContent: "center",
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
        color: "#161F3D",
        width: 300
    },
    center: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 200
    }
});
