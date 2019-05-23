import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../themes';
import { styles } from './Flashcard';

export class Delete extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<TouchableOpacity onPress={() => {
            return this.props.deleteCard(this.props.index);
        }}>
            <Ionicons style={styles.icon} name="md-close" size={24} color={COLORS.dark} />
        </TouchableOpacity>);
    }
}
