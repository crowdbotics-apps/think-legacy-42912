import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView, View, Text, Image, ScrollView, TouchableOpacity, TextInput } from "react-native";

const ScreenComponent = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={_styles.AOlvkdFk}>
      <ScrollView>
        <View style={_styles.gRtEmOtT}>
          <View style={_styles.ZBwfMtMP}>
            <Text style={_styles.NeMPSKTn}>App Name</Text>
            <View style={_styles.QlZIevZW}>
              <Pressable onPress={() => {
              navigation.navigate("ScreenAI3");
            }}><Text style={_styles.buttonText} onPress={() => {}}>Login</Text></Pressable>
              <Pressable onPress={() => {
              navigation.navigate("ScreenAI4");
            }}><Text style={_styles.buttonText} onPress={() => {}}>Register</Text></Pressable>
            </View>
          </View>

          <View style={_styles.WASejXrc}>
            <Image source={{
            uri: "https://tinyurl.com/42evm3m3"
          }} style={_styles.QtseIGoG} />
            <Text style={_styles.SSVkySPy}>Headline</Text>
            <Text>Sub-headline</Text>
            <Text>Text</Text>
          </View>

          <View>
            <Text style={_styles.TZVgyQow}>About Us</Text>
            <Text>Introduction</Text>
            <Text>Key Features</Text>
            <Image source={{
            uri: "https://tinyurl.com/42evm3m3"
          }} style={_styles.SlevyHaH} />
          </View>

          <View>
            <Text style={_styles.agZsfYvi}>Membership Options</Text>
            <Text>Subscription Plans</Text>
          </View>

          <View>
            <Text style={_styles.Cpvsbwzg}>FAQ</Text>
            <TouchableOpacity onPress={() => {}}>
              <Text>Question 1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <Text>Question 2</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Text style={_styles.RUxuLOxZ}>Contact Us</Text>
            <TextInput placeholder="Name" />
            <TextInput placeholder="Email" />
            <TextInput placeholder="Subject" />
            <TextInput placeholder="Message" />
            <Text style={_styles.buttonText} onPress={() => {}}>Send</Text>
            <Text>Contact Information</Text>
          </View>

          <View style={_styles.mzFEEMsg}>
            <Text>Terms and Conditions</Text>
            <Text>Privacy Policy</Text>
          </View>

          <View style={_styles.IcObpQAW}>
            <Text>Facebook</Text>
            <Text>Twitter</Text>
            <Text>Instagram</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  AOlvkdFk: {
    flex: 1
  },
  gRtEmOtT: {
    padding: 20
  },
  ZBwfMtMP: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  NeMPSKTn: {
    fontSize: 24,
    fontWeight: "bold"
  },
  QlZIevZW: {
    flexDirection: "row"
  },
  WASejXrc: {
    alignItems: "center",
    marginVertical: 20
  },
  QtseIGoG: {
    width: "100%",
    height: 200
  },
  SSVkySPy: {
    fontSize: 24,
    fontWeight: "bold"
  },
  TZVgyQow: {
    fontSize: 24,
    fontWeight: "bold"
  },
  SlevyHaH: {
    width: "100%",
    height: 200
  },
  agZsfYvi: {
    fontSize: 24,
    fontWeight: "bold"
  },
  Cpvsbwzg: {
    fontSize: 24,
    fontWeight: "bold"
  },
  RUxuLOxZ: {
    fontSize: 24,
    fontWeight: "bold"
  },
  mzFEEMsg: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  IcObpQAW: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  buttonText: {
    backgroundColor: '#2196F3',
    color: 'white',
    padding: 10,
    margin: 10,
    textAlign: 'center'
  }
});