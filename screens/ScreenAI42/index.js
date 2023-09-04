import React, { useState } from 'react';
import { SafeAreaView, TextInput, Button, StyleSheet, View } from 'react-native';

const ScreenComponent = () => {
  const [text, setText] = useState('');
  return <SafeAreaView style={styles.container}>
      <TextInput style={styles.input} multiline numberOfLines={10} onChangeText={setText} value={text} placeholder="Enter agreement details here..." />
      <View style={styles.buttonContainer}>
        <Button title="Send to client" onPress={() => {}} />
        <Button title="Edit" onPress={() => {}} />
        <Button title="Save" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16
  },
  input: {
    height: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
export default ScreenComponent;