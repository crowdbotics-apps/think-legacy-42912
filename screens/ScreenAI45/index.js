import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, Button, FlatList, CheckBox } from 'react-native';

const GoalItem = ({
  item,
  onEdit,
  onView
}) => {
  const [isSelected, setSelection] = useState(false);
  return <View style={_styles.BwWdlioG}>
      <Image source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} style={_styles.RDuRVWrY} />
      <View style={_styles.rKCaRRoX}>
        <Text style={_styles.TvohzedT}>{item.title}</Text>
        <Text>{item.description}</Text>
        <Text>{item.assignedTo}</Text>
      </View>
      <View style={_styles.aUuxCuxv}>
        <CheckBox value={isSelected} onValueChange={setSelection} />
        <Text>Included in planing map</Text>
      </View>
      <View style={_styles.QuoCEZdf}>
        <Button title="View" onPress={onView} />
        <Button title="Edit" onPress={onEdit} />
      </View>
    </View>;
};

const GoalsScreen = () => {
  const [goals, setGoals] = useState([{
    id: '1',
    title: 'Goal 1',
    description: 'Description 1',
    assignedTo: 'Team Member 1'
  }, {
    id: '2',
    title: 'Goal 2',
    description: 'Description 2',
    assignedTo: 'Team Member 2'
  } // Add more goals here
  ]);

  const handleEdit = () => {// Handle edit
  };

  const handleView = () => {// Handle view
  };

  const handleSave = () => {// Handle save
  };

  const handleCancel = () => {// Handle cancel
  };

  return <SafeAreaView style={_styles.HjGXNQNi}>
      <FlatList data={goals} keyExtractor={item => item.id} renderItem={({
      item
    }) => <GoalItem item={item} onEdit={handleEdit} onView={handleView} />} />
      <View style={_styles.cROtLOvi}>
        <Button title="Save" onPress={handleSave} />
        <Button title="Cancel" onPress={handleCancel} />
      </View>
    </SafeAreaView>;
};

export default GoalsScreen;

const _styles = StyleSheet.create({
  BwWdlioG: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
  },
  RDuRVWrY: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  rKCaRRoX: {
    flex: 1,
    marginLeft: 10
  },
  TvohzedT: {
    fontSize: 18,
    fontWeight: "bold"
  },
  aUuxCuxv: {
    flexDirection: "row",
    alignItems: "center"
  },
  QuoCEZdf: {
    flexDirection: "row"
  },
  HjGXNQNi: {
    flex: 1
  },
  cROtLOvi: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20
  }
});