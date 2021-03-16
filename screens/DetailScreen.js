import React, { Component } from 'react'
import { StyleSheet, ScrollView, ActivityIndicator, View, Text, Alert } from 'react-native'
import firebase from '../database/firebaseDb'
import { ThemeProvider, Button, Input, Image } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Dimensions } from "react-native";
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
class DetailScreen extends Component {
    constructor() {
        super();

        this.state = {
            url: '',
            Title: '',
            isLoading: true
        }
    }

    componentDidMount() {
        const { navigation } = this.props; 
        const userKey = navigation.getParam('userKey')
        const dbRef = firebase.firestore().collection('user-data').doc(userKey);
        dbRef.get().then((res) => {
            if (res.exists) {
                const user = res.data();
                this.setState({
                    key: res.id,
                    name: user.url,
                    Title: user.Title,
                    Polarity: user.Polarity,
                    Sentiment: user.Sentiment,
                    isLoading: false
                })
            } else {
                console.log('Document does not exist!');
            }
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
        const screenWidth = Dimensions.get("window").width;
        const data = [
            {
              name: "% คำเชิงลบต่อตนเอง",
              population: 10,
              color: "#93C2C6",
              legendFontColor: "#7F7F7F",
              legendFontSize: 12
            },
            {
              name: "% คำเชิงลบต่อผู้อื่น",
              population: 10,
              color: "#FDB196",
              legendFontColor: "#7F7F7F",
              legendFontSize: 12
            },
            {
              name: "% คำทั่วไป",
              population: 10,
              color: "#F7E37B",
              legendFontColor: "#7F7F7F",
              legendFontSize: 12
            },
        ];
        const chartConfig = {
            backgroundGradientFrom: "#1E2923",
            backgroundGradientFromOpacity: 0,
            backgroundGradientTo: "#08130D",
            backgroundGradientToOpacity: 0.5,
            color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
            strokeWidth: 2, // optional, default 3
            barPercentage: 0.5,
            useShadowColorFromDataset: false // optional
        };
        return(
            <View style={styles.container}>
                <Text style={styles.header}>รายงาน</Text>
                <Text style={styles.title}>ผลการวิเคราะห์ข้อมูล</Text>
                <View style={styles.graph}> 
                <PieChart
                    data={data}
                    width={screenWidth}
                    height={200}
                    chartConfig={chartConfig}
                    accessor={"population"}
                    backgroundColor={"transparent"}
                    paddingLeft={"0"}
                    center={[10, 10]}
                    absolute
                />
                </View>
                <View style={styles.centeredView}>
                    <Text style={styles.line_space}>หัวข้อ: {JSON.stringify(this.state.Title)}</Text>
                    <Text style={styles.line_space}>ขั้วอารมณ์ความคิดเห็น: {JSON.stringify(this.state.Polarity)}</Text>
                    <Text style={styles.line_space}>ความคิดเห็น: {JSON.stringify(this.state.Sentiment)}</Text>
                    {/* <Text style={styles.line_space}>ประกาศหรือโฆษณา: {JSON.stringify(JSObj.Announcement)}</Text>
                    <Text style={styles.line_space}>ร้อยละคะแนนความมั่นใจ: {JSON.stringify(JSObj.Score)}</Text> */}
                    {/* <Text style={styles.line_space}>คำทั้งหมด: {JSON.stringify(JSObj.All_word)} คำ</Text>
                    <Text style={styles.line_space}>คำเชิงลบต่อผู้อื่น</Text>
                    <Text style={styles.line_space_2nd}>{'\u25cf'} คำที่มีอารมณ์ตำหนิ รังเกียจ: {JSON.stringify(JSObj.Other_person.Bully_found)}</Text>
                    <Text style={styles.line_space}>คำเชิงลบต่อตนเอง</Text>
                    <Text style={styles.line_space_2nd}>{'\u25cf'} คำที่มีอารมณ์ไม่สบายใจ กดดัน: {JSON.stringify(JSObj.Itself.Desolate_found)}</Text>
                    <Text style={styles.line_space_2nd}>{'\u25cf'} คำที่มีอารมณ์เศร้า หดหู่: {JSON.stringify(JSObj.Itself.Depress_found)}</Text>
                    <Text style={styles.line_space}>เปอร์เซ็นต์ของคำที่พบ: {JSON.stringify(JSObj.Percent_found)} %</Text>
                    <Text style={styles.line_space}>เปอร์เซ็นต์ของคำที่เหลือ: {JSON.stringify(JSObj.Percent_left)} %</Text> */}
                    {/* <Text>จำนวนคำซึมเศร้าที่พบ: {JSON.stringify(JSObj.Other_person.All_depress)}</Text> */}
                </View>
            </View>
            
        )
    }
}


const theme = {
    Button: {
        raised: true
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
        textAlign: "left",
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 12,
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 6,
        color: "#FFFFFF",
        backgroundColor: "#A2E2F8", 
    },
    line_space:{
        borderBottomWidth: 5,
        borderBottomColor: "#A2E2F8"
        // color: "#7F7F7F"
    },
    line_space_2nd:{
        borderBottomWidth: 5,
        borderBottomColor: "#A2E2F8",
        marginLeft: 15
        // color: "#7F7F7F"
    },
    graph:{
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: '#FAD2A7',
        marginTop: 10,
        borderRadius: 10

    },
    title:{
        marginTop: 20,
        marginLeft: 20,
        color: "#7F7F7F"
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
})

export default DetailScreen;