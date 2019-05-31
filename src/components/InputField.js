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
        this.props.update(this.state.text)
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
