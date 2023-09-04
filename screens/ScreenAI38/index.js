import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Button, Alert } from 'react-native';

const ChangePasswordScreen = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChangePassword = () => {
    if (newPassword !== confirmPassword) {
      Alert.alert('Error', 'New password and confirm password do not match');
    } else {
      Alert.alert('Success', 'Password changed successfully');
    }
  };

  return <SafeAreaView style={styles.container}>
      <TextInput style={styles.input} onChangeText={setCurrentPassword} value={currentPassword} placeholder="Current Password" secureTextEntry />
      <TextInput style={styles.input} onChangeText={setNewPassword} value={newPassword} placeholder="New Password" secureTextEntry />
      <TextInput style={styles.input} onChangeText={setConfirmPassword} value={confirmPassword} placeholder="Confirm Password" secureTextEntry />
      <Button title="Change Password" onPress={handleChangePassword} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8
  }
});
export default ChangePasswordScreen;