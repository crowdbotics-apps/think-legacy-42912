import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, Image, ScrollView } from 'react-native';

const ScreenComponent = () => {
  const [affirmation, setAffirmation] = useState('');
  const [comment, setComment] = useState('');
  const dummyData = [{
    title: 'General Questions',
    questions: ['Question 1', 'Question 2']
  }, {
    title: 'Financial Independence',
    questions: ['Question 1', 'Question 2']
  }, {
    title: 'Family Legacy',
    questions: ['Question 1', 'Question 2']
  }, {
    title: 'Social Capital',
    questions: ['Question 1', 'Question 2']
  }, {
    title: 'In Conclusion',
    questions: ['Question 1', 'Question 2']
  }];
  return <SafeAreaView style={_styles.lEhsLmTs}>
      <ScrollView>
        {dummyData.map((item, index) => <View key={index} style={_styles.MrbqcAjn}>
            <Text style={_styles.BmqCcTKh}>{item.title}</Text>
            {item.questions.map((question, i) => <Text key={i} style={_styles.pPXfduKE}>{question}</Text>)}
          </View>)}
        <View style={_styles.DPirqoze}>
          <Text style={_styles.CHUZbSLG}>Specific question</Text>
          <Text style={_styles.AszMUjlR}>Question 1</Text>
          <TextInput style={_styles.jWRBaYwy} onChangeText={text => setAffirmation(text)} value={affirmation} placeholder="Affirmation" />
          <TextInput style={_styles.gznFiImu} onChangeText={text => setComment(text)} value={comment} placeholder="Comment" />
          <Button title="Save" onPress={() => console.log('Save')} />
          <Button title="Save and Go next question" onPress={() => console.log('Save and Go next question')} />
          <Button title="Next question" onPress={() => console.log('Next question')} />
        </View>
        <View style={_styles.nsbGFwyY}>
          <Text style={_styles.ukzWanEl}>Affirmation Statement(s)</Text>
          <Text style={_styles.cfsjLPLL}>Affirmation 1</Text>
          <Text style={_styles.XiGuSLCq}>Affirmation 2</Text>
        </View>
        <View style={_styles.axaBLqLz}>
          <Text style={_styles.GRtimsTf}>Philosophy</Text>
          <Text style={_styles.jPKRbesT}>Philosophy 1</Text>
          <Text style={_styles.mfFwQXll}>Philosophy 2</Text>
        </View>
        <View style={_styles.qkBQDIkA}>
          <Text style={_styles.rNbbWjpI}>Biography</Text>
          <Text style={_styles.JKSIRsYk}>Biography 1</Text>
          <Text style={_styles.QdnNuLlw}>Biography 2</Text>
        </View>
        <View style={_styles.QHsNMngT}>
          <Text style={_styles.vjOiEgsI}>Affirmation Cover</Text>
          <Image style={_styles.ZPUHVLSP} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
        </View>
      </ScrollView>
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  lEhsLmTs: {
    flex: 1,
    backgroundColor: "#fff"
  },
  MrbqcAjn: {
    padding: 20
  },
  BmqCcTKh: {
    fontSize: 20,
    fontWeight: "bold"
  },
  pPXfduKE: {
    fontSize: 16,
    marginTop: 10
  },
  DPirqoze: {
    padding: 20
  },
  CHUZbSLG: {
    fontSize: 20,
    fontWeight: "bold"
  },
  AszMUjlR: {
    fontSize: 16,
    marginTop: 10
  },
  jWRBaYwy: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 10
  },
  gznFiImu: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 10
  },
  nsbGFwyY: {
    padding: 20
  },
  ukzWanEl: {
    fontSize: 20,
    fontWeight: "bold"
  },
  cfsjLPLL: {
    fontSize: 16,
    marginTop: 10
  },
  XiGuSLCq: {
    fontSize: 16,
    marginTop: 10
  },
  axaBLqLz: {
    padding: 20
  },
  GRtimsTf: {
    fontSize: 20,
    fontWeight: "bold"
  },
  jPKRbesT: {
    fontSize: 16,
    marginTop: 10
  },
  mfFwQXll: {
    fontSize: 16,
    marginTop: 10
  },
  qkBQDIkA: {
    padding: 20
  },
  rNbbWjpI: {
    fontSize: 20,
    fontWeight: "bold"
  },
  JKSIRsYk: {
    fontSize: 16,
    marginTop: 10
  },
  QdnNuLlw: {
    fontSize: 16,
    marginTop: 10
  },
  QHsNMngT: {
    padding: 20
  },
  vjOiEgsI: {
    fontSize: 20,
    fontWeight: "bold"
  },
  ZPUHVLSP: {
    width: "100%",
    height: 200,
    marginTop: 10
  }
});