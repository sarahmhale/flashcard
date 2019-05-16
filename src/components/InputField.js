import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { COLORS } from '../themes'


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
    }

    onBlur() {
        this.setState({
            backgroundColor: COLORS.unfocused
        })
    }

    render() {
        return (
            <View style={{
                borderBottomColor: this.state.backgroundColor,
                borderBottomWidth: 3,
                height: 40,
                width: '100%'
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