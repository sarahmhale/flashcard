import React, { Component } from 'react';
import { cardstyle } from '../components/CardStyle'

import {
    View,
    Text
} from 'react-native'

export default class SetCard extends Component {


    render() {
        return (
            <View style={cardstyle.shadow}><Text>Hello</Text></View>

        )
    }
}
