import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import InputField from './InputField'
import { cardstyle } from './CardStyle'
import { COLORS } from '../themes'

export default class Flashcard extends Component {
    render() {
        return (
            <View style={[styles.container, cardstyle.shadow]}>
                <Ionicons style={styles.icon} name="md-close" size={24} color={COLORS.dark} />
                <InputField placeholder='Term' />
                <InputField placeholder='Definition' />
            </View >)
    }
}

const styles = StyleSheet.create({

    container: {
        padding: 8,
        marginRight: 16,
        marginLeft: 16,
        marginTop: 16,
        borderWidth: 0,
        backgroundColor: '#fff',
    },
    icon: {
        alignSelf: 'flex-end',
        paddingRight: 16,
        paddingTop: 16
    }

});
