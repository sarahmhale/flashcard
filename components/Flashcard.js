import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import InputField from './InputField'
import { cardstyle } from './CardStyle'

export default class Flashcard extends Component {
    render() {
        return (
            <View style={[styles.container, cardstyle.shadow]}>
                <InputField placeholder='Term' />
                <InputField placeholder='Definition' />
            </View >)
    }
}

const styles = StyleSheet.create({

    container: {
        padding: 16,
        marginTop: 16,
        borderWidth: 0,
        backgroundColor: '#fff',
    }

});
