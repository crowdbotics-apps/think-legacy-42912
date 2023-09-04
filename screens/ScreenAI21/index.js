import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const ScreenComponent = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={{
        uri: "https://tinyurl.com/42evm3m3"
      }} />
        <Text style={styles.title}>Side Menu</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => {
      navigation.navigate("ScreenAI39");
    }}>
        <Text style={styles.buttonText}>View</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {
      navigation.navigate("ScreenAI40");
    }}>
        <Text style={styles.buttonText}>Members</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {
      navigation.navigate("ScreenAI42");
    }}>
        <Text style={styles.buttonText}>Engagement</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {
      navigation.navigate("ScreenAI43");
    }}>
        <Text style={styles.buttonText}>Vision</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {
      navigation.navigate("ScreenAI44");
    }}>
        <Text style={styles.buttonText}>Values</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {
      navigation.navigate("ScreenAI45");
    }}>
        <Text style={styles.buttonText}>Goal Clarity / Goal Achievement</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {
      navigation.navigate("ScreenAI46");
    }}>
        <Text style={styles.buttonText}>Planning Map</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {
      navigation.navigate("ScreenAI47");
    }}>
        <Text style={styles.buttonText}>Closed Goals</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {
      navigation.navigate("ScreenAI48");
    }}>
        <Text style={styles.buttonText}>Team</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {
      navigation.navigate("ScreenAI50");
    }}>
        <Text style={styles.buttonText}>Complexity & Strategy</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {
      navigation.navigate("ScreenAI51");
    }}>
        <Text style={styles.buttonText}>Legacy Questionnaire</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Family Business Questionnaire</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Business Questionnaire</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Family Legacy Questionnaire</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Reports</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Report Builder</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Planning Table</Text>
      </TouchableOpacity>
    <Pressable onPress={() => {
      navigation.navigate("ScreenAI49");
    }}><Text style={styles.CQOqFqsS}>{"Planning table "}</Text></Pressable></SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5"
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#FFFFFF"
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  title: {
    fontSize: 24,
    fontWeight: "bold"
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    margin: 10
  },
  buttonText: {
    fontSize: 18
  },
  CQOqFqsS: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});
export default ScreenComponent;