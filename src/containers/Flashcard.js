import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux'
import InputField from '../components/InputField'
import { cardstyle } from '../components/CardStyle'
import { deleteCard, updateCard } from '../actions'
import { Delete } from '../components/Buttons/Delete';


class Flashcard extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '', definition: '' };

        this.updateTerm = this.updateTerm.bind(this);
        this.updateDefinition = this.updateDefinition.bind(this);
    }

    updateTerm(term) {
        this.setState({ term: term });
        this.props.updateCard({ term: term, definition: this.state.definition, index: this.props.index })
    }

    updateDefinition(def) {
        this.setState({ definition: def });
        this.props.updateCard({ term: this.state.term, definition: def, index: this.props.index })
    }

    render() {
        return (
            <View style={[styles.container, cardstyle.shadow]}>
                <Delete deleteCard={this.props.deleteCard} index={this.props.index}></Delete>
                <InputField placeholder='Term' update={this.updateTerm} />
                <InputField placeholder='Definition' update={this.updateDefinition} />
            </View >)
    }
}

const mapDispatchToProps = dispatch => ({
    deleteCard: index => dispatch(deleteCard(index)),
    updateCard: item => dispatch(updateCard(item))
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


});
