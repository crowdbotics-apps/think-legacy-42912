import React from 'react';
import { SafeAreaView, View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
const dummyData = [{
  id: '1',
  name: 'Goal 1',
  description: 'This is Goal 1',
  closedOn: '2021-09-01'
}, {
  id: '2',
  name: 'Goal 2',
  description: 'This is Goal 2',
  closedOn: '2021-09-02'
}, {
  id: '3',
  name: 'Goal 3',
  description: 'This is Goal 3',
  closedOn: '2021-09-03'
}];

const GoalScreen = ({
  navigation
}) => {
  const renderItem = ({
    item
  }) => <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('SpecificGoal', {
    goalId: item.id
  })}>
      <Image source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.date}>Closed On: {item.closedOn}</Text>
      </View>
    </TouchableOpacity>;

  return <SafeAreaView style={styles.container}>
      <FlatList data={dummyData} renderItem={renderItem} keyExtractor={item => item.id} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  item: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 10
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  info: {
    flex: 1
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  description: {
    fontSize: 14,
    color: '#888'
  },
  date: {
    fontSize: 12,
    color: '#aaa',
    marginTop: 4
  }
});
export default GoalScreen;