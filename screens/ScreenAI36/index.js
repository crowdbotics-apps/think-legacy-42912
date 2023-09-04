import React from 'react';
import { SafeAreaView, View, Text, Image, Button, StyleSheet } from 'react-native';

const ReportScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.companyName}>Company Name</Text>
      </View>
      <View style={styles.reportContainer}>
        <Text style={styles.reportTitle}>Selected Report</Text>
        <Text style={styles.reportContent}>Report generated with templates</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Back" onPress={() => {}} />
        <Button title="Download" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  companyName: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  reportContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10
  },
  reportTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  reportContent: {
    fontSize: 16
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  }
});
export default ReportScreen;