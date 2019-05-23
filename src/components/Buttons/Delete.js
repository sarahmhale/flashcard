import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../themes';


export class Delete extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity onPress={() => this.props.deleteCard(this.props.index)}>
                <Ionicons
                    style={styles.icon}
                    name="md-close"
                    size={24}
                    color={COLORS.dark} />
            </TouchableOpacity>);
    }
}

export const styles = StyleSheet.create({
    icon: {
        alignSelf: 'flex-end',
        paddingRight: 16,
        paddingTop: 16
    }
});