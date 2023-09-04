import React from 'react';
import { SafeAreaView, View, Text, Image, Button, StyleSheet } from 'react-native';

const VisionScreen = () => {
  const visions = [{
    id: '1',
    title: 'Vision 1'
  }, {
    id: '2',
    title: 'Vision 2'
  }, {
    id: '3',
    title: 'Vision 3'
  }];
  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Vision</Text>
      <Text style={styles.subtitle}>List of all visions</Text>
      {visions.map(vision => <View key={vision.id} style={styles.visionCard}>
          <Image style={styles.visionImage} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
          <Text style={styles.visionTitle}>{vision.title}</Text>
          <Button title="Edit" onPress={() => {}} />
        </View>)}
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5'
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10
  },
  subtitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#666',
    marginBottom: 20
  },
  visionCard: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center'
  },
  visionImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10
  },
  visionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10
  }
});
export default VisionScreen;