import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux'
import InputField from './InputField'
import { cardstyle } from './CardStyle'
import { COLORS } from '../themes'
import { deleteCard } from '../actions'

class Flashcard extends Component {


    render() {
        return (
            <View style={[styles.container, cardstyle.shadow]}>

                <TouchableOpacity
                    onPress={() => {
                        return this.props.deleteCard(this.props.index)
                    }}
                >
                    <Ionicons
                        style={styles.icon}
                        name="md-close" size={24}
                        color={COLORS.dark} />
                </TouchableOpacity>

                <InputField placeholder='Term' />
                <InputField placeholder='Definition' />
            </View >)
    }
}

const mapDispatchToProps = dispatch => ({
    deleteCard: index => dispatch(deleteCard(index))
})

export default connect(null, mapDispatchToProps)(Flashcard)

const styles = StyleSheet.create({

    container: {
        padding: 8,
        paddingBottom: 24,
        marginRight: 16,
        marginLeft: 16,
        marginTop: 16,
        borderWidth: 0,
        backgroundColor: '#fff',
    },
    icon: {
        alignSelf: 'flex-end',
        paddingRight: 16,
        paddingTop: 16
    }

});
