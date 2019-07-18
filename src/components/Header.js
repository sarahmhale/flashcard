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
                    <Emoji name="woman-lifting-weights" style={{ fontSize: 14 }} />
                    <Emoji name="books" style={{ fontSize: 14 }} />
                </Text>
            </View>
        )
    }
}

export const styles = StyleSheet.create({

    smallTxt: {
        color: COLORS.secondary
    },
    bigTxt: {
        color: COLORS.dark
    },
    headerContainer: {
        margin: 16,
        marginTop: 36
    }
});