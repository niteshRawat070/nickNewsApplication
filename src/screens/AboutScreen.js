import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

function AboutScreen(props) {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20, alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>This is a news app which allow user to read the current affair</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    }
});

export default AboutScreen;