import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, Button } from 'react-native';

const ScreenComponent = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Are you sure you want to perform the chosen action?</Text>
        <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI14");
      }}><View style={styles.buttonContainer}>
          <Button title="Yes" onPress={() => {}} style={styles.kMNrHiWH} />
          <Button title="Cancel" onPress={() => {}} style={styles.ZVmJTUUD} />
        </View></Pressable>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  text: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 246,
    height: 32
  },
  ZVmJTUUD: {
    width: 116,
    height: 32
  },
  kMNrHiWH: {
    width: 69,
    height: 32
  }
});
export default ScreenComponent;