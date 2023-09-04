import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, CheckBox, Picker, FlatList, TouchableOpacity } from 'react-native';

const ScreenComponent = () => {
  const [title, setTitle] = useState('');
  const [includeTOC, setIncludeTOC] = useState(false);
  const [includeCoverPage, setIncludeCoverPage] = useState(false);
  const [selectedReport, setSelectedReport] = useState('');
  const [reports, setReports] = useState([]);
  const [selectedReports, setSelectedReports] = useState([]);
  const reportList = ['Report 1', 'Report 2', 'Report 3'];

  const handleAddReport = () => {
    setReports([...reports, selectedReport]);
  };

  const handleSelectReport = report => {
    setSelectedReports([...selectedReports, report]);
  };

  return <SafeAreaView style={_styles.XRRaTZTY}>
      <Text>Title of Report</Text>
      <TextInput style={_styles.spjwTgcg} onChangeText={text => setTitle(text)} value={title} />
      <View style={_styles.oudafGOv}>
        <CheckBox value={includeTOC} onValueChange={setIncludeTOC} />
        <Text>Include TOC?</Text>
      </View>
      <View style={_styles.UDOcuYwH}>
        <CheckBox value={includeCoverPage} onValueChange={setIncludeCoverPage} />
        <Text>Include Cover Page?</Text>
      </View>
      <Picker selectedValue={selectedReport} onValueChange={itemValue => setSelectedReport(itemValue)}>
        {reportList.map((report, index) => <Picker.Item key={index} label={report} value={report} />)}
      </Picker>
      <Button title="Add report" onPress={handleAddReport} />
      <Text>List of all reports</Text>
      <FlatList data={reports} renderItem={({
      item
    }) => <View style={_styles.NobRHePX}>
            <CheckBox value={selectedReports.includes(item)} onValueChange={() => handleSelectReport(item)} />
            <Text>{item}</Text>
          </View>} keyExtractor={item => item} />
      <Text>List of all Selected Reports</Text>
      <FlatList data={selectedReports} renderItem={({
      item
    }) => <TouchableOpacity>
            <Text>{item}</Text>
          </TouchableOpacity>} keyExtractor={item => item} />
      <Button title="Build" onPress={() => {}} />
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  XRRaTZTY: {
    flex: 1,
    padding: 20
  },
  spjwTgcg: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  oudafGOv: {
    flexDirection: "row",
    alignItems: "center"
  },
  UDOcuYwH: {
    flexDirection: "row",
    alignItems: "center"
  },
  NobRHePX: {
    flexDirection: "row",
    alignItems: "center"
  }
});