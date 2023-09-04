import React from "react";
import { SafeAreaView, StyleSheet, View, TextInput, TouchableOpacity, Image, Text } from "react-native";

const App = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={{
        uri: "https://tinyurl.com/42evm3m3"
      }} />
        <Text style={styles.appName}>App Name</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Email address" />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Forgot password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Create creator account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 50
  },
  logo: {
    width: 100,
    height: 100
  },
  appName: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10
  },
  inputContainer: {
    width: "80%",
    marginBottom: 20
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10
  },
  buttonContainer: {
    width: "80%"
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10
  },
  buttonText: {
    color: "#fff",
    textAlign: "center"
  }
});
export default App;