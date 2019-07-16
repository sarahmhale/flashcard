import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { connect } from 'react-redux'
import InputField from '../components/InputField'
import { cardstyle } from '../components/CardStyle'
import { deleteCard, updateCard } from '../actions'
import { Delete } from '../components/Buttons/Delete';
import { COLORS } from '../themes'



class Flashcard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: props.term,
            definition: props.definition
        };

        this.updateTerm = this.updateTerm.bind(this);
        this.updateDefinition = this.updateDefinition.bind(this);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState !== nextProps) {
            return {
                definition: nextProps.definition,
                term: nextProps.term
            };
        } return null;
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
        console.log(this.props)
        return (
            <View style={[styles.container, cardstyle.shadow]}>
                <Delete deleteCard={() => this.props.deleteCard(this.props.index, this.props.id)}></Delete>

                <InputField
                    placeholder='Term'
                    value={this.state.term}
                    update={this.updateTerm}
                />
                <Text style={styles.text}>Term</Text>

                <InputField
                    placeholder='Definition'
                    value={this.state.definition}
                    update={this.updateDefinition}
                />
                <Text style={styles.text}>Definition</Text>
            </View >)
    }
}

const mapDispatchToProps = dispatch => ({
    deleteCard: (index, id) => dispatch(deleteCard(index, id)),
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
    text: {
        marginLeft: 16,

        color: COLORS.dark,
        fontSize: 12

    }


});
