import React, { useState } from "react";
import { SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const SubscriptionScreen = () => {
  const [subscriptionType, setSubscriptionType] = useState("Monthly");

  const handleSubscriptionChange = type => {
    setSubscriptionType(type);
  };

  return <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{
      uri: "https://tinyurl.com/42evm3m3"
    }} />
      <Text style={styles.title}>Choose your plan</Text>
      <View style={styles.plan}>
        <Text style={styles.planTitle}>Free Trial</Text>
        <TouchableOpacity style={styles.button} onPress={() => handleSubscriptionChange("Free Trial")}>
          <Text style={styles.buttonText}>Choose</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.plan}>
        <Text style={styles.planTitle}>Basic Offer</Text>
        <TouchableOpacity style={styles.button} onPress={() => handleSubscriptionChange("Basic Offer")}>
          <Text style={styles.buttonText}>Choose</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.plan}>
        <Text style={styles.planTitle}>Premium Offer</Text>
        <TouchableOpacity style={styles.button} onPress={() => handleSubscriptionChange("Premium Offer")}>
          <Text style={styles.buttonText}>Choose</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.subscriptionType}>
        Subscription type: {subscriptionType}
      </Text>
      <Text style={styles.price}>
        Price: {subscriptionType === "Monthly" ? "$10" : "$100"}
      </Text>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  plan: {
    width: "80%",
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: "#f0f0f0",
    alignItems: "center"
  },
  planTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5
  },
  buttonText: {
    color: "#fff",
    fontSize: 16
  },
  subscriptionType: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10
  }
});
export default SubscriptionScreen;