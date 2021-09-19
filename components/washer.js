import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

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
                <View key={item.key} style = {styles.difference}>
                    <Card>
                    <Text style={styles.item}>{item.name}
                        <View style = {styles.align}>
                            <Card.Actions>
                                <Button
                                    onPress={() => {
                                        alert('Washer timer started');
                                    }}
                                    mode="contained"
                                    color= "#2b487a"
                                >
                                    Start Wash
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
        paddingLeft: 210,
    },

    difference: {
        paddingTop: 20
    }
});
