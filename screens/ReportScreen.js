import React, { Component } from "react";
import { SectionList } from "react-native";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";

class ReportScreen extends React.Component {
    state = {
    // modalVisible: false
        users: {}
    };
    constructor(props){
        super(props)
    }
//   setModalVisible = (visible) => {
//     this.setState({ modalVisible: visible });
//   }
    // componentDidMount() {
    //     fetch('http://127.0.0.1:8080/test_post',{
    //         method: 'GET',
    //         headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json',
    //         }
    //     })
    //     .then(response => response.json())
    //     // .then((responseJson) =>{
    //     //     console.log(responseJson);
    //     // })
    //     .then(response => this.setState({users: response}))
    //     .catch(() => this.setState({ hasError: true}))
    // }


    render() {
        // const { modalVisible } = this.state;
        // const {data} = this.props.route.params
        const { navigation } = this.props; 
        const data_report = navigation.getParam('data')
        let JSObj = JSON.parse(data_report)
        return (
        <View style={styles.container}>
            <Text style={styles.header}>รายงาน</Text>
                <View style={styles.centeredView}>
                <Text>หัวข้อ: {JSON.stringify(JSObj.Title)}</Text>
                <Text>ขั้วอารมณ์ความคิดเห็น: {JSON.stringify(JSObj.Polarity)}</Text>
                <Text>ความคิดเห็น: {JSON.stringify(JSObj.Sentiment)}</Text>
                <Text>ประกาศหรือโฆษณา: {JSON.stringify(JSObj.Announcement)}</Text>
                <Text>ร้อยละคะแนนความมั่นใจ: {JSON.stringify(JSObj.Score)}</Text>
                <Text>คำทั้งหมด: {JSON.stringify(JSObj.All_word)}</Text>
                <Text>คำที่พบ: {JSON.stringify(JSObj.Word_found)}</Text>
                <Text>ร้อยละของคำที่พบ: {JSON.stringify(JSObj.Percent)}</Text>
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
    centeredView: {
        // flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 80,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 6,
        backgroundColor: "#E9446A",
        color: "#FFFFFF"


        
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 120,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        justifyContent: "center",
        alignContent: "center",
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 10,
        padding: 20,
        elevation: 2,
        width: 300,
        marginBottom: 10
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        fontSize: 18,
        marginBottom: 15,
        // textAlign: "left"
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 18,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
      },
      item: {
        padding: 10,
        fontSize: 18,
        height: 44,
      }
});

export default ReportScreen;