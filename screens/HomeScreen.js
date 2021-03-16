import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ActivityIndicator, Image } from "react-native";
// import * as firebase from "firebase";
import firebase from '../database/firebaseDb'
import { Dimensions } from "react-native";

export default class HomeScreen extends React.Component {
    // state = {
    //     url: "",
    //     hasError: false,
    //     users: {},
    // };
    constructor(props){
        super(props);
        this.dbRef = firebase.firestore().collection('user-data');
        this.state = {
            url: "",
            hasError: false,
            users: {},
            isLoading: false
        }
    }
    inputValueUpdate = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
    }
    storeData() {
        if (this.state.url == ''){
            alert('กรุณากรอก URL');
        } else{
            this.setState({
                isLoading: true
            })
            this.dbRef.add({
                url: this.state.url,
                Title: JSON.stringify(this.state.users.Title),
                Polarity: JSON.stringify(this.state.users.Polarity),
                Sentiment: JSON.stringify(this.state.users.Sentiment),
                All_word: JSON.stringify(this.state.users.All_word),
                Bully_found: JSON.stringify(this.state.users.Other_person.Bully_found),
                All_bully: JSON.stringify(this.state.users.Other_person.All_bully),
                Depress_found: JSON.stringify(this.state.users.Itself.Depress_found),
                All_depress: JSON.stringify(this.state.users.Itself.All_depress),
                Desolate_found: JSON.stringify(this.state.users.Itself.Desolate_found),
                All_desolate: JSON.stringify(this.state.users.Itself.All_desolate),
                Percent_found: JSON.stringify(this.state.users.Percent_found),
                Percent_left: JSON.stringify(this.state.users.Percent_left),
                Percent_bully: JSON.stringify(this.state.users.Percent_bully),
                Percent_depress: JSON.stringify(this.state.users.Percent_depress),
                Percent_desolate: JSON.stringify(this.state.users.Percent_desolate)

            }).then((res) => {
                this.setState({
                    url: "",
                    Title: "",
                    Polarity: "",
                    Sentiment: "",
                    All_word: "",
                    Bully_found: "",
                    All_bully: "",
                    Depress_found: "",
                    All_depress: "",
                    Desolate_found: "",
                    All_desolate: "",
                    Percent_found: "",
                    Percent_left: "",
                    Percent_bully: "",
                    Percent_depress: "",
                    Percent_desolate: "",
                    isLoading: false
                })
                // this.props.navigation.navigate('Setting')
                // this.props.navigation.navigate('Report',{data:JSON.stringify(this.state.users)})
            })
            .catch((err) => {
                console.log('Error found: ', err)
                this.setState({
                    isLoading: false
                })
            })

        }
    }
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
        // this.setState({
        //     isLoading: true
        // })
        // this.setState({isLoading:true})
        .then(response => response.json())
            
        // .then((responseJson) =>{
        //     console.log(responseJson);
        // })
        .then((response) => {
            this.setState({
                users: response})
            this.storeData()
            // this.props.navigation.navigate('Setting')
            this.props.navigation.navigate('Report',{data:JSON.stringify(this.state.users)})
        })
            
        .catch(() => this.setState({ hasError: true}))
        // .then({'status': 'success'})
        // this.setState({isLoading:false})

    }
    
    render() {
        let Image_Http_URL ={ uri: 'https://www.flaticon.com/free-icon/url_1089290?term=url&page=1&position=22&page=1&position=22&related_id=1089290&origin=search'};
        const screenWidth = Dimensions.get("window").width;
        if(this.state.isLoading){
            return(
                <View style={styles.preloader}>
                    <ActivityIndicator size="large" color="#9E9E9E" />
                </View>
            )
        }
        return (
            <View style={styles.container}>
                {/* <Text style={styles.header}>หน้าหลัก</Text> */}
                <View style={styles.border}>
                    <View style={styles.center}>
                        <Image source={require('./www1.png')} style = {{height: 89, width: 89, resizeMode : 'stretch', margin: 20, marginBottom: 20 }}/>
                        {/* <Image source={Image_Http_URL} style = {{height: 196, width: 157, margin: 5 }} /> */}
                        <Text style={styles.inputTitle}>URL เว็บไซต์ที่ต้องการวิเคราะห์</Text>
                            <TextInput
                                style={styles.input}
                                autoCapitalize="none"
                                onChangeText={url => this.setState({ url }), (val) => this.inputValueUpdate(val, 'url') }
                                
                                value={this.state.url}
                                // onChangeText={(val) => this.inputValueUpdate(val, 'url')}
                        ></TextInput>
                    

                    <TouchableOpacity style={styles.button} onPress={this.getfetch}>
                        <Text style={{ color: "#FFF", fontWeight: "500" }}>บันทึก</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate('Report',{data:JSON.stringify(this.state.users)})}>
                        <Text style={{ color: "#FFF", fontWeight: "500" }}>รายงาน</Text>
                    </TouchableOpacity> */}
                    {/* <TouchableOpacity style={styles.button} onPress={()=>this.storeData()}>
                        <Text style={{ color: "#FFF", fontWeight: "500" }}>database</Text>
                    </TouchableOpacity>
                    <Text>{JSON.stringify(this.state.users.Title)}</Text> */}
                    </View>

                </View>
            </View>   
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
        backgroundColor: "#75BDE0"
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
        backgroundColor: "#F3533A",
        borderRadius: 4,
        height: 52,
        width: 200,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        marginBottom: 20,
    },
    inputTitle: {
        color: "#8A8F9E",
        fontSize: 12,
        textTransform: "uppercase",
    },
    input: {
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#161F3D",
        width: 300,
        backgroundColor: "#F0F3F4",
        borderRadius: 5
    },
    center: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        
        // backgroundColor: "#4267B2"
    },
    border: {
        justifyContent: "center",
        // textAlign: "left",
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 12,
        marginTop: 170,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 6,
        color: "#FFFFFF",
        backgroundColor: "#FFFFFF",
    },
    preloader: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'   
    }
});
