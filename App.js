import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, ScrollView } from 'react-native';
import Header from './components/header';
import Washer from './components/washer';
import Dryer from './components/dryer';
import Navigator from './routes/homeStack';

export default function App() {

  return (
      <View style ={styles.container}>
        <Header />
        <ScrollView>
          <Washer/>
          <Dryer/>
        </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection: "column",
    backgroundColor: '#fff',
    //paddingTop: 100,
    //alignItems: 'left',
    // justifyContent: 'center',
  },
  buttonContainer: {
    //marginTop: 50,
    //flex: 1,
  },
  item: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
    textAlign: "left",
    padding: 30,
    backgroundColor: 'white',
    fontSize: 25,
  },
  header: {
    padding: 30,
    fontSize: 25,
  }
});
