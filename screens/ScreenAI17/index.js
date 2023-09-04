import { Pressable } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, Button, StyleSheet, FlatList } from 'react-native';
const dummyData = [{
  id: '1',
  name: 'Template 1'
}, {
  id: '2',
  name: 'Template 2'
}, {
  id: '3',
  name: 'Template 3'
}];

const ScreenComponent = () => {
  return <SafeAreaView style={styles.container}>
      <FlatList data={dummyData} keyExtractor={item => item.id} renderItem={({
      item
    }) => <View style={styles.itemContainer}>
            <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
            <Text style={styles.text}>{item.name}</Text>
            <Pressable><View style={styles.buttonContainer}>
              <Button title="Edit" onPress={() => {}} />
              <Button title="Delete" onPress={() => {}} />
            </View></Pressable>
          </View>} />
      <Button title="Add new goal template" onPress={() => {}} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5'
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  text: {
    flex: 1,
    fontSize: 16
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 100
  }
});
export default ScreenComponent;