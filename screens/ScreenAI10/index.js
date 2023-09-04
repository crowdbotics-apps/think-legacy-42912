import React, { useState } from 'react';
import { SafeAreaView, Text, Button, Image, StyleSheet } from 'react-native';

const TrialScreen = () => {
  const [trialPeriod, setTrialPeriod] = useState(14);
  return <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <Text style={styles.text}>
        You have {trialPeriod} days free trial period
      </Text>
      <Button title="OK" onPress={() => {}} />

      <Text style={styles.text}>
        Your free trial period or subscription is ending
      </Text>
      <Button title="OK" onPress={() => {}} />
      <Button title="Subscribe" onPress={() => {}} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10
  }
});
export default TrialScreen;