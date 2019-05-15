import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Flashcard from '../components/Flashcard'
import InputField from '../components/InputField';



export default class CreateSet extends Component {
    render() {
        return (
            <View style={styles.container}>
                <InputField placeholder='Name of set' />
                <Flashcard />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%'
    },
});