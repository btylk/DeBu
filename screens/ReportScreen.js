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
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
import { Dimensions } from "react-native";
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
        const screenWidth = Dimensions.get("window").width;
        const { navigation } = this.props; 
        const data_report = navigation.getParam('data')
        let JSObj = JSON.parse(data_report)
        const data = [
            {
              name: "% คำเชิงลบต่อตนเอง",
              population: JSObj.Percent_depress + JSObj.Percent_desolate,
              color: "#93C2C6",
              legendFontColor: "#7F7F7F",
              legendFontSize: 12
            },
            {
              name: "% คำเชิงลบต่อผู้อื่น",
              population: JSObj.Percent_bully,
              color: "#FDB196",
              legendFontColor: "#7F7F7F",
              legendFontSize: 12
            },
            {
              name: "% คำทั่วไป",
              population: JSObj.Percent_left,
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
        return (
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
            {/* <LineChart
                    data={{
                    labels: ["January", "February"],
                    datasets: [
                        {
                        data: [
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            JSObj.Percent_found
                        ]
                        }
                    ]
                    }}
                    width={Dimensions.get("window").width-40} // from react-native
                    height={220}
                    yAxisLabel=""
                    yAxisSuffix="%"
                    yAxisInterval={1} // optional, defaults to 1
                    chartConfig={{
                    backgroundColor: "#e26a00",
                    backgroundGradientFrom: "#fb8c00",
                    backgroundGradientTo: "#ffa726",
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#ffa726"
                    }
                    }}
                    bezier
                    style={{
                    marginVertical: 8,
                    borderRadius: 16
                    }}
                 /> */}
            </View>
                <View style={styles.centeredView}>
                    <Text style={styles.line_space}>หัวข้อ: {JSON.stringify(JSObj.Title)}</Text>
                    <Text style={styles.line_space}>ขั้วอารมณ์ความคิดเห็น: {JSON.stringify(JSObj.Polarity)}</Text>
                    <Text style={styles.line_space}>ความคิดเห็น: {JSON.stringify(JSObj.Sentiment)}</Text>
                    {/* <Text style={styles.line_space}>ประกาศหรือโฆษณา: {JSON.stringify(JSObj.Announcement)}</Text>
                    <Text style={styles.line_space}>ร้อยละคะแนนความมั่นใจ: {JSON.stringify(JSObj.Score)}</Text> */}
                    <Text style={styles.line_space}>คำทั้งหมด: {JSON.stringify(JSObj.All_word)} คำ</Text>
                    <Text style={styles.line_space}>คำเชิงลบต่อผู้อื่น</Text>
                    <Text style={styles.line_space_2nd}>{'\u25cf'} คำที่มีอารมณ์ตำหนิ รังเกียจ: {JSON.stringify(JSObj.Other_person.Bully_found)}</Text>
                    <Text style={styles.line_space}>คำเชิงลบต่อตนเอง</Text>
                    <Text style={styles.line_space_2nd}>{'\u25cf'} คำที่มีอารมณ์ไม่สบายใจ กดดัน: {JSON.stringify(JSObj.Itself.Desolate_found)}</Text>
                    <Text style={styles.line_space_2nd}>{'\u25cf'} คำที่มีอารมณ์เศร้า หดหู่: {JSON.stringify(JSObj.Itself.Depress_found)}</Text>
                    <Text style={styles.line_space}>เปอร์เซ็นต์ของคำที่พบ: {JSON.stringify(JSObj.Percent_found)} %</Text>
                    <Text style={styles.line_space}>เปอร์เซ็นต์ของคำที่เหลือ: {JSON.stringify(JSObj.Percent_left)} %</Text>
                    {/* <Text>จำนวนคำซึมเศร้าที่พบ: {JSON.stringify(JSObj.Other_person.All_depress)}</Text> */}
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
        textAlign: "left",
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 12,
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 6,
        color: "#FFFFFF",
        backgroundColor: "#FA8072", 
    },
    line_space:{
        borderBottomWidth: 5,
        borderBottomColor: "#FA8072"
        // color: "#7F7F7F"
    },
    line_space_2nd:{
        borderBottomWidth: 5,
        borderBottomColor: "#FA8072",
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
      }
});

export default ReportScreen;