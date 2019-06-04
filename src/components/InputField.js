import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';
import { COLORS } from '../themes'



export default class InputField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: COLORS.unfocused
        };
    }
    componentDidMount() {
        this.setState({
            text: this.props.text,

        });
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

            <TextInput style={{
                borderBottomColor: this.state.backgroundColor,
                borderBottomWidth: 2,
                height: 30,
                margin: 16,
                marginBottom: 3,

            }}
                onChangeText={(text) => this.setState({ text })}
                onBlur={() => this.onBlur()}
                onFocus={() => this.onFocus()}
                onChangeText={(text) => this.props.update(text)}
                placeholder={this.props.placeholder}
                value={this.props.value}

            />

        );
    }
}
