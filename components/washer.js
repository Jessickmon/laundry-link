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
                                    Start Washer
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

function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

jQuery(function ($) {
    let fiveMinutes = 60 * 5,
        display = $('#time');
    startTimer(fiveMinutes, display);
});
