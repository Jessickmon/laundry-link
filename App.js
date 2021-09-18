import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import washingMachineButtons from './buttons';

export default function App() {
  const [washers, setWasher] = useState([
    {name: 'Washer 1', key: '1'},
    {name: 'Washer 2', key: '2'},
    {name: 'Washer 3', key: '3'},
    {name: 'Washer 4', key: '4'},
    {name: 'Washer 5', key: '5'},
    {name: 'Washer 6', key: '6'},
  ]);

  const clickHandler = () => {
    setName('Used');
  }

  return (
    <View style={styles.container}>

    { washers.map((item) =>{
      return (
        <View key={item.key}>
          <Text style={styles.item}>{item.name}</Text>
        </View>
      )
    })}
        <View style={styles.buttonContainer}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 140,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 50,
  },
  item: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 40,
    backgroundColor: 'white',
    fontSize: 25,
  },
});
