import React from 'react';
import { StyleSheet, Text, View, useState } from 'react-native';


export default function Header() {

    return (
        <View style={styles.header}>
            <Text style={styles.title}>Laundry Link</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: '#2b487a'
        //FontFace: 'Consolas',
    },
    title: {
        textAlign: 'center',
        color: "#fff",
        fontSize: 20,
        fontWeight: 'bold',
    }

});