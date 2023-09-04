import React from 'react';
import { SafeAreaView, View, Text, Image, Button, StyleSheet } from 'react-native';

const ClientScreen = () => {
  const clientData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    meetingDate: '2022-01-01',
    address1: '123 Main St',
    address2: 'Apt 4B',
    city: 'New York',
    state: 'NY',
    zip: '10001',
    country: 'USA',
    coAdvisor: 'Jane Smith'
  };
  return <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <Text style={styles.title}>Client Name: {clientData.name}</Text>
      <Text style={styles.text}>Email Address: {clientData.email}</Text>
      <Text style={styles.text}>Phone Number: {clientData.phone}</Text>
      <Text style={styles.text}>Discovery Meeting Date: {clientData.meetingDate}</Text>
      <Text style={styles.text}>Address 1: {clientData.address1}</Text>
      <Text style={styles.text}>Address 2: {clientData.address2}</Text>
      <Text style={styles.text}>City: {clientData.city}</Text>
      <Text style={styles.text}>State/Province: {clientData.state}</Text>
      <Text style={styles.text}>Zip-code: {clientData.zip}</Text>
      <Text style={styles.text}>Country: {clientData.country}</Text>
      <Text style={styles.text}>Co-Advisor: {clientData.coAdvisor}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Edit" onPress={() => {}} />
        <Button title="Delete" onPress={() => {}} />
        <Button title="View members" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5'
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  text: {
    fontSize: 18,
    marginBottom: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  }
});
export default ClientScreen;