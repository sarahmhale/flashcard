import React, { Component } from 'react';
import { cardstyle } from './CardStyle'

import { COLORS } from '../../themes';
import {
    StyleSheet,
    View,
    Text
} from 'react-native'

export default class SetCard extends Component {


    render() {
        return (
            <View style={[styles.container, cardstyle.shadow]}>
                <Text style={styles.text}>Hello</Text>
            </View>

        )
    }
}


const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontWeight: '500',
        color: COLORS.dark
    },
    container: {
        padding: 32,
        paddingLeft: 24,
        borderWidth: 0,
        backgroundColor: '#fff',

        justifyContent: 'center',
        margin: 16,
        marginBottom: 0,
    }
});