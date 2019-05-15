import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import InputField from './InputField'


export default class Flashcard extends Component {
    render() {
        return (
            <View style={[styles.shadow, styles.container]}>
                <InputField placeholder='Term' />
                <InputField placeholder='Definition' />
            </View >)
    }
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 0,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 2,

    },
    container: {
        padding: 16,
        marginTop: 16,
        borderWidth: 0
    }

});
