import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, Image, Picker } from 'react-native';

const ScreenComponent = () => {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [firmName, setFirmName] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [faxNumber, setFaxNumber] = useState('');
  return <SafeAreaView style={_styles.oqPQUmqO}>
      <View style={_styles.OaTpfQti}>
        <Text>Email</Text>
        <TextInput style={_styles.pSPQeqeV} onChangeText={text => setEmail(text)} value={email} />
      </View>
      <View style={_styles.pSmWDGSe}>
        <Text>Phone Number</Text>
        <TextInput style={_styles.lJPGkvpz} onChangeText={text => setPhoneNumber(text)} value={phoneNumber} />
      </View>
      <View style={_styles.bBdivEaw}>
        <Text>Firm Name</Text>
        <TextInput style={_styles.esIVqIpq} onChangeText={text => setFirmName(text)} value={firmName} />
      </View>
      <View style={_styles.NCHcLVih}>
        <Text>Address</Text>
        <TextInput style={_styles.GofYrLrf} onChangeText={text => setAddress(text)} value={address} />
      </View>
      <View style={_styles.ESRreoYG}>
        <Text>Country</Text>
        <Picker selectedValue={country} style={_styles.PfKABCxs} onValueChange={(itemValue, itemIndex) => setCountry(itemValue)}>
          <Picker.Item label="USA" value="usa" />
          <Picker.Item label="Canada" value="canada" />
        </Picker>
      </View>
      <View style={_styles.waukyKrr}>
        <Text>City</Text>
        <Picker selectedValue={city} style={_styles.UlWNZIqI} onValueChange={(itemValue, itemIndex) => setCity(itemValue)}>
          <Picker.Item label="New York" value="newyork" />
          <Picker.Item label="Los Angeles" value="losangeles" />
        </Picker>
      </View>
      <View style={_styles.AarBtaXJ}>
        <Text>State/Province</Text>
        <Picker selectedValue={state} style={_styles.RxfnQkwH} onValueChange={(itemValue, itemIndex) => setState(itemValue)}>
          <Picker.Item label="California" value="california" />
          <Picker.Item label="Texas" value="texas" />
        </Picker>
      </View>
      <View style={_styles.QZjGMksV}>
        <Text>Zipcode</Text>
        <TextInput style={_styles.vDXsnYNB} onChangeText={text => setZipcode(text)} value={zipcode} />
      </View>
      <View style={_styles.dITNUCZU}>
        <Text>Fax Number</Text>
        <TextInput style={_styles.ApRGznPy} onChangeText={text => setFaxNumber(text)} value={faxNumber} />
      </View>
      <View style={_styles.XPoTCLTA}>
        <Text>Logo</Text>
        <Image style={_styles.NVNjCUtZ} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
      </View>
      <Button title="Save" onPress={() => console.log('Saved')} />
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  oqPQUmqO: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  OaTpfQti: {
    width: "80%",
    marginBottom: 20
  },
  pSPQeqeV: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  pSmWDGSe: {
    width: "80%",
    marginBottom: 20
  },
  lJPGkvpz: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  bBdivEaw: {
    width: "80%",
    marginBottom: 20
  },
  esIVqIpq: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  NCHcLVih: {
    width: "80%",
    marginBottom: 20
  },
  GofYrLrf: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  ESRreoYG: {
    width: "80%",
    marginBottom: 20
  },
  PfKABCxs: {
    height: 50,
    width: "100%"
  },
  waukyKrr: {
    width: "80%",
    marginBottom: 20
  },
  UlWNZIqI: {
    height: 50,
    width: "100%"
  },
  AarBtaXJ: {
    width: "80%",
    marginBottom: 20
  },
  RxfnQkwH: {
    height: 50,
    width: "100%"
  },
  QZjGMksV: {
    width: "80%",
    marginBottom: 20
  },
  vDXsnYNB: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  dITNUCZU: {
    width: "80%",
    marginBottom: 20
  },
  ApRGznPy: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  XPoTCLTA: {
    width: "80%",
    marginBottom: 20
  },
  NVNjCUtZ: {
    width: 100,
    height: 100
  }
});