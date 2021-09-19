import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Button, Card} from "react-native-paper";


export default function Dryer() {
    const [dryers, setDryer] = useState([
        { name: 'Dryer 1', key: '1' },
        { name: 'Dryer 2', key: '2' },
        { name: 'Dryer 3', key: '3' },
        { name: 'Dryer 4', key: '4' },
        { name: 'Dryer 5', key: '5' },
        { name: 'Dryer 6', key: '6' },
        { name: 'Dryer 7', key: '7' },
        { name: 'Dryer 8', key: '8' },
        { name: 'Dryer 9', key: '9' },
        { name: 'Dryer 10', key: '10' },
        { name: 'Dryer 11', key: '11' },
        { name: 'Dryer 12', key: '12' },
    ]);
    return (
        <View>
            {dryers.map(item => (
                <View key={item.key} style = {styles.difference}>
                    <Card>
                        <Text style={styles.item}>{item.name}
                            <View style = {styles.align}>
                                <Card.Actions>
                                    <Button
                                        onPress={() => {
                                            alert('Dryer timer started');
                                        }}
                                        mode="contained"
                                    >
                                        Start Dryer!
                                    </Button>
                                </Card.Actions>
                            </View>
                        </Text>
                    </Card>
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        textAlign: "left",
        backgroundColor: 'white',
        fontSize: 25,
        paddingLeft: 50,
        flexDirection: 'row',
        paddingTop: 35
    },

    align: {
        paddingLeft: 200,
    },

    difference: {
        paddingTop: 20
    }
});
