import React, { useState } from 'react';
import { SafeAreaView, TextInput, Button, StyleSheet } from 'react-native';

const ScreenComponent = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [country, setCountry] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpirationDate, setCardExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  return <SafeAreaView style={styles.container}>
      <TextInput style={styles.input} placeholder="First Name" onChangeText={setFirstName} value={firstName} />
      <TextInput style={styles.input} placeholder="Last Name" onChangeText={setLastName} value={lastName} />
      <TextInput style={styles.input} placeholder="Address Line 1" onChangeText={setAddress1} value={address1} />
      <TextInput style={styles.input} placeholder="Address Line 2" onChangeText={setAddress2} value={address2} />
      <TextInput style={styles.input} placeholder="City" onChangeText={setCity} value={city} />
      <TextInput style={styles.input} placeholder="State" onChangeText={setState} value={state} />
      <TextInput style={styles.input} placeholder="Zip" onChangeText={setZip} value={zip} />
      <TextInput style={styles.input} placeholder="Country" onChangeText={setCountry} value={country} />
      <TextInput style={styles.input} placeholder="Card Number" onChangeText={setCardNumber} value={cardNumber} />
      <TextInput style={styles.input} placeholder="Card Expiration Date" onChangeText={setCardExpirationDate} value={cardExpirationDate} />
      <TextInput style={styles.input} placeholder="CVV" onChangeText={setCvv} value={cvv} secureTextEntry />
      <Button title="Add" onPress={() => {}} />
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
    paddingLeft: 10,
    borderRadius: 5
  }
});
export default ScreenComponent;