import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';

const TermsScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.title}>{"Privacy Policy"}</Text>
      </View>
      <ScrollView style={styles.content}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eu lorem et ultricies. In porta lorem at dui semper, sit amet ornare nisl ullamcorper. Aliquam ut aliquet lacus. In tristique, justo eget volutpat ornare, ante lorem facilisis diam, quis cursus quam turpis id ipsum.
        </Text>
        <Text style={styles.text}>
          Nulla facilisi. Morbi mollis neque vitae sem rutrum, at elementum sapien pretium. Sed ut purus cursus, aliquet ante ut, egestas turpis. Aenean posuere tortor et mi fermentum congue in vitae erat.
        </Text>
      </ScrollView>
      <View style={styles.footer}>
        <Button title="Back" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  logo: {
    width: 100,
    height: 100
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20
  },
  content: {
    flex: 1,
    padding: 20
  },
  text: {
    fontSize: 16,
    marginBottom: 20
  },
  footer: {
    padding: 20
  }
});
export default TermsScreen;