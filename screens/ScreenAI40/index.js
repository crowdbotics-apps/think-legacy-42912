import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Button, FlatList } from 'react-native';
const dummyData = [{
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  address: '123 Street'
}, {
  id: '2',
  name: 'Jane Doe',
  email: 'jane@example.com',
  address: '456 Avenue'
} // Add more dummy data as needed
];

const MemberScreen = () => {
  const renderItem = ({
    item
  }) => <View style={_styles.wPxEaJSM}>
      <Text style={_styles.nzcGCIes}>{item.name}</Text>
      <Text style={_styles.NtTVKwSo}>{item.email}</Text>
      <Text style={_styles.snRTzgwi}>{item.address}</Text>
      <View style={_styles.qPwpxaNG}>
        <Button title="Accept" onPress={() => {}} />
        <Button title="Reject" onPress={() => {}} />
      </View>
    </View>;

  return <SafeAreaView style={_styles.eThSBezQ}>
      <View style={_styles.dsrvxvXp}>
        <Text style={_styles.rBlAfPtI}>Client Name</Text>
        <Text style={_styles.JOfeFevw}>client@example.com</Text>
        <Button title="Add new member" onPress={() => {}} />
        <Text style={_styles.rABeJAMH}>Member add requests</Text>
        <FlatList data={dummyData} renderItem={renderItem} keyExtractor={item => item.id} />
      </View>
    </SafeAreaView>;
};

export default MemberScreen;

const _styles = StyleSheet.create({
  wPxEaJSM: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc"
  },
  nzcGCIes: {
    fontSize: 18
  },
  NtTVKwSo: {
    color: "gray"
  },
  snRTzgwi: {
    color: "gray"
  },
  qPwpxaNG: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },
  eThSBezQ: {
    flex: 1,
    backgroundColor: "#fff"
  },
  dsrvxvXp: {
    padding: 20
  },
  rBlAfPtI: {
    fontSize: 24,
    fontWeight: "bold"
  },
  JOfeFevw: {
    fontSize: 18,
    color: "gray",
    marginBottom: 20
  },
  rABeJAMH: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20
  }
});