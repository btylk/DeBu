import React from 'react';
import { SectionList, StyleSheet, Text, View, Platform, Alert,TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
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
  header: {
    marginBottom: 5,
    fontSize: 20,
    paddingLeft: 5,
    fontWeight: "bold"
  }
})

const SectionListBasics = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>คำศัพท์</Text>
        <SectionList
          sections={[
            {title: 'ก', data: ['กาก', 'กระจอก', 'กระทืบ']},
            {title: 'ข', data: ['ขี้ครอก', 'ขี้เหร่', 'ขยะสังคม']},
            {title: 'ค', data: ['ควย']},
            {title: 'ง', data: ['โง่']},
            {title: 'จ', data: ['จัญไร']},
            {title: 'ฉ', data: ['ฉิบหาย']},
            {title: 'ช', data: ['เชี่ย','ชาติชั่ว','ชิงหมาเกิด']},
            {title: 'ด', data: ['ดอกทอง','ดำ']},
            {title: 'ต', data: ['เตี้ย','ตลาดล่าง','ต่ำตม']},
            {title: 'ท', data: ['ทุเรศ']},
            {title: 'ป', data: ['ปัญญาอ่อน','ปากหมา']},
            {title: 'ป', data: ['ปัญญาอ่อน','ปากหมา']},
            {title: 'พ', data: ['พิการ']},
            {title: 'ม', data: ['มารยาททราม','ไม่มีมารยาท']},
            {title: 'ย', data: ['มารยาททราม','ไม่มีมารยาท']},
            {title: 'ร', data: ['รกโลก','แรด','ร่าน']},
            {title: 'ว', data: ['วอนตีน']},
            {title: 'ส', data: ['โสเภณี','เสร่อ','สถุน']},
            {title: 'ห', data: ['หน้าส้นตีน','หน้าโง่','หน้าปลวก']},
            {title: 'อ', data: ['อีดอก','อิเหี้ย','อีตอแหล']},

          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
}
export default SectionListBasics;