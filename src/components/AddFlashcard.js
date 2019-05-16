import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { cardstyle } from './CardStyle'


export default class AddFlashcard extends Component {
    render() {
        return (
            <View style={[styles.container, cardstyle.shadow]}>
                <Ionicons name="md-add-circle" size={42} color="green" />
            </View>)
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 24,
        paddingBottom: 24,
        marginTop: 24,
        borderWidth: 0,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
