import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Button, FlatList } from 'react-native';
const dummyData = [{
  id: '1',
  title: 'Value Title 1',
  definition: 'Definition 1',
  life: 'Life 1'
}, {
  id: '2',
  title: 'Value Title 2',
  definition: 'Definition 2',
  life: 'Life 2'
} // Add more dummy data here
];

const ScreenComponent = () => {
  return <SafeAreaView style={_styles.qwYHACVD}>
      <View style={_styles.iNKxAvSM}>
        <Text style={_styles.rLhsGgBp}>Values</Text>
        <Text style={_styles.ECrLYDuo}>Filter by member</Text>
        <Text style={_styles.AGrXyCLW}>List of all members- Choose a member to see values assigned to them only</Text>
        <FlatList data={dummyData} keyExtractor={item => item.id} renderItem={({
        item
      }) => <View style={_styles.lhLmhtuK}>
              <Text style={_styles.IzIVeGyI}>{item.title}</Text>
              <Text style={_styles.RTqSlZOL}>{item.definition}</Text>
              <Text style={_styles.mIgblDpK}>{item.life}</Text>
              <View style={_styles.LjPHWXmD}>
                <Button title="Edit" onPress={() => {}} />
                <Button title="Remove" onPress={() => {}} />
              </View>
            </View>} />
        <Button title="Add new Value" onPress={() => {}} style={_styles.xiwmCadb} />
      </View>
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  qwYHACVD: {
    flex: 1,
    backgroundColor: "#fff"
  },
  iNKxAvSM: {
    padding: 20
  },
  rLhsGgBp: {
    fontSize: 24,
    fontWeight: "bold"
  },
  ECrLYDuo: {
    fontSize: 18,
    marginTop: 10
  },
  AGrXyCLW: {
    fontSize: 18,
    marginTop: 10
  },
  lhLmhtuK: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 10
  },
  IzIVeGyI: {
    fontSize: 18,
    fontWeight: "bold"
  },
  RTqSlZOL: {
    fontSize: 16,
    marginTop: 10
  },
  mIgblDpK: {
    fontSize: 16,
    marginTop: 10
  },
  LjPHWXmD: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },
  xiwmCadb: {
    marginTop: 20
  }
});