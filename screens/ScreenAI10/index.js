import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

const TrialScreen = () => {
  const navigation = useNavigation();
  const [trialPeriod, setTrialPeriod] = useState(14);
  return <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{
      uri: "https://tinyurl.com/42evm3m3"
    }} />
      <Text style={styles.text}>
        You have {trialPeriod} days free trial period
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => {
      navigation.navigate("ScreenAI13");
    }}>
        <Text style={styles.buttonText}>OK</Text>
      </TouchableOpacity>

      <Text style={styles.text}>
        Your free trial period or subscription is ending
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>OK</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Subscribe</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    margin: 10
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 10,
    margin: 10,
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center'
  }
});
export default TrialScreen;