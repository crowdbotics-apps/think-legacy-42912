import React from 'react';
import { SafeAreaView, View, Text, Button, Image, StyleSheet, FlatList } from 'react-native';
const dummyData = [{
  id: '1',
  title: 'Goal title',
  beginPeriod: '01/01/2022',
  endPeriod: '31/12/2022',
  status: 'In Progress',
  note: 'Level 2',
  customDescription: 'This is a custom description',
  customTitle: 'Optional Custom Title'
} // Add more data as needed
];

const GoalScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Active Goals</Text>
        <Button title="Edit" onPress={() => {}} />
      </View>
      <FlatList data={dummyData} keyExtractor={item => item.id} renderItem={({
      item
    }) => <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text>Begin Period: {item.beginPeriod}</Text>
            <Text>End Period: {item.endPeriod}</Text>
            <Text>Status: {item.status}</Text>
            <Text>Note: {item.note}</Text>
            <Text>Custom Description: {item.customDescription}</Text>
            <Text>Custom Title: {item.customTitle}</Text>
            <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
          </View>} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  card: {
    backgroundColor: '#fff',
    marginBottom: 20,
    padding: 20,
    borderRadius: 10
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  image: {
    width: '100%',
    height: 200,
    marginTop: 10
  }
});
export default GoalScreen;