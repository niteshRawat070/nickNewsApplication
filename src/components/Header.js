import React from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';

function Header(props) {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: Platform.OS === 'android' ? '#000000' : '#ffffff',
        padding: 15,
        borderBottomColor: Platform.OS === 'android' ? '#ffffff' : '#72bcd4',
        borderBottomWidth: 1
    },
    title: {
        marginTop: 40,
        textAlign: "center",
        fontSize: 20,
        color: Platform.OS === 'android' ? '#ffffff' : '#72bcd4'
    }
});

export default Header;