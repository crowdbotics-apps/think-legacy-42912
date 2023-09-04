import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
const dummyData = [{
  id: '1',
  name: 'Member 1',
  complexityThreshold: 'High',
  strategyRiskTolerance: 'Low'
}, {
  id: '2',
  name: 'Member 2',
  complexityThreshold: 'Medium',
  strategyRiskTolerance: 'Medium'
}, {
  id: '3',
  name: 'Member 3',
  complexityThreshold: 'Low',
  strategyRiskTolerance: 'High'
}];

const ScreenComponent = () => {
  return <SafeAreaView style={_styles.ilwRPzXx}>
      <View style={_styles.wRWfdzKk}>
        <View style={_styles.hBZJxRaZ}>
          <Text style={_styles.KvJMrYWV}>Complexity Threshold</Text>
          <TouchableOpacity>
            <Image style={_styles.MsgeURCQ} source={{
            uri: 'https://tinyurl.com/42evm3m3'
          }} />
          </TouchableOpacity>
        </View>
        <FlatList data={dummyData} keyExtractor={item => item.id} renderItem={({
        item
      }) => <View style={_styles.TlCeKrIX}>
              <Text style={_styles.UwiJxEyh}>{item.name}</Text>
              <Text style={_styles.upCUykPb}>{item.complexityThreshold}</Text>
            </View>} />
        <View style={_styles.IJgGtfvH}>
          <Text style={_styles.GTRgxoRd}>Strategy Risk Tolerance</Text>
          <TouchableOpacity>
            <Image style={_styles.VdBzQdWd} source={{
            uri: 'https://tinyurl.com/42evm3m3'
          }} />
          </TouchableOpacity>
        </View>
        <FlatList data={dummyData} keyExtractor={item => item.id} renderItem={({
        item
      }) => <View style={_styles.ZIuKUjgX}>
              <Text style={_styles.CvkhWeIF}>{item.name}</Text>
              <Text style={_styles.aMPgDhnG}>{item.strategyRiskTolerance}</Text>
            </View>} />
      </View>
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  ilwRPzXx: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  wRWfdzKk: {
    padding: 20
  },
  hBZJxRaZ: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  KvJMrYWV: {
    fontSize: 24,
    fontWeight: "bold"
  },
  MsgeURCQ: {
    width: 24,
    height: 24
  },
  TlCeKrIX: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10
  },
  UwiJxEyh: {
    fontSize: 18
  },
  upCUykPb: {
    fontSize: 18
  },
  IJgGtfvH: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20
  },
  GTRgxoRd: {
    fontSize: 24,
    fontWeight: "bold"
  },
  VdBzQdWd: {
    width: 24,
    height: 24
  },
  ZIuKUjgX: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10
  },
  CvkhWeIF: {
    fontSize: 18
  },
  aMPgDhnG: {
    fontSize: 18
  }
});