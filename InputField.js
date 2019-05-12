import React, { Component } from 'react';
import { View, TextInput } from 'react-native';


export default class InputField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            backgroundColor: '#444444'
        };
    }

    onFocus() {
        this.setState({
            backgroundColor: '#F25F5C'
        })
    }

    onBlur() {
        this.setState({
            backgroundColor: '#444444'
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
                    placeholder='Name of the set' />
            </View>
        );
    }
}
