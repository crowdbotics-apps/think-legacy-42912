import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, TextInput, Button, TouchableOpacity, Linking } from 'react-native';

const SignUpScreen = () => {
  return <SafeAreaView style={_styles.xpkIBwcb}>
      <TextInput style={_styles.mRkpPIBV} placeholder="Email Address" />
      <View style={_styles.mnSuRURp}>
        <Text>User type:</Text>
        <Button title="Adviser" onPress={() => {}} />
        <Button title="Client" onPress={() => {}} />
      </View>
      <TextInput style={_styles.nlMmqLpv} placeholder="Full Name" />
      <TextInput style={_styles.xKxqPYCL} placeholder="Phone Number" />
      <TextInput style={_styles.CgXwJQMV} placeholder="Set Password" secureTextEntry />
      <TextInput style={_styles.ciqyJwwa} placeholder="Confirm Password" secureTextEntry />
      <Button title="Sign Up" onPress={() => {}} />
      <Button title="Cancel" onPress={() => {}} />
      <Text style={_styles.eJSJfofE}>
        By signing up, you agree to our{' '}
        <Text style={_styles.XwNNzgkS} onPress={() => Linking.openURL('https://tinyurl.com/42evm3m3')}>
          Terms and Conditions and Privacy Policy
        </Text>
      </Text>
      <View style={_styles.ItmAonXF}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={_styles.xwdyLQvz}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

export default SignUpScreen;

const _styles = StyleSheet.create({
  xpkIBwcb: {
    flex: 1,
    justifyContent: "center",
    padding: 20
  },
  mRkpPIBV: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20
  },
  mnSuRURp: {
    marginBottom: 20
  },
  nlMmqLpv: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20
  },
  xKxqPYCL: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20
  },
  CgXwJQMV: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20
  },
  ciqyJwwa: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20
  },
  eJSJfofE: {
    textAlign: "center",
    marginTop: 20
  },
  XwNNzgkS: {
    color: "blue"
  },
  ItmAonXF: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20
  },
  xwdyLQvz: {
    color: "blue"
  }
});