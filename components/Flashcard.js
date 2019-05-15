import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import InputField from './InputField'


export default class Flashcard extends Component {
    render() {
        return (<View style={styles.container}>
            <Text>Hej Jag heter sarag</Text>
            <InputField placeholder='Term' />
        </View>)
    }
}

const styles = StyleSheet.create({

});
