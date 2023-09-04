import React, { useState } from 'react';
import { SafeAreaView, TextInput, Button, Picker, StyleSheet } from 'react-native';

const ScreenComponent = () => {
  const [clientName, setClientName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [meetingDate, setMeetingDate] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [coAdvisor, setCoAdvisor] = useState('');
  const coAdvisors = ['Advisor 1', 'Advisor 2', 'Advisor 3'];
  return <SafeAreaView style={styles.container}>
      <TextInput placeholder="Client Name" value={clientName} onChangeText={setClientName} style={styles.input} />
      <TextInput placeholder="Email Address" value={email} onChangeText={setEmail} style={styles.input} />
      <TextInput placeholder="Phone Number" value={phoneNumber} onChangeText={setPhoneNumber} style={styles.input} />
      <TextInput placeholder="Discovery Meeting Date" value={meetingDate} onChangeText={setMeetingDate} style={styles.input} />
      <TextInput placeholder="Address 1" value={address1} onChangeText={setAddress1} style={styles.input} />
      <TextInput placeholder="Address 2" value={address2} onChangeText={setAddress2} style={styles.input} />
      <Picker selectedValue={country} onValueChange={setCountry} style={styles.input}>
        <Picker.Item label="Country" value="" />
        <Picker.Item label="USA" value="usa" />
        <Picker.Item label="Canada" value="canada" />
      </Picker>
      <Picker selectedValue={city} onValueChange={setCity} style={styles.input}>
        <Picker.Item label="City" value="" />
        <Picker.Item label="New York" value="new_york" />
        <Picker.Item label="Toronto" value="toronto" />
      </Picker>
      <Picker selectedValue={state} onValueChange={setState} style={styles.input}>
        <Picker.Item label="State/Province" value="" />
        <Picker.Item label="New York" value="new_york" />
        <Picker.Item label="Ontario" value="ontario" />
      </Picker>
      <TextInput placeholder="Zip-code" value={zipCode} onChangeText={setZipCode} style={styles.input} />
      <Picker selectedValue={coAdvisor} onValueChange={setCoAdvisor} style={styles.input}>
        <Picker.Item label="Co-Advisor" value="" />
        {coAdvisors.map((advisor, index) => <Picker.Item key={index} label={advisor} value={advisor} />)}
      </Picker>
      <Button title="Invite/Add" onPress={() => {}} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    paddingLeft: 10
  }
});
export default ScreenComponent;