import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, FlatList } from 'react-native';

const ScreenComponent = () => {
  const [coAdvisers, setCoAdvisers] = useState([{
    name: 'John Doe',
    email: 'john@example.com'
  }, {
    name: 'Jane Doe',
    email: 'jane@example.com'
  }]);
  const [goals, setGoals] = useState(['Goal 1', 'Goal 2', 'Goal 3']);
  const [newAdviser, setNewAdviser] = useState({
    name: '',
    email: ''
  });

  const removeAdviser = email => {
    setCoAdvisers(coAdvisers.filter(adviser => adviser.email !== email));
  };

  const addAdviser = () => {
    setCoAdvisers([...coAdvisers, newAdviser]);
    setNewAdviser({
      name: '',
      email: ''
    });
  };

  return <SafeAreaView style={_styles.UNsIwRmq}>
      <Text style={_styles.GuSsAUHS}>Co-Advisers</Text>
      <FlatList data={coAdvisers} keyExtractor={item => item.email} renderItem={({
      item
    }) => <View style={_styles.OvEGwzjR}>
            <Text>{item.name}</Text>
            <Text>{item.email}</Text>
            <Button title="Remove" onPress={() => removeAdviser(item.email)} />
          </View>} />
      <Text style={_styles.TvPkFDhC}>Assigned Goals</Text>
      <FlatList data={goals} keyExtractor={item => item} renderItem={({
      item
    }) => <Text>{item}</Text>} />
      <Text style={_styles.jkbTjcwl}>Add New Co-Adviser</Text>
      <TextInput style={_styles.aQIVNxJV} placeholder="Name" value={newAdviser.name} onChangeText={text => setNewAdviser({ ...newAdviser,
      name: text
    })} />
      <TextInput style={_styles.EJlPTjVc} placeholder="Email" value={newAdviser.email} onChangeText={text => setNewAdviser({ ...newAdviser,
      email: text
    })} />
      <Button title="Invite" onPress={addAdviser} />
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  UNsIwRmq: {
    flex: 1,
    padding: 20
  },
  GuSsAUHS: {
    fontSize: 24,
    fontWeight: "bold"
  },
  OvEGwzjR: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10
  },
  TvPkFDhC: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20
  },
  jkbTjcwl: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20
  },
  aQIVNxJV: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    marginTop: 10
  },
  EJlPTjVc: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    marginTop: 10
  }
});