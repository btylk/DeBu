import React, { Component } from "react";
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
    modalVisible: false
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  render() {
    const { modalVisible } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.header}>รายงาน</Text>
            <View style={styles.centeredView}>
            <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
            }}
            >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>URL:</Text>
                    <Text style={styles.modalText}>ข้อความ:</Text>
                    <Text style={styles.modalText}>คำที่พบ:</Text>
                    <Text style={styles.modalText}>ภาพรวม:</Text>

                    <TouchableHighlight
                        style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                        onPress={() => {
                        this.setModalVisible(!modalVisible);
                        }}
                    >
                        <Text style={styles.textStyle}>ปิด</Text>
                    </TouchableHighlight>
                </View>
            </View>
            </Modal>
            <TouchableHighlight
            style={{...styles.openButton, backgroundColor: "#ffb447"}}
            onPress={() => {
                this.setModalVisible(true);
            }}
            >
            <Text style={styles.textStyle}>เทรนด์ร้อนประณามความรุนแรงต่อผู้ชุมนุม</Text>
            </TouchableHighlight>
            <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
            }}
            >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Hello World!</Text>
                    <Text style={styles.modalText}>Hello World!</Text>
                    <Text style={styles.modalText}>Hello World!</Text>
                    <Text style={styles.modalText}>Hello World!</Text>

                    <TouchableHighlight
                        style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                        onPress={() => {
                        this.setModalVisible(!modalVisible);
                        }}
                    >
                        <Text style={styles.textStyle}>ปิด</Text>
                    </TouchableHighlight>
                </View>
            </View>
            </Modal>
            <TouchableHighlight
            style={{ ...styles.openButton, backgroundColor: "#c33c23" }}
            onPress={() => {
                this.setModalVisible(true);
            }}
            >
            <Text style={styles.textStyle}>เสี่ยค้าไม้ป่วยโรคหัวใจ-เป็นหนี้ 25 ล้าน</Text>
            </TouchableHighlight>
            <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
            }}
            >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Hello World!</Text>
                    <Text style={styles.modalText}>Hello World!</Text>
                    <Text style={styles.modalText}>Hello World!</Text>
                    <Text style={styles.modalText}>Hello World!</Text>

                    <TouchableHighlight
                        style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                        onPress={() => {
                        this.setModalVisible(!modalVisible);
                        }}
                    >
                        <Text style={styles.textStyle}>ปิด</Text>
                    </TouchableHighlight>
                </View>
            </View>
            </Modal>
            <TouchableHighlight
            style={{ ...styles.openButton, backgroundColor: "#ffb447" }}
            onPress={() => {
                this.setModalVisible(true);
            }}
            >
            <Text style={styles.textStyle}>ประณามการใช้ความรุนแรงของรัฐบาล</Text>
            </TouchableHighlight>
            <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
            }}
            >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Hello World!</Text>
                    <Text style={styles.modalText}>Hello World!</Text>
                    <Text style={styles.modalText}>Hello World!</Text>
                    <Text style={styles.modalText}>Hello World!</Text>

                    <TouchableHighlight
                        style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                        onPress={() => {
                        this.setModalVisible(!modalVisible);
                        }}
                    >
                        <Text style={styles.textStyle}>ปิด</Text>
                    </TouchableHighlight>
                </View>
            </View>
            </Modal>
            <TouchableHighlight
            style={{ ...styles.openButton, backgroundColor: "#85de77" }}
            onPress={() => {
                this.setModalVisible(true);
            }}
            >
            <Text style={styles.textStyle}>เปิดคะแนนประสิทธิภาพ iPhone 12</Text>
            </TouchableHighlight>
            <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
            }}
            >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Hello World!</Text>
                    <Text style={styles.modalText}>Hello World!</Text>
                    <Text style={styles.modalText}>Hello World!</Text>
                    <Text style={styles.modalText}>Hello World!</Text>

                    <TouchableHighlight
                        style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                        onPress={() => {
                        this.setModalVisible(!modalVisible);
                        }}
                    >
                        <Text style={styles.textStyle}>ปิด</Text>
                    </TouchableHighlight>
                </View>
            </View>
            </Modal>
            <TouchableHighlight
            style={{ ...styles.openButton, backgroundColor: "#85de77" }}
            onPress={() => {
                this.setModalVisible(true);
            }}
            >
            <Text style={styles.textStyle}>20 ที่เที่ยวหน้าฝนทั่วไทย</Text>
            </TouchableHighlight>
            
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
        marginTop: 80
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
    }
});

export default ReportScreen;