import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, FlatList, Picker } from 'react-native';

const TeamScreen = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskStatus, setTaskStatus] = useState('');
  const [tasks, setTasks] = useState([{
    name: 'John Doe',
    email: 'john@example.com',
    task: 'Design UI',
    status: 'In Progress'
  }, {
    name: 'Jane Doe',
    email: 'jane@example.com',
    task: 'Develop Backend',
    status: 'Completed'
  }]);

  const addTask = () => {
    setTasks([...tasks, {
      task: taskTitle,
      description: taskDescription,
      status: taskStatus
    }]);
    setTaskTitle('');
    setTaskDescription('');
    setTaskStatus('');
  };

  return <SafeAreaView style={_styles.UVIRYKrb}>
      <FlatList data={tasks} keyExtractor={(item, index) => index.toString()} renderItem={({
      item
    }) => <View style={_styles.dvVOsTWP}>
            <Text>Name: {item.name}</Text>
            <Text>Email: {item.email}</Text>
            <Text>Task: {item.task}</Text>
            <Text>Status: {item.status}</Text>
          </View>} />
      <TextInput placeholder="Task Title" value={taskTitle} onChangeText={setTaskTitle} style={_styles.ZoCgPmkE} />
      <TextInput placeholder="Task Description" value={taskDescription} onChangeText={setTaskDescription} style={_styles.GPKdHmnO} />
      <Picker selectedValue={taskStatus} onValueChange={itemValue => setTaskStatus(itemValue)} style={_styles.MBTaHHEd}>
        <Picker.Item label="In Progress" value="In Progress" />
        <Picker.Item label="Completed" value="Completed" />
      </Picker>
      <Button title="Add Task" onPress={addTask} />
    </SafeAreaView>;
};

export default TeamScreen;

const _styles = StyleSheet.create({
  UVIRYKrb: {
    flex: 1,
    padding: 20
  },
  dvVOsTWP: {
    marginBottom: 20
  },
  ZoCgPmkE: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10
  },
  GPKdHmnO: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10
  },
  MBTaHHEd: {
    height: 50,
    width: 150
  }
});