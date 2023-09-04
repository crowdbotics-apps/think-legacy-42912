import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Button, Image, TextInput, Picker, FlatList, CheckBox } from 'react-native';

const ScreenComponent = () => {
  const dummyData = [{
    id: '1',
    name: 'Client 1',
    email: 'client1@example.com'
  }, {
    id: '2',
    name: 'Client 2',
    email: 'client2@example.com'
  }, {
    id: '3',
    name: 'Client 3',
    email: 'client3@example.com'
  }];
  return <SafeAreaView style={_styles.kMtwVmCW}>
      <View style={_styles.FvGxeswp}>
        <Button title="Manage Clients" />
        <Button title="Manage Templates" />
        <Button title="Manage Co-Adviser" />
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={_styles.virGmmDm} />
        <Button title="Complete Profile Setup/My Profile" />
        <Button title="Log Out" />

        <Text style={_styles.JhldsTbx}>Analytics</Text>

        <Text>Filter-</Text>
        <Text>By date</Text>
        <TextInput placeholder="Select Date" />
        <Text>Client</Text>
        <Picker>
          <Picker.Item label="Client 1" value="1" />
          <Picker.Item label="Client 2" value="2" />
          <Picker.Item label="Client 3" value="3" />
        </Picker>

        <TextInput placeholder="Search" />

        <FlatList data={dummyData} keyExtractor={item => item.id} renderItem={({
        item
      }) => <View>
              <CheckBox />
              <Text>{item.name}</Text>
              <Text>{item.email}</Text>
            </View>} />

        <Text>Graphical View</Text>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={_styles.APIWjAXD} />

        <Text>Number of New Clients</Text>
        <Text>Number of New Goals</Text>
        <Text>Number of Completed Goals</Text>
        <Text>Number of Delivered Goals</Text>
        <Text>Number of Closed Goals</Text>
        <Text>Number of In Progress Goals</Text>
        <Text>Number of Rescheduled Goals</Text>
        <Text>Number of Scheduled Goals</Text>
        <Text>Number of Tentative Goals</Text>

        <Text>Co-Adviser can see a list of assigned clients</Text>
        <Text>Client name</Text>
        <Text>Email address</Text>
      </View>
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  kMtwVmCW: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  FvGxeswp: {
    padding: 20
  },
  virGmmDm: {
    width: 50,
    height: 50
  },
  JhldsTbx: {
    fontSize: 24,
    fontWeight: "bold"
  },
  APIWjAXD: {
    width: "100%",
    height: 200
  }
});