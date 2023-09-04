import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Button, TextInput, Picker } from 'react-native';

const ScreenComponent = () => {
  return <SafeAreaView style={_styles.TXwyuaMR}>
      <View style={_styles.NOffPoDB}>
        <Button title="Save" onPress={() => {}} />
        <Button title="Cancel" onPress={() => {}} />
        <Text style={_styles.RVTLjRkf}>Goal Template</Text>
        <Text style={_styles.NmqFHeHY}>Goal Clarity</Text>
        <TextInput placeholder="Template Name" style={_styles.EpUNvfir} />
        <TextInput placeholder="Goal Name" style={_styles.sECfHJsN} />
        <TextInput placeholder="Goal Description" style={_styles.hXZmgiIb} />
        <TextInput placeholder="Importance" style={_styles.mZNSCkMd} />
        <TextInput placeholder="Supporting Resources" style={_styles.zyjHDLcf} />
        <TextInput placeholder="Obstacles" style={_styles.HhrVPhAk} />
        <Picker selectedValue="Readiness" style={_styles.nFzTTqvb}>
          <Picker.Item label="Ready" value="ready" />
          <Picker.Item label="Not Ready" value="notReady" />
        </Picker>
        <Text style={_styles.mMGoskZD}>Goal Achievement</Text>
        <TextInput placeholder="Planning Gap" style={_styles.nKSkBzlz} />
        <TextInput placeholder="Place of Most Potential" style={_styles.kseIXSIM} />
        <Picker selectedValue="Strategies" style={_styles.devzIgAv}>
          <Picker.Item label="Strategy 1" value="strategy1" />
          <Picker.Item label="Strategy 2" value="strategy2" />
        </Picker>
      </View>
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  TXwyuaMR: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  NOffPoDB: {
    padding: 20
  },
  RVTLjRkf: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  NmqFHeHY: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10
  },
  EpUNvfir: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginBottom: 10
  },
  sECfHJsN: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginBottom: 10
  },
  hXZmgiIb: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginBottom: 10
  },
  mZNSCkMd: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginBottom: 10
  },
  zyjHDLcf: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginBottom: 10
  },
  HhrVPhAk: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginBottom: 10
  },
  nFzTTqvb: {
    height: 50,
    width: 100
  },
  mMGoskZD: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10
  },
  nKSkBzlz: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginBottom: 10
  },
  kseIXSIM: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginBottom: 10
  },
  devzIgAv: {
    height: 50,
    width: 100
  }
});