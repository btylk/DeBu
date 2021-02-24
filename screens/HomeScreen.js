import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import * as firebase from "firebase";

export default class HomeScreen extends React.Component {
    state = {
        url: "",
        hasError: false,
        users: {},
        status: false
    };
    constructor(props){
        super(props)
    }
    // getfetch = () => {
    //     fetch('http://127.0.0.1:8080/test_post',{
    //           method: 'GET',
    //           headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json',
    //           }
    //         })
    //     .then(response => response.json())
    //     // .then((responseJson) => {
    
    //     //    console.log(responseJson);
    
    //     // })
    //     .then(response => this.setState({users: response}))
    //     .catch((error) =>{
    //         console.error(error);
    //     });
    // }
    getfetch =()=> {
        // let formdata = new FormData();
        // formdata.append("input_value", this.state.url);
        fetch('https://flaskapiscrap.herokuapp.com/test_post',{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({'data':this.state.url})
        })
        .then(response => response.json())
        // .then((responseJson) =>{
        //     console.log(responseJson);
        // })
        .then(response => this.setState({users: response}))
        .catch(() => this.setState({ hasError: true}))
        // .then({'status': 'success'})

    }
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
                

                <TouchableOpacity style={styles.button} onPress={this.getfetch}>
                    <Text style={{ color: "#FFF", fontWeight: "500" }}>บันทึก</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate('Report',{data:JSON.stringify(this.state.users)})}>
                    <Text style={{ color: "#FFF", fontWeight: "500" }}>รายงาน</Text>
                </TouchableOpacity>
                <Text>{JSON.stringify(this.state.users)}</Text>
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
        marginTop: 20
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
