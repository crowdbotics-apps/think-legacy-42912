import React from "react";
import { SafeAreaView, View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native";

const ScreenComponent = () => {
  const menuItems = ["Members", "Engagement", "Vision", "Values", "Goal Clarity / Goal Achievement", "Planning Map", "Closed Goals", "Team", "Complexity & Strategy", "Legacy Questionnaire", "Family Business Questionnaire", "Business Questionnaire", "Family Legacy Questionnaire", "Reports", "Report Builder"];
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={{
        uri: "https://tinyurl.com/42evm3m3"
      }} />
        <Text style={styles.title}>Side Menu</Text>
      </View>
      <ScrollView style={styles.menu}>
        {menuItems.map((item, index) => <TouchableOpacity key={index} style={styles.menuItem}>
            <Text style={styles.menuItemText}>
              {item}
            </Text>
          </TouchableOpacity>)}
      </ScrollView>
    </SafeAreaView>;
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
  menu: {
    padding: 20
  },
  menuItem: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5
  },
  menuItemText: {
    fontSize: 18
  }
});
export default ScreenComponent;