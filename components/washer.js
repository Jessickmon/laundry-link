import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Washer() {
    const [washers, setWasher] = useState([
        { name: 'Washer 1', key: '1' },
        { name: 'Washer 2', key: '2' },
        { name: 'Washer 3', key: '3' },
        { name: 'Washer 4', key: '4' },
        { name: 'Washer 5', key: '5' },
        { name: 'Washer 6', key: '6' },
    ]);
    return (
        <View>
            {washers.map(item => (
                <View key={item.key}>
                    <Text style={styles.item}>{item.name}</Text>
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        borderColor: 'black',
        borderWidth: 1,
        textAlign: "left",
        padding: 30,
        backgroundColor: 'white',
        fontSize: 25,
    }
});
