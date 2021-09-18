import React from 'react';
import { Button, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function washingMachineButtons({ text, onPress }){
    return (
      <TouchableOpacity onPress={onPress}>
        <View style = {styles.button}>
          <Text style = {styles.buttonText}>{ washer }</Text>
        </View>
      </TouchableOpacity>
    )
  
  }

  const styles = StyleSheet.create({
    button: {
      borderRadius: 10,
      paddingVertical: 20,
      paddingHorizontal: 10,
      borderColor: 'black',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center'
    }
  });
  