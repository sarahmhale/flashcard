import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux'
import InputField from './InputField'
import { cardstyle } from './CardStyle'
import { deleteCard } from '../actions'
import { Delete } from './Delete';


class Flashcard extends Component {


    render() {
        return (
            <View style={[styles.container, cardstyle.shadow]}>
                <Delete deleteCard={this.props.deleteCard} index={this.props.index}></Delete>

                <InputField placeholder='Term' />
                <InputField placeholder='Definition' />
            </View >)
    }
}

const mapDispatchToProps = dispatch => ({
    deleteCard: index => dispatch(deleteCard(index))
})

export default connect(null, mapDispatchToProps)(Flashcard)

export const styles = StyleSheet.create({

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
