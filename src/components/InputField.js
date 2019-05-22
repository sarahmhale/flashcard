import store from '../store'
import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { COLORS } from '../themes'
import { toggleTheme } from '../actions'


export default class InputField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            backgroundColor: COLORS.unfocused
        };
    }

    onFocus() {
        this.setState({
            backgroundColor: COLORS.focused
        })

        store.dispatch(toggleTheme(COLORS.focused))
    }

    onBlur() {
        this.setState({
            backgroundColor: COLORS.unfocused
        })
        store.dispatch(toggleTheme(COLORS.unfocused))
    }

    render() {
        return (
            <View style={{
                borderBottomColor: this.state.backgroundColor,
                borderBottomWidth: 2,
                height: 30,
                margin: 16
            }}
            >
                <TextInput
                    onChangeText={(text) => this.setState({ text })}
                    onBlur={() => this.onBlur()}
                    onFocus={() => this.onFocus()}
                    value={this.state.text}
                    placeholder={this.props.placeholder} />
            </View>
        );
    }
}
