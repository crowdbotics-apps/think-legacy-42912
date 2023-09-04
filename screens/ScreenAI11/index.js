import React, { useState } from "react";
import { SafeAreaView, Text, TextInput, TouchableOpacity, StyleSheet, Picker } from "react-native";

const PaymentScreen = ({
  navigation
}) => {
  const [amount, setAmount] = useState("");
  const [selectedCard, setSelectedCard] = useState("");
  const cards = ["Card 1", "Card 2", "Card 3"];
  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Payment</Text>
      <TextInput style={styles.input} onChangeText={setAmount} value={amount} placeholder="Payment Amount" keyboardType="numeric" />
      <Text style={styles.label}>
        Choose a payment option from the dropdown menu:
      </Text>
      <Picker selectedValue={selectedCard} style={styles.picker} onValueChange={itemValue => setSelectedCard(itemValue)}>
        {cards.map((card, index) => <Picker.Item key={index} label={card} value={card} />)}
      </Picker>
      <TouchableOpacity style={styles.button} onPress={() => {
      navigation.navigate("ScreenAI12");
    }}>
        <Text style={styles.buttonText}>Add a new card</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {
      navigation.navigate("ScreenAI10");
    }}>
        <Text style={styles.buttonText}>Pay</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Cancel</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 20
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10
  },
  label: {
    fontSize: 18,
    marginBottom: 10
  },
  picker: {
    height: 50,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10
  },
  buttonText: {
    color: "#fff",
    textAlign: "center"
  }
});
export default PaymentScreen;