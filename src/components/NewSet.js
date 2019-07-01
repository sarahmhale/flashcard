import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { COLORS } from '../themes'
import { Ionicons } from '@expo/vector-icons';
import { cardstyle } from './CardStyle'
import { connect } from 'react-redux'
import { addSet } from '../actions'

class NewSet extends Component {
    render() {
        return (

            <TouchableOpacity
                style={[styles.container, cardstyle.shadow]}
                onPress={() => this.props.addSet({ id: '1' })}
            >
                <View>
                    <Ionicons name="md-add-circle" size={42} color={COLORS.focused} />
                </View>

            </TouchableOpacity>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    addSet: set => dispatch(addSet(set))
})

export default connect(null, mapDispatchToProps)(NewSet)

const styles = StyleSheet.create({
    container: {
        paddingTop: 24,
        paddingBottom: 24,
        borderWidth: 0,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 16,
    }
});