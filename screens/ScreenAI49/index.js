import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, FlatList, Picker } from 'react-native';

const TeamScreen = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskStatus, setTaskStatus] = useState('');
  const [completedTasks, setCompletedTasks] = useState([]);
  const [teamMembers, setTeamMembers] = useState([{
    name: 'John Doe',
    email: 'john@example.com',
    task: 'Design UI',
    status: 'In Progress'
  }, {
    name: 'Jane Doe',
    email: 'jane@example.com',
    task: 'Backend Development',
    status: 'Completed'
  }]);

  const addTask = () => {
    setTeamMembers([...teamMembers, {
      name: 'New Member',
      email: 'new@example.com',
      task: taskTitle,
      status: taskStatus
    }]);
    setTaskTitle('');
    setTaskDescription('');
    setTaskStatus('');
  };

  return <SafeAreaView style={_styles.ZBfxgfiT}>
      <FlatList data={teamMembers} keyExtractor={(item, index) => index.toString()} renderItem={({
      item
    }) => <View style={_styles.rfCSusUK}>
            <Text>Name: {item.name}</Text>
            <Text>Email: {item.email}</Text>
            <Text>Assigned Task: {item.task}</Text>
            <Text>Status: {item.status}</Text>
          </View>} />
      <TextInput style={_styles.wWegymtf} onChangeText={text => setTaskTitle(text)} value={taskTitle} placeholder="Task Title" />
      <TextInput style={_styles.QOyOHZQF} onChangeText={text => setTaskDescription(text)} value={taskDescription} placeholder="Task Description" />
      <Picker selectedValue={taskStatus} style={_styles.uOedOMna} onValueChange={(itemValue, itemIndex) => setTaskStatus(itemValue)}>
        <Picker.Item label="In Progress" value="In Progress" />
        <Picker.Item label="Completed" value="Completed" />
      </Picker>
      <Button title="Add Task" onPress={addTask} />
    </SafeAreaView>;
};

export default TeamScreen;

const _styles = StyleSheet.create({
  ZBfxgfiT: {
    flex: 1,
    padding: 20
  },
  rfCSusUK: {
    marginBottom: 20
  },
  wWegymtf: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10
  },
  QOyOHZQF: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10
  },
  uOedOMna: {
    height: 50,
    width: 100
  }
});