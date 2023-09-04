import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, TextInput, Button, Image, Text } from "react-native";

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState("");
  return <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={{
      uri: "https://tinyurl.com/42evm3m3"
    }} />
      <Text style={styles.title}>Forgot Password</Text>
      <TextInput style={styles.input} onChangeText={setEmail} value={email} placeholder="Enter registered email" keyboardType="email-address" />
      <View style={styles.buttonContainer}>
        <Button title="Submit" onPress={() => {}} />
        <Button title="Cancel" color="red" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5"
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  input: {
    height: 40,
    width: "80%",
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 20
  },
  buttonContainer: {
    width: "80%"
  }
});
export default ForgotPasswordScreen;