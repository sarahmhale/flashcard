import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../themes';
import Emoji from 'react-native-emoji';



export default class Header extends React.Component {

    render() {
        return (
            <View style={styles.headerContainer}>
                <Text style={styles.smallTxt}>Hey!</Text>
                <Text style={styles.bigTxt}>
                    Let's Study!
                    <Emoji name="woman-lifting-weights" style={{ fontSize: 28 }} />
                    <Emoji name="books" style={{ fontSize: 28 }} />
                </Text>
            </View>
        )
    }
}

export const styles = StyleSheet.create({

    smallTxt: {
        fontSize: 18,
        fontWeight: '500',
        color: COLORS.secondary
    },
    bigTxt: {
        color: COLORS.dark,
        fontSize: 28,
        fontWeight: '500',

    },
    headerContainer: {
        margin: 16,
        marginTop: 60
    }
});