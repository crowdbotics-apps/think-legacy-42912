import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, Button, FlatList } from 'react-native';
const reports = [{
  id: '1',
  name: 'Report 1'
}, {
  id: '2',
  name: 'Report 2'
}, {
  id: '3',
  name: 'Report 3'
}];

const ReportScreen = () => {
  return <SafeAreaView style={_styles.GiBwJZHB}>
      <View style={_styles.ssQYGfSm}>
        <Text style={_styles.unmtteWl}>Report History</Text>
        <FlatList data={reports} keyExtractor={item => item.id} renderItem={({
        item
      }) => <View style={_styles.vXBQqurH}>
              <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={_styles.nKrqJChh} />
              <Text style={_styles.HopRxCyt}>{item.name}</Text>
              <View style={_styles.SHUoeVSg}>
                <Button title="View" onPress={() => {}} />
                <Button title="Download" onPress={() => {}} />
              </View>
            </View>} />
      </View>
    </SafeAreaView>;
};

export default ReportScreen;

const _styles = StyleSheet.create({
  GiBwJZHB: {
    flex: 1,
    backgroundColor: "#fff"
  },
  ssQYGfSm: {
    padding: 20
  },
  unmtteWl: {
    fontSize: 24,
    fontWeight: "bold"
  },
  vXBQqurH: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10
  },
  nKrqJChh: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  HopRxCyt: {
    flex: 1,
    marginLeft: 10
  },
  SHUoeVSg: {
    flexDirection: "row"
  }
});