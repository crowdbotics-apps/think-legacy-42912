import { Pressable } from "react-native";
import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, TextInput, Button, FlatList } from 'react-native';

const ClientScreen = () => {
  const clients = [{
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    address: '123 Main St',
    advisers: [{
      name: 'Adviser 1',
      email: 'adviser1@example.com'
    }, {
      name: 'Adviser 2',
      email: 'adviser2@example.com'
    }]
  } // More clients here...
  ];
  return <SafeAreaView style={_styles.tCAqsXBN}>
      <TextInput placeholder="Search" style={_styles.ezEfcXvl} />
      <View style={_styles.nkTBZYXv}>
        <Button title="By joining date" onPress={() => {}} />
        <Button title="Location" onPress={() => {}} />
        <Button title="Add new client" onPress={() => {}} />
      </View>
      <FlatList data={clients} keyExtractor={item => item.id} renderItem={({
      item
    }) => <View style={_styles.PFiDrXpH}>
            <Pressable><Text>{item.name}</Text></Pressable>
            <Text>{item.email}</Text>
            <Text>{item.address}</Text>
            <Text>Advisers:</Text>
            {item.advisers.map((adviser, index) => <View key={index}>
                <Text>{adviser.name}</Text>
                <Text>{adviser.email}</Text>
              </View>)}
            <Button title="Remove" onPress={() => {}} />
          </View>} />
      <View style={_styles.KdNyrRHe}>
        <Button title="Add new advisor" onPress={() => {}} />
        <Button title="See all advisers" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

export default ClientScreen;

const _styles = StyleSheet.create({
  tCAqsXBN: {
    flex: 1,
    backgroundColor: "#fff"
  },
  ezEfcXvl: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  nkTBZYXv: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  PFiDrXpH: {
    padding: 10,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1
  },
  KdNyrRHe: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});