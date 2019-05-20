import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { cardstyle } from './CardStyle'
import { connect } from 'react-redux'
import { addCard } from '../actions'

class AddFlashcard extends Component {
    render() {
        return (

            <TouchableOpacity
                style={[styles.container, cardstyle.shadow]}
                onPress={() => this.props.addCard({ term: 'hej', definition: 'def' })}
            >
                <View>
                    <Ionicons name="md-add-circle" size={42} color="green" />
                </View>
            </TouchableOpacity>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    addCard: card => dispatch(addCard(card))
})

export default connect(null, mapDispatchToProps)(AddFlashcard)

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
