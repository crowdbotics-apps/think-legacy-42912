import React from 'react';
import { SafeAreaView, StyleSheet, Text, Button, ScrollView } from 'react-native';

const TermsAndConditionsScreen = ({
  navigation
}) => {
  const termsAndConditions = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc nec varius pharetra, nibh mi ornare lorem, vitae iaculis nisl nibh in lacus. Fusce purus lorem, pharetra in pharetra in, ullamcorper quis dui. Mauris rutrum, massa non blandit convallis, ipsum ipsum elementum dui, non imperdiet purus mauris sit amet mi. Mauris fermentum dictum magna. Sed laoreet aliquam leo ut tempus. Mauris ac nunc eu sem ultrices semper id in est.";
  return <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>{termsAndConditions}</Text>
      <Text style={styles.DjixAqdn}>{"Terms and conditions"}</Text></ScrollView>
      <Button title="Back" onPress={() => navigation.goBack()} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5'
  },
  scrollView: {
    marginHorizontal: 20
  },
  text: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    marginBottom: 20,
    width: 316,
    height: 275,
    position: "absolute",
    flexDirection: "row",
    flex: 1,
    left: 0,
    top: 89
  },
  DjixAqdn: {
    width: 302,
    height: 51,
    lineHeight: 14,
    fontSize: 31,
    borderRadius: 0,
    position: "absolute",
    left: 4,
    top: 30,
    fontWeight: "700"
  }
});
export default TermsAndConditionsScreen;