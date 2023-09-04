import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React from 'react';
import { SafeAreaView, ScrollView, View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ScreenComponent = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.section}>
          <Text style={styles.title}>General Questions</Text>
          <Text>List of all questions</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Financial</Text>
          <Text>List of all questions</Text>
        </View>
        {
        /* ... Repeat for all sections ... */
      }
        <View style={styles.section}>
          <Text style={styles.title}>Specific question</Text>
          <Text>List of all members assigned questions</Text>
          <Button title="Assign to member" onPress={() => {}} />
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Specific member - Full Name</Text>
          <Text>Answer provided by the client</Text>
          <TextInput placeholder="Edit answer" />
          <TextInput placeholder="Affirmation" />
          <TextInput placeholder="Comment" />
          <Button title="Save" onPress={() => {}} />
          <Button title="Save and Go next question" onPress={() => {}} />
          <Button title="Next question" onPress={() => {}} />
        </View>
        {
        /* ... Repeat for all sections ... */
      }
        <View style={styles.section}>
          <Pressable onPress={() => {
          navigation.navigate("ScreenAI34");
        }}><Text style={styles.title}>Report - List of all reports</Text></Pressable>
          <Button title="Download report" onPress={() => {}} />
          <Button title="Send report" onPress={() => {}} />
        </View>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5'
  },
  section: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  }
});
export default ScreenComponent;