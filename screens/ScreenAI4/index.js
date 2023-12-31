import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Linking } from "react-native";

const SignUpScreen = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={_styles.xpkIBwcb}>
      <TextInput style={_styles.mRkpPIBV} placeholder="Email Address" />
      <View style={_styles.mnSuRURp}>
        <Text>User type:</Text>
        <TouchableOpacity style={_styles.button} onPress={() => {}}>
          <Text style={_styles.buttonText}>Adviser</Text>
        </TouchableOpacity>
        <TouchableOpacity style={_styles.button} onPress={() => {}}>
          <Text style={_styles.buttonText}>Client</Text>
        </TouchableOpacity>
      </View>
      <TextInput style={_styles.nlMmqLpv} placeholder="Full Name" />
      <TextInput style={_styles.xKxqPYCL} placeholder="Phone Number" />
      <TextInput style={_styles.CgXwJQMV} placeholder="Set Password" secureTextEntry />
      <TextInput style={_styles.ciqyJwwa} placeholder="Confirm Password" secureTextEntry />
      <TouchableOpacity style={_styles.button} onPress={() => {
      navigation.navigate("ScreenAI9");
    }}>
        <Text style={_styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={_styles.button} onPress={() => {}}>
        <Text style={_styles.buttonText}>Cancel</Text>
      </TouchableOpacity>
      <Text style={_styles.eJSJfofE}>
        By signing up, you agree to our{" "}
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI7");
      }}><Text style={_styles.XwNNzgkS} onPress={() => Linking.openURL("https://tinyurl.com/42evm3m3")}>{"\n          Terms and Conditions and \n        "}</Text></Pressable>
      </Text>
      <View style={_styles.ItmAonXF}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={_styles.xwdyLQvz}>Login</Text>
        </TouchableOpacity>
      </View>
    <Pressable onPress={() => {
      navigation.navigate("ScreenAI8");
    }}><Text style={_styles.ahePgHxC}>{"Privacy Policy"}</Text></Pressable></SafeAreaView>;
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
    color: "blue",
    width: 196,
    height: 49
  },
  ItmAonXF: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20
  },
  xwdyLQvz: {
    color: "blue"
  },
  button: {
    backgroundColor: "#2196F3",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5
  },
  buttonText: {
    color: "#FFFFFF",
    textAlign: "center"
  },
  ahePgHxC: {
    width: 100,
    height: 24,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    position: "absolute",
    left: 191,
    top: -50,
    color: "#0042ff"
  }
});