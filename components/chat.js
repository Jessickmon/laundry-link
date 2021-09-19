import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Image } from 'react-native';


export default function Chat() {
    const [washer, setWasher] = useState('Washer #')
    const [dryer, setDryer] = useState('Dryer #')

    return (
        <View>
            <View style = {styles.textTop}>
                <Text>{"\n"} Washer</Text>
                <TextInput 
                    style={styles.input}
                    placeholder='Washer Number'
                    onChangeText={(val) => setWasher(val) }
                    keyboardType = "number-pad" />
            </View>
            <View style = {styles.newLine}>
                <Text>To </Text>
            </View>
            <View style = {styles.textBottom}>
                <Text>{"\n"}Dryer</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Dryer Number'
                    onChangeText={(val) => setDryer(val) }
                    keyboardType = "number-pad" />
            </View>
            <View>
                <Button
                        title="Send"
                        onPress={() => Alert.alert('Message Sent')}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textTop: {
        flexDirection: 'row',
        flex: 1,
        textAlign: 'center',
        justifyContent: 'center', 
        display:'flex',
        paddingTop: 200,
    },
    textBottom: {
        flexDirection: 'row',
        flex: 1,
        textAlign: 'center',
        justifyContent: 'center', 
        display:'flex',
        paddingTop: 5,
    },
    newLine: {
        flex: 1,
        textAlign: 'center',
        justifyContent: 'center',
        paddingLeft: 205,
        display:'flex',
        paddingTop: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        width: 200,
        display:'flex',
    },
});