import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button, Switch, StyleSheet } from 'react-native';

const ManageSubscriptionScreen = () => {
  const [isNotificationEnabled, setNotificationEnabled] = useState(false);
  const [isEmailNotificationEnabled, setEmailNotificationEnabled] = useState(false);
  const [isSMSNotificationEnabled, setSMSNotificationEnabled] = useState(false);

  const toggleNotificationSwitch = () => setNotificationEnabled(previousState => !previousState);

  const toggleEmailNotificationSwitch = () => setEmailNotificationEnabled(previousState => !previousState);

  const toggleSMSNotificationSwitch = () => setSMSNotificationEnabled(previousState => !previousState);

  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Current Plan Details</Text>
      <Text style={styles.details}>Expiry Date: 2022-12-31</Text>
      <Button title="Subscribe" onPress={() => {}} />
      <Button title="Unsubscribe" onPress={() => {}} />
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
      <Button title="Privacy Policy" onPress={() => {}} />
      <Button title="Terms and Conditions" onPress={() => {}} />
      <Button title="Change Password" onPress={() => {}} />
      <Button title="Support/Send Feedback" onPress={() => {}} />
      <Button title="Delete Account" onPress={() => {}} />
      <Button title="Log Out" onPress={() => {}} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  details: {
    fontSize: 18,
    marginBottom: 20
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20
  }
});
export default ManageSubscriptionScreen;