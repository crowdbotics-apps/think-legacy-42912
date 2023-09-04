import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, Switch, StyleSheet } from "react-native";

const ManageSubscriptionScreen = () => {
  const navigation = useNavigation();
  const [isNotificationEnabled, setNotificationEnabled] = useState(false);
  const [isEmailNotificationEnabled, setEmailNotificationEnabled] = useState(false);
  const [isSMSNotificationEnabled, setSMSNotificationEnabled] = useState(false);

  const toggleNotificationSwitch = () => setNotificationEnabled(previousState => !previousState);

  const toggleEmailNotificationSwitch = () => setEmailNotificationEnabled(previousState => !previousState);

  const toggleSMSNotificationSwitch = () => setSMSNotificationEnabled(previousState => !previousState);

  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Current Plan Details</Text>
      <Text style={styles.details}>Expiry Date: 2022-12-31</Text>
      <TouchableOpacity style={styles.button} onPress={() => {
      navigation.navigate("ScreenAI9");
    }}>
        <Text style={styles.buttonText}>Subscribe</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Unsubscribe</Text>
      </TouchableOpacity>
      <View style={styles.switchContainer}>
        <Text>Notifications</Text>
        <Switch trackColor={{
        false: "#767577",
        true: "#81b0ff"
      }} thumbColor={isNotificationEnabled ? "#f5dd4b" : "#f4f3f4"} onValueChange={toggleNotificationSwitch} value={isNotificationEnabled} />
      </View>
      <View style={styles.switchContainer}>
        <Text>Email Notifications</Text>
        <Switch trackColor={{
        false: "#767577",
        true: "#81b0ff"
      }} thumbColor={isEmailNotificationEnabled ? "#f5dd4b" : "#f4f3f4"} onValueChange={toggleEmailNotificationSwitch} value={isEmailNotificationEnabled} />
      </View>
      <View style={styles.switchContainer}>
        <Text>SMS Notifications</Text>
        <Switch trackColor={{
        false: "#767577",
        true: "#81b0ff"
      }} thumbColor={isSMSNotificationEnabled ? "#f5dd4b" : "#f4f3f4"} onValueChange={toggleSMSNotificationSwitch} value={isSMSNotificationEnabled} />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => {
      navigation.navigate("ScreenAI8");
    }}>
        <Text style={styles.buttonText}>Privacy Policy</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {
      navigation.navigate("ScreenAI7");
    }}>
        <Text style={styles.buttonText}>Terms and Conditions</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {
      navigation.navigate("ScreenAI38");
    }}>
        <Text style={styles.buttonText}>Change Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {
      navigation.navigate("ScreenAI391");
    }}>
        <Text style={styles.buttonText}>Support/Send Feedback</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {
      navigation.navigate("ScreenAI13");
    }}>
        <Text style={styles.buttonText}>Delete Account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {
      navigation.navigate("ScreenAI13");
    }}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  details: {
    fontSize: 18,
    marginBottom: 20
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 20
  },
  button: {
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: "80%"
  },
  buttonText: {
    color: "#fff",
    textAlign: "center"
  }
});
export default ManageSubscriptionScreen;