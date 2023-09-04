import React from 'react';
import { SafeAreaView, StyleSheet, View, TextInput, Button, Image, Text } from 'react-native';

const App = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.appName}>App Name</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Email address" />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Forgot password" onPress={() => {}} />
        <Button title="Log in" onPress={() => {}} />
        <Button title="Create creator account" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 50
  },
  logo: {
    width: 100,
    height: 100
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10
  },
  buttonContainer: {
    width: '80%'
  }
});
export default App;