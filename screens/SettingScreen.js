import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, ScrollView } from "react-native";
// import * as firebase from "firebase";
import firebase from '../database/firebaseDb'
import { ThemeProvider, Button, Input, Image, ListItem, Badge} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
export default class SettingScreen extends React.Component {
    constructor() {
        super();

        this.firestoreRef = firebase.firestore().collection('user-data');
        this.state = {
            isLoading: true,
            userArr: []
        }
    }

    componentDidMount() {
        this.unsubscribe = this.firestoreRef.onSnapshot(this.getCollection);
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    getCollection = (querySnapShot) => {
        const userArr = [];
        querySnapShot.forEach((res) => {
            const { url, Title} = res.data();
            userArr.push({
                key: res.id,
                res,
                url,
                Title
            })
        })
        this.setState({
            userArr,
            isLoading: false
        })
    }

    render() {

        if (this.state.isLoading) {
            return (
                <View style={styles.preloader}>
                    <ActivityIndicator size="large" color="#9E9E9E" />
                </View>
            )
        }

        return(
            
            <ScrollView style={styles.List}>
                <Text style={styles.header}>รายการวิเคราะห์</Text>
                {
                    this.state.userArr.map((item, i) => {
                        return (
                            <ListItem
                                key={i}
                                bottomDivider
                                onPress={() => {
                                    this.props.navigation.navigate('Details', {
                                        userKey: item.key
                                    })
                                }}
                            >   
                                <Badge 
                                    value={i+1}
                                />
                                <ListItem.Content>
                                    {/* <ListItem.Title>{item.url}</ListItem.Title> */}
                                    <ListItem.Subtitle>{item.Title}</ListItem.Subtitle>
                                </ListItem.Content>
                                <ListItem.Chevron/>
                            </ListItem>
                        )
                    })
                }
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     padding:35
    //     // alignItems: "center",
    //     // justifyContent: "center"
    // },
    preloader: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'   
    },
    List: {
        paddingTop: 10
    },
    header: {
        marginTop: 10,
        marginBottom: 5,
        fontSize: 20,
        paddingLeft: 5,
        fontWeight: "bold",
        textAlign: "center"
    },
    // buttonAC: {
    //     marginTop: 5,
    //     marginHorizontal: 30,
    //     backgroundColor: "#4267B2",
    //     borderRadius: 4,
    //     height: 50,
    //     width: 180,
    //     alignItems: "center",
    //     justifyContent: "center"
    // },
    // buttonWord: {
    //     marginTop: 10,
    //     marginHorizontal: 30,
    //     backgroundColor: "#4267B2",
    //     borderRadius: 4,
    //     height: 50,
    //     width: 180,
    //     alignItems: "center",
    //     justifyContent: "center"
    // },
    // buttonConfig: {
    //     marginTop: 10,
    //     marginHorizontal: 30,
    //     backgroundColor: "#4267B2",
    //     borderRadius: 4,
    //     height: 50,
    //     width: 180,
    //     alignItems: "center",
    //     justifyContent: "center"
    // },
    // ButtonOut: {
    //     marginTop: 230,
    //     marginHorizontal: 30,
    //     backgroundColor: "#F1C40F",
    //     borderRadius: 4,
    //     height: 50,
    //     width: 180,
    //     alignItems: "center",
    //     justifyContent: "center"
    // }
    
});
